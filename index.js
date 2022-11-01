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
   console.log(name,icon,description,temp,humidity,temp_min,temp_max,speed)
   document.querySelector(".city").innerText = "Clima en " + name;
   document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
   document.querySelector(".description").innerText = description;
   document.querySelector(".temp").innerText = temp + "°C";
   document.querySelector(".humidity").innerText = "Humedad: "+ humidity + "%" ;
   document.querySelector(".tempmin").innerText = "Temp min: "+ temp_min + "°" ;
   document.querySelector(".tempmax").innerText = "Temp max: "+ temp_max + "°" ;
   document.querySelector(".wind").innerText = "Velocidad del viento " + speed + "KM/H";
   document.querySelector(".weather").classList.remove("loading");
   document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?" + name + "')";


  },
  search: function () {
  this.fetchWeather(document.querySelector(".search-bar").value);
  },
  
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
if(event.key == "Enter"){
   weather.search(); 
}
});
weather.fetchWeather(" ");

//GRAFICA

const ctx = document.getElementById('myChart').getContext('2d');
const xlabels = [];
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['MAX', 'MIN'],
        datasets: [{
            label: 'Temperatura Maxima y Minima',
           data: [28, 32],
            backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
       }]
   },
    options: {
     scales: {
            y: {
                beginAtZero: true
            }
     }
    }
});