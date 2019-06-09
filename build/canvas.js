console.log(`JavaScript Canvas`);

const TO_RADIANS = Math.PI/180;
const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
const mario = new Image();
const background = new Image();

var drawMarios = (rotation) => {
    if (ctx) {
        //ctx.fillStyle = '#ccc';
        //ctx.fillRect(0, 0, 512, 512);

        ctx.drawImage(background, -rotation, -512, background.width * 2, background.height * 2);

        ctx.save();
        ctx.translate(32, 32);
        ctx.rotate((45 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -32, -32, 64, 64);
        ctx.restore();

        ctx.save();
        ctx.translate(128, 128);
        ctx.rotate((135 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -32, -32, 64, 64);
        ctx.restore();

        ctx.save();
        ctx.translate(32, 128);
        ctx.rotate((225 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -32, -32, 64, 64);
        ctx.restore();

        ctx.save();
        ctx.translate(128,32);
        ctx.rotate((315 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -32, -32, 64, 64);
        ctx.restore();

        ctx.save();
        ctx.translate(224, 32);
        ctx.rotate((45 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -32, -32, 64, 64);
        ctx.restore();

        ctx.save();
        ctx.translate(32, 224);
        ctx.rotate((45 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -32, -32, 64, 64);
        ctx.restore();

        ctx.save();
        ctx.translate(224, 128);
        ctx.rotate((225 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -32, -32, 64, 64);
        ctx.restore();

        ctx.save();
        ctx.translate(224, 224);
        ctx.rotate((45 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -32, -32, 64, 64);
        ctx.restore();

        ctx.save();
        ctx.translate(128, 224);
        ctx.rotate((315 + rotation) * TO_RADIANS);
        ctx.drawImage(mario, -32, -32, 64, 64);
        ctx.restore();
    }
}

var rotation = 0;

var gameLoop = () => {
    window.requestAnimationFrame(gameLoop);
    drawMarios(rotation += 1);
}

mario.src = "img/mario.png";
background.src = "img/background.png"
gameLoop();

  