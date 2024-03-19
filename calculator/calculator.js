window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  let initVals = {amount: 5000, years: 5, rate: 3}
  let uiAmount = document.getElementById('loan-amount');
  let uiYears = document.getElementById('loan-years');
  let uiRate = document.getElementById('loan-rate');

  uiAmount.value = initVals.amount;
  uiYears.value = initVals.years;
  uiRate.value = initVals.rate;
}

function update() {
  let currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

function calculateMonthlyPayment(values) {
  let n = Math.floor(values.years * 12);
  let monthRate = (values.rate / 100) / 12;
  let calc = (monthRate * values.amount) / (1 - Math.pow((1+ monthRate), -n));
  return calc.toFixed(2);
}

function updateMonthly(monthly) {
  let uiMonthly = document.getElementById('monthly-payment');
  uiMonthly.innerText = `$${monthly}`;
}
