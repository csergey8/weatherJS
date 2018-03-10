// Init Weather

const weather = new Weather('Boston', 'MA');

document.addEventListener('DOMContentLoaded', getWeather);


function getWeather() {
    weather.getWeather()
    .then(weather => console.log(weather))
    .catch(err => console.log(err));
}
