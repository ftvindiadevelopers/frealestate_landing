import { createEnquiry } from "../models/enquiry.js";
import { sendThankyouEmail, sendSalesKitEmail } from "../config/mailer.js";


export async function handleCreateEnquiry(enquiryData) {
  try {

    const enquiryId = await createEnquiry(enquiryData);

    // Email
    const { email, name } = enquiryData;
    const subject = "Thank You for Your Enquiry";
    const text = `Dear ${name},\n\nThank you for your enquiry. We will get back to you shortly.\n\nBest regards,\nF Real Estate Team`;

    const mailSent = await sendThankyouEmail(email, subject, text);
    if (mailSent.success) {
      return new Response(JSON.stringify({ id: enquiryId , message: "Enquiry created successfully and email sent" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({ 
        error: "Failed to send email",
        message: "Enquiry created but email sending failed"
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    console.error("Error creating enquiry:", error);
    return new Response(JSON.stringify({ 
      error: "Internal Server Error",
      message: "Failed to create enquiry"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}



