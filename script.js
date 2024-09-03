const calculus = document.querySelector('.calculate');
calculus.addEventListener('click', () => {
    document.getElementById('results').innerHTML =
        `
    <div id="new-results">
    <h2>Your results</h2>
    <p>Your results are shown below based on the information<br>you provided. To adjust the results,edit the form and<br> click "calculate repayments" again.</p>
    <div>
    <p>Your monthly repayments</p>
    </div>
    </div>
    `
});

const interestOnly = document.getElementById('interest-only');
interestOnly.addEventListener('change', interest);

const mortgage = document.getElementById('repayment1');
mortgage.addEventListener('change', mortgage);

function interest() {
    const mortgageAmount = document.getElementById('amount');
    const interestRate = document.getElementById('rate');
    if (mortgageAmount === "0" || interestRate === "0") {

    } else {

    }
};

function mortgage() {
    const mortgageAmount = document.getElementById('amount');
    const interestRate = document.getElementById('rate');
    const mortgageTerm = document.getElementById('term1');
};