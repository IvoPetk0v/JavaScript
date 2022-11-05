function attachEvents() {
    const url = "http://localhost:3030/jsonstore/forecaster/locations";
    const input = document.getElementById("location");
    const btn = document.getElementById("submit");
    btn.addEventListener("click", getWeather);
    let forecastDiv = document.getElementById("forecast");
    let currDiv = document.getElementById("current");
    let upcomingDiv = document.getElementById("upcoming");

    const enumIcons =
    {
        "Sunny": "&#x2600",// ☀
        "Partly sunny": "&#x26C5", //⛅
        "Overcast": "&#x2601", // ☁
        "Rain": "&#x2614",// ☂
        "Degrees": "&#176"   // °
    }

    async function getWeather() {
        document.querySelectorAll('div.forecasts').forEach(e=>e.remove());
        document.querySelectorAll('div.forecast-info').forEach(e=>e.remove());;
        let location = input.value;
        try {
            const response = await fetch(url);
            const data = await response.json();
            const listOfLocation = [...Object.values(data)];

            if (!listOfLocation.find(l => l.name == location)) throw new Error;

            const locatCode = listOfLocation.find(l => l.name === location).code;
            const todayForecast = await getTodayForecastData(locatCode);
            const upcomingForecast = await getUpcomingForecastData(locatCode);
            populateTodayDiv(todayForecast);
            populateUpcomingDiv(upcomingForecast);
            forecastDiv.style.display = "block";
        } catch (error) {
            forecastDiv.textContent = "Error";
            forecastDiv.style.display = "block";
        }
    }
    function populateUpcomingDiv(upcomingForecast) {
        let upcDiv = document.createElement("div");
        upcDiv.className = "forecast-info";
        upcomingForecast.forEach(d => {
            upcDiv.appendChild(createSpanElement(d));
        })
        upcomingDiv.appendChild(upcDiv);
    }
    function createSpanElement(data) {
        let span = document.createElement("span");
        span.className = "upcoming";

        let span1 = document.createElement("span");
        span1.className = "symbol";
        span1.innerHTML = enumIcons[(data.condition)];

        let span2 = document.createElement("span");
        span2.className = "forecast-data";
        let span3 = span2.cloneNode();
        span2.innerHTML = `${data.low}${"&#176"}/${data.high}${"&#176"}`;
        span3.innerHTML = data.condition;
        span.appendChild(span1);
        span.appendChild(span2);
        span.appendChild(span3);
        return span;
    }
    function populateTodayDiv(todayForecast) {

        let symbolSpan = document.createElement("span");
        symbolSpan.className = "condition symbol";
        symbolSpan.innerHTML = enumIcons[(todayForecast.forecast.condition)];

        let condSpan = document.createElement("span");
        condSpan.className = "condition";

        let span1 = document.createElement("span")
        span1.className = "forecast-data";

        let span2 = span1.cloneNode();
        let span3 = span1.cloneNode();

        span1.textContent = todayForecast.name;
        span2.innerHTML = `${todayForecast.forecast.low}${"&#176"}/${todayForecast.forecast.high}${"&#176"}`
        span3.textContent = todayForecast.forecast.condition;

        condSpan.appendChild(span1);
        condSpan.appendChild(span2);
        condSpan.appendChild(span3);

        let todayDiv = document.createElement("div");
        todayDiv.className = "forecasts";
        todayDiv.appendChild(symbolSpan);
        todayDiv.appendChild(condSpan);

        currDiv.appendChild(todayDiv);
    }

    async function getTodayForecastData(code) {
        const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
        const response = await fetch(url);
        const data = await response.json();

        let forecast = Object.assign(data);
        return forecast;

    }

    async function getUpcomingForecastData(code) {
        const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

        const response = await fetch(url);
        const data = await response.json();

        let forecast = Object.values(data)[0];
        return forecast;
    }
}

attachEvents();