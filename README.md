Employee Tracker

This is a command-line application that allows users to manage employees, departments, and roles in a company. The application provides the following options:

View all departments
View all roles
View all employees
Add a department
Add a role
Add an employee
Update an employee role

## User Story:
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria:
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Installation:
To use this application, follow these steps:
Clone the repository to your local machine.
Install the required dependencies by running npm install in your terminal.
Set up your database by running the SQL script found in schema.sql file.

Create a .env file and add the following information:
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=employee_db

Start the application by running node index.js in your terminal.

## Usage
Once you've started the application, you'll be presented with a list of options to choose from. To choose an option, simply enter the corresponding number and press enter.

View all departments
This option allows you to view all departments in your company. When you choose this option, you'll see a formatted table showing department names and department ids.

View all roles
This option allows you to view all roles in your company. When you choose this option, you'll see a formatted table showing job titles, role ids, the department that role belongs to, and the salary for that role.

View all employees
This option allows you to view all employees in your company. When you choose this option, you'll see a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.

Add a department
This option allows you to add a new department to your company. When you choose this option, you'll be prompted to enter the name of the department. Once you enter the name, the department will be added to the database.

Add a role
This option allows you to add a new role to your company. When you choose this option, you'll be prompted to enter the name, salary, and department for the role. Once you enter this information, the role will be added to the database.

Add an employee
This option allows you to add a new employee to your company. When you choose this option, you'll be prompted to enter the employee’s first name, last name, role, and manager. Once you enter this information, the employee will be added to the database.

Update an employee role
This option allows you to update an employee's role in your company. When you choose this option, you'll be prompted to select an employee to update and their new role. Once you enter this information, the employee's role will be updated in the database.# employee-Tracker
