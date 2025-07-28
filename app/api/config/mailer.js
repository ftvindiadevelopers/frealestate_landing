import nodemailer from 'nodemailer';

export function getTransporter() {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'smtp.gmail.com',
      port: process.env.MAIL_PORT || 587,
      secure: process.env.MAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER || 'business@ftv.ind.in',
        pass: process.env.MAIL_PASS || 'bohjspazpvctxhmu',
      },
    });
    return transporter;
  } catch (error) {
    console.error('Error creating mail transporter:', error);
    throw error;
  }
}

export async function sendThankyouEmail(to, subject, text) {
  const transporter = getTransporter();
  try {
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM || '"F Real Estate" <business@ftv.ind.in>',
      to,
      subject,
      text,
    });
    // console.log('Email sent:', info.messageId);
    return { success: true, messageId: info.messageId , message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending thank you email:', error);
    throw new Error('Failed to send thank you email');
  }
}
export async function sendSalesKitEmail(to, subject, text) {
  const transporter = getTransporter();
  try {
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM || '"Real Estate" <business@ftv.ind.in>',
      to,
      subject,
      text,
    });
    // console.log('Email sent:', info.messageId, { message: 'Sales kit email sent successfully' });
    return { success: true, messageId: info.messageId, message: 'Sales kit email sent successfully' };
  } catch (error) {
    console.error('Error sending sales kit email:', error);
    throw new Error('Failed to send sales kit email');
  }
}