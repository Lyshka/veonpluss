import { NextApiRequest } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const email = process.env.EMAIL as string;

export async function POST(req: NextApiRequest) {
  const { message }: { message: string } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: email,
      to: [email],
      subject: "Заявка с сайта",
      html: message || "Ошибка",
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
