'use server';

import nodemailer from 'nodemailer';

export type ContactState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

export async function sendMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name    = (formData.get('name')    as string | null)?.trim();
  const email   = (formData.get('email')   as string | null)?.trim();
  const subject = (formData.get('subject') as string | null)?.trim();
  const body    = (formData.get('body')    as string | null)?.trim();

  if (!name || !email || !body) {
    return { status: 'error', message: 'Name, email, and message are required.' };
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' };
  }

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transport.sendMail({
    from:     `"${name}" <${process.env.SMTP_USER}>`,
    replyTo:  email,
    to:       process.env.CONTACT_TO,
    subject:  subject ? `[Portfolio] ${subject}` : `[Portfolio] Message from ${name}`,
    text:     `Name: ${name}\nEmail: ${email}\n\n${body}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
      <hr />
      <p style="white-space:pre-wrap">${body}</p>
    `,
  });

  return { status: 'success', message: 'Message sent — I\'ll be in touch soon.' };
}
