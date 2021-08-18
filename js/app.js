import calculate from "./helpers/calculate.js";
import printResults from "./helpers/print-results.js";
import removeActive from "./helpers/remove-active.js";

const optBill = document.getElementById('bill');
const optTipBtn = document.getElementsByClassName('btn btn-num');
const optTipCustom = document.getElementById('tip-custom');
const optPeople = document.getElementById('people');
const resetBtn = document.getElementById('reset');
const warnLabel = document.getElementById('warn-label');


let bill = 0;
let tip = 0;
let people = 0;

const calculator = (e) => {

    if (e.target.classList.contains('btn-num')){
        removeActive();
        tip = parseFloat(e.target.value);
        e.target.classList.toggle('active');
        optTipCustom.value = '';
    }
    if (e.target.id === 'bill'){
        if (e.target.value !== '') {
            bill = parseFloat(e.target.value);
        } else {
            bill = 0;
        }
    }
    if (e.target.id === 'tip-custom'){
        if (e.target.value !== '') {
            removeActive();
            tip = parseFloat(e.target.value);
        } else {
            tip = 0;
        }
    }
    if (e.target.id === 'people'){
        if (e.target.value !== '') {
            warnLabel.classList.add('no-warn-label');
            optPeople.classList.remove('warn');
            warnLabel.classList.remove('warn-label');
            people = parseFloat(e.target.value);
        } else {
            people = 0;
        }

        if (people < 1) {
            warnLabel.classList.remove('no-warn-label');
            warnLabel.classList.add('warn-label');
            optPeople.classList.add('warn');
        }
    }

    const [tipAmount, total] = calculate(tip, bill, people);

    btnEnabledDisabled();

    if(tipAmount > 0 && total > 0  && people > 0) {
        printResults(tipAmount, total);
    }   
}

const btnEnabledDisabled = () => {
    if(tip !== 0 || bill !== 0 || people !== 0) {
        if(resetBtn.classList.contains('disabled')) {
            resetBtn.classList.remove('disabled');
            resetBtn.classList.add('enabled');
        } 
    } else {
        resetBtn.classList.add('disabled');
        resetBtn.classList.remove('enabled');
    }
}

const reset = (e) => {
    optBill.value = ''; 
    removeActive();
    optTipCustom.value = '';
    optPeople.value = ''; 
    bill = -1;
    tip = 0;
    people = -1;
    printResults(0.00, 0.00);
    resetBtn.classList.add('disabled');
    resetBtn.classList.remove('enabled');
}

optBill.addEventListener('focusout', calculator);
optPeople.addEventListener('focusout', calculator);
optTipCustom.addEventListener('focusout', calculator);

for(let i = 0; i < optTipBtn.length; i++) {
    optTipBtn[i].addEventListener('click', calculator);
}

resetBtn.addEventListener('click', reset);