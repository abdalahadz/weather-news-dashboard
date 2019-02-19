const key = "49a19380c52de046bec43be24389819b";
const city = "Toronto";
const country = "Canada";

let currTemp = document.getElementById("temperature");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let cond = document.getElementById("conditions");
let dayOne = document.getElementById("day1");
let dayTwo = document.getElementById("day2");
let dayThree = document.getElementById("day3");
let dayFour = document.getElementById("day4");
let dayOneTemp = document.getElementById("day1Temp");
let dayTwoTemp = document.getElementById("day2Temp");
let dayThreeTemp = document.getElementById("day3Temp");
let dayFourTemp = document.getElementById("day4Temp");
let dayOneIcon = document.getElementById("d1Icon");
let dayTwoIcon = document.getElementById("d2Icon");
let dayThreeIcon = document.getElementById("d3Icon");
let dayFourIcon = document.getElementById("d4Icon");

getWeather();


function getWeather() {
    let request = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country + "&appid=" + key;
    httpRequestAsync(request, response);
}

function response(r) {
    //console.log(r);
    let json = JSON.parse(r);
    currTemp.innerHTML = parseInt(json.list[0].main.temp - 273) + "°C";
    humidity.innerHTML = json.list[0].main.humidity + "%";
    wind.innerHTML = parseInt(json.list[0].wind.speed * 3.6) + "KM/H";
    cond.innerHTML = json.list[0].weather[0].description;

    let forecast = json.list;

    

    for (var i = 0; i < forecast.length; i++) {
        let date = new Date(forecast[i].dt*1000);
        let week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
        let day = week[date.getDay()];

        if (i==8) {
            dayOne.innerHTML = day;
            dayOneTemp.innerHTML = parseInt(json.list[i].main.temp - 273) + "°C";
            dayOneIcon.src = "http://openweathermap.org/img/w/" + forecast[i].weather[0].icon + ".png";
        }

        if (i==16) {
            dayTwo.innerHTML = day;
            dayTwoTemp.innerHTML = parseInt(json.list[i].main.temp - 273) + "°C";
            dayTwoIcon.src = "http://openweathermap.org/img/w/" + forecast[i].weather[0].icon + ".png";
        }

        if (i==24) {
            dayThree.innerHTML = day;
            dayThreeTemp.innerHTML = parseInt(json.list[i].main.temp - 273) + "°C";
            dayThreeIcon.src = "http://openweathermap.org/img/w/" + forecast[i].weather[0].icon + ".png";
        }

        if (i==32) {
            dayFour.innerHTML = day;
            dayFourTemp.innerHTML = parseInt(json.list[i].main.temp - 273) + "°C";
            dayFourIcon.src = "http://openweathermap.org/img/w/" + forecast[i].weather[0].icon + ".png";
        }

        

        
    }
        
    
}

function httpRequestAsync(url, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 & httpRequest.status == 200) {
            console.log(httpRequest.responseText);
            callback(httpRequest.responseText);
        }
    }
    httpRequest.open("GET",url,true);
    httpRequest.send();
}
