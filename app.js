// Init Weather
const weather = new Weather('Boston', 'MA');

// Init UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);


function getWeather() {
    weather.getWeather()
    .then(weather => {
        ui.paint(weather);
    })
    .catch(err => console.log(err));
}
