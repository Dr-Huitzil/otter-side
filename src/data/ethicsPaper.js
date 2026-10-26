// src/data/ethicsPaper.js

/**
 * Raw text of the CST 300 Ethics Paper
 */
export const ethicsPaperRaw = `
Ivan Alier-Reyes
CST300 Writing in Computing & Design
17 October 2026

The Devil’s Got Your Number Tonight: Are Insecure Password Workarounds Ethically Justified?

Introduction/Background
In modern healthcare facilities, digital infrastructure and physical patient care are absolutely linked. The ethical dilemma at the heart of healthcare computing centers on the intense tension between rigid electronic health record authentication protocols and the operational agility demanded of medical personnel during daily clinical care. When emergency physicians, intensive care nurses, and even general healthcare staff teams administer care, they interact with computerized physician order entry queue systems and automated medication dispensing cabinets that require frequent, multistep authentication. System friction such as aggressive session timeouts, mandatory alphanumeric password rotations, and latency prone workstations frequently create workflow bottlenecks. Confronted with the intense demand of patient care and clinical workload, healthcare workers tend to resort to informal workarounds, such as posting shared credentials on sticky notes.

The widespread adoption of Electronic Health Records has accelerated over the past two decades by federal digitization mandates like the HITECH Act. This mandate fundamentally modernized clinical documentation yet it also created an attack surface for healthcare networks (Zarour et al., 2026). This issue is important because it forces a conflict between two vital forces: the care of individual patients and the institutional duty to protect electronic Protected Health Information from catastrophic cyber threats. Healthcare organizations are high-value targets for global ransomware cartels. A single compromised endpoint credential can bring an entire hospital system to a standstill, delaying critical patient care (Zarour et al., 2026). However, overly defensive cybersecurity policies that treat clinicians like cyber threats introduces cognitive fatigue and operational paralysis, creating a scenario where defensive policies directly compromise clinic workflows.

Historically, early hospital computer systems operated on rudimentary, physical security where terminals were physically isolated within healthcare facilities. As healthcare networks transitioned to cloud-connected and distributed environments, regulated frameworks like HIPAA forced systems administrators to enforce complex Active Directory policies and multi-factor authentication across all endpoints. While these policies were technically born from an IT compliance perspective, they were rarely designed around the physical realities of healthcare facilities and their day-to-day workflow (Koppel et al., 2015). Empirical studies demonstrate that whenever digital security controls feel fragmented, slow, or misaligned with clinical velocity, frontline staff do not submit to friction, they create bypasses to maintain the flow of the healthcare floor (Blijleven et al., 2022; Büscher et al., 2025). Over time what began as isolated shortcuts has evolved into widespread normalization of password workarounds and shadow IT across healthcare facilities.

Stakeholder Analysis
The debate over password workarounds divides into two primary stakeholder groups whose core institutional mandates operate in direct opposition to each other: medical staff, such as physicians, care nurses, and general staff directly responsible for patient care and clinical workflow, and IT and Compliance Officers, which make up chief information security officers, network administrators, and HIPAA compliance auditors tasked with safeguarding infrastructure integrity and regulatory posture.

Stakeholder 1: Medical Staff
Values: Healthcare clinicians prioritize patient care, physical harm reduction, diagnostic velocity and procedural workflows. In patient-heavy environments, their primary ethical benchmark is ensuring patient care with a timely manner and satisfaction while also tending to their daily administrative tasks.
Position: Medical staff argue that complex authentications and aggressive timeouts actively obstruct emergency interventions, such as retrieving medications or viewing critical lab values. From their standpoint, preserving patient care heavily outweighs the abstract, probabilistic danger of an external data breach or audit penalty.
Claims: Healthcare clinicians substantiate their position using claims of cause, demonstrating that rigid endpoint timeouts directly cause treatment delays that worsen patient outcomes (Kollek et al., 2021), and claims of value, arguing that human life possesses an intrinsic moral worth that supersedes the institutional value of information security.

Stakeholder 2: IT and Compliance Officers
Values: System administrators, network engineers, and compliance officers value systemic integrity, confidentiality of electronic Protected Health Information, legal accountability and enterprise risk mitigation.
Position: IT and compliance authorities maintain that cybersecurity controls cannot be treated as optional or discretionary. In an era of pervasive healthcare ransomware, unauthorized password sharing and credential workarounds erode the entire defense-in-depth model, creating backdoors that jeopardize the personal data of tens of thousands of patients and risk crippling the facility’s operational infrastructure (Njenga et al., 2024; Zarour et al., 2026).
Claims: This stakeholder group relies on claims of fact, pointing to cybersecurity breach telemetry proving that compromised credentials represent the primary initial access vector for ransomware outbreaks (Zarour et al., 2026), and claims of definition, defining true system security as absolute, policy governed consistency with zero authorized exceptions.

Argument Question
Should the use of insecure password workarounds and shadow IT by clinical staff be considered an ethically justified practice to ensure rapid patient care?

Stakeholder Argument
Stakeholder 1: Medical Staff
Position on Argument: Healthcare facilities are like any other business at the core. They provide healthcare and whether it is an emergency or a simple checkup, patients expect special treatment and priority. Clinicians also have to tend to their secondary duties that healthcare facilities use for reports and to improve patient care. Complex security and policy requirements put in place to protect patient information also cause bottlenecks that can cause delays in general and critical patient care.
Ethical Framework: The argument of the medical staff is grounded in Act Utilitarianism, an ethical theory developed systematically by philosophers Jeremy Bentham and John Stuart Mill. Utilitarianism evaluates the morality of any given action strictly through its outcome, holding that an act is morally right if and only it produces the greatest balance of net pleasure, well-being, or harm reduction for the greatest number of affected individuals. In a utilitarian calculus, formal rules and procedural constraints are secondary to the concrete consequences of an action in the physical world.
Argument: Bypassing complex IT logins generates the greatest overall good by ensuring timely medical interventions that save lives or reduce suffering holding a definitive higher utility than preventing a hypothetical network breach. Bedside clinicians argue that the immediate, tangible benefit of administering a critical medication or viewing an urgent lab results right away far outweighs the abstract risk of an unauthorized cyber event. In a widely cited clinical study by Koppel et al. (2015), medical staff framed this tension directly with the question, “Do you want my password or a dead patient?” From a utilitarian standpoint, preventable patient harm is an irreversible and catastrophic outcome, whereas network vulnerabilities are manageable risks that IT teams can isolate, audit, and remediate after the fact.
Course of Action: The correct course of action is to permit the temporary bypass of complex authentication policies during critical clinical workflows to ensure patient treatment is never delayed. Healthcare organizations should establish formal emergency override options, longer workstation timeout intervals in restricted floor areas, or shared team workstations so that staff are not repeatedly locked out at the bedside. Frontline clinicians maintain that until IT leadership can deliver seamless, zero-friction authentication tools, clinical necessity and immediate patient care must take precedence over digital security compliance.
Stake: Medical staff stand to gain uninterrupted workflow and the ability to intervene rapidly in emergencies. Having direct, unobstructed access to clinical software reduces burnout, eliminates dangerous treatment delays and allows clinicians to keep up with both direct patient care and secondary charting duties. On the other hand, clinicians stand to lose their professional integrity or face legal termination if a workaround directly results in a severe ransomware attack. If an unauthorized credential shortcut is identified as the entry point for a network breach, individual healthcare workers face disciplinary action, loss of medical licensing, and potential liability under federal HIPAA regulations.

Stakeholder 2: IT and Compliance Officers
Position on Argument: IT administrators and compliance officers operate under strict institutional and regulatory mandates where digital security cannot be treated as discretionary. While they acknowledge clinical pressures, they recognize that a single compromised endpoint credential can expose tens of thousands of sensitive patient records to ransomware cartels or bring down an entire hospital network. From their standpoint, enforcing rigorous authentication standards is not bureaucratic friction, but an essential duty to protect the long-term safety and privacy of all patients.
Ethical Framework: The position of IT administrators and compliance officers is founded upon Deontological Ethics, most prominently articulated by Immanuel Kant in the Groundwork of the Metaphysics of Morals. Deontology asserts that actions are inherently moral or immoral based on adherence to universal duties and moral laws, completely independent of the empirical consequences they produce. Under Kant’s Categorical Imperative, an individual must act only according to maxims that could be willed as universal laws without contradiction, and persons must always be treated as ends in themselves rather than mere means to an end.
Argument: Applying deontological tenets, IT officers assert that protecting patient privacy and institutional confidentiality is a categorical, non-negotiable duty. When a patient enters a healthcare facility, they entrust their most sensitive medical, genetic, and biographical data to the institution under an implicit universalizable rule of integrity: If every employee treated access controls as an optional whenever convenient, the entire security infrastructure would collapse into chaos (Njenga et al., 2024; Yeng et al., 2022). Furthermore, bypassing authentication treats the collective patient population merely as a means to achieve personal operational convenience, which is a direct violation of Kantian duty.
Course of Action: For IT and compliance leadership, the mandatory course of action is the uncompromising enforcement of role-based access control (RBAC), multi-factor authentication (MFA), and automated audit logging. Clinicians who post written passwords, share accounts, or implement shadow cloud tools must be met with progressive disciplinary measures and mandatory remediation, as institutional survival and regulatory compliance depend on absolute policy adherence.
Stake: IT and security officers stand to gain verified regulatory compliance with HIPAA mandates, defensible audit trails, and robust resilience against catastrophic ransomware incursions that could bankrupt the institution or shut down entire hospital departments. Conversely they face profound institutional stakes: rigid enforcement alienates clinical partners, invites systemic non-compliance, and incurs deep moral injury if an authentication timeout can be linked directly to an adverse clinical event or delayed emergency intervention.

Student Position
Opinion: While I recognize the non-negotiable legal and operational necessity of safeguarding healthcare networks against malicious intrusions, I believe that the preservation of patient care and the prevention of physical trauma must take moral precedence over digital authentication protocols during clinical care. Digital infrastructure, lost database records, and corrupted servers can be isolated, remediated, and restored through financial capital, redundant backups, and incident response teams. An expired life resulting from an authentication-induced delay in medication delivery is irreversible. Therefore, clinical workarounds are not malicious acts of negligence, but rather predictable, rational human adaptations to fundamentally flawed system architectures that force clinicians into a false choice between digital compliance and patient care (Büscher et al., 2025; Sk et al., 2022).
Alignment: My position firmly aligns with the medical staff and the tenets of act utilitarianism. In environments such as emergency departments and intensive care units, forcing a physician or nurse to navigate complex alphanumeric passphrases, rotate passwords every 60 days, and input secondary multi-factor codes while patients flood the waiting room generates friction and delays (Kollek et al., 2021). Expecting clinicians to memorize dozens of passwords across multiple internal software systems or online portals inevitably drives them to write credentials on tape, sticky notes, or notepads simply to keep the flow of patient care going. From a utilitarian lens, the immediate reduction of patient dissatisfaction generates vastly superior net good compared to the abstract security posture gained by enforcing login policies that fail to account for the human-computer interaction in healthcare settings.
Recommendation: To better resolve this systemic conflict without compromising patient safety or network security, healthcare organizations must implement a dual-factor proximity authentication architecture combining wearable RFID smart badges with enterprise Single Sign-On. Instead of requiring manual credential input, a clinician simply taps their facility badge against an encrypted reader at the workstation, which instantly unlocks their authenticated session. Upon stepping away, the proximity sensor immediately locks the workstation. Although procuring and deploying badge-integrated single sign on infrastructure requires additional work hours and staff training, it represents the only sustainable compromise. This engineering solution removes the cognitive burden that causes written password workarounds while providing IT administrators with audit trails that satisfy HIPAA requirements. This solution would harmonize healthcare speed with defensive cybersecurity.

References
Blijleven, V., Koeleman, M., Jaspers, M., & Peute, L. (2022). Workarounds in electronic health record systems and the revised sociotechnical electronic health record workaround analysis framework: Scoping review. Journal of Medical Internet Research, 24(3), e33046. https://doi.org/10.2196/33046
Büscher, A., Schymik, J., & Schultz, C. (2025). Understanding antecedents of nurses' and physicians' workaround behaviors. Journal of Medical Internet Research, 27, e51781. https://doi.org/10.2196/51781
Kollek, D., Barrera, D., Stobert, E., & Homier, V. (2021). The EDIT survey: Identifying emergency department information technology knowledge and training gaps. Disaster Medicine and Public Health Preparedness, 16(3), 1007–1012. https://doi.org/10.1017/dmp.2020.474
Koppel, R., Smith, S., Blythe, J., & Kothari, V. (2015). Workarounds to computer access in healthcare organizations: You want my password or a dead patient? Studies in Health Technology and Informatics, 215, 215–220.
Njenga, K., Nyamandi, N. F., & Segooa, M. A. (2024). A model on workarounds and information security integrity. South African Journal of Information Management, 26(1). https://doi.org/10.4102/sajim.v26i1.1853
Sk, S., et al. (2022). Benefits and risks of shadow IT in health care: A narrative review of the literature. Systèmes d'Information & Management, 27(2), 59–96.
Yeng, P. K., Fauzi, M. A., & Yang, B. (2022). A comprehensive assessment of human factors in cyber security compliance toward enhancing the security practice of healthcare staff in paperless hospitals. Information, 13(7), 335. https://doi.org/10.3390/info13070335
Zarour, M., et al. (2026). A comprehensive survey of cybersecurity threats and data privacy issues in healthcare systems. Applied Sciences, 16(3), 1511. https://doi.org/10.3390/app16031511
`;

