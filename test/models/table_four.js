'use strict';
module.exports = (sequelize, DataTypes) => {
  var Table_Four = sequelize.define('Table_Four', {
    column: DataTypes.STRING
  });
  return Table_Four;
};