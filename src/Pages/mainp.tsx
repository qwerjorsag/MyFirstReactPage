import React from 'react';
import '../App.css';
import HeroSection from '../Components/HeroSection';
import UnderHeroAll from '../Components/UnderHeroAll';
import FeaturesSection from '../Components/FeaturesSection';
import ResourcesSection from '../Components/ResourcesSection';
import TechnologySection from '../Components/TechnologySection';
import AboutUsSection from '../Components/AboutUsSection';
import UsefulLinksSection from '../Components/UsefulLinksSection';
import DisclaimerSection from '../Components/DisclaimerSection';


function MP() {
    return (
        <div className="container">
            <HeroSection/>

            <UnderHeroAll/>


            <h2> Rozsahle a odborne zdroje z oblasti zakázel</h2>
            <ResourcesSection/>


            <TechnologySection/>

            <AboutUsSection/>
            <h2>Uzitecne odkazy</h2>
            <UsefulLinksSection/>

            <DisclaimerSection/>
        </div>
    );
}

export default MP;