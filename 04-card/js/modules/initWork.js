export default function initWork(){
  const funcionamento = document.querySelector('[data-weekend]');
  const daysWeekend = funcionamento.dataset.weekend.split(',').map(Number);
  const hoursWeekend = funcionamento.dataset.hours.split(',').map(Number);
  const dateNow = new Date();
  const dayWeekendCurrent = dateNow.getDay();
  const hourCurrent = dateNow.getHours();
  const weekendOpen = daysWeekend.indexOf(dayWeekendCurrent) !== -1;
  const hoursOpen = (hourCurrent >= hoursWeekend[0] && hourCurrent < hoursWeekend[1]);

  if(weekendOpen && hoursOpen){
    funcionamento.classList.add('open');
  }
}