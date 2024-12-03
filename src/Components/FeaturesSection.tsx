import React from 'react';


const FeaturesSection = () => (
    <section className="features">
        <div className="feature">
            <img src="register-icon.png" alt="Register Icon"/>
            <h3>Registrujte se!</h3>
            <p>Aby bylo možné využívat službu Tenderis, je nezbytné provést jednoduchou registraci.</p>
        </div>
        <div className="feature">
            <img src="activate-icon.png" alt="Activate Account Icon"/>
            <h3>Aktivujte si účet!</h3>
            <p>Po registraci je potřeba potvrdit aktivační email a aktivovat svůj účet.</p>
        </div>
        <div className="feature">
            <img src="ask-icon.png" alt="Ask Icon"/>
            <h3>Zeptejte se!</h3>
            <p>Na základě zadání projektu a parametrů správa formuluje text dotazu v oblasti veřejných zakázek.</p>
        </div>
        <div className="feature">
            <img src="get-answers-icon.png" alt="Get Answers Icon"/>
            <h3>Získejte zdroje a odpovědi!</h3>
            <p>V databázi máte přístup k odborným zdrojům, legislativě a odborným expertům.</p>
        </div>
    </section>
);

export default FeaturesSection;