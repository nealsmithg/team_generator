const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee{
    constructor(){
        super();
        this.school = "";
    }

    getSchool(){
        inquirer.prompt({
            type: "input",
            message: "What is the employee's school?",
            name: "school"
        })
        .then((response) => this.school = response);
    };

    getRole(){
        return "Intern";
    };
};

module.exports = Intern;