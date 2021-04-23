const Employee = require('./Employee');

class Intern extends Employee {
    constructor(employeeName, id, email, school) {
        super(employeeName, id, email);
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;

        this.employeeName = this.employeeName;
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;