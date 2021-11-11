const { mhs: mhsModel } = require("../models");
const mhsService = {
  getAll: async () => {
    try {
      let error = null;
      let result = {};
      const dataMhs = await mhsModel.findAll();
      if (!dataMhs) {
        error = "No data";
      } else {
        result = dataMhs;
      }
      return {
        data: result,
        error,
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  create: async (dataMhs) => {
    try {
      const data = {
        name: dataMhs.name,
        major: dataMhs.major,
        lecturer: dataMhs.lecturer,
        class: dataMhs.class,
      };
      let error = null;
      let result = {};
      result = await mhsModel.create(data);

      return {
        data: result,
        error,
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
module.exports = mhsService;
