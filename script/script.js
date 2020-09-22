window.addEventListener('load', start);
var rgb = [0, 0, 0];
var inputRed = document.querySelector('#red');
var inputGreen = document.querySelector('#green');
var inputBlue = document.querySelector('#blue');
var divColor = document.querySelector('#colorChanged');

function start() {
  console.log('Start...');
  inputRed.value = 0;
  inputGreen.value = 0;
  inputBlue.value = 0;
  changeValue();
}
function changeValue() {
  inputRed.addEventListener('change', changeRedValue);
  inputGreen.addEventListener('change', changeGreenValue);
  inputBlue.addEventListener('change', changeBlueValue);

  function changeRedValue(event) {
    var inputRedReadOnly = document.querySelector('#redValue');
    inputRedReadOnly.value = event.target.value;
    var r = event.target.value;
    rgb[0] = r;
    changeDivColor(rgb[0], rgb[1], rgb[2]);
  }
  function changeGreenValue(event) {
    var inputGreenReadOnly = document.querySelector('#greenValue');
    inputGreenReadOnly.value = event.target.value;
    var g = event.target.value;
    rgb[1] = g;
    changeDivColor(rgb[0], rgb[1], rgb[2]);
  }
  function changeBlueValue(event) {
    var inputBlueReadOnly = document.querySelector('#blueValue');
    inputBlueReadOnly.value = event.target.value;
    var b = event.target.value;
    rgb[2] = b;
    changeDivColor(rgb[0], rgb[1], rgb[2]);
  }
}
function changeDivColor(r, g, b) {
  var color = r + ',' + g + ',' + b;
  console.log(color);
  divColor.style.backgroundColor = 'rgb(' + color + ')';
}
