const nodemailer = require("nodemailer");
const crypto = require("crypto");
const emoji = require("node-emoji");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const {GMAILUSER, CLIENTID, CLIENTSECRET, REFRESHTOKEN, GGOAUTHLINK} = process.env;

exports.genToken = async() => {
	let buf = await crypto.randomBytes(20);
	return buf.toString("hex");
}

const oauth2Client = new OAuth2(CLIENTID, CLIENTSECRET, GGOAUTHLINK);
oauth2Client.setCredentials({ refresh_token: REFRESHTOKEN });
const accessToken = oauth2Client.getAccessToken();

async function send(to, subject, text) {
	let transport = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			type: "OAuth2",
			user: GMAILUSER,
			clientId: CLIENTID,
			clientSecret: CLIENTSECRET,
			refreshToken: REFRESHTOKEN,
			access: accessToken
		}
	})
	let mailOptions = {
        from: process.env.GMAILUSER,
		to, subject, text
    }
	await transport.sendMail(mailOptions);
}

const options = {activate};

function activate(to, viewname, id, host) {
	let subject = emoji.emojify(`:closed_lock_with_key: Activate your account - Staywell`);
	let text = `
	Good day ${viewname}, this mail comes from Staywell,

	Please click to the link below for completing the activation of your account:
	https://${host}/activate/${id}

	And that's all, thank you for your time. Have a good day and see you later.

	This is the automatic email from the system, please do not reply.`;
	return [to, subject, text];
}

module.exports = { send, options }
