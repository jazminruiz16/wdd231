const weather = document.querySelector('#weather');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const myURL = "https://api.openweathermap.org/data/2.5/weather?lat=-16.50&lon=-68.13&appid=5562c17f0bed0ff43cdc29aab205c9a6&units=metric";
const apiFetch = async () => {
    weather.innerHTML = '';
    try {
        const response = await fetch(myURL); // Wait for the fetch to complete https://openweathermap.org/img/wn/' + data.weather.icon + '@2x.png
        const data = await response.json(); // Wait for the response to be converted to JSON https://openweathermap.org/img/wn/10d@2x.png
        // Output the fetched data
        const listItem = document.createElement("figure");
        listItem.innerHTML = '<div><img src="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png" alt="' + data.weather[0].description + '" width=150 loading="lazy"><figcaption><span class="titlePhoto">Curret Weather</span><br>Temperature: ' + data.main.temp + ' ºC<br>' + data.weather[0].description + '<br>High: ' + data.main.temp_max + ' ºC<br>Low: ' + data.main.temp_min + ' ºC<br>Humidity: ' + data.main.humidity + '%<br>Sunrise: ' + data.sys.sunrise + 'am<br>Sunset: ' + data.sys.sunset + ' pm</figcaption></div>';
        weather.appendChild(listItem);

    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
    }
};
apiFetch();