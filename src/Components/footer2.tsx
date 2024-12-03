import React from 'react';
import './footer2.css';
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section social-media">
                <div className="social-icon">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                </div>
            </div>

            <div className="footer-section about">
                <h4>Ostatní</h4>
                <p><a href="/help">Nápověda</a></p>
                <p><a href="/terms">Podmínky užití aplikace</a></p>
                <p><a href="/marketing">Zasílání obchodních sdělení</a></p>
                <p><a href="/terms-of-use">Obchodní podmínky</a></p>
                <p><a href="/privacy-policy">Zásady ochrany osobních údajů</a></p>
            </div>

            <div className="footer-section about">
                <h4>Partneři</h4>
                <p><a href="https://www.zakazkovy-pruvodce.cz/">Veřejné zakázky 24</a></p>
                <p><a href="/partner2">.....</a></p>
                <p><a href="/partner3">.....</a></p>
                <p><a href="/partner4">.....</a></p>
            </div>

            <div className="footer-section about">
                <h4>O nás</h4>
                <p>Ing. Dominik Žlebek, LL.M.</p>
                <p>Hlavní 62, Stehelčeves 273 42, Česká republika</p>
                <p>IČO 14244896</p>
                <p>Email: <a href="mailto:info@tenderix.cz">info@tenderix.cz</a></p>
                <p>Phone: <a href="tel:+420730645924">(+420) 730 645 924</a></p>
            </div>

            <div className="footer-section copyright">
                <p>Copyright © 2024 Tenderix | Všechna práva vyhrazena.</p>
            </div>
        </footer>
    );
};

export default Footer;
