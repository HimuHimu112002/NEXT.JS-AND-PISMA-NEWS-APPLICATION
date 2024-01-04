const nodemailer = require("nodemailer");

async function EmailSend(email, code) {
   
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mdhmaktaruzzaman9101@gmail.com",
        pass: "mopgvxmusxutzubs",
      },

    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'News Application',
      to: email,
      subject: "News Application Verification Email",
      text: `Welcome`,
      html:`<h1 style="font-family: Arial, Helvetica, sans-serif;color: #262626;">NewsApp</h1> <h2 style="font-family: Arial, Helvetica, sans-serif;font-size: 34px; color: #262626;">Please Verification your email</h2> <p style="font-family: Arial, Helvetica, sans-serif;">Welcome to our news application. For continue please verify your email.</p><br/><h5>Otp Number : ${code}</h5>`,

    });
  
}

module.exports = EmailSend