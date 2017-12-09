'use strict';
module.exports = (sequelize, DataTypes) => {
  var Table_Two = sequelize.define('Table_Two', {
    column: DataTypes.STRING
  });
  return Table_Two;
};