"use strict";
module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define(
    "Quote",
    {
      text: DataTypes.STRING,
      author: DataTypes.STRING,
    },
    {
      timestamps: true,
    }
  );
  Quote.associate = function (models) {
    // associations can be defined here
  };
  return Quote;
};
