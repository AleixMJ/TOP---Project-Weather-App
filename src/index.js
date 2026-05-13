import "./styles.css";


const form = document.getElementById("weatherForm");
form.addEventListener('submit', checkWeather);

async function checkWeather(event) {
    event.preventDefault();
    console.log("event starting")
    let city = document.getElementById("city").value.trim();
    console.log(city);
    let cityWeather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=DD5CVPTKTMU25CGMKJMCLRSXG`);
    console.log(cityWeather);
}


