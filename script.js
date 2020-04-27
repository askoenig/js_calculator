let num1;
let num2;
let clickedOperator;
let operating = false;
let decimalUsed = false;

const button = document.querySelectorAll(".calc-button");
let input = document.querySelector('input[name="output"]');

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    if (!!operating) {
      input.value = "";
      input.value = button[i].innerHTML;
    } else if (button[i].innerHTML === "." && !decimalUsed) {
      input.value = input.value + ".";
      decimalUsed = true;
      document.getElementById("decimal").disabled = true;
    } else if (button[i].innerHTML === "C") {
      input.value = "";
      num1 = "";
      num2 = "";
      clickedOperator = false;
      decimalUsed = false;
      operating = false;
    } else {
      input.value += button[i].innerHTML;
    }
  });
}

const operator = document.querySelectorAll(".operator-button");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", () => {
    if (!!operating) {
      console.log(num1);
      num2 = input.value;
      operate(num1, num2, clickedOperator);
      num1 = input.value;
      clickedOperator = operator[i].innerHTML;
      operating = true;
      decimalUsed = false;
      document.getElementById("decimal").disabled = false;
    } else {
      num1 = input.value;
      clickedOperator = operator[i].innerHTML;
      operating = true;
      decimalUsed = false;
      document.getElementById("decimal").disabled = false;
    }
  });
}

const equals = document.querySelector(".equals-button");
equals.addEventListener("click", () => {
  num2 = input.value;
  operate(num1, num2, clickedOperator, true);
  operating = false;
});

add = (x, y) => parseFloat(x) + parseFloat(y);

subtract = (x, y) => x - y;

multiply = (x, y) => x * y;

divide = (x, y) => x / y;

modulo = (x, y) => x % y;

function operate(num1, num2, operator) {
  if (operator === "+") {
    input.value = add(num1, num2);
  } else if (operator === "-") {
    input.value = subtract(num1, num2);
  } else if (operator === "*") {
    input.value = multiply(num1, num2);
  } else if (operator === "/") {
    input.value = divide(num1, num2);
  } else if (operator === "%") {
    input.value = modulo(num1, num2);
  }

  num1 = input.value;
  num2 = "";
  decimalUsed = false;
  operating = false;
  document.getElementById("decimal").disabled = false;
}

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  decimalUsed = false;
  operating = false;
  document.getElementById("decimal").disabled = false;
});
