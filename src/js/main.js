/* eslint-disable no-console */
const name1 = document.querySelector('.name');
const temp = document.querySelector('.temp');
const hum = document.querySelector('.hum');
const desc = document.querySelector('.desc');
async function getWeather(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=matrics&appid=705f0ff804b088684733f84c8cfd1be6`, { mode: 'cors' });
  // console.log(response);
  const data = await response.json();
  console.log(data);
  const nameval = data.name;
  const tempval = data.main.temp;
  const humval = data.main.humidity;
  const descval = data.weather[0].description;
  name1.innerHTML = nameval;
  temp.innerHTML = `Temperature : ${tempval} &deg;F`;
  hum.innerHTML = `Humidity :${humval}`;
  desc.innerHTML = `Description : ${descval}`;
}

getWeather('solapur');

// eslint-disable-next-line no-unused-vars
function searchCity() {
  const search = document.getElementById('search');

  const newCity = search.value;
  getWeather(newCity);
  search.value = '';
}
const temperature = 0;
let tempType = 'F';

// eslint-disable-next-line no-unused-vars
const switchTemp = (type) => {
  tempType = type;

  const F = document.getElementById('F');
  const C = document.getElementById('C');

  if (tempType === 'F') {
    temp.innerHTML = `${temperature * (9 / 5) + 32} &deg;F`;
    F.classList.remove('disabled');
    C.classList.add('disabled');
  } else if (tempType === 'C') {
    // eslint-disable-next-line no-mixed-operators
    temp.innerHTML = `${(temperature - 32) * 5 / 9} &deg;C`;
    C.classList.remove('disabled');
    F.classList.add('disabled');
  }
};
