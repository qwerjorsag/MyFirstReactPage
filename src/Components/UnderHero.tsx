import React from 'react';
import PropTypes from 'prop-types';
import './UnderHero.css';

const RegisterPrompt = ({ title, description, icon, className, iconClass }) => {
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

// Define default props
RegisterPrompt.defaultProps = {
    title: "sgsgsdf", // No title by default
    description: "Aby bylo možné využívat služeb Tenderixe, je nezbytné provést jednoduchou registraci.",
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

export default RegisterPrompt;
