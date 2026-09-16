let displayValue = document.querySelector("input")


/** NUMBER & OPERATOR BUTTONS */
let numberButtons = document.querySelectorAll(".digit-btn")
let operatorButtons = document.querySelectorAll(".operator-btn")

/** SPECIAL BUTTONS */
let clearButton = document.querySelector(".clear-btn")
let deleteButton = document.querySelector(".back-btn")
let equalButton = document.querySelector(".equal-btn")

let currentNumber = 0
let firstNumber = null
let operator = null
let waitingSecondNumber = false
let isEvaluated =  false

function updateDisplay(){
    displayValue.textContent = currentNumber
}