const { generateToken } = require("../../services/jwt");

module.exports.login = async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      res.send("Incorrect data !!!");
      return;
    }

    if (
      name !== process.env.ADMIN_NAME ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      res.send("Incorrect login or password !");
      return;
    }
    const token = generateToken(name);
    res.send(token);
  } catch (error) {
    throw new Error(error);
  }
};
