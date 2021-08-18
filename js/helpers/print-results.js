const tipAmountLabel = document.getElementById('tip-amount');
const totalLabel = document.getElementById('total');

const printResults = (tipAmount, total) => {
    tipAmountLabel.innerText = `$${parseFloat(tipAmount).toFixed(2)}`;
    totalLabel.innerText = `$${parseFloat(total).toFixed(2)}`;
} 

export default printResults;