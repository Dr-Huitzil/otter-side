// src/pages/ResumePage.jsx
import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import styles from './ResumePage.module.css';

const ResumePage = () => {
  return (
    <div className={styles.resumeContainer}>
      <header className={`${styles.resumeHeader} hud-surface`}>
        <div>
          <h1 className="serif-header serif-glow" style={{ fontSize: '2.5rem', margin: '0 0 8px 0' }}>Resume</h1>
          <p className="mono-accent" style={{ margin: 0 }}>Professional Summary & Experience</p>
        </div>
        
        <a 
          href="/Ivan_Alier_Reyes_Resume.pdf" 
          download="Ivan_Alier_Reyes_Resume.pdf" 
          className={styles.downloadBtn}
        >
          <Download size={18} />
          <span>Download PDF</span>
        </a>
      </header>
      
      <div className={`${styles.pdfViewerWrapper} hud-surface`}>
        <object
          data="/Ivan_Alier_Reyes_Resume.pdf"
          type="application/pdf"
          className={styles.pdfViewer}
        >
          <div className={styles.fallbackMsg}>
            <p>It appears you don't have a PDF plugin for this browser.</p>
            <a href="/Ivan_Alier_Reyes_Resume.pdf" download className={styles.fallbackLink}>
              <Download size={16} />
              <span>Click here to download the PDF.</span>
            </a>
            
            <div className={styles.fallbackActions}>
              <p>Or visit my personal portfolio for an interactive resume:</p>
              <a href="https://willofhuitzil.com" target="_blank" rel="noopener noreferrer" className={styles.fallbackLink}>
                <span>willofhuitzil.com</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </object>
      </div>
    </div>
  );
};

export default ResumePage;
