const API_KEY = "d518c72748724bfea40c7c44f317cad8";

function onGeoOK(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  console.log(lat, log);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric&lang=ko`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
  alert("날씨정보를 불러오는데 실패했습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
