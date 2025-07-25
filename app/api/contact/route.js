import enquiryModel from '../lib/enquiryModel';
import contactSchema from '../lib/validateSchema';
import crypto from 'crypto';

export async function POST(req) {
  const body = await req.json();
  const { name, email, contact, vertical, investment, state, city } = body;

  if (!name || !email || !contact || !vertical || !investment || !state || !city) {
    return Response.json({ error: 'All fields are required' }, { status: 400 });
  }

  const { error } = contactSchema.validate(body);
  if (error) {
    return Response.json({ error: error.details[0].message }, { status: 400 });
  }

  try {
    const enquiry = await enquiryModel.createEnquiry(body);
    return Response.json(enquiry, { status: 201 });
  } catch (err) {
    console.error('Error creating contact:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
