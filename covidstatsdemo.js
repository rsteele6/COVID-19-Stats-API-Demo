import { API_KEY } from './config.js';

fetch("https://covid-19-statistics.p.rapidapi.com/reports/total?", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": API_KEY,
		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
	console.log(response.data);

	document.getElementById('date').innerHTML = 'Date: ' + response.data.date;
	document.getElementById('last_update').innerHTML = '\n' + 'Last Update: ' + response.data.last_update;
	document.getElementById('active').innerHTML = '\n' + 'Active Cases: ' + response.data.active.toLocaleString('en-US', {useGrouping:true});
	document.getElementById('confirmed').innerHTML = '\n' + 'Confirmed Cases: ' + response.data.confirmed.toLocaleString('en-US', {useGrouping:true});
	document.getElementById('deaths').innerHTML = '\n' + 'Deaths: ' + response.data.deaths.toLocaleString('en-US', {useGrouping:true});
	document.getElementById('fatality_rate').innerHTML = '\n' + 'Fatality Rate: ' + response.data.fatality_rate * 100 + '%';
	document.getElementById('recovered').innerHTML = '\n' + 'Recovered: ' + response.data.recovered.toLocaleString('en-US', {useGrouping:true});
})
.catch(err => {
	console.error(err);
});