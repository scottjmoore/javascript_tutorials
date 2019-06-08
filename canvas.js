console.log(`JavaScript Canvas`);

var canvas = document.getElementById('mycanvas');

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, 512, 512);
} else {
    console.log('Failed to get canvas context');
}