document.getElementById('select1').addEventListener('click', function () {
    const ol = document.getElementById('player-list');
    const olCheck = document.querySelectorAll('#player-list li');
    console.log(olCheck);
    if (olCheck.length == 5) {
        alert('List already Full');
        return;
    }
    const li1 = document.createElement('li');
    li1.innerText = 'Neymar JR';
    ol.appendChild(li1);
    const selectBtn = document.getElementById('select1');
    selectBtn.classList.add('disabled');

})
document.getElementById('select2').addEventListener('click', function () {
    const ol = document.getElementById('player-list');
    const olCheck = document.querySelectorAll('#player-list li');
    if (olCheck.length == 5) {
        alert('List already Full');
        return;
    }
    const li1 = document.createElement('li');
    li1.innerText = 'Leonel Messi';
    ol.appendChild(li1);
    const selectBtn = document.getElementById('select2');
    selectBtn.classList.add('disabled');
})
document.getElementById('select3').addEventListener('click', function () {
    const ol = document.getElementById('player-list');
    const olCheck = document.querySelectorAll('#player-list li');
    if (olCheck.length == 5) {
        alert('List already Full');
        return;
    }
    const li1 = document.createElement('li');
    li1.innerText = 'Kylian Mbappe';
    ol.appendChild(li1);
    const selectBtn = document.getElementById('select3');
    selectBtn.classList.add('disabled');
})
document.getElementById('select4').addEventListener('click', function () {
    const ol = document.getElementById('player-list');
    const olCheck = document.querySelectorAll('#player-list li');
    if (olCheck.length == 5) {
        alert('List already Full');
        return;
    }
    const li1 = document.createElement('li');
    li1.innerText = 'Kylian Mbappe';
    ol.appendChild(li1);
    const selectBtn = document.getElementById('select4');
    selectBtn.classList.add('disabled');
})
document.getElementById('select5').addEventListener('click', function () {
    const ol = document.getElementById('player-list');
    const olCheck = document.querySelectorAll('#player-list li');
    if (olCheck.length == 5) {
        alert('List already Full');
        return;
    }
    const li1 = document.createElement('li');
    li1.innerText = 'Ricardo Kaka';
    ol.appendChild(li1);
    const selectBtn = document.getElementById('select5');
    selectBtn.classList.add('disabled');
})
document.getElementById('select6').addEventListener('click', function () {
    const ol = document.getElementById('player-list');
    const olCheck = document.querySelectorAll('#player-list li');
    // console.log(olCheck);
    if (olCheck.length == 5) {
        alert('List already Full');
        return;
    }
    const li1 = document.createElement('li');
    li1.innerText = 'Cristiano Ronaldo';
    ol.appendChild(li1);
    const selectBtn = document.getElementById('select6');
    selectBtn.classList.add('disabled');
})
document.getElementById('calculate-btn').addEventListener('click', function () {
    const playerRateField = document.getElementById('per-player');
    const playerRateString = playerRateField.value;
    const playerRate = parseFloat(playerRateString);
    if (playerRateString === '' || isNaN(playerRateString)) {
        alert('Please enter valid amount');
        playerRateField.value = '';
        return;
    }

    const olCheck = document.querySelectorAll('#player-list li');

    const totalPlayerCost = playerRate * olCheck.length;
    const playerExpenseView = document.getElementById('player-expense-view');
    playerExpenseView.innerText = totalPlayerCost;
})
function getInputValueById(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputFieldString = inputField.value;
    if (inputFieldString === '' || isNaN(inputFieldString)) {
        alert('Please enter valid amount');
        inputField.value = '';
        // return;
    }
    const inputValue = parseFloat(inputFieldString);
    return inputValue;
}
function getElementValueById(fieldId) {
    const elementField = document.getElementById(fieldId);
    const elementFieldString = elementField.innerText;
    const elementValue = parseFloat(elementFieldString);
    return elementValue;
}
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const playerExpense = getElementValueById('player-expense-view');
    const managerCost = getInputValueById('manager');
    const coachCost = getInputValueById('coach');

    const totalBillAmount = playerExpense + managerCost + coachCost;

    console.log(totalBillAmount);
    const totalBillView = document.getElementById('total-amount-view');
    totalBillView.innerText = totalBillAmount;

})