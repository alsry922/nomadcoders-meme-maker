const $btnFill = document.querySelector(".btn-fill");
const $btnStroke = document.querySelector(".btn-stroke");
const $btnErase = document.querySelector(".btn-erase");
const $btnReset = document.querySelector(".btn-reset");
const $colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const $inputColor = document.getElementById("color");
const $inputLineWidth = document.getElementById("line-width");
const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
$canvas.width = CANVAS_WIDTH;
$canvas.height = CANVAS_HEIGHT;

let isPainting = false;
let isFillmode = false;
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
  isPainting = false;
  if (isFillmode) {
    ctx.fill();
  }
  ctx.beginPath();
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

function onFillbtnClick() {
  isFillmode = true;
}

function onStrokebtnClick() {
  isFillmode = false;
}

function onErasebtnClick() {
  isFillmode = false;
  ctx.strokeStyle = "white";
}

function onResetbtnClick() {
  ctx.fillStyle = "white";
  ctx.strokeStyle = "white";
  ctx.fillRect(0, 0, CANVAS_HEIGHT, CANVAS_HEIGHT);
  $inputColor.value = "white";
  console.log($inputColor.value);
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
$btnFill.addEventListener("click", onFillbtnClick);
$btnStroke.addEventListener("click", onStrokebtnClick);
$btnErase.addEventListener("click", onErasebtnClick);
$btnReset.addEventListener("click", onResetbtnClick);
