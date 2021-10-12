const inquirer = require("inquirer");
const fs = require("fs");
const async = require("async")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { inherits } = require("util");

function init() {
    const manager = new Manager();
    manager.getName();
    manager.getId();
    manager.getEmail();
    manager.getOffice();
    console.log(manager);
};

init();