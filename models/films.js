module.exports = (seuelize, type) => {
  return seuelize.define("film", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: type.STRING,
    description: type.STRING,
    score: type.INTEGER,
    director: type.STRING,
  });
};
