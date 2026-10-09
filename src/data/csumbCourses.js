// src/data/csumbCourses.js

export const csumbCourses = [
  // Prior Term (Completed)
  {
    code: "CST 336",
    slug: "cst-336",
    title: "Internet Programming",
    units: 4,
    status: "Completed",
    term: "Prior Term",
    termOrder: 0,
    category: "CS Online Course Pathway",
    description: "Focuses on modern web development techniques. Covers full-stack concepts, asynchronous JavaScript, modern CSS frameworks, server-side development, and integrating external APIs.",
    outcomesMatched: ["MLO 2: Software Design & Engineering", "MLO 3: Systems Architecture & Networks"],
    finalProject: {
      title: "Full-Stack Web Application",
      status: "Completed",
      description: "A comprehensive web application demonstrating frontend design and backend integration.",
      artifacts: []
    }
  },
  {
    code: "CST 338",
    slug: "cst-338",
    title: "Software Design",
    units: 4,
    status: "Completed",
    term: "Prior Term",
    termOrder: 0,
    category: "CS Online Course Pathway",
    description: "Emphasizes object-oriented programming methodologies. Students design and implement software systems using core OO principles, design patterns, and unit testing practices.",
    outcomesMatched: ["MLO 2: Software Design & Engineering"],
    finalProject: {
      title: "Object-Oriented Desktop Application",
      status: "Completed",
      description: "A desktop application engineered with robust OO design patterns and Java.",
      artifacts: []
    }
  },

  // Fall 2026 - Term A (Currently In Progress)
  {
    code: "CST 300",
    slug: "cst-300",
    title: "Graduation Writing Assessment for Computing and Design",
    units: 3,
    status: "In Progress",
    term: "Fall 2026 - Term A",
    termOrder: 1,
    category: "CS Online Course Pathway",
    geRequirement: "Graduation Writing Assessment Requirement (GWAR)*",
    gradeRequirement: "Must receive a grade of C- or higher",
    description: "Fulfills the Graduation Writing Assessment Requirement (GWAR). Focuses on developing critical reading, analytical thinking, and writing skills tailored for technology, computing, and design disciplines. Covers academic and professional communication, research methods, and source evaluation.",
    outcomesMatched: ["MLO 5: Professionalism, Ethics & Communication"],
    finalProject: {
      title: "Technical Writing Portfolio & Computing Ethics Synthesis",
      status: "In Progress",
      description: "Comprehensive technical document analyzing emerging computing dilemmas, professional engineering ethics, and peer-reviewed technical research methodologies.",
      artifacts: [
        { name: "Ethics Analysis Paper", type: "document" },
        { name: "Technical Communication Portfolio", type: "code" }
      ]
    }
  },
  {
    code: "CST 349",
    slug: "cst-349",
    title: "Computer Science Proseminar",
    units: 2,
    status: "In Progress",
    term: "Fall 2026 - Term A",
    termOrder: 1,
    category: "CS Online Course Pathway",
    gradeRequirement: "Must receive a grade of C- or higher",
    isHighlighted: true,
    description: "Connects academic studies in computing to personal and professional career goals. Focuses on analyzing industry literature, exploring modern tech roles, establishing an Individual Learning Plan (ILP), and conducting informational interviews with industry professionals.",
    outcomesMatched: ["MLO 5: Professionalism, Ethics & Communication"],
    finalProject: {
      title: "Individual Learning Plan (ILP) & Industry Expert Interview",
      status: "In Progress",
      description: "Long-term curated portfolio tracking progression across all CS degree milestones toward CST 499 Capstone, accompanied by an informational interview with an established computing professional.",
      artifacts: [
        { name: "ILP Portfolio Website (Otter-Side)", type: "web" },
        { name: "Industry Expert Interview Report", type: "report" }
      ]
    },
    interviewReport: {
      interviewee: "Industry Expert / Tech Leader",
      role: "Senior Systems Engineer & Security Architect",
      company: "Enterprise Cloud Infrastructure Solutions",
      date: "Fall 2026",
      summary: "Informational interview conducted to explore enterprise infrastructure resilience, cloud automation strategies, and the evolving integration between software engineering and security operations (DevSecOps).",
      keyTakeaways: [
        "Continuous learning and adaptability in cloud infrastructure are vital as legacy operations shift toward code-driven infrastructure (IaC).",
        "Mastering computer science fundamentals (data structures, system calls, networking) creates an enduring technical baseline regardless of specific framework trends.",
        "Communication and cross-functional team empathy remain the primary differentiator for mid-level and senior technical contributors."
      ],
      fullReportText: `The Industry Expert Interview was conducted to gain deep, real-world perspective on modern software engineering practices, cloud operations, and career advancement within computing. Key dialogue addressed architectural trade-offs in cloud migration, incident response handling, and the essential skills required for upcoming graduates entering competitive technical roles.`
    }
  },

  // Fall 2026 - Term B (Planned)
  {
    code: "CST 334",
    slug: "cst-334",
    title: "Operating Systems",
    units: 4,
    status: "Planned",
    term: "Fall 2026 - Term B",
    termOrder: 2,
    category: "CS Online Course Pathway",
    description: "Examines fundamental operating system concepts: process scheduling, threads, concurrency control, mutual exclusion, deadlocks, virtual memory management, paging algorithms, I/O systems, and file system architectures.",
    outcomesMatched: ["MLO 3: Systems Architecture & Networks"],
    finalProject: {
      title: "Multi-threaded Process Scheduler & Memory Simulation",
      status: "Planned",
      description: "Low-level systems program simulating preemptive CPU process scheduling and virtual memory page replacement algorithms.",
      artifacts: []
    }
  },

  // Spring 2027 - Term A (Planned)
  {
    code: "CST 363",
    slug: "cst-363",
    title: "Introduction to Database Systems",
    units: 4,
    status: "Planned",
    term: "Spring 2027 - Term A",
    termOrder: 3,
    category: "CS Online Course Pathway",
    description: "Introduces relational and non-relational database design and implementation. Topics include entity-relationship (ER) modeling, relational algebra, SQL DDL/DML, normalization forms (1NF-3NF/BCNF), indexing strategies, transaction ACID properties, and database application connectivity.",
    outcomesMatched: ["MLO 4: Data Systems & Machine Learning"],
    finalProject: {
      title: "Enterprise Relational Schema Design & Query Benchmark",
      status: "Planned",
      description: "Complete relational database system with normalized schemas, complex analytical SQL queries, indexing benchmarks, and application API bindings.",
      artifacts: []
    }
  },

  // Spring 2027 - Term B (Planned)
  {
    code: "CST 462S",
    slug: "cst-462s",
    title: "Race, Gender, Class in the Digital World",
    units: 2,
    status: "Planned",
    term: "Spring 2027 - Term B",
    termOrder: 4,
    category: "CS Online Course Pathway",
    geRequirement: "UD4: Social and Behavioral Sciences & UDSL: Upper Division Service Learning",
    description: "Upper-division service learning course exploring the social, cultural, and political impacts of computing technology. Analyzes structural inequalities, algorithmic bias, digital divide, accessibility barriers, and community-partnered technology empowerment.",
    outcomesMatched: ["MLO 5: Professionalism, Ethics & Communication"],
    finalProject: {
      title: "Community Service Learning Computing Initiative",
      status: "Planned",
      description: "Hands-on technological initiative developed in collaboration with a community partner addressing equity, digital access, or inclusive education.",
      artifacts: []
    }
  },
  {
    code: "CST 328",
    slug: "cst-328",
    title: "Digital Art and Design",
    units: 2,
    status: "Planned",
    term: "Spring 2027 - Term B",
    termOrder: 4,
    category: "CS Online Course Pathway",
    geRequirement: "UD3: Arts or Humanities",
    description: "Explores fundamental visual art and graphic design principles applied to digital media, user interface architecture, and interactive computing. Covers visual hierarchy, typography, color theory, digital image generation, vector composition, and user-centric visual communication.",
    outcomesMatched: ["MLO 2: Software Design & Engineering", "MLO 5: Professionalism, Ethics & Communication"],
    finalProject: {
      title: "Interactive Digital Media & UI/UX Design System",
      status: "Planned",
      description: "Comprehensive interactive digital media system applying visual design principles, typography hierarchies, and responsive user experience design.",
      artifacts: []
    }
  },

  // Summer 2027 - Term A (Planned)
  {
    code: "CST 311",
    slug: "cst-311",
    title: "Introduction to Computer Networks",
    units: 4,
    status: "Planned",
    term: "Summer 2027 - Term A",
    termOrder: 5,
    category: "CS Online Course Pathway",
    description: "Provides a survey of telecommunications and computer networking principles. Covers OSI and TCP/IP reference models, network architectures, packet switching, routing algorithms, socket programming, application protocols (HTTP, DNS, DHCP), and foundational network security.",
    outcomesMatched: ["MLO 3: Systems Architecture & Networks"],
    finalProject: {
      title: "Multi-Client Socket Architecture & Packet Protocol",
      status: "Planned",
      description: "Implementation of a concurrent TCP/UDP client-server protocol application demonstrating custom packet framing, state handling, and latency benchmarking.",
      artifacts: []
    }
  },

  // Summer 2027 - Term B (Planned)
  {
    code: "CST 315",
    slug: "cst-315",
    title: "Introduction to Cybersecurity",
    units: 4,
    status: "Planned",
    term: "Summer 2027 - Term B",
    termOrder: 6,
    category: "CS Online Course Pathway",
    isSubstitution: true,
    substitutionNote: "Official Course Substitution: Selected in place of CST 383 (Introduction to Data Science).",
    description: "Surveys fundamental concepts and principles of cybersecurity. Topics include security models, risk assessment, vulnerability scanning, symmetric and asymmetric cryptography, access control, network intrusion detection, defensive security architectures, and incident response.",
    outcomesMatched: ["MLO 3: Systems Architecture & Networks", "MLO 5: Professionalism, Ethics & Communication"],
    finalProject: {
      title: "Enterprise Cybersecurity Threat Assessment & Defensive Security Framework",
      status: "Planned",
      description: "End-to-end security audit and architectural hardening suite encompassing vulnerability assessment, cryptographic key lifecycle management, and automated incident monitoring.",
      artifacts: []
    }
  },

  // Fall 2027 - Term A (Planned)
  {
    code: "CST 370",
    slug: "cst-370",
    title: "Design and Analysis of Algorithms",
    units: 4,
    status: "Planned",
    term: "Fall 2027 - Term A",
    termOrder: 7,
    category: "CS Online Course Pathway",
    description: "Covers formal algorithm design techniques and computational complexity analysis. Studies asymptotic notation (Big-O, Big-Omega, Big-Theta), divide-and-conquer, dynamic programming, greedy strategies, graph algorithms (shortest path, minimum spanning trees), and the theory of NP-completeness.",
    outcomesMatched: ["MLO 1: Mathematical & Algorithmic Foundations"],
    finalProject: {
      title: "Algorithmic Efficiency Benchmark Suite & Graph Optimizer",
      status: "Planned",
      description: "Empirical study comparing theoretical versus observed runtimes across diverse algorithmic paradigms on large graph and combinatorial datasets.",
      artifacts: []
    }
  },

  // Fall 2027 - Term B (Planned)
  {
    code: "CST 438",
    slug: "cst-438",
    title: "Software Engineering",
    units: 6,
    status: "Planned",
    term: "Fall 2027 - Term B",
    termOrder: 8,
    category: "CS Online Course Pathway",
    description: "Comprehensive software engineering methodologies applied in collaborative agile teams. Covers modern requirements engineering, microservice architectures, automated CI/CD deployment pipelines, unit and integration testing frameworks, and release management.",
    outcomesMatched: ["MLO 2: Software Design & Engineering"],
    finalProject: {
      title: "Enterprise Microservices System with Automated CI/CD",
      status: "Planned",
      description: "Collaborative multi-tiered application featuring automated code testing pipelines, continuous integration, Docker containerization, and cloud deployment.",
      artifacts: []
    }
  },

  // Spring 2028 - Term A (Planned)
  {
    code: "CST 329",
    slug: "cst-329",
    title: "Reasoning with Logic",
    units: 2,
    status: "Planned",
    term: "Spring 2028 - Term A",
    termOrder: 9,
    category: "CS Online Course Pathway",
    geRequirement: "UD2 or UD 5: Mathematical Concepts / Science",
    description: "Explores deductive reasoning, propositional calculus, first-order predicate logic, Boolean algebra, formal deduction systems, and proof theory. Emphasizes mathematical reasoning applications in computation, program verification, algorithm correctness, and formal software specifications.",
    outcomesMatched: ["MLO 1: Mathematical & Algorithmic Foundations"],
    finalProject: {
      title: "Automated Formal Verification & Deductive Logic Solver",
      status: "Planned",
      description: "Logic reasoning system implementing SAT-solving algorithms, formal clause deduction, and automated verification of software correctness invariants.",
      artifacts: []
    }
  },
  {
    code: "CST 489",
    slug: "cst-489",
    title: "Capstone Project Planning",
    units: 2,
    status: "Planned",
    term: "Spring 2028 - Term A",
    termOrder: 9,
    category: "CS Online Course Pathway",
    description: "Formal preparation and architectural planning course for the culminating Computer Science Capstone (CST 499). Students form development teams, conduct stakeholder discovery, write technical requirements, draft system architecture blueprints, evaluate technical feasibility, and prepare project schedules.",
    outcomesMatched: ["MLO 2: Software Design & Engineering", "MLO 5: Professionalism, Ethics & Communication"],
    finalProject: {
      title: "Senior Capstone Charter, System Architecture Blueprint & Feasibility Study",
      status: "Planned",
      description: "Comprehensive software architecture and project charter defining product requirements, database schema models, API specifications, and development timelines for CST 499 execution.",
      artifacts: []
    }
  },

  // Spring 2028 - Term B (Planned)
  {
    code: "CST 499",
    slug: "cst-499",
    title: "Computer Science Capstone",
    units: 4,
    status: "Planned",
    term: "Spring 2028 - Term B",
    termOrder: 10,
    category: "CS Online Course Pathway",
    description: "Culminating experience for the Computer Science degree. Students synthesize theoretical knowledge and practical software engineering competencies to plan, build, test, and defend a comprehensive software project before faculty, peers, and industry panels.",
    outcomesMatched: [
      "MLO 1: Mathematical Foundations",
      "MLO 2: Software Design",
      "MLO 3: Systems Architecture",
      "MLO 4: Data Systems",
      "MLO 5: Professionalism & Ethics"
    ],
    finalProject: {
      title: "Culminating Capstone Software Project & Academic Defense",
      status: "Planned",
      description: "Flagship engineering solution integrating full-stack architecture, performance benchmarking, rigorous documentation, and public faculty presentation.",
      artifacts: []
    }
  }
];
