// logger.js

const logger = (req, res, next) => {
    // Log information about the incoming request
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  
    // Call the next middleware in the stack
    next();
  };
  
  export default logger;
  