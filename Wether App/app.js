const key = 'e03c2fe03b9e7a6fa7de62a10dc5a095';
document.querySelector(".weatherContainer").style.display = "none";

const read = async () => {
    const phase = document.querySelector('input[type="text"]').value;
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${phase}&limit=5&appid=${key}`);
    const data = await response.json();
    // console.log(data)
    const list = document.querySelector(".formContainer ul");
    list.innerHTML = "";

    for (let i of data) {
        const { country, name, lat, lon } = i;
        list.innerHTML += `<li data-lat="${lat}" data-lon="${lon}" data-name="${name}">${name}<span>${country}</span></li>`
        // console.log(list);
    }
}

const debounceSearch = _.debounce(() => {
    read();
}, 600);

const ans = document.querySelector('input[type="text"]').addEventListener('keyup', debounceSearch)

const showWeather = async (lat, lon, name) => {
    console.log(lat, lon, name)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    const data = await response.json();
    console.log(data);
    const temp = Math.round(data.main.temp)-264;
    const humidity = Math.round(data.main.humidity);
    const feels_like = Math.round(data.main.feels_like);
    const wind = Math.round(data.wind.speed);
    const icon = data.weather[0].icon;


    document.querySelector("#degrees").innerHTML = `${temp} <span>&#8451;</span>`;
    document.querySelector("#city").innerHTML = `${name}`;
    document.querySelector("#windData").innerHTML = `${wind}<span>km/h</span>`;
    document.querySelector("#humidityData").innerHTML = `${humidity}<span>%</span>`;
    document.querySelector("#feelsgoodData").innerHTML = `${feels_like}<span></span>`;
    document.querySelector(".weatherContainer img").src = `https://openweathermap.org/img/wn/4${icon}@4x.png`;
    document.querySelector(".mainContainer").style.display = "none";
    document.querySelector(".weatherContainer").style.display = "unset";
}

document.querySelector(".changeCity").addEventListener('click', ()=> {
    document.querySelector(".mainContainer").style.display = "unset";
    document.querySelector(".weatherContainer").style.display = "none";
})

document.body.addEventListener('click', (events)=>{
    // console.log(events)
    const li = events.target;
    const {lat, lon, name} = li.dataset;
    if(!lat) {
        return;
    }
    showWeather(lat,lon,name);
})


