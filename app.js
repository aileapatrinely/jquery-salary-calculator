$(document).ready(onReady);

let employeeInfo = [];
let totalCost = 0;

function onReady() {
  $('#js-submit-button').on('click', submitForm);
  $('#js-table').on('click', '.js-row', fired);
}

function submitForm(event) {
  event.preventDefault();

  appendTable();

  forOfLoop();

  render();
}

function appendTable() {
  const employee = {
    firstName: $('#js-in-firstName').val(),
    lastName: $('#js-in-lastName').val(),
    idNumber: $('#js-in-idNum').val(),
    annualSalary: $('#js-in-annualsal').val(),
  };
  employeeInfo.push(employee);

  $('#js-table').append(`
  <tr class='js-row wantborders'>
  <td class='wantborders darker'>${employee.firstName}</td>
  <td class='wantborders lighter'>${employee.lastName}</td>
  <td class='wantborders darker'>${employee.idNumber}</td>
  <td class='wantborders lighter'>${employee.annualSalary}</td>
  <td class='wantborders darker'><button class='btn btn-warning delete-button'>Fired!</td></tr>`);
  $('#js-table-body').empty();
  totalCost = 0;
}

function forOfLoop() {
  for (let employee of employeeInfo) {
    employee.annualSalary = parseFloat(employee.annualSalary);
    totalCost += employee.annualSalary / 12;
    console.log(totalCost);
    $('.js-total').empty();
    $('.js-total').append(
      `<h2 class="potato">Total Monthly Cost: $${totalCost.toFixed(2)}</h2>`
    );
    if (totalCost > 20000) {
      $('.js-total').addClass('red');
    } else {
      $('.js-total').removeClass('red');
    }
  }
}
function render() {
  $('#js-in-firstName').val('');
  $('#js-in-lastName').val('');
  $('#js-in-idNum').val('');
  $('#js-in-annualsal').val('');
}

function fired() {
  $(this).remove();
  // $(this).data($(this).text();
}
//a13b08
