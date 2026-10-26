// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Briefcase, Mail, Globe } from "lucide-react";
import { studentProfile } from "@/data/studentProfile";
import { csumbCourses } from "@/data/csumbCourses";
import styles from "./HomePage.module.css";

const HomePage = () => {
  // Filter courses for CS Online pathway
  const currentCourses = csumbCourses.filter((c) => c.status === "In Progress");
  const plannedCourses = csumbCourses.filter((c) => c.status === "Planned");
  const completedCourses = csumbCourses.filter((c) => c.status === "Completed");

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
        </div>
      </section>

      {/* Hero: Student Bio & Profile */}
      <section className={`${styles.heroSection} hud-surface`}>
        <div className={styles.heroGrid}>
          <div className={styles.heroInfo}>
            <h1 className={`serif-header serif-glow ${styles.studentName}`}>
              {studentProfile.name}
            </h1>

            <p className={`mono-accent ${styles.studentTitle}`}>
              {studentProfile.title}
            </p>

            <p className={styles.studentBio}>{studentProfile.bio}</p>

          </div>

          {/* Profile Visual Card */}
          <div className={styles.avatarCard}>
            <div className={styles.avatarFrame}>
              <div className={styles.avatarGraphic}>
                <img
                  src="/ivan-profile.jpg"
                  alt="Ivan Alier-Reyes"
                  width={140}
                  height={140}
                  className={styles.profileImg}
                  fetchPriority="high"
                />
              </div>
              <div className={styles.profileBadge}>
                <span className={styles.badgeName}>{studentProfile.name}</span>
              </div>
            </div>

            {/* Social & Contact Links */}
            <div className={styles.socialLinksList}>
              {studentProfile.links.linkedin && (
                <a href={studentProfile.links.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLinkItem} aria-label="LinkedIn">
                  <Briefcase size={16} />
                  <span>LinkedIn</span>
                </a>
              )}
              {studentProfile.links.github && (
                <a href={studentProfile.links.github} target="_blank" rel="noopener noreferrer" className={styles.socialLinkItem} aria-label="GitHub">
                  <Code size={16} />
                  <span>GitHub</span>
                </a>
              )}
              {studentProfile.email && (
                <a href={`mailto:${studentProfile.email}`} className={styles.socialLinkItem} aria-label="Email">
                  <Mail size={16} />
                  <span>Email</span>
                </a>
              )}
              {studentProfile.links.portfolio && (
                <a href={studentProfile.links.portfolio} target="_blank" rel="noopener noreferrer" className={styles.socialLinkItem} aria-label="Portfolio">
                  <Globe size={16} />
                  <span>Portfolio</span>
                </a>
              )}
            </div>

            {/* Metric counters for CS Online Pathway */}
            <div className={styles.statsRow}>
              <div className={styles.statBox}>
                <span className={styles.statNum}>
                  {completedCourses.length}
                </span>
                <span className={styles.statLabel}>Completed</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>{currentCourses.length}</span>
                <span className={styles.statLabel}>In Progress</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>{plannedCourses.length}</span>
                <span className={styles.statLabel}>Planned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight: Current Course (Fall 2026 - Term B) */}
      <section className={styles.currentSection} id="current-courses">
        <div className={styles.sectionHeading}>
          <h2 className={`serif-header ${styles.sectionTitle}`}>
            Current Term Course (Fall 2026 - Term B)
          </h2>
          <p className={styles.sectionSubtitle}>
            Currently active in the 4-unit systems architecture, concurrency, and memory management sequence (CST 334: Operating Systems) for Fall 2026 Term B.
          </p>
        </div>

        <div className={styles.currentCoursesGrid}>
          {currentCourses.map((course) => (
            <div
              key={course.code}
              className={`${styles.currentCourseCard} hud-surface`}
            >
              <div className={styles.currentCardTop}>
                <div className={styles.currentCodeRow}>
                  <span className={styles.currentCourseCode}>
                    {course.code}
                  </span>
                  <span className="pill pill-gold">{course.term} &bull; ACTIVE</span>
                </div>
                <span className={styles.currentUnits}>
                  {course.units} Units
                </span>
              </div>

              <h3 className={styles.currentCourseTitle}>{course.title}</h3>
              <p className={styles.currentCourseDesc}>{course.description}</p>

              {course.finalProject && (
                <div className={styles.gwarHighlightBox}>
                  <div>
                    <h4 className={styles.highlightHeadingTeal}>
                      Term B Milestone Project
                    </h4>
                    <p className={styles.highlightText}>
                      <strong>{course.finalProject.title}:</strong> {course.finalProject.description}
                    </p>
                  </div>
                </div>
              )}

              <div className={styles.currentCardFooter}>
                <Link to={`/courses/${course.slug}`} className="btn-hud">
                  <span>Explore {course.code} Course Page</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase: Recently Completed Term Projects (Fall 2026 - Term A) */}
      <section className={styles.recentProjectsSection} id="recent-projects">
        <div className={styles.sectionHeading}>
          <h2 className={`serif-header ${styles.sectionTitle}`}>
            Recently Completed Projects (Fall 2026 - Term A)
          </h2>
          <p className={styles.sectionSubtitle}>
            Key academic milestones and coursework projects completed in Fall 2026 Term A, fulfilling graduation writing and proseminar requirements.
          </p>
        </div>

        <div className={styles.completedProjectsGrid}>
          {/* CST 300 Completed Card */}
          <div className={`${styles.completedProjectCard} hud-surface`}>
            <div className={styles.completedProjectHeaderRow}>
              <span className={styles.completedProjectCodePill}>CST 300 &bull; GWAR COMPLETED</span>
              <span className="pill pill-purple">COMPLETED</span>
            </div>
            <h3 className={styles.completedProjectTitle}>
              "The Devil’s Got Your Number Tonight: Are Insecure Password Workarounds Ethically Justified?"
            </h3>
            <p className={styles.completedProjectDesc}>
              Academic ethics synthesis evaluating the tension between rigid EHR authentication protocols and emergency clinical care under Act Utilitarianism and Deontological Ethics, proposing RFID smart badges + SSO.
            </p>
            <div className={styles.currentCardFooter}>
              <Link to="/courses/cst-300#ethics-paper" className="btn-hud">
                <span>Read Full Ethics Paper</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* CST 349 Completed Card */}
          <div className={`${styles.completedProjectCard} hud-surface`}>
            <div className={styles.completedProjectHeaderRow}>
              <span className={styles.completedProjectCodePill}>CST 349 &bull; PROSEMINAR COMPLETED</span>
              <span className="pill pill-purple">COMPLETED</span>
            </div>
            <h3 className={styles.completedProjectTitle}>
              Industry Expert Interview Report &amp; Smart Glasses Group Videos
            </h3>
            <p className={styles.completedProjectDesc}>
              Comprehensive informational interview with IT Executive Vicente Magaña (<em>"A Thousand Unclimbed Trees"</em>) paired with a 2-part research presentation series on <em>The Evolution and Impact of Smart Glasses</em>.
            </p>
            <div className={styles.currentCardFooter}>
              <Link to="/courses/cst-349" className="btn-hud">
                <span>Explore Report &amp; Videos</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Description & Outcomes (MLOs) */}
      <section className={styles.outcomesSection} id="outcomes">
        <div className={styles.sectionHeading}>
          <h2 className={`serif-header ${styles.sectionTitle}`}>
            Major Learning Outcomes (MLOs)
          </h2>
          <p className={styles.sectionSubtitle}>
            Cal State Monterey Bay Computer Science Major Learning Outcomes
            (MLOs) demonstrated throughout the CS Online Pathway curriculum and
            evaluated in the CST 499 Capstone.
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
          <h2 className={`serif-header ${styles.sectionTitle}`}>
            Academic & Career Goals
          </h2>
          <p className={styles.sectionSubtitle}>
            Personal and professional milestones defined in CST 349 Proseminar
            guiding progression through graduation.
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
              <h3 className={styles.goalTitle}>
                Professional & Career Objectives
              </h3>
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
              CS Online Course Pathway Roadmap ({csumbCourses.length} Courses)
            </h3>
            <p className={styles.teaserDesc}>
              Every course in the official CS Online pathway has an established
              ILP profile ready for continuous documentation, syllabus outcomes,
              and coursework projects through the CST 499 Capstone.
            </p>
          </div>
          <Link to="/courses" className="btn-hud">
            <span>Browse All {csumbCourses.length} Pathway Courses</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
