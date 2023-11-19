import React, { Component } from "react";

const sections = ["Inicio", "Productos", "Materiales", "Acerca de Nosotros"];
const rs = ["img/facebook.jpg", "img/instagram.jpg", "img/twitter.png"];
const rschange = ["img/facebook1.jpg", "img/instagram1.jpg", "img/twitter1.png"];

class Footer extends Component {
    render() {
        let imagenes = rs.map((x, index) => (
            <img src={x} className="rsocial"
                onMouseOver={e => e.currentTarget.src = rschange[index]}
                onMouseOut={e => e.currentTarget.src = rs[index]}
                alt="Redes" />
        ));

        let links = sections.map((section) => (
            <li>{section}</li>
        ));

        return (
            <footer className="footer">
                <div className="footer-section">
                    <h3>Sección</h3>
                    <ul>
                        {links}
                    </ul>
                </div>
                <div className="emprendimiento">
                    <h3>Suscríbete a nuestro emprendimiento</h3>
                    <form>
                        <input type="email" placeholder="Tu correo electrónico" />
                        <button type="submit">Suscribirse</button>
                    </form>
                </div>
                <br/>
                <div className="divsocial">
                    <span>Síguenos en: </span>
                    {imagenes}
                </div>
                <br/>
                <div className="copyright">
                    © 2023 Compañía, Inc. Todos los derechos reservados.
                </div>
            </footer>
        );
    }
}

export default Footer;