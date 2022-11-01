let weather = {
    "apiKey":"16aa6f99ae0d1d2a82c173f5592f241a",
    fetchWeather:  async function(city) {
      fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
      .then((response) => response.json())
      .then((data)=> this.displayWheather(data));
  
    },
    displayWheather:function(data){
     const { name } = data;
     const {icon, description } =data.weather[0];
     const {temp, humidity, temp_min, temp_max } = data.main;
     const {speed} =data.wind;
     
  
  
    },
    search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
    },
    
  };