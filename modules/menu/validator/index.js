const Joi = require("joi");
exports.validateMenu = (data) => {
  const joiSchema = Joi.object({
    description: Joi.string().trim().required(),
    weekday: Joi.string().trim().required(),
  });
  return joiSchema.validate(data);
};
