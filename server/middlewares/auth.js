const User = require("../models/User");
const { verifyToken } = require("../utils/tokens");

const validateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = verifyToken(token);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const validateRole = async (category) => {
  return async (req, res, next) => {
    try {
      const userId = req.userId;
      const user = await User.findByPk(userId);

      if (!user || !user.category || !category.includes(user.category)) {
        return res.status(403).json({ message: "Access forbidden" });
      }
      next();
    } catch (error) {
      console.error("Error validating user role:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
};

module.exports = { validateToken, validateRole };
