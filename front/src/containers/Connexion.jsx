import React, {useState} from 'react'
import Axios from 'axios';

import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";


//* Pages

function Connexion() {

  // const [telephone, setTelephone] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // const [confirmPassword, setConfirmPassword] = useState("")

  // const [redirect, setRedirect] = useState(false)

  const [state, setState] = useState({
    user: {
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
    // const value = e.target.value
      setState(prev => {
        // ...state.user,
          return { ...prev, user:  {
            ...state.user, [e.target.name]: JSON.stringify(e.target.value)
            // ...state.user, [e.target.name]: e.target.value.toString()
            }
          }
      })
  }
  // const updateMatcher = (e) => {
  //   setMatcher({
  //     mdp: {
  //       ...matcher.mdp,
  //       [e.target.name]: e.target.value
  //     }
  //   })
  // }

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
          <Col col-lg-8 col-md-8 col-12 >
            <Card className="px-4" style={{ backgroundColor: "#eacc81", height:'auto'}}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase "> Connexion </h2>
                  <div className="mb-3">
                    <Form method="POST" action="#"
                      onSubmit={handleSubmit}>
                     <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="text-center"> Email address </Form.Label>
                        <Form.Control type="email" name="Email" placeholder="Adresse email?" required
                        className={`${state.user.Email === "" ? "is-invalid" : state.user.Email.includes("@") && state.user.Email.includes(".") ? "is-valid" : "is-invalid"}`}
                        onChange={updateInput}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Mot de Passe</Form.Label>
                        <Form.Control type="password" name="MotDePasse" placeholder="Password" required
                          className={`${state.user.MotDePasse === "" ? "is-invalid" : "is-valid"}`}
                          onChange={updateInput}
                        />
                      </Form.Group>

                      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox" ></Form.Group> */}

                      <div className="d-grid">
                        <Button variant="warning" size="lg" type="submit" style ={{backgroundColor:'#d3b94f',border:'0'}}> Connexion </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-2 text-center">
                        Mot de Passe Oublier ? {"  "}
                        <a href="/Inscription" className="text-primary fw-bold"> Réinitialiser votre Mot de Passe </a>

                        {" "} Pas de compte ? {" "}
                        <a href="/Inscription" className="text-primary fw-bold"> Inscrivez-vous </a>
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