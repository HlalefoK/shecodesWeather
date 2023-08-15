let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let cityName = document.querySelector("#location");
let cityInput = document.querySelector("#cityName");
let searchButton = document.querySelector(".btn");
let temperature = document.querySelector("#temperature");
let today = document.querySelector("#today");

let apiKey = "be81f193e065bf5feb2d944c7336968b";
let units = "metric"; // For Celsius

// Add event listener to the search button
searchButton.addEventListener("click", getWeather);

function getWeather() {
  let city = cityInput.value;

  // Fetch weather data from OpenWeatherMap API
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      cityName.textContent = data.name;
      temperature.textContent = data.main.temp;

      let currentDate = new Date();
      let currentTime = currentDate.getHours() + ":" + currentDate.getMinutes();
      let currentDay = days[currentDate.getDay()] + " " + currentTime;
      today.textContent = currentDay;
    })
    .catch((error) => {
      console.log("Error fetching weather data: ", error);
    });
}
