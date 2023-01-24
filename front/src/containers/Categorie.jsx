import React from 'react'

import ListeProduits from '../components/Bootstrap/ListeProduits'
// import JeuVideo from "../media/images/jeu-vidéo.jpg"
export default function Categorie({data}) {
  console.log(data)
 
  return (
      <div>
        <ListeProduits />
      </div>
  )
}