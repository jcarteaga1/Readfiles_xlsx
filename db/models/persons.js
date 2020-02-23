'use strict';
module.exports = (sequelize, DataTypes) => {
  const Persons = sequelize.define('Persons', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  Persons.associate = function(models) {
    // associations can be defined here
  };
  return Persons;
};