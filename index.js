function savingCalculation(){
    const savings = document.getElementById('savings').value;
    const rate = document.getElementById('rate').value;
    const duration =document.getElementById('duration').value;
    const interest = (savings * (rate/100) *duration);
    const earnings = Number(savings) +interest;
    document.getElementById('profit').value = interest.toFixed(2);
    document.getElementById('totals').value = earnings.toFixed(2);   
}

savingCalculation();