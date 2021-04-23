const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test("Sets office number constructor", () => {
    const testOffice = 213;
    const employee1 = new Manager("Yaddle", 7, "testing@test.com", testOffice);
    expect(employee1.officeNumber).toBe(testOffice);
});

test("getRole() returns \"Manager\"", () => {
    const testName = "Manager";
    const employee1 = new Manager("Yaddle", 7, "testing@test.com", testName);
    expect(employee1.getRole()).toBe(testName);
});

test("Gets office number with getOfficeNumber()", () => {
    const testOffice = 213;
    const employee1 = new Manager("Yaddle", 7, "testing@test.com", testOffice);
    expect(employee1.getOfficeNumber()).toBe(testOffice);
});