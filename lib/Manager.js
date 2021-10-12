const Employee = require("./Employee");
const inquirer = require("inquirer");

class Manager extends Employee{
    constructor(){
        super();
        this.office = "";
    }

    getOffice(){
        inquirer.prompt({
            type: "input",
            message: "What is the employee's office number?",
            name: "office"
        })
        .then((response) => this.office = response);
    }

    getRole(){
        return "Manager";
    }
};

module.exports = Manager;