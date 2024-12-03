import React from 'react';
import './PricingPage.css';
import Pricing from '../Components/Pricing';  // Import the Pricing component

const App = () => {
    return (
        <div>

            <header className="PriceTitle">
                <h1 >Welcome to Our Service</h1>
                <p>Choose the right plan for you</p>
            </header>


            <Pricing />

        </div>
    );
};

export default App;
