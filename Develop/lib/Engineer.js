// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
let Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github="nobody") {
        super (name, id, email);
        this.github = github;
    }
    
    //getGithub = () => this.github;
    getGithub() {
        return this.github
    }

    //getRole= () => "Engineer";
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;



