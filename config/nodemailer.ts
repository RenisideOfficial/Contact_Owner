import nodemailer from "nodemailer";

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS

if (!email || !pass) {
    throw new Error("Email or Email_Pass env variables not configured!");
}

export const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass,
    }
})

export const mailOption = ({
    to: email,
    from: email,
})