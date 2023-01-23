import React, {useState} from "react";
import {Link} from 'react-router-dom'

import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function Inscription() {

  let [state, setState] = useState({
      user:{
          Prénom: "",
          Nom: "",
          Sexe: "",
          DateDeNaissance: "",
          Adresse: "",
          Pays: "",
          Ville: "",
          Département: "",
          CodePostal: "",
          Téléphone: "",
          Email: "",
          MotDePasse: ""
      }
  })

  let updateInput = (e) => {
      setState({
          ...state, user: {
              ...state.user,
              [e.target.name]: e.target.value
          }
      })
  }

  let handleSubmit = (e) => {
      e.preventDefault()
      console.log(state.user);
  }

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center">
          <Col md={9} lg={10}>
            <Card className="px-4" style={{ backgroundColor: "#eacc81" ,height:'auto'}}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Inscription (New)
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Row>
                        <Form.Group as={Col} className="mb-4" controlId="Prenom" >
                          <Form.Label className="text-center"> Prénom </Form.Label>
                          <Form.Control type="text" name="Prenom" placeholder="Prénom ?"
                            onChange={updateInput}
                          />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="Nom">
                          <Form.Label className="text-center"> Nom </Form.Label>
                          <Form.Control type="text" name="Nom" placeholder="Nom de Famille ?"
                            onChange={updateInput}
                          />
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group as={Col}>
                          <Form.Label className="text-center">Sexe</Form.Label>
                          <Form.Select aria-label="Default select example" name="Sexe"
                            onChange={updateInput}
                          >
                            <option>Sexe ?</option>
                            <option value="1">Femme</option>
                            <option value="2">Homme</option>
                            <option value="3">X</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-4" controlId="DateNaissance">
                          <Form.Label className="text-center">
                            Date de Naissance
                          </Form.Label>
                          <Form.Control type="Date" name="DateDeNaissance" placeholder="Date de Naissance ?"
                          onChange={updateInput}
                          />
                        </Form.Group>
                      </Row>

                      <Form.Group className="mb-4" controlId="Adresse">
                        <Form.Label className="text-center">Adresse</Form.Label>
                        <Form.Control type="text" name="Adresse" placeholder="Adresse ?"
                          onChange={updateInput}
                        />
                      </Form.Group>

                      <Row>
                        <Form.Group as={Col} className="mb-3" controlId="Pays">
                          <Form.Label className="text-center">Pays</Form.Label>
                          <Form.Control type="text" name="Pays" placeholder="Pays ?"
                            onChange={updateInput}
                          />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-4" controlId="Ville">
                          <Form.Label className="text-center">Ville</Form.Label>
                          <Form.Control type="text" name="Ville" placeholder="Ville ?"
                            onChange={updateInput}
                          />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="Departement" >
                          <Form.Label className="text-center"> Département </Form.Label>
                          <Form.Control type="text" name="Département" placeholder="Département ?"
                            onChange={updateInput}
                          />
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group as={Col} className="mb-4" controlId="CODEPOSTAL">
                        <Form.Label className="text-center"> Code Postal </Form.Label>
                        <Form.Control type="number" name="CodePostal" placeholder="Code Postal?"
                          onChange={updateInput}
                        />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-4" controlId="NUMEROPHONE">
                          <Form.Label className="text-center"> Téléphone </Form.Label>
                          <Form.Control type="phone" name="Téléphone" placeholder="Numéro de Téléphone ?"
                            onChange={updateInput}
                          />
                        </Form.Group>
                      </Row>
            
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="text-center"> Email </Form.Label>
                        <Form.Control type="email" name="Email" placeholder="Adresse Email?"
                          onChange={updateInput}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="formBasicPassword" >
                        <Form.Label>Mot de Passe</Form.Label>
                        <Form.Control type="password" name="MotDePasse" placeholder="Password ?"
                          onChange={updateInput}
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="formBasicPassword1">
                        <Form.Label>Confirmer votre Mot de Passe</Form.Label>
                        <Form.Control type="password" placeholder="Confirmer Mot de Passe ?"
                          // onChange={updateInput}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                      <div className="d-grid">
                        <Button variant="warning" size="lg" type="submit" style ={{backgroundColor:'#d3b94f', border:'0'}}
                          onChange={handleSubmit}
                        >
                          INSCRIPTION
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0 text-center">
                        Avez-vous déja un compte??{" "}
                        <Link to="/Connexion" className="text-primary fw-bold">
                          Connectez-vous
                        </Link>
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
