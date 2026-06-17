const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  let token;

  // Check authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      // Save decoded data to request
      req.user = decoded;

      next();
    } catch (error) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      message: "No token found",
    });
  }
};

module.exports = protect;