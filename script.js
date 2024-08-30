//JavaScript

const cityinput = document.querySelector(".city-input")
const icon =document.querySelector(".weather-icon");
const button = document.querySelector(".btns");
const apikey = "YOUR API_KEY";

const getdata =() => {
    const cityname = cityinput.value.trim();
    if(!cityname) return;

    const apiurl = `ENTER YOUR API_URL`;
    console.log(cityname);

   fetch(apiurl).then(res => res.json()).then(data => {
      console.log(data);
      
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        icon.src="clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
           icon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){
           icon.src = "rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
           icon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
           icon.src = "mist.png";
    }
    else if(data.weather[0].main == "Snow"){
           icon.src = "snow.png";
    }


   }).catch(() => {
    alert("errror ");
   })
}

button.addEventListener("click", getdata);
