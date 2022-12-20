let viewPlot = document.querySelector(".view-plot");
let togglePlot = document.querySelector(".toggle-plot")
togglePlot.addEventListener("click", displayPlot);

function displayPlot() {
  console.log("clicked")
  viewPlot.style.display == "none"
    ? (viewPlot.style.display = "block")
    : (viewPlot.style.display = "none");
}