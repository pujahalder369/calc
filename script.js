const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const clear = document.querySelector("#allClear");
const equal = document.querySelector("#equal");
const numDelete = document.querySelector("#delete");
const decimal = document.querySelector(".decimal");

let num2 = 0;
let result = 0;
let value = 0;
let opr = "";

numbers.forEach((e) => { // first value
  e.addEventListener("click", () => {
    display.innerHTML += e.innerHTML;
  });
});

operator.forEach((e) => { // operator sign
  e.addEventListener("click", () => {
    value = Number(display.innerHTML);
    opr = e.innerHTML;
    display.innerHTML = "";
    // console.log(e.innerHTML);
  });
});

equal.addEventListener("click", () => { // second value & calculate
  num2 = Number(display.innerHTML);
  if (opr === "+") {
    result = value + num2;
    display.innerHTML = result;
  }
  if (opr === "-") {
    result = value - num2;
    display.innerHTML = result;
  }
  if (opr === "*") {
    result = value * num2;
    display.innerHTML = result;
  }
  if (opr === "/") {
    result = value / num2;
    display.innerHTML = result;
  }
});

decimal.addEventListener("click", (e) => { // decimal value
  if (!display.innerHTML.includes(".")) {
    display.innerHTML += ".";
  }
});

clear.addEventListener("click", () => { // all clear button
  display.innerHTML = "";
  //   console.log(display.innerHTML);
});

numDelete.addEventListener("click", () => {  // last number delete button
  display.innerHTML = display.innerHTML.slice(0, -1);
});
