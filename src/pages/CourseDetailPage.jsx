import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Award,
  Layers,
  Sparkles,
  ExternalLink,
  UserCheck,
  Building,
  CalendarDays
} from 'lucide-react';
import { csumbCourses } from '@/data/csumbCourses';
import styles from './CourseDetailPage.module.css';

const CourseDetailPage = () => {
  const { slug } = useParams();

  const currentIndex = csumbCourses.findIndex(
    (c) => c.slug.toLowerCase() === slug?.toLowerCase() || c.code.toLowerCase().replace(' ', '-') === slug?.toLowerCase()
  );

  if (currentIndex === -1) {
    return <Navigate to="/courses" replace />;
  }

  const course = csumbCourses[currentIndex];
  const prevCourse = currentIndex > 0 ? csumbCourses[currentIndex - 1] : null;
  const nextCourse = currentIndex < csumbCourses.length - 1 ? csumbCourses[currentIndex + 1] : null;

  const isCurrent = course.status === 'In Progress';
  const isCompleted = course.status === 'Completed';

  return (
    <div className={styles.container}>
      {/* Top Navigation */}
      <div className={styles.topNav}>
        <Link to="/courses" className={styles.backLink}>
          <ArrowLeft size={16} />
          <span>All ILP Courses</span>
        </Link>

        <div className={styles.coursePagination}>
          {prevCourse && (
            <Link to={`/courses/${prevCourse.slug}`} className={styles.pageBtn} title={prevCourse.title}>
              &larr; {prevCourse.code}
            </Link>
          )}
          {nextCourse && (
            <Link to={`/courses/${nextCourse.slug}`} className={styles.pageBtn} title={nextCourse.title}>
              {nextCourse.code} &rarr;
            </Link>
          )}
        </div>
      </div>

      {/* Main Course Header */}
      <div className={`${styles.headerCard} hud-surface`}>
        <div className={styles.metaRow}>
          <span className="mono-accent">// {course.term}</span>
          <div className={styles.badges}>
            <span className="pill">{course.units} Units</span>
            {isCompleted && (
              <span className="pill">
                <CheckCircle2 size={12} />
                <span>COMPLETED</span>
              </span>
            )}
            {isCurrent && (
              <span className="pill pill-gold">
                <Clock size={12} />
                <span>IN PROGRESS</span>
              </span>
            )}
            {!isCompleted && !isCurrent && (
              <span className="pill pill-csumb">
                <Calendar size={12} />
                <span>PLANNED</span>
              </span>
            )}
          </div>
        </div>

        <h1 className={`serif-header ${styles.courseTitle}`}>
          {course.code}: {course.title}
        </h1>

        <div className={styles.outcomesList}>
          {course.outcomesMatched.map((outcome, idx) => (
            <span key={idx} className={styles.outcomeBadge}>
              <Layers size={13} />
              <span>{outcome}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Course Description Section */}
      <section className={`${styles.contentCard} hud-surface`}>
        <div className={styles.sectionHeader}>
          <BookOpen size={20} className={styles.sectionIcon} />
          <h2 className={styles.sectionHeading}>Official Catalog Course Description</h2>
        </div>
        <p className={styles.descriptionText}>{course.description}</p>
        <div className={styles.sourceTag}>
          Source:{' '}
          <a
            href="https://catalog.csumb.edu/preview_program.php?catoid=11&poid=2405&returnto=591"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.catalogLink}
          >
            CSUMB Academic Catalog &bull; School of Computing & Design <ExternalLink size={12} />
          </a>
        </div>
      </section>

      {/* CST 349 Specific Section: Industry Expert Interview Report */}
      {course.code === 'CST 349' && course.interviewReport && (
        <section className={`${styles.interviewCard} hud-surface`}>
          <div className={styles.interviewHeader}>
            <div className={styles.interviewTitleGroup}>
              <span className="pill pill-gold">RUBRIC REQUIREMENT // 7 PTS</span>
              <h2 className={`serif-header ${styles.interviewTitle}`}>
                Industry Expert Interview Report
              </h2>
              <p className={styles.interviewSubtitle}>
                Conducted as part of CST 349 Computer Science Proseminar to gain insights into industry
                practices, career pathways, and technical competencies.
              </p>
            </div>
            <Award size={36} className={styles.interviewIcon} />
          </div>

          {/* Interview Details Grid */}
          <div className={styles.interviewMetaGrid}>
            <div className={styles.metaItem}>
              <UserCheck size={16} className={styles.metaIcon} />
              <div>
                <span className={styles.metaLabel}>Role / Focus</span>
                <span className={styles.metaValue}>{course.interviewReport.role}</span>
              </div>
            </div>
            <div className={styles.metaItem}>
              <Building size={16} className={styles.metaIcon} />
              <div>
                <span className={styles.metaLabel}>Domain</span>
                <span className={styles.metaValue}>{course.interviewReport.company}</span>
              </div>
            </div>
            <div className={styles.metaItem}>
              <CalendarDays size={16} className={styles.metaIcon} />
              <div>
                <span className={styles.metaLabel}>Interview Term</span>
                <span className={styles.metaValue}>{course.interviewReport.date}</span>
              </div>
            </div>
          </div>

          {/* Key Insights & Takeaways */}
          <div className={styles.takeawaysSection}>
            <h3 className={styles.subHeading}>Key Industry Takeaways & Insights</h3>
            <div className={styles.takeawaysList}>
              {course.interviewReport.keyTakeaways.map((point, index) => (
                <div key={index} className={styles.takeawayCard}>
                  <span className={styles.takeawayNumber}>0{index + 1}</span>
                  <p className={styles.takeawayText}>{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Full Report Narrative */}
          <div className={styles.reportTextSection}>
            <h3 className={styles.subHeading}>Interview Report & Reflection</h3>
            <div className={styles.narrativeBox}>
              <p>{course.interviewReport.fullReportText}</p>
              <p>
                <strong>Connection to Individual Learning Plan (ILP):</strong> This interview affirmed the
                importance of pairing systems infrastructure and cybersecurity proficiency with strong full-stack
                software engineering principles. The insights gained directly inform my selected upper-division
                coursework trajectory—specifically focusing on operating systems (CST 334), computer networks
                (CST 311), and distributed software design (CST 438)—positioning me for strong execution in the
                culminating CST 499 Capstone.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Final Project / Coursework Artifacts Section */}
      <section className={`${styles.projectCard} hud-surface`}>
        <div className={styles.sectionHeader}>
          <FileText size={20} className={styles.sectionIcon} />
          <h2 className={styles.sectionHeading}>Final Course Project & Artifacts</h2>
        </div>

        {course.finalProject ? (
          <div className={styles.projectContent}>
            <div className={styles.projectMain}>
              <div className={styles.projectStatusRow}>
                <h3 className={styles.projectTitle}>{course.finalProject.title}</h3>
                <span className={`pill ${course.finalProject.status === 'Completed' ? '' : 'pill-csumb'}`}>
                  {course.finalProject.status.toUpperCase()}
                </span>
              </div>
              <p className={styles.projectDescription}>{course.finalProject.description}</p>
            </div>

            {/* Artifact Placeholders */}
            {course.finalProject.artifacts && course.finalProject.artifacts.length > 0 ? (
              <div className={styles.artifactsGrid}>
                {course.finalProject.artifacts.map((art, idx) => (
                  <div key={idx} className={styles.artifactBox}>
                    <Sparkles size={16} className={styles.artifactIcon} />
                    <div>
                      <span className={styles.artifactName}>{art.name}</span>
                      <span className={styles.artifactType}>Documented Course Artifact</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.pendingBox}>
                <Clock size={16} />
                <span>
                  Project artifact will be documented and published upon completing this course sequence.
                </span>
              </div>
            )}
          </div>
        ) : (
          <p className={styles.descriptionText}>
            Project requirements and deliverables will be updated as this term commences.
          </p>
        )}
      </section>

      {/* Bottom Pagination */}
      <div className={styles.bottomNav}>
        {prevCourse ? (
          <Link to={`/courses/${prevCourse.slug}`} className="btn-hud btn-secondary">
            <ArrowLeft size={16} />
            <span>Previous: {prevCourse.code}</span>
          </Link>
        ) : <div />}

        {nextCourse ? (
          <Link to={`/courses/${nextCourse.slug}`} className="btn-hud">
            <span>Next: {nextCourse.code}</span>
            <ArrowRight size={16} />
          </Link>
        ) : <div />}
      </div>
    </div>
  );
};

export default CourseDetailPage;
