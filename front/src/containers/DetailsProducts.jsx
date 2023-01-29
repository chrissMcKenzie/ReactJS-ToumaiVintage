import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from "react";


const DetailsProducts = ({products, onAdd}) => {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id}= useParams()
    // console.log(products)
    useEffect(() => {
      const results = products.find(element => element.id === parseInt(id))
      setDetails(results)
      setLoading(false) 
    }, []);
    return (
      <>
      { loading ? <p>Chargement...</p> :
      (<div className="col col-md-8 mt-5 container-sm">
        <div className="card h-100" style={{maxWidth: "472px", margin:"auto"}}>
          <img src={details.imgSrc} className="card-img-top" style={{}} alt={details.title}></img>
          <div className="card-body">
            <h5 className="card-title">{details.title}</h5>
            <p className='fs-4'>Prix: <span className='fw-bold'>{details.price}&nbsp;&#8364;</span></p>
            <p className="card-text">{details.description}</p>
            <div className='d-flex justify-content-between'>
              <button type='button' className='btn  px-5 py-2 shadow-lg' style={{background: "#f6dbbc", color:"black"}} onClick={() => onAdd(details)} >Ajouter</button>
            </div>
          </div>
        </div>
      </div>) 
      }
      </>
    );
}

export default DetailsProducts;
