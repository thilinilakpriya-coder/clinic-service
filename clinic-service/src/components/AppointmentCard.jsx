import React from "react";

export default function AppointmentCard() {
  return (
    <div className="card upcoming">
      <h4>Up Coming Appointment</h4>
      <p><strong>Dr. Anya Senanayaka</strong></p>
      <p>Cardiologist</p>
      <p>Date: Mon, Oct 22, 2025</p>
      <button className="cancel-btn">Cancel Appointment</button>
    </div>
  );
}
