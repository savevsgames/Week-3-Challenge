// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let moreEmployees = true;
  const employeeList = [];
  while (moreEmployees) {
    const fName = prompt("Enter First Name: ");
    const lName = prompt("Enter last Name: ");
    const pay = parseInt(prompt("Enter salary in USD: "));
    const employee = { firstName: fName, lastName: lName, salary: pay };
    employeeList.push(employee);

    let employeePrompt = confirm(`Do you want to add another employee?`);
    if (employeePrompt) {
      moreEmployees = true;
    } else {
      moreEmployees = false;
    }
  }

  return employeeList;
  // console.log(employeeList);
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  const totalSal = [];
  for (let i = 0; i < employeesArray.length; i++) {
    let employeePay = employeesArray[i].salary;

    totalSal.push(employeePay);
    console.log(`${totalSal[i]} is pushed`);
  }
  const totalPayout = totalSal.reduce((accumulator, total) => {
    return total + accumulator;
  }, 0);
  console.log(`${totalPayout} is the total salary payout.`);
  let averageSalary = totalPayout / employeesArray.length;
  console.log(`${averageSalary} is the average salary`);
  const totalRow = {
    firstName: "EMPLOYEE AVERAGE",
    lastName: "",
    salary: averageSalary,
  };
  employeesArray.push(totalRow);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

  const rand = Math.floor(Math.random() * employeesArray.length);
  console.log(`${rand} is my random #`);
  let randomSelection = employeesArray[rand];
  return randomSelection;
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    console.log(`${currentEmployee.salary} is the salary of the emp`);
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
