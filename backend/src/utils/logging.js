/**
 * Pretty-print requests for development
 * @function devRequestLogger
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Next middleware function
 */
function devRequestLogger(req, res, next) {
    const method = req.method.toUpperCase();
    const url = req.url;
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] ${method} ${url}`);
    next();
  }
  
module.exports = { devRequestLogger };