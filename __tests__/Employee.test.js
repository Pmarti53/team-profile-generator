const Employee = require('../lib/Employee'); 

test('creates a Employee object', () => {
    const employee1 = new Employee('chris', 123, "lsdlfj@lsdfj.com"); 

    expect(employee1).toBeInstanceOf(Employee); 
    expect(employee1.employeeName).toBe('chris'); 
    expect(employee1.id).toBe(123); 
    expect(employee1.email).toBe('lsdlfj@lsdfj.com'); 

})

test('get employee name', () => {

    const employee2 = new Employee('lito', 123, "lsdlfj@lsdfj.com")

    expect(employee2.getName()).toBe('lito'); 
})