/**
 * Structured Ethics Analysis Paper for CST 300
 */
export const ethicsPaper = {
  title: "The Devil’s Got Your Number Tonight: Are Insecure Password Workarounds Ethically Justified?",
  subtitle: "Ethics Analysis Paper & Graduation Writing Assessment Requirement (GWAR) Project",
  assignmentType: "CST 300 Ethics Analysis Assignment",
  courseCode: "CST 300",
  courseTitle: "Graduation Writing Assessment for Computing and Design",
  author: "Ivan Alier-Reyes",
  date: "17 October 2026",
  domain: "Healthcare Informatics, Clinical Operations & Enterprise Cybersecurity",
  ethicalFrameworks: "Act Utilitarianism vs. Deontological Ethics (Kantian Imperative)",
  summary:
    "An academic ethical inquiry examining the systemic conflict between rigid Electronic Health Record (EHR) authentication protocols and emergency clinical agility. The paper balances Act Utilitarianism (medical staff prioritizing immediate harm reduction) against Deontological Ethics (IT compliance safeguarding systemic integrity), culminating in an engineering recommendation for wearable RFID proximity authentication combined with Single Sign-On (SSO).",
  rawMarkdown: ethicsPaperRaw,

  takeawaysDetailed: [
    {
      number: "01",
      tag: "Sociotechnical Tension",
      title: "Clinical Velocity vs. Security Friction",
      description:
        "Federal digitization mandates (HITECH, HIPAA) created critical security perimeters, but aggressive workstation timeouts and rotating passphrases provoke cognitive fatigue, leading clinicians to resort to sticky notes and shared logins."
    },
    {
      number: "02",
      tag: "Act Utilitarianism",
      title: "Medical Staff: Preventable Harm Outweighs Cyber Risk",
      description:
        "Frontline clinicians argue that immediate, tangible life-saving interventions hold higher utility than preventing hypothetical breaches, posing the clinical challenge: 'Do you want my password or a dead patient?'"
    },
    {
      number: "03",
      tag: "Deontological Ethics",
      title: "IT & Compliance: Categorical Imperative of Data Privacy",
      description:
        "IT administrators uphold universal duty: compromising credentials endangers tens of thousands of patient records to ransomware cartels; exceptions collapse defense-in-depth and violate Kantian imperatives."
    },
    {
      number: "04",
      tag: "Engineering Solution",
      title: "Wearable RFID Proximity Badges + Enterprise SSO",
      description:
        "The sustainable resolution replaces manual alphanumeric credential entry with encrypted badge-tap authentication and instant step-away proximity locks, eliminating clinical friction while ensuring strict HIPAA audit trails."
    }
  ],

  stakeholders: [
    {
      id: "medical-staff",
      title: "Medical Staff (Clinicians & Care Nurses)",
      role: "Physicians, emergency nurses, and clinical care teams",
      framework: "Act Utilitarianism (Bentham & Mill)",
      values: "Patient care, physical harm reduction, diagnostic velocity, procedural continuity.",
      position:
        "Complex authentications obstruct emergency interventions. Preserving human life and mitigating immediate clinical trauma heavily outweighs probabilistic cyber threats or audit penalties.",
      claims: [
        { type: "Cause", text: "Rigid endpoint timeouts directly cause treatment delays that worsen patient outcomes (Kollek et al., 2021)." },
        { type: "Value", text: "Human life possesses an intrinsic moral worth that supersedes the institutional value of information security." }
      ],
      proposedCourseOfAction:
        "Permit temporary bypass of complex authentication during critical clinical workflows, implement formal emergency overrides, and extend workstation timeout intervals in secure floor areas.",
      stakes: {
        gains: "Uninterrupted emergency response velocity, reduced clinician burnout, and timely administration of critical pharmaceuticals.",
        risks: "Severe disciplinary action, loss of medical license, or personal liability under HIPAA if shortcuts enable a ransomware vector."
      }
    },
    {
      id: "it-compliance",
      title: "IT and Compliance Officers",
      role: "CISOs, network administrators, and HIPAA compliance auditors",
      framework: "Deontological Ethics (Kant's Categorical Imperative)",
      values: "Systemic integrity, ePHI confidentiality, legal accountability, defense-in-depth risk mitigation.",
      position:
        "Cybersecurity controls cannot be discretionary. Compromised credentials are the #1 entry vector for ransomware cartels that can paralyze an entire hospital network.",
      claims: [
        { type: "Fact", text: "Cybersecurity breach telemetry confirms compromised credentials represent the primary initial access vector for healthcare ransomware outbreaks (Zarour et al., 2026)." },
        { type: "Definition", text: "True system security is defined as absolute, policy-governed consistency with zero authorized exceptions." }
      ],
      proposedCourseOfAction:
        "Uncompromising enforcement of Role-Based Access Control (RBAC), Multi-Factor Authentication (MFA), and automated audit logs, backed by progressive disciplinary enforcement.",
      stakes: {
        gains: "Verified HIPAA regulatory compliance, immutable audit trails, and institutional defense against catastrophic ransomware extortion.",
        risks: "Alienation of clinical staff, systemic shadow IT bypasses, and moral injury if an authentication lockout is linked to delayed emergency intervention."
      }
    }
  ],

  studentPosition: {
    opinion:
      "While I recognize the non-negotiable legal and operational necessity of safeguarding healthcare networks against malicious intrusions, I believe that the preservation of patient care and the prevention of physical trauma must take moral precedence over digital authentication protocols during clinical care. Digital infrastructure, lost database records, and corrupted servers can be isolated, remediated, and restored through financial capital, redundant backups, and incident response teams. An expired life resulting from an authentication-induced delay in medication delivery is irreversible. Therefore, clinical workarounds are not malicious acts of negligence, but rather predictable, rational human adaptations to fundamentally flawed system architectures that force clinicians into a false choice between digital compliance and patient care.",
    alignment:
      "My position firmly aligns with the medical staff and the tenets of act utilitarianism. In environments such as emergency departments and intensive care units, forcing clinicians to navigate alphanumeric passphrases, 60-day rotations, and secondary MFA prompts while patients flood waiting rooms generates unacceptable friction. From a utilitarian lens, the immediate reduction of patient harm produces vastly superior net good compared to the abstract security posture gained by enforcing login policies that fail to account for human-computer interaction in healthcare settings.",
    recommendation:
      "To resolve this systemic conflict without compromising patient safety or network security, healthcare organizations must implement a dual-factor proximity authentication architecture combining wearable RFID smart badges with enterprise Single Sign-On (SSO). Instead of requiring manual credential input, a clinician simply taps their facility badge against an encrypted reader at the workstation, which instantly unlocks their authenticated session. Upon stepping away, the proximity sensor immediately locks the workstation. Although procuring and deploying badge-integrated single sign on infrastructure requires additional work hours and staff training, it represents the only sustainable compromise. This engineering solution removes the cognitive burden that causes written password workarounds while providing IT administrators with audit trails that satisfy HIPAA requirements. This solution harmonizes healthcare speed with defensive cybersecurity."
  },

  references: [
    {
      authors: "Blijleven, V., Koeleman, M., Jaspers, M., & Peute, L.",
      year: "2022",
      title: "Workarounds in electronic health record systems and the revised sociotechnical electronic health record workaround analysis framework: Scoping review",
      journal: "Journal of Medical Internet Research, 24(3), e33046",
      doi: "https://doi.org/10.2196/33046"
    },
    {
      authors: "Büscher, A., Schymik, J., & Schultz, C.",
      year: "2025",
      title: "Understanding antecedents of nurses' and physicians' workaround behaviors",
      journal: "Journal of Medical Internet Research, 27, e51781",
      doi: "https://doi.org/10.2196/51781"
    },
    {
      authors: "Kollek, D., Barrera, D., Stobert, E., & Homier, V.",
      year: "2021",
      title: "The EDIT survey: Identifying emergency department information technology knowledge and training gaps",
      journal: "Disaster Medicine and Public Health Preparedness, 16(3), 1007–1012",
      doi: "https://doi.org/10.1017/dmp.2020.474"
    },
    {
      authors: "Koppel, R., Smith, S., Blythe, J., & Kothari, V.",
      year: "2015",
      title: "Workarounds to computer access in healthcare organizations: You want my password or a dead patient?",
      journal: "Studies in Health Technology and Informatics, 215, 215–220",
      doi: ""
    },
    {
      authors: "Njenga, K., Nyamandi, N. F., & Segooa, M. A.",
      year: "2024",
      title: "A model on workarounds and information security integrity",
      journal: "South African Journal of Information Management, 26(1)",
      doi: "https://doi.org/10.4102/sajim.v26i1.1853"
    },
    {
      authors: "Sk, S., et al.",
      year: "2022",
      title: "Benefits and risks of shadow IT in health care: A narrative review of the literature",
      journal: "Systèmes d'Information & Management, 27(2), 59–96",
      doi: ""
    },
    {
      authors: "Yeng, P. K., Fauzi, M. A., & Yang, B.",
      year: "2022",
      title: "A comprehensive assessment of human factors in cyber security compliance toward enhancing the security practice of healthcare staff in paperless hospitals",
      journal: "Information, 13(7), 335",
      doi: "https://doi.org/10.3390/info13070335"
    },
    {
      authors: "Zarour, M., et al.",
      year: "2026",
      title: "A comprehensive survey of cybersecurity threats and data privacy issues in healthcare systems",
      journal: "Applied Sciences, 16(3), 1511",
      doi: "https://doi.org/10.3390/app16031511"
    }
  ]
};
