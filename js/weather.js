const API_KEY = "f729dbd16f76409fceec8db06f49e236";

const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const img = document.createElement("img");
      const weatherWrapper = document.querySelector("#weather");
      const temp = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");

      // const imgUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      // img.src = imgUrl;
      // weatherWrapper.appendChild(img);
      temp.innerText = `${data.main.temp}°`;
      // weather.innerText = `${data.weather[0].main}`;
      city.innerText = data.name;
    });
};

const onGeoError = () => {
  alert("Can't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
