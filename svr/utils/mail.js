const nodemailer = require("nodemailer");
const crypto = require("crypto");

exports.genToken = async() => {
	let buf = await crypto.randomBytes(20);
	return buf.toString("hex");
}

function send(to, subject, text) {
	let transport = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: process.env.GMAILUSER,
			pass: process.env.GMAILPWD
		}
	})
	let mailOptions = {
        from: process.env.GMAILUSER,
		to, subject, text
    }
	transport.sendMail(mailOptions);
}

const options = {activate};

function activate(to, viewname, id) {
	let subject = "Registration Online Information - Magazine Collection System";
	let text = `Hi ${viewname}, this mail comes from Staywell,

	Please click to the link below for completing the activation of your account:
	"${req.headers.host}/activate/${id}"

	And that's all, thank you for your time. Have a good day and see you later.

	This is the automatic email from the system, please do not reply.`;
	return [to, subject, text];
}

module.exports = { send, options }
