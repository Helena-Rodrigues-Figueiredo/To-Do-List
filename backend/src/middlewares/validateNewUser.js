const Joi = require('joi');

const createUserJoi = Joi.object({
    name: Joi.string().min(3).required().messages({
      'string.empty': 'Preencha seu nome',
      'string.min': 'O nome deve ter no mínimo 3 caracteres',
      'string.base': 'Preencha seu nome',
      'any.required': `Preencha seu nome`
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Deve ser inserido um email válido no formato: user@email.com',
        'string.base': 'Preencha seu email',
        'string.empty': 'Preencha seu email',
        'any.required': 'Preencha seu email'
      }),
    password: Joi.string().min(6).required().messages({
        'string.base': 'Preencha sua senha',
        'string.empty': 'Preencha sua senha',
        'any.required': 'Preencha sua senha',
        'string.min': 'A senha deve ter no mínimo 6 caracteres',
      }),
});

module.exports = (req, res, next) => {
    const { name, email, password } = req.body;

    const { error } = createUserJoi.validate({
        name,
        email,
        password
      });

      if (error) {
        const errorMessage = error.details[0].message;
        return res.status(400).json({ message: errorMessage });
      }

      next();
};