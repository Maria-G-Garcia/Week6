function two(result) {
  let city2 = document.querySelector("#location");
  city2.innerHTML = `${result.data.name}`;
  let temperature = Math.round(result.data.main.temp);
  let temp = document.querySelector("#number");
  temp.innerHTML = `${temperature}`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${result.data.main.humidity}%`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${result.data.wind.speed}km/h`;
}
function one(event) {
  event.preventDefault();
  let entercity = document.querySelector("#city");
  let city = entercity.value;
  let apiKey = "9e503cb340e36b37cd62954f8e718ac7";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e503cb340e36b37cd62954f8e718ac7&units=metric`;
  axios.get(apiURL).then(two);
}
let gobutton = document.querySelector("#search");
gobutton.addEventListener("submit", one);

let hoy = document.querySelector("#date");
let now = new Date();
let day = now.getDate();
let mes = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = mes[now.getMonth()];
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dia = days[now.getDay()];
hoy.innerHTML = `Date: ${month} ${dia} ${day}, ${year}`;

let tiempo = document.querySelector("#time");
var today = new Date();
let hours = today.getHours();
let min = String(today.getMinutes()).padStart(2, "0");
let segundos = String(today.getSeconds()).padStart(2, "0");
tiempo.innerHTML = `Time: ${hours}:${min}:${segundos}`;
