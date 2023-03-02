const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const Cheese = sequelize.define("cheese", {
    title: Sequelize.STRING,
    description: Sequelize.STRING
})

await sequelize.sync();

module.exports = {Cheese};