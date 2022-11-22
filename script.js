let weather = {
    "apiKey" : "5bd6818dceb147b8f212ea5634d21d81",

    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city+
        "&units=metric&appid="
        +this.apiKey)
        .then((response)=>response.json())
        .then((data)=>this.displayData(data));
    },

    displayData : function(data){
          const {name} = data;
          const {temp,humidity} = data.main;
          const {speed} = data.wind; 
          const {icon,description} =data.weather[0];

          document.querySelector(".city").innerText = "Weather in "+name;
          document.querySelector(".temp").innerText = temp + "°C" ;
          document.querySelector(".description").innerText = description;
          document.querySelector(".humidity").innerText = "Humidity : "+humidity+" %";
          document.querySelector(".windSpeed").innerText= "Wind Speed : " + speed +" km/h";
          document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";

    },

    search : function(){
        this.fetchWeather(document.querySelector(".searchBar").value);
    }
};



document.querySelector(".search button").addEventListener("click",function(){
    weather.search();

});

document.querySelector(".searchBar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("denver");
//https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=5bd6818dceb147b8f212ea5634d21d81