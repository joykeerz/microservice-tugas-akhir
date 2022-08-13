const register = require("./register");
const login = require("./login");
const update = require("./update");
const updateOther = require("./updateOther"); 
const getUser = require("./getUser");
const logout = require("./logout");
const getAllUsers = require("./getAllUsers");
const getSingle = require("./getSingle");
const destroy = require("./destroy");

module.exports = {
  register,
  login,
  update,
  updateOther,
  getUser,
  getAllUsers,
  getSingle,
  logout,
  destroy
};
