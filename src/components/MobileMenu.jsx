import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import './MobileMenu.css';

const MENU_DATA = {
    women: {
        title: 'Women',
        items: [
            { id: 'featured', title: 'Featured', hasSubmenu: false, link: '/products?category=featured' }, // Simplified for now
            { id: 'ready-to-wear', title: 'Ready-to-wear', hasSubmenu: false, link: '/products?category=ready-to-wear' },
            { id: 'bags', title: 'Bags', hasSubmenu: false, link: '/products?category=bags' },
            { id: 'shoes', title: 'Shoes', hasSubmenu: false, link: '/products?category=shoes' },
            { id: 'accessories', title: 'Accessories', hasSubmenu: false, link: '/products?category=accessories' },
            {
                id: 'fragrances',
                title: 'Fragrances',
                hasSubmenu: true,
                items: [
                    { id: 'perfumes', title: 'Perfumes', link: '/products?category=perfumes' },
                    { id: 'candles', title: 'Candles', link: '/products?category=candles' },
                    { id: 'view-all', title: 'View All', link: '/products?category=fragrances' }
                ]
            }
        ]
    },
    men: { title: 'Men', items: [] }, // Placeholder
    unisex: { title: 'Unisex', items: [] }, // Placeholder
    gift_guide: { title: 'Gift Guide', items: [] }, // Placeholder
    sale: { title: 'Sale', items: [] }, // Placeholder
    shows: { title: 'Shows', items: [] } // Placeholder
};

const MobileMenu = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('maison');
    const [navStack, setNavStack] = useState([]); // Array of keys: ['women', 'fragrances']
    const navigate = useNavigate();

    if (!isOpen) return null;

    const getCurrentMenu = () => {
        if (navStack.length === 0) {
            return Object.entries(MENU_DATA).map(([key, value]) => ({
                id: key,
                title: value.title,
                hasSubmenu: true // Assuming top level always drills down or links
            }));
        }

        let currentLevel = MENU_DATA[navStack[0]];
        for (let i = 1; i < navStack.length; i++) {
            const nextKey = navStack[i];
            currentLevel = currentLevel.items.find(item => item.id === nextKey);
        }
        return currentLevel.items || [];
    };

    const handleItemClick = (item) => {
        if (item.hasSubmenu) {
            setNavStack([...navStack, item.id]);
        } else if (item.link) {
            navigate(item.link);
            onClose();
        }
    };

    const handleBack = () => {
        setNavStack(navStack.slice(0, -1));
    };

    const currentItems = getCurrentMenu();
    const currentTitle = navStack.length > 0 ? (
        navStack.length === 1 ? MENU_DATA[navStack[0]].title :
            MENU_DATA[navStack[0]].items.find(i => i.id === navStack[1])?.title
    ) : null;

    return (
        <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
            <div className="mobile-menu-header">
                <button className="mobile-menu-close" onClick={onClose}>Close</button>
                <div className="mobile-menu-logo">
                    {/* Optional: Small Logo or Search */}
                </div>
                <div className="header-actions">
                    {/* Icons like Search, Bag can go here if needed, or keep simple */}
                </div>
            </div>

            <div className="mobile-menu-search-container" style={{ padding: '1rem' }}>
                <input type="text" placeholder="Search" className="mobile-menu-search" style={{ width: '100%' }} />
            </div>

            <div className="mobile-menu-tabs">
                <button
                    className={`mobile-menu-tab ${activeTab === 'maison' ? 'active' : ''}`}
                    onClick={() => setActiveTab('maison')}
                >
                    Maison Margiela
                </button>
                <button
                    className={`mobile-menu-tab ${activeTab === 'mm6' ? 'active' : ''}`}
                    onClick={() => setActiveTab('mm6')}
                >
                    MM6
                </button>
            </div>

            {navStack.length > 0 && (
                <div className="mobile-menu-back" onClick={handleBack}>
                    <ChevronLeft size={16} /> {navStack.length === 1 ? 'Maison Margiela' : MENU_DATA[navStack[0]].title}
                </div>
            )}

            {navStack.length > 0 && (
                <div className="mobile-menu-breadcrumbs">
                    {currentTitle}
                </div>
            )}

            <div className="mobile-menu-content">
                <ul className="mobile-menu-list">
                    {currentItems.map((item) => (
                        <li key={item.id} className="mobile-menu-item" onClick={() => handleItemClick(item)}>
                            {item.title}
                            {item.hasSubmenu && <ChevronRight size={16} color="#ccc" />}
                        </li>
                    ))}
                </ul>
            </div>

            {navStack.length === 0 && (
                <div className="mobile-menu-footer">
                    <Link to="/client-care" className="mobile-menu-footer-link">Client Care</Link>
                    <Link to="/account" className="mobile-menu-footer-link">Account</Link>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
