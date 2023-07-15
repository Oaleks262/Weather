// JavaScript:
const API_KEY = "616d838230ac99ad240261f52e48c56c";

// Функція для отримання даних погоди з API
async function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Вибачте, сталася помилка при отриманні даних погоди", error);
  }
}

// Функція для відображення даних погоди на віджеті
function displayWeatherData(data) {
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const weatherIcon = document.getElementById("weather-icon");

  cityName.textContent = data.name;
  temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`; // Конвертуємо кельвіни в градуси Цельсія
  description.textContent = data.weather[0].description;
  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
  );
}

// Основна функція, яка отримує дані погоди для введеного міста
async function getWeather(city) {
  const data = await getWeatherData(city);
  displayWeatherData(data);
}

// Виклик функції getWeather() для вашого вибраного міста
getWeather("Lviv");