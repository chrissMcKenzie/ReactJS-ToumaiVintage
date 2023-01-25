import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import products from '../../data';


import JeuVideo from "../media/images/jeu-vidéo.jpg"
export default function Categorie() {
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
              <img src={productCat.imgSrc} className="card-img-top" alt={productCat.title}></img>
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