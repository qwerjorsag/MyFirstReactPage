import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './header.css';

const Header: React.FC = () => {
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleLoginClick = () => {
        navigate('/login'); // Redirect to login page
    };

    const handleRegisterClick = () => {
        navigate('/register'); // Redirect to registration page
    };

    return (
        <header className="header">
            <div className="logo-section">
                <div className="logo">T</div>
                <div className="brand">
                    <h1>TENDERIX</h1>
                    <p><Link to="/">Aktuální zakázková praxe</Link></p>
                </div>
            </div>
            <nav className="nav-links">
                <Link to="/about">O nás</Link>
                <Link to="/pricing">Ceník</Link>
                <Link to="/news">Aktuálně</Link>
                <Link to="/contact">Kontakt</Link>
            </nav>
            <div className="action-buttons">
                <button className="login-button" onClick={handleLoginClick}>
                    Přihlásit
                </button>
                <button className="try-free-button" onClick={handleRegisterClick}>
                    Vyzkoušet zdarma
                </button>
            </div>
        </header>
    );
};

export default Header;
