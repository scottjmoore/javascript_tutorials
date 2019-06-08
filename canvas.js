console.log(`JavaScript Canvas`);

var canvas = document.getElementById('mycanvas');
const img = getElementById('myimg');

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, 512, 512);
    ctx.drawImage(img, 0, 0);
} else {
    console.log('Failed to get canvas context');
}