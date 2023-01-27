import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios"

const DetailsProducts = ({setCountProduct}) => {
    const [details, setDetails] = useState([]);
    const {id}= useParams()

    useEffect(() => {

        axios.get('http://localhost:3000/products')
        .then(function (response) {
          // en cas de réussite de la requête
          const datas = response.data 
        const details = datas.find(element => element.id === parseInt(id))
         console.log(details)
          setDetails(details)
        })
        .catch(function (error) {
          // en cas d’échec de la requête
          console.log(error);
        })     
      }, []);
    return (
      <div className="col col-md-8 mt-5 container">
        <div className="card h-100" >
          <img src={details.imgSrc} className="card-img-top" style={{}} alt={details.title}></img>
          <div className="card-body">
            <h5 className="card-title">{details.title}</h5>
            <p className='fs-4'>Prix: <span className='fw-bold'>{details.price}&nbsp;&#8364;</span></p>
            <p className="card-text">{details.description}</p>
            <div className='d-flex justify-content-between'>
              <button type='button' className='btn  px-5 py-2 shadow-lg' style={{background: "#f6dbbc", color:"black"}} onClick={()=> setCountProduct} >Ajouter</button>
            </div>
          </div>
        </div>
      </div> 
    );
}

export default DetailsProducts;
