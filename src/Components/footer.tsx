

import React from 'react';
import './footer.css'; // Assuming you have a CSS file for styling

// You may need to import these icons from a library such as Font Awesome or any icon pack you prefer
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
            {/* Social Media Icons */}
            <div className="social-media">
    <div className="logo">T</div>
        <div className="icons">
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        </a>
        </div>
        </div>

    {/* Links Section */}
    <div className="links-section">
    <div className="column">
    <h4>Ostatní</h4>
    <ul>
    <li><a href="#help">Nápověda</a></li>
    <li><a href="#terms">Podmínky užití aplikace</a></li>
    <li><a href="#marketing">Zasílání obchodních sdělení</a></li>
    <li><a href="#conditions">Obchodní podmínky</a></li>
    <li><a href="#privacy">Zásady ochrany osobních údajů</a></li>
    </ul>
    </div>
    <div className="column">
        <h4>Partneři</h4>
        <ul>
        <li>Veřejné zakázky 24</li>
    <li>.....</li>
    <li>.....</li>
    <li>.....</li>
    <li>.....</li>
    </ul>
    </div>
    <div className="column">
        <h4>O nás</h4>
    <p>Ing. Dominik Žlebek, LL.M.</p>
    <p>Hlavní 62, Stehelčeves 273 42, Česká republika</p>
    <p>IČO 14244896</p>
    <p><a href="mailto:info@tenderix.cz">info@tenderix.cz</a></p>
    <p><a href="tel:+420730645924">(+420) 730 645 924</a></p>
    </div>
    </div>
    </div>
    <div className="footer-bottom">
        <p>Copyright © 2024 Tenderix Všechna práva vyhrazena.</p>
    </div>
    </footer>
);
};

export default Footer;
