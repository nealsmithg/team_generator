const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const template = require("./src/template")
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
        createWeb();
    }
    })
};

function createEngineer(){
    startQuestions.push({type: "input",
    message: "What is the employee's Github username?",
    name: "github"})

    inquirer
    .prompt(startQuestions)
    .then((response) => {const engineer = new Engineer(response.name, response.id, response.email, response.github)
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
}

// function init() {
//     startQuestions.push({type: "input",
//     message: "What is the employee's office number?",
//     name: "office"})

//     inquirer
//     .prompt(startQuestions)
//     .then((response) => {const manager = new Manager(response.name, response.id, response.email, response.office)
//         employees.push(manager);
//         createEmployee();
//     })
// };

function init(){
    const employee = new Employee("john", 8, "jdoe@gmail.com");
    console.log(employee)
}

init();
