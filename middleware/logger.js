const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Call next middleware in chain
  };
  
  module.exports = loggerMiddleware;
  