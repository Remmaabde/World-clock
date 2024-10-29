function updatetime() {
  let AddisElement = document.querySelector('#Addis');
  if (AddisElement) {
    let AddisdateElement = AddisElement.querySelector('.date');
    let AddistimeElement = AddisElement.querySelector('.time');

    let AddisTime = moment.tz('Africa/Addis_Ababa').format('h:m:S');
    let Addisdate = moment
      .tz('Africa/Addis_Ababa')
      .format('dddd, MMMM Do YYYY');

    AddistimeElement.innerHTML = `${AddisTime}<small>AM</small>`;
    AddisdateElement.innerHTML = Addisdate;
  }

  let ParisElement = document.querySelector('#paris');
  if (ParisElement) {
    let ParisdateElement = ParisElement.querySelector('.date');
    let ParistimeElement = ParisElement.querySelector('.time');

    let ParisTime = moment.tz('Europe/Paris').format('h:m:S');
    let Parisdate = moment.tz('Europe/Paris').format('dddd, MMMM Do YYYY');

    ParistimeElement.innerHTML = `${ParisTime}<small>AM</small>`;
    ParisdateElement.innerHTML = Parisdate;
  }
}
function changetime(event) {
  let cityElement = event.target.value;
  let cityname = cityTime.replace('_', ' ').split('/')[1];
  let cityTime = moment.tz(cityElement).format('dddd, MMMM Do YYYY');
  let citiesElement = document.querySelector('#cities');
  citiesElement.innerHTML = `<div class="city" id="Addis">
                <div>
                    <h2>${cityTime}</h2>
                    <div class="date">${cityTime.format(
                      'dddd, MMMM Do YYYY'
                    )}</div>
                </div>
                <div class="time"></div>
            </div>`;
}

updatetime();
setInterval(updatetime, 1000);

let cityselect = document.querySelector('#city');
cityselect.addEventListener('change', changetime);
