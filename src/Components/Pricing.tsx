import React, { useState, useEffect } from 'react';
import './Pricing.css'; // Import the CSS file for styling
import pricingData from '../Data/pricingData.json'; // Import JSON data

const Pricing = () => {
    const [plans, setPlans] = useState([]);
    const [isYearly, setIsYearly] = useState(false); // State to toggle between monthly and yearly pricing

    useEffect(() => {
        // Simulate fetching data (if needed)
        setPlans(pricingData);
    }, []);

    // Function to toggle the pricing mode
    const handleYearlyPricing = () => {
        setIsYearly(!isYearly); // Toggle the pricing mode
    };

    return (
        <div className="pricing-container">
            <div className="pricing-switch">
                <button
                    className={`switch-button ${isYearly ? 'active' : ''}`}
                    onClick={handleYearlyPricing}
                >
                    Ročně -20%
                </button>
                <button
                    className={`switch-button ${!isYearly ? 'active' : ''}`}
                    onClick={() => setIsYearly(false)}
                >
                    Měsíčně
                </button>
            </div>
            <div className="pricing-plans">
                {plans.map((plan, index) => (
                    <div key={index} className={`plan ${plan.isPopular ? 'popular' : ''}`}>
                        <h2>{plan.name}</h2>
                        <p className="price">
                            {isYearly
                                ? `${Math.round(parseFloat(plan.price) * 10)} USD/rok`
                                : plan.price}
                        </p>
                        <p className="description">{plan.description}</p>
                        <button className="purchase-button">Zakoupit plán</button>
                        <ul>
                            {plan.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
