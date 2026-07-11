import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, email, company, type, message } = data;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const recipientEmail = process.env.NEXT_PUBLIC_EMAIL;
    const smtpPassword = process.env.SMTP_PASSWORD;
    if (!recipientEmail || !smtpPassword) {
      console.error('Missing SMTP credentials or recipient email in environment variables.');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: recipientEmail,
        pass: smtpPassword,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Website Inquiry: ${type} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #071A2F; border-bottom: 2px solid #B87333; padding-bottom: 10px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Inquiry Type:</strong> ${type}</p>
          <div style="margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="background: #F7F3EA; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}