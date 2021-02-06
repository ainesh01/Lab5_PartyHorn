// main.js

var volField = document.getElementById('volume-number');
var volSlider = document.getElementById('volume-slider');



let volume;


volField.addEventListener('input', updateVolume);
volSlider.addEventListener('input', updateVolume);

function updateVolume(e) {
    volume =  e.target.value;
    document.getElementById(volField).value = volume;
    document.getElementById(volSlider).value = volume;
}





// TODO