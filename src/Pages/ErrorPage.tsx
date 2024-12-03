import React from 'react';
import './ErrorPage.css';

const ErrorPage: React.FC = () => {
    return (
        <div className="error-page">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
        </div>
    );
};

export default ErrorPage;
