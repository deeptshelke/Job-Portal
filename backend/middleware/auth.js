const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');
const User = require("../models/userModel");

// Check if the user is authenticated
exports.isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  // Make sure the token exists
  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user to the request object
    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
};

// middleware admin
exports.isAdmin=(req, res, next) =>{
  if(req.user.role === 0){
    return next (new ErrorResponse('Access denied, you must an Admin', 401));
  }
  next();
}
