function mylist() {
  document.getElementById("target").innerHTML = `
  <ul class="my-list">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ul>
`;
}

function mainProgram() {
  mylist()
}

mainProgram();
