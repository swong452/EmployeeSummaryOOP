// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
let Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name,id,email);
        this.school = school;
    }

    getSchool= () => this.school;
    getRole = () => "Intern";
}

module.exports = Intern;