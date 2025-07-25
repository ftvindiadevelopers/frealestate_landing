import db from './db.js';
import nodemailer from 'nodemailer';

const enquiryModel = {
  async createEnquiry(data) {
    const query = `
      INSERT INTO enquiries (name, email, contact, vertical, investment, state, city)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      data.name,
      data.email,
      data.contact,
      data.vertical,
      data.investment,
      data.state,
      data.city
    ];
    const [result] = await db.query(query, values);
    return { id: result.insertId, ...data };
  },

  async checkEmailExists(email, token) {
    const [rows] = await db.query('SELECT * FROM newsletter_subscriptions WHERE email = ?', [email]);
    return rows.length > 0;
  },

  async insertOrUpdateEmail(email, token) {
    const [existing] = await db.query('SELECT * FROM newsletter_subscriptions WHERE email = ?', [email]);
    if (existing.length > 0) {
      return await db.query('UPDATE newsletter_subscriptions SET token = ? WHERE email = ?', [token, email]);
    }
    return await db.query('INSERT INTO newsletter_subscriptions (email, token) VALUES (?, ?)', [email, token]);
  },

  async sendDownloadLink(email, token) {
    const downloadLink = `https://yourdomain.com/download/${token}`;
    // Send email (simplified example)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Your Company" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: 'Your Download Link',
      html: `<p>Click to download: <a href="${downloadLink}">${downloadLink}</a></p>`,
    });

    return true;
  }
};

export default enquiryModel;
