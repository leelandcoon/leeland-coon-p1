// welcome message
var city = "Milwaukee";
var cityEl = document.getElementById('city');
var temp = "90"
var tempEl = document.getElementById('temp');
var precipitation = "0"
var precipitationEl = document.getElementById('precipitation');
var humidity  = "31"
var humidityEl = document.getElementById('humidity');
var wind  = "14"
var windEl = document.getElementById('wind');

cityEl.textContent = cityEl.textContent + city;
tempEl.textContent = temp + tempEl.textContent;
precipitationEl.textContent = precipitation + precipitationEl.textContent;
humidityEl.textContent = humidity + humidityEl.textContent;
windEl.textContent = wind + windEl.textContent;

if(temp>80){
    document.getElementById("temp").style.color = "red";
} else if (temp<30) {
    document.getElementById("temp").style.color = "darkblue";
}