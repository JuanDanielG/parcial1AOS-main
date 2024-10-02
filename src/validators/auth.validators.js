import { checkSchema } from "express-validator";

export const registerValidator = checkSchema({
  doc: {
    notEmpty: true,
    isString: true,
    errorMessage: "Documento invalido",
  },
  username: {
    notEmpty: true,
    isString: true,
    isLength: { options: { min: 2 } },
    errorMessage: "El usuario debe tener al menos 2 caracteres.",
  },
  password: {
    notEmpty: true,
    isString: true,
    isLength: { options: { min: 8 } },
    errorMessage: "La contraseña debe ser de minimo 8 caracteres.",
  },
});

export const loginValidator = checkSchema({
  username: {
    notEmpty: true,
    isString: true,
    errorMessage: "Usuario es requerido.",
  },
  password: {
    notEmpty: true,
    isString: true,
    errorMessage: "Contraseña es requerida.",
  },
});
