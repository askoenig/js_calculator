let num1;
let num2;
let chain;
let clickedOperator;
let operating = false;
let decimalUsed = false;

const button = document.querySelectorAll(".calc-button");
let input = document.querySelector('input[name="output"]');

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () =>
    numberPress((numberPressed = button[i].innerHTML))
  );
}

function numberPress(numberPressed) {
  if (!!operating) {
    input.value = "";
    input.value = numberPressed;
    // operating = false;
    console.log("BUTTON SCOPE->" + "num1:" + num1, "num2:" + num2);
  } else if (numberPressed === "." && !decimalUsed) {
    input.value = input.value + ".";
    decimalUsed = true;
    document.getElementById("decimal").disabled = true;
    console.log("BUTTON SCOPE->" + "num1:" + num1, "num2:" + num2);
  } else if (numberPressed === "C") {
    input.value = "";
    num1 = "";
    num2 = "";
    clickedOperator = false;
    decimalUsed = false;
    operating = false;
    console.log("BUTTON SCOPE->" + "num1:" + num1, "num2:" + num2);
  } else {
    input.value += numberPressed;
  }
}

const operator = document.querySelectorAll(".operator-button");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", () => {
    // console.log(
    //   "num1:" + num1,
    //   "operating:" + operating,
    //   "clickedOperator:" + clickedOperator,
    //   "num2:" + num2,
    //   "chain:" + chain
    // );
    if (!!operating) {
      console.log(num1);
      num2 = input.value;
      operate(num1, num2, clickedOperator);
      num1 = input.value;
      clickedOperator = operator[i].innerHTML;
      operating = true;
      decimalUsed = false;
      chain = "yes";
      document.getElementById("decimal").disabled = false;
      // numberPress(input.value);
      console.log(num1, "chain = yes", clickedOperator);
    }
    // else if (!!clickedOperator) {
    //   num1 = input.value;
    //   clickedOperator = operator[i].innerHTML;
    //   operating = true;
    //   decimalUsed = false;
    //   chain = "yes";
    //   document.getElementById("decimal").disabled = false;
    //   console.log("first operator", operating, num1);
    // }
    else {
      num1 = input.value;
      clickedOperator = operator[i].innerHTML;
      operating = true;
      decimalUsed = false;
      chain = "yes";
      document.getElementById("decimal").disabled = false;
      console.log("first operator", operating, num1);
    }
    // console.log(num1, num2, clickedOperator, operating);
  });
}

const equals = document.querySelector(".equals-button");
equals.addEventListener("click", () => {
  num2 = input.value;
  console.log(num1, clickedOperator, num2);
  operate(num1, num2, clickedOperator, true);
  operating = false;
});

function add(x, y) {
  return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function modulo(x, y) {
  return x % y;
}

function operate(num1, num2, operator, operating) {
  if (operator === "+") {
    console.log(
      "num1:" + num1,
      operator,
      "num2:" + num2,
      "operating:" + operating
    );
    input.value = add(num1, num2);
  } else if (operator === "-") {
    console.log(
      "num1:" + num1,
      operator,
      "num2:" + num2,
      "operating:" + operating
    );
    input.value = subtract(num1, num2);
  } else if (operator === "*") {
    console.log(
      "num1:" + num1,
      operator,
      "num2:" + num2,
      "operating:" + operating
    );
    input.value = multiply(num1, num2);
  } else if (operator === "/") {
    console.log(
      "num1:" + num1,
      operator,
      "num2:" + num2,
      "operating:" + operating
    );
    input.value = divide(num1, num2);
  } else if (operator === "%") {
    console.log(
      "num1:" + num1,
      operator,
      "num2:" + num2,
      "operating" + operating
    );
    input.value = modulo(num1, num2);
  }

  num1 = input.value;
  num2 = "";
  decimalUsed = false;
  operating = false;
  chain = "no";
  document.getElementById("decimal").disabled = false;
  console.log(
    "OPERATE SCOPE->" + "num1:" + num1,
    "operating:" + operating,
    "clickedOperator:" + clickedOperator,
    "num2:" + num2
    // "chain:" + chain
  );
}

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  decimalUsed = false;
  operating = false;
  chain = "no";
  document.getElementById("decimal").disabled = false;
});
