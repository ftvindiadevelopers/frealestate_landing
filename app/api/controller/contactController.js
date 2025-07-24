import enquiryModel from '../model/enquiryModel.js';

const contactController = {
    async createContact(req, res) {
        const { name, email, contact } = req.body;

        if (!name || !email || !contact) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Validate the contact details
        const { error } = contactSchema.validate({ name, email, contact });

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
      
        try {
            const enquiry = await enquiryModel.createEnquiry({ name, email, contact });
            return res.status(201).json(enquiry);
        } catch (error) {
            console.error('Error creating contact:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
};

const downloadWithEmail = (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }


    res.status(200).json({ message: `File download initiated for ${email}` });
};

export default contactController;
