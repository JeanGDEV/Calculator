let displayValue = document.querySelector("input")

let currentNumber = 0
let firstNumber = null
let operator = null
let waitingSecondNumber = false
let isEvaluated =  false

function updateDisplay(){
    displayValue.textContent = currentNumber
}