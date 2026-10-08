import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink, BookOpen, GraduationCap, Compass, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* Brand / Logo */}
        <Link to="/" className={styles.brandGroup} onClick={() => setMobileMenuOpen(false)}>
          <div className={styles.logoBadge}>
            <img src="/csumb-logo.svg" alt="CSUMB Logo" className={styles.csumbLogo} />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>OTTER-SIDE</span>
            <span className={styles.brandSubtitle}>CSUMB ILP PORTFOLIO</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          <Link
            to="/"
            className={`${styles.navLink} ${isActive('/') && location.pathname === '/' ? styles.active : ''}`}
          >
            <Compass size={16} />
            <span>Home</span>
          </Link>

          <Link
            to="/courses"
            className={`${styles.navLink} ${isActive('/courses') && !location.pathname.includes('cst-349') ? styles.active : ''}`}
          >
            <BookOpen size={16} />
            <span>All Courses</span>
          </Link>

          <Link
            to="/courses/cst-349"
            className={`${styles.navLink} ${location.pathname.includes('cst-349') ? styles.active : ''}`}
          >
            <GraduationCap size={16} />
            <span>CST 349 (Current)</span>
          </Link>

          {/* External Bridge back to Personal Portfolio */}
          <a
            href="https://willofhuitzil.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bridgeBtn}
            title="Navigate to Ivan's Personal Portfolio"
          >
            <span>WillofHuitzil.com</span>
            <ExternalLink size={14} />
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={styles.mobileNav}>
          <Link
            to="/"
            className={`${styles.mobileNavLink} ${isActive('/') && location.pathname === '/' ? styles.active : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Compass size={18} />
            <span>Home</span>
          </Link>

          <Link
            to="/courses"
            className={`${styles.mobileNavLink} ${isActive('/courses') && !location.pathname.includes('cst-349') ? styles.active : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <BookOpen size={18} />
            <span>All Planned Courses</span>
          </Link>

          <Link
            to="/courses/cst-349"
            className={`${styles.mobileNavLink} ${location.pathname.includes('cst-349') ? styles.active : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <GraduationCap size={18} />
            <span>CST 349 Proseminar & Report</span>
          </Link>

          <a
            href="https://willofhuitzil.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileBridgeBtn}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Return to WillofHuitzil.com</span>
            <ExternalLink size={16} />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
