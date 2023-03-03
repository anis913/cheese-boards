const {sequelize} = require('./db')
const {User, Board, Cheese} = require('./index')

describe('Models', () => {

    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    test('can create a User', async () => {
        const testUser = await User.create({ name: 'cheeze', email: 'hello@cheeze.co.uk' });
        expect(testUser.name).toBe('cheeze');
    })

    test('can create a Board', async () => {
        const testBoard = await Board.create({ type: 'french', description: 'gooda', rating: 9 });
        expect(testBoard.type).toBe('french');
    })

    test('can create a Cheese', async () => {
        const testCheese = await Cheese.create({ title: 'bluecheese', description: 'stinky' });
        expect(testCheese.name).toBe('bluecheese');
    })

    test('Multiple Boards can be added to a User.', async () => {
        const testMultiBoard = await Board.findAll();
        expect(testMultiBoard.getBoard().type).toBe('french');
    })

    test('Multiple Boards can be added to a User.', async () => {
        const testMultiBoard = await Board.findAll();
        expect(testMultiBoard.getBoard().type).toBe('french');
    })

    test('A Board can have many Cheeses.', async () => {
        const testBoardMultiCheese = await Cheese.findAll();
        expect(testBoardMultiCheese.getCheese().title).toBe('bluecheese');
    })

    test(' A Cheese can be on many Boards.', async () => {
        const testCheeseMultiBoard = await Board.findAll();
        expect(testCheeseMultiBoard.getBoard().type).toBe('french');
    })

    test('Eager Loading - A user can be loaded with its boards', async () =>{
        const testUserLoadBoard = await Board.findAll({
         include: [
             { model: User, as: "user"},
         ]
        });
        expect(testUserLoadBoard.getBoard().type).toBe('french')
     })

})
