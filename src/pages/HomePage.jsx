import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { studentProfile } from '@/data/studentProfile';
import { csumbCourses } from '@/data/csumbCourses';
import styles from './HomePage.module.css';

const HomePage = () => {
  const currentCourses = csumbCourses.filter((c) => c.status === 'In Progress');
  const completedCount = csumbCourses.filter((c) => c.status === 'Completed').length;
  const inProgressCount = csumbCourses.filter((c) => c.status === 'In Progress').length;
  const plannedCount = csumbCourses.filter((c) => c.status === 'Planned').length;

  return (
    <div className={styles.homeContainer}>
      {/* Institutional Banner & CSUMB Brand Logo */}
      <section className={`${styles.brandHeader} hud-surface`}>
        <div className={styles.brandRow}>
          <div className={styles.logoContainer}>
            <a
              href={studentProfile.links.csumbBrand}
              target="_blank"
              rel="noopener noreferrer"
              title="CSUMB Official Logo & Brand Guidelines"
              className={styles.logoLink}
            >
              <img
                src="/csumb-logo.svg"
                alt="California State University Monterey Bay Logo"
                className={styles.csumbLogo}
              />
            </a>
          </div>

          <div className={styles.institutionalMeta}>
            <h2 className={styles.schoolName}>{studentProfile.school}</h2>
            <p className={styles.schoolProgram}>
              {studentProfile.college} &bull; {studentProfile.program}
            </p>
          </div>

          <div className={styles.brandRightBadge}>
            <span className="pill pill-csumb">
              CST 499 CAPSTONE READY
            </span>
          </div>
        </div>
      </section>

      {/* Hero: Student Bio & Profile */}
      <section className={`${styles.heroSection} hud-surface`}>
        <div className={styles.heroGrid}>
          <div className={styles.heroInfo}>
            <div className={styles.statusPills}>
              <span className="pill">ILP PORTFOLIO</span>
              <span className="pill pill-gold">FALL TERM 1 ACTIVE</span>
            </div>

            <h1 className={`serif-header serif-glow ${styles.studentName}`}>
              {studentProfile.name}
            </h1>

            <p className={`mono-accent ${styles.studentTitle}`}>
              {studentProfile.title}
            </p>

            <p className={styles.studentBio}>
              {studentProfile.bio}
            </p>

            {/* Quick Action Buttons */}
            <div className={styles.heroActions}>
              <Link to="/courses/cst-349" className="btn-hud">
                <span>View CST 349 & Report</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/courses/cst-300" className="btn-hud btn-secondary">
                <span>View CST 300</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/courses" className="btn-hud btn-secondary">
                <span>All {csumbCourses.length} Courses</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href={studentProfile.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hud btn-secondary"
                title="View Personal Engineering Portfolio"
              >
                <span>WillofHuitzil.com</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Profile Visual Card with Quetzal Graphic */}
          <div className={styles.avatarCard}>
            <div className={styles.avatarFrame}>
              <div className={styles.avatarGraphic}>
                <img
                  src="/ivan-profile.jpg"
                  alt="Ivan Alier-Reyes"
                  className={styles.profileImg}
                />
              </div>
              <div className={styles.profileBadge}>
                <span className={styles.badgeName}>{studentProfile.name}</span>
                <span className={styles.badgeId}>CSUMB Student ID Artifact</span>
                <span className={styles.badgeCohort}>{studentProfile.cohort}</span>
              </div>
            </div>

            {/* Metric counters */}
            <div className={styles.statsRow}>
              <div className={styles.statBox}>
                <span className={styles.statNum}>{completedCount}</span>
                <span className={styles.statLabel}>Completed</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>{inProgressCount}</span>
                <span className={styles.statLabel}>In Progress</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>{plannedCount}</span>
                <span className={styles.statLabel}>Planned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight: Current Courses (CST 300 & CST 349) */}
      {currentCourses.length > 0 && (
        <section className={styles.currentSection} id="current-courses">
          <div className={styles.sectionHeading}>
            <h2 className={`serif-header ${styles.sectionTitle}`}>Current Term Courses (In Progress)</h2>
            <p className={styles.sectionSubtitle}>
              Upper-division courses currently in progress for Fall Term 1. Click any course to view official
              catalog descriptions, coursework objectives, and ongoing deliverables.
            </p>
          </div>

          <div className={styles.currentCoursesGrid}>
            {currentCourses.map((course) => (
              <div key={course.code} className={`${styles.currentCourseCard} hud-surface`}>
                <div className={styles.currentCardTop}>
                  <div className={styles.currentCodeRow}>
                    <span className={styles.currentCourseCode}>{course.code}</span>
                    <span className="pill pill-gold">CURRENT TERM</span>
                  </div>
                  <span className={styles.currentUnits}>{course.units} Units &bull; {course.term}</span>
                </div>

                <h3 className={styles.currentCourseTitle}>{course.title}</h3>
                <p className={styles.currentCourseDesc}>{course.description}</p>

                {/* Special highlight for CST 349 (Interview Report) */}
                {course.code === 'CST 349' && course.interviewReport && (
                  <div className={styles.interviewHighlightBox}>
                    <div>
                      <h4 className={styles.highlightHeading}>Industry Expert Interview Report</h4>
                      <p className={styles.highlightText}>
                        {course.interviewReport.summary}
                      </p>
                    </div>
                  </div>
                )}

                {/* Special highlight for CST 300 (GWAR Portfolio) */}
                {course.code === 'CST 300' && course.finalProject && (
                  <div className={styles.gwarHighlightBox}>
                    <div>
                      <h4 className={styles.highlightHeadingTeal}>GWAR Graduation Writing Requirement</h4>
                      <p className={styles.highlightText}>
                        {course.finalProject.title} — {course.finalProject.description}
                      </p>
                    </div>
                  </div>
                )}

                <div className={styles.currentCardFooter}>
                  <Link to={`/courses/${course.slug}`} className="btn-hud">
                    <span>Explore {course.code} Page</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Program Description & Outcomes (MLOs) */}
      <section className={styles.outcomesSection} id="outcomes">
        <div className={styles.sectionHeading}>
          <h2 className={`serif-header ${styles.sectionTitle}`}>Program Learning Outcomes</h2>
          <p className={styles.sectionSubtitle}>
            Cal State Monterey Bay Computer Science Major Learning Outcomes (MLOs) demonstrated throughout
            the upper-division curriculum and evaluated in the CST 499 Capstone.
          </p>
        </div>

        <div className={styles.outcomesGrid}>
          {studentProfile.programOutcomes.map((mlo) => (
            <div key={mlo.id} className={`${styles.mloCard} hud-surface`}>
              <div className={styles.mloHeader}>
                <span className="pill">{mlo.code}</span>
              </div>
              <h3 className={styles.mloTitle}>{mlo.title}</h3>
              <p className={styles.mloDesc}>{mlo.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Goals: Academic & Career */}
      <section className={styles.goalsSection} id="goals">
        <div className={styles.sectionHeading}>
          <h2 className={`serif-header ${styles.sectionTitle}`}>Academic & Career Goals</h2>
          <p className={styles.sectionSubtitle}>
            Personal and professional milestones defined in CST 349 Proseminar guiding progression through graduation.
          </p>
        </div>

        <div className={styles.goalsGrid}>
          {/* Academic Goals Card */}
          <div className={`${styles.goalCard} hud-surface`}>
            <div className={styles.goalHeader}>
              <h3 className={styles.goalTitle}>Academic Milestones</h3>
            </div>
            <ul className={styles.goalList}>
              {studentProfile.goals.academic.map((goal, idx) => (
                <li key={idx} className={styles.goalItem}>
                  <span className={styles.goalBullet}>&bull;</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Goals Card */}
          <div className={`${styles.goalCard} hud-surface`}>
            <div className={styles.goalHeader}>
              <h3 className={styles.goalTitle}>Professional & Career Objectives</h3>
            </div>
            <ul className={styles.goalList}>
              {studentProfile.goals.career.map((goal, idx) => (
                <li key={idx} className={styles.goalItem}>
                  <span className={styles.goalBulletGold}>&bull;</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Degree Roadmap Teaser */}
      <section className={styles.roadmapTeaser}>
        <div className={styles.teaserCard}>
          <div className={styles.teaserContent}>
            <h3 className={`serif-header ${styles.teaserTitle}`}>
              Complete Upper-Division Degree Roadmap
            </h3>
            <p className={styles.teaserDesc}>
              Every planned course has an established ILP shell ready for continuous documentation, syllabus
              outcomes, and project artifacts through CST 499 Capstone.
            </p>
          </div>
          <Link to="/courses" className="btn-hud">
            <span>Browse All {csumbCourses.length} Course Pages</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
