console.log(`JavaScript Canvas`);

var TO_RADIANS = Math.PI/180;
var canvas = document.getElementById('mycanvas');
var img = new Image();

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, 512, 512);

    img.onload = function () {
        ctx.save();
        ctx.translate(32, 32);
        ctx.rotate(45 * TO_RADIANS);
        ctx.drawImage(img, -32, -32, 64, 64);
        ctx.restore();
        }
    img.src = "mario.png";
}
  