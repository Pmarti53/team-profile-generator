const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRender");

var Team = []

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter your Name",
        validate: async (input) => {
            if (input == "") {
                return "Please enter your name";
            }
            return true;
        }
    },

    {
        type: "input",
        name: "email",
        message: "Please enter your email address",
        validate: async (input) => {
            if (input == "") {
                return "Please enter your email address";
            }
            return true;
        }
    },

    {
        type: "input",
        name: "id",
        message: "Please enter your ID number",
        validate: async (input) => {
            if (input == "") {
                return "Please enter your ID number";
            }
            return true;
        }
    },

    {
        type: "input",
        name: "officeNumber",
        message: "Please enter your office Number",
        validate: async (input) => {
            if (isNaN(input)) {
                return "Please enter your office number";
            }
            return true;
        }
    },
    {
        type: "list",
        name: "teamConfirm",
        message: "Do you have a team?",
        choices: ["Yes", "No"]
    },
]

const employeeQuestions = [

    {
        type: "input",
        name: "name",
        message: "Please enter an employee name",
        validate: async (input) => {
            if (input == "") {
                return ("Please enter a name.");
            }
            return true;
        }
    },

    {
        type: "input",
        name: "email",
        message: "Please enter an employee email",
        validate: async (input) => {
            if (input == "") {
                return ("Please enter an email address.");
            }
            return true;
        }
    },

    {
        type: "input",
        name: "id",
        message: "Please enter an employee id",
        validate: async (input) => {
            if (isNaN(input)) {
                return ("Please enter a valid id.");
            }
            return true;
        }
    },

    {
        type: "list",
        name: "role",
        message: "what is employee's role in the company?",
        choices: ["Engineer", "Intern"]
    },

    {
        when: input => {
            return input.role = "Engineer"
        },

        type: "input",
        name: "github",
        message: "Please enter the employee's github username",
        validate: async (input) => {
            if (input == "") {
                return "Please enter a username"
            }
            return true;
        }
    },

    {
        when: input => {
            return input.role = "Intern"
        },

        type: "input",
        name: "school",
        message: "Please enter the employee's school",
        validate: async (input) => {
            if (input == "") {
                return "Please enter a school name"
            }
            return true;
        }
    },

    {
        type: "confirm",
        name: "addTeam",
        message: "Add another team member?",
        choices: ["Yes, No"]
    }
]

function TeamBuild() {
    inquirer.prompt(employeeQuestions).then(employeeInfo => {
        if (employeeInfo.role == "Engineer") {
            var newMember = new Engineer(employeeInfo.name, employeeInfo.length, employeeInfo.email, employeeInfo.gitHub);
        } else {
            var newMember = new Intern(employeeInfo.name, employeeInfo.length, employeeInfo.email, employeeInfo.school);
        }
        Team.push(newMember);
        if (employeeInfo.addTeam === "Yes") {
            TeamBuild();
        } else {
            htmlBuild();
        }
    })
}

function CardBuild(memberType, name, id, email, propertyValue) {
    let data = fs.readFileSync(`./src/${memberType}.html`, 'utf-8')
    data = data.replace("name", name);
    data = data.replace("id", `ID: ${id}`);
    data = data.replace("email", `Email: <a href="mailto:${email}</a>`);
    data = data.replace("property", propertyValue);
    fs.appendFileSync("teamfile.html", data, err => { if (err) throw err; });
}

function htmlBuild() {
    let newFile = fs.readFileSync("./src/main.html")
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(Team), "UTF-8")


    console.log(Team)

    for (member of Team) {
        if (member.getRole() == "Manager") {
            CardBuild("manager", member.getName(), member.getId(), member.getEmail(), "Office: " + member.getOfficeNumber());
        } else if (member.getRole() == "Engineer") {
            CardBuild("engineer", member.getName(), member.getId(), member.getEmail(), "Github: " + member.getGithub());
        } else if (member.getRole() == "Intern") {
            CardBuild("intern", member.getName(), member.getId(), member.getEmail(), "School: " + member.getSchool());
        }
    }
    fs.appendFileSync("teamfile.html", "</div></main></body></html>", function (err) {
        if (err) throw err;
    });

}

function init() {
    inquirer.prompt(managerQuestions).then(managerInfo => {
        let teamManager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
        Team.push(teamManager);
        if (managerInfo.teamConfirm === "Yes") {
            TeamBuild();
        } else {
            htmlBuild();
        }
    })
}

init();





