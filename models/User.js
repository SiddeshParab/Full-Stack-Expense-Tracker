const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('ExpenseTacker', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    exp: Sequelize.INTEGER,
    descr: Sequelize.STRING,
    cat: Sequelize.STRING,
}, {timestamps: false})

module.exports = User;
