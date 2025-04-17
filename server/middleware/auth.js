const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');
const User = require("../models/userModel");

// check if user is authenticated
// if user is not created (without sign in) then user will not get access
exports.isAuthenticated = async (req, res, next) => {
    
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGNmOWY1MjQzMWNlMTRhYzZmNmRhNyIsImlhdCI6MTcwNDM0NTM3OSwiZXhwIjoxNzA0MzQ4OTc5fQ.CTxoCAZSKA_kNyISUoCBl8TEHHgcrBkvTbZr_xkM9Yo"
    const token = req.headers.authorization;
    console.log('token : ')
    console.log(token)

    // Make sure token exists
    if (!token) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id); // req.user is user model. 
        next();

    } catch (error) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }
}

//middleware for admin
exports.isAdmin = (req, res, next) => {
    if (req.user.role === 0) {
        return next(new ErrorResponse('Access denied, you must an admin', 401));
    }
    next();
}