const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");
$canvas.width = 800;
$canvas.height = 800;

let isPainting = false;
ctx.lineWidth = 2;
function onMouseMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function cancelPainting() {
  isPainting = false;
}

function startPainting(event) {
  isPainting = true;
}

$canvas.addEventListener("mousemove", onMouseMove);
$canvas.addEventListener("mousedown", startPainting);
$canvas.addEventListener("mouseup", cancelPainting);
$canvas.addEventListener("mouseleave", cancelPainting);
document.addEventListener("mouseup", cancelPainting);
