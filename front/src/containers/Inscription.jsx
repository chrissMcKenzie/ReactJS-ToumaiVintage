import React from "react";

import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function Inscription() {
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={8} xs={12}>
            <Card className="px-4" style={{ backgroundColor: "#eacc81" }}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Inscription (New)
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Row>
                        <Form.Group
                          as={Col}
                          className="mb-4"
                          controlId="Prenom"
                        >
                          <Form.Label className="text-center">
                            Prénom
                          </Form.Label>
                          <Form.Control type="text" placeholder="Prénom ?" />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="Nom">
                          <Form.Label className="text-center">
                            Nom
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Nom de Famille ?"
                          />
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group as={Col}>
                          <Form.Label className="text-center">Sexe</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option> Sexe ?</option>
                            <option value="1">Femme</option>
                            <option value="2">Homme</option>
                            <option value="3">X</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          className="mb-4"
                          controlId="DateNaissance"
                        >
                          <Form.Label className="text-center">
                            Date de Naissance
                          </Form.Label>
                          <Form.Control
                            type="Date"
                            placeholder="Date de Naissance ?"
                          />
                        </Form.Group>
                      </Row>

                      <Form.Group className="mb-4" controlId="Adresse">
                        <Form.Label className="text-center">Adresse</Form.Label>
                        <Form.Control type="text" placeholder="Adresse ?" />
                      </Form.Group>
                      <Row>
                        <Form.Group as={Col} className="mb-3" controlId="Pays">
                          <Form.Label className="text-center">Pays</Form.Label>
                          <Form.Control type="text" placeholder="Pays ?" />
                        </Form.Group>
                        <Form.Group as={Col} className="mb-4" controlId="Ville">
                          <Form.Label className="text-center">Ville</Form.Label>
                          <Form.Control type="text" placeholder="Ville ?" />
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          className="mb-3"
                          controlId="Departement"
                        >
                          <Form.Label className="text-center">
                            Departement
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Département ?"
                          />
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group as = {Col} className="mb-4" controlId="CODEPOSTAL">
                        <Form.Label className="text-center">
                          Code Postal
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Code Postal?"
                        />
                      </Form.Group>

                      <Form.Group as = {Col} className="mb-4" controlId="NUMEROPHONE">
                        <Form.Label className="text-center">
                          Téléphone
                        </Form.Label>
                        <Form.Control
                          type="phone"
                          placeholder="Numéro de Téléphone ?"
                        />
                      </Form.Group>
                      </Row>
                      

                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Adresse Email?"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Mot de Passe</Form.Label>
                        <Form.Control type="password" placeholder="Password ?" />
                      </Form.Group>
                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword1"
                      >
                        <Form.Label>Confirmer votre Mot de Passe</Form.Label>
                        <Form.Control type="password" placeholder="Confirmer Mot de Passe ?" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="warning" size="lg" type="submit" style ={{backgroundColor:'#d3b94f',border:'0'}}>
                          INSCRIPTION
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Avez-vous déja un compte??{" "}
                        <a href="/Connexion" className="text-primary fw-bold">
                          Connectez-vous
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

export default Inscription;
