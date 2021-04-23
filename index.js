const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
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
]

const employeeQuestions = [

]

