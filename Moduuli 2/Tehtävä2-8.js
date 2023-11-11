function concat(nameList) {
  let result = '';
  for (let i = 0; i < nameList.length; i++) {
    result += nameList[i];
  }
  return result;
}

function mainProgram() {
  const nameList = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
  document.getElementById('code').innerHTML = concat(nameList) + ".";
}

mainProgram();