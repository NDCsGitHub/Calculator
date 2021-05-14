//define displays
const displayTop = document.querySelector(".displayTop");
const displayBot = document.querySelector(".displayBot");

//define buttons
const numButtons = document.querySelectorAll('.numKey');
const decimal = document.querySelector('.decimal');
const operationButton = document.querySelectorAll('#opsButton');
const equalButton = document.querySelector('.equal');
const delButton = document.querySelector('.del');
const acButton = document.querySelector('.ac');


//add eventlistener to all the buttons
decimal.addEventListener('click',addDecimal)
delButton.addEventListener('click', deleteNum)
acButton.addEventListener('click', clear)
equalButton.addEventListener('click', calculate)


//define variables
let firstOperand = "";
let secondOperand = "";
let currentOperation = undefined;




//add eventlistener to all number buttons and also operation button
numButtons.forEach(button => button.addEventListener('click',()=>{
    appendNum(button.textContent)
}))

operationButton.forEach(button=>button.addEventListener('click',()=>{
    appendOperation(button.textContent)
}))

function appendNum(num){
    if(displayBot.textContent==="0"){
        displayBot.textContent = "";
    }
    displayBot.textContent += num;
}

function addDecimal(){
    if(displayBot.textContent===""){
        displayBot.textContent = "0"
    }
    if(displayBot.textContent.includes(".")){
        return
    }
    displayBot.textContent += ".";
}



function appendOperation(operator){

    if(currentOperation!==undefined){
        calculate();
    }   

    firstOperand = displayBot.textContent
    displayTop.textContent=displayBot.textContent + operator
    displayBot.textContent=""
    currentOperation = operator;
}

function calculate(){
    displayTop.textContent=""
    secondOperand=displayBot.textContent
    displayBot.textContent = operate(currentOperation, firstOperand, secondOperand)
    currentOperation=undefined
}

function operate(operator,num1,num2){
    switch(operator){
    case "+":
        return addition(num1, num2);
        break;
    case "-":
        return subtraction(num1, num2);
    case "x":
        return multiplication(num1, num2);
        break;
    case "÷":
        return division(num1, num2);
        break;    
    }
}



//function for addition
function addition(firstNum, secondNum){
    return Number(firstNum) + Number(secondNum);
};

//function for subtract
function subtraction(firstNum, secondNum){
    return Number(firstNum) - Number(secondNum);
};

//function for multiply
function multiplication(firstNum, secondNum){
    return Number(firstNum) * Number(secondNum);
}

//function for divide
function division(firstNum, secondNum){
    return Number(firstNum) / Number(secondNum);
}



//function for deleteing last digit number
function deleteNum(){
    displayBot.textContent = displayBot.textContent.slice(0,-1) 
}



//function for reseting the calculator
function clear(){
    displayBot.textContent="0"
    displayTop.textContent=""
    firstOperand="";
    secondOperand=""
    currentOperation=undefined;
}









//adding feature to toggle night and day mode
const body = document.querySelector("body");
const h1= document.querySelector('h1');
const day =document.querySelector('.day');
const night= document.querySelector('.night');
const dayNightContainer = document.querySelector('.dayNightContainer');
const display=document.querySelector('.display');
const calculatorContainer = document.querySelector('.calculatorContainer')

day.addEventListener('click',()=>{

    body.classList.add("bodyday");
    dayNightContainer.classList.add("dayNightContainerDay");
    h1.classList.add('h1Day')
    numButtons.forEach(key=>key.classList.add("keyDay"))
    decimal.classList.add('keyDay')
    equalButton.classList.add('opsButtonDay')
    operationButton.forEach(button=>button.classList.add("opsButtonDay"))
    delButton.classList.add('delDay');
    acButton.classList.add('acDay');
    display.classList.add('displayDay')
    calculatorContainer.classList.add('calculatorContainerDay')
})

night.addEventListener('click',()=>{
    body.classList.remove('bodyday');
    dayNightContainer.classList.remove("dayNightContainerDay")
    h1.classList.remove('h1Day')
    numButtons.forEach(key=>key.classList.remove("keyDay"))
    decimal.classList.remove("keyDay")
    equalButton.classList.remove('opsButtonDay')
    operationButton.forEach(button=>button.classList.remove("opsButtonDay"))
    delButton.classList.remove('delDay');
    acButton.classList.remove('acDay');
    display.classList.remove('displayDay')
    calculatorContainer.classList.remove('calculatorContainerDay')
})


//adding feature to allow keyborad function
window.addEventListener("keydown", input);
function input(e) {
    if (e.key >= 0 && e.key <= 9){
        appendNum(e.key)
    };
    if (e.key === "."){
        addDecimal();
    }
    if (e.key === "Enter"){
        calculate();
    }
    if (e.key === "Backspace"){
        deleteNum();
    }
    if (e.key === "Escape"){
        clear();
    }
    if (e.key === "+"){
        appendOperation("+");
    }
    if (e.key === "/"){
        appendOperation("÷");
    } 
    if (e.key === "*"){
        appendOperation("x");
    }
    if (e.key === "-"){
        appendOperation("-");
    }
    if (e.key === "+"){
        appendOperation("+");
    }
}

