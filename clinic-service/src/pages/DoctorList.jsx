import React from "react";
import "../assets/DoctorList.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dctrching from "../assets/images/dctrching.jpg";
import ggg from "../assets/images/ggg.jpg";
import hhss from "../assets/images/hhss.jpg";
import imggg from "../assets/images/imggg.jpg";
import aisha from "../assets/images/aisha.jpg";
import emily from "../assets/images/emily.jpg";





const doctors = [
  {
    name: "Dr. Ching Ming Yu",
    specialty: "Dermatologist",
    rating: 4.2,
    experience: "10+ Years of Experience",
    availability: "Available Today",
    isAvailable: true,
    image: dctrching,
  },
  {
    name: "Dr. Amanda Blake",
    specialty: "Cardiologist",
    rating: 4.8,
    experience: "5–10 Years of Experience",
    availability: "Unavailable",
    isAvailable: false,
    image: ggg,
  },
  {
    name: "Dr. Raj Patel",
    specialty: "Orthopedic Surgeon",
    rating: 4.5,
    experience: "10+ Years of Experience",
    availability: "Available Today",
    isAvailable: true,
    image: hhss,
  },
  {
    name: "Dr. Sarah Khan",
    specialty: "Pediatrician",
    rating: 4.9,
    experience: "5–10 Years of Experience",
    availability: "Available Today",
    isAvailable: true,
    image: imggg,
  },
  {
    name: "Dr. Leo Martinez",
    specialty: "General Practitioner",
    rating: 4.3,
    experience: "0–5 Years of Experience",
    availability: "Unavailable",
    isAvailable: false,
    image: aisha,
  },
  {
    name: "Dr. Emily Zhang",
    specialty: "Neurologist",
    rating: 4.6,
    experience: "10+ Years of Experience",
    availability: "Available Today",
    isAvailable: true,
    image: emily,
  },
];



export default function DoctorFinderPage() {
  return (
       
    <>
    

    <div className="container">
      <header>
        <h1>Find the Right Doctor For You</h1>
        <input type="text" placeholder="Search by name or specialty" />
      </header>

      <main className="main-content">
        <section className="doctor-list">
          {doctors.map((doc, index) => (
            <div className="card" key={index}>
              <img src={doc.image} alt={doc.name} />
              <h4>{doc.name}</h4>
              <p>{doc.specialty}</p>
              <p className="rating">⭐ {doc.rating}</p>
              <span className="tag">{doc.experience}</span>
              <span
                className={`tag ${doc.isAvailable ? "" : "unavailable"}`}
              >
                {doc.availability}
              </span>
              <button>Book Appointment</button>
            </div>
          ))}
        </section>

        <aside className="filter">
          <h3>Filter</h3>

          <div className="filter-group">
            <label>Gender</label>
            <div>
              <label><input type="radio" name="gender" /> Any</label>
              <label><input type="radio" name="gender" /> Male</label>
              <label><input type="radio" name="gender" /> Female</label>
            </div>
          </div>

          <div className="filter-group">
            <label>Experience</label>
            <div>
              <label><input type="checkbox" /> 0–5 Yrs</label><br />
              <label><input type="checkbox" /> 5–10 Yrs</label><br />
              <label><input type="checkbox" /> 10+ Yrs</label>
            </div>
          </div>

          <div className="filter-group">
            <label>Availability</label>
            <div>
              <label><input type="checkbox" /> Today</label><br />
              <label><input type="checkbox" /> Tomorrow</label><br />
              <label><input type="checkbox" /> Weekdays</label><br />
              <label><input type="checkbox" /> Weekends</label>
            </div>
          </div>

          <div className="filter-group">
            <label>Time Slots</label>
            <div>
              <label><input type="checkbox" /> 09:00 AM – 12:30PM</label><br />
              <label><input type="checkbox" /> 01:30PM – 06:30PM</label>
            </div>
          </div>
        </aside>
      </main>
    </div>

    <br />
    
    </>
  );
}
