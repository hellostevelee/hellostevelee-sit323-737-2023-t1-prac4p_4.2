const jwt = require('jsonwebtoken');
const SECRET_KEY = 'MY-SECRET-KEY';
exports.auth = (req, res, next) => {
    // completed authenticate
    try {
        // req.headers.authorization & req.decoded
        req.decoded = jwt.verify(req.headers.authorization, SECRET_KEY);
        return next();
    }
    // failed authenticate
    catch (error) {
        // if time is expired
        if (error.name === 'TokenExpiredError') {
            return res.status(419).json({
                code: 419,
                message: 'token is expired'
            });
        }
        // if token is invalid
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                code: 401,
                message: 'Invalid toekn'
            });
        }
    }
}