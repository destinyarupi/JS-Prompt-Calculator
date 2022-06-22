const num1 = parseFloat(prompt("Enter first number"));
const operator =  prompt("Enter an operator from the list: +, -, *, /");
const num2 = parseFloat(prompt("Enter second number"));
let result = ""

if(isNaN(num1) || isNaN(num2)){
    alert('Please fill all inputs and insert only number values. Refresh the page and try again.')
} else{
    switch(operator){
        case "+":
            result = num1 + num2;
            alert(`${num1} + ${num2} = ${result}`);
            break;
        case "-":
            result = num1 - num2;
            alert(`${num1} - ${num2} = ${result}`);
            break;
        case "*":
            result = num1 * num2;
            alert(`${num1} * ${num2} = ${result}`);
            break;
        case "/":
            result = num1 / num2;
            alert(`${num1} / ${num2} = ${result}`);
            break;
        default:
            alert('Invalid operator! Please choose an operator from the listed provided.')
        }   
}

