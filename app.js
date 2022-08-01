const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");
$canvas.width = 800;
$canvas.height = 800;

ctx.rect(0, 0, 50, 50);
ctx.rect(50, 50, 50, 50);
ctx.rect(100, 100, 50, 50);
ctx.fill();

ctx.beginPath();
ctx.rect(150, 150, 50, 50);
ctx.rect(200, 200, 50, 50);
ctx.fillStyle = "grey";
ctx.fill();
