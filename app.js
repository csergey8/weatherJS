// Init UI
const ui = new UI();

// Inint Storage
const storage = new Storage();
const weatherLocation = storage.getLocationData();

// Init Weather
const weather = new Weather(weatherLocation.city, weatherLocation.state);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);
    storage.setLocationData(city, state);
    getWeather();

    $('#locModal').modal('hide');
});

document.addEventListener('DOMContentLoaded', getWeather);


function getWeather() {
    weather.getWeather()
    .then(weather => {
        ui.paint(weather);
    })
    .catch(err => console.log(err));
}
