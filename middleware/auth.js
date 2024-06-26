// Import necessary modules
import jwt from "jsonwebtoken";

// Define middleware function
const auth = (req, res, next) => {
  try {
    // Check if Authorization header is present
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).send("Authorization header missing");
    }
    
    // Extract token from Authorization header
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).send("Token not found in header");
    }
    
    // Verify token
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      return res.status(401).send("Invalid token");
    }
    
    // Set userId from token payload to req.locals for use in subsequent middleware/controllers
    req.locals = verifyToken.userId;
    
    // Call next middleware/controller
    next();
  } catch (error) {
    console.error("Error in authentication middleware:", error);
    return res.status(500).send("Internal server error");
  }
};

// Export middleware function
export default auth;
