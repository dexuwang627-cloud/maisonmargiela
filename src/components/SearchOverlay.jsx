import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import './SearchOverlay.css';

const SUGGESTED_PRODUCTS = [
    { id: 101, name: 'Tabi pump sandals', price: 'TWD51,100', image: '' },
    { id: 102, name: 'Leather lipstick holder charm', price: 'TWD10,800', image: '' },
    { id: 103, name: 'Waxed shearling jacket', price: 'TWD208,000', image: '' },
    { id: 104, name: '5AC East West handbag small', price: 'TWD83,200', image: '' },
];

const SearchOverlay = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    if (!isOpen) return null;

    const filteredProducts = searchQuery
        ? PRODUCTS.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
        onClose();
        setSearchQuery(''); // Reset search after navigation
    };

    const handleClose = () => {
        onClose();
        setSearchQuery('');
    };

    return (
        <div className="search-overlay">
            <div className="search-bar-container">
                <div className="search-input-wrapper">
                    <Search size={20} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search"
                        autoFocus
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={handleClose} className="close-search-btn">
                        <X size={20} />
                    </button>
                </div>
            </div>

            <div className="search-content">
                {searchQuery ? (
                    <div className="search-results-section">
                        <h3>{filteredProducts.length} RESULTS FOR "{searchQuery}"</h3>
                        <div className="suggestions-grid">
                            {filteredProducts.map(product => (
                                <div
                                    key={product.id}
                                    className="suggestion-card"
                                    onClick={() => handleProductClick(product.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="suggestion-image">
                                        {product.image1 ? (
                                            <img src={product.image1} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        ) : (
                                            <div className="placeholder-img"></div>
                                        )}
                                    </div>
                                    <h4>{product.name}</h4>
                                    <p>Eau De Toilette</p>
                                </div>
                            ))}
                            {filteredProducts.length === 0 && (
                                <p className="no-results">No products found.</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <>
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
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchOverlay;
