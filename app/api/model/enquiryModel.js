import db from '../config/database.js';

const enquiryModel = {
    async createEnquiry(enquiryData) {
        const { name, email, contact, message } = enquiryData;

        if (!name || !email || !contact || !message) {
            throw new Error('All fields are required');
        }

        const query = 'INSERT INTO enquiries (name, email, contact, message) VALUES (?, ?, ?, ?)';
        const [result] = await db.query(query, [name, email, contact, message]);
        return { id: result.insertId, name, email, contact, message };
    }
};

export default enquiryModel;
