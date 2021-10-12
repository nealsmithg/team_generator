const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(){
        super();
        this.github = "";
    }

    getGithub(){
        inquirer.prompt({
            type: "input",
            message: "What is the employee's Github username?",
            name: "github"
        })
        .then((response) => this.github = response);
    };

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;