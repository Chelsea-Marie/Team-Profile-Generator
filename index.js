const inquirer = require("inquirer")
const fs = require("fs")

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the manager?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the id of the manager?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email of the manager?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the office number of the manager?"
        },
    ])
        .then(answers => {
            // console.log(answers)
            const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            employees.push(newManager);

            mainMenu()
        })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the engineer?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the id of the engineer?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email of the engineer?"
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is the gitHub username of the engineer?"
        },
    ])
        .then(answers => {
            const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
            employees.push(newEngineer);
            mainMenu()
        })
}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the intern?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the id of the intern?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email of the intern?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"
        },
    ])
        .then(answers => {
            const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
            employees.push(newIntern);
            mainMenu()
        })
}

function mainMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "Add an engineer",
                "Add an intern",
                "Finish building team"
            ]
        }
    ])
        .then(answer => {
            console.log(answer);
            if (answer.action == "Add an engineer") {
                createEngineer();
            }
            if (answer.action == "Add an intern") {
                createIntern();
            }
            if (answer.action == "Finish building team") {
                buildHTML();
            }
        })
}

function buildHTML() {
    console.log(employees);

    function generateThirdItem (employee) {
        let thirdItem = ""

        if(employee.getRole() == "Manager") {
            thirdItem = `Office Number: ${employee.getOfficeNumber()}`
        }
        
        if(employee.getRole() == "Engineer") {
            thirdItem = `GitHub: ${employee.getGitHub()}`
        }

        if(employee.getRole() == "Intern") {
            thirdItem = `School: ${employee.getSchool()}`
        }

        return `<li class="list-group-item">${thirdItem}</li>`
    }

    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Document</title>
        <style>
            .header {
                height: 200px;
                background: rgb(234, 177, 177);
            }
        </style>
    </head>
    <body>
        <div class="header d-flex justify-content-center align-items-center">
            <h1>My Team</h1>
        </div>
    
    
        <div class="d-flex justify-content-center container flex-wrap">
        ${employees.map(employee => {
        return `
                <div class="card m-4" style="width: 18rem;">
                <div class="card-header">
                <h2>${employee.getName()}</h2>
                <h3>${employee.getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${employee.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                 ${generateThirdItem(employee)}
                </ul>
              </div>
                `
    })
        }

        </div>
    </body>
    </html>
    `


    fs.writeFile("./dist/output.html", htmlTemplate, () => {
        console.log("HTML created!")
    })
}

createManager()
