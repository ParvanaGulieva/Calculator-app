// CALCULATOR

let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");
let del = document.querySelector(".btn-del");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num;

    screen.value += value;
  });
});

equal.addEventListener("click", function (e) {
  if (screen.value === "") {
    // screen.value = "Please enter";
    return;
  } else {
    try {
      let answer = eval(screen.value);
      screen.value = answer;
    } catch {
      screen.value = "Invalid";
    }
  }
});

clear.addEventListener("click", function (e) {
  screen.value = "";
});

del.addEventListener("click", function (e) {
  screen.value = screen.value.toString().slice(0, -1);
});

// CHANGING THEME

const themeInput1 = document.querySelector(".theme-input-1");
const themeInput2 = document.querySelector(".theme-input-2");
const themeInput3 = document.querySelector(".theme-input-3");

// themeInput2.addEventListener("click", () => {
//   document.body.classList.add("theme-2");

//   if (document.body.classList.contains("theme-3")) {
//     document.body.classList.remove("theme-3");
//   }
// });

// themeInput3.addEventListener("click", () => {
//   document.body.classList.add("theme-3");
//   if (document.body.classList.contains("theme-2")) {
//     document.body.classList.remove("theme-2");
//   }
// });

// themeInput1.addEventListener("click", () => {
//   if (document.body.classList.contains("theme-2")) {
//     document.body.classList.remove("theme-2");
//   } else if (document.body.classList.contains("theme-3")) {
//     document.body.classList.remove("theme-3");
//   }
// });

themeInput2.addEventListener("click", () => {
  document.body.classList.remove("theme-3");
  document.body.classList.add("theme-2");
});

themeInput3.addEventListener("click", () => {
  document.body.classList.remove("theme-2");
  document.body.classList.add("theme-3");
});

themeInput1.addEventListener("click", () => {
  document.body.classList.remove("theme-3");
  document.body.classList.remove("theme-2");
});
