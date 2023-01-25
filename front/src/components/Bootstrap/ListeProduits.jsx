import React from 'react'

import JeuVideo from "../../media/images/jeu-vidéo.jpg"

const ListeProduits = ()=>{
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

export default ListeProduits