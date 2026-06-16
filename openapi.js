// Hitting the Open Mateo API without a key to see what comes back

// I don't like how fetch and then and catch looks, so I am going to try async await instead. 
// fetch("https://api.open-meteo.com/v1/forecast?latitude=19.303&longitude=99.151&hourly=temperature_2m")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

async function fetchEstadioAztecaWeather() {
  try {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=19.303&longitude=99.151&hourly=temperature_2m");
    
    if (!response.ok) {
      throw new Error('Request failed');
    }
    
    const data = await response.json();
    // console.log(data);
    const time = data.hourly.time[0];
    const temperature = data.hourly.temperature_2m[0];
    console.log(`${time}: ${temperature}`)

  } catch (error) {
    console.error('An error occurred:', error);
  }
}
fetchEstadioAztecaWeather();

async function fetchEstadioAztecaWindSpeed() {
  try {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=19.303&longitude=99.151&hourly=wind_speed_10m");
    
    if (!response.ok) {
      throw new Error('Request failed');
    }
    
    const data = await response.json();
    // console.log(data);
    const time = data.hourly.time[0];
    const windSpeed = data.hourly.wind_speed_10m[0];
    console.log(`${time}: ${windSpeed}`)

  } catch (error) {
    console.error('An error occurred:', error);
  }
}
fetchEstadioAztecaWindSpeed();