function calculate() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseFloat(document.getElementById('years').value);
    const monthly = parseFloat(document.getElementById('monthly').value) || 0;

    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        document.getElementById('result').innerText = 'Please enter valid values.';
        return;
    }

    const months = years * 12;
    const monthlyRate = rate / 12;

    // Cálculo com aporte mensal
    let amount = principal * Math.pow((1 + monthlyRate), months);
    for (let i = 1; i <= months; i++) {
        amount += monthly * Math.pow((1 + monthlyRate), (months - i));
    }

    document.getElementById('result').innerText = amount.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP'
    });
}
