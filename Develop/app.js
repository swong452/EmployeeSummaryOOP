const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const renderHTML = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let team = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// 
function empInfoCollect() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is employee Name ?"
        },
        {
            type: "input",
            name: "id",
            message: "What is employee ID"
        },
        {
            type: "input",
            name: "email",
            message: "What is employee Email"
        },
        {
            type: "input",
            name: "role",
            message: "Role of this employee (manager/engineer/intern)"
        }
    ])
        .then(function (response) {
            teamInfo(response);
        })
} // end function 


// Create employee objects base on each employee info (empInfoCollect ()), 
// add each employee object to the array 'team'
function teamInfo(empObj) {

    //1. Collect All employee info
    //empInfoCollect()
    //    .then(function (empObj) {

    if (empObj.role == "manager") {
        inquirer.prompt([
            {
                type: "input",
                message: "What is Manager Office number ?",
                name: "managerNum"
            },
            {
                type: "input",
                message: "Any more other team member to add to this team ? (y/n)",
                name: "moreMember"
            }
        ]).then(function (mgrDetail) {
            let mgrObj = new Manager(empObj.name, empObj.id, empObj.email, mgrDetail.managerNum);
            team.push(mgrObj);
            //console.log("New Manger Obj created: ", mgrObj);
            //console.log("Inside Manager, team is:", team);
            if (mgrDetail.moreMember == "y") {
                empInfoCollect();
            } else {
                renderTeamPage(team);
            }
        })
    } else if (empObj.role == "engineer") {
        inquirer.prompt([
            {
                type: "input",
                message: "What is engineer github username ?",
                name: "gitName"
            },
            {
                type: "input",
                message: "Any more other team member to add to this team ? (y/n)",
                name: "moreMember"
            }
        ]).then(function (engDetail) {
            let engObj = new Engineer(empObj.name, empObj.id, empObj.email, engDetail.gitName);
            team.push(engObj);
            //console.log("New Engineer Obj created: ", engObj);
            //console.log("Inside Engineer, team is:", team);
            if (engDetail.moreMember == "y") {
                empInfoCollect();
            } else {
                renderTeamPage(team);
            }
        })
    } else {
        inquirer.prompt([
            {
                type: "input",
                message: "WHich school Intern goes to ?",
                name: "school"
            },
            {
                type: "input",
                message: "Any more other team member to add to this team ? (y/n)",
                name: "moreMember"
            }
        ]).then(function (intDetail) {
            let intObj = new Intern(empObj.name, empObj.id, empObj.email, intDetail.school);
            team.push(intObj);
            if (intDetail.moreMember == "y") {
                empInfoCollect();
            } else {
                renderTeamPage(team);
            }
        })
    } // end else
} // end teamInfo


async function renderTeamPage(teamArray) {
    console.log("Enter renderTeam Page");

    try {
        const teamHTML = await render(teamArray);
        console.log("Inside Async Await, Final Team page:", teamHTML);
        fs.writeFileSync("finalTeamPage.html", teamHTML, function (err) {
            if (err) {
                console.log(err);
                console.log("cannot write to file finalTeamPage");
            }
            console.log("Success ! Created finalTeamPage.html");

        })

    } catch (err) {
        console.log(error);
    }

}

empInfoCollect();





// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
