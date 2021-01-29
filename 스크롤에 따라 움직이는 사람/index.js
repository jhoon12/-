const img = document.getElementById("img");

window.__scrollPosition = document.documentElement.scrollTop || 0;
let direction = 0;
document.addEventListener("scroll", function () {
  let _documentY = document.documentElement.scrollTop;
  if (_documentY - window.__scrollPosition > 0) {
    direction += 6;
    console.log(direction)
    img.style.left = `${direction}px`;
  } else {
    direction -= 6;
    console.log(direction)
    img.style.left = `${direction}px`;
  }

  window.__scrollPosition = _documentY; // Update scrollY
});
