import React, { useState } from 'react';
import './RegistrationForm.css';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa'; // Icons for Google and Microsoft

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        agreement: false,
    });
    const [errorMessage, setErrorMessage] = useState('');

    const validatePassword = (password) => {
        const hasNumber = /\d/;
        const hasLetter = /[a-zA-Z]/;
        return password.length > 8 && hasNumber.test(password) && hasLetter.test(password);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
        if (name === 'password') {
            setErrorMessage('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validatePassword(formData.password)) {
            setErrorMessage(
                'Heslo musí být delší než 8 znaků a obsahovat minimálně jedno písmeno a jedno číslo'
            );
            return;
        }
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    const handleGoogleRegister = () => {
        console.log('Register with Google');
        // Add Google registration logic here
    };

    const handleMicrosoftRegister = () => {
        console.log('Register with Microsoft');
        // Add Microsoft registration logic here
    };

    return (
        <div className="register-form-container">
            <h2>Registrace</h2>
            <form className="register-form" onSubmit={handleSubmit}>
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
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>

                <div className="checkbox-group">

                    <input
                        type="checkbox"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleChange}
                        required
                    />
                    <label></label>
                    <p className="agreement-text">
                        Registrací a zaškrtnutím souhlasíte s Obchodními podmínkami, Zásadami ochrany osobních údajů, Zasíláním
                        obchodních sdělení a Podmínkami užití aplikace.
                    </p>

                </div>
                <button type="submit" className="submit-button">Registrovat</button>
            </form>
            <div className="or-divider">Nebo registrace pomocí</div>
            <div className="social-buttons">
                <button onClick={handleGoogleRegister} className="google-button">
                    <FaGoogle className="social-icon" /> Registrace s Google
                </button>
                <button onClick={handleMicrosoftRegister} className="microsoft-button">
                    <FaMicrosoft className="social-icon" /> Registrace s Microsoft
                </button>
            </div>
        </div>
    );
};

export default RegisterForm;
