import React, {useState} from "react";
import {Link} from 'react-router-dom'

import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function Inscription() {

  const [prenom, setPrenom] = useState("")
  const [nom, setNom] = useState("")
  const [dateDeNaissance, setDateNaissance] = useState("")
  const [adresse, setAdresse] = useState("")
  const [pays, setPays] = useState("")
  const [ville, setVille] = useState("")
  const [departement, setDepartement] = useState("")
  const [codePostal, setCodePostal] = useState("")
  const [telephone, setTelephone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [confirmPassword, setConfirmPassword] = useState("")

  const [redirect, setRedirect] = useState(false)

  let [state, setState] = useState([])

  let updateInput = (e) => {
      // setState({
      //     ...state, user: {
      //         ...state.user,
      //         [e.target.name]: e.target.value
      //     }
      // })
  }

  let handleSubmit = async(e) => {
      e.preventDefault()
      console.log(state.user);

      const Users = {
        Prenom: prenom,
        Nom: nom,
        Sexe: email,
        DateDeNaissance: dateDeNaissance,
        Adresse: adresse,
        Pays: pays,
        Ville: ville,
        Departement: departement,
        CodePostal: codePostal,
        Telephone: telephone,
        Email: email,
        MotDePasse: password
      }; //console.log(Users);

      // await axios.post("/users/add", Users)
      //   .then((réponse)=>{
      //       console.log(réponse)
      //       console.log(réponse.data)
      //       console.log(réponse.data)
      //       console.log("status", réponse.status);
      //       if(réponse.status === 200){
      //         setRedirect(true)
      //       }
      //   }).catch((erreur)=>{ console.log(erreur);})
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
                    <Form method="POST" action="/Inscription">
                      <Row>
                        <Form.Group as={Col} className="mb-4" controlId="Prenom" >
                          <Form.Label className="text-center"> Prénom </Form.Label>
                          <Form.Control type="text" name="Prenom" placeholder="Prénom ?"
                            onChange={(e) => setPrenom(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="Nom">
                          <Form.Label className="text-center"> Nom </Form.Label>
                          <Form.Control type="text" name="Nom" placeholder="Nom de Famille ?"
                            // onChange={updateInput}
                          />
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group as={Col}>
                          <Form.Label className="text-center">Sexe ?</Form.Label>
                          <Form.Select aria-label="Default select example" name="Sexe"
                            // onChange={updateInput}
                          >
                            <option value="Femme" defaultValue>Femme</option>
                            <option value="Homme">Homme</option>
                            <option value="Hermaphrodisme">Hermaphrodisme</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-4" controlId="DateNaissance">
                          <Form.Label className="text-center"> Date de Naissance </Form.Label>
                          <Form.Control type="Date" name="DateDeNaissance" placeholder="Date de Naissance ?"
                            // onChange={updateInput}
                          />
                        </Form.Group>
                      </Row>

                      <Form.Group className="mb-4" controlId="Adresse">
                        <Form.Label className="text-center">Adresse</Form.Label>
                        <Form.Control type="text" name="Adresse" placeholder="Adresse ?"
                          // onChange={updateInput}
                        />
                      </Form.Group>

                      <Row>
                        <Form.Group as={Col} className="mb-3" controlId="Pays">
                          <Form.Label className="text-center">Pays</Form.Label>
                          <Form.Control type="text" name="Pays" placeholder="Pays ?"
                            // onChange={updateInput}
                          />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-4" controlId="Ville">
                          <Form.Label className="text-center">Ville</Form.Label>
                          <Form.Control type="text" name="Ville" placeholder="Ville ?"
                            // onChange={updateInput}
                          />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="Departement" >
                          <Form.Label className="text-center"> Département </Form.Label>
                          <Form.Control type="text" name="Departement" placeholder="Département ?"
                            // onChange={updateInput}
                          />
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group as={Col} className="mb-4" controlId="CODEPOSTAL">
                        <Form.Label className="text-center"> Code Postal </Form.Label>
                        <Form.Control type="number" name="CodePostal" placeholder="Code Postal?"
                          // onChange={updateInput}
                        />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-4" controlId="NUMEROPHONE">
                          <Form.Label className="text-center"> Téléphone </Form.Label>
                          <Form.Control type="phone" name="Telephone" placeholder="Numéro de Téléphone ?"
                            // onChange={updateInput}
                          />
                        </Form.Group>
                      </Row>
            
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="text-center"> Email </Form.Label>
                        <Form.Control type="email" name="Email" placeholder="Adresse Email?"
                          // onChange={updateInput}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="formBasicPassword" >
                        <Form.Label>Mot de Passe</Form.Label>
                        <Form.Control type="password" name="MotDePasse" placeholder="Password ?"
                          // onChange={updateInput}
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
