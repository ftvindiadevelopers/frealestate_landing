import joi from 'joi';
// Define the schema for contact validation
const contactSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    contact: joi.string().pattern(/^[0-9]{10}$/).required(),
});

export default contactSchema;
