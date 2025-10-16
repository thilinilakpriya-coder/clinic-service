const doctorList = document.querySelector(".doctor-list");

const doctors = [
  {
    name: "Dr. Ching Ming Yu",
    specialty: "Dermatologist",
    rating: 4.2,
    experience: "10+ Years of Experience",
    availability: "Available Today",
    isAvailable: true,
    image: "img"
  },
  {
    name: "Dr. Amanda Blake",
    specialty: "Cardiologist",
    rating: 4.8,
    experience: "5–10 Years of Experience",
    availability: "Unavailable",
    isAvailable: false,
    image: "images/doc2.jpg"
  },
  {
    name: "Dr. Raj Patel",
    specialty: "Orthopedic Surgeon",
    rating: 4.5,
    experience: "10+ Years of Experience",
    availability: "Available Today",
    isAvailable: true,
    image: "images/doc3.jpg"
  },
  {
    name: "Dr. Sarah Khan",
    specialty: "Pediatrician",
    rating: 4.9,
    experience: "5–10 Years of Experience",
    availability: "Available Today",
    isAvailable: true,
    image: "images/doc4.jpg"
  },
  {
    name: "Dr. Leo Martinez",
    specialty: "General Practitioner",
    rating: 4.3,
    experience: "0–5 Years of Experience",
    availability: "Unavailable",
    isAvailable: false,
    image: "images/doc5.jpg"
  },
  {
    name: "Dr. Emily Zhang",
    specialty: "Neurologist",
    rating: 4.6,
    experience: "10+ Years of Experience",
    availability: "Available Today",
    isAvailable: true,
    image: "images/doc6.jpg"
  }
];

doctors.forEach((doc) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${doc.image}" alt="Doctor Photo" />
    <h4>${doc.name}</h4>
    <p>${doc.specialty}</p>
    <p class="rating">⭐ ${doc.rating}</p>
    <span class="tag">${doc.experience}</span>
    <span class="tag ${doc.isAvailable ? "" : "unavailable"}">
      ${doc.availability}
    </span>
    <button>Book Appointment</button>
  `;
  doctorList.appendChild(card);
});
