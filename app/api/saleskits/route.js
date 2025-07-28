import { handleSaleskitRequest, handleSaleskitDownload } from '../controllers/saleskitController';

export async function POST(req) {
  return handleSaleskitRequest(req);
}
export async function GET(req) {
  return handleSaleskitDownload(req);
}
