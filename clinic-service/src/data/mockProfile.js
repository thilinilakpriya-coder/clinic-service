const sample = {
  fullName: "John Doe",
  photo: "",
  dob: "1985-06-18",
  gender: "Male",
  phone: "+1 555-123-4567",
  email: "john.doe@example.com",
  address: "123 Main St, Springfield, USA",
  bloodGroup: "O+",
  allergies: "Penicillin",
  conditions: "Hypertension",
  medications: "Amlodipine",
  username: "johndoe85",
  language: "English",
  notifySms: true,
  notifyEmail: true,
  notifyApp: false,
  upcoming: [
    { id: 1, date: "2025-10-20", time: "10:00 AM", doctor: "Dr. Smith", note: "Routine checkup" },
  ],
  past: [
    { id: 11, date: "2025-06-10", time: "2:00 PM", doctor: "Dr. Adams", note: "Flu symptoms", prescription: "Tamiflu" },
  ],
};

export default sample;
