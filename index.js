//get numbers + validation (isNaN)
//getOperand + validation by array
//calculation
//show result

let operator1 = getNumber();
let operator2 = getNumber();
let operand = getOperand();
let res = calc(operator1, operator2, operand);

alert(`${operator1} ${operand} ${operator2} = ${res}`);

function getNumber() {
    let numb = Number(prompt("Type number"));
    if (isNaN(numb)) {
        alert("Wrong action. Please type a number");
        return getNumber();
    }
    return numb
}


function getOperand() {
    let operand = prompt("Type operand");
    let operands = ["+", "-", "*", "/"];
    if (!operands.includes(operand)) {
        alert('Wrong action. Please type +,-,*,/');
        return getOperand();
    }
    return operand
}

function calc(num1, num2, oper) {
    let result
    switch (oper) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "*":
            result = num1 * num2
            break;
        case "/":
            result = num1 / num2
            break;
    }
    return result
}

