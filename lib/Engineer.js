const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        this.github = github;

        super(name, id, email);
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