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
}

function emptyFormInputs(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeID').val('');
    $('#title').val('');
    $('#annualSalary').val('');
}