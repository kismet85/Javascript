function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result = 0;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "multi":
            result = num1 * num2;
            break;
        case "div":
            if (num2 != 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
    }

    document.getElementById("result").innerText = "Result: " + result;
}