// main.js

const volField = document.getElementById('volume-number');
const volSlider = document.getElementById('volume-slider');
const volIcon = document.getElementById('volume-image');
const audioBut = document.getElementById('honk-btn');
const airRad = document.getElementById('radio-air-horn');
const carRad = document.getElementById('radio-car-horn');
const partyRad = document.getElementById('radio-party-horn');
const soundImage = document.getElementById('sound-image');

const horn = {
    airHorn: 'air',
    carHorn: 'car',
    partyHorn: 'party',
}


let volume;


volField.addEventListener('input', updateVolume);
volSlider.addEventListener('input', updateVolume);
audioBut.addEventListener('click', playHorn);


function updateVolume(e) {
    volume = e.target.value;
    document.getElementById('volume-number').value = volume;
    document.getElementById('volume-slider').value = volume;
    if (volume == 0) {
        volIcon.src = "./assets/media/icons/volume-level-0.svg"
        document.getElementById("honk-btn").disabled = true;
    }
    else if (volume >= 1 && volume <= 33) {
        volIcon.src = "./assets/media/icons/volume-level-1.svg"
        document.getElementById("honk-btn").disabled = false;
    }
    else if (volume >= 34 && volume <= 66) {
        volIcon.src = "./assets/media/icons/volume-level-2.svg"
        document.getElementById("honk-btn").disabled = false;
    }
    else if (volume >= 67 && volume <= 100) {
        volIcon.src = "./assets/media/icons/volume-level-3.svg"
        document.getElementById("honk-btn").disabled = false;
    }
}




airRad.addEventListener('input', () => setHorn(air));
carRad.addEventListener('input', () => setHorn(car));
partyRad.addEventListener('input', () => setHorn(party));

const setHorn = (horn) => {
    if (horn == 'air'){
        document.getElementById('horn-sound').src = "./assets/media/audio/air-horn.mp3";
        soundImage.src = './assets/media/images/air-horn.svg';
    }
    else if (horn == 'car') {
        document.getElementById('horn-sound').src = "./assets/media/audio/car-horn.mp3";
        soundImage.src = './assets/media/images/car.svg';
    }
    else if (horn == 'party') {
        document.getElementById('horn-sound').src = "./assets/media/audio/party-horn.mp3";
        soundImage.src = '../assets/media/images/party-horn.svg';
    }
    
}



audioBut.onclick = (event) => playHorn(event);


const playHorn = (event) => {
    event.preventDefault();
    document.getElementById('horn-sound').play();
}


