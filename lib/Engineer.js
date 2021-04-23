const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(employeeName, id, email, github) {
        super(employeeName, id, email);
        this.employeeName = employeeName;
        this.id = id;

        this.email = email;
        this.github = github;
        this.role = 'Engineer'; 
    }
    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;
