import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../assets/AuthSection.css"; // optional custom styling

const AuthSection = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="auth-section py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg border-0 rounded-4">
                <Card.Body className="p-4">
                  <h3 className="text-center mb-4 fw-bold text-success">
                    {isLogin ? "Login" : "Register"}
                  </h3>
                  <Form>
                    {!isLogin && (
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your full name"
                        />
                      </Form.Group>
                    )}
                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                      />
                    </Form.Group>

                    {!isLogin && (
                      <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm password"
                        />
                      </Form.Group>
                    )}

                    <div className="d-grid">
                      <Button variant="success" className="rounded-pill py-2">
                        {isLogin ? "Login" : "Register"}
                      </Button>
                    </div>
                  </Form>

                  <p className="text-center mt-3">
                    {isLogin ? (
                      <>
                        Don’t have an account?{" "}
                        <span
                          className="text-primary fw-bold"
                          onClick={() => setIsLogin(false)}
                          style={{ cursor: "pointer" }}
                        >
                          Register here
                        </span>
                      </>
                    ) : (
                      <>
                        Already have an account?{" "}
                        <span
                          className="text-primary fw-bold"
                          onClick={() => setIsLogin(true)}
                          style={{ cursor: "pointer" }}
                        >
                          Login here
                        </span>
                      </>
                    )}
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AuthSection;
