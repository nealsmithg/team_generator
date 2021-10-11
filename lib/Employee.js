class Employee {
    constructor(){
        
    }

    getName(){
        inquirer.prompt({
            type: "input",
            message: "What is the employee's name?",
            name: "name"
        })
        .then((response) => this.name = response);
    };

    getId(){
        inquirer.prompt({
            type: "input",
            message: "What is the employee's ID?",
            name: "id"
        })
        .then((response) => this.id = response);
    };

    getEmail(){
        inquirer.prompt({
            type: "input",
            message: "What is the employee's Email?",
            name: "email"
        })
        .then((response) => this.email = response);
    };

    getRole(){
        return("Employee");
    }
}

module.exports = Employee;