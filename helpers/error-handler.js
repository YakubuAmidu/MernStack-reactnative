function errorHandler(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    // Jwt authentication error
    return res.status(401).json({ message: 'The user is not Authorized' });
  }

  if (err.name === 'ValidationError') {
    // Validation error
    return res.status(401).json({ message: err });
  }
  // default to 500 server error
  return res.status(500).json(err);
}
