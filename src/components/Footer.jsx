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
                            <li>Contact us</li>
                            <li>FAQs</li>
                            <li>Packaging</li>
                            <li>Return form</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Legal Information</h3>
                        <ul>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Cookie</li>
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
