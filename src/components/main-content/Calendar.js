import { useState } from "react";
import { format, startOfWeek, addDays, isSameDay, lastDayOfWeek, addWeeks, subWeeks} from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

const Calendar = ({ showDetailsHandle }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeWeekHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subWeeks(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addWeeks(currentMonth, 1));
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
    showDetailsHandle(dayStr);
  };

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="header row flex justify-between items-center">
        <div className="col col-left text-base font-semibold">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col-right flex">
            <div className="icon w-8 h-8 flex justify-center items-center" onClick={() => changeWeekHandle("prev")}>
                <FontAwesomeIcon icon={faAngleLeft} color='#6c62dd' className="text-xs"/>
            </div>
            <div className="icon w-8 h-8 flex justify-center items-center col-end" onClick={() => changeWeekHandle("next")}>
                <FontAwesomeIcon icon={faAngleRight} color='#6c62dd' className="text-xs"/>
            </div>
        </div>
      </div>
    );
  };
  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="day text-xs" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row items-center">{days}</div>;
  };
  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className='date text-xs'
            key={day}
            onClick={() => {
              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr);
            }}
          >
            <span className={`number w-8 h-8 flex justify-center items-center ${
              isSameDay(day, new Date())
                ? "today text-white"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row items-center" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };
  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
