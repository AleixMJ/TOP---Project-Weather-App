export default async function weatherDisplay(data) {
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const weatherResult = document.getElementById("weatherResult");
    const iconImg = document.getElementById("icon");

    cityName.textContent = data.resolvedAddress;
    temperature.textContent = `Temperature: ${Math.round((data.currentConditions.temp - 32) * 5/9)}°C`;
    description.textContent = `Conditions: ${data.currentConditions.conditions}`;
    const iconModule = await import(`./assets/icons/${data.currentConditions.icon}.svg`);    
    iconImg.src = iconModule.default;

    weatherResult.hidden = false;

}