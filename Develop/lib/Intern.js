// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
let Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school="noSchool") {
        super(name,id,email);
        this.school = school;
    }

    //getSchool= () => this.school;
    getSchool() {
        return this.school
    }

    //getRole = () => "Intern";
    getRole () {
        return "Intern"
    }
}

module.exports = Intern;