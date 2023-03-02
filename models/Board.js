const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const Board = sequelize.define("board", {
    type: Sequelize.STRING,
    description: Sequelize.STRING,
    rating: Sequelize.FLOAT
})

await sequelize.sync();

module.exports = {Board};