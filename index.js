// 1. open connection sequelize
const Sequelize = require("sequelize");

const userModel = require("./models/mhs");

const sequelize = new Sequelize("mhs", "postgres", "iskandar1997", {
  host: "localhost",
  dialect: "postgres",
});

// 2. test connection sequelize
sequelize
  .authenticate()
  .then((res) =>
    console.log("Connection has been established successfully. ", res)
  )
  .catch((err) => console.error("Unable to connect to the database:", err));

// export model yang sudah di gabungkan dengan sequelize
module.exports = {
  userModel: userModel(sequelize, Sequelize.DataTypes),
};
