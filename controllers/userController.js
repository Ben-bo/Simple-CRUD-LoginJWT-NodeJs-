const userService = require("../service/userService");
const userController = {
  register: async (req, res) => {
    try {
      let status = 200;
      let message = "OK";
      const { result, error } = await userService.createService(req.body);
      if (error !== null) {
        (status = 500), (message = error);
      }
      res.status(status).send({
        status,
        message,
        data: result,
      });
    } catch (error) {
      console.log(error);
      res.send({ status: 500, message: "failed", data: error });
    }
  },
  login: async (req, res) => {
    try {
      let status = 200;
      let message = "OK";
      const { data: result, error } = await userService.login(req.body);
      if (error !== null) {
        (status = 500), (message = error);
      }
      res.status(status).send({
        status,
        message,
        data: result,
      });
    } catch (error) {
      console.log(error);
      res.send({ status: 500, message: "failed", data: error });
    }
  },
};
module.exports = userController;
