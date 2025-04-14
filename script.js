let result = document.getElementById("result");
let history = document.getElementById("history");

function append(value) {
  result.value += value;
}

function clearAll() {
  result.value = "";
  history.innerText = "";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function sqrt() {
  try {
    result.value = Math.sqrt(eval(result.value));
  } catch {
    result.value = "Error";
  }
}

function power() {
  result.value += "**";
}

function calculate() {
  try {
    history.innerText = result.value + " =";
    result.value = eval(result.value);
  } catch {
    result.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  if ((e.key >= '0' && e.key <= '9') || "+-*/().".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearAll();
  }
});
