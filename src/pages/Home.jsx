import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-item">
                    <div className="hero-image" style={{ backgroundImage: "url('/images/12daysofmargiela1.jpg')" }}></div>
                    <div className="hero-content">
                        <h2>The 12 Days of Margiela</h2>
                        <Link to="/products" className="cta-link">DISCOVER MORE</Link>
                    </div>
                </div>
                <div className="hero-item">
                    <div className="hero-image" style={{ backgroundImage: "url('/images/12daysofmargiela2.jpg')" }}></div>
                    <div className="hero-content">
                        <h2>The 12 Days of Margiela</h2>
                        <Link to="/products" className="cta-link">DISCOVER MORE</Link>
                    </div>
                </div>
            </section>

            {/* Seasonal Selection Section */}
            <section className="seasonal-section">
                <div className="seasonal-item">
                    <div className="seasonal-image" style={{ backgroundImage: "url('/images/giftingforher.jpg')" }}></div>
                    <div className="seasonal-content">
                        <h2>Gifting for Her</h2>
                        <Link to="/products" className="cta-link">SEASONAL SELECTION</Link>
                    </div>
                </div>
                <div className="seasonal-item">
                    <div className="seasonal-image" style={{ backgroundImage: "url('/images/giftingforhim.jpg')" }}></div>
                    <div className="seasonal-content">
                        <h2>Gifting for Him</h2>
                        <Link to="/products" className="cta-link">SEASONAL SELECTION</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
