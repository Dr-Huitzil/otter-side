import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ExternalLink,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { csumbCourses } from '@/data/csumbCourses';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Clean up any pending timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180);
  };

  const handleTriggerClick = (e) => {
    e.preventDefault();
    if (dropdownOpen) {
      navigate('/courses');
      setDropdownOpen(false);
    } else {
      setDropdownOpen(true);
    }
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const currentCourses = csumbCourses.filter((c) => c.status === 'In Progress');
  const otherCourses = csumbCourses.filter((c) => c.status !== 'In Progress');

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
            <span>HOME</span>
          </Link>

          {/* Courses Dropdown (Hover + Click with safe bridge & immediate interaction) */}
          <div
            className={styles.dropdownWrapper}
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`${styles.navLink} ${styles.dropdownTrigger} ${isActive('/courses') ? styles.active : ''}`}
              onClick={handleTriggerClick}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              <span>COURSES</span>
              <ChevronDown
                size={14}
                className={`${styles.chevron} ${dropdownOpen ? styles.chevronRotated : ''}`}
              />
            </button>

            {/* Dropdown Menu (Expands to full content size) */}
            {dropdownOpen && (
              <div
                className={`${styles.dropdownMenu} hud-surface`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className={styles.dropdownHeader}>
                  <span className={styles.dropdownHeadingText}>DEGREE PATHWAY DIRECTORY</span>
                  <Link
                    to="/courses"
                    className={styles.allCoursesLink}
                    onClick={() => setDropdownOpen(false)}
                  >
                    View All Overview &rarr;
                  </Link>
                </div>

                <div className={styles.dropdownGrid}>
                  {/* Current Active Courses */}
                  <div className={styles.dropdownCol}>
                    <div className={styles.colHeadingRow}>
                      <span className={styles.colHeading}>Current Term (Active)</span>
                    </div>
                    <div className={styles.courseItemsList}>
                      {currentCourses.map((course) => (
                        <Link
                          key={course.code}
                          to={`/courses/${course.slug}`}
                          className={`${styles.courseItem} ${styles.currentCourseItem}`}
                          onClick={() => setDropdownOpen(false)}
                        >
                          <div className={styles.courseItemTop}>
                            <span className={styles.itemCode}>{course.code}</span>
                            <span className={styles.itemBadge}>Active</span>
                          </div>
                          <span className={styles.itemTitle}>{course.title}</span>
                          <span className={styles.itemUnits}>{course.units} Units &bull; {course.term}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Degree Pathway (All remaining courses, no scrollbar, full content view) */}
                  <div className={styles.dropdownCol}>
                    <div className={styles.colHeadingRow}>
                      <span className={styles.colHeading}>Degree Pathway</span>
                    </div>
                    <div className={styles.courseItemsGrid}>
                      {otherCourses.map((course) => (
                        <Link
                          key={course.code}
                          to={`/courses/${course.slug}`}
                          className={styles.courseItemCompact}
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className={styles.compactCode}>{course.code}</span>
                          <span className={styles.compactTitle}>{course.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.dropdownFooter}>
                  <Link
                    to="/courses/cst-349"
                    className={styles.footerHighlightLink}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span>Jump to CST 349 Industry Expert Interview Report &rarr;</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Quick link to current CST 349 */}
          <Link
            to="/courses/cst-349"
            className={`${styles.navLink} ${location.pathname.includes('cst-349') ? styles.active : ''}`}
          >
            <span>CST 349 (REPORT)</span>
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
            <span>HOME</span>
          </Link>

          {/* Expandable Courses Accordion on Mobile */}
          <div>
            <button
              type="button"
              className={styles.mobileAccordionBtn}
              onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
            >
              <span className={styles.mobileAccordionLeft}>
                ALL COURSES ({csumbCourses.length})
              </span>
              <ChevronDown
                size={16}
                className={`${styles.chevron} ${mobileCoursesOpen ? styles.chevronRotated : ''}`}
              />
            </button>

            {mobileCoursesOpen && (
              <div className={styles.mobileSubList}>
                <Link
                  to="/courses"
                  className={styles.mobileSubItemHighlight}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  &rarr; View All Courses Directory
                </Link>
                {csumbCourses.map((c) => (
                  <Link
                    key={c.code}
                    to={`/courses/${c.slug}`}
                    className={styles.mobileSubItem}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className={styles.mobileSubCode}>{c.code}</span>
                    <span className={styles.mobileSubTitle}>{c.title}</span>
                    {c.status === 'In Progress' && (
                      <span className={styles.mobileSubBadge}>Active</span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/courses/cst-349"
            className={`${styles.mobileNavLink} ${location.pathname.includes('cst-349') ? styles.active : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>CST 349 PROSEMINAR & REPORT</span>
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
