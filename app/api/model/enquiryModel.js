import db from "../config/database.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    secure: true, // Use TLS
    port: 587, // Port for secure connection
    tls: {
        rejectUnauthorized: false
    }
});

const enquiryModel = {
  async createEnquiry(enquiryData) {
    const { name, email, contact, vertical, investment, state, city } =
      enquiryData;

    if (
      !name ||
      !email ||
      !contact ||
      !vertical ||
      !investment ||
      !state ||
      !city
    ) {
      throw new Error("All fields are required");
    }

    const query =
      "INSERT INTO enquiries (name, email, contact, vertical, investment, state, city) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const [result] = await db.query(query, [
      name,
      email,
      contact,
      vertical,
      investment,
      state,
      city,
    ]);
    return {
      id: result.insertId,
      name,
      email,
      contact,
      vertical,
      investment,
      state,
      city,
    };
  },
  async checkEmailExists(email, token) {
    const query = "SELECT * FROM enquiries WHERE email = ? AND token = ?";
    const [rows] = await db.query(query, [email, token]);
    return rows.length > 0;
  },
  async insertOrUpdateEmail(email, token) {
    try {
      const existingEmail = await this.checkEmailExists(email, token);

      if (existingEmail) {
        const query = "UPDATE enquiries SET updated_at = NOW() WHERE email = ?";
        await db.query(query, [email]);
        return { message: "Email already exists, timestamp updated." };
      } else {
        const query =
          "INSERT INTO newsletter_subscriptions (email, token, created_at) VALUES (?, ?, NOW())";
        const [result] = await db.query(query, [email, token]);
        return { id: result.insertId, email, message: "New email inserted." };
      }
    } catch (error) {
      console.error("insertOrUpdateEmail error:", error.message);
      throw new Error("Database operation failed.");
    }
  },

  async sendDownloadLink(email, token) {
    const downloadLink = `https://yourdomain.com/download/${token}`;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Download Link",
      text: `Thank you for subscribing! Here is your download link: ${downloadLink}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return { message: "Download link sent successfully." };
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send download link.");
    }
  },
};

export default enquiryModel;
