const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHtml = require('./dist/index');

const teamMember = [];
function app() {
    function getManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "nameManager",
                message: "What is the team manager’s name?"
            },
            {
                type: "input",
                name: "idManager",
                message: "What is their employee ID?"
            },
            {
                type: "input",
                name: "emailManager",
                message: "What is the team manager’s email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is their office phone number?"
            }
        ]).then(data => {
            const manager = new Manager(data.nameManager, data.idManager, data.emailManager, data.officeNumber);
            teamMember.push(manager);
            addingTeamMember();
        })
    }

    function addingTeamMember() {
        inquirer.prompt([
            {
                type: "list",
                name: "addingMember",
                message: "Would you like to add an Engineer, an Intern or are you finished building your team?",
                choices: ["Engineer", "Intern", new inquirer.Separator(), "Finished Building my Team"]
            }
        ]).then(data => {
            const getRole = data.addingTeamMember;
            if(getRole === "Engineer") {
                getEngineer();
            } else if(getRole === "Intern") {
                getIntern();
            } else {
                getTeam();
            }
        })
    }

    function getEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "nameEngineer",
                message: "What is their full name?"
            },
            {
                type: "input",
                name: "idEngineer",
                message: "What is their employee ID?"
            },
            {
                type: "input",
                name: "emailEngineer",
                message: "What is their email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is their office phone number?"
            }
        ])
    }
}