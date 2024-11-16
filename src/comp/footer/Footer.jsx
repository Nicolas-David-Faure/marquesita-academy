import React from "react";
import './scss/footer.scss';

export const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__content">
        <div className="footer__social">
          <h4>Síguenos en redes sociales</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/marquesita.20/" target="_blank" rel="noopener noreferrer">
                Instagram Personal
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/marquesita.academy/" target="_blank" rel="noopener noreferrer">
                Instagram Academia
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@marquesita.20" target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <h4>Contacto</h4>
          <p>Teléfono: +34 123 456 789</p>
          <p>Email: info@marquesitaacademy.com</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} Marquesita Academy. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
