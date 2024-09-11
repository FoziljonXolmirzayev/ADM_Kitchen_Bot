const express = require("express");
const { login } = require("../modules/auth");
const authRoute = express.Router();

authRoute.post("/login", login);

module.exports = authRoute;
