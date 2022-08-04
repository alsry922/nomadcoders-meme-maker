const $colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const $inputColor = document.getElementById("color");
const $inputLineWidth = document.getElementById("line-width");
const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");
$canvas.width = 800;
$canvas.height = 800;

let isPainting = false;
ctx.lineWidth = $inputLineWidth.value;

function onMouseMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function cancelPainting() {
  ctx.beginPath();
  isPainting = false;
}

function startPainting() {
  isPainting = true;
}

function onChangeLineWidth(event) {
  ctx.lineWidth = event.target.value;
}

function onChangeColor() {
  setColor($inputColor.value);
}

function onColorClick(event) {
  const color = event.target.dataset.color;
  setColor(color);
  $inputColor.value = color;
}

function setColor(color) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

$canvas.addEventListener("mousemove", onMouseMove);
$canvas.addEventListener("mousedown", startPainting);
$canvas.addEventListener("mouseup", cancelPainting);
// document.addEventListener("mouseup", cancelPainting);
$canvas.addEventListener("mouseleave", cancelPainting);
$inputLineWidth.addEventListener("change", onChangeLineWidth);
$inputColor.addEventListener("change", onChangeColor);
$colorOptions.forEach((colorOption) => {
  colorOption.addEventListener("click", onColorClick);
});
