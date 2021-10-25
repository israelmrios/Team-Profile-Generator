const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const distributionPath = path.join(OUTPUT_DIR, "index.html");

const generateHtml = require('./lib/generateHtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];
function init() {
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
            teamMembers.push(manager);
            addingTeamMembers();
        })
    }

    function addingTeamMembers() {
        inquirer.prompt([
            {
                type: "list",
                name: "addingMember",
                message: "Would you like to add an Engineer, an Intern or are you finished building your team?",
                choices: ["Engineer", "Intern", new inquirer.Separator(), "Finished Building my Team"]
            }
        ]).then(data => {
            const getRole = data.addingMember;
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
                name: "getHub",
                message: "What is their GitHub UserName?"
            }
        ]).then(data => {
            const engineer = new Engineer(data.nameEngineer, data.idEngineer, data.emailEngineer, data.getHub);
            teamMembers.push(engineer);
            addingTeamMembers();
        })
    }

    function getIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "nameIntern",
                message: "What is their full name?"
            },
            {
                type: "input",
                name: "idIntern",
                message: "What is their employee ID?"
            },
            {
                type: "input",
                name: "emailIntern",
                message: "What is their email?"
            },
            {
                type: "input",
                name: "school",
                message: "What is the school they are attending?"
            }
        ]).then(data => {
            const intern = new Intern(data.nameIntern, data.idIntern, data.emailIntern, data.school);
            teamMembers.push(intern);
            addingTeamMembers();
        })
    }
    getManager();
}

function getTeam() {
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(distributionPath, generateHtml(teamMembers), "utf-8");
    console.log("Your HTML Webpage with your team's basic info has been created!!!")
}

init();