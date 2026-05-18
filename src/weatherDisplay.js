export default weatherDisplay; function weatherDisplay(data) {
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const weatherResult = document.getElementById("weatherResult");

    cityName.textContent = data.resolvedAddress;
    temperature.textContent = `Temperature: ${Math.round((data.currentConditions.temp - 32) * 5/9)}°C`;
    description.textContent = `Conditions: ${data.currentConditions.conditions}`;

    weatherResult.hidden = false;
}

