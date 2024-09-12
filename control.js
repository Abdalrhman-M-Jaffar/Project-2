// Variables
let amountError = document.getElementById('Amount-error'); // Errors
let termError = document.getElementById('term-error');
let rateError = document.getElementById('rate-error');
let typeError = document.getElementById('type-error');

let amountTextBox = document.getElementById('mortgage-amount-text-box'); // Text Boxes
let termTextBox = document.getElementById('mortgage-term-text-box');
let rateTextBox = document.getElementById('interest-rate-text-box');

let asSign = document.getElementById('As-sign'); // Signs
let termSign = document.getElementById('years-sign');
let rateSign = document.getElementById('B-sign');

// design variable
let repayment = document.getElementById('repayment');
let interest = document.getElementById('interest');

let repaymentLabel = document.getElementById('repayment-type');
let interestLabel = document.getElementById('interest-type');

let resultSection = document.getElementById('left-section-calc');

// Programming Variavles
// values
// let amount = amountTextBox.value; 
// let term = termTextBox.value;

let paymentPerMonth = 1;
let paymentWithIntrest = 1;
let FullPayment = 1;


let monthPayment = document.getElementById('month-payment'); // inner
let totalPayment = document.getElementById('total-payment');

// Programming Functions

function submit(){
    if(amountTextBox.value.length == 0){
        amountError.style.cssText = `margin-top: 3px; opacity: 1;`
        amountTextBox.style.cssText = `border: 1px solid #d73329;`
        asSign.style.cssText = `background-color: #d73329;`
    }
    else{
        amountError.style.cssText = `margin-top: 0px; opacity: 0;`
        amountTextBox.style.cssText = `border: 1px solid #666;`
        asSign.style.cssText = `background-color: #e3f4fc;`
    }

    if(termTextBox.value.length == 0){
        termError.style.cssText = `margin-top: 3px; opacity: 1;`
        termTextBox.style.cssText = `border: 1px solid #d73329;`
        termSign.style.cssText = `background-color: #d73329;`
    }
    else{
        termError.style.cssText = `margin-top: 0px; opacity: 0;`
        termTextBox.style.cssText = `border: 1px solid #666;`
        termSign.style.cssText = `background-color: #e3f4fc;`
    }

    if(rateTextBox.value.length == 0){
        rateError.style.cssText = `margin-top: 3px; opacity: 1;`
        rateTextBox.style.cssText = `border: 1px solid #d73329;`
        rateSign.style.cssText = `background-color: #d73329;`
    }
    else{
        rateError.style.cssText = `margin-top: 0px; opacity: 0;`
        rateTextBox.style.cssText = `border: 1px solid #666;`
        rateSign.style.cssText = `background-color: #e3f4fc;`
    }

    if(repayment.checked || interest.checked){
        typeError.style.cssText = `margin-top: 0px; opacity: 0`;
    }
    else{
        typeError.style.cssText = `margin-top: 3px; opacity: 1;`;
    }

    if(amountTextBox.value.length > 0 && termTextBox.value.length > 0 && rateTextBox.value.length > 0 && repayment.checked || interest.checked){
        resultSection.style.cssText = `opacity: 1;`
        if(repayment.checked){
            monthPayment.innerHTML = `£${(amountTextBox.value / (termTextBox.value * 12)) + (amountTextBox.value / (termTextBox.value * 12) * (rateTextBox.value / 100))}`;
            totalPayment.innerHTML = `£${+amountTextBox.value + (amountTextBox.value * (rateTextBox.value))}`;
        }
        if(interest.checked){
            monthPayment.innerHTML = `£${(amountTextBox.value / (termTextBox.value * 12) * rateTextBox.value)}`;
            totalPayment.innerHTML = `£${+amountTextBox.value + (amountTextBox.value * rateTextBox.value)}`;
        }
    }
}





function clearAll(){
    amountTextBox.value = '';
    termTextBox.value = '';
    rateTextBox.value = '';
    if(repayment.checked){
        repayment.checked = false;
        repaymentLabel.style.cssText = `background-color: #FFF; border-color: #88a5b7`;
        
    }
    if(interest.checked){
        interest.checked = false;
        interestLabel.style.cssText = `background-color: #FFF; border-color: ##88a5b7`;
    }
    resultSection.style.cssText = `opacity: 0;`
}

// Styling Function

function repaymentLabelStyle(){
    if(repayment.checked){
        repaymentLabel.style.cssText = `background-color: #fafae0; border-color: #d7da2e`;
        interestLabel.style.cssText = `background-color: #FFF; border-color: #88a5b7`;
    }
}

function interestLabelStyle(){
    if(interest.checked){
        interestLabel.style.cssText = `background-color: #fafae0; border-color: #d7da2e`;
        repaymentLabel.style.cssText = `background-color: #FFF; border-color: #88a5b7`;
    }
}

function notEmptyBoxAmout(){
    if(amountTextBox.value.length > 0){
        amountError.style.cssText = `margin-top: 0px; opacity: 0;`
        amountTextBox.style.cssText = `border: 1px solid #666;`
        asSign.style.cssText = `background-color: #e3f4fc;`
    }
}

function notEmptyBoxTerm(){
    if(termTextBox.value.length > 0){
        termError.style.cssText = `margin-top: 0px; opacity: 0;`
        termTextBox.style.cssText = `border: 1px solid #666;`
        termSign.style.cssText = `background-color: #e3f4fc;`
    }
}

function notEmptyBoxRate(){
    if(rateTextBox.value.length > 0){
        rateError.style.cssText = `margin-top: 0px; opacity: 0;`
        rateTextBox.style.cssText = `border: 1px solid #666;`
        rateSign.style.cssText = `background-color: #e3f4fc;`
    }
}

function notEmptyBoxType(){
    if(repayment.checked || interest.checked){
        typeError.style.cssText = `margin-top: 0px; opacity: 0`;
    }
    else{
        typeError.style.cssText = `margin-top: 3px; opacity: 1;`;
    }
}