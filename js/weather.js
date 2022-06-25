'use strict';

const API_KEY = '1eee05ff03eb4b3b737abaec5736bd7e';

const onGeoSuccess = (parameter)=>{
    const latitude = parameter.coords.latitude;
    const longitude = parameter.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector('#weather span:nth-child(1)');
        const weather = document.querySelector('#weather span:nth-child(2)');
        city.innerText = data.name;
        weather.innerText = ` / ${data.weather[0].main} / ${data.main.temp}℃`;
        
    });
};

const onGeoError = ()=>{
    alert('Can\'t find you, No weather for you.');
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);