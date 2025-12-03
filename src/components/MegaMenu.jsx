import React from 'react';
import { Link } from 'react-router-dom';
import './MegaMenu.css';

const MegaMenu = ({ isOpen, onMouseEnter, onMouseLeave }) => {
    if (!isOpen) return null;

    return (
        <div
            className="mega-menu-container"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="mega-menu-content">
                <div className="menu-column">
                    <h3>Featured</h3>
                    <ul>
                        <li>New Arrivals</li>
                        <li>Evening Wear</li>
                        <li>Pressed and Foiled</li>
                        <li>Loved to Death</li>
                        <li>Maison Margiela x<br />Gentle Monster</li>
                    </ul>
                </div>

                <div className="menu-column">
                    <h3>Ready-to-wear</h3>
                    <ul>
                        <li>Coats & Jackets</li>
                        <li>Knitwear</li>
                        <li>Dresses</li>
                        <li>Jeans & Trousers</li>
                        <li>Tops & Bodysuits</li>
                        <li>Skirts</li>
                        <li>Shirts</li>
                        <li>View All</li>
                    </ul>
                </div>

                <div className="menu-column">
                    <h3>Bags</h3>
                    <ul>
                        <li>5AC</li>
                        <li>Dress-Age</li>
                        <li>Glam Slam</li>
                        <li>Shoulder Bags</li>
                        <li>Top Handle Bags</li>
                        <li>Sports & Backpacks</li>
                        <li>View All</li>
                    </ul>
                </div>

                <div className="menu-column">
                    <h3>Shoes</h3>
                    <ul>
                        <li>Tabi</li>
                        <li>Sprinters</li>
                        <li>Boots & Ankle Boots</li>
                        <li>Replica</li>
                        <li>Sneakers</li>
                        <li>Flats</li>
                        <li>Heels</li>
                        <li>View All</li>
                    </ul>
                </div>

                <div className="menu-column">
                    <h3>Accessories</h3>
                    <ul>
                        <li>Small leather goods</li>
                        <li>Jewellery</li>
                        <li>Charms</li>
                        <li>Other Accessories</li>
                        <li>View All</li>
                    </ul>
                </div>

                <div className="menu-column">
                    <h3>Fragrances</h3>
                    <ul>
                        <li><Link to="/products">Perfumes</Link></li>
                        <li>Candles</li>
                        <li>View All</li>
                    </ul>
                </div>

                <div className="menu-image-column">
                    <div className="menu-image-placeholder"></div>
                    <p className="image-caption">Gifting for Her</p>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;
