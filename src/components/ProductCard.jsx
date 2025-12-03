import React from 'react';
import { Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = React.useState(false);

    const hasImages = product.image1 && product.image2;

    return (
        <div
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="product-image-container">
                {hasImages ? (
                    <img
                        src={isHovered ? product.image2 : product.image1}
                        alt={product.name}
                        className="product-image"
                    />
                ) : (
                    <div className="product-image-placeholder"></div>
                )}
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <button className="bookmark-btn" onClick={(e) => e.stopPropagation()}>
                    <Bookmark size={16} />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
