const form = document.querySelector('form');
const weatherText = document.querySelector('.weatherText');
const temp = document.querySelector('.temp');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = form.inputSearch.value.trim().toLowerCase();
    fetchLocationKey(cityName).then((data) => {
        //console.log(data[0].Key);
        fetchDataFor(data[0].Key).then((data) => {
           temp.innerHTML = `<p class="card-text display-3 centered">${data[0].Temperature.Metric.Value} °${data[0].Temperature.Metric.Unit}</p>`;
           weatherText.innerHTML = `<p class="state centered">${data[0].WeatherText}</p>`;

        });
    }).catch(err => console.log(err));

    form.inputSearch.value = '';
    
});