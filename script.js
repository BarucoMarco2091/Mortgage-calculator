const calculus = document.querySelector('.calculate');
calculus.addEventListener('click', () => {
    document.getElementById('results').innerHTML =
        `
    <div id="new-results">
    <h2>Your results</h2>
    <p>Your results are shown below based on the information<br>you provided. To adjust the results, edit the form and<br> click "calculate repayments" again.</p>
    <div>
    <p>Your monthly repayments</p>
    <div>
    <p id="monthly-repayment"></p>
    </div>
    </div>
    </div>
    `
    const isInterestOnly = document.getElementById('interest-only').checked;
    if(isInterestOnly) {
        interest();
    } else {
        calculateMortgage();
    }
});

//adiciona listeners aos radio buttons
const interestOnly = document.getElementById('interest-only');
interestOnly.addEventListener('change', interest);

const mortgage = document.getElementById('repayment1');
mortgage.addEventListener('change', calculateMortgage);

//função para calcular interest only
function interest() {
    const mortgageAmount = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('rate').value);
    const monthlyRepayment = document.getElementById('monthly-repayment');
    const monthlyInterest = (mortgageAmount * (interestRate / 100)) / 12;
    monthlyRepayment.innerHTML = `£${monthlyInterest.toFixed(2)}`;

};

//função para calcular hipoteca
function calculateMortgage() {
    const principal = parseFloat(document.getElementById('amount').value);
    const annualInterestRate = parseFloat(document.getElementById('rate').value);
    const termInYears = parseFloat(document.getElementById('term1').value);
    const monthlyRepayment = document.getElementById('monthly-repayment');
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const numberOfPayments = termInYears * 12;
    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    const monthlyPayment = principal * (numerator / denominator);
    monthlyRepayment.innerHTML = `£${monthlyPayment.toFixed(2)}`;
};
