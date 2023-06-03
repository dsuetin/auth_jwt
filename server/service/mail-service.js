const nodemailer = require('nodemailer');
require('dotenv').config({ path: require('find-config')('.env') })
class MailService {
    
    constructor() {
        console.log('process.env.SMTP_HOST', process.env.SMTP_HOST);
        console.log('process.env.SMTP_PORT', process.env.SMTP_PORT);
        console.log('process.env.SMTP_USER', process.env.SMTP_USER);
        console.log('process.env.SMTP_PASSWORD', process.env.SMTP_PASSWORD);
        this.transporter = nodemailer.createTransport( {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.APP_PASSWORD
            }
        });
    };

    async sendActivationMail(to, link) {
        console.log('in sendActivationMail to', to)
        console.log('in sendActivationMail link', link)
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Acount activation on ' + process.env.API_URL,
            text: '',
            html: 
            `
                <div>
                    <h1> Для активации перейдите по ссылке </h1>
                    <a href="${link}">${link}</a>
                </div>
            `,
        })
    }
}

module.exports = new MailService();