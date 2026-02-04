

// DOM

// Event Listener
// Selecting the buttons
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const box3 = document.querySelector(".box-3");
const box3Text = document.querySelector(".box-3-text");

// Adding event listeners to the buttons
btn2.addEventListener("click", function () {
  console.log("Button 2 is clicked");
});

btn3.addEventListener("click", showAlert);

function showAlert() {
  alert("Button 3 is clicked");
}

// mouseover
const newBackgroundColor = document.querySelector(".box-3");

// Change background color on mouseover
function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "lightblue";
  newBackgroundColor.textContent = "Background color changed!";
  //   newBackgroundColor.style.fontSize = "10px";
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);

// Reset All Styles Button
const resetBtn = document.querySelector(".reset-btn");

function resetStyles() {
  newBackgroundColor.style.backgroundColor = "";
  newBackgroundColor.textContent = box3Text.textContent;
}

resetBtn.addEventListener("click", resetStyles);


