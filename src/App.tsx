import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/footer2';
import Header from './Components/header';
import Contact from './Pages/Contact';
import RegistrationPage from './Pages/RP';
import LoginPage from './Pages/LoginPage';
import MP from './Pages/mainp';
import ErrorPage from './Pages/ErrorPage';
import NewsPage from './Pages/NewsPage';
import PricingPage from './Pages/PricingPage';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<MP />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="*" element={<ErrorPage />} /> {/* 404 Route */}
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
