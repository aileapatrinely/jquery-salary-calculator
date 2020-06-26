$(document).ready(onReady);

let employeeInfo = [];
let totalCost = 0;

function onReady() {
  $('#js-submit-button').on('click', submitForm);
  $('#js-table').on('click', '.js-row', fired);
}

function submitForm(event) {
  event.preventDefault();

  const employee = {
    firstName: $('#js-in-firstName').val(),
    lastName: $('#js-in-lastName').val(),
    idNumber: $('#js-in-idNum').val(),
    annualSalary: $('#js-in-annualsal').val(),
  };
  employeeInfo.push(employee);

  $('#js-table').append(`
  <tr class='js-row'>
  <td>${employee.firstName}</td>
  <td>${employee.lastName}</td>
  <td>${employee.idNumber}</td>
  <td>${employee.annualSalary}</td>
  <td><button class='delete-button'>Fired!</td></tr>`);
  $('#js-table-body').empty();
  totalCost = 0;

  for (let employee of employeeInfo) {
    employee.annualSalary = parseFloat(employee.annualSalary);
    totalCost += employee.annualSalary / 12;
    console.log(totalCost);
    $('.js-total').empty();
    $('.js-total').append(
      `<h2>Total Monthly Cost: $${totalCost.toFixed(2)}</h2>`
    );
    if (totalCost > 20000) {
      $('.js-total').addClass('red');
    } else {
      $('.js-total').removeClass('red');
    }
  }

  render();
}

function render() {
  $('#js-in-firstName').val('');
  $('#js-in-lastName').val('');
  $('#js-in-idNum').val('');
  $('#js-in-annualsal').val('');
}

function fired() {
  $(this).remove();
}
