function calculate() {
    const input = document.getElementById("calculation").value;
    const operationIndex = input.search(/[+\-*/]/);

    if (operationIndex === -1) {
        document.getElementById("result").innerText = "Invalid input";
        return;
    }

    const num1 = parseInt(input.slice(0, operationIndex));
    const num2 = parseInt(input.slice(operationIndex + 1));
    const operation = input.charAt(operationIndex);
    let result = 0;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            document.getElementById("result").innerText = "Invalid operation";
            return;
    }

    document.getElementById("result").innerText = "Result: " + result;
}