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

// Dapatkan referensi ke tombol
const toggleButton = document.getElementById("toggleButton");

// Tambahkan event listener ke tombol
toggleButton.addEventListener("click", function () {
  // Toggle class 'night-mode' pada elemen body
  document.body.classList.toggle("night-mode");

  // Ubah teks tombol berdasarkan mode saat ini
  if (document.body.classList.contains("night-mode")) {
    toggleButton.textContent = "Disable Night Mode";
  } else {
    toggleButton.textContent = "Enable Night Mode";
  }
});
