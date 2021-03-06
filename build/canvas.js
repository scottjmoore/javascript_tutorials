console.log(`JavaScript Canvas`);

const TO_RADIANS = Math.PI/180;
const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
const mario = new Image();
const background = new Image();

var mouseX = 0;
var mouseY = 0;

var drawMarios = (rotation) => {
    if (ctx) {
        ctx.fillStyle = '#ccc';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(background, -rotation, -rotation, background.width * 4, background.height * 4);

        ctx.save();
        ctx.translate(mouseX, mouseY);
        ctx.translate(0, 0);
        ctx.rotate((45 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -64, -64, 128, 128);
        ctx.restore();

        ctx.save();
        ctx.translate(64, 64);
        ctx.rotate((45 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -64, -64, 128, 128);
        ctx.restore();

        ctx.save();
        ctx.translate(256, 256);
        ctx.rotate((135 + (rotation * 0.5)) * TO_RADIANS);
        ctx.drawImage(mario, -64, -64, 128, 128);
        ctx.restore();

        ctx.save();
        ctx.translate(64, 256);
        ctx.rotate((225 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -64, -64, 128, 128);
        ctx.restore();

        ctx.save();
        ctx.translate(256, 64);
        ctx.rotate((315 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -64, -64, 128, 128);
        ctx.restore();

        ctx.save();
        ctx.translate(448, 64);
        ctx.rotate((45 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -64, -64, 128, 128);
        ctx.restore();

        ctx.save();
        ctx.translate(64, 448);
        ctx.rotate((45 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -64, -64, 128, 128);
        ctx.restore();

        ctx.save();
        ctx.translate(448, 256);
        ctx.rotate((225 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -64, -64, 128, 128);
        ctx.restore();

        ctx.save();
        ctx.translate(448, 448);
        ctx.rotate((45 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -64, -64, 128, 128);
        ctx.restore();

        ctx.save();
        ctx.translate(256, 448);
        ctx.rotate((315 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -64, -64, 128, 128);
        ctx.restore();
    }
}

var rotation = 0;

var gameLoop = () => {
    window.requestAnimationFrame(gameLoop);
    drawMarios(rotation += 2);
}

mario.src = "img/mario.png";
background.src = "img/background2.png"

window.addEventListener("resize", (e) => {
    canvas.width  = window.innerWidth - 16;
    canvas.height = window.innerHeight - 96;
});

canvas.width  = window.innerWidth - 16;
canvas.height = window.innerHeight - 96;

canvas.onmousemove = (e) => {
    mouseX = e.pageX - 16;
    mouseY = e.pageY - 64;
};

gameLoop();

  