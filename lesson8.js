const input = document.querySelector ("#text");
input.addEventListener ("input", printInput);
function printInput() {
  console.log(input.value);
}