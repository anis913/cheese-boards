const {sequelize} = require('./db')
const {User, Board, Cheese} = require('./models/index')

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

})
