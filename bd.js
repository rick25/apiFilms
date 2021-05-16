const { Model } = require("sequelize");
const Sequelize = require("sequelize");

const FilmModel = require("./models/films");

const sequelize = new Sequelize("films", "ricardo", "20Ri8125@", {
  host: "localhost",
  dialect: "mysql",
});

const Film = FilmModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas");
});

module.exports = {
  Film,
};
