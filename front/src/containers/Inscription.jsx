import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import Axios from "axios";

import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function Inscription() {

  // const [prenom, setPrenom] = useState("")
  // const [nom, setNom] = useState("")
  // const [dateDeNaissance, setDateNaissance] = useState("")
  // const [adresse, setAdresse] = useState("")
  // const [pays, setPays] = useState("")
  // const [ville, setVille] = useState("")
  // const [departement, setDepartement] = useState("")
  // const [codePostal, setCodePostal] = useState("")
  // const [telephone, setTelephone] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  const [confirmPassword, setConfirmPassword] = useState("")

  const [redirect, setRedirect] = useState(false)

  const [state, setState] = useState({
    user: {
      Prenom: "",
      Nom: "",
      Sexe: "",
      DateDeNaissance: "",
      Adresse: "",
      Pays: "",
      Ville: "",
      Departement: "",
      CodePostal: "",
      Telephone: "",
      Email: "",
      MotDePasse: ""
    }
  })

  const [matcher, setMatcher] = useState({
    mdp: {
      MotDePasseConfirme: ""
    }
  })

  const updateInput = (e) => {
      setState({
        // ...state.user,
           user: 
              e.target.name !== "DateDeNaissance" ? (
                {
                  ...state.user, [e.target.name]: e.target.value
                }
              ) : (
                {
                  ...state.user, [e.target.name]: JSON.stringify(e.target.value)
                }
              )
          
      })
  }
  const updateMatcher = (e) => {
    setMatcher({
      mdp: {
        ...matcher.mdp,
        [e.target.name]: e.target.value
      }
    })
  }

  // const convert

  const handleSubmit = async(e) => {
      e.preventDefault()
      // console.log("state",state);
      console.log("user", state.user);
      console.log("date", state.user.DateDeNaissance);
      // console.log("dateString1", toString(state.user.DateDeNaissance));
      console.log("dateString2", JSON.stringify(state.user.DateDeNaissance));

      // const Users = {
      //   Prenom: prenom,
      //   Nom: nom,
      //   Sexe: email,
      //   DateDeNaissance: dateDeNaissance,
      //   Adresse: adresse,
      //   Pays: pays,
      //   Ville: ville,
      //   Departement: departement,
      //   CodePostal: codePostal,
      //   Telephone: telephone,
      //   Email: email,
      //   MotDePasse: password
      // }; //console.log(Users);
      JSON.stringify(state.user.DateDeNaissance)

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
                          <Form.Control type="Date" name="DateDeNaissance" placeholder="Date de Naissance ?" required
                            className={`${state.user.DateDeNaissance === "" ? "is-invalid" : "is-valid"}`}
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
                        <Form.Control type="number" name="CodePostal" placeholder="Code Postal ?" required
                          className={`${state.user.CodePostal === "" ? "is-invalid" : "is-valid"}`}
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
                        <Form.Control type="password" name="MotDePasse" placeholder="Password ?" required
                          className={`${state.user.MotDePasse === "" ? "is-invalid" : "is-valid"}`}
                          onChange={updateInput}
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="formBasicPassword1">
                        <Form.Label>Confirmer votre Mot de Passe</Form.Label>
                        <Form.Control type="password" name="MotDePasseConfirme" placeholder="Confirmer Mot de Passe ?" required
                          className={`${matcher.mdp.MotDePasseConfirme === "" ? "is-invalid" : matcher.mdp.MotDePasseConfirme === state.user.MotDePasse ? "is-valid" : "is-invalid"}`}
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
