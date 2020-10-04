$( document ).ready( onReady);

// define global variables
let employees = [];
let totalMonthly = 0;

// page on load function
function onReady() {
    
    // define event listeners on load
    $('#addEmplyeeBtn').on('click', addEmployee);
    $('#listOfRows').on('click', '.removeRecord-Btn', removeRec);
    displaySalary()
}

// when this function runs, it creates a new emp obj contaning all the info from the inputs
// the function then runs the empty form inputs function, adds the employee object to the global employees array
// and finally calls the appendNewEmployee function
function addEmployee(arrayOfEmployees) {
    let newEmployee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        employeeID: $('#employeeID').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val(),
        isActive: true
    }
    emptyFormInputs();
    employees.push(newEmployee)
    appendNewEmployee();
}

// clears out form inputs
function emptyFormInputs(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeID').val('');
    $('#title').val('');
    $('#annualSalary').val('');
}

//displays latest employee obj to the DOM and calls calculate new monthly
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
        <li><input type="button" value="Delete" class="removeRecord-Btn"></li>
    </ul>
    </li>
    `);
    //after drawing object on DOM, store the employee obj in the latest row element
   $('.listRow:last-child').data('empSal', employee.annualSalary)

   calcNewMonthly(employee.annualSalary); //this should probably be called in the addNewEmployee function
}

// remove record deletes the row from the DOM, and sends calcNewMonthly a negative 
// number based on the annual salary of the employee that was removed
function removeRec() {
    let employeeData = $(this).parent().parent().parent().data();
    calcNewMonthly(employeeData.empSal * -1);
    $(this).parent().parent().remove()
}

// takes in the global monthly, and adds the monthly cost of the employee
function calcNewMonthly(empSalary) {
    totalMonthly+= (empSalary / 12) ;
    displaySalary();
}

//empties monthly cost element, and appends it with current monthly
function displaySalary() {
    $('#monthlyCost').empty();
    $('#monthlyCost').append(`
    ${totalMonthly}
    `)
    
    if (totalMonthly > 20000) {
        $('.costDivDef').toggleClass('costDivAlert'); // set class to alert class if condition met
    } else if (totalMonthly < 20000) {
        $('#monthlyCostDiv').toggleClass(); //empty class list to prevent doubling up on classes or removing default
        $('#monthlyCostDiv').toggleClass('costDivDef'); //add default class 
    }
}