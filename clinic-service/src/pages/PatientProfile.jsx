import React, { useState } from "react";
import "../assets/Profile.css";
import sampleProfile from "../data/mockProfile";

export default function PatientProfile() {
  const [profile, setProfile] = useState(sampleProfile);
  const [editing, setEditing] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setProfile((p) => ({ ...p, [name]: value }));
  }

  function toggleEdit() {
    setEditing((s) => !s);
  }

  function handleResetPassword() {
    // mock reset action
    alert("Password reset link sent to " + profile.email);
  }

  return (
    <div className="profile-page">
      <header className="profile-header">
        <h1>Patient Profile</h1>
        <div className="profile-actions">
          <button onClick={toggleEdit} className="btn">
            {editing ? "Save" : "Edit"}
          </button>
          <button onClick={handleResetPassword} className="btn secondary">
            Reset Password
          </button>
        </div>
      </header>

      <section className="profile-grid">
        <div className="card personal">
          <h2>Personal Information</h2>
          <div className="avatar-row">
            <img
              src={profile.photo || "/avatar-placeholder.png"}
              alt="profile"
              className="avatar"
            />
            <div className="basic-info">
              <label>
                Full Name
                <input
                  name="fullName"
                  value={profile.fullName}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </label>

              <label>
                Date of Birth
                <input
                  type="date"
                  name="dob"
                  value={profile.dob}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </label>

              <label>
                Gender
                <select
                  name="gender"
                  value={profile.gender}
                  onChange={handleChange}
                  disabled={!editing}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
          </div>

          <label>
            Contact Number
            <input
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              disabled={!editing}
            />
          </label>

          <label>
            Email Address
            <input
              name="email"
              value={profile.email}
              onChange={handleChange}
              disabled={!editing}
            />
          </label>

          <label>
            Address
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
              disabled={!editing}
            />
          </label>
        </div>

        <div className="card medical">
          <h2>Medical Information</h2>
          <label>
            Blood Group
            <input
              name="bloodGroup"
              value={profile.bloodGroup}
              onChange={handleChange}
              disabled={!editing}
            />
          </label>

          <label>
            Allergies
            <input
              name="allergies"
              value={profile.allergies}
              onChange={handleChange}
              disabled={!editing}
            />
          </label>

          <label>
            Chronic Conditions
            <input
              name="conditions"
              value={profile.conditions}
              onChange={handleChange}
              disabled={!editing}
            />
          </label>

          <label>
            Current Medications
            <input
              name="medications"
              value={profile.medications}
              onChange={handleChange}
              disabled={!editing}
            />
          </label>
        </div>

        <div className="card account">
          <h2>Account Information</h2>
          <label>
            Username / ID
            <input
              name="username"
              value={profile.username}
              onChange={handleChange}
              disabled={!editing}
            />
          </label>

          <label>
            Preferred Language
            <input
              name="language"
              value={profile.language}
              onChange={handleChange}
              disabled={!editing}
            />
          </label>

          <label className="checkbox-row">
            Notification Preferences
            <div>
              <label>
                <input
                  type="checkbox"
                  name="notifySms"
                  checked={profile.notifySms}
                  onChange={(e) =>
                    setProfile((p) => ({ ...p, notifySms: e.target.checked }))
                  }
                  disabled={!editing}
                />
                SMS
              </label>
              <label>
                <input
                  type="checkbox"
                  name="notifyEmail"
                  checked={profile.notifyEmail}
                  onChange={(e) =>
                    setProfile((p) => ({ ...p, notifyEmail: e.target.checked }))
                  }
                  disabled={!editing}
                />
                Email
              </label>
              <label>
                <input
                  type="checkbox"
                  name="notifyApp"
                  checked={profile.notifyApp}
                  onChange={(e) =>
                    setProfile((p) => ({ ...p, notifyApp: e.target.checked }))
                  }
                  disabled={!editing}
                />
                App
              </label>
            </div>
          </label>
        </div>
      </section>

      <section className="appointments card">
        <h2>Appointment History</h2>
        <div className="appointments-column">
          <div>
            <h3>Upcoming Appointments</h3>
            {profile.upcoming && profile.upcoming.length ? (
              <ul>
                {profile.upcoming.map((a) => (
                  <li key={a.id} className="appointment">
                    <div className="appt-left">
                      <strong>{a.date}</strong>
                      <div>{a.time}</div>
                    </div>
                    <div className="appt-right">
                      <div>{a.doctor}</div>
                      <div className="appt-note">{a.note}</div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No upcoming appointments</p>
            )}
          </div>

          <div>
            <h3>Past Appointments</h3>
            {profile.past && profile.past.length ? (
              <ul>
                {profile.past.map((a) => (
                  <li key={a.id} className="appointment">
                    <div className="appt-left">
                      <strong>{a.date}</strong>
                      <div>{a.time}</div>
                    </div>
                    <div className="appt-right">
                      <div>{a.doctor}</div>
                      <div className="appt-note">{a.note}</div>
                      {a.prescription && (
                        <div className="prescription">Prescription: {a.prescription}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No past appointments</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
