import enquiryModel from '@/app/lib/enquiryModel';
import crypto from 'crypto';

export async function POST(req) {
  const body = await req.json();
  const email = body.email?.toLowerCase();

  if (!email) {
    return Response.json({ error: 'Email is required' }, { status: 400 });
  }

  const token = crypto.randomBytes(16).toString('hex');

  try {
    const exists = await enquiryModel.checkEmailExists(email);
    
    if (!exists) {
      const insert = await enquiryModel.insertOrUpdateEmail(email, token);
      if (!insert) {
        return Response.json({ error: 'Failed to subscribe to newsletter' }, { status: 500 });
      }

      const mailStatus = await enquiryModel.sendDownloadLink(email, token);
      if (!mailStatus) {
        return Response.json({ error: 'Failed to send download link' }, { status: 500 });
      }

      return Response.json({ message: 'Email subscribed successfully', downloadLink: `https://yourdomain.com/download/${token}` });
    }

    return Response.json({ error: 'Email already subscribed' }, { status: 409 });
  } catch (err) {
    console.error('Download error:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
