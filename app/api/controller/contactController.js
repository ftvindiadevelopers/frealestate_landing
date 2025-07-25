import enquiryModel from '../model/enquiryModel.js';
import contactSchema from '../middleware/validate.js';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';


const contactController = {
    async createContact(req, res) {
        const { name, email, contact, vertical, investment, state, city } = req.body;
        if (!name || !email || !contact || !vertical || !investment || !state || !city) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        // Validate the contact details
        const { error } = contactSchema.validate({ name, email, contact, vertical, investment, state, city });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        try {
            const enquiry = await enquiryModel.createEnquiry({ name, email, contact, vertical, investment, state, city });
            return res.status(201).json(enquiry);
        } catch (error) {
            console.error('Error creating contact:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    },
    async downloadWithEmail(req, res) {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }
        let checkEmail = email.toLowerCase();
            const token = crypto.randomBytes(16).toString('hex');

        let checkEmailExists = await enquiryModel.checkEmailExists(checkEmail, token);
        if (!checkEmailExists) {
            let query = await enquiryModel.insertOrUpdateEmail(checkEmail, token );
            if (!query) {
                return res.status(500).json({ error: 'Failed to subscribe to newsletter' });
            }

          
            const downloadLink = `https://yourdomain.com/download/${token}`;
            // Here you would typically send the download link to the user's email
           let result = await enquiryModel.insertOrUpdateEmail(checkEmail, token);

            // Here you would typically store the token in your database with an expiration time
            if (!result) {
                return res.status(500).json({ error: 'Failed to generate download link' });
            }   

            const mailStatus = await enquiryModel.sendDownloadLink(checkEmail, token);
            if (!mailStatus) {
                return res.status(500).json({ error: 'Failed to send download link' });
            }
            // Respond with the download link
            return res.status(200).json({ message: 'Email subscribed successfully', downloadLink });
        }

        return res.status(404).json({ error: 'Email not found' });
    },

                


};
export default contactController;


