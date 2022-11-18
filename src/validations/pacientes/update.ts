import { validate, Joi } from "express-validation";

export default validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        idade: Joi.date().required()
    }),
});