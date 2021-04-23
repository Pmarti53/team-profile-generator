const Intern = require('../lib/Intern'); 

test("Sets school constructor", () => {
    const testSchool = "UTEP";
    const employee1 = new Intern("MaceWindu", 6, "testing@test.com", testSchool);
    expect(employee1.school).toBe(testSchool);
});

test("getRole() returns \"Intern\"", () => {
    const testName = "Intern";
    const employee1 = new Intern("MaceWindu", 6, "testing@test.com", testName);
    expect(employee1.getRole()).toBe(testName);
});

test("Gets school name with getSchool()", () => {
    const testSchool = "UTEP";
    const employee1 = new Intern("MaceWindu", 6, "testing@test.com", testSchool);
    expect(employee1.getSchool()).toBe(testSchool);
});