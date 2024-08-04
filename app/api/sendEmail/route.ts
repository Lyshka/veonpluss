import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.agrostroyservis.com",
      port: 25,
      secure: false,
      auth: {
        user: "info@agrostroyservis.com",
        pass: "lS9wU2iE9g",
      },
    });

    const mailOptions = {
      from: "info@agrostroyservis.com",
      to: "lesha_novitskiy@mail.ru",
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
