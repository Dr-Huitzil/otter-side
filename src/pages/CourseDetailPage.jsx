// src/pages/CourseDetailPage.jsx
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ShieldAlert,
  Award,
  UserCheck,
  Briefcase,
  ShieldCheck,
  BookOpen,
  Copy,
  Check,
  Code,
  FileText,
  Compass,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { csumbCourses } from '@/data/csumbCourses';
import styles from './CourseDetailPage.module.css';

const CourseDetailPage = () => {
  const { slug } = useParams();
  const [rawViewOpen, setRawViewOpen] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const handleCopyRaw = () => {
    if (course.interviewReport?.rawMarkdown) {
      navigator.clipboard.writeText(course.interviewReport.rawMarkdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className={styles.container}>
      {/* Top Navigation */}
      <div className={styles.topNav}>
        <Link to="/courses" className={styles.backLink}>
          <ArrowLeft size={16} />
          <span>All Pathway Courses</span>
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
          <span className={styles.termLabel}>{course.term} &bull; {course.category}</span>
          <div className={styles.badges}>
            <span className="pill">{course.units} Units</span>
            {isCompleted && (
              <span className="pill pill-purple">COMPLETED</span>
            )}
            {isCurrent && (
              <span className="pill pill-gold">ACTIVE / IN PROGRESS</span>
            )}
            {!isCompleted && !isCurrent && (
              <span className="pill pill-csumb">PLANNED PATHWAY</span>
            )}
          </div>
        </div>

        <h1 className={`serif-header ${styles.courseTitle}`}>
          {course.code}: {course.title}
        </h1>

        <div className={styles.outcomesList}>
          {course.outcomesMatched.map((outcome, idx) => (
            <span key={idx} className={styles.outcomeBadge}>
              {outcome}
            </span>
          ))}
        </div>
      </div>

      {/* Special Notice: Official Course Substitution (CST 315) */}
      {course.isSubstitution && (
        <div className={styles.substitutionNotice}>
          <ShieldAlert size={24} color="#c77dff" style={{ flexShrink: 0 }} />
          <div>
            <h3 className={styles.noticeTitle}>
              Official Elective Substitution
            </h3>
            <p className={styles.noticeText}>
              {course.substitutionNote} This course replaces the default <em>CST 383: Introduction to Data Science</em> elective requirement to specialize in cybersecurity, systems protection, and threat defense.
            </p>
          </div>
        </div>
      )}

      {/* Special Notice: General Education Fulfillments */}
      {course.geRequirement && (
        <div className={styles.policyNotice}>
          <Award size={20} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
          <div>
            <h4 className={styles.noticeTitleGold}>
              CSUMB General Education Requirement
            </h4>
            <p className={styles.noticeText}>
              This course fulfills the CSUMB <strong>{course.geRequirement}</strong>.
            </p>
          </div>
        </div>
      )}

      {/* Course Description Section */}
      <section className={`${styles.contentCard} hud-surface`}>
        <div className={styles.sectionHeader}>
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
        <section id="interview-report" className={`${styles.interviewCard} hud-surface`}>
          {/* Header */}
          <div className={styles.interviewHeader}>
            <div className={styles.interviewHeaderLeft}>
              <span className="pill pill-gold">PROSEMINAR DELIVERABLE &bull; CST 349</span>
              <h2 className={`serif-header ${styles.interviewTitle}`}>
                {course.interviewReport.title || 'A Thousand Unclimbed Trees'}
              </h2>
              <div className={styles.interviewDocSubtitle}>
                {course.interviewReport.subtitle || 'Industry Expert Interview Report'}
              </div>
              <p className={styles.interviewSubtitle}>
                {course.interviewReport.summary}
              </p>
            </div>

            <div className={styles.interviewHeaderRight}>
              {course.interviewReport.rawMarkdown && (
                <button
                  type="button"
                  onClick={() => setRawViewOpen(!rawViewOpen)}
                  className={styles.headerToggleBtn}
                  title="Toggle raw source code viewer"
                >
                  <Code size={15} />
                  <span>{rawViewOpen ? 'Hide Source Code' : 'View Source (.js)'}</span>
                  {rawViewOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              )}
            </div>
          </div>

          {/* Interview Details Grid */}
          <div className={styles.interviewMetaGrid}>
            <div className={styles.metaItem}>
              <div className={styles.metaIconWrap}>
                <UserCheck size={18} />
              </div>
              <div>
                <span className={styles.metaLabel}>Industry Expert</span>
                <span className={styles.metaValue}>{course.interviewReport.interviewee}</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.metaIconWrap}>
                <Briefcase size={18} />
              </div>
              <div>
                <span className={styles.metaLabel}>Executive Role</span>
                <span className={styles.metaValue}>{course.interviewReport.role}</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.metaIconWrap}>
                <ShieldCheck size={18} />
              </div>
              <div>
                <span className={styles.metaLabel}>Industry Domains</span>
                <span className={styles.metaValue}>{course.interviewReport.company}</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.metaIconWrap}>
                <FileText size={18} />
              </div>
              <div>
                <span className={styles.metaLabel}>Interviewer / Author</span>
                <span className={styles.metaValue}>{course.interviewReport.interviewer || 'Ivan Alier-Reyes'}</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.metaIconWrap}>
                <BookOpen size={18} />
              </div>
              <div>
                <span className={styles.metaLabel}>Course & Term</span>
                <span className={styles.metaValue}>{course.interviewReport.date} &bull; CST 349</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.metaIconWrap}>
                <ShieldAlert size={18} />
              </div>
              <div>
                <span className={styles.metaLabel}>Regulatory Context</span>
                <span className={styles.metaValue}>FDIC, GLBA, & HIPAA Compliance</span>
              </div>
            </div>
          </div>

          {/* Jump Navigation Bar */}
          <div className={styles.reportJumpNav}>
            <span className={styles.jumpNavLabel}>Sections:</span>
            <a href="#part-1" className={styles.jumpNavLink}>01. Introduction</a>
            <a href="#part-2" className={styles.jumpNavLink}>02. Summary of Insights</a>
            <a href="#part-3" className={styles.jumpNavLink}>03. Personal Reflection</a>
            <a href="#part-4" className={styles.jumpNavLink}>04. Future Steps</a>
            <a href="#ilp-connection" className={styles.jumpNavLink}>ILP Pathway Link</a>
            {course.interviewReport.rawMarkdown && (
              <button
                type="button"
                onClick={() => setRawViewOpen(true)}
                className={styles.jumpNavLink}
                style={{ background: 'none', cursor: 'pointer' }}
              >
                Raw .js Source
              </button>
            )}
          </div>

          {/* Raw Source Drawer (Collapsible) */}
          {rawViewOpen && course.interviewReport.rawMarkdown && (
            <div id="raw-source" className={styles.rawSourceDrawer}>
              <div className={styles.rawSourceHeader}>
                <div className={styles.rawSourceMeta}>
                  <Code size={16} color="var(--accent-teal-bright)" />
                  <strong>aThousandUnclimbedTrees.js</strong>
                  <span>&bull;</span>
                  <span>JavaScript ES Module (Export String)</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyRaw}
                  className={styles.copyCodeBtn}
                >
                  {copied ? (
                    <>
                      <Check size={14} color="var(--accent-teal-bright)" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Raw Text</span>
                    </>
                  )}
                </button>
              </div>
              <pre className={styles.rawSourceCode}>
                <code>{course.interviewReport.rawMarkdown}</code>
              </pre>
            </div>
          )}

          {/* Key Insights & Takeaways Cards */}
          <div className={styles.takeawaysSection}>
            <h3 className={styles.subHeading}>Executive Takeaways & Strategic Pillars</h3>
            <div className={styles.takeawaysList}>
              {course.interviewReport.takeawaysDetailed ? (
                course.interviewReport.takeawaysDetailed.map((item, index) => (
                  <div key={index} className={styles.takeawayCard}>
                    <div className={styles.takeawayTopRow}>
                      <span className={styles.takeawayNumber}>{item.number}</span>
                      <span className={styles.takeawayTag}>{item.tag}</span>
                    </div>
                    <h4 className={styles.takeawayTitle}>{item.title}</h4>
                    <p className={styles.takeawayText}>{item.description}</p>
                  </div>
                ))
              ) : (
                course.interviewReport.keyTakeaways.map((point, index) => (
                  <div key={index} className={styles.takeawayCard}>
                    <span className={styles.takeawayNumber}>0{index + 1}</span>
                    <p className={styles.takeawayText}>{point}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Full Formal Report Multi-Part Document */}
          <div className={styles.reportPartsContainer}>
            {/* Part One: Introduction */}
            <article id="part-1" className={styles.partCard}>
              <div className={styles.partCardHeader}>
                <div className={styles.partHeaderTitleGroup}>
                  <span className={styles.partNumberBadge}>Part One</span>
                  <h3 className={styles.partTitle}>Introduction & Subject Selection</h3>
                </div>
                <span className={styles.partCategoryBadge}>Context & Background</span>
              </div>
              <div className={styles.partBody}>
                <p className={styles.partParagraph}>
                  For this assignment, I conducted an in-depth interview with <strong>Vicente Magaña</strong>, an IT executive. Prior to his current executive role in banking, he served as the IT Manager at <strong>Clinica de Salud del Valle de Salinas</strong>, where he built and supervised our information technology infrastructure and team.
                </p>
                <p className={styles.partParagraph}>
                  I specifically selected him because of his unique cross-industry career path spanning agricultural software development, healthcare IT management, and community banking cybersecurity. As a CSUMB student pursuing a bachelor’s degree in software engineering while currently working as an IT technician in healthcare, I wanted to learn from someone who has successfully bridged the gap between hands-on systems troubleshooting and executive technology leadership. His direct experience navigating strict federal regulatory environments made him the ideal subject for exploring industry trends, cybersecurity realities, and long-term career growth.
                </p>
              </div>
            </article>

            {/* Part Two: Summary of Insights */}
            <article id="part-2" className={styles.partCard}>
              <div className={styles.partCardHeader}>
                <div className={styles.partHeaderTitleGroup}>
                  <span className={styles.partNumberBadge}>Part Two</span>
                  <h3 className={styles.partTitle}>Summary of Insights</h3>
                </div>
                <span className={styles.partCategoryBadge}>Industry Analysis</span>
              </div>
              <p className={styles.partIntro}>
                Our dialogue examined key technical realities, regulatory environments, and leadership philosophies across multiple computing sectors:
              </p>

              <div className={styles.insightsGrid}>
                {/* Subsection 1 */}
                <div className={styles.insightCard}>
                  <span className={styles.insightCardTag}>Trajectory & Foundations</span>
                  <h4 className={styles.insightCardTitle}>Career Path: Prioritizing Experience Over Titles</h4>
                  <p className={styles.insightCardBody}>
                    Vicente initially planned to study construction management before pivoting to computer systems and electronics. His career progressed from refurbishing hardware to spending eight years programming custom applications for an agricultural firm. He then transitioned into banking IT at First Capital Bank as their sole technician. Vicente managed the bank's entire IT infrastructure solo for six months, successfully passing rigorous California state and FDIC federal audits.
                  </p>
                  <p className={styles.insightCardBody}>
                    His primary advice to aspiring professionals is to <strong>prioritize deep, hands-on experience over premature titles or quick salary bumps</strong>. He emphasized that titles naturally follow proven competence, whereas chasing titles without foundational competence leaves engineers vulnerable, especially when organizations face crises or technological disruption.
                  </p>
                </div>

                {/* Subsection 2 */}
                <div className={styles.insightCard}>
                  <span className={styles.insightCardTag}>Security Architecture</span>
                  <h4 className={styles.insightCardTitle}>Technical Challenges & Industry Disparities (Banking vs. Healthcare)</h4>
                  <p className={styles.insightCardBody}>
                    A major focus of our conversation was the stark contrast between cybersecurity in banking and healthcare. Banking operates under non-negotiable federal mandates (FDIC, GLBA), enforcing strict controls and zero-tolerance policies. He shared how he ran unannounced phishing simulations in banking, even taking down the CEO's workstation when a simulated malicious link was clicked to establish real-world accountability.
                  </p>
                  <p className={styles.insightCardBody}>
                    In contrast, healthcare often contends with operational friction, such as clinical staff writing passwords on sticky notes to prioritize patient throughput. He noted that while banking compliance initially felt restrictive, his time in healthcare proved why <strong>rigorous regulatory guardrails and proactive end-user training are essential</strong>.
                  </p>
                </div>

                {/* Subsection 3 */}
                <div className={styles.insightCard}>
                  <span className={styles.insightCardTag}>Emerging Tech & Automation</span>
                  <h4 className={styles.insightCardTitle}>Artificial Intelligence and Industry Trends</h4>
                  <p className={styles.insightCardBody}>
                    Regarding AI adoption (such as Microsoft Copilot and automated network routing), he cautioned against blind reliance. In his view, professionals who rush for rapid titles without solid fundamentals will struggle because they lack the technical judgment required to challenge, audit, and verify AI outputs.
                  </p>
                  <p className={styles.insightCardBody}>
                    The future belongs to technologists who can <strong>oversee, question, and architect AI-augmented workflows</strong> rather than passive consumers of automated suggestions.
                  </p>
                </div>

                {/* Subsection 4 */}
                <div className={styles.insightCard}>
                  <span className={styles.insightCardTag}>Executive Leadership</span>
                  <h4 className={styles.insightCardTitle}>Executive Attributes for Success</h4>
                  <p className={styles.insightCardBody}>
                    When asked what skills are most critical for managerial success, he highlighted <strong>patience and disciplined daily learning</strong>. Leadership requires navigating diverse personalities, institutional resistance, and complex compliance cycles.
                  </p>
                  <p className={styles.insightCardBody}>
                    Technology leaders must dedicate time every day to staying current with emerging trends rather than allowing administrative tasks to erode their technical edge.
                  </p>
                </div>
              </div>
            </article>

            {/* Part Three: Personal Reflection */}
            <article id="part-3" className={styles.partCard}>
              <div className={styles.partCardHeader}>
                <div className={styles.partHeaderTitleGroup}>
                  <span className={styles.partNumberBadge}>Part Three</span>
                  <h3 className={styles.partTitle}>Personal Reflection</h3>
                </div>
                <span className={styles.partCategoryBadge}>Student Perspective</span>
              </div>
              <div className={styles.partBody}>
                <p className={styles.partParagraph}>
                  This interview deeply reshaped my perspective on my academic and career trajectory. In school, discussions around software engineering and AI often focus on theoretical architectures and automated tooling. Hearing how these technologies actually collide with corporate culture, regulatory scrutiny, and human behavior was an eye-opening reality check.
                </p>
                <p className={styles.partParagraph}>
                  His philosophy of <em>"experience over titles"</em> resonated with me immediately. As a student balancing full-time IT work with online coursework, it can be tempting to look for shortcuts or feel impatient about career progression. However, understanding how he built his reputation by mastering systems from the ground up, embracing troubleshooting, and taking ownership during high-stakes audits reminded me that <strong>genuine technical authority cannot be rushed</strong>. Examining the security disparities between banking and healthcare reinforced my desire to specialize in cybersecurity, where disciplined standards and strategic thinking are paramount.
                </p>
              </div>
            </article>

            {/* Part Four: Future Steps */}
            <article id="part-4" className={styles.partCard}>
              <div className={styles.partCardHeader}>
                <div className={styles.partHeaderTitleGroup}>
                  <span className={styles.partNumberBadge}>Part Four</span>
                  <h3 className={styles.partTitle}>Future Steps</h3>
                </div>
                <span className={styles.partCategoryBadge}>Actionable Milestones</span>
              </div>
              <p className={styles.partIntro}>
                To translate these insights into concrete academic and professional growth, I have outlined three actionable steps:
              </p>

              <div className={styles.actionsGrid}>
                <div className={styles.actionCard}>
                  <div className={styles.actionCardTop}>
                    <span className={styles.actionStepNum}>ACTION 01</span>
                    <span className={styles.actionAreaTag}>Healthcare IT Workplace</span>
                  </div>
                  <h4 className={styles.actionTitle}>Active Mentorship</h4>
                  <p className={styles.actionDesc}>
                    At my current workplace, I will actively pair with senior colleagues to absorb institutional knowledge regarding system administration, network configurations, and legacy infrastructure before senior team members retire.
                  </p>
                </div>

                <div className={styles.actionCard}>
                  <div className={styles.actionCardTop}>
                    <span className={styles.actionStepNum}>ACTION 02</span>
                    <span className={styles.actionAreaTag}>Professional Operations</span>
                  </div>
                  <h4 className={styles.actionTitle}>Elevating Security Standards in Daily Workflows</h4>
                  <p className={styles.actionDesc}>
                    Even within a more flexible operational environment, I will adopt enterprise-grade security habits in my daily responsibilities. This includes eliminating credential shortcuts, educating end users with empathy, and developing automated audit checks for clinical workstations.
                  </p>
                </div>

                <div className={styles.actionCard}>
                  <div className={styles.actionCardTop}>
                    <span className={styles.actionStepNum}>ACTION 03</span>
                    <span className={styles.actionAreaTag}>CSUMB Degree Pathway</span>
                  </div>
                  <h4 className={styles.actionTitle}>Rigorous Auditing in Academic Coursework</h4>
                  <p className={styles.actionDesc}>
                    In my CSUMB Software Engineering courses, I will treat AI coding assistants not as crutches, but as tools that demand thorough auditing, unit testing, and edge-case validation, ensuring I build the fundamental troubleshooting skills necessary for senior engineering roles.
                  </p>
                </div>
              </div>
            </article>

            {/* Connection to Individual Learning Plan (ILP) */}
            <div id="ilp-connection" className={styles.ilpCallout}>
              <div className={styles.ilpCalloutHeader}>
                <Compass size={22} color="#7bb5d7" />
                <h3 className={styles.ilpCalloutTitle}>
                  Direct Connection to Individual Learning Plan (ILP)
                </h3>
              </div>
              <p className={styles.ilpCalloutText}>
                {course.interviewReport.ilpConnection || (
                  `This interview affirmed the importance of pairing systems infrastructure and cybersecurity proficiency with strong full-stack software engineering principles. The insights gained directly inform my selected upper-division coursework trajectory—specifically focusing on operating systems (CST 334), computer networks (CST 311), and distributed software design (CST 438)—positioning me for strong execution in the culminating CST 499 Capstone.`
                )}
              </p>
              <div className={styles.ilpCoursesRow}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-sans-slate)', marginRight: '6px' }}>
                  Informed Upper-Division Pathway:
                </span>
                <Link to="/courses/cst-334" className={styles.ilpCoursePill}>CST 334: Operating Systems</Link>
                <Link to="/courses/cst-311" className={styles.ilpCoursePill}>CST 311: Computer Networks</Link>
                <Link to="/courses/cst-315" className={styles.ilpCoursePill}>CST 315: Cybersecurity</Link>
                <Link to="/courses/cst-438" className={styles.ilpCoursePill}>CST 438: Software Engineering</Link>
                <Link to="/courses/cst-499" className={styles.ilpCoursePill}>CST 499: Capstone</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final Project / Coursework Artifacts Section */}
      {course.finalProject && (
        <section className={`${styles.projectCard} hud-surface`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>Final Course Project & Artifacts</h2>
          </div>

          <div className={styles.projectContent}>
            <div className={styles.projectMain}>
              <div className={styles.projectStatusRow}>
                <h3 className={styles.projectTitle}>{course.finalProject.title}</h3>
                <span className={`pill ${course.finalProject.status === 'Completed' ? 'pill-purple' : 'pill-gold'}`}>
                  {course.finalProject.status.toUpperCase()}
                </span>
              </div>
              <p className={styles.projectDescription}>{course.finalProject.description}</p>
            </div>

            {/* Artifacts */}
            {course.finalProject.artifacts && course.finalProject.artifacts.length > 0 ? (
              <div className={styles.artifactsGrid}>
                {course.finalProject.artifacts.map((art, idx) => {
                  const isInterviewReport = art.name.toLowerCase().includes('interview');
                  return (
                    <div key={idx} className={styles.artifactBox}>
                      <div>
                        <span className={styles.artifactName}>{art.name}</span>
                        <span className={styles.artifactType}>
                          {isInterviewReport ? 'Primary Course Deliverable' : 'Documented Course Artifact'}
                        </span>
                        {isInterviewReport && (
                          <a
                            href="#interview-report"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              marginTop: '8px',
                              fontSize: '0.74rem',
                              fontFamily: "'Fira Code', monospace",
                              color: 'var(--accent-gold)'
                            }}
                          >
                            <span>Read Full Report Above &uarr;</span>
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className={styles.pendingBox}>
                <span>
                  Project artifact will be documented and published upon completing this course sequence.
                </span>
              </div>
            )}
          </div>
        </section>
      )}

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
