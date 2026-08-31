const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);

  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map(
      (error) => error.message
    );

    return res.status(422).json({
      message: "Validation failed",
      errors: messages,
    });
  }

  if (err.code === 11000) {
    return res.status(409).json({
      message: "A resource with this value already exists",
    });
  }

  return res.status(err.statusCode || 500).json({
    message: err.message || "Something went wrong",
  });
};

module.exports = errorMiddleware;
