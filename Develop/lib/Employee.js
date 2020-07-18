// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name,id=1,email="nobody") {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Get Employee Name
    //getName = () => this.name
    getName () {
        return this.name
    }

    // Get Employee ID
    //getId = () => this.id
    getId() {
        return this.id
    }

    // Get Employee Email;
    //getEmail = () => this.email
    getEmail() {
        return this.email
    }

    // Get Employee Role
    //getRole = () => "Employee"
    getRole () {
        return "Employee"
    }
}

module.exports = Employee;