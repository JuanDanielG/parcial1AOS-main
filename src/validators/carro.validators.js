import { checkSchema } from "express-validator";

export const getCarroValidator = checkSchema(
    {
        id_carro: {
            in: ['params'],
            isInt: {
                errorMessage: 'El ID del carro debe ser un número entero'
            },
            toInt: true
        }
    }
);

export const postCarroValidator = checkSchema(
    {
        nombre: {
            notEmpty: {
                errorMessage: 'El nombre no puede estar vacío'
            },
            isString: {
                errorMessage: 'El nombre debe ser una cadena de texto'
            },
            isLength: {
                options: { min: 2, max: 50 },
                errorMessage: 'El nombre debe tener entre 2 y 50 caracteres'
            }
        },
        anyo: {
            isInt: {
                errorMessage: 'El año debe ser un número entero'
            },
            toInt: true
        },
        empresa: {
            notEmpty: {
                errorMessage: 'La empresa no puede estar vacía'
            },
            isString: {
                errorMessage: 'La empresa debe ser una cadena de texto'
            },
            isLength: {
                options: { min: 2, max: 50 },
                errorMessage: 'La empresa debe tener entre 2 y 50 caracteres'
            }
        },
        id_modelo: {
            notEmpty: {
                errorMessage: 'id_modelo no puede estar vacío'
            },
            isInt: {
                errorMessage: 'id_modelo debe ser un número entero'
            },
            toInt: true
        },
        id_color: {
            notEmpty: {
                errorMessage: 'id_color no puede estar vacío'
            },
            isInt: {
                errorMessage: 'id_color debe ser un número entero'
            },
            toInt: true
        },
        id_motor: {
            notEmpty: {
                errorMessage: 'id_motor no puede estar vacío'
            },
            isInt: {
                errorMessage: 'id_motor debe ser un número entero'
            },
            toInt: true
        }
    }
);

export const putCarroValidator = checkSchema(
    {
        id_carro: {
            in: ['params'],
            isInt: {
                errorMessage: 'El ID del carro debe ser un número entero'
            },
            toInt: true
        },
        nombre: {
            optional: true, 
            isString: {
                errorMessage: 'El nombre debe ser una cadena de texto'
            },
            isLength: {
                options: { min: 2, max: 50 },
                errorMessage: 'El nombre debe tener entre 2 y 50 caracteres'
            }
        },
        anyo: {
            optional: true,
            isInt: {
                errorMessage: 'El año debe ser un número entero'
            },
            isLength: {
                options: { min: 4, max: 4 },
                errorMessage: 'El año debe tener 4 dígitos'
            },
            toInt: true
        },
        empresa: {
            optional: true,
            isString: {
                errorMessage: 'La empresa debe ser una cadena de texto'
            },
            isLength: {
                options: { min: 2, max: 50 },
                errorMessage: 'La empresa debe tener entre 2 y 50 caracteres'
            }
        }
    }
);
