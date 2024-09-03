import nodemailer from "nodemailer";
import { ApiResponse } from "@/types/apiResponse";



const TOKEN = "cbc15e90af5c64e37a0d0cee90da0c42";
export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    // Configure your SMTP server

    //TESTING

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "1bd7cd1fae49bd",
        pass: "21e2772c2d8a6f",
      },
    });
   

    

    const mailOptions = {
      from: "YourApp <saurabhchaudhary9799@gmail.com>",
      to: email,
      subject: "Verification Code",
      text: `Hello ${username}, your verification code is ${verifyCode}`,
    };
   
    console.log(mailOptions);
    await transporter.sendMail(mailOptions);

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Error occured during sending email" };
  }
}
