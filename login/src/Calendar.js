import React, { useState, useEffect } from 'react';
import './App.css';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [newEvent, setNewEvent] = useState({ schedule_header: '', schedule_description: '' });
  const [editEventDetails, setEditEventDetails] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

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
    const today = new Date().toISOString().split('T')[0];
    const calendarDays = [];

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    calendarDays.push(
      ...dayNames.map(dayName => <div key={dayName} className="calendar-day-name">{dayName}</div>)
    );

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= days; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEvents = events[dateStr] || [];
      const isPastDate = new Date(dateStr) < new Date(today);

      calendarDays.push(
        <div
          key={day}
          className={`calendar-day ${isPastDate ? 'disabled' : ''}`}
          onClick={() => !isPastDate && openModal(dateStr)}
        >
          <div className="date">{day}</div>
          <div className="events">
            {dayEvents.slice(0, 2).map((event, index) => (
              <div key={index} className="event">
                <div><strong>{event.header}</strong></div>
                <div>{event.description.length > 40 ? (
                  <>
                    {`${event.description.slice(0, 40)}... `}
                    <span className='show-more' style={{ fontWeight: 'bold' }}>Show more</span>
                  </>
                ) : (event.description)}
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
    setSuccessMessage('');
    if (events[date]) {
      const eventDetails = events[date].reduce((acc, event) => {
        acc[event.id] = { header: event.header, description: event.description };
        return acc;
      }, {});
      setEditEventDetails(eventDetails);
    } else {
      setEditEventDetails({});
    }
  };
  

  const closeModal = () => {
    setSelectedDate(null);
    setNewEvent({ schedule_header: '', schedule_description: '' });
    setEditEventDetails({});
    setSuccessMessage('');
  };

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e, eventId) => {
    setEditEventDetails(prev => ({
      ...prev,
      [eventId]: { ...prev[eventId], [e.target.name]: e.target.value }
    }));
  };

  const addEvent = () => {
    if (!newEvent.schedule_header || !newEvent.schedule_description) {
      setSuccessMessage('Both title and description are required.');
      return;
    }
  
    fetch('http://localhost:8000/addschedules', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        schedule_date: selectedDate,
        schedule_header: newEvent.schedule_header,
        schedule_description: newEvent.schedule_description,
        user_id: 1 // assuming a default user_id
      })
    })
      .then(response => response.json())
      .then(data => {
        // Re-fetch events to ensure new event IDs are correctly set
        fetchEvents();
        setNewEvent({ schedule_header: '', schedule_description: '' });
        setSelectedDate(null); // Close the modal
      })
      .catch(error => console.error('Error adding event:', error));
  };
  

  const editEvent = (id) => {
    if (!editEventDetails || !editEventDetails[id]) return;
  
    const { header, description } = editEventDetails[id];
  
    fetch(`http://localhost:8000/editschedules/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ schedule_header: header, schedule_description: description })
    })
      .then(response => response.json())
      .then(() => {
        setEvents(prev => {
          const updatedEvents = prev[selectedDate].map(event =>
            event.id === id ? { ...event, header, description } : event
          );
          return { ...prev, [selectedDate]: updatedEvents };
        });
        setSuccessMessage('Updated successfully!');
        fetchEvents(); // Re-fetch events
      })
      .catch(error => console.error('Error editing event:', error));
  };
  
  const deleteEvent = (id) => {
    fetch(`http://localhost:8000/deleteschedules/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        setEvents(prev => {
          const updatedEvents = prev[selectedDate].filter(event => event.id !== id);
          return { ...prev, [selectedDate]: updatedEvents };
        });
        setSuccessMessage('Deleted successfully!');
        fetchEvents(); // Re-fetch events
      })
      .catch(error => console.error('Error deleting event:', error));
  };
  

 

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>Previous</button>
        <div className="month-year">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</div>
        <button onClick={() => changeMonth(1)}>Next</button>
      </div>
      <div className="calendar-grid">
        {renderCalendar()}
      </div>
      {selectedDate && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Events for {selectedDate}</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            <div className='mt-6'>
              {events[selectedDate] && events[selectedDate].map(event => (
                <div key={event.id}>
                  <div>
                    <input
                      type="text"
                      name="header"
                      value={editEventDetails[event.id]?.header || ''}
                      onChange={(e) => handleEditChange(e, event.id)}
                    />
                    {/* <input
                      type="text"
                      name="description"
                      value={editEventDetails[event.id]?.description || ''}
                      onChange={(e) => handleEditChange(e, event.id)}
                    /> */}
                    <textarea
                      name="description"
                      value={editEventDetails[event.id]?.description || ''}
                      onChange={(e) => handleEditChange(e, event.id)}
                    ></textarea>
                  </div>
                 <div className='flex justify-around items-center w-[40%]'>
                 <button onClick={() => editEvent(event.id)}>Save</button>
                 <button onClick={() => deleteEvent(event.id)} className='bg-[#cf4040]'>Delete</button>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-8'>
            <h3>Add New Event</h3>
            <input
              type="text"
              name="schedule_header"
              placeholder="Title"
              value={newEvent.schedule_header}
              onChange={handleInputChange}
            />
            {/* <input
              type="text"
              name="schedule_description"
              placeholder="Description"
              value={newEvent.schedule_description}
              onChange={handleInputChange}
            /> */}
             <textarea
                name="schedule_description"
                placeholder="Description"
                value={newEvent.schedule_description}
                onChange={handleInputChange}
              ></textarea>
            <button onClick={addEvent}>Add Event</button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;