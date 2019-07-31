const nodemailer = require("nodemailer");
const crypto = require("crypto");

exports.getToken = async() => {
	let buf = await crypto.randomBytes(20);
	return buf.toString("hex");
}

exports.transportMail = (to, subject, text) => {
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

// exports.genAccMail = (password, to, userType) => {
// 	let subject = "Registration Online Information - Magazine Collection System";
// 	let text = `Hello, this mail is from Magazine Collection System,
//
// Your information has been verified and below here is the password for your ${userType} account:
// "${password}"
//
// This is the automatic email from the system, please do not reply.`;
// 	return [to, subject, text];
// }
