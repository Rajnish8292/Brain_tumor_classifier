import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export async function POST(request) {

    const body = await request.json()
    const {name, email, message} = body
    console.log({name, email, message})
    const transporter = nodemailer.createTransport({
        service: "gmail",  // e.g., Gmail, Outlook, SMTP server
        auth: {
          user: process.env.EMAIL,  // Your email
          pass: process.env.PASSWORD,  // App password or your email password
        },
        secure:true
      });

      try {
        const mailOptions = {
            from: email,
            to: process.env.EMAIL,  // Your receiving email
            subject: `New Message from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
          };
      
          await transporter.sendMail(mailOptions);
      } catch (err) {
        console.error(err)
        return NextResponse.json({
            s: 0,
            error: err
        })
      }
    
    return NextResponse.json({
        s:1
    })
}