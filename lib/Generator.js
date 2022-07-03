const inquirer = require("inquirer");
const Employee = require("./Employee");

function Generator() {
    this.employees = [];
    this.employee;

    Generator.prototype.initalizeProgram = function() {
        this.employees.push(new Employee("Nick", 10, "yoyo4games@yahoo.com", "Employee"));
    }
    inquirer
        .prompt({
            type: "text",
            name: "name",
            message: "What is your name?"
        })
        .then(({ name }) => {
            this.employee = new Employee(name);
            console.log(name);
        }) 
};
