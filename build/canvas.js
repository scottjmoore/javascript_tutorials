console.log(`JavaScript Canvas`);

const TO_RADIANS = Math.PI/180;
const canvas = document.getElementById('mycanvas');
const img = new Image();

const url = "https://js.scottmooresoftware.com/.netlify/functions/test"

fetch(url)
    .then(data => { return data.json()})
    .then(res => { console.log(res)});

if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#ccc';
    ctx.fillRect(0, 0, 512, 512);

    img.onload = function () {
        ctx.save();
        ctx.translate(64, 64);
        ctx.rotate(45 * TO_RADIANS);
        ctx.drawImage(img, -64, -64, 128, 128);
        ctx.restore();
        ctx.save();
        ctx.translate(256, 256);
        ctx.rotate(135 * TO_RADIANS);
        ctx.drawImage(img, -64, -64, 128, 128);
        ctx.restore();
        ctx.save();
        ctx.translate(64, 256);
        ctx.rotate(225 * TO_RADIANS);
        ctx.drawImage(img, -64, -64, 128, 128);
        ctx.restore();
        ctx.save();
        ctx.translate(256,64);
        ctx.rotate(315 * TO_RADIANS);
        ctx.drawImage(img, -64, -64, 128, 128);
        ctx.restore();
    }

    img.src = "img/mario.png";
}
  