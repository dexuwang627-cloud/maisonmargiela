import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Client Care</h3>
                        <ul>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Packaging</a></li>
                            <li><a href="#">Return form</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Legal Information</h3>
                        <ul>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Cookie</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Maison Margiela is part of OTB</p>
                    <p>Copyright © 2024 - OTB</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
