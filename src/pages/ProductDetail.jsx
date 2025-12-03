import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Plus, Minus, Bookmark, Copy } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import './ProductDetail.css';

const AccordionItem = ({ title, children, icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                <div className="accordion-title">
                    {icon && <span className="accordion-icon">{icon}</span>}
                    <span>{title}</span>
                </div>
                <div className="accordion-toggle">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} className="plus-icon" />}
                </div>
            </button>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
};

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        const foundProduct = PRODUCTS.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
        if (foundProduct && foundProduct.image1) {
            setActiveImage(foundProduct.image1);
        }
    }, [id]);

    if (!product) {
        return <div className="loading">Loading...</div>;
    }

    const hasImages = product.image1 && product.image2;

    return (
        <div className="product-detail-page">
            <div className="product-detail-container">
                {/* Left: Thumbnails */}
                <div className="product-thumbnails">
                    {hasImages ? (
                        <>
                            <div
                                className={`thumbnail ${activeImage === product.image1 ? 'active' : ''}`}
                                onClick={() => setActiveImage(product.image1)}
                            >
                                <img src={product.image1} alt="Thumbnail 1" className="thumbnail-img" />
                            </div>
                            <div
                                className={`thumbnail ${activeImage === product.image2 ? 'active' : ''}`}
                                onClick={() => setActiveImage(product.image2)}
                            >
                                <img src={product.image2} alt="Thumbnail 2" className="thumbnail-img" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="thumbnail active"><div className="thumbnail-placeholder"></div></div>
                            <div className="thumbnail"><div className="thumbnail-placeholder"></div></div>
                        </>
                    )}
                </div>

                {/* Center: Main Image */}
                <div className="product-main-image">
                    {hasImages ? (
                        <img src={activeImage} alt={product.name} className="main-image" />
                    ) : (
                        <div className="main-image-placeholder"></div>
                    )}
                </div>

                {/* Right: Info */}
                <div className="product-info-section">
                    <div className="product-header">
                        <span className="product-category">PERFUMES</span>
                        <h1>{product.name}</h1>
                        <button className="bookmark-btn-large">
                            <Bookmark size={20} />
                        </button>
                    </div>

                    <button className="notify-me-btn">Notify me</button>

                    <p className="product-description">
                        "{product.name} evokes the soft sensation of freshly washed linen sheets on ... <span className="more-link">More</span>
                    </p>

                    <div className="product-accordions">
                        <AccordionItem title="Product Details">
                            <div className="detail-content">
                                <div className="item-code">
                                    <span>Item Code</span>
                                    <div className="code-box">
                                        S33YX0018S10932001 <Copy size={14} />
                                    </div>
                                </div>
                                <div className="notes-list">
                                    <p><strong>Top notes:</strong> pear accord, lily of the valley accord, aldehydes</p>
                                    <p><strong>Middle notes:</strong> iris accord, rose absolute, orange flower accord</p>
                                    <p><strong>Base notes:</strong> indonesian patchouli oil, ambrette seeds absolute, white musks</p>
                                    <p><strong>Olfactive family:</strong> floral musky</p>
                                    <p><strong>Concentration:</strong> Eau de Toilette</p>
                                </div>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Shipping and Returns">
                            <div className="detail-content">
                                <p>We offer Express shipping on all orders, and free pick up for your returns. Express delivery is free of charge for all orders above 13,455 TWD.</p>
                                <p>You can find detailed information on how to return and answers to frequently asked questions in the Client Care area.</p>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Contact Us">
                            <div className="detail-content">
                                <h3>Contact Us</h3>
                                <p>We do our best to reply within one business day, excluding holidays.</p>
                                <a href="#" className="contact-link">Contact us</a>
                            </div>
                        </AccordionItem>
                    </div>
                </div>
            </div>

            {/* Recommendations Section */}
            <div className="recommendations-section">
                <h3>YOU MAY ALSO LIKE</h3>
                <div className="recommendations-grid">
                    {/* Placeholders for recommendations */}
                    <div className="rec-item"><div className="rec-img"></div><p>Replica Beach Vibes candle</p></div>
                    <div className="rec-item"><div className="rec-img"></div><p>Replica On A Date Candle</p></div>
                    <div className="rec-item"><div className="rec-img"></div><p>Replica Autumn Vibes Candle</p></div>
                    <div className="rec-item"><div className="rec-img"></div><p>Replica When the Rain Stops candle</p></div>
                    <div className="rec-item"><div className="rec-img"></div><p>Replica sneakers TWD23,800</p></div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
