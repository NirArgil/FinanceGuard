import React, { useContext } from 'react'
import Calendar from 'react-calendar';
import './CalendarV.scss';
import { LangContext } from '../../context/LangContext';
import { useSelector } from "react-redux";

export const CalendarV = () => {
  const { currentLang } = useContext(LangContext);
  const { darkMode } = useSelector((state) => state.theme);
  
  
  return (
    <div className={darkMode ? "calendar-containerDarkMode" : "calendar-container"}>
    {/* // <div className="calendar-container"> */}

      {currentLang === 'עברית' ?
        <Calendar
          calendarType="US"
          locale="he-IL"
        />
        :
        <Calendar
          calendarType="US"
          locale="en-US"
        />}
      {/* </div> */}
    </div>
  );
}