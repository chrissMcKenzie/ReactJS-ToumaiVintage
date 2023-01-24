import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {Container, Row, Card, Col} from 'react-bootstrap';

//* Pages
import "./Accueil.css"
import products from '../../data';
import Categorie from './Categorie';

const categoryList = products.reduce(function (values, item) {
  if (!values.includes(item.category)) {
      values.push(item.category);
  }
  return values;
},[]);
// console.log(categoryList)
 

function Accueil() {
  const [categories, setCategories] = useState([]);

  const [productCategories, setProductCategories] = useState([products]);

useEffect(() => {

  return () => {
    setCategories(categoryList)
  };
}, []);

  

const filterCat = (categoryItem) =>{
  // console.log(products)
  const result = products.filter((curdata) =>{
      return curdata.category === categoryItem
    })
    console.log(result)
    setProductCategories(result)
    return result   
}

  return (
    <>

    <Container className='mt-5 text-center'>
  
      <Row className='row-card'>

        <Col md={6} lg={4} className='mb-4 mb-lg-5'>
          <Link  style={{ textDecoration: 'none' }} onClick={() => filterCat(categories[0])} >
            <Card className="card-1" style={{ height: '13rem'}}>
              <Card.Body className='card-body-overlay d-flex flex-column justify-content-center'>
                <Card.Title className='text-light fw-bold' style={{fontSize: 45}}>{categories[0]}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
    
        <Col md={6} lg={4} className='mb-4 mb-lg-5 offset-lg-4'>
        <Link to={`/categorie/${categories[1]}`} style={{ textDecoration: 'none' }} onClick={() => filterCat(categories[1])} >

          <Card className="card-2" style={{ height: '13rem'}}>
            <Card.Body className='card-body-overlay d-flex flex-column justify-content-center'>
              <Card.Title className='text-light  fw-bold' style={{fontSize: 45}}>{categories[1]}</Card.Title>
            </Card.Body>
          </Card>
          </Link>

        </Col>
        
        <Col md={6} lg={4} className='mb-4'>
        <Link to={`/categorie/${categories[2]}`} style={{ textDecoration: 'none' }} onClick={() => filterCat(categories[2])} >

          <Card className="card-3" style={{ height: '13rem'}}>
              <Card.Body className='card-body-overlay d-flex flex-column justify-content-center'>
                <Card.Title className='text-light fw-bold' style={{fontSize: 45}}>{categories[2]}</Card.Title>
              </Card.Body>
          </Card>
          </Link>

        </Col>

        <Col md={6} lg={4} className='mb-4 offset-lg-4'>
        <Link to={`/categorie/${categories[3]}`} style={{ textDecoration: 'none' }} onClick={() => filterCat(categories[3])} >

          <Card className="card-4" style={{ height: '13rem'}}>
            <Card.Body className='card-body-overlay d-flex flex-column justify-content-center'>
              <Card.Title className='text-light fw-bold' style={{fontSize: 45}}>{categories[3]}</Card.Title>
            </Card.Body>
          </Card>
          </Link>

        </Col>

        <Col lg={4} className='mb-4 last-card'>
        <Link to={`/categorie/${categories[4]}`} style={{ textDecoration: 'none' }} onClick={() => filterCat(categories[4])} >

          <Card className="card-5" style={{ height: '13rem'}}>
            <Card.Body className='card-body-overlay d-flex flex-column justify-content-center'>
              <Card.Title className='text-light fw-bold' style={{fontSize: 45}}>{categories[4]}</Card.Title>
            </Card.Body>
          </Card>
          </Link>

        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Accueil