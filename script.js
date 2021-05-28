swal("😄", "You can use your Keyboard", "success");
let screenDiv = document.getElementById("screen");
screenDiv.innerHTML = "0";
function buttonClick(event, value) {
  event.preventDefault();
  if (
    screenDiv.innerHTML == "0" &&
    (value == "0" ||
      value == "+" ||
      value == "-" ||
      value == "*" ||
      value == "/" ||
      value == "%" ||
      value == "^" ||
      value == "=")
  ) {
    return;
  }
  // let temp = screenDiv.innerText;

  if (value === "=") {
    let result = eval(screenDiv.innerText);
    screenDiv.innerText = result;
    return;
  }
  if (screenDiv.innerHTML == "0") {
    screenDiv.innerText = value + " ";
  } else {
    screenDiv.innerText += value + " ";
  }
}

function clr() {
  screenDiv.innerText = "0";
}

function removeLast() {
  if (screenDiv.innerText == "0") {
    return;
  }
  if (screenDiv.innerText.length === 1) {
    screenDiv.innerText = "0";
    return;
  }
  let temp = screenDiv.innerText;
  screenDiv.innerText = temp.slice(0, -1);
}

document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "Enter" || event.key === "=") {
    buttonClick(event, "=");
  } else if (event.key == "Backspace") {
    removeLast();
  } else if (event.key === "+") {
    buttonClick(event, "+");
  } else if (event.key === "-") {
    buttonClick(event, "-");
  } else if (event.key === ".") {
    buttonClick(event, ".");
  } else if (event.key === "/") {
    buttonClick(event, "/");
  } else if (event.key === "*") {
    buttonClick(event, "*");
  } else if (event.key === "%") {
    buttonClick(event, "%");
  } else if (event.key === "^") {
    buttonClick(event, "^");
  } else if (event.key === "1") {
    buttonClick(event, "1");
  } else if (event.key === "2") {
    buttonClick(event, "2");
  } else if (event.key === "3") {
    buttonClick(event, "3");
  } else if (event.key === "4") {
    buttonClick(event, "4");
  } else if (event.key === "5") {
    buttonClick(event, "5");
  } else if (event.key === "6") {
    buttonClick(event, "6");
  } else if (event.key === "7") {
    buttonClick(event, "7");
  } else if (event.key === "8") {
    buttonClick(event, "8");
  } else if (event.key === "9") {
    buttonClick(event, "9");
  } else if (event.key === "0") {
    buttonClick(event, "0");
  }
});
