const {User} = require('./models/User')
const {Board} = require('./models/Board')
const {Cheese} = require('./models/Cheese')

Board.belongsTo(User);
User.hasMany(Board);

Board.belongsToMany(Cheese, {through: "board_cheese"});
Cheese.belongsToMany(Board, {through: "board_cheese"});

module.exports = { User, Board, Cheese }