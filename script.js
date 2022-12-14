let getweather = () => {
  let cityName = document.querySelector("#inputname").value;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=fcbe842c4db46e028be3eacbb98f226f&q=${cityName}`
    )

    .then(function (response) {
      console.log("response is successfully running!");
      console.log("response: ", response.data);

      let Time = moment(response.data.dt * 1000).format("LT");
      let Date = moment(response.data.id * 1000).format("LL");
      document.querySelector(
        "#weather_name"
      ).innerHTML = `<h2>Weather in ${response.data.name}</h2>
        <img src='http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png' />
        <h1>Temperature: ${response.data.main.temp}°C</h1>
        <div>Description: ${response.data.weather[0].description}</div>
        <div>Humidity: ${response.data.main.humidity}</div>
        <div>Wind Speed: ${response.data.wind.speed}km/h</div>
        <div>Date:${Date} </div>
        <div>Date:${Time} </div>
        `;
    })
    .catch(function (error) {
      console.log("response: ", error);
    });
};
