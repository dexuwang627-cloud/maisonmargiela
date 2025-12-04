import React, { useState } from 'react';
import { X } from 'lucide-react';
import './NotificationBar.css';

const NotificationBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="notification-bar">
            <div className="notification-content">
                <span>Discover our <a href="#" className="notification-link">holiday card</a> with your order. Returns extended up to 31 January. <a href="#" className="notification-link">More Information</a></span>
            </div>
            <button className="close-btn" onClick={() => setIsVisible(false)}>
                <X size={16} />
            </button>
        </div>
    );
};

export default NotificationBar;
