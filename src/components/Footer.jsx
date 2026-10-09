// src/components/Footer.jsx
import React from "react";
import {
  ExternalLink,
  GitBranch,
  Briefcase,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { studentProfile } from "@/data/studentProfile";
import styles from "./Footer.module.css";

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Col 1: Academic context */}
          <div className={styles.col}>
            <div className={styles.brandRow}>
              <span className={styles.otterTitle}>OTTER-SIDE</span>
            </div>
            <p className={styles.desc}>
              Individual Learning Plan (ILP) academic portfolio maintained by{" "}
              <strong className={styles.highlight}>
                {studentProfile.name}
              </strong>
              for the B.S. in Computer Science Online Degree Completion program
              at California State University, Monterey Bay.
            </p>
            <p className={styles.subdesc}>
              Tracking CS Online Course Pathway progression from CST 349
              Proseminar through CST 499 Capstone.
            </p>
          </div>

          {/* Col 2: Institutional & Guidelines Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Academic Guidelines</h4>
            <ul className={styles.linkList}>
              <li>
                <a
                  href="https://csumb.edu/communications/brand-guidelines-templates-and-resources/logo-guidelines/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.extLink}
                >
                  <span>CSUMB Brand & Logo Guidelines</span>
                  <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a
                  href="https://catalog.csumb.edu/preview_program.php?catoid=11&poid=2405&returnto=591"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.extLink}
                >
                  <span>CSUMB Course Catalog (CS Online)</span>
                  <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a
                  href="https://csumb.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.extLink}
                >
                  <span>California State University, Monterey Bay</span>
                  <ExternalLink size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Cross Navigation */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Author & Portfolio</h4>
            <p className={styles.desc}>
              Connect with Ivan's engineering work, security investigations, and
              personal projects:
            </p>
            <div className={styles.socialRow}>
              <a
                href={studentProfile.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                title="Personal Portfolio"
              >
                <Globe size={16} />
                <span>WillofHuitzil.com</span>
              </a>
              <a
                href={studentProfile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                title="GitHub Profile"
              >
                <GitBranch size={16} />
                <span>GitHub (Dr-Huitzil)</span>
              </a>
              <a
                href={studentProfile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                title="LinkedIn Profile"
              >
                <Briefcase size={16} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copy}>
            &copy; {CURRENT_YEAR} {studentProfile.name} &bull; School of
            Computing & Design &bull; CSUMB
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
