module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "meetapp",
  define: {
    timstamps: true,
    underscored: true,
    underscoredAll: true
  }
};
