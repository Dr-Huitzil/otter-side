// src/pages/CoursesPage.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ShieldCheck } from 'lucide-react';
import { csumbCourses } from '@/data/csumbCourses';
import styles from './CoursesPage.module.css';

const CoursesPage = () => {
  const [filter, setFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCount = useMemo(() => csumbCourses.filter((c) => c.status === 'In Progress').length, []);
  const plannedCount = useMemo(() => csumbCourses.filter((c) => c.status === 'Planned').length, []);
  const completedCount = useMemo(() => csumbCourses.filter((c) => c.status === 'Completed').length, []);
  const totalUnits = useMemo(() => csumbCourses.reduce((sum, c) => sum + c.units, 0), []);

  const filteredCourses = useMemo(() => {
    return csumbCourses.filter((course) => {
      // Status filter
      if (filter === 'IN_PROGRESS' && course.status !== 'In Progress') return false;
      if (filter === 'PLANNED' && course.status !== 'Planned') return false;
      if (filter === 'COMPLETED' && course.status !== 'Completed') return false;

      // Text search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesCode = course.code.toLowerCase().includes(query);
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesTerm = course.term.toLowerCase().includes(query);
        const matchesDesc = course.description.toLowerCase().includes(query);
        if (!matchesCode && !matchesTitle && !matchesTerm && !matchesDesc) return false;
      }

      return true;
    });
  }, [filter, searchQuery]);

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className="statusPills" style={{ marginBottom: '8px' }}>
          <span className="pill">CS ONLINE PATHWAY</span>
          <span className="pill pill-csumb">{totalUnits} TOTAL UNITS</span>
        </div>

        <h1 className={`serif-header ${styles.title}`}>CS Online Course Pathway</h1>
        <p className={styles.subtitle}>
          Official degree pathway for Ivan Alier-Reyes in the Computer Science Online B.S. program at CSUMB.
          Tracking all 15 courses from prior terms through the CST 499 Capstone.
        </p>

        {/* Search & Filters */}
        <div className={styles.controlsBar}>
          <div className={styles.searchBox}>
            <Search size={16} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by course code, title, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterBar}>
            <button
              className={`${styles.filterBtn} ${filter === 'ALL' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('ALL')}
            >
              All Courses ({csumbCourses.length})
            </button>
            <button
              className={`${styles.filterBtn} ${filter === 'COMPLETED' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('COMPLETED')}
            >
              Completed ({completedCount})
            </button>
            <button
              className={`${styles.filterBtn} ${filter === 'IN_PROGRESS' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('IN_PROGRESS')}
            >
              In Progress ({currentCount})
            </button>
            <button
              className={`${styles.filterBtn} ${filter === 'PLANNED' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('PLANNED')}
            >
              Planned ({plannedCount})
            </button>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length === 0 ? (
        <div className={styles.noResults}>
          <p>No courses matched your current filter or search criteria.</p>
        </div>
      ) : (
        <div className={styles.courseGrid}>
          {filteredCourses.map((course) => {
            const isCurrent = course.status === 'In Progress';
            const isCompleted = course.status === 'Completed';

            return (
              <div
                key={course.code}
                className={`${styles.courseCard} hud-surface ${isCurrent ? styles.currentCardHighlight : ''} ${isCompleted ? styles.completedCardHighlight : ''}`}
              >
                <div className={styles.cardTop}>
                  <div className={styles.codeGroup}>
                    <span className={styles.courseCode}>{course.code}</span>
                    <span className={styles.courseUnits}>{course.units} Units</span>
                  </div>

                  <div className={styles.badgesGroup}>
                    {isCompleted && (
                      <span className="pill pill-purple">COMPLETED</span>
                    )}
                    {isCurrent && (
                      <span className="pill pill-gold">ACTIVE</span>
                    )}
                    {!isCompleted && !isCurrent && (
                      <span className="pill pill-csumb">PLANNED</span>
                    )}
                  </div>
                </div>

                <div className={styles.metaRow}>
                  <span className={styles.termLabel}>{course.term}</span>
                  <span className={styles.categoryTag}>CS Online</span>
                </div>

                <h2 className={styles.courseTitle}>{course.title}</h2>
                <p className={styles.courseDesc}>{course.description}</p>

                {/* Tags row */}
                <div className={styles.tagRow}>
                  {course.geRequirement && (
                    <span className={styles.pillGe}>
                      GE: {course.geRequirement.split(':')[0]}
                    </span>
                  )}
                  {course.isSubstitution && (
                    <span className={styles.pillSub}>
                      ⭐ Replaces Data Science
                    </span>
                  )}
                  {course.gradeRequirement && (
                    <span className={styles.pillGe} style={{ color: 'var(--accent-gold)' }}>
                      Grade C- Required
                    </span>
                  )}
                </div>

                {course.finalProject && (
                  <div className={styles.projectSection}>
                    <span className={styles.projectLabel}>Deliverable / Artifact:</span>
                    <p className={styles.projectTitle}>
                      {course.finalProject.title}
                    </p>
                  </div>
                )}

                <div className={styles.cardFooter}>
                  <Link to={`/courses/${course.slug}`} className={styles.cardLink}>
                    <span>Course Profile</span>
                    <ArrowRight size={14} />
                  </Link>

                  {course.code === 'CST 349' && course.interviewReport && (
                    <span className={styles.specialBadge}>
                      Includes Expert Interview
                    </span>
                  )}
                  {course.code === 'CST 300' && (
                    <span className={styles.specialBadge}>
                      GWAR Portfolio
                    </span>
                  )}
                  {course.isSubstitution && (
                    <span className={styles.specialBadge} style={{ color: '#c77dff' }}>
                      <ShieldCheck size={13} style={{ display: 'inline', marginRight: 4 }} />
                      Advisor Approved
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
