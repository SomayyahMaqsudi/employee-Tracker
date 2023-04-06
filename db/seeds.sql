USE company_db;

INSERT INTO departments (name)
values ("Sales");
INSERT INTO departments (name)
values ("Engineering");
INSERT INTO departments (name)
values ("Finance");
INSERT INTO departments (name)
values ("Legal");

INSERT INTO roles (title, salary, departments_id)
values ("Sales Lead, 100000, 1");
INSERT INTO roles (title, salary, departments_id)
values ("Lead Engineer, 150000, 2");
INSERT INTO roles (title, salary, departments_id)
values ("Software Engineer, 120000, 2");
INSERT INTO roles (title, salary, departments_id)
values ("Accountant, 125000, 3");
INSERT INTO roles (title, salary, departments_id)
values ("Legal Team Lead, 250000, 4");

INSERT INTO employees (first_name, last_name, role_id, manager_id)
values ("John", "Doe", 1, 3);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
values ("Mike", "Chan", 2, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
values ("Ashely", "Rodriques", 3, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
values ("Kevin", "Tupik", 4, 3);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
values ("Malia", "Brown", 5, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
values ("Sarah", "Loard", 2, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
values ("Tom", "Allen", 4, 7);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
values ("Christian", "Eckenrode", 1, 2);
