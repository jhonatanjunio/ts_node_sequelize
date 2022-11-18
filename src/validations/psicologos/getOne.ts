import { validate, Joi } from "express-validation";

export default validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),
});