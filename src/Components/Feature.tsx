import React from 'react';

const Feature = ({ icon, title, description }) => (
    <div className="feature">
        <img src={icon} alt={`${title} Icon`} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export default Feature;