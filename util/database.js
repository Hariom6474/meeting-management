const Sequelize = require("sequelize");

const sequelize = new Sequelize("meeting_management", "root", "54321", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
