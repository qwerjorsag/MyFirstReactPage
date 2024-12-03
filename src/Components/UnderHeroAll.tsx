import React from 'react';
import RegisterPrompt from './UnderHero'; // Adjust path if necessary
import './UnderHeroAll.css';
import { FaClipboardList, FaRegUser, FaBell, FaChartLine } from 'react-icons/fa';

const UnderHero = () => {
    return (
        <section className="under-hero">
            <RegisterPrompt
                title="Registrujte se!"
                description="Aby bylo možné využívat služeb Tenderixe, je nezbytné provést jednoduchou registraci."
                icon={<FaClipboardList className="icon" />}
                className="custom-prompt"
                iconClass="custom-icon"
            />
            <RegisterPrompt
                title="Profil uživatele"
                description="Nastavte si svůj profil a získejte přístup k osobním službám."
                icon={<FaRegUser className="icon" />}
            />
            <RegisterPrompt
                title="Oznámení"
                description="Získejte aktuální informace a upozornění na změny."
                icon={<FaBell className="icon" />}
            />
            <RegisterPrompt
                title="Statistiky"
                description="Prohlédněte si přehledné statistiky o svém účtu."
                icon={<FaChartLine className="icon" />}
            />

        </section>
    );
};

export default UnderHero;