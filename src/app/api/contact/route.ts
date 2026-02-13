import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function esc(s: string) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  try {
    const { nombre, apellido, empresa, email, asunto, mensaje, website } =
      await req.json();

    // honeypot: si viene lleno, respondemos OK pero no enviamos nada
    if (website && String(website).trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (!nombre || !apellido || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    // validacion minima de email
    const emailStr = String(email).trim();
    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
    if (!looksLikeEmail) {
      return NextResponse.json(
        { ok: false, error: "Email inválido." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT || "465"),
      secure: true, 
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
      tls: { rejectUnauthorized: false },
    });

    const subject = `[Web] ${asunto}`;

    const html = `
      <h3>Nuevo mensaje desde la web</h3>
      <p><strong>Nombre:</strong> ${esc(nombre)} ${esc(apellido)}</p>
      <p><strong>Empresa:</strong> ${esc(empresa || "-")}</p>
      <p><strong>Email:</strong> ${esc(emailStr)}</p>
      <p><strong>Asunto:</strong> ${esc(asunto)}</p>
      <p><strong>Mensaje:</strong><br/>${esc(mensaje).replace(
        /\n/g,
        "<br/>"
      )}</p>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER!,
      to: process.env.MAIL_TO || process.env.SMTP_USER!,
      replyTo: emailStr, // CLAVE: responder directo al usuario
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Error interno enviando el mensaje." },
      { status: 500 }
    );
  }
}
