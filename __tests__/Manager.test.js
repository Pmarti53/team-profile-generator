const Manager = require('../lib/Manager'); 

test('creates a Manager object', () => {
    const employee1 = new Manager(123); 

    expect(employee1).toBeInstanceOf(Manager); 

})