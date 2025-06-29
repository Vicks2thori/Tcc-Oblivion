//clientDto.js
const Joi = require('joi');

const createClientSchema = Joi.object({
  user_id: Joi.number().min(1).max(65535).required(),
  cpf: Joi.string().length(11).required(),
  phone: Joi.string().length(11).required()
});

const updateClientSchema = Joi.object({
  cpf: Joi.string().length(11).optional(),
  phone: Joi.string().length(11).optional()
});

module.exports = { 
  createClientSchema, 
  updateClientSchema };
