import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {Container, Row, Card, Col} from 'react-bootstrap';

//* Pages
import "./Accueil.css"
import products from '../../data';
import ListeCategories from '../components/React-Bootstrap/ListeCategories';

 

function Accueil() {
  return (
    <>
    <ListeCategories />
    </>
  );
}

export default Accueil