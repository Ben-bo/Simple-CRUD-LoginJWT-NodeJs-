const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userController = require("../controllers/userController");
const { user: userModel } = require("../models");
const userService = {
  findUser: async (username) => {
    return await userModel.findOne({ where: { username } });
  },
  createService: async (userDetails) => {
    try {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(userDetails.password, salt);
      const isUserExist = await userService.findUser(userDetails.username);
      let error = null;
      let result = {};
      if (!isUserExist) {
        result = await userModel.create({
          username: userDetails.username,
          password: hashedPassword,
        });
      } else {
        error = "user already exist";
      }
      return { result, error };
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  login: async (userDetails) => {
    try {
      let error = null;

      const isUserExist = await userService.findUser(userDetails.username);
      if (!isUserExist) {
        error = "User not found";
        return {
          data: {},
          error,
        };
      }
      const passwordCorrect = bcrypt.compareSync(
        userDetails.password,
        isUserExist.dataValues.password
      );
      if (!passwordCorrect) {
        error = "Incorrect password";
        return {
          data: {},
          error,
        };
      }
      const token = await jwt.sign(
        isUserExist.dataValues,
        process.env.SECRET_KEY
      );

      return {
        data: token,
        error,
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
module.exports = userService;
