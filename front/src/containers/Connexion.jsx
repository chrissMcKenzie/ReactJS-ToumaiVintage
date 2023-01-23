import React from 'react'

import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function Connexion() {
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={12} lg={10} xs={12} >
            <Card className="px-4" style={{ backgroundColor: "#eacc81" }}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Connexion
                  </h2>
                  <div className="mb-3">
                    <Form>
                     <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Adresse email?"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Mot de Passe</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="warning" size="lg" type="submit" style ={{backgroundColor:'#d3b94f',border:'0'}}>
                          Connexion
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-2  text-center">
                      
                      Mot de Passe Oublier? {"  "}
                        <a href="/Inscription" className="text-primary fw-bold">
                        Réinitialiser votre Mot de Passe
                      </a>

                        Pas de compte? {" "}
                        <a href="/Inscription" className="text-primary fw-bold">
                        Inscrivez-vous
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}



export default Connexion;