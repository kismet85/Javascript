function even(numbers) {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

function mainProgram() {
    const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let p = document.getElementById("code");
    let evenArr = even(numberList);
    p.innerHTML += '<p>Original Array: ' + numberList.join(', ')  + '</p>';
    p.innerHTML += '<p>Even Array: ' + evenArr.join(', ') + '</p>';
}

mainProgram();

