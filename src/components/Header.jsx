import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import SearchOverlay from './SearchOverlay';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="header" onMouseLeave={() => setIsMenuOpen(false)}>
        <div className="header-left">
          <button className="mobile-menu-trigger" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
          <nav className="nav-links desktop-only" onMouseEnter={() => setIsMenuOpen(true)}>
            <Link to="/products">Women</Link>
            <Link to="/products">Men</Link>
            <Link to="/products">Unisex</Link>
            <Link to="/products">Gift Guide</Link>
            <Link to="/products">Sale</Link>
            <Link to="/products">Shows</Link>
          </nav>
        </div>

        <div className="header-center">
          <Link to="/" className="logo">
            <h1>Maison Margiela</h1>
            <span>PARIS</span>
          </Link>
        </div>

        <div className="header-right">
          <nav className="nav-links">
            <button className="text-btn" onClick={() => setIsSearchOpen(true)}>Search</button>
            <button className="text-btn desktop-only">Account</button>
            <button className="text-btn">Wishlist</button>
            <button className="text-btn">Bag</button>
          </nav>
        </div>

        <MegaMenu
          isOpen={isMenuOpen}
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        />

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </header>

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default Header;
