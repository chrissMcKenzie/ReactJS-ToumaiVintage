import React from 'react'
import {Link} from 'react-router-dom'

//* Images
import logoToumaï from "./../media/images/Logo_Toumai0.png"

//* pages
import "./AppHeader.css"

const AppHeader = () => {
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
                {/* { user && <h2>Bonjour {user.nom}</h2>} */}
            </div>
        </section>
        <section>
            <div>
                <Link to="/Connexion"><b>Connexion</b></Link>
                {/* {user && <a href='/Historique' style={{marginRight: '10px', color: 'red'}}>Historique</a>}
                {user === true || user !== null ? <a href='/Connexion' style={{color:'white'}} onClick={Logout}>Deconnexion</a> : <a href='/Connexion' style={{color:'white'}}>Connexion</a>} */}
            </div>
        </section>
    </header>
  )
}

export default AppHeader;