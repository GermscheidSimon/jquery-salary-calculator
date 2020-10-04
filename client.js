$( document ).ready( onReady);

// define global variables
let employees = [];

// page on load function
function onReady(parms) {
    
    // define event listeners on load
    $('#addEmplyeeBtn').on('click', addEmployee)

}

function addEmployee(arrayOfEmployees) {
    let newEmployee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        employeeID: $('#employeeID').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val()
    }
    emptyFormInputs();
    employees.push(newEmployee)
    appendNewEmployee();
}

function emptyFormInputs(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeID').val('');
    $('#title').val('');
    $('#annualSalary').val('');
}

function appendNewEmployee() {
    let employee = employees[employees.length -1]

    $('#listOfRows').append(`
    <li class="listRow">
    <ul class="columnHeader">
        <li>${employee.firstName}</li>
        <li>${employee.lastName}</li>
        <li>${employee.employeeID}</li>
        <li>${employee.title}</li>
        <li>${employee.annualSalary}</li>
    </ul>
    </li>
    `);
}