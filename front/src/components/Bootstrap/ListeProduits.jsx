import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import products from '../../../data';


import JeuVideo from "../../media/images/jeu-vidéo.jpg"

import a from "../../media/images/appareil-photo.jpg";
import b from "../../media/images/jeu-vidéo.jpg";
import c from "../../media/images/appareil-photo.jpg";
import d from "../../media/images/ordinateur.jpg";
import e from "../../media/images/telephone.jpg";

const images = {
    a,
    b,
    c,
    d,
    e
}
// export default images;


const ListeProduits =()=> {
  const [productsCategory, setProductsCategory] = useState([]);
  const {id} = useParams()
  // console.log(id)
  useEffect(() => {
    return () => {
      const result = products.filter((curdata) =>{
        return curdata.category === id
      })
      console.log(result)
      setProductsCategory(result)
    };
  }, []);
  return (
    
    <>
    {productsCategory?.map((productCat) => {
      return(
        <div key={productCat.id} className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={JeuVideo} className="card-img-top" alt={productCat.title}></img>
              <div className="card-body">
                <h5 className="card-title">{productCat.title}</h5>
                <p>Prix: {productCat.price}</p>
                <p className="card-text">{productCat.description}</p>
              </div>
            </div>
          </div> 
        </div>
      )
    })}
  </>
  )
}

export default ListeProduits