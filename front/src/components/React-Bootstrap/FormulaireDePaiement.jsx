import React from 'react'

import {Link} from 'react-router-dom'
import { Container, Row, Col, Form, Card, Button} from 'react-bootstrap'

function FormulaireDePaiement() {
  return (
    <>
        <Container>
            <Row className="vh-100 d-flex justify-content-center">
                <Col md={9} lg={10}>
                    <Card className="px-4" style={{ backgroundColor: "#eacc81" ,height:'auto'}}>
                    <Card.Body>
                        <div className="mb-3 mt-md-4">
                            <h2 className="fw-bold mb-2 text-center text-uppercase ">
                                Formulaire De Paiement
                            </h2>
                            <div className="mb-3">
                                <Form method="POST" action="/Inscription">
                                    <Row>
                                        <Form.Group as={Col} className="mb-4" controlId="Username" >
                                            <Form.Label className="text-center"> Nom du Titulaire </Form.Label>
                                            <Form.Control type="text" name="Username" placeholder="Nom du Titulaire ?"
                                                // onChange={(e) => setPrenom(e.target.value)}
                                            />
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group className="mb-4" controlId="Adresse">
                                            <Form.Label className="text-center">Numéro de carte</Form.Label>
                                            <Form.Control type="number" name="Adresse" placeholder="Numéro de carte ?"
                                            // onChange={updateInput}
                                            />
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group as={Col} className="mb-4" controlId="DateNaissance">
                                            <Form.Label className="text-center"> Expiry date </Form.Label>
                                            <Form.Control type="Date" name="DateDeNaissance" placeholder="Date de Naissance ?"
                                                // onChange={updateInput}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-4" controlId="DateNaissance">
                                            <Form.Label className="text-center"> Security Code </Form.Label>
                                            <Form.Control type="number" name="DateDeNaissance" placeholder="Security Code ?" className="is-validate"
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
                                    </Row>
                            
                                    <div className="d-grid">
                                        <Button variant="warning" size="lg" type="submit" style ={{backgroundColor:'#d3b94f', border:'0'}}
                                        // onChange={handleSubmit}
                                        >
                                        PAIEMENT 100€
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default FormulaireDePaiement