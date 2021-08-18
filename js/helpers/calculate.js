const calculate = (tip, bill, people)=> {

    if(tip > 0 && bill > 0 && people > 0) {
        const tipValue = (bill * tip) / 100;
        const tipAmount = tipValue / people;
        const total = parseFloat((bill + tipValue) / people);
        const results = [tipAmount.toFixed(2), total.toFixed(2)];
        
        return results;
    }

    return [0, 0];
}

export default calculate;