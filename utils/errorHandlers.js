function errorHandler(err, req, res, next) {
    // Log the error for debugging purposes
    console.error(err);
  
    // Default error response
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
  
  }
  
  module.exports = errorHandler;
  