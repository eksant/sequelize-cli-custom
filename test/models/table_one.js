'use strict';
module.exports = (sequelize, DataTypes) => {
  var Table_One = sequelize.define('Table_One', {
    column: DataTypes.STRING
  });
  return Table_One;
};