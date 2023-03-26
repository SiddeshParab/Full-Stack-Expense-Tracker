const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking', 'root', 'Kriti$anon10', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;
