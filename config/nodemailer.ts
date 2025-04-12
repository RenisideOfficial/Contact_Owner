import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

if (!email || !pass) {
  throw new Error("failed to process env variables");
}

export const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  to: email,
  from: email,
};
