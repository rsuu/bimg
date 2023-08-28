// Use SVGs
emojione.imageType = "svg";

var emojis = document.querySelectorAll(".emoji");
var modal = document.getElementById("modal");

for (i = 0; i < emojis.length; i++) {
  // Convert emojis
  emojis[i].innerHTML = emojione.toImage(emojis[i].innerHTML);

  // Add actions on click
  emojis[i].parentNode.addEventListener("click", function (event) {
    var _self = this;

    // Make sure nothing is opened yet
    if (modal.classList.contains("hidden")) {
      // counter + 1
      var counter = parseInt(this.querySelectorAll(".count")[0].innerText) + 1;
      _self.querySelectorAll(".count")[0].innerText = counter;
      _self.querySelectorAll(".count")[0].classList.add("animate");

      // Remove animation class to allow second animation if necessary
      setTimeout(function () {
        _self
          .querySelectorAll(".reactions--count")[0]
          .classList.remove("animate");
      }, 600);
    }
  });
}

// Close modal and reset classes
var closeModal = function () {
  modal.className = "hidden";
};
