import React from 'react'
import {Link, NavLink} from 'react-router-dom'


//* Images
import logoToumaï from "./../media/images/Logo_Toumai0.png"

//* pages
import "./AppHeader.css"

const AppHeader = ({countCartItems}) => {
  return (
    <header>
        <section>
            <div className="AppLogo">
                <Link to="/">
                    <img src={logoToumaï} style={{width:"100%", borderRadius: 45}} alt="logo Toumai"/>
                </Link> 
            </div>
            
        </section>
        <section>
            <div>
                <Link to="/"><h2 id="titre">Toumaï.com</h2></Link>
                <p className="text-light">Produits Électronique Vintage</p>
                {/* { user && <h2>Bonjour {user.nom}</h2>} */}
            </div>
        </section>
        <section>
            <div className="ButtonConnexion">
                <Link to="/Connexion"><b>Connexion</b></Link>
                {/* {user && <a href='/Historique' style={{marginRight: '10px', color: 'red'}}>Historique</a>}
                {user === true || user !== null ? <a href='/Connexion' style={{color:'white'}} onClick={Logout}>Deconnexion</a> : <a href='/Connexion' style={{color:'white'}}>Connexion</a>} */}
            </div>
        </section> 
        <div className='position-relative'>
            <Link to="/Basket"><img style={{ width:"50px", height:"50px" }} src="../src/media/images/basket.svg" alt="panier d'achat" />{countCartItems ? (<button className="badge position-absolute btn btn-danger border-0" style={{top: "-1px", left:"37px"}}>{countCartItems}</button>) : " " }</Link>   
        </div>
    </header>
  )
}

export default AppHeader;


 
  