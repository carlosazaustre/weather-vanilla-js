class Weather {
	constructor(minTemp, maxTemp, climate, wind) {
		this.minTemp = minTemp;
		this.maxTemp = maxTemp;
		this.climate = climate;
		this.wind = wind;
	}

	meanTemp() {
		return (this.minTemp + this.maxTemp) / 2;
	}
}

// function Weather(minTemp, maxTemp, climate, wind) {
//     this.minTemp = minTemp;
//     this.maxTemp = maxTemp;
//     this.climate = climate;
//     this.wind = wind;
// }

// Weather.prototype.meanTemp = function () {
//     return (this.minTemp + this.maxTemp) / 2;
// }

const week = [
	new Weather(10, 20, "cloudy", 10),
	new Weather(20, 30, "sunny", 15),
	new Weather(30, 40, "sunny", 20),
	new Weather(40, 50, "sunny", 25),
	new Weather(50, 60, "sunny", 30),
	new Weather(60, 70, "sunny", 35),
	new Weather(70, 80, "sunny", 40),
];

function calculateMeanTemp(week) {
	let minTempSum = 0;
	let maxTempSum = 0;

	week.forEach((day) => {
		minTempSum += day.minTemp;
		maxTempSum += day.maxTemp;
	});

	const minTempMean = minTempSum / week.length;
	const maxTempMean = maxTempSum / week.length;

	return {
		minTempMean,
		maxTempMean,
	};
}

function render() {
	const mainDiv = document.querySelector("#main");
	const { minTempMean, maxTempMean } = calculateMeanTemp(week);

	const minMeanTempDiv = document.createElement("div");
	minMeanTempDiv.innerHTML = `<h3>Min mean temp: ${minTempMean}ºC </h3>`;
	const maxMeanTempDiv = document.createElement("div");
	maxMeanTempDiv.innerHTML = `<h3>Max mean temp: ${maxTempMean}ºC </h3>`;
	mainDiv.appendChild(minMeanTempDiv);
	mainDiv.appendChild(maxMeanTempDiv);

	week.forEach((day, index) => {
		const dayElem = document.createElement("div");
        dayElem.classList.add('day');
		dayElem.innerHTML = `<h4>Day #${index + 1}</h4>
                            <p>Min Temp: ${day.minTemp}ºC</p>
                            <p>Max Temp: ${day.maxTemp}ºC</p>
                            <p>Climate: ${day.climate}</p>
                            <p>Wind: ${day.wind}km/h</p>
                            <p>Mean Temp: ${day.meanTemp()}ºC</p>`;

		mainDiv.appendChild(dayElem);
	});
}

document.addEventListener("DOMContentLoaded", render);
