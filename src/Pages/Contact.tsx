import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would typically handle form submission, e.g., send form data to a server.
        console.log('Form submitted:', formData);
    };

    return (

        <div className="center-container">

            <section className="contact-form-section">
                <h2>Kontakt</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Jméno</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Vaše jméno"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Příjmení</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Vaše příjmení"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Váš email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Zpráva</label>
                        <textarea
                            name="message"
                            placeholder="Vaše zpráva"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Odeslat</button>
                </form>
            </section>
        </div>
            );
            };

            export default ContactForm;