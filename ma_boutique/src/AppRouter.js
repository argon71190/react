import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import ContactPage from './views/ContactPage';
import ProductsPage from './views/ProductsPage';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import Navbar from './views/Navbar';
import MessageListePage from './views/MessageListePage';
import ArticlePage from './views/ArticlePage';

const AppRouter = () => {
    return (
        <Router>
            <Navbar /> {/* Intégrez votre barre de navigation ici */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/messages" element={<MessageListePage />} />
                <Route path="/article/:articleId" element={<ArticlePage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;