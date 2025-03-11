import React, { useState, useEffect } from 'react';
import './Calendar.css';
import Footer from './Footer';
// You can use any icons, here I'm using Font Awesome icons
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetch('http://localhost:8000/schedules')
      .then(response => response.json())
      .then(data => {
        const formattedEvents = data.reduce((acc, event) => {
          const date = new Date(event.schedule_date).toISOString().split('T')[0];
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push({ id: event.id, header: event.schedule_header, description: event.schedule_description });
          return acc;
        }, {});
        setEvents(formattedEvents);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const changeMonth = (months) => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + months)));
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = daysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();
    const calendarDays = [];

    const dayNames = [
      { full: 'Sunday', short: 'S' },
      { full: 'Monday', short: 'M' },
      { full: 'Tuesday', short: 'T' },
      { full: 'Wednesday', short: 'W' },
      { full: 'Thursday', short: 'TH' },
      { full: 'Friday', short: 'F' },
      { full: 'Saturday', short: 'S' },
    ];

    // Render day names
    calendarDays.push(
      ...dayNames.map((dayName, index) => (
        <div key={index} className="calendar-day-name">
          <span className="day-name-full">{dayName.full}</span>
          <span className="day-name-short">{dayName.short}</span>
        </div>
      ))
    );

    // Render empty cells before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Render the days of the month
    for (let day = 1; day <= days; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEvents = events[dateStr] || [];

      calendarDays.push(
        <div
          key={day}
          className={`calendar-day`}
          onClick={() => openModal(dateStr)}
        >
          <div className="date">{day}</div>
          <div className="events">
            {dayEvents.slice(0, 2).map((event, index) => (
              <div key={index} className="event">
                <div><strong>{event.header}</strong></div>
                <div>
                  {event.description.length > 40 ? (
                    <>
                      {`${event.description.slice(0, 40)}... `}
                      <span className="show-more" style={{ fontWeight: 'bold' }}>
                        Show more
                      </span>
                    </>
                  ) : (
                    event.description
                  )}
                </div>
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="more-events">+{dayEvents.length - 2} more</div>
            )}
          </div>
        </div>
      );
    }

    return calendarDays;
  };

  const openModal = (date) => {
    setSelectedDate(date);
  };

  const closeModal = () => {
    setSelectedDate(null);
  };

  return (
    <>
      <h1 className='text-[29px] mt-3 font-bold font-montserrat text-[#0B3D2C] flex justify-center items-center'>
        Our Saviour Community Garden Hours
      </h1>
      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={() => changeMonth(-1)}>
            <FaChevronLeft />
          </button>
          <div className="month-year">
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </div>
          <button onClick={() => changeMonth(1)}>
            <FaChevronRight />
          </button>
        </div>
        <div className="calendar-grid">
          {renderCalendar()}
        </div>
        {selectedDate && (
          <div className="modal">
            <div className="modal-content">
              <div className=''>
                <span className="close" onClick={closeModal}>&times;</span>
                <h2 className='text-black'>Events for {selectedDate}</h2>
              </div>
              <div className='mt-6'>
                {events[selectedDate] && events[selectedDate].map(event => (
                  <div key={event.id} className="event-details-box">
                    <div><strong>{event.header}</strong></div>
                    <div>{event.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Calendar;
