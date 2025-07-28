import { handleCreateEnquiry } from '../controllers/enquiryController.js';

export async function POST(req) {
    // console.log(req);
  try {
    const enquiryData = await req.json(); // Parse JSON body here in route
    const response = await handleCreateEnquiry(enquiryData); // Pass plain JS object to controller

    return new Response(JSON.stringify(response), {
      status: response.status || 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in enquiry route:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
