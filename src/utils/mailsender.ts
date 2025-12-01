import { sendEmail } from "../services/mailsender";
import { getWelcomeEmailTemplate } from "../emailtemplates/welcomeTemplate";
import { getPasswordResetEmailTemplate } from "../emailtemplates/passwordResettemplate";

export const sendWelcomeEmail = async (to: string, name: string) : Promise<void> => {
    const subject = "Welcome to TrustFarokht!";
    const html = getWelcomeEmailTemplate(name);
    await sendEmail(to, subject, html);
}

export const sendPasswordResetEmail = async (to: string, resetLink: string) : Promise<void> => {
    const subject = "Password Reset Request";
    const html = getPasswordResetEmailTemplate(resetLink);
    await sendEmail(to, subject, html);
}