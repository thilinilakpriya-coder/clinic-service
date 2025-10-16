import React from "react";

import "../assets/ManageAppointments.css";


const ManageAppointments = () => {

  const appointments = [
    {
      patient: "Ruwan",
      doctor: "Dr. Smith",
      datetime: "Oct 28, 2023, 10:00 AM",
      status: "Confirmed",
    },
    {
      patient: "Kasun",
      doctor: "Dr. Jones",
      datetime: "Oct 30, 2023, 09:00 PM",
      status: "Pending",
    },
    {
      patient: "Amara",
      doctor: "Dr. Kasun",
      datetime: "Oct 10, 2023, 10:00 AM",
      status: "Cancelled",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Confirmed":
        return "status-badge confirmed";
      case "Pending":
        return "status-badge pending";
      case "Cancelled":
        return "status-badge cancelled";
      default:
        return "status-badge";
    }
  };

  return (
    <>
      {/* 🔹 Navbar එක */}
     

      <main className="main-content" style={{ minHeight: "80vh" }}>
        {/* 🔸 Header */}
        <div className="header">
          <div className="header-title">
            <h1>Manage Appointments</h1>
            <p>View and manage all scheduled patient appointments.</p>
          </div>
          <div className="filters">
            <input type="text" placeholder="Search..." />
            <select><option>Doctor</option></select>
            <select><option>Patient</option></select>
            <input type="date" />
            <select>
              <option>Status</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
            <button className="new-appointment">
              <span className="material-icons">add</span> New Appointment
            </button>
          </div>
        </div>

        {/* 🔸 Appointments Table */}
        <section className="appointments-section">
          <h2>Upcoming Appointments</h2>
          <div className="appointments-table">
            <table>
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Date & Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a, i) => (
                  <tr key={i}>
                    <td>{a.patient}</td>
                    <td>{a.doctor}</td>
                    <td>{a.datetime}</td>
                    <td>
                      <span className={getStatusClass(a.status)}>
                        {a.status}
                      </span>
                    </td>
                    <td className="action-buttons">
                      <button><span className="material-icons">edit</span></button>
                      <button><span className="material-icons">delete</span></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* 🔹 Footer එක */}
      
    </>
  );
};

export default ManageAppointments;
