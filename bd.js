require("dotenv").config();
const Sequelize = require("sequelize");
const { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_PORT, DB_HOST, DB_DIALECT } = process.env;

const FilmModel = require("./models/films");

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT
});

const Film = FilmModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas");
});

module.exports = {
  Film,
};
