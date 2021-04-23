const Employee = require('./Employee');

class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber) {
        super(employeeName, id, email);
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;

        this.employeeName = this.employeeName;
        this.officeNumber = officeNumber;
        this.role = "Manager"
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;