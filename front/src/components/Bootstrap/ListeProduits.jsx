import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

// import products from '../../../data';
// import products2 from '../../../data2';

const ListeProduits =()=> {
  const [productsCategory, setProductsCategory] = useState([]);
  const {id} = useParams()
  // console.log(id)
  useEffect(() => {
    axios.get('http://localhost:3000/products')
    .then(function (response) {
      // en cas de réussite de la requête
      const datas = response.data
      // console.log(datas);

      const result = datas.filter((curdata) =>{
        return curdata.category === id
      })
      console.log(result)
      setProductsCategory(result)
    })
    .catch(function (error) {
      // en cas d’échec de la requête
      console.log(error);
    })
    .then(function () {
      // dans tous les cas
    });

    // return () => {
    //   const result = datas.filter((curdata) =>{
    //     return curdata.category === id
    //   })
    //   console.log(result)
    //   setProductsCategory(result)
    // };
  }, []);
  return (   
    <div className="row row-cols-1 row-cols-sm-2  row-cols-md-3 g-4">
    {productsCategory?.map((productCat) => {
      return(
        <div key={productCat.id} >
          <div className="col">
            <div className="card h-100">
              <img src={productCat.imgSrc} className="card-img-top" style={{}} alt={productCat.title}></img>
              <div className="card-body">
                <h5 className="card-title">{productCat.title}</h5>
                <p>Prix: {productCat.price}</p>
                <p className="card-text">{productCat.description}</p>
                <div className='d-flex justify-content-between'>
                  <button type='button' className='btn btn-success border-0' style={{background: "#f6dbbc", color:"black"}}>Détails</button>
                  <button type='button' className='btn btn-success border-0' style={{background: "#f6dbbc", color:"black"}}>Ajouter</button>
                </div>
              </div>
            </div>
          </div> 
        </div>
      )
    })}
  </div>
  )
}

export default ListeProduits