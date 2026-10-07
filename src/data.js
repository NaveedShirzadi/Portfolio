export const profile = {
  name: "Naveed Shirzadi",
  title: "Computer Science and Finance",
  headline: "I build software where code meets markets.",
  tagline:
    "Senior at CSUN studying Computer Science with a Finance minor. I ship full stack products for real organizations and I'm looking for fintech and financial software engineering internships.",
  about: [
    "I'm a senior Computer Science major with a Finance minor at California State University, Northridge, graduating May 2027. I like building products end to end, from Firebase backends to Flutter and React front ends, and I'm most interested in fintech and financial software.",
    "Outside class I lead technology for the Financial Management Association, manage the budget for the Entrepreneurs Club, and do plant genetics research in the ARCS Associate program. I also lead Supplemental Instruction sessions for Math 106, which has made me better at explaining technical ideas simply.",
  ],
  email: "shirzadinaveed@gmail.com",
  github: "https://github.com/NaveedShirzadi",
  linkedin: "https://www.linkedin.com/in/naveed-shirzadi",
  resume: "/Naveed_Shirzadi_Resume.pdf",
};

export const glance = [
  {
    label: "Studying",
    value: "Computer Science with a Finance minor at CSUN, graduating May 2027",
  },
  {
    label: "Building",
    value: "Flutter, React, and Firebase products used by real organizations",
  },
  {
    label: "Leading",
    value: "Technology for FMA and the budget for the Entrepreneurs Club",
  },
  {
    label: "Looking for",
    value: "Fintech and financial software engineering internships",
  },
];

export const projects = [
  {
    name: "CSUN Entrepreneurs Club Portal",
    period: "Solo project, live",
    description:
      "Designed, built, and deployed the club's website and officer portal on my own. More than ten officers use it to manage events, announcements, member attendance, and treasury records for roughly 50 members, with Firebase Authentication controlling who can sign in. Styled in the club's red and black brand.",
    tags: ["HTML/CSS/JS", "Firebase Auth", "Firestore", "Firebase Hosting"],
    link: "https://csun-entrepreneurs.web.app",
    linkLabel: "Visit the live site",
  },
  {
    name: "StudyFlow",
    period: "Team leader, team of 4, January to May 2026",
    description:
      "Led a team of four building a cross platform study app for iOS, Android, web, macOS, and Windows. It pulls live course and assignment data from the Canvas LMS API and uses AI to turn uploaded course materials into study guides. I built the backend AI pipeline, debugged across the codebase, and kept four active branches merged. Tested with real students before launch.",
    tags: ["Flutter", "Dart", "Firebase", "Firestore", "Groq API"],
    link: "https://github.com/NaveedShirzadi/StudyFlow",
    linkLabel: "View on GitHub",
  },
  {
    name: "CSUN FMA Website",
    period: "Live, as FMA VP of Technology",
    description:
      "The public website for a Financial Management Association of over 100 members, with events, officers, membership, and resources. Firestore security rules limit editing to an allowlisted set of signed in officers while everything stays publicly readable, so officers can update content without a developer.",
    tags: ["Firebase", "Firebase Auth", "Firestore", "GitHub Actions"],
    link: "https://csun-fma.web.app",
    linkLabel: "Visit the live site",
  },
  {
    name: "8 Puzzle Game",
    period: "C programming, fall 2025",
    description:
      "A command line sliding puzzle game written in C with dynamic two dimensional arrays, move validation, and manual memory management across more than 200 lines of documented code. Published to GitHub.",
    tags: ["C", "Memory management", "Git"],
    link: null,
    linkLabel: null,
  },
  {
    name: "Custom Java Array List",
    period: "Project coordinator, fall 2025",
    description:
      "Implemented an array list data structure in Java from scratch, with dynamic resizing, insertion and removal, and index based access across modular classes. Coordinated tasks across the team and ran code reviews to keep implementations consistent.",
    tags: ["Java", "Data structures"],
    link: null,
    linkLabel: null,
  },
  {
    name: "Investing Community",
    period: "In progress",
    description:
      "A community for grounded investing conversation. Instead of trading tips, members compare portfolio allocation and risk exposure so every discussion has context.",
    tags: ["Community building", "Personal finance"],
    link: null,
    linkLabel: null,
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Java", "C", "JavaScript", "Python", "Dart", "HTML and CSS"],
  },
  {
    group: "Frameworks and APIs",
    items: ["React", "Vite", "Flutter", "REST APIs", "Canvas LMS API"],
  },
  {
    group: "Databases",
    items: ["MySQL", "Firestore", "Firebase"],
  },
  {
    group: "Tools",
    items: [
      "Git and GitHub",
      "Firebase Hosting",
      "GitHub Actions",
      "Bash",
      "Maven",
      "IntelliJ IDEA",
      "VS Code",
    ],
  },
  {
    group: "Finance",
    items: [
      "Budgeting and treasury",
      "Financial reporting",
      "Portfolio allocation",
      "Risk exposure",
    ],
  },
];

export const involvements = [
  {
    role: "VP of Technology",
    org: "Financial Management Association (FMA), since May 2026",
    detail:
      "Built and run the club website for an organization of 100+ members, including editor access controls, and manage club communications through Discord and the executive board email.",
  },
  {
    role: "Treasurer",
    org: "Entrepreneurs Club, since March 2026",
    detail:
      "Administer an annual operating budget of $1,000 to $5,000, track spending across club events, and produce financial reports for transparency. Also built the club's website and officer portal.",
  },
  {
    role: "Supplemental Instruction Leader, Math 106",
    org: "California State University, Northridge, since August 2026",
    detail:
      "Run two one hour sessions a week for a cohort of 20 students. I attend the Math 106 lectures to spot gaps in understanding, then build each session around them, including exam review.",
  },
  {
    role: "Undergraduate Researcher, ARCS Associate",
    org: "Dr. Yoshie Hanzawa's Plant Genetics Lab, since May 2026",
    detail:
      "Built small scale aeroponic growing systems for Seascape strawberries as part of an ongoing plant genetics project. Set up Raspberry Pi cameras to track root and plant growth and worked on a soil moisture sensor that reports wet and dry conditions.",
  },
  {
    role: "Guest Relations Student Assistant",
    org: "Student Outreach and Recruitment, CSUN, since October 2025",
    detail:
      "Help 40 to 45 visitors a day at the front desk, run campus tours, and support four large recruitment events including CSUN Open House and Admitted Matadors Day.",
  },
];
