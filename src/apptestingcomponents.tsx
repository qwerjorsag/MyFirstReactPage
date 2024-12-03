
import React from 'react';
import Footer from './Components/footer';
import Header from './Components/header';
import MP from './Pages/mainp';

import './App.css';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <MP/>

            <Footer />
        </>
    );
}

export default App;
