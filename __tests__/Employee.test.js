const Employee = require('../lib/Employee');

test ('creates an employee object', () => {
    const employee1 = new Employee();
    expect(typeof(employee1)).toBe("object");
});

test ('Sets name with constructor agrument', () => {
    const name = "Eddie";
    const employee1 = new Employee(name);
    expect(employee1.name).toBe(name);
});

test ('Sets id with constructor', () => {
    const testId = 100;
    const employee1 = new Employee("Freddie", testId);
    expect(employee1.id).toBe(testId);
});

test ('Sets email with constructor', () => {
    const testEmail = ("testing@test.com");
    const employee1 = new Employee("Neddie", 1, testEmail);
    expect(employee1.email).toBe(testEmail);
});

test ("Get name with getName()", () => {
    const testName = "Obiwan";
    const employee1 = new Employee(testName);
    expect(employee1.getName()).toBe(testName);
});

test ("Get id with getId()", () => {
    const testId = 100;
    const employee1 = new Employee("JarJar", testId);
    expect(employee1.getId()).toBe(testId);
});

test ("Get email with getEmail()", () => {
    const testEmail = "testing@test.com";
    const employee1 = new Employee("JarJar", 1, testEmail);
    expect(employee1.getEmail()).toBe(testEmail);
});

test ("getRole() returns \"Employee\"", () => {
    const testName = "Employee";
    const employee1 = new Employee("Han", 2, "testing@test.com");
    expect(employee1.getRole()).toBe(testName);
});