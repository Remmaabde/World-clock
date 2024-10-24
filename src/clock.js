function updatetime() {
  let AddisElement = document.querySelector('#Addis');
  let Addisdate = document.querySelector('.date');
  let Addistime = document.querySelector('.time');

  let date1 = moment.tz('Africa/Addis_Ababa').format('dddd, MMMM Do YYYY');
  Addisdate.innerHTML = date1;

  let time1 = moment.tz('Africa/Addis_Ababa').format('h:m:S');
  Addistime.innerHTML = `${time1}<small>AM</small>`;
  /*
  let ParisElement = document.querySelector('#paris');

  let parisdate = ParisElement.querySelector('#parisdate');
  let paristime = ParisElement.querySelector('#paristime');

  parisdate.innerHTML = moment.tz('Europe/Paris').format('dddd, MMMM Do YYYY');

  let time2 = moment.tz('Europe/Paris').format('h:m:S');
  paristime.innerHTML = `${time2}<small>AM</small>`;
  */
}
setInterval(updatetime, 1000);
