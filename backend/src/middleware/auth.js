function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      return res.status(401).json({ error: 'Authorization header is missing' });
    }
  
    // Implement your authentication logic here
    // For example, verify a JWT token
  
    next();
  }
  
  module.exports = authenticate;