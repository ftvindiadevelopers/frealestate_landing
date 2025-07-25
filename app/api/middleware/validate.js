import joi from 'joi';
// Define the schema for contact validation
const contactSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    contact: joi.string().pattern(/^[0-9]{10}$/).required(),
    vertical: joi.string().required(),
    investment: joi.string().required(),
    state: joi.string().required(),
    city: joi.string().required()
});

export default contactSchema;
