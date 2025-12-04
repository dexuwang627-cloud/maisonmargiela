/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-12-03 12:51:29
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-12-04 14:31:25
 * @FilePath: /maisonmargiela/src/components/MegaMenu.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
                        <li><Link to="/products?category=new-arrivals">New Arrivals</Link></li>
                        <li><Link to="/products?category=evening-wear">Evening Wear</Link></li>
                        <li><Link to="/products?category=pressed-and-foiled">Pressed and Foiled</Link></li>
                        <li><Link to="/products?category=loved-to-death">Loved to Death</Link></li>
                        <li><Link to="/products?category=collaboration">Maison Margiela x<br />Gentle Monster</Link></li>
                    </ul>
                </div>

                <div className="menu-column">
                    <h3>Ready-to-wear</h3>
                    <ul>
                        <li><Link to="/products?category=coats-jackets">Coats & Jackets</Link></li>
                        <li><Link to="/products?category=knitwear">Knitwear</Link></li>
                        <li><Link to="/products?category=dresses">Dresses</Link></li>
                        <li><Link to="/products?category=jeans-trousers">Jeans & Trousers</Link></li>
                        <li><Link to="/products?category=tops-bodysuits">Tops & Bodysuits</Link></li>
                        <li><Link to="/products?category=skirts">Skirts</Link></li>
                        <li><Link to="/products?category=shirts">Shirts</Link></li>
                        <li><Link to="/products">View All</Link></li>
                    </ul>
                </div>

                <div className="menu-column">
                    <h3>Bags</h3>
                    <ul>
                        <li><Link to="/products?category=5ac">5AC</Link></li>
                        <li><Link to="/products?category=dress-age">Dress-Age</Link></li>
                        <li><Link to="/products?category=glam-slam">Glam Slam</Link></li>
                        <li><Link to="/products?category=shoulder-bags">Shoulder Bags</Link></li>
                        <li><Link to="/products?category=top-handle-bags">Top Handle Bags</Link></li>
                        <li><Link to="/products?category=sports-backpacks">Sports & Backpacks</Link></li>
                        <li><Link to="/products">View All</Link></li>
                    </ul>
                </div>

                <div className="menu-column">
                    <h3>Shoes</h3>
                    <ul>
                        <li><Link to="/products?category=tabi">Tabi</Link></li>
                        <li><Link to="/products?category=sprinters">Sprinters</Link></li>
                        <li><Link to="/products?category=boots-ankle-boots">Boots & Ankle Boots</Link></li>
                        <li><Link to="/products?category=replica">Replica</Link></li>
                        <li><Link to="/products?category=sneakers">Sneakers</Link></li>
                        <li><Link to="/products?category=flats">Flats</Link></li>
                        <li><Link to="/products?category=heels">Heels</Link></li>
                        <li><Link to="/products">View All</Link></li>
                    </ul>
                </div>

                <div className="menu-column">
                    <h3>Accessories</h3>
                    <ul>
                        <li><Link to="/products?category=small-leather-goods">Small leather goods</Link></li>
                        <li><Link to="/products?category=jewellery">Jewellery</Link></li>
                        <li><Link to="/products?category=charms">Charms</Link></li>
                        <li><Link to="/products?category=other-accessories">Other Accessories</Link></li>
                        <li><Link to="/products">View All</Link></li>
                    </ul>
                </div>

                <div className="menu-column">
                    <h3>Fragrances</h3>
                    <ul>
                        <li><Link to="/products?category=perfumes">Perfumes</Link></li>
                        <li><Link to="/products?category=candles">Candles</Link></li>
                        <li><Link to="/products">View All</Link></li>
                    </ul>
                </div>

                <div className="menu-image-column">
                    <div className="menu-image-placeholder">
                        <img src="/images/giftingforher.jpg" alt="Gifting for Her" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <p className="image-caption">Gifting for Her</p>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;
