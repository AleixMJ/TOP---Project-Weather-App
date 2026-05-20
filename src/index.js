import "./styles.css";
import weatherDisplay from "./weatherDisplay.js";



const form = document.getElementById("weatherForm");
form.addEventListener('submit', checkWeather);



async function checkWeather(event) {
    event.preventDefault();
    console.log("event starting")
    let city = document.getElementById("city").value.trim();
    console.log(city);
    try {
        let response = 
        await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=DD5CVPTKTMU25CGMKJMCLRSXG`);
        if (!response.ok) {
            throw new Error('City not found or API error (Status: ${response.status})');
        }
        
    let cityWeather = await response.json();
    console.log(cityWeather);
    weatherDisplay(cityWeather);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        alert('Error fetching weather data: ' + error.message);
    }
};


