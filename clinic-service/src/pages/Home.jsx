import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import "../assets/Home.css"; // you’ll style this later
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Doctor from "../assets/Doctor.png";

import "bootstrap/dist/css/bootstrap.min.css";
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";

import { Carousel } from "react-bootstrap";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import { Link } from "react-router-dom";



import AuthSection from "../components/AuthSection";




const Home = () => {
  return (
    <div className="home-page">
      



      {/* ======= HERO SECTION SLIDE ======= */}

      <section className="hero-section">
      <Carousel fade interval={3000} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src={hero1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className="fw-bold">Welcome to Our Platform</h2>
            <p>Empowering healthcare through technology and innovation.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src={hero2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2 className="fw-bold">Revolutionizing Medicine</h2>
            <p>Stay informed with the latest medical breakthroughs.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src={hero3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2 className="fw-bold">Your Health, Our Priority</h2>
            <p>Join us in advancing healthcare for everyone.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>

    
      

      {/* ======= HERO SECTION ======= */}
      <section className="hero-section text-center bg-light py-5">
        <Container>
          <img
            src={Doctor}
            alt="Clinic Banner"
            className="img-fluid mb-4"
            style={{ borderRadius: "15px" }}
          />
          <h1 className="fw-bold">The Best Medical Services</h1>
          <p className="text-muted mx-auto w-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor
            at, ornare erat.
          </p>
        </Container>
      </section>

      {/* ======= OPENING HOURS ======= */}
      <section className="hours-section py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h3 className="fw-bold mb-3">Opening Hours</h3>
              <ul className="list-unstyled">
                <li>Monday - Thursday: 8.00 - 19.00</li>
                <li>Friday: 8.00 - 18.30</li>
                <li>Saturday: 9.30 - 17.00</li>
                <li>Sunday: 9.30 - 15.00</li>
              </ul>
            </Col>
            <Col md={6} className="text-center bg-light p-4 rounded">
              <h5 className="fw-bold">Emergency</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button variant="success">
                <FaPhoneAlt className="me-2" />
                +94 778899223
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======= DEPARTMENTS ======= */}
      <section className="departments py-5 bg-light">
        <Container>
          <h3 className="text-center mb-5 fw-bold">Our Departments</h3>
          <Row>
            {[
              "Cardiology",
              "Gastroenterology",
              "Medical Lab",
              "Dental Care",
              "Surgery",
              "Neurology",
              "Pediatry",
              "Ophthalmology",
            ].map((dept) => (
              <Col md={3} sm={6} key={dept} className="mb-4">
                <Card className="p-3 shadow-sm text-center h-100">
                  <h5 className="fw-bold mb-2">{dept}</h5>
                  <p className="text-muted small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <FaArrowRight className="text-success" />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ======= NEWS ======= */}
      <section className="news-section py-5">
        <Container>
          <h3 className="text-center mb-5 fw-bold">The News</h3>
          <Row>
            {[
              {
                title: "The latest in Medicine",
                img: news1,
              },
              {
                title: "All you need to know about pills",
                img: news2,
              },
              {
                title: "Marketing and Medicine",
                img: news3,
              },
              
            ].map((item) => (
              <Col md={4} key={item.title}>
                <Card className="shadow-sm mb-4">
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                    <small className="text-muted">Date: April 12, 2018</small>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center">
            <Button variant="success" className="px-4 py-2 rounded-pill">
              Read More
            </Button>
          </div>
        </Container>
      </section>

      
    </div>
  );
};

export default Home;
