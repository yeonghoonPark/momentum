'use strict';

const clock = document.querySelector('h2#clock');

const getClock = ()=>{
    const date = new Date();
    // padstart(maxLength, fillString) can be used in string type, not number type, so it should be converted to string type.
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
};


// Run the function first, because there is a delay of 1000 millisecond
getClock();
const setIn = setInterval(getClock, 1000);

// clock.addEventListener('click', ()=>{
//     clearInterval(setIn);
// });

