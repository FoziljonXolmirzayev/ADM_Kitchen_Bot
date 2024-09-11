const jwt = require("jsonwebtoken");

exports.generateToken = (name) => {
  return jwt.sign({ name }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};
exports.decodeToken = (token) => {
  return jwt.decode(token);
};
