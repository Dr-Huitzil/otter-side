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
  ChevronUp,
  Video,
  Scale,
  KeyRound,
  Radio,
  Sparkles
} from 'lucide-react';
import { csumbCourses } from '@/data/csumbCourses';
import styles from './CourseDetailPage.module.css';

const CourseDetailPage = () => {
  const { slug } = useParams();
  const [interviewRawOpen, setInterviewRawOpen] = useState(false);
  const [interviewCopied, setInterviewCopied] = useState(false);
  const [ethicsRawOpen, setEthicsRawOpen] = useState(false);
  const [ethicsCopied, setEthicsCopied] = useState(false);

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

  const handleCopyInterviewRaw = () => {
    if (course.interviewReport?.rawMarkdown) {
      navigator.clipboard.writeText(course.interviewReport.rawMarkdown);
      setInterviewCopied(true);
      setTimeout(() => setInterviewCopied(false), 2200);
    }
  };

  const handleCopyEthicsRaw = () => {
    if (course.ethicsPaper?.rawMarkdown) {
      navigator.clipboard.writeText(course.ethicsPaper.rawMarkdown);
      setEthicsCopied(true);
      setTimeout(() => setEthicsCopied(false), 2200);
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

      {/* CST 300 Specific Section: Full Ethics Analysis Paper */}
      {course.code === 'CST 300' && course.ethicsPaper && (
        <section id="ethics-paper" className={`${styles.ethicsCard} hud-surface`}>
          {/* Header */}
          <div className={styles.ethicsHeader}>
            <div className={styles.ethicsHeaderLeft}>
              <span className="pill pill-gold">GWAR ETHICS ANALYSIS &bull; CST 300</span>
              <h2 className={`serif-header ${styles.ethicsTitle}`}>
                {course.ethicsPaper.title}
              </h2>
              <div className={styles.ethicsDocSubtitle}>
                {course.ethicsPaper.subtitle}
              </div>
              <p className={styles.ethicsSubtitle}>
                {course.ethicsPaper.summary}
              </p>
            </div>

            <div className={styles.ethicsHeaderRight}>
              <button
                type="button"
                onClick={() => setEthicsRawOpen(!ethicsRawOpen)}
                className={styles.headerToggleBtn}
                title="Toggle raw text viewer"
              >
                <Code size={15} />
                <span>{ethicsRawOpen ? 'Hide Source Paper' : 'View Raw Paper (.txt)'}</span>
                {ethicsRawOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>
          </div>

          {/* Paper Meta Grid */}
          <div className={styles.ethicsMetaGrid}>
            <div className={styles.metaItem}>
              <div className={styles.ethicsMetaIconWrap}>
                <FileText size={18} />
              </div>
              <div>
                <span className={styles.metaLabel}>Author & Candidate</span>
                <span className={styles.metaValue}>{course.ethicsPaper.author}</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.ethicsMetaIconWrap}>
                <BookOpen size={18} />
              </div>
              <div>
                <span className={styles.metaLabel}>Course & Date</span>
                <span className={styles.metaValue}>{course.ethicsPaper.date} &bull; CST 300</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.ethicsMetaIconWrap}>
                <Scale size={18} />
              </div>
              <div>
                <span className={styles.metaLabel}>Ethical Frameworks</span>
                <span className={styles.metaValue}>Act Utilitarianism vs. Deontology</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.ethicsMetaIconWrap}>
                <ShieldCheck size={18} />
              </div>
              <div>
                <span className={styles.metaLabel}>Regulatory Domain</span>
                <span className={styles.metaValue}>HITECH Act & HIPAA Security Rule</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.ethicsMetaIconWrap}>
                <KeyRound size={18} />
              </div>
              <div>
                <span className={styles.metaLabel}>Focal Tension</span>
                <span className={styles.metaValue}>Password Workarounds vs. EHR Audits</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.ethicsMetaIconWrap}>
                <Radio size={18} />
              </div>
              <div>
                <span className={styles.metaLabel}>Proposed Solution</span>
                <span className={styles.metaValue}>RFID Smart Badges + Enterprise SSO</span>
              </div>
            </div>
          </div>

          {/* Jump Navigation Bar */}
          <div className={styles.ethicsJumpNav}>
            <span className={styles.jumpNavLabel}>Jump to Section:</span>
            <a href="#ethics-intro" className={styles.ethicsJumpNavLink}>01. Background</a>
            <a href="#ethics-stakeholders" className={styles.ethicsJumpNavLink}>02. Stakeholder Analysis</a>
            <a href="#ethics-frameworks" className={styles.ethicsJumpNavLink}>03. Utilitarian vs Deontology</a>
            <a href="#ethics-position" className={styles.ethicsJumpNavLink}>04. Student Stance</a>
            <a href="#ethics-recommendation" className={styles.ethicsJumpNavLink}>05. Engineering Solution</a>
            <a href="#ethics-references" className={styles.ethicsJumpNavLink}>06. References</a>
            <button
              type="button"
              onClick={() => setEthicsRawOpen(true)}
              className={styles.ethicsJumpNavLink}
              style={{ background: 'none', cursor: 'pointer' }}
            >
              Raw Paper Text
            </button>
          </div>

          {/* Collapsible Raw Source Drawer */}
          {ethicsRawOpen && (
            <div className={styles.rawSourceDrawer}>
              <div className={styles.rawSourceHeader}>
                <div className={styles.rawSourceMeta}>
                  <Code size={16} color="var(--accent-teal-bright)" />
                  <strong>theDevilsGotYourNumberTonight.txt</strong>
                  <span>&bull;</span>
                  <span>Academic Essay Transcript (Full Submission)</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEthicsRaw}
                  className={styles.copyCodeBtn}
                >
                  {ethicsCopied ? (
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
                <code>{course.ethicsPaper.rawMarkdown}</code>
              </pre>
            </div>
          )}

          {/* Key Insights & Takeaways */}
          <div className={styles.takeawaysSection}>
            <h3 className={styles.subHeading}>Core Ethical Theses & Synthesis Pillars</h3>
            <div className={styles.takeawaysList}>
              {course.ethicsPaper.takeawaysDetailed.map((item, index) => (
                <div key={index} className={styles.takeawayCard}>
                  <div className={styles.takeawayTopRow}>
                    <span className={styles.takeawayNumber}>{item.number}</span>
                    <span className={styles.takeawayTag}>{item.tag}</span>
                  </div>
                  <h4 className={styles.takeawayTitle}>{item.title}</h4>
                  <p className={styles.takeawayText}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Full Formal Paper Sections */}
          <div className={styles.reportPartsContainer}>
            {/* Part One: Introduction / Background */}
            <article id="ethics-intro" className={styles.partCard}>
              <div className={styles.partCardHeader}>
                <div className={styles.partHeaderTitleGroup}>
                  <span className={styles.partNumberBadge}>Section 01</span>
                  <h3 className={styles.partTitle}>Introduction & Background</h3>
                </div>
                <span className={styles.partCategoryBadge}>Sociotechnical Dilemma</span>
              </div>
              <div className={styles.partBody}>
                <p className={styles.partParagraph}>
                  In modern healthcare facilities, digital infrastructure and physical patient care are absolutely linked. The ethical dilemma at the heart of healthcare computing centers on the intense tension between rigid electronic health record authentication protocols and the operational agility demanded of medical personnel during daily clinical care. When emergency physicians, intensive care nurses, and even general healthcare staff teams administer care, they interact with computerized physician order entry queue systems and automated medication dispensing cabinets that require frequent, multistep authentication. System friction such as aggressive session timeouts, mandatory alphanumeric password rotations, and latency prone workstations frequently create workflow bottlenecks. Confronted with the intense demand of patient care and clinical workload, healthcare workers tend to resort to informal workarounds, such as posting shared credentials on sticky notes.
                </p>
                <p className={styles.partParagraph}>
                  The widespread adoption of Electronic Health Records has accelerated over the past two decades by federal digitization mandates like the HITECH Act. This mandate fundamentally modernized clinical documentation yet it also created an attack surface for healthcare networks (Zarour et al., 2026). This issue is important because it forces a conflict between two vital forces: the care of individual patients and the institutional duty to protect electronic Protected Health Information from catastrophic cyber threats. Healthcare organizations are high-value targets for global ransomware cartels. A single compromised endpoint credential can bring an entire hospital system to a standstill, delaying critical patient care (Zarour et al., 2026). However, overly defensive cybersecurity policies that treat clinicians like cyber threats introduces cognitive fatigue and operational paralysis, creating a scenario where defensive policies directly compromise clinic workflows.
                </p>
                <p className={styles.partParagraph}>
                  Historically, early hospital computer systems operated on rudimentary, physical security where terminals were physically isolated within healthcare facilities. As healthcare networks transitioned to cloud-connected and distributed environments, regulated frameworks like HIPAA forced systems administrators to enforce complex Active Directory policies and multi-factor authentication across all endpoints. While these policies were technically born from an IT compliance perspective, they were rarely designed around the physical realities of healthcare facilities and their day-to-day workflow (Koppel et al., 2015). Empirical studies demonstrate that whenever digital security controls feel fragmented, slow, or misaligned with clinical velocity, frontline staff do not submit to friction, they create bypasses to maintain the flow of the healthcare floor (Blijleven et al., 2022; Büscher et al., 2025). Over time what began as isolated shortcuts has evolved into widespread normalization of password workarounds and shadow IT across healthcare facilities.
                </p>
              </div>
            </article>

            {/* Part Two: Stakeholder Analysis */}
            <article id="ethics-stakeholders" className={styles.partCard}>
              <div className={styles.partCardHeader}>
                <div className={styles.partHeaderTitleGroup}>
                  <span className={styles.partNumberBadge}>Section 02</span>
                  <h3 className={styles.partTitle}>Stakeholder Analysis</h3>
                </div>
                <span className={styles.partCategoryBadge}>Institutional Mandates</span>
              </div>
              <div className={styles.partBody}>
                <p className={styles.partParagraph}>
                  The debate over password workarounds divides into two primary stakeholder groups whose core institutional mandates operate in direct opposition to each other: medical staff, such as physicians, care nurses, and general staff directly responsible for patient care and clinical workflow, and IT and Compliance Officers, which make up chief information security officers, network administrators, and HIPAA compliance auditors tasked with safeguarding infrastructure integrity and regulatory posture.
                </p>

                <div className={styles.stakeholdersGrid}>
                  {course.ethicsPaper.stakeholders.map((s) => (
                    <div key={s.id} className={styles.stakeholderCard}>
                      <div className={styles.stakeholderCardHeader}>
                        <div>
                          <h4 className={styles.stakeholderRoleTitle}>{s.title}</h4>
                          <span className={styles.stakeholderFrameworkBadge}>Ethical Framework: {s.framework}</span>
                        </div>
                      </div>

                      <div className={styles.stakeholderField}>
                        <strong>Core Values:</strong>
                        <span>{s.values}</span>
                      </div>

                      <div className={styles.stakeholderField}>
                        <strong>Stakeholder Position:</strong>
                        <span>{s.position}</span>
                      </div>

                      <div className={styles.stakeholderField}>
                        <strong>Substantiating Claims:</strong>
                        <ul className={styles.claimsList}>
                          {s.claims.map((claim, cIdx) => (
                            <li key={cIdx} className={styles.claimItem}>
                              <span className={styles.claimTypePill}>Claim of {claim.type}</span>
                              <span>{claim.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Part Three: Argument Question & Ethical Frameworks */}
            <article id="ethics-frameworks" className={styles.partCard}>
              <div className={styles.partCardHeader}>
                <div className={styles.partHeaderTitleGroup}>
                  <span className={styles.partNumberBadge}>Section 03</span>
                  <h3 className={styles.partTitle}>Argument Question & Ethical Frameworks</h3>
                </div>
                <span className={styles.partCategoryBadge}>Utilitarianism vs. Deontology</span>
              </div>

              {/* Highlighted Question Box */}
              <div className={styles.questionCallout}>
                <div className={styles.questionLabel}>
                  <Sparkles size={16} />
                  <span>Central Ethical Question</span>
                </div>
                <p className={styles.questionText}>
                  "Should the use of insecure password workarounds and shadow IT by clinical staff be considered an ethically justified practice to ensure rapid patient care?"
                </p>
              </div>

              <div className={styles.frameworksGrid}>
                {/* Medical Staff Argument: Utilitarianism */}
                <div className={styles.frameworkCard}>
                  <div className={styles.frameworkHeader}>
                    <h4 className={styles.frameworkName}>Act Utilitarianism</h4>
                    <span className={styles.frameworkPhilosophers}>Jeremy Bentham & John Stuart Mill</span>
                  </div>

                  <p className={styles.partParagraph}>
                    The argument of the medical staff is grounded in Act Utilitarianism, an ethical theory developed systematically by philosophers Jeremy Bentham and John Stuart Mill. Utilitarianism evaluates the morality of any given action strictly through its outcome, holding that an act is morally right if and only it produces the greatest balance of net pleasure, well-being, or harm reduction for the greatest number of affected individuals. In a utilitarian calculus, formal rules and procedural constraints are secondary to the concrete consequences of an action in the physical world.
                  </p>

                  <div className={styles.famousQuoteBlock}>
                    <p className={styles.famousQuoteText}>
                      "Do you want my password or a dead patient?"
                    </p>
                    <span className={styles.famousQuoteSource}>
                      &mdash; Clinical staff interviewed by Koppel et al. (2015)
                    </span>
                  </div>

                  <p className={styles.partParagraph}>
                    <strong>Argument:</strong> Bypassing complex IT logins generates the greatest overall good by ensuring timely medical interventions that save lives or reduce suffering holding a definitive higher utility than preventing a hypothetical network breach. Bedside clinicians argue that the immediate, tangible benefit of administering a critical medication or viewing an urgent lab results right away far outweighs the abstract risk of an unauthorized cyber event. From a utilitarian standpoint, preventable patient harm is an irreversible and catastrophic outcome, whereas network vulnerabilities are manageable risks that IT teams can isolate, audit, and remediate after the fact.
                  </p>

                  <p className={styles.partParagraph}>
                    <strong>Course of Action:</strong> Permit temporary bypass of complex authentication policies during critical clinical workflows to ensure patient treatment is never delayed. Establish formal emergency override options, longer workstation timeout intervals in restricted floor areas, or shared team workstations.
                  </p>

                  <div className={styles.stakesGrid}>
                    <div className={styles.stakesCol}>
                      <span className={`${styles.stakesColTitle} ${styles.stakesGains}`}>Stake Gains:</span>
                      <span>Uninterrupted workflow, rapid emergency intervention, and reduced burnout.</span>
                    </div>
                    <div className={styles.stakesCol}>
                      <span className={`${styles.stakesColTitle} ${styles.stakesRisks}`}>Stake Risks:</span>
                      <span>Disciplinary termination, loss of medical licensing, and federal HIPAA liability.</span>
                    </div>
                  </div>
                </div>

                {/* IT & Compliance Argument: Deontology */}
                <div className={styles.frameworkCard}>
                  <div className={styles.frameworkHeader}>
                    <h4 className={styles.frameworkName}>Deontological Ethics</h4>
                    <span className={styles.frameworkPhilosophers}>Immanuel Kant (Groundwork of the Metaphysics of Morals)</span>
                  </div>

                  <p className={styles.partParagraph}>
                    The position of IT administrators and compliance officers is founded upon Deontological Ethics, most prominently articulated by Immanuel Kant in the <em>Groundwork of the Metaphysics of Morals</em>. Deontology asserts that actions are inherently moral or immoral based on adherence to universal duties and moral laws, completely independent of the empirical consequences they produce. Under Kant’s Categorical Imperative, an individual must act only according to maxims that could be willed as universal laws without contradiction, and persons must always be treated as ends in themselves rather than mere means to an end.
                  </p>

                  <div className={styles.famousQuoteBlock}>
                    <p className={styles.famousQuoteText}>
                      "Act only according to that maxim whereby you can at the same time will that it should become a universal law."
                    </p>
                    <span className={styles.famousQuoteSource}>
                      &mdash; Immanuel Kant, Categorical Imperative
                    </span>
                  </div>

                  <p className={styles.partParagraph}>
                    <strong>Argument:</strong> Applying deontological tenets, IT officers assert that protecting patient privacy and institutional confidentiality is a categorical, non-negotiable duty. When a patient enters a healthcare facility, they entrust their most sensitive medical, genetic, and biographical data to the institution under an implicit universalizable rule of integrity: If every employee treated access controls as an optional whenever convenient, the entire security infrastructure would collapse into chaos (Njenga et al., 2024; Yeng et al., 2022). Furthermore, bypassing authentication treats the collective patient population merely as a means to achieve personal operational convenience, which is a direct violation of Kantian duty.
                  </p>

                  <p className={styles.partParagraph}>
                    <strong>Course of Action:</strong> Uncompromising enforcement of role-based access control (RBAC), multi-factor authentication (MFA), and automated audit logging, combined with progressive disciplinary measures and mandatory remediation.
                  </p>

                  <div className={styles.stakesGrid}>
                    <div className={styles.stakesCol}>
                      <span className={`${styles.stakesColTitle} ${styles.stakesGains}`}>Stake Gains:</span>
                      <span>Verified regulatory compliance with HIPAA mandates and ransomware resilience.</span>
                    </div>
                    <div className={styles.stakesCol}>
                      <span className={`${styles.stakesColTitle} ${styles.stakesRisks}`}>Stake Risks:</span>
                      <span>Alienation of clinical partners, systemic shadow IT, and moral injury from delayed care.</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Part Four: Student Position */}
            <article id="ethics-position" className={styles.partCard}>
              <div className={styles.partCardHeader}>
                <div className={styles.partHeaderTitleGroup}>
                  <span className={styles.partNumberBadge}>Section 04</span>
                  <h3 className={styles.partTitle}>Student Position & Ethical Synthesis</h3>
                </div>
                <span className={styles.partCategoryBadge}>Author Perspective</span>
              </div>

              <div className={styles.studentStanceCard}>
                <div className={styles.studentStanceHeader}>
                  <Scale size={24} color="var(--accent-teal-bright)" />
                  <h4 className={styles.studentStanceTitle}>Author Opinion & Moral Alignment</h4>
                </div>

                <p className={styles.opinionQuote}>
                  <em>"{course.ethicsPaper.studentPosition.opinion}"</em>
                </p>

                <p className={styles.partParagraph}>
                  {course.ethicsPaper.studentPosition.alignment}
                </p>
              </div>

              {/* Recommendation Blueprint */}
              <div id="ethics-recommendation" className={styles.recommendationCard}>
                <div className={styles.recommendationHeader}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Radio size={22} color="var(--accent-gold)" />
                    <h4 className={styles.recommendationTitle}>
                      Engineering Compromise: Dual-Factor RFID Proximity Authentication
                    </h4>
                  </div>
                  <div className={styles.techPillsRow}>
                    <span className={styles.techPill}>Wearable Smart Badges</span>
                    <span className={styles.techPill}>Enterprise SSO</span>
                    <span className={styles.techPill}>Walk-Away Proximity Lock</span>
                    <span className={styles.techPill}>HIPAA Audit Trail</span>
                  </div>
                </div>
                <p className={styles.recommendationText}>
                  {course.ethicsPaper.studentPosition.recommendation}
                </p>
              </div>
            </article>

            {/* Part Five: References */}
            <article id="ethics-references" className={styles.referencesCard}>
              <div className={styles.referencesHeader}>
                <BookOpen size={20} color="var(--accent-teal-bright)" />
                <h3 className={styles.referencesTitle}>Academic References (APA Format)</h3>
              </div>
              <ul className={styles.referencesList}>
                {course.ethicsPaper.references.map((ref, rIdx) => (
                  <li key={rIdx} className={styles.referenceItem}>
                    <strong>{ref.authors}</strong> ({ref.year}). {ref.title}. <em>{ref.journal}</em>.
                    {ref.doi && (
                      <a
                        href={ref.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.doiLink}
                      >
                        <span>{ref.doi}</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      )}

      {/* CST 349 Specific Section: Industry Expert Interview Report */}
      {course.code === 'CST 349' && course.interviewReport && (
        <section id="interview-report" className={`${styles.interviewCard} hud-surface`}>
          {/* Header */}
          <div className={styles.interviewHeader}>
            <div className={styles.interviewHeaderLeft}>
              <span className="pill pill-gold">PROSEMINAR PROJECT &bull; CST 349</span>
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
                  onClick={() => setInterviewRawOpen(!interviewRawOpen)}
                  className={styles.headerToggleBtn}
                  title="Toggle raw source code viewer"
                >
                  <Code size={15} />
                  <span>{interviewRawOpen ? 'Hide Source Code' : 'View Source (.js)'}</span>
                  {interviewRawOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
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
            <a href="#group-project-videos" className={styles.jumpNavLink}>Group Project Video &darr;</a>
            {course.interviewReport.rawMarkdown && (
              <button
                type="button"
                onClick={() => setInterviewRawOpen(true)}
                className={styles.jumpNavLink}
                style={{ background: 'none', cursor: 'pointer' }}
              >
                Raw .js Source
              </button>
            )}
          </div>

          {/* Raw Source Drawer (Collapsible) */}
          {interviewRawOpen && course.interviewReport.rawMarkdown && (
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
                  onClick={handleCopyInterviewRaw}
                  className={styles.copyCodeBtn}
                >
                  {interviewCopied ? (
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

      {/* CST 349 Group Project Video Section */}
      {course.code === 'CST 349' && course.groupProjectVideos && course.groupProjectVideos.length > 0 && (
        <section id="group-project-videos" className={`${styles.videoSection} hud-surface`}>
          <div className={styles.videoSectionHeader}>
            <span className="pill pill-gold">PROSEMINAR PROJECT &bull; CST 349</span>
            <h2 className={`serif-header ${styles.videoSectionTitle}`}>
              Group Project Video: The Evolution and Impact of Smart Glasses
            </h2>
            <p className={styles.videoSectionSubtitle}>
              Collaborative research presentations examining wearable augmented reality hardware, enterprise workflows, and general societal implications. Both presentation components—Industry Perspective and General Overview—are cataloged below.
            </p>
          </div>

          <div className={styles.videosGrid}>
            {course.groupProjectVideos.map((video) => (
              <div key={video.id} className={styles.videoCard}>
                <div className={styles.videoEmbedWrap}>
                  <iframe
                    className={styles.videoIframe}
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className={styles.videoCardBody}>
                  <div className={styles.videoCardMetaRow}>
                    <span className={styles.videoCategoryPill}>{video.category}</span>
                    <span className={styles.videoChannelTag}>
                      <Video size={14} />
                      <span>{video.channel} &bull; YouTube</span>
                    </span>
                  </div>
                  <h3 className={styles.videoCardTitle}>{video.title}</h3>
                  <p className={styles.videoCardDesc}>{video.description}</p>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.videoWatchLink}
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
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
                  const isEthicsPaper = art.name.toLowerCase().includes('ethics') || art.name.toLowerCase().includes('paper');
                  const isVideo = art.name.toLowerCase().includes('video');

                  return (
                    <div key={idx} className={styles.artifactBox}>
                      <div>
                        <span className={styles.artifactName}>{art.name}</span>
                        <span className={styles.artifactType}>
                          {isInterviewReport || isEthicsPaper || isVideo ? 'Core Course Project' : 'Documented Course Artifact'}
                        </span>

                        {isInterviewReport && (
                          <a
                            href="#interview-report"
                            className={styles.artifactJumpLink}
                          >
                            <span>Read Full Report Above &uarr;</span>
                          </a>
                        )}

                        {isEthicsPaper && (
                          <a
                            href="#ethics-paper"
                            className={styles.artifactJumpLink}
                          >
                            <span>Read Full Paper Above &uarr;</span>
                          </a>
                        )}

                        {isVideo && (
                          <a
                            href="#group-project-videos"
                            className={styles.artifactJumpLink}
                          >
                            <span>Watch Presentation Videos Above &uarr;</span>
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
