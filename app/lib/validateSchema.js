import Joi from 'joi';

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  contact: Joi.string().required(),
  vertical: Joi.string().required(),
  investment: Joi.string().required(),
  state: Joi.string().required(),
  city: Joi.string().required(),
});

export default contactSchema;