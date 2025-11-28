import * as yup from 'yup';

// Schema para crear un autor
export const createAutorSchema = yup.object({
  body: yup.object({
    nombre: yup
      .string()
      .required('El nombre es obligatorio')
      .max(150, 'El nombre no puede exceder 150 caracteres')
      .trim(),
    email: yup
      .string()
      .required('El email es obligatorio')
      .email('Debe ser un email válido')
      .max(255, 'El email no puede exceder 255 caracteres')
      .trim()
      .lowercase(),
    imagen: yup
      .string()
      .url('La imagen debe ser una URL válida')
      .max(255, 'La URL de la imagen no puede exceder 255 caracteres')
      .nullable()
      .transform((value) => value || null)
  })
});

// Schema para actualizar un autor
export const updateAutorSchema = yup.object({
  body: yup.object({
    nombre: yup
      .string()
      .max(150, 'El nombre no puede exceder 150 caracteres')
      .trim(),
    email: yup
      .string()
      .email('Debe ser un email válido')
      .max(255, 'El email no puede exceder 255 caracteres')
      .trim()
      .lowercase(),
    imagen: yup
      .string()
      .url('La imagen debe ser una URL válida')
      .max(255, 'La URL de la imagen no puede exceder 255 caracteres')
      .nullable()
      .transform((value) => value || null)
  }).test(
    'at-least-one',
    'Debe proporcionar al menos un campo para actualizar',
    (value) => Object.keys(value).length > 0
  ),
  params: yup.object({
    id: yup
      .number()
      .positive('El ID debe ser un número positivo')
      .integer('El ID debe ser un número entero')
      .required('El ID es obligatorio')
  })
});

// Schema para obtener/eliminar autor por ID
export const autorIdSchema = yup.object({
  params: yup.object({
    id: yup
      .number()
      .positive('El ID debe ser un número positivo')
      .integer('El ID debe ser un número entero')
      .required('El ID es obligatorio')
  })
});
