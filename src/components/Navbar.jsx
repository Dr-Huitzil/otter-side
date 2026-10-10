// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ExternalLink, ChevronDown, Menu, X } from "lucide-react";
import { csumbCourses } from "@/data/csumbCourses";
import styles from "./Navbar.module.css";

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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setDropdownOpen(false);
      setMobileMenuOpen(false);
    }, 0);
    return () => clearTimeout(timer);
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
      navigate("/courses");
      setDropdownOpen(false);
    } else {
      setDropdownOpen(true);
    }
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const currentCourses = csumbCourses.filter((c) => c.status === "In Progress");
  const plannedCourses = csumbCourses.filter((c) => c.status === "Planned");
  const completedCourses = csumbCourses.filter((c) => c.status === "Completed");

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* Brand / Logo */}
        <Link
          to="/"
          className={styles.brandGroup}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className={styles.logoBadge}>
            <img
              src="/csumb-logo.svg"
              alt="CSUMB Logo"
              className={styles.csumbLogo}
            />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>CSUMB ILP Portfolio</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          <Link
            to="/"
            className={`${styles.navLink} ${isActive("/") && location.pathname === "/" ? styles.active : ""}`}
          >
            <span>HOME</span>
          </Link>

          {/* Courses Dropdown */}
          <div
            className={styles.dropdownWrapper}
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`${styles.navLink} ${styles.dropdownTrigger} ${isActive("/courses") ? styles.active : ""}`}
              onClick={handleTriggerClick}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              <span>COURSES</span>
              <ChevronDown
                size={14}
                className={`${styles.chevron} ${dropdownOpen ? styles.chevronRotated : ""}`}
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className={`${styles.dropdownMenu} hud-surface`}>
                <div className={styles.dropdownHeader}>
                  <span className={styles.dropdownHeadingText}>
                    CS ONLINE COURSE PATHWAY
                  </span>
                  <Link
                    to="/courses"
                    className={styles.allCoursesLink}
                    onClick={() => setDropdownOpen(false)}
                  >
                    View All {csumbCourses.length} Courses &rarr;
                  </Link>
                </div>

                <div className={styles.dropdownGrid}>
                  {/* Left Column: Completed & In Progress */}
                  <div className={styles.dropdownCol}>
                    {/* Completed Courses */}
                    <div className={styles.colHeadingRow}>
                      <span className={styles.colHeading}>Completed</span>
                    </div>
                    <div
                      className={styles.courseItemsList}
                      style={{ marginBottom: "16px" }}
                    >
                      {completedCourses.map((course) => (
                        <Link
                          key={course.code}
                          to={`/courses/${course.slug}`}
                          className={`${styles.courseItem} ${styles.completedCourseItem}`}
                          onClick={() => setDropdownOpen(false)}
                        >
                          <div className={styles.courseItemTop}>
                            <span
                              className={styles.itemCode}
                              style={{ color: "var(--accent-orchid)" }}
                            >
                              {course.code}
                            </span>
                            <span
                              className={styles.itemBadge}
                              style={{
                                background: "rgba(157, 78, 221, 0.2)",
                                color: "var(--accent-orchid)",
                              }}
                            >
                              Completed
                            </span>
                          </div>
                          <span className={styles.itemTitle}>
                            {course.title}
                          </span>
                          <span className={styles.itemUnits}>
                            {course.units} Units &bull; {course.term}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Current Active Courses */}
                    <div className={styles.colHeadingRow}>
                      <span className={styles.colHeading}>
                        In Progress (Fall 2026 Term A)
                      </span>
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
                            <span className={styles.itemCode}>
                              {course.code}
                            </span>
                            <span className={styles.itemBadge}>Active</span>
                          </div>
                          <span className={styles.itemTitle}>
                            {course.title}
                          </span>
                          <span className={styles.itemUnits}>
                            {course.units} Units &bull; {course.term}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Planned Pathway */}
                  <div className={styles.dropdownCol}>
                    <div className={styles.colHeadingRow}>
                      <span className={styles.colHeading}>
                        Planned Pathway ({plannedCourses.length})
                      </span>
                    </div>
                    <div className={styles.courseItemsGrid}>
                      {plannedCourses.map((course) => (
                        <Link
                          key={course.code}
                          to={`/courses/${course.slug}`}
                          className={styles.courseItemCompact}
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className={styles.compactCode}>
                            {course.code}
                          </span>
                          <span className={styles.compactTitle}>
                            {course.title}
                          </span>
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
                    <span>
                      Jump to CST 349 Industry Expert Interview Report &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Quick link to Resume */}
          <Link
            to="/resume"
            className={`${styles.navLink} ${location.pathname.includes("resume") ? styles.active : ""}`}
          >
            <span>RESUME</span>
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
            className={`${styles.mobileNavLink} ${isActive("/") && location.pathname === "/" ? styles.active : ""}`}
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
                ALL PATHWAY COURSES ({csumbCourses.length})
              </span>
              <ChevronDown
                size={16}
                className={`${styles.chevron} ${mobileCoursesOpen ? styles.chevronRotated : ""}`}
              />
            </button>

            {mobileCoursesOpen && (
              <div className={styles.mobileSubList}>
                <Link
                  to="/courses"
                  className={styles.mobileSubItemHighlight}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  &rarr; View All Pathway Courses
                </Link>

                <div
                  style={{
                    padding: "6px 12px 2px",
                    fontFamily: "Fira Code",
                    fontSize: "0.72rem",
                    color: "var(--accent-orchid)",
                  }}
                >
                  COMPLETED COURSES:
                </div>
                {completedCourses.map((c) => (
                  <Link
                    key={c.code}
                    to={`/courses/${c.slug}`}
                    className={styles.mobileSubItem}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span
                      className={styles.mobileSubCode}
                      style={{ color: "var(--accent-orchid)" }}
                    >
                      {c.code}
                    </span>
                    <span className={styles.mobileSubTitle}>{c.title}</span>
                    <span
                      className={styles.mobileSubBadge}
                      style={{
                        background: "rgba(157, 78, 221, 0.2)",
                        color: "var(--accent-orchid)",
                      }}
                    >
                      Completed
                    </span>
                  </Link>
                ))}

                <div
                  style={{
                    padding: "8px 12px 2px",
                    fontFamily: "Fira Code",
                    fontSize: "0.72rem",
                    color: "var(--accent-gold)",
                  }}
                >
                  IN PROGRESS (FALL 2026 TERM A):
                </div>
                {currentCourses.map((c) => (
                  <Link
                    key={c.code}
                    to={`/courses/${c.slug}`}
                    className={styles.mobileSubItem}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className={styles.mobileSubCode}>{c.code}</span>
                    <span className={styles.mobileSubTitle}>{c.title}</span>
                    <span className={styles.mobileSubBadge}>Active</span>
                  </Link>
                ))}

                <div
                  style={{
                    padding: "8px 12px 2px",
                    fontFamily: "Fira Code",
                    fontSize: "0.72rem",
                    color: "var(--accent-teal-bright)",
                  }}
                >
                  PLANNED PATHWAY:
                </div>
                {plannedCourses.map((c) => (
                  <Link
                    key={c.code}
                    to={`/courses/${c.slug}`}
                    className={styles.mobileSubItem}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className={styles.mobileSubCode}>{c.code}</span>
                    <span className={styles.mobileSubTitle}>{c.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/resume"
            className={`${styles.mobileNavLink} ${location.pathname.includes("resume") ? styles.active : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>RESUME</span>
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
