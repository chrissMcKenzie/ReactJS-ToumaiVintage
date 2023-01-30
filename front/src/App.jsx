import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"

//* Bibliothèque Externe
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';


//* Components
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Basket from './containers/Basket';

//* Pages
import './App.css'
import Accueil from "./containers/Accueil"
import Inscription from "./containers/Inscription"
import Connexion from "./containers/Connexion"
import Profil from "./containers/Profil"
import Categorie from "./containers/Categorie"
import Details from "./containers/Details"
import Payement from "./containers/Payement"
import NotFound404 from "./containers/NotFound404"
import DetailsProducts from './containers/DetailsProducts';





const App = () => {
  const [countProduct, setCountProduct] = useState("");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([])
  const [countCartItems, setCountCartItems] = useState("");


  const onAdd = (product) => {
    const exist = cartItems.find((element) => element.id === product.id )
    
    // Si on a le meme produit on incrémente la quantité
    if(exist) {
      setCartItems(cartItems.map((item) => item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item))
    }
    // Si non la quantité reste à 1
    else{
      setCartItems([ ... cartItems, { ...product, quantity: 1}])
    }
    setCountCartItems(Number(countCartItems) + 1)
  }

  const onRemove = (product) => {
    const exist = cartItems.find((element) => element.id === product.id )
    // Si la quantité du produit dans le panier est de 1, au prochain décrémention le produit sera supprimé du panier( la condition de onAdd sera fausse)
    if(exist.quantity === 1) {    
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    }
   // Si non on décrémente la quantité
    else{
      setCartItems(cartItems.map((item) => item.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : item))
    }
    setCountCartItems(Number(countCartItems) - 1)
  }

  useEffect(() => {
    axios.get('http://localhost:3000/products')
    .then(function (response) {
      // en cas de réussite de la requête
      const datas = response.data  
      setProducts(datas) 
      // console.log(products)
    setLoading(false)     

    })
    .catch(function (error) {
      // en cas d’échec de la requête
      console.log(error);
    })
  }, []);

  return (
    <>
    {
      loading ? (<p>Chargement ....</p>) :
      (
        <>   
      (<AppHeader countCartItems={countCartItems} />
      <main>
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Accueil" element={<Accueil />} />
            <Route path="/Inscription" element={<Inscription />} />
            <Route path="/Connexion" element={<Connexion />} />
            <Route path="/Profil" element={<Profil />} />
            {/* <Route path="/:NomCategories/ListeProduits" element={<Categorie />} /> */}
            {/* <Route path="/:NomCategorie/ListeProduits" element={<Produits />} /> */}
            <Route path="/Categorie/:id" element={<Categorie />} />
            {/* <Route path="/Categorie/Produits" element={<Produits />} /> */}
            {/* <Route path="/Categorie/:id/Produits" element={<Produits />} /> */}
            {/* <Route path="/Produit" element={<Produit />} /> */}
            <Route path="/Details" element={<Details />} />
            <Route path="/DetailsProducts/:id" element={<DetailsProducts products={products} onAdd={onAdd} />} />
            <Route path="/Basket" element={<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} countCartItems={countCartItems} />} />
            <Route path="/Payement" element={<Payement />} />
            
            <Route path="*" element={<NotFound404 />} />
        </Routes>
      </main>
      <AppFooter/>)
    </>
      )
    }
    </>
    );
}

export default App;
