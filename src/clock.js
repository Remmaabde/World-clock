function updatetime() {
  let AddisElement = document.querySelector('#Addis');
  let AddisdateElement = AddisElement.querySelector('.date');
  let AddistimeElement = AddisElement.querySelector('.time');

  let AddisTime = moment.tz('Africa/Addis_Ababa').format('h:m:S');
  let Addisdate = moment.tz('Africa/Addis_Ababa').format('dddd, MMMM Do YYYY');

  AddistimeElement.innerHTML = `${AddisTime}<small>AM</small>`;
  AddisdateElement.innerHTML = Addisdate;

  let ParisElement = document.querySelector('#paris');
  let ParisdateElement = ParisElement.querySelector('.date');
  let ParistimeElement = ParisElement.querySelector('.time');

  let ParisTime = moment.tz('Europe/Paris').format('h:m:S');
  let Parisdate = moment.tz('Europe/Paris').format('dddd, MMMM Do YYYY');

  ParistimeElement.innerHTML = `${ParisTime}<small>AM</small>`;
  ParisdateElement.innerHTML = Parisdate;
}
updatetime();
setInterval(updatetime, 1000);
