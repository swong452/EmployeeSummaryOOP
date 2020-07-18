// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
let Employee = require ("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber="11234") {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //getRole = () => "Manager";
    getRole () {
        return "Manager"
    }

    //getOfficeNumber = () => this.officeNumber;
    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager;

