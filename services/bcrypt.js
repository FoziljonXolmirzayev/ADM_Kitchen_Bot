const bcrypt = require("bcrypt");

module.exports.hashPassword = async function (data) {
  return await bcrypt.hash(data, 10);
};
module.exports.comparePasswords = async function (password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
};
