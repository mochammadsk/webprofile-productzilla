document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Messages has submited <3");
});

const txtElement = ["Productzilla"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

(function ngetik() {
  if (count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector(".efek-ngetik").textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  setTimeout(ngetik, 250);
})();

const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("night-mode");

  if (document.body.classList.contains("night-mode")) {
    toggleButton.textContent = "Disable Night Mode";
  } else {
    toggleButton.textContent = "Enable Night Mode";
  }
});
