import React from "react";

export default function AppointmentHistory() {
  const history = [
    { date: "Apr 28", doctor: "Alex Smith", specialization: "Chorology", status: "Completed" },
    { date: "Mar 29", doctor: "Jonesen", specialization: "Philologist", status: "Completed" },
    { date: "Oct 22", doctor: "Anya", specialization: "Cardiologist", status: "Pending" },
  ];

  return (
    <div className="card history">
      <h4>Appointment History</h4>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Doctor</th>
            <th>Specialization</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {history.map((h, i) => (
            <tr key={i}>
              <td>{h.date}</td>
              <td>{h.doctor}</td>
              <td>{h.specialization}</td>
              <td>{h.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
