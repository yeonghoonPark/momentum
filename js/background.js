'use strict';

const images = [
    'background_01.jpg',
    'background_02.jpg',
    'background_03.jpg',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `./images/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);
