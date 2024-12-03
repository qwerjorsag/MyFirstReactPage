import React from 'react';
import PropTypes from 'prop-types';
import './UnderHero.css';

const RegisterPrompt = ({ title, description, icon, className, iconClass }) => {

// Define default props
    RegisterPrompt.defaultProps = {
        title: "here insert title", // No title by default
        description: "here we insrest the text",
        icon: null,
        className: "",
        iconClass: ""
    };

// Define prop types for validation
    RegisterPrompt.propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        icon: PropTypes.element, // Expects a React element (e.g., an icon component)
        className: PropTypes.string,
        iconClass: PropTypes.string
    };
    return (
        <div className={`register-prompt ${className}`}>
            <div className={`icon-container ${iconClass}`}>
                {icon}
            </div>
            <div className="text-container">
                {title && <h2>{title}</h2>}
                {description && <p>{description}</p>}
            </div>
        </div>
    );
};


export default RegisterPrompt;
