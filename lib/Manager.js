const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, office){
        this.office = office;

        super(name, id, email);
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
}