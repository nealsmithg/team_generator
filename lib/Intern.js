const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        this.school = school;

        super(name, id, email);
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