// src/data/csumbCourses.js

export const csumbCourses = [
  {
    code: "CST 300",
    slug: "cst-300",
    title: "Major Proseminar",
    units: 4,
    status: "Completed",
    term: "Term 1",
    description: "Fulfills the Graduation Writing Assessment Requirement (GWAR). Focuses on developing critical reading, analytical thinking, and writing skills tailored for technology, computing, and design disciplines. Covers academic and professional communication, research methods, and source evaluation.",
    outcomesMatched: ["MLO 5: Professionalism, Ethics & Communication"],
    finalProject: {
      title: "Technical Writing Portfolio & Computing Ethics Synthesis",
      status: "Completed",
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
    term: "Term 1 (Current)",
    description: "Connects academic studies in computing to personal and professional career goals. Focuses on analyzing industry literature, exploring modern tech roles, establishing an Individual Learning Plan (ILP), and conducting informational interviews with industry professionals.",
    outcomesMatched: ["MLO 5: Professionalism, Ethics & Communication"],
    isHighlighted: true,
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
  {
    code: "CST 311",
    slug: "cst-311",
    title: "Introduction to Computer Networks",
    units: 4,
    status: "Planned",
    term: "Term 2",
    description: "Provides a survey of telecommunications and computer networking principles. Covers OSI and TCP/IP reference models, network architectures, packet switching, routing algorithms, socket programming, application protocols (HTTP, DNS, DHCP), and foundational network security.",
    outcomesMatched: ["MLO 3: Systems Architecture & Networks"],
    finalProject: {
      title: "Multi-Client Socket Architecture & Packet Protocol",
      status: "Planned",
      description: "Implementation of a concurrent TCP/UDP client-server protocol application demonstrating custom packet framing, state handling, and latency benchmarking.",
      artifacts: []
    }
  },
  {
    code: "CST 338",
    slug: "cst-338",
    title: "Software Design",
    units: 4,
    status: "Planned",
    term: "Term 2",
    description: "Focuses on object-oriented software design and modeling methodologies. Explores object-oriented programming paradigms, Unified Modeling Language (UML), creational/structural/behavioral design patterns, modular architecture, and unit testing strategies.",
    outcomesMatched: ["MLO 2: Software Design & Engineering"],
    finalProject: {
      title: "Object-Oriented Interactive Architecture Project",
      status: "Planned",
      description: "Full object-oriented application implementing design patterns (MVC, Factory, Observer) and automated unit test suites.",
      artifacts: []
    }
  },
  {
    code: "CST 336",
    slug: "cst-336",
    title: "Internet Programming",
    units: 4,
    status: "Planned",
    term: "Term 3",
    description: "Covers client-server web programming technologies. Topics include semantic markup, modern CSS architecture, responsive UI components, client-side JavaScript, asynchronous API interactions, server-side frameworks, and database persistence.",
    outcomesMatched: ["MLO 2: Software Design & Engineering", "MLO 4: Data Systems"],
    finalProject: {
      title: "Full-Stack Dynamic Web Application",
      status: "Planned",
      description: "Database-backed web application built with responsive front-end components, authenticated RESTful endpoints, and relational persistence.",
      artifacts: []
    }
  },
  {
    code: "CST 334",
    slug: "cst-334",
    title: "Operating Systems",
    units: 4,
    status: "Planned",
    term: "Term 3",
    description: "Examines fundamental operating system concepts: process scheduling, threads, concurrency control, mutual exclusion, deadlocks, virtual memory management, paging algorithms, I/O systems, and file system architectures.",
    outcomesMatched: ["MLO 3: Systems Architecture & Networks"],
    finalProject: {
      title: "Multi-threaded Process Scheduler & Memory Simulation",
      status: "Planned",
      description: "Low-level systems program simulating preemptive CPU process scheduling and virtual memory page replacement algorithms.",
      artifacts: []
    }
  },
  {
    code: "CST 363",
    slug: "cst-363",
    title: "Introduction to Database Systems",
    units: 4,
    status: "Planned",
    term: "Term 4",
    description: "Introduces relational and non-relational database design and implementation. Topics include entity-relationship (ER) modeling, relational algebra, SQL DDL/DML, normalization forms (1NF-3NF/BCNF), indexing strategies, transaction ACID properties, and database application connectivity.",
    outcomesMatched: ["MLO 4: Data Systems & Machine Learning"],
    finalProject: {
      title: "Enterprise Relational Schema Design & Query Benchmark",
      status: "Planned",
      description: "Complete relational database system with normalized schemas, complex analytical SQL queries, indexing benchmarks, and application API bindings.",
      artifacts: []
    }
  },
  {
    code: "CST 370",
    slug: "cst-370",
    title: "Design and Analysis of Algorithms",
    units: 4,
    status: "Planned",
    term: "Term 4",
    description: "Covers formal algorithm design techniques and computational complexity analysis. Studies asymptotic notation (Big-O, Big-Omega, Big-Theta), divide-and-conquer, dynamic programming, greedy strategies, graph algorithms (shortest path, minimum spanning trees), and the theory of NP-completeness.",
    outcomesMatched: ["MLO 1: Mathematical & Algorithmic Foundations"],
    finalProject: {
      title: "Algorithmic Efficiency Benchmark Suite & Graph Optimizer",
      status: "Planned",
      description: "Empirical study comparing theoretical versus observed runtimes across diverse algorithmic paradigms on large graph and combinatorial datasets.",
      artifacts: []
    }
  },
  {
    code: "CST 383",
    slug: "cst-383",
    title: "Introduction to Data Science",
    units: 4,
    status: "Planned",
    term: "Term 5",
    description: "Introduces data wrangling, exploratory data analysis (EDA), statistical modeling, and predictive analytics using Python libraries. Focuses on data cleaning, feature engineering, hypothesis testing, classification algorithms, and regression modeling.",
    outcomesMatched: ["MLO 4: Data Systems & Machine Learning"],
    finalProject: {
      title: "Predictive Machine Learning Pipeline & Data Dashboard",
      status: "Planned",
      description: "End-to-end data science project utilizing exploratory analysis, statistical feature engineering, model training/evaluation, and actionable visualization.",
      artifacts: []
    }
  },
  {
    code: "CST 462S",
    slug: "cst-462s",
    title: "Race, Gender, Class in the Digital World",
    units: 4,
    status: "Planned",
    term: "Term 5",
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
    code: "CST 438",
    slug: "cst-438",
    title: "Software Engineering",
    units: 4,
    status: "Planned",
    term: "Term 6",
    description: "Comprehensive software engineering methodologies applied in collaborative agile teams. Covers modern requirements engineering, microservice architectures, automated CI/CD deployment pipelines, unit and integration testing frameworks, and release management.",
    outcomesMatched: ["MLO 2: Software Design & Engineering"],
    finalProject: {
      title: "Enterprise Microservices System with Automated CI/CD",
      status: "Planned",
      description: "Collaborative multi-tiered application featuring automated code testing pipelines, continuous integration, Docker containerization, and cloud deployment.",
      artifacts: []
    }
  },
  {
    code: "CST 499",
    slug: "cst-499",
    title: "Computer Science Capstone",
    units: 4,
    status: "Planned",
    term: "Term 6 (Culminating Experience)",
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
