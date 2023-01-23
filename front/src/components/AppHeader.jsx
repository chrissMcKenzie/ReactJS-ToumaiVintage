import React from 'react'

//* pages
import "./AppHeader.css"

const AppHeader = () => {
  return (
    <header>
        AppHeader
        <section>
                <div className='AppLogo'>
                   <a href='/'>
                    {/* <img src={logoEscapeGame} style={{width:"100px"}} alt="logo EscapeGame"/> */}
                    </a> 
                </div>
                
            </section>
            <section>
                <div>
                    <a href='/'><b>Toumaï.com</b></a> 
                    {/* { user && <h2>Bonjour {user.nom}</h2>} */}
                </div>
            </section>
            <section>
                <div>
                    {/* {user && <a href='/Historique' style={{marginRight: '10px', color: 'red'}}>Historique</a>}
                    {user === true || user !== null ? <a href='/Connexion' style={{color:'white'}} onClick={Logout}>Deconnexion</a> : <a href='/Connexion' style={{color:'white'}}>Connexion</a>} */}
                </div>
            </section>
    </header>
  )
}

export default AppHeader;