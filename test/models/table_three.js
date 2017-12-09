'use strict';
module.exports = (sequelize, DataTypes) => {
  var Table_Three = sequelize.define('Table_Three', {
    column: DataTypes.STRING
  });
  return Table_Three;
};