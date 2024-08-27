export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    // error.errors para ver el error completo
    return res.status(400).json(error.errors.map((error) => error.message));
  }
};
