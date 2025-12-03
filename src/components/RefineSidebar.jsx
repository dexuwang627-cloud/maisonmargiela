import React from 'react';
import { X, Minus } from 'lucide-react';
import './RefineSidebar.css';

const RefineSidebar = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
            <div className={`refine-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h2>REFINE</h2>
                    <button onClick={onClose} className="close-btn">
                        <X size={20} />
                    </button>
                </div>

                <div className="sidebar-content">
                    <div className="filter-group">
                        <div className="filter-header">
                            <h3>SORT BY</h3>
                            <Minus size={16} />
                        </div>
                        <ul className="filter-options">
                            <li>Newest</li>
                            <li>Price</li>
                            <li>Price</li>
                            <li>Newest</li>
                            <li>Price</li>
                            <li>Price</li>
                        </ul>
                    </div>
                </div>

                <div className="sidebar-footer">
                    <button className="show-results-btn">Show results</button>
                    <button className="clear-all-btn">Clear all</button>
                </div>
            </div>
        </>
    );
};

export default RefineSidebar;
