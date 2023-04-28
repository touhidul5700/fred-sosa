//selector js
function changeColor(element) {
    if (element.classList.contains("clicked")) {
      element.classList.remove("clicked");
    } else {
      element.classList.add("clicked");
    }
  }
