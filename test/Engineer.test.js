const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Sould create a object with name, id, and email", ()=> {
        expect(new Engineer("john", 8, "jdoe@gmail.com", "jdoe")).toEqual({ name: 'john', id: 8, email: 'jdoe@gmail.com', github: 'jdoe' });
    });
    it("you sould be able to call getName and get the name", ()=> {
        expect(new Engineer("john", 8, "jdoe@gmail.com", "jdoe").getName()).toEqual("john");
    });
    it("you sould be able to call getId and get the id", ()=> {
        expect(new Engineer("john", 8, "jdoe@gmail.com", "jdoe").getId()).toBe(8);
    });
    it("you sould be able to call getEmail and get the email", ()=> {
        expect(new Engineer("john", 8, "jdoe@gmail.com", "jdoe").getEmail()).toBe("jdoe@gmail.com");
    });
    it("you sould be able to call getGithub and get the github", ()=> {
        expect(new Engineer("john", 8, "jdoe@gmail.com", "jdoe").getGithub()).toBe("jdoe");
    });
    it("you sould be able to call getRole and get 'Engineer'", ()=> {
        expect(new Engineer("john", 8, "jdoe@gmail.com", "jdoe").getRole()).toBe("Engineer");
    });
});