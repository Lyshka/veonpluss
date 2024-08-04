import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: "Sending",
      text: `TEST`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(info.response);
    return NextResponse.json({ success: true, message: "success" });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "error",
      },
      { status: 500 }
    );
  }
}
