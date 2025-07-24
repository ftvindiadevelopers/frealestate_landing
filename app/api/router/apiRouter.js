import contactController from '../controller/contactController.js';
import express from 'express';
const apiRouter = express.Router();


// Route to create a new contact enquiry
apiRouter.post('/contact', contactController.createContact);
// Export the API router
export default apiRouter;
