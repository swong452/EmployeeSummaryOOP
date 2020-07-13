// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Get Employee Name
    getName = () => this.name

    // Get Employee ID
    getId = () => this.id

    // Get Employee Email;
    getEmail = () => this.email

    // Get Employee Role
    getRole = () => "Employee"
}

module.exports = Employee;