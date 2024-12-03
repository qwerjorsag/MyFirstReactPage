import React from 'react';
import "./AUS.css";
import dominikImage from '../Assets/dominik.jpg.png';
import janImage from '../Assets/jan.jpg.png';

const AboutUsSection = () => (
    <div className="container">

        <h2>O nás <br/></h2>

                    <div className="team-member">
                <img src={dominikImage} alt="Ing. Dominik Žíbek, LL.M." className="team-member-image"/>
                <div className="team-member-info">
                    <h3>Ing. Dominik Žíbek, LL.M.</h3>
                    <p>specialista veřejných zakázek</p>
                    <p>
                        Dominik Žíbek je absolventem Provozně ekonomické fakulty na České zemědělské univerzitě v Praze,
                        kde vystudoval obor Podnikání a administrativa a získal akademický titul Ing. Již během studia
                        se zaměřil na oblast veřejných zakázek v Technologické agentuře České republiky, kde profesně
                        působil jako projektový manažer veřejných zakázek ve Výzkumu, vývoji a inovacích. Po škole se
                        začal plně věnovat zadávání veřejných zakázek v městské společnosti Technologie hlavního města
                        Prahy, a. s. a v současnosti působí v Praze jako konzultant veřejných zakázek. Nadto se věnuje
                        vzdělávání a šíření dobrého povědomí o oblasti veřejných zakázek v rámci platformy „Veřejné
                        zakázky 24“ a aplikace Tenderis – první umělé inteligence ve veřejných zakázkách.
                    </p>
                </div>
            </div>

            <div className="team-member">
                <img src={janImage} alt="JUDr. Jan Musil, LL.M." className="team-member-image"/>
                <div className="team-member-info">
                    <h3>JUDr. Jan Musil, LL.M.</h3>
                    <p>právník veřejných zakázek, advokátní koncipient</p>
                    <p>
                        Jan Musil je absolventem Právnické fakulty Univerzity Karlovy v Praze, které zakončil rigorózní
                        zkouškou a získáním akademického titulu JUDr. Již během studia absolvoval řadu stáží jak ve
                        veřejném sektoru, např. na Vrchním soudu v Praze a Nejvyšším správním soudu v Brně, tak
                        soukromém. Po škole se začal plně věnovat problematice zadávání veřejných zakázek, a to nejprve
                        v rámci Technologické agentuře České republiky jako právník veřejných zakázek v oblasti Výzkumu,
                        vývoje a inovací. V současnosti působí jako advokátní koncipient se specializací na veřejné
                        zakázky v renomované advokátní kanceláři MT Legal s.r.o. Nadto se věnuje vzdělávání a šíření
                        dobrého povědomí o oblasti veřejných zakázek v rámci platformy „Veřejné zakázky 24“ a aplikace
                        Tenderis – první umělé inteligence ve veřejných zakázkách.
                    </p>
                </div>
            </div>

    </div>


);

export default AboutUsSection;
