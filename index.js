const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const template = require("./src/template");
const employees = [];

const managerQuestions = [
    {
        type: "input",
        message: "What is the Manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the Manager's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the Manager's Email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the Manager's office number?",
        name: "office"
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is the employee's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the employee's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's Email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the employee's Github username?",
        name: "github"
    }
];

const internQuestions = [
    {
        type: "input",
        message: "What is the employee's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the employee's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's Email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the employee's school?",
        name: "school"
    }
];

const employeeType = [
    {
        type: "list",
        message: "What type of Emplyee are you adding?",
        name: "type",
        choices: ["Engineer", "Intern", "No more"]
    }
];

function createEmployee(){
    inquirer
    .prompt(employeeType)
    .then((response) => {
    if(response.type == "Engineer"){
        createEngineer();
    }else if(response.type == "Intern"){
        createIntern();
    }else{
        createWeb();
    }
    })
};

function createEngineer(){
    inquirer
    .prompt(engineerQuestions)
    .then((response) => {const engineer = new Engineer(response.name, response.id, response.email, response.github)
        employees.push(engineer)
        createEmployee();
    })
};

function createIntern(){
    inquirer
    .prompt(internQuestions)
    .then((response) => {const intern = new Intern(response.name, response.id, response.email, response.school)
        employees.push(intern)
        createEmployee();
    })
};

function createWeb(){
    let body = "";
    employees.forEach(element => {
        const card = new template.Card(element.getName(), element.getRole(),element.getId(), element.getEmail(),Object.entries(element)[3][0], Object.entries(element)[3][1]);
        body = body.concat(card.getBody());
        });
        fs.writeFile(`dist/myteam.html`, template.head.concat(body.concat(template.foot)), function(err) {
            if (err) throw err;
            console.log("created!");
    })
};

function init() {
    inquirer
    .prompt(managerQuestions)
    .then((response) => {const manager = new Manager(response.name, response.id, response.email, response.office)
        employees.push(manager);
        createEmployee();
    })
};

init();
