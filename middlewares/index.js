const { decodeToken } = require("../services/jwt");

exports.authenticationChecker = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).send("You are not authorized!");
    return;
  }

  const { exp } = decodeToken(token);
  if (exp * 1000 < Date.now()) {
    res.status(401).send("Token is expired!");
    return;
  }

  next();
};
