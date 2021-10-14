const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Sould create a object with name, id, and email", ()=> {
        expect(new Employee("john", 8, "jdoe@gmail.com")).toEqual({ name: 'john', id: 8, email: 'jdoe@gmail.com' });
    });
    it("you sould be able to call getName and get the name", ()=> {
        expect(new Employee("john", 8, "jdoe@gmail.com").getName()).toEqual("john");
    });
    it("you sould be able to call getId and get the id", ()=> {
        expect(new Employee("john", 8, "jdoe@gmail.com").getId()).toBe(8);
    });
    it("you sould be able to call getEmail and get the email", ()=> {
        expect(new Employee("john", 8, "jdoe@gmail.com").getEmail()).toBe("jdoe@gmail.com");
    });
    it("you sould be able to call getRole and get 'Employee'", ()=> {
        expect(new Employee("john", 8, "jdoe@gmail.com").getRole()).toBe("Employee");
    });
});