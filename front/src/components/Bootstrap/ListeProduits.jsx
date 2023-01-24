import React from 'react'

// import JeuVideo from "../../media"
import JeuVideo from "../../media/images/jeu-vidéo.jpg"

export default function ListeProduits() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={JeuVideo} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p>Prix:15$</p>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div> 
      </div>
  )
}
