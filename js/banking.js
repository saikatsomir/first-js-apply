function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputAmountText = input.value;
    const inputAmount = parseFloat(inputAmountText);
    // clear browuse data 
    input.value = '';

    return inputAmount
}
function getUdateField(totalField, amount) {
    // debugger;
    const totalAmount = document.getElementById(totalField);
    const totalText = totalAmount.innerText
    const previousAmount = parseFloat(totalText)
    totalAmount.innerText = previousAmount + amount
}
function getUpdateBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText)
    return balanceTotalAmount;
}
function updateBalance(amount, isadd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = getUpdateBalance();
    if (isadd == true) {
        balanceTotal.innerText = balanceTotalAmount + amount;
    }
    else {
        balanceTotal.innerText = balanceTotalAmount - amount;
    }
}
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        getUdateField('deposit-total', depositAmount)
        updateBalance(depositAmount, true)
    }
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getUpdateBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        getUdateField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount)
    }
})