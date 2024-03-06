import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
    mailTransport() {
        const transporter = nodemailer.createTransport({
            host: "smtp.forwardemail.net",
            port: 465,
            secure: true,
            auth: {
                user: 'user',
                pass: 'pass'
            },
        });
        return transporter
    }
}
