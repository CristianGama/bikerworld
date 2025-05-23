import { CarritoProvider } from "./carrito/CarritoContext.jsx"
import { useState } from "react";
import { Outlet, Link} from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <CarritoProvider>
        <header>
          <Link to="/" className="biker-logo">Biker World</Link>
          <div className="navegacion">
            <Link to="nosotros" className="boton-nav">Sobre Nosotros</Link>
            <Link to="bicicletas" className="boton-nav">Bicicletas</Link>
          </div>
          <div className="carrito">
            <Link to="/carrito" className="carrito-link">
              <img
                src="https://thumbs.dreamstime.com/b/carro-de-la-compra-blanco-sobre-fondo-negro-agregar-ilustraci%C3%B3n-compras-en-l%C3%ADnea-cart-231716158.jpg"
                alt=""
                className="carrito-logo"
              />
            </Link>
          </div>
        </header>
        <main>
          <Outlet/>
        </main>
        <footer>
          <section className="footer-main">
            <article className="footer-logo">
              <div className="footer-logo-title">Biker World</div>
              <div className="footer-logo-subtitle">
                Tu próxima aventura sobre dos ruedas.
              </div>
            </article>
            <article className="footer-socials">
              <div className="footer-copyright">
                © 2025 Biker World. Todos los derechos reservados.
              </div>
            </article>
            <article className="footer-terms">
              <div className="footer-terms-title">Información Legal</div>
              <div className="footer-terms-options">
                <Link to="/terminos" className="footer-terms-text">Términos y Condiciones</Link>
                <Link to="/politicas" className="footer-terms-text">Política de Privacidad</Link>
              </div>
            </article>
          </section>
        </footer>
      </CarritoProvider>
    </>
  );
}

export default App;
