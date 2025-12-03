import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import RefineSidebar from '../components/RefineSidebar';
import { PRODUCTS } from '../data/products';
import './ProductList.css';

const ProductList = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="product-list-page">
            <div className="page-header">
                <div className="breadcrumbs">WOMEN / FRAGRANCES / PERFUMES</div>
                <h1>Perfumes</h1>
                <p className="subtitle">perfumes</p>
            </div>

            <div className="toolbar">
                <button className="refine-btn" onClick={() => setIsSidebarOpen(true)}>
                    Refine
                </button>
                <span className="item-count">19 ITEMS</span>
            </div>

            <div className="product-grid">
                {PRODUCTS.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="load-more-container">
                <button className="back-to-top">Go back to top</button>
            </div>

            <RefineSidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
        </div>
    );
};

export default ProductList;
