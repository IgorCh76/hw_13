//-----------function calc()------
const firstVal = document.getElementById('first_value');
const secVal = document.getElementById('second_value');
const resSpan = document.getElementById('res_calc');
const operator = document.getElementById('operator');

function calc() {
    isNumber(firstVal.value);
    isNumber(secVal.value);
    let num1 = parseFloat(firstVal.value);
    let num2 = parseFloat(secVal.value);
    let res = 0;
    switch (operator.value) {
        case('+'):
            return resSpan.textContent = (res = num1 + num2);
        case('-'):
            return resSpan.textContent = (res = num1 - num2);
        case('*'):
            return resSpan.textContent = (res = num1 * num2);
        case('/'):
            if (num2 !== 0) {
                return resSpan.textContent = (res = num1 / num2);
            } else {
                alert("Divided by zero!");
            }
    }
}

//-------------function addItem()---------------------
const itemInput = document.getElementById('item_input');
const sumItem = document.getElementById('sum_item');
const arr = [];
const arrayResult = document.getElementById('array_result');

function addItem() {
    let num = parseFloat(itemInput.value);
    let sum = 0;
    arr.push(num);
    for(num of arr){
        sum += num;
    }
    sumItem.textContent = sum;
    arrayResult.textContent = JSON.stringify(arr);
}

//-------------functon reverseNumber()----------------
const numberInput = document.getElementById('number_input');
const revNum = document.getElementById('reverse_result');

function reverseNumber() {
    isNumber(numberInput.value);
    let num = +numberInput.value;
    let rev = 0;
   while(num > 0) {
       let lastDigit = num % 10;
       rev = rev * 10 + lastDigit;
       num = Math.floor(num / 10);
       // console.log("Reverse number : "+rev);
   }
    return revNum.textContent = `${rev}`;
}

//--------------function isNumber()---------------
function isNumber(x) {
    if(x === ''){
        return false;
    }
    const numX = +x;
    if(isNaN(numX)){
        return false;
    }else{
        return true;
    }
}