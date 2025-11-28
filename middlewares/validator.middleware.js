// Middleware genérico para validar con schemas de Yup
export const validate = (schema) => async (req, res, next) => {
  try {
    // Validar el request completo (body, params, query)
    await schema.validate(
      {
        body: req.body,
        params: req.params,
        query: req.query
      },
      { abortEarly: false } // Retorna todos los errores, no solo el primero
    );
    
    next();
  } catch (error) {
    // Si es un error de validación de Yup
    if (error.name === 'ValidationError') {
      const errores = error.inner.map((err) => ({
        campo: err.path.replace(/^(body|params|query)\./, ''), // Remueve el prefijo
        mensaje: err.message
      }));
      
      return res.status(400).json({
        error: 'Error de validación',
        errores
      });
    }
    
    // Otro tipo de error
    next(error);
  }
};
