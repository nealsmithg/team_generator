const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Sould create a object with name, id, and email", ()=> {
        expect(new Intern("john", 8, "jdoe@gmail.com", "UNC")).toEqual({ name: 'john', id: 8, email: 'jdoe@gmail.com', school: 'UNC' });
    });
    it("you sould be able to call getName and get the name", ()=> {
        expect(new Intern("john", 8, "jdoe@gmail.com", "UNC").getName()).toEqual("john");
    });
    it("you sould be able to call getId and get the id", ()=> {
        expect(new Intern("john", 8, "jdoe@gmail.com", "UNC").getId()).toBe(8);
    });
    it("you sould be able to call getEmail and get the email", ()=> {
        expect(new Intern("john", 8, "jdoe@gmail.com", "UNC").getEmail()).toBe("jdoe@gmail.com");
    });
    it("you sould be able to call getGithub and get the school", ()=> {
        expect(new Intern("john", 8, "jdoe@gmail.com", "UNC").getSchool()).toBe("UNC");
    });
    it("you sould be able to call getRole and get 'Intern'", ()=> {
        expect(new Intern("john", 8, "jdoe@gmail.com", "UNC").getRole()).toBe("Intern");
    });
});