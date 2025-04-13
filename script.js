function append(char) {
  document.getElementById('display').value += char;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteChar() {
  let  display=documengetElementByIdgetElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (e) {
    alert("Invalid Expression");
  }
}
