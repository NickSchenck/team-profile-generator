const generateSite = require("./src/generateSite")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const fs = require("fs")
const inquirer = require("inquirer")

const teamArray = [];

const addManager = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of this teams manager?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the managers ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the managers email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the managers office number?"
            }
        ])
        .then(managerInput => {
            const {name, id, email, officeNumber} = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
        })
};

const addTeamMember = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "What is the role of this employee?",
                choices: ["Engineer", "Intern"]
            },
            {
                type: "input",
                name: "name",
                message: "What is the name of the employee?"

            },
            {
                type: "input",
                name: "id",
                message: "What is the employees ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the employees email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the employees github?",
                when: (input) => input.role === "Engineer"
            },
            {
                type: "input",
                name: "school",
                message: "What is the employees school?",
                when: (input) => input.role === "Intern"
            },
            {
                type: "confirm",
                name: "confirmAddTeam",
                message: "Would you like to add more team members?",
                default: false
            }
        ])
        .then(teamData => {
            let { name, id, email, role, github, school, confirmAddTeam } = teamData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);
            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);
            }

            teamArray.push(employee);

            if (confirmAddTeam) {
                return addTeamMember(teamArray);
            } else {
                return teamArray;
            }
        })
};

const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team has been created, see the html file in /dist")
        }
    })
};

addManager()
    .then(addTeamMember)
    .then(teamArray => {
        return generateSite(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });