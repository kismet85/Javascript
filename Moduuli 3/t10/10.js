function readName() {
  document.getElementById("source").addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = document.querySelector('input[name="firstname"]').value;
    const lastName = document.querySelector('input[name="lastname"]').value;
    const p = document.getElementById('target')
    p.innerHTML = "Your name is " + firstName + " " + lastName
  });
}

function mainProgram() {
  readName();
}

mainProgram();