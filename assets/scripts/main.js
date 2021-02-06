// main.js

const volField = document.getElementById('volume-number');
const volSlider = document.getElementById('volume-slider');
const volIcon = document.getElementById('volume-image');



let volume;


volField.addEventListener('input', updateVolume);
volSlider.addEventListener('input', updateVolume);

function updateVolume(e) {
    volume =  e.target.value;
    document.getElementById('volume-number').value = volume;
    document.getElementById('volume-slider').value = volume;
    if(volume == 0){
        volIcon.src = "./assets/media/icons/volume-level-0.svg"
        document.getElementById("honk-btn").disabled = true; 
    }
    else if (volume >= 1 && volume <= 33) {
        volIcon.src = "./assets/media/icons/volume-level-1.svg"
    }
    else if (volume >= 34 && volume <= 66) {
        volIcon.src = "./assets/media/icons/volume-level-2.svg"
    }
    else if (volume >= 67 && volume <= 100) {
        volIcon.src = "./assets/media/icons/volume-level-3.svg"
    }
}





// TODO