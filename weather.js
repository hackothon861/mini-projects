const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apiKey = "6cb6ee799a6465d864502cf71060e70d";

weatherform.addEventListener("submit", async event => {

    event.preventDefault();
    const city = cityinput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
            
        } catch (error) {
            console.error(error);
            displayError(error);
            
            
        }
        
    }
    else{
    displayError("Please enter your city");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
   
    if (!response.ok) {
        throw new Error("Couldn't fetch your data");
        
    } 
    return await response.json();
}   

function displayWeatherInfo(data){

    const {name: city, 
           main:{temp, humidity},
           weather: [{description, id}] } = data;

        card.textContent = "";
        card.style.display = "flex";

        const cityName = document.createElement("h1");
        const tempdisplay = document.createElement("p");
        const humiditydisplay = document.createElement("p");
        const descdisplay = document.createElement("p");
        const weatherEmoji = document.createElement("p");

        cityName.textContent = city;
        tempdisplay.textContent = `${(temp -273.15).toFixed(1)}°C`;
        humiditydisplay.textContent = `Humidity: ${humidity}%`;
        descdisplay.textContent = description;
        weatherEmoji.textContent = getWeatherEmoji(id);



        cityName.classList.add("cityName");
        tempdisplay.classList.add("tempdisplay");
        humiditydisplay.classList.add("humiditydisplay");
        descdisplay.classList.add("descdisplay");
        weatherEmoji.classList.add("weatherEmoji");



        card.appendChild(cityName);
        card.appendChild(tempdisplay);
        card.appendChild(humiditydisplay);
        card.appendChild(descdisplay);
        card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherID){

    switch (true) {
        case (weatherID >= 200 && weatherID < 300):
            return `⛈️`;
        case (weatherID >= 300 && weatherID < 500):
            return `🌦️`;
        case (weatherID >= 500 && weatherID < 600):
            return `🌧️`;
        case (weatherID >= 600 && weatherID < 700):
            return `❄️`;
        case (weatherID >= 700 && weatherID < 800):
            return `☀️`;
        case (weatherID === 800 ):
            return `🌥️`;
        case (weatherID > 800 && weatherID < 810):
            return `☁️`;
           
    
        default:
            return "❓";
            
    }

}

function displayError(message){


    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

    
}