import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Target,
  BookOpen,
  Award,
  ArrowRight,
  ExternalLink,
  Shield,
  Layers,
  Code2,
  Terminal,
  Cpu
} from 'lucide-react';
import { studentProfile } from '@/data/studentProfile';
import { csumbCourses } from '@/data/csumbCourses';
import styles from './HomePage.module.css';

const HomePage = () => {
  const currentCourse = csumbCourses.find((c) => c.code === 'CST 349');
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
            <span className="mono-accent">// ACADEMIC REPOSITORY</span>
            <h2 className={styles.schoolName}>{studentProfile.school}</h2>
            <p className={styles.schoolProgram}>
              {studentProfile.college} &bull; {studentProfile.program}
            </p>
          </div>

          <div className={styles.brandRightBadge}>
            <span className="pill pill-csumb">
              <Shield size={13} />
              <span>CST 499 CAPSTONE READY</span>
            </span>
          </div>
        </div>
      </section>

      {/* Hero: Student Bio & Profile */}
      <section className={`${styles.heroSection} hud-surface`}>
        <div className={styles.heroGrid}>
          <div className={styles.heroInfo}>
            <div className={styles.statusPills}>
              <span className="pill">
                <Terminal size={12} />
                <span>ILP PORTFOLIO</span>
              </span>
              <span className="pill pill-gold">
                <GraduationCap size={12} />
                <span>CST 349 ACTIVE</span>
              </span>
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
              <Link to="/courses" className="btn-hud btn-secondary">
                <BookOpen size={15} />
                <span>Explore All {csumbCourses.length} Courses</span>
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

          {/* Profile Visual Card */}
          <div className={styles.avatarCard}>
            <div className={styles.avatarFrame}>
              <div className={styles.avatarGraphic}>
                <Cpu size={56} className={styles.avatarIcon} />
                <span className={styles.avatarInitials}>IA-R</span>
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

      {/* Program Description & Outcomes (MLOs) */}
      <section className={styles.outcomesSection} id="outcomes">
        <div className={styles.sectionHeading}>
          <span className="mono-accent">// DEGREE SPECIFICATION</span>
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
                <Layers size={18} className={styles.mloIcon} />
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
          <span className="mono-accent">// TRAJECTORY</span>
          <h2 className={`serif-header ${styles.sectionTitle}`}>Academic & Career Goals</h2>
          <p className={styles.sectionSubtitle}>
            Personal and professional milestones defined in CST 349 Proseminar guiding progression through graduation.
          </p>
        </div>

        <div className={styles.goalsGrid}>
          {/* Academic Goals Card */}
          <div className={`${styles.goalCard} hud-surface`}>
            <div className={styles.goalHeader}>
              <GraduationCap size={24} className={styles.goalIconTeal} />
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
              <Target size={24} className={styles.goalIconGold} />
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

      {/* Spotlight: Current Course (CST 349) */}
      {currentCourse && (
        <section className={`${styles.currentCourseSection} hud-surface`}>
          <div className={styles.currentCourseHeader}>
            <div>
              <span className="pill pill-gold">CURRENT TERM HIGHLIGHT</span>
              <h2 className={styles.currentCourseTitle}>
                {currentCourse.code}: {currentCourse.title}
              </h2>
              <p className={styles.currentCourseDesc}>{currentCourse.description}</p>
            </div>
            <Link to="/courses/cst-349" className="btn-hud">
              <span>Read Industry Interview Report</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.interviewHighlights}>
            <div className={styles.highlightBox}>
              <Award size={20} className={styles.highlightIcon} />
              <div>
                <h4 className={styles.highlightHeading}>Industry Expert Interview Report</h4>
                <p className={styles.highlightText}>
                  {currentCourse.interviewReport.summary}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Degree Roadmap Teaser */}
      <section className={styles.roadmapTeaser}>
        <div className={styles.teaserCard}>
          <div className={styles.teaserContent}>
            <span className="mono-accent">// ILP COURSE SEQUENCE</span>
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
