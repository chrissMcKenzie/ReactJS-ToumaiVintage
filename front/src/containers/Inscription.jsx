import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import Axios from "axios";

import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function Inscription() {

  // const [confirmPassword, setConfirmPassword] = useState("")

  // const [redirect, setRedirect] = useState(false)

  const [state, setState] = useState({
    user: {
      Prenom: "",
      Nom: "",
      Sexe: "",
      Date_de_naissance: "",
      Adresse: "",
      Pays: "",
      Ville: "",
      Departement: "",
      Code_postal: "",
      Telephone: "",
      Email: "",
      Mot_de_passe: ""
    }
  })

  const [matcher, setMatcher] = useState({
    mdp: {
      MotDePasseConfirme: ""
    }
  })

  const updateInput = (e) => {
    // const value = e.target.value
      setState(prev => {
        // ...state.user,
          return { ...prev, user:  {
            ...state.user, [e.target.name]: e.target.value.toString()
            // ...state.user, [e.target.name]: e.target.value.toString()
            }
          }
      })
  }
  const updateMatcher = (e) => {
    setMatcher(prev =>{
      return { ...prev, mdp: {
          ...matcher.mdp,
          [e.target.name]: e.target.value
        }
      }
    })
  }

  // const convert

  const handleSubmit = async(e) => {
      e.preventDefault()
      console.log("user", state.user);
      console.log("date", state.user.Date_de_naissance);
      // console.log("dateString1", toString(state.user.Date_de_naissance));
      console.log("dateString2", JSON.stringify(state.user.Date_de_naissance));

      JSON.stringify(state.user.Date_de_naissance)

      // useEffect( async()=>{
        await Axios.post("/users/add", state.user)
          .then((réponse)=>{
              console.log(réponse)
              console.log(réponse.data)
              console.log("status", réponse.status);
              console.log("data.status", réponse.data.status);
              if(réponse.status === 200){
                setRedirect(true)
              }
          }).catch((erreur)=>{ console.log(erreur)})
      // }, [])
      
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

                    <Form method="POST" action="#"
                      onSubmit={handleSubmit}>
                      <Row>
                        <Form.Group as={Col} className="mb-4" controlId="Prenom" >
                          <Form.Label className="text-center"> Prénom </Form.Label>
                          <Form.Control type="text" name="Prenom" placeholder="Prénom ?" required
                            className={`${state.user.Prenom === "" ? "is-invalid" : "is-valid"}`}
                            onChange={updateInput}
                          />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="Nom">
                          <Form.Label className="text-center"> Nom </Form.Label>
                          <Form.Control type="text" name="Nom" placeholder="Nom de Famille ?" required
                            className={`${state.user.Nom === "" ? "is-invalid" : "is-valid"}`}
                            onChange={updateInput}
                          />
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group as={Col}>
                          <Form.Label className="text-center">Sexe ?</Form.Label>
                          <Form.Select aria-label="Default select example" name="Sexe" required
                            className={`${state.user.Sexe === "" ? "is-invalid" : "is-valid"}`}
                            onChange={updateInput}
                          >
                            <option value="Femme" defaultValue>Femme</option>
                            <option value="Homme">Homme</option>
                            <option value="Hermaphrodisme">Hermaphrodisme</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-4" controlId="DateNaissance">
                          <Form.Label className="text-center"> Date de Naissance </Form.Label>
                          <Form.Control type="text" name="Date_de_naissance" placeholder="ex: yyyy-mm-dd ?" required
                            className={`${state.user.Date_de_naissance === "" ? "is-invalid" : "is-valid"}`}
                            onChange={updateInput}
                          />
                        </Form.Group>
                      </Row>

                      <Form.Group className="mb-4" controlId="Adresse">
                        <Form.Label className="text-center">Adresse</Form.Label>
                        <Form.Control type="text" name="Adresse" placeholder="Adresse ?" required
                          className={`${state.user.Adresse === "" ? "is-invalid" : "is-valid"}`}
                          onChange={updateInput}
                        />
                      </Form.Group>

                      <Row>
                        <Form.Group as={Col} className="mb-3" controlId="Pays">
                          <Form.Label className="text-center">Pays</Form.Label>
                          <Form.Control type="text" name="Pays" placeholder="Pays ?" required
                            className={`${state.user.Pays === "" ? "is-invalid" : "is-valid"}`}
                            onChange={updateInput}
                          />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-4" controlId="Ville">
                          <Form.Label className="text-center">Ville</Form.Label>
                          <Form.Control type="text" name="Ville" placeholder="Ville ?" required
                            className={`${state.user.Ville === "" ? "is-invalid" : "is-valid"}`}
                            onChange={updateInput}
                          />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="Departement" >
                          <Form.Label className="text-center"> Département </Form.Label>
                          <Form.Control type="text" name="Departement" placeholder="Département ?" required
                            className={`${state.user.Departement === "" ? "is-invalid" : "is-valid"}`}
                            onChange={updateInput}
                          />
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group as={Col} className="mb-4" controlId="CODEPOSTAL">
                        <Form.Label className="text-center"> Code Postal </Form.Label>
                        <Form.Control type="number" name="Code_postal" placeholder="Code Postal ex: 75000 ?" required
                          className={`${state.user.Code_postal === "" ? "is-invalid" : "is-valid"}`}
                          onChange={updateInput}
                        />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-4" controlId="NUMEROPHONE">
                          <Form.Label className="text-center"> Téléphone </Form.Label>
                          <Form.Control type="phone" name="Telephone" placeholder="Numéro de Téléphone ?" required
                            className={`${state.user.Telephone === "" ? "is-invalid" : "is-valid"}`}
                            onChange={updateInput}
                          />
                        </Form.Group>
                      </Row>
            
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="text-center"> Email </Form.Label>
                        <Form.Control type="email" name="Email" placeholder="Adresse Email ?" required
                          className={`${state.user.Email === "" ? "is-invalid" : state.user.Email.includes("@") && state.user.Email.includes(".") ? "is-valid" : "is-invalid"}`}
                          onChange={updateInput}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="formBasicPassword" >
                        <Form.Label>Mot de Passe</Form.Label>
                        <Form.Control type="password" name="Mot_de_passe" placeholder="Password ?" required
                          className={`${state.user.Mot_de_passe === "" ? "is-invalid" : "is-valid"}`}
                          onChange={updateInput}
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="formBasicPassword1">
                        <Form.Label>Confirmer votre Mot de Passe</Form.Label>
                        <Form.Control type="password" name="MotDePasseConfirme" placeholder="Confirmer Mot de Passe ?" required
                          className={`${matcher.mdp.MotDePasseConfirme === "" ? "is-invalid" : matcher.mdp.MotDePasseConfirme === state.user.Mot_de_passe ? "is-valid" : "is-invalid"}`}
                          onChange={updateMatcher}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                      <div className="d-grid">
                        <Button variant="warning" size="lg" type="submit" style ={{backgroundColor:'#d3b94f', border:'0'}}>
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
