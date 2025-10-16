import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Row, Col, Card, Button, Table, ProgressBar } from "react-bootstrap";
//import { motion } from "framer-motion"; // ✅ Re-added motion import
import { FaUserMd, FaCalendarCheck, FaChartBar, FaPhoneAlt } from "react-icons/fa";
import "../assets/DoctorDash.css";

const DoctorDashboard = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header d-flex justify-content-between align-items-center p-3 shadow-sm">
        <div className="d-flex align-items-center">
          <img src="/logo.png" alt="MediCare Logo" className="logo" />
          <h4 className="fw-bold ms-2">MediCare</h4>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="form-control search-bar w-25"
        />
        <div className="d-flex align-items-center gap-2">
          <img src="/doctor.png" alt="Profile" className="profile-pic" />
          <div>
            <p className="mb-0 fw-bold">Dr. Oliver Mitchell</p>
            <small className="text-muted">Psychotherapist</small>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <Container fluid className="mt-4 px-4">
        <Row className="g-4">
          {[
            { title: "Total Counselling", value: "2.9K", icon: <FaUserMd /> },
            { title: "Overall Booking", value: "3.2K", icon: <FaCalendarCheck /> },
            { title: "New Appointments", value: "254", icon: <FaChartBar /> },
            { title: "Visitors", value: "144.7K", icon: <FaUserMd /> },
          ].map((item, index) => (
            <Col md={3} sm={6} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-3 shadow-sm border-0 text-center stat-card">
                  <div className="icon mb-2">{item.icon}</div>
                  <h5 className="fw-bold">{item.value}</h5>
                  <p className="text-muted small">{item.title}</p>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Chart & Appointments */}
        <Row className="mt-5 g-4">
          <Col md={8}>
            <Card className="p-4 shadow-sm border-0">
              <h5 className="fw-bold mb-3">Patients Overview</h5>
              <ProgressBar now={70} label="21–29 Age Group: 102" className="mb-2" />
              <ProgressBar now={50} label="30–45 Age Group: 148" className="mb-2" />
              <ProgressBar now={30} label="46–60 Age Group: 58" />
            </Card>
          </Col>

          <Col md={4}>
            <Card className="p-4 shadow-sm border-0">
              <h5 className="fw-bold mb-3">Appointment Requests</h5>
              {["Uthman ibn Hunaif", "Sa'd ibn Mu'adh", "Zubayr ibn al-Awwam"].map(
                (name, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 mb-3 rounded bg-light"
                  >
                    <p className="fw-bold mb-1">{name}</p>
                    <div className="d-flex gap-2">
                      <Button variant="danger" size="sm">
                        Reject
                      </Button>
                      <Button variant="success" size="sm">
                        Accept
                      </Button>
                    </div>
                  </motion.div>
                )
              )}
            </Card>
          </Col>
        </Row>

        {/* Schedule List */}
        <Row className="mt-5">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <h5 className="fw-bold mb-4">Schedule List</h5>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Appoint For</th>
                    <th>Name</th>
                    <th>Date & Time</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Individual Counselling",
                      name: "Ibrahim Kadri",
                      time: "13 Feb, 11:00 am - 11:45 am",
                    },
                    {
                      type: "Couple Counselling",
                      name: "Miqdad ibn Aswad",
                      time: "13 Feb, 12:00 pm - 12:45 pm",
                    },
                    {
                      type: "Teen Counselling",
                      name: "Sa’d ibn Abi Waqqas",
                      time: "13 Feb, 1:00 pm - 1:45 pm",
                    },
                  ].map((item, i) => (
                    <motion.tr
                      key={i}
                      whileHover={{ backgroundColor: "#f8f9fa" }}
                      transition={{ duration: 0.2 }}
                    >
                      <td>{item.type}</td>
                      <td>{item.name}</td>
                      <td>{item.time}</td>
                      <td>
                        <FaPhoneAlt className="text-success" />
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="footer mt-5 text-white py-4">
        <Container>
          <Row>
            <Col md={4}>
              <h5>MediCare Medical Clinics</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada lorem maximus mauris scelerisque.
              </p>
            </Col>
            <Col md={4}>
              <h5>Contact Us</h5>
              <p>Address: Milton St. 26–27 London UK</p>
              <p>Phone: +53 345 7953 32453</p>
              <p>Email: yourmail@gmail.com</p>
            </Col>
            <Col md={4}>
              <h5>Useful Links</h5>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>About Us</li>
                <li>Departments</li>
                <li>Contact</li>
              </ul>
            </Col>
          </Row>
          <hr />
          <p className="text-center mb-0">
            © 2025 MediCare Clinic. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default DoctorDashboard;
