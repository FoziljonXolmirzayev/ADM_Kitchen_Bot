const jwt = require("jsonwebtoken");

exports.generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1y",
  });
};
