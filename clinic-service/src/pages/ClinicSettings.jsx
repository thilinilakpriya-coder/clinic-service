import React, { useState, useEffect } from "react";
import "../assets/ClinicSettings.css";


const ClinicSettings = () => {
  // -------- Calendar Logic --------
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [closedDays, setClosedDays] = useState([]);

  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendar = [];
    let date = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || date > daysInMonth) {
          week.push(null);
        } else {
          week.push(new Date(year, month, date++));
        }
      }
      calendar.push(week);
    }
    return calendar;
  };

  const [calendar, setCalendar] = useState(generateCalendar(currentMonth, currentYear));

  const handlePrevMonth = () => {
    const newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const newYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleNextMonth = () => {
    const newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const newYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const toggleClosedDay = (date) => {
    if (!date) return;
    const dateStr = date.toDateString();
    setClosedDays((prev) =>
      prev.includes(dateStr) ? prev.filter((d) => d !== dateStr) : [...prev, dateStr]
    );
  };

  useEffect(() => {
    setCalendar(generateCalendar(currentMonth, currentYear));
  }, [currentMonth, currentYear]);

  // -------- Responsive details open/close --------
  useEffect(() => {
    const detailsElements = document.querySelectorAll("details");
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        detailsElements.forEach((details) => (details.open = false));
      } else {
        detailsElements.forEach((details) => (details.open = true));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // -------- Main Return --------
  return (
    <>
      
      

      {/* 🔸 Main Content */}
      <main className="main-content" style={{ minHeight: "80vh" }}>
        <div className="header">
          <h1>Clinic Settings</h1>
          
        </div>

        <div className="grid-container">
          {/* Left Column */}
          <div className="left-column">
            {/* Clinic Hours */}
            <div className="card">
              <details open>
                <summary>
                  <div>
                    <span className="material-icons">schedule</span>
                    <h2>Clinic Hours</h2>
                  </div>
                  <span className="material-icons">expand_more</span>
                </summary>
                <div className="details-content">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <div className="day-row" key={day}>
                      <label>{day}</label>
                      <select>
                        <option>09:00 AM</option>
                        <option>Closed</option>
                      </select>
                      <select>
                        <option>05:00 PM</option>
                      </select>
                    </div>
                  ))}
                </div>
              </details>
            </div>

            {/* Slot Duration */}
            <div className="card">
              <details open>
                <summary>
                  <div>
                    <span className="material-icons">hourglass_empty</span>
                    <h2>Slot Duration</h2>
                  </div>
                  <span className="material-icons">expand_more</span>
                </summary>
                <div className="details-content slot-options">
                  {[10, 15, 20, 30].map((minute) => (
                    <label key={minute} className="radio-option">
                      <input type="radio" name="slot" defaultChecked={minute === 15} value={minute} />
                      <span>{minute} minute</span>
                    </label>
                  ))}
                </div>
              </details>
            </div>

            {/* Break & Buffer Times */}
            <div className="card">
              <details open>
                <summary>
                  <div>
                    <span className="material-icons">free_breakfast</span>
                    <h2>Break & Buffer Times</h2>
                  </div>
                  <span className="material-icons">expand_more</span>
                </summary>
                <div className="details-content">
                  <div className="break-row">
                    <label>Break Name</label>
                    <input type="text" placeholder="e.g., Lunch break" />
                  </div>
                  <div className="break-row">
                    <label>Time</label>
                    <input type="time" defaultValue="13:00" />
                    <input type="time" defaultValue="14:00" />
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Holidays / Closed Days */}
            <div className="card">
              <details open>
                <summary>
                  <div>
                    <span className="material-icons">calendar_today</span>
                    <h2>Holidays / Closed Days</h2>
                  </div>
                  <span className="material-icons">expand_more</span>
                </summary>
                <div className="details-content">
                  <div className="calendar-placeholder">
                    <div className="calendar-header">
                      <button onClick={handlePrevMonth}>&lt;</button>
                      <h3>{months[currentMonth]} {currentYear}</h3>
                      <button onClick={handleNextMonth}>&gt;</button>
                    </div>

                    <table>
                      <thead>
                        <tr>
                          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                            <th key={day}>{day}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {calendar.map((week, i) => (
                          <tr key={i}>
                            {week.map((date, j) => (
                              <td
                                key={j}
                                className={closedDays.includes(date?.toDateString()) ? "active-date" : ""}
                                onClick={() => toggleClosedDay(date)}
                              >
                                {date ? date.getDate() : ""}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </details>
            </div>

            {/* Notifications */}
            <div className="card">
              <details open>
                <summary>
                  <div>
                    <span className="material-icons">notifications</span>
                    <h2>Notifications Preferences</h2>
                  </div>
                  <span className="material-icons">expand_more</span>
                </summary>
                <div className="details-content">
                  <div className="notification-row">
                    <label>
                      <span className="material-icons">email</span>Email Reminders
                    </label>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="notification-row">
                    <label>
                      <span className="material-icons">sms</span>SMS Reminders
                    </label>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>

        <div className="btn-container">
          <button className="cancel-btn">Cancel</button>
          <button className="save-btn">Save Changes</button>
        </div>
      </main>

      {/* 🔹 Footer එක */}
      
    </>
  );
};

export default ClinicSettings;
