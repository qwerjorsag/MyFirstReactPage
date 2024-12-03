import React, { useState } from 'react';
import './LoginForm.css';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa'; // Icons for Google and Microsoft

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login form submitted:', formData);
        // Add login submission logic here
    };

    const handleGoogleLogin = () => {
        console.log('Login with Google');
        // Add Google login logic here
    };

    const handleMicrosoftLogin = () => {
        console.log('Login with Microsoft');
        // Add Microsoft login logic here
    };

    return (
        <div className="login-form-container">
            <h2>Přihlášení</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Váš email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Heslo</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Vaše heslo"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Přihlásit se</button>
            </form>
            <div className="or-divider">Nebo přihlášení pomocí</div>
            <div className="social-buttons">
                <button onClick={handleGoogleLogin} className="google-button">
                    <FaGoogle className="social-icon" /> Přihlášení s Google
                </button>
                <button onClick={handleMicrosoftLogin} className="microsoft-button">
                    <FaMicrosoft className="social-icon" /> Přihlášení s Microsoft
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
