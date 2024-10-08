const nodemailer = require('nodemailer');

const sendMail = async(options)=>{
    try{
        const transporter = nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            port:process.env.SMTP_PORT,
            service:process.env.SMTP_SERVICE,
            auth:{
                user:process.env.SMTP_MAIL,
                pass:process.env.SMTP_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    
        const mailOptions = {
            from: process.env.SMTP_MAIL,
            to: options.email,
            subject: options.subject,
            text: options.message
        };
    
        await transporter.sendMail(mailOptions);
        console.log('email sent successfully');
    }catch(error){
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
   
}

module.exports = sendMail;