import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import { sendSalesKitEmail } from '../config/mailer.js';

export async function handleSaleskitRequest(req) {
  const { email } = await req.json();

  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  const downloadLink = `${process.env.BASE_URL}/api/saleskits?token=${token}`;

  const subject = "Download Your Sales Kit";
  const text = "Click the link to download your sales kit: " + downloadLink;
  await sendSalesKitEmail(email, subject, text);

  return new Response(JSON.stringify({ message: "Sales kit download link sent to your email" }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function handleSaleskitDownload(req) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');

  if (!token) {
    return new Response(JSON.stringify({ error: "Token required" }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    const filePath = path.join(process.cwd(), 'public', 'saleskit', 'saleskit.pdf');

    if (!fs.existsSync(filePath)) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="saleskit.pdf"',
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid or expired token" }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
