const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Sould create a object with name, id, and email", ()=> {
        expect(new Manager("john", 8, "jdoe@gmail.com", 45)).toEqual({ name: 'john', id: 8, email: 'jdoe@gmail.com', office: 45 });
    });
    it("you sould be able to call getName and get the name", ()=> {
        expect(new Manager("john", 8, "jdoe@gmail.com", 45).getName()).toEqual("john");
    });
    it("you sould be able to call getId and get the id", ()=> {
        expect(new Manager("john", 8, "jdoe@gmail.com", 45).getId()).toBe(8);
    });
    it("you sould be able to call getEmail and get the email", ()=> {
        expect(new Manager("john", 8, "jdoe@gmail.com", 45).getEmail()).toBe("jdoe@gmail.com");
    });
    it("you sould be able to call getOffice and get the office", ()=> {
        expect(new Manager("john", 8, "jdoe@gmail.com", 45).getOffice()).toBe(45);
    });
    it("you sould be able to call getRole and get 'Manager'", ()=> {
        expect(new Manager("john", 8, "jdoe@gmail.com", 45).getRole()).toBe("Manager");
    });
});