// src/data/studentProfile.js

export const studentProfile = {
  name: "Ivan Alier-Reyes",
  title: "Computer Science Undergraduate | IT & Security Specialist",
  school: "California State University, Monterey Bay (CSUMB)",
  college: "College of Science — School of Computing & Design",
  program: "Bachelor of Science in Computer Science (Online Degree Completion)",
  email: "ialierreyes@csumb.edu",
  links: {
    portfolio: "https://willofhuitzil.com",
    github: "https://github.com/Dr-Huitzil",
    linkedin: "https://www.linkedin.com/in/ivan-alier-reyes",
    csumbBrand: "https://csumb.edu/communications/brand-guidelines-templates-and-resources/logo-guidelines/",
    csumbCatalog: "https://catalog.csumb.edu/preview_program.php?catoid=11&poid=2405&returnto=591"
  },
  bio: `I am an undergraduate student in the Computer Science Online program at California State University, Monterey Bay. With a strong foundation in enterprise IT infrastructure and cybersecurity operations, I am expanding my technical scope into systems architecture, algorithmic problem-solving, and full-stack engineering. This Individual Learning Plan (ILP) portfolio documents my CS Online Course Pathway coursework, term deliverables, and progression toward CST 499 Capstone graduation.`,
  goals: {
    academic: [
      "Master core algorithmic principles, design patterns, and distributed system architectures across all upper-division courses.",
      "Consistently document and publish high-quality technical artifacts and source repositories for every completed term.",
      "Engineer a real-world, high-impact software system as the culminating project for the CST 499 Capstone."
    ],
    career: [
      "Bridge systems infrastructure and cybersecurity proficiency with full-stack software development to build resilient, cloud-native applications.",
      "Contribute to mission-driven engineering teams building modern, accessible, and high-performance digital tools.",
      "Cultivate continuous learning habits and pursue industry leadership in software engineering and cloud security."
    ]
  },
  courses: {
    completed: [
      { code: "CST 336", title: "Internet Programming", units: 4, term: "Prior Term" },
      { code: "CST 338", title: "Software Design", units: 4, term: "Prior Term" }
    ],
    inProgress: [
      { code: "CST 300", title: "Graduation Writing Assessment for Computing and Design", units: 3, term: "Fall 2026 - Term A" },
      { code: "CST 349", title: "Computer Science Proseminar", units: 2, term: "Fall 2026 - Term A" }
    ],
    planned: [
      { code: "CST 334", title: "Operating Systems", units: 4, term: "Fall 2026 - Term B" },
      { code: "CST 363", title: "Introduction to Database Systems", units: 4, term: "Spring 2027 - Term A" },
      { code: "CST 462S", title: "Race, Gender, Class in the Digital World", units: 2, term: "Spring 2027 - Term B" },
      { code: "CST 328", title: "Digital Art and Design", units: 2, term: "Spring 2027 - Term B" },
      { code: "CST 311", title: "Introduction to Computer Networks", units: 4, term: "Summer 2027 - Term A" },
      { code: "CST 315", title: "Introduction to Cybersecurity", units: 4, term: "Summer 2027 - Term B" },
      { code: "CST 370", title: "Design and Analysis of Algorithms", units: 4, term: "Fall 2027 - Term A" },
      { code: "CST 438", title: "Software Engineering", units: 6, term: "Fall 2027 - Term B" },
      { code: "CST 329", title: "Reasoning with Logic", units: 2, term: "Spring 2028 - Term A" },
      { code: "CST 489", title: "Capstone Project Planning", units: 2, term: "Spring 2028 - Term A" },
      { code: "CST 499", title: "Computer Science Capstone", units: 4, term: "Spring 2028 - Term B" }
    ]
  },
  programOutcomes: [
    {
      id: "mlo1",
      code: "MLO 1",
      title: "Mathematical & Algorithmic Foundations",
      description: "Apply mathematical foundations, algorithmic principles, and computer science theory in the modeling and design of computer-based systems in a way that demonstrates comprehension of tradeoffs involved in design choices."
    },
    {
      id: "mlo2",
      code: "MLO 2",
      title: "Software Design & Engineering",
      description: "Demonstrate mastery of software engineering best practices, object-oriented design patterns, version control workflows, automated testing, and lifecycle project management."
    },
    {
      id: "mlo3",
      code: "MLO 3",
      title: "Systems Architecture & Networks",
      description: "Analyze, configure, and engineer computing solutions across operating system environments, hardware interfaces, communication protocols, and cloud computing infrastructure."
    },
    {
      id: "mlo4",
      code: "MLO 4",
      title: "Data Systems & Machine Learning",
      description: "Model, query, and manipulate relational and distributed data structures; extract actionable intelligence using statistical computing and machine learning paradigms."
    },
    {
      id: "mlo5",
      code: "MLO 5",
      title: "Professionalism, Ethics & Communication",
      description: "Communicate complex technical concepts effectively across multidisciplinary audiences, uphold strict ethical computing standards, and foster diverse, inclusive engineering collaborations."
    }
  ]
};
