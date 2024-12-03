import React from 'react';

const TeamMember = ({ imgSrc, name, title, description }) => (
    <div className="team-member">
        <img src={imgSrc} alt={name} />
        <div>
            <h3>{name}</h3>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    </div>
);

export default TeamMember;