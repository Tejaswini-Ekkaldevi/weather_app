/* eslint-disable no-console */
const name1 = document.querySelector('.name');
const temp = document.querySelector('.temp');
const hum = document.querySelector('.hum');
const desc = document.querySelector('.desc');
let temperatureUnit = "metric"; // metric = celsius   and imperial = fahrenheit
let currentCity = "Solapur";
async function getWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=${temperatureUnit}&appid=705f0ff804b088684733f84c8cfd1be6`, { mode: 'cors' });
  // console.log(response);
  const data = await response.json();
  console.log(data);
  const nameval = data.name;
  const tempval = data.main.temp;
  const humval = data.main.humidity;
  const descval = data.weather[0].description;
  name1.innerHTML = nameval;
  let tempUnitStr = temperatureUnit == "metric" ? "C" : "F";
  temp.innerHTML = `Temperature : ${tempval} &deg;${tempUnitStr}`;
  hum.innerHTML = `Humidity :${humval}`;
  desc.innerHTML = `Description : ${descval}`;
}

//imperial
getWeather();

// eslint-disable-next-line no-unused-vars
function searchCity() {
  const search = document.getElementById('search');
  currentCity = search.value;
  getWeather();
  search.value = '';
}
const temperature = 0;
let tempType = 'F';

// eslint-disable-next-line no-unused-vars
const switchTemp = (type) => {
  tempType = type;

  const fahrenheit = document.getElementById('fahrenheit');
  const celsius = document.getElementById('celsius');

  if (tempType === 'fahrenheit') {
    temperatureUnit = 'imperial';
    fahrenheit.classList.remove('disabled');
    celsius.classList.add('disabled');
  } else if (tempType === 'celsius') {
    // eslint-disable-next-line no-mixed-operators
    temperatureUnit = 'metric';
    celsius.classList.remove('disabled');
    fahrenheit.classList.add('disabled');
  }
  getWeather();
};
