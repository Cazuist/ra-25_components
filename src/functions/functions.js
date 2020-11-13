import moment from 'moment';

export function dateFunction(date) {
  const timestamp = date.getTime();
  const mom = moment(timestamp);
  const currentDay = mom.dayOfYear();
  const currentMonth = mom.month();  
  const startWeek = mom.startOf('month').isoWeek();
  const endWeek = mom.endOf('month').isoWeek();
 
  const calendar = {};

  for (let i = startWeek; i <= endWeek; i++) {
    const startDay = moment().isoWeek(i).startOf('isoWeek');
    
    calendar[i] = [];
    calendar[i].push({
      day: startDay.format('D-M'),
      isCurrentMonth: startDay.month() === currentMonth,
      isCurrentDay: startDay.dayOfYear() === currentDay,
    });    

    for (let j = 1; j < 7; j++) {
      calendar[i].push({
        day: startDay.add({days: 1}).format('D-M'),
        isCurrentMonth: startDay.month() === currentMonth,
        isCurrentDay: startDay.dayOfYear() === currentDay,
      });
    }
  }
  
  return calendar;
}