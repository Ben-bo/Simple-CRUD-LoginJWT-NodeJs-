'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mhs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mhs.init({
    name: DataTypes.STRING,
    major: DataTypes.STRING,
    lecturer: DataTypes.INTEGER,
    class: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mhs',
  });
  return mhs;
};