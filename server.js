const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');


// const PORT = process.env.PORT || 3001;
// const app = express();
var connetion = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Delara@20212021",
  database: "employee_db"
});


//This will be connecting the server and sql
connetion.connect(function (err) {
  if (err) throw err;
  startQuestions();
});

function startQuestions() {
   inquirer.prompt({
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View all employees",
      "View all departments",
      "Add an employee",
      "Add a department",
      "Add a role",
      "Update an employee roel",
      "I'm done!"
    ],
    name: "choice"
   })
   .then(answers => {
    console.log(answers.choice);
    switch (answers.choice) {
      case "View all employees":
        viewEmployees()
        break;

      case "View all departments":
        viewDepartments()
        break;

        case "Add an employee":
        addEmployee()
        break;

        case "Add a department":
        addDepartment()
        break;

        case "Add a role":
        addRole()
        break;

        case "Update and employee role":
        updateEmployeeRole()
        break;

        default:
          connetion.end()
          break;
    }
   })
}

function viewEmployees() {
  connetion.query("SELECT * FROM employees", function (err, data){
    console.log(data);
    startQuestions();
  }
  )
}

function viewDepartments() {
  connetion.query("SELECT * FROM department", function (err, data){
    console.log(data);
    startQuestions();
  }
  )
}

function addEmployee() {
  inquirer.prompt([{
    type: "input",
    name: "firstName",
    message: "What is the employee's first name?"
  },
  {
    type: "input",
    name: "lastName",
    message: "What is the employee's last name?"
  },
  {
    type: "number",
    name: "roleID",
    message: "What is the employee's ID?"
  },
  {
    type: "number",
    name: "managerID",
    message: "What is the employee'e manager's ID?"
  },
])
.then(function(res) {
  connetion.query('INSER INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
    if (err) throw err
    console.log("Data was entered succesfully!");
    startQuestions();
  })
})
}

function addDepartment() {
  inquirer.prompt([{
    type: "input",
    name: "department",
    message: "What department would you like to add?"
  },
])
.then(function(res) {
  connetion.query('INSER INTO department (name) VALUES (?)', [res.department], function(err, data) {
    if (err) throw err
    console.log("Data was entered succesfully!");
    startQuestions();
  })
})
}

function addRole() {
  inquirer.prompt([{
    type: "input",
    name: "title",
    message: "Enter title"
  },
  {
    type: "number",
    name: "salary",
    message: "Enter salary"
  },
  {
    type: "number",
    name: "department_id",
    message: "Enter department ID"
  }
])
.then(function(res) {
  connetion.query('INSER INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [res.title, res.salary, res.department_id], function(err, data) {
    console.table(data);
  })
  startQuestions();
})
}

function updateEmployeeRole() {
  inquirer.prompt([{
    type: "input",
    name: "name",
    message: "Which employee role would like to update?"
  },
  {
    type: "number",
    name: "role_id",
    message: "Enter the role ID"
  }
])
.then(function(res) {
  connetion.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [res.role_id, res.name], function(err, data) {
    console.table(data);
  })
  startQuestions();
})
};

