const mhsService = require("../service/mhsService");
const mhsController = {};
mhsController.getAll = async (req, res) => {
  try {
    let status = 200;
    let message = "OK";
    const { data: dataMhs, error } = await mhsService.getAll();
    if (error !== null) {
      (status = 500), (message = error);
    }
    res.status(status).send({
      Status: status,
      Message: message,
      Data: dataMhs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      Message: error,
    });
  }
};
mhsController.create = async (req, res) => {
  try {
    let status = 200;
    let message = "OK";
    const { data: dataMhs, error } = await mhsService.create(req.body);
    if (error !== null) {
      (status = 500), (message = error);
    }
    res.status(status).send({
      Status: status,
      Message: message,
      Data: dataMhs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      Message: error,
    });
  }
};

module.exports = mhsController;
