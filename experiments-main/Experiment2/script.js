let employees = [];

function addEmployee() {
let name = document.getElementById("name").value;
let id = document.getElementById("id").value;
let salary = Number(document.getElementById("salary").value);
let department = document.getElementById("department").value;

if (name === "" || id === "" || salary === "" || department === "") {
alert("Please fill all fields");
return;
}

let employee = {
name: name,
id: id,
salary: salary,
department: department
};

employees.push(employee);

document.getElementById("output").innerHTML = "Employee Added Successfully!";

document.getElementById("name").value = "";
document.getElementById("id").value = "";
document.getElementById("salary").value = "";
document.getElementById("department").value = "";
}

function displayEmployees() {
let output = "";

for (let emp of employees) {
output +=
"Name: " + emp.name +
" | ID: " + emp.id +
" | Salary: ₹" + emp.salary +
" | Department: " + emp.department +
"<br>";
}

document.getElementById("output").innerHTML = output;
}

function filterSalary() {
let filtered = employees.filter(emp => emp.salary > 50000);

let output = "";

for (let emp of filtered) {
output +=
"Name: " + emp.name +
" | ID: " + emp.id +
" | Salary: ₹" + emp.salary +
" | Department: " + emp.department +
"<br>";
}

document.getElementById("output").innerHTML = output || "No employees found";
}

function totalSalary() {
let total = 0;

for (let emp of employees) {
total += emp.salary;
}

document.getElementById("output").innerHTML = "Total Salary Payout: ₹" + total;
}

function averageSalary() {
if (employees.length === 0) {
document.getElementById("output").innerHTML = "No employees available";
return;
}

let total = 0;

for (let emp of employees) {
total += emp.salary;
}

let avg = total / employees.length;

document.getElementById("output").innerHTML = "Average Salary: ₹" + avg.toFixed(2);
}

function countDepartment() {
let dept = prompt("Enter Department Name:");

let count = 0;

for (let emp of employees) {
if (emp.department.toLowerCase() === dept.toLowerCase()) {
count++;
}
}

document.getElementById("output").innerHTML = "Employees in " + dept + " department: " + count;
}