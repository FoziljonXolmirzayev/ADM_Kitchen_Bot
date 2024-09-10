const Joi = require("joi");

exports.validateUser = (data) => {
  const joiSchema = Joi.object({
    name: Joi.string().trim().required(),
    tableId: Joi.string().trim().required(),
    telegramId: Joi.number().required(),
  });
  return joiSchema.validate(data);
};
