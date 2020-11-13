import PropTypes from 'prop-types';
import moment from 'moment';
import { dateFunction } from '../functions/functions';


const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const titles = ['Mondy', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function Calendar({ date }) {
 const timestamp = date.getTime();
 const mom = moment(timestamp);
 const calendar = dateFunction(date);

 return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{mom.format('dddd')}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{mom.format('D')}</div>
          <div className="ui-datepicker-material-month">{mom.format('MMMM')}</div>
          <div className="ui-datepicker-material-year">{mom.format('YYYY')}</div>
        </div>
      </div>

      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{mom.format('MMMM')}</span>&nbsp;
          <span className="ui-datepicker-year">{mom.format('YYYY')}</span>
        </div>
      </div>

      <table className="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className="ui-datepicker-week-end"/>
          <col className="ui-datepicker-week-end"/>
        </colgroup>
        <thead>
          <tr>
            {days.map((day, idx) => <th scope="col" title={titles[idx]} key={day}>{day}</th>)}
          </tr>
        </thead>

        <tbody>
          {Object.keys(calendar).map((week) => <tr key={week}>
            {calendar[week].map((info) => 
              <td 
                key={info.day}                 
                className={info.isCurrentMonth ? info.isCurrentDay ?
                  'ui-datepicker-today' : null : 'ui-datepicker-other-month'}
                >
                  {info.day.split('-')[0]}
              </td>)}
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
};
