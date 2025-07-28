import {connectToDatabase, closeDatabaseConnection} from '../config/database.js';

export async function createEnquiry(enquiryData) {
    const connecting = await connectToDatabase();
    const {name, email, mobile, vertical, investment, state, city, message} = enquiryData;
    if (!name || !email || !mobile || !vertical || !investment || !state || !city) {
        throw new Error('All fields are required');
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        throw new Error('Name must contain only letters and spaces');
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        throw new Error('Invalid email format');
    }
    if (!/^\d{10}$/.test(mobile)) {
        throw new Error('Mobile number must be 10 digits');
    }
    if (!/^[a-zA-Z\s]+$/.test(vertical)) {
        throw new Error('Vertical must contain only letters and spaces');
    }
    if (!/^[a-zA-Z0-9\s]+$/.test(investment)) {
        throw new Error('Investment must contain only letters, numbers, and spaces');
    }
    if (!/^[a-zA-Z\s]+$/.test(state)) {
        throw new Error('State must contain only letters and spaces');
    }
    if (!/^[a-zA-Z\s]+$/.test(city)) {
        throw new Error('City must contain only letters and spaces');
    }
    // if (!enquiryData.message || enquiryData.message.length < 10) {
    //     throw new Error('Message must be at least 10 characters long');
    // }
 const query = 'INSERT INTO enquiries (full_name, email, mobile, vertical, investment, state, city,message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [name, email, mobile, vertical, investment, state, city, message];
    try {
        const [result] = await connecting.execute(query, values);
        return result.insertId;
    } catch (error) {
        throw error;
    } finally {
        await closeDatabaseConnection(connecting);
    }
}


export async function downloadSalesKit(email) {
    const connecting = await connectToDatabase();

    if (!email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        throw new Error('Invalid email format');
    }
    let checkEmail = email.toLowerCase();
    const currentDataTime = new Date();

    const query = 'SELECT * FROM enquiries WHERE email = ?';
    try {
        const [rows] = await connecting.execute(query, [checkEmail]);
        if (rows.length === 0) {
            const insertEmail = 'INSERT INTO newsletter_subscriptions (email, created_at) VALUES (?, ?)';
            await connecting.execute(insertEmail, [checkEmail, currentDataTime]);
            return { success: true, status: 200, message: 'Email subscribed successfully' };
        }
        if (rows.length > 0) {
            const updateEmail = 'UPDATE newsletter_subscriptions SET created_at = ? WHERE email = ?';
            await connecting.execute(updateEmail, [currentDataTime, checkEmail]);
            return { success: true, status: 201, message: 'Email already exists' };
        }
    } catch (error) {

        throw new Error('Database error');
    } finally {
        await closeDatabaseConnection(connecting);
    }

}