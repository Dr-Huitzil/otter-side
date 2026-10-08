import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ExternalLink,
  BookOpen,
  GraduationCap,
  Compass,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Layers
} from 'lucide-react';
import { csumbCourses } from '@/data/csumbCourses';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const dropdownRef = useRef(null);

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
            <Compass size={16} />
            <span>Home</span>
          </Link>

          {/* Courses Dropdown (Hover + Click) */}
          <div
            className={styles.dropdownWrapper}
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={`${styles.navLink} ${styles.dropdownTrigger} ${isActive('/courses') ? styles.active : ''}`}
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              <BookOpen size={16} />
              <span>Courses</span>
              <ChevronDown
                size={14}
                className={`${styles.chevron} ${dropdownOpen ? styles.chevronRotated : ''}`}
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className={`${styles.dropdownMenu} hud-surface`}>
                <div className={styles.dropdownHeader}>
                  <span className="mono-accent">// DEGREE PATHWAY NAVIGATION</span>
                  <Link to="/courses" className={styles.allCoursesLink}>
                    View All Overview &rarr;
                  </Link>
                </div>

                <div className={styles.dropdownGrid}>
                  {/* Current Active Courses */}
                  <div className={styles.dropdownCol}>
                    <div className={styles.colHeadingRow}>
                      <Sparkles size={13} className={styles.sparkleIcon} />
                      <span className={styles.colHeading}>Current Term (Active)</span>
                    </div>
                    <div className={styles.courseItemsList}>
                      {currentCourses.map((course) => (
                        <Link
                          key={course.code}
                          to={`/courses/${course.slug}`}
                          className={`${styles.courseItem} ${styles.currentCourseItem}`}
                        >
                          <div className={styles.courseItemTop}>
                            <span className={styles.itemCode}>{course.code}</span>
                            <span className={styles.itemBadge}>Active</span>
                          </div>
                          <span className={styles.itemTitle}>{course.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Other / Planned Courses */}
                  <div className={styles.dropdownCol}>
                    <div className={styles.colHeadingRow}>
                      <Layers size={13} className={styles.plannedIcon} />
                      <span className={styles.colHeading}>Degree Pathway</span>
                    </div>
                    <div className={styles.courseItemsGrid}>
                      {otherCourses.map((course) => (
                        <Link
                          key={course.code}
                          to={`/courses/${course.slug}`}
                          className={styles.courseItemCompact}
                        >
                          <span className={styles.compactCode}>{course.code}</span>
                          <span className={styles.compactTitle}>{course.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.dropdownFooter}>
                  <Link to="/courses/cst-349" className={styles.footerHighlightLink}>
                    <GraduationCap size={14} />
                    <span>Jump to CST 349 Industry Expert Interview Report</span>
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
            <GraduationCap size={16} />
            <span>CST 349 (Report)</span>
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

          {/* Expandable Courses Accordion on Mobile */}
          <div>
            <button
              type="button"
              className={styles.mobileAccordionBtn}
              onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
            >
              <div className={styles.mobileAccordionLeft}>
                <BookOpen size={18} />
                <span>All Courses ({csumbCourses.length})</span>
              </div>
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
