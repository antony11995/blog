import * as yup from 'yup';

// Schema para crear un post
export const createPostSchema = yup.object({
  body: yup.object({
    titulo: yup
      .string()
      .required('El título es obligatorio')
      .max(255, 'El título no puede exceder 255 caracteres')
      .trim(),
    descripcion: yup
      .string()
      .required('La descripción es obligatoria')
      .trim(),
    categoria: yup
      .string()
      .required('La categoría es obligatoria')
      .max(100, 'La categoría no puede exceder 100 caracteres')
      .trim(),
    autor_id: yup
      .number()
      .positive('El autor_id debe ser un número positivo')
      .integer('El autor_id debe ser un número entero')
      .required('El autor_id es obligatorio')
  })
});

// Schema para actualizar un post
export const updatePostSchema = yup.object({
  body: yup.object({
    titulo: yup
      .string()
      .max(255, 'El título no puede exceder 255 caracteres')
      .trim(),
    descripcion: yup
      .string()
      .trim(),
    categoria: yup
      .string()
      .max(100, 'La categoría no puede exceder 100 caracteres')
      .trim(),
    autor_id: yup
      .number()
      .positive('El autor_id debe ser un número positivo')
      .integer('El autor_id debe ser un número entero')
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

// Schema para obtener/eliminar post por ID
export const postIdSchema = yup.object({
  params: yup.object({
    id: yup
      .number()
      .positive('El ID debe ser un número positivo')
      .integer('El ID debe ser un número entero')
      .required('El ID es obligatorio')
  })
});

// Schema para obtener posts por autor
export const postsByAutorSchema = yup.object({
  params: yup.object({
    autorId: yup
      .number()
      .positive('El autorId debe ser un número positivo')
      .integer('El autorId debe ser un número entero')
      .required('El autorId es obligatorio')
  })
});
