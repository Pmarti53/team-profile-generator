const Engineer = require('../lib/Engineer');

test("Setting Github account with constructor", () => {
    const testHub = "GitUserName";
    const employee1 = new Engineer("Quigonn", 4, "testing@test.com", testHub);
    expect(employee1.github).toBe(testHub);
});

test("getRole() returns \"Engineer\"", () => {
    const testName = "Engineer";
    const employee1 = new Engineer("Yoda", 2, "testing@test.com", testName);
    expect(employee1.getRole()).toBe(testName);
});

test("Gets Github username with getGithub()", () => {
    const testHub = "GitUserName";
    const employee1 = new Engineer("Yoda", 2, "testing@test.com", testHub);
    expect(employee1.getGithub()).toBe(testHub);
});