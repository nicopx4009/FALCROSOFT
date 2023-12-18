const Sequelize = require("sequelize");

const sequelize = new Sequelize("falcrosoft", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;