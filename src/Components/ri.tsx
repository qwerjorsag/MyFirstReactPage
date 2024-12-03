import React from 'react';

const ResourceItem = ({ title, description }) => (
    <div className="resource-item">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export default ResourceItem;