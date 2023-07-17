function handleServiceError(error, serviceName) {
    console.error(`[${serviceName}] Service Error:`, error.message);
  
  }
  
  module.exports = {
    handleServiceError,
  };
  