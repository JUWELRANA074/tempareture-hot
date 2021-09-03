const API_KEY = `d1adeced13f394645e85a86b1609467c`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    document.getElementById('city-name').value = '';

    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} 
    // unit chance  &units=metric 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text
}

const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText('city', temperature.name)
    setInnerText('temp', temperature.main.temp)
    setInnerText('condition', temperature.weather[0].main)

    //  set Weather Icon 
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`

    const imageIcon = document.getElementById('weather-icon')
    imageIcon.setAttribute('src', url);

}