// Hitting the Open Mateo API without a key to see what comes back

// I don't like how fetch and then and catch looks, so I am going to try async await instead. 
// fetch("https://api.open-meteo.com/v1/forecast?latitude=19.303&longitude=99.151&hourly=temperature_2m")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


// I decided to make this variable global since both functions are reading from the DOM.

// const weatherInfo = document.querySelector('#weather_Info');

// The assignment wants buttons to add the info instead rather than just adding it on page load via the DOM. 


const weatherInfo = document.querySelector('#weather_Info');


const getTemperature = document.querySelector("#btn-temperature");

async function fetchEstadioAztecaTemperature() {
  try {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=19.303&longitude=99.151&hourly=temperature_2m");
    
    if (!response.ok) {
      throw new Error('Request failed');
    }
    
    const data = await response.json();
    // console.log(data);


    // These are unnecessary since we are using a dynamic function instead. 
    // const time = data.hourly.time[0];
    // const temperature = data.hourly.temperature_2m[0];
    // // console.log(`${time}: ${temperature}`)
    // const result = `${time}: ${temperature}`


    // This was moved up to the global scope so as to avoid repetitiveness.
    // const weatherInfo = document.querySelector('#weather_Info');


    // line 40 clears the list every time before adding new data.
    weatherInfo.innerHTML = '';



    // AIRHUB wants a dynamic API call. So I am adding a forEach loop to get current data. 
    data.hourly.time.forEach((time, index) => {
    const temperature = data.hourly.temperature_2m[index];
    const result = `${time}: ${temperature}`;
    const addInfo = document.createElement('li');
    addInfo.innerHTML = result;
    weatherInfo.append(addInfo);
    });



  } catch (error) {
    console.error('An error occurred:', error);
  }
}
// fetchEstadioAztecaTemperature();

getTemperature.addEventListener('click', e => {
    fetchEstadioAztecaTemperature();
});



const getWindSpeed = document.querySelector("#btn-wind");

async function fetchEstadioAztecaWindSpeed() {
  try {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=19.303&longitude=99.151&hourly=wind_speed_10m");
    
    if (!response.ok) {
      throw new Error('Request failed');
    }
    
    const data = await response.json();
    // console.log(data);



    // These are unneccesary since AIRHUB wanted a dynamic response instead of a hard-coded response. 
    // const time = data.hourly.time[0];
    // const windSpeed = data.hourly.wind_speed_10m[0];
    // // console.log(`${time}: ${windSpeed}`)
    // const result = `${time}: ${windSpeed}`;

      // line 40 clears the list every time before adding new data.
    weatherInfo.innerHTML = '';

    // AIRHUB wants a dynamic API call. So I am adding a forEach loop to get current data. 
    data.hourly.time.forEach((time, index) => {
    const windSpeed = data.hourly.wind_speed_10m[index];
    const result = `${time}: ${windSpeed}`;
    const addInfo = document.createElement('li');
    addInfo.innerHTML = result;
    weatherInfo.append(addInfo);
    });




  } catch (error) {
    console.error('An error occurred:', error);
  }
}
// fetchEstadioAztecaWindSpeed();

getWindSpeed.addEventListener('click', e => {
    fetchEstadioAztecaWindSpeed();
});

// Known limitations:
// 1. Data is hardcoded to a single timestamp (index [0]) rather than dynamic/current data

// 2. Clicking buttons repeatedly appends duplicate entries to the DOM
// Future fix: add a conditional to check if the ul already has a child node before appending




// I fixed the know limitations. AIRHUB called them out. I didn't think to clear the inner HTML. That is much simpler to do than writing the for loop I had thought about writing haha. 


