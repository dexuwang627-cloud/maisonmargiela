import React from 'react';
import { Search, X } from 'lucide-react';
import './SearchOverlay.css';

const SUGGESTED_PRODUCTS = [
    { id: 101, name: 'Tabi pump sandals', price: 'TWD51,100', image: '' },
    { id: 102, name: 'Leather lipstick holder charm', price: 'TWD10,800', image: '' },
    { id: 103, name: 'Waxed shearling jacket', price: 'TWD208,000', image: '' },
    { id: 104, name: '5AC East West handbag small', price: 'TWD83,200', image: '' },
];

const SearchOverlay = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="search-overlay">
            <div className="search-bar-container">
                <div className="search-input-wrapper">
                    <Search size={20} className="search-icon" />
                    <input type="text" placeholder="Search" autoFocus />
                    <button onClick={onClose} className="close-search-btn">
                        <X size={20} />
                    </button>
                </div>
            </div>

            <div className="search-content">
                <div className="trending-section">
                    <h3>TRENDING</h3>
                    <div className="trending-tags">
                        <span className="tag">Women's Bags</span>
                        <span className="tag">Tabi</span>
                        <span className="tag">Small Leather Goods</span>
                    </div>
                </div>

                <div className="suggestions-section">
                    <h3>YOU MAY ALSO LIKE</h3>
                    <div className="suggestions-grid">
                        {SUGGESTED_PRODUCTS.map(product => (
                            <div key={product.id} className="suggestion-card">
                                <div className="suggestion-image"></div>
                                <h4>{product.name}</h4>
                                <p>{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchOverlay;
