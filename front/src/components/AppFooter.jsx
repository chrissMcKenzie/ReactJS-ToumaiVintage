import React from 'react'

//* pages
import "./AppFooter.css"

const AppFooter = () => {
  return (
    <footer>
        AppFooter
        <section>
            <div className='AppLogo'>
                {/* <a href="/"><img src={logoEscapeGame} style={{width:"100px"}} alt="logo EscapeGame"/></a> */}
            </div>
            <div>
                {/* <a href="">Home</a>|
                <a href="">Blog</a>|
                <a href="">Pricing</a>|
                <a href="">About</a>|
                <a href="">Faq</a>|
                <a href="">Contact</a> */}
            </div>
        </section>

        <section>
            <div>
                {/* <p>
                    <small style={{color: "blue"}}><i>55, rue du Faubourg Saint-Honoré</i></small>
                </p>
                <p>75008, Paris</p>
                <small>+33 1 42 92 81 00</small>
                <p style={{color: "blue"}}>contact@escape-game.com</p> */}
            </div>
            <div style={{marginTop: "block"}}>
                {/* <p>Copyright ® SYL & SYL 2022. </p> */}
            </div>
        </section>

        <section>
            <div>
                {/* <a>A propos</a>
                <p>
                    <small style={{color: "gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro incidunt maiores molestiae tenetur distinctio voluptatem, optio vero.</small>
                </p>
                <ul>
                    <a href="http://www.facebook.com"><img src={logoFacebook} width={25} alt="Logo Facebook" /></a>
                    <a href="https://twitter.com/chrissMcKenzie"><img src={logoTwitter} width={25} alt="Logo Twitter" /></a>
                    <a href="http://www.linkedin.com"><img src={logoLinkedin} width={25} alt="Logo Linkedin" /></a>
                    <a href="https://github.com/SidiML/MERN-Escape-Game"><img src={logoGithub} width={25} alt="Logo Github" /></a>
                </ul> */}
            </div>
        </section>
    </footer>
  )
}

export default AppFooter