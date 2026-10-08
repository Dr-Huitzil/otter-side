import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { csumbCourses } from '@/data/csumbCourses';
import styles from './CoursesPage.module.css';

const CoursesPage = () => {
  const [filter, setFilter] = useState('ALL');

  const filteredCourses = csumbCourses.filter((course) => {
    if (filter === 'ALL') return true;
    if (filter === 'COMPLETED') return course.status === 'Completed';
    if (filter === 'IN_PROGRESS') return course.status === 'In Progress';
    if (filter === 'PLANNED') return course.status === 'Planned';
    return true;
  });

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={`serif-header ${styles.title}`}>Individual Learning Plan (ILP) Courses</h1>
        <p className={styles.subtitle}>
          Comprehensive course progression for the Computer Science B.S. program at CSUMB.
          Each page maintains official catalog descriptions, student artifacts, and capstone preparations.
        </p>

        {/* Filter Tabs */}
        <div className={styles.filterBar}>
          <button
            className={`${styles.filterBtn} ${filter === 'ALL' ? styles.activeFilter : ''}`}
            onClick={() => setFilter('ALL')}
          >
            All Courses ({csumbCourses.length})
          </button>
          <button
            className={`${styles.filterBtn} ${filter === 'IN_PROGRESS' ? styles.activeFilter : ''}`}
            onClick={() => setFilter('IN_PROGRESS')}
          >
            Current Term ({csumbCourses.filter((c) => c.status === 'In Progress').length})
          </button>
          <button
            className={`${styles.filterBtn} ${filter === 'COMPLETED' ? styles.activeFilter : ''}`}
            onClick={() => setFilter('COMPLETED')}
          >
            Completed ({csumbCourses.filter((c) => c.status === 'Completed').length})
          </button>
          <button
            className={`${styles.filterBtn} ${filter === 'PLANNED' ? styles.activeFilter : ''}`}
            onClick={() => setFilter('PLANNED')}
          >
            Planned ({csumbCourses.filter((c) => c.status === 'Planned').length})
          </button>
        </div>
      </div>

      {/* Course Grid */}
      <div className={styles.courseGrid}>
        {filteredCourses.map((course) => {
          const isCurrent = course.status === 'In Progress';
          const isCompleted = course.status === 'Completed';

          return (
            <div
              key={course.code}
              className={`${styles.courseCard} hud-surface ${isCurrent ? styles.currentCardHighlight : ''}`}
            >
              <div className={styles.cardTop}>
                <div className={styles.codeGroup}>
                  <span className={styles.courseCode}>{course.code}</span>
                  <span className={styles.courseUnits}>{course.units} Units</span>
                </div>

                <div className={styles.statusGroup}>
                  {isCompleted && (
                    <span className="pill">COMPLETED</span>
                  )}
                  {isCurrent && (
                    <span className="pill pill-gold">IN PROGRESS</span>
                  )}
                  {!isCompleted && !isCurrent && (
                    <span className="pill pill-csumb">PLANNED</span>
                  )}
                </div>
              </div>

              <h2 className={styles.courseTitle}>{course.title}</h2>
              <span className={styles.termLabel}>{course.term}</span>

              <p className={styles.courseDesc}>{course.description}</p>

              <div className={styles.projectSection}>
                <span className={styles.projectLabel}>Final Course Project / Artifact:</span>
                <p className={styles.projectTitle}>
                  {course.finalProject ? course.finalProject.title : 'Pending Course Completion'}
                </p>
              </div>

              <div className={styles.cardFooter}>
                <Link to={`/courses/${course.slug}`} className={styles.cardLink}>
                  <span>Explore Course Page</span>
                  <ArrowRight size={14} />
                </Link>
                {course.code === 'CST 349' && (
                  <span className={styles.specialBadge}>
                    Includes Expert Interview
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesPage;
