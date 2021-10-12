const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { inherits } = require("util");
const Employee = require("./lib/Employee");
const employees = []

const startQuestions = [
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
    }
];

const employeeType = [
    {
        type: "list",
        message: "What type of Emplyee are you adding?",
        name: "type",
        choices: ["Engineer", "Intern", "No more"]
    }
]

function createEmployee(){
    inquirer
    .prompt(employeeType)
    .then((response) => {
    if(response.type == "Engineer"){
        createEngineer();
    }else if(response.type == "Intern"){
        createIntern();
    }else{

    }
    })
};

function createEngineer(){
    startQuestions.push({type: "input",
    message: "What is the employee's Github username?",
    name: "github"})

    inquirer
    .prompt(startQuestions)
    .then((response) => {const engineer = new Engineer(response.name, response.id, response.email, response.gihub)
        employees.push(engineer)
        createEmployee();
    })
}

function createIntern(){
    startQuestions.push({type: "input",
    message: "What is the employee's school?",
    name: "school"})

    inquirer
    .prompt(startQuestions)
    .then((response) => {const intern = new Intern(response.name, response.id, response.email, response.school)
        employees.push(intern)
        createEmployee();
    })
}

function init() {
    startQuestions.push({type: "input",
    message: "What is the employee's office number?",
    name: "office"})

    inquirer
    .prompt(startQuestions)
    .then((response) => {const manager = new Manager(response.name, response.id, response.email, response.office)
        employees.push(manager);
        createEmployee();
    })
};


init();
