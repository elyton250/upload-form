const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log(`response: ${res.statusCode}`);
    next(); // Call the next middleware function in the stack
  };
  
  module.exports = loggerMiddleware;
  