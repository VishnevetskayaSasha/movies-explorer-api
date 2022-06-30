const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const validatelink = (value) => {
  if (!validator.isURL(value, { require_protocol: true })) {
    throw new Error('Неправильный формат URL');
  }
  return value;
};

module.exports.validatyUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
  }),
});

module.exports.validatySigUp = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.validatySigIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.validateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().custom(validatelink).required(),
    trailerLink: Joi.string().custom(validatelink).required(),
    thumbnail: Joi.string().custom(validatelink).required(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

module.exports.validateDeleteMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24).required(),
  }),
});
