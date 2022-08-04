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

function changeLineWidth(event) {
  ctx.lineWidth = event.target.value;
}

$canvas.addEventListener("mousemove", onMouseMove);
$canvas.addEventListener("mousedown", startPainting);
$canvas.addEventListener("mouseup", cancelPainting);
$canvas.addEventListener("mouseleave", cancelPainting);
// document.addEventListener("mouseup", cancelPainting);
$inputLineWidth.addEventListener("change", changeLineWidth);
