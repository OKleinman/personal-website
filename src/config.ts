export const siteConfig = {
  name: "Oliver Kleinman",
  title: "Student researcher interested in modelling incentives, behavior, and strategic decision-making.",
  description: "Personal website of Oliver Kleinman",
  accentColor: "#be1e2d",
  social: {
    email: "ok1@sas.upenn.edu",
    linkedin: "https://www.linkedin.com/in/oliver-kleinman-714135263/",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/OKleinman",
  },
  aboutMe:
    "My work focuses on political and economic modeling, using data analysis to understand strategic behavior. I’ve worked in both academic research and startup environments, and I’m comfortable with the goals, pace, and tools of each. Currently, I’m especially interested in how people and institutions make interactive decisions in public policy and economic contexts. In my free time, I like to paint and collect soviet watches.",
  skills: ["SQL/BigQuery", "R", "Python", "ArcGIS", "Behavioral Economics", "Optimization", "Communicatioon", "German", "Spanish"],
  projects: [
    {
      name: "Nationalization Spatial Data Analysis",
      description:
        "Worked in R and ArcGIS, building repeatable pipelines for spatial joins, political data analysis, and visualization, supporting insights into nationalization within and across countries.",
      link: "",
      skills: ["R", "ArcGIS", "Communication"],
    },
    {
      name: "Fixed-Income and Annuities Instrument",
      description:
        "Developed fixed-income comparison instruments showing Charitable Gift Annuities are a more profitable financial vehicle than Commercial Annuities in 53% of age-tax-bracket pairings, yet remain underutilized, most likely due to poor marketing.",
      link: "",
      skills: ["R", "Behavioral Economics"],
    },
    {
      name: "Textual Philosophical Aligment Classifier",
      description:
        "Applied Word2Vec embeddings with LSTM and BiLSTM models to classify text by philosophical alignment using a corpus of philosophical texts with 89% accuracy.",
      link: "",
      skills: ["Python", "Optimization"],
    },
  ],
  experience: [
    {
      company: "University of Pennsylvania",
      title: "Student Researcher",
      dateRange: "Jun 2025 - Present",
      bullets: [
        "Built comparative financial and behavioral instruments and models for annuities and fixed-income products",
        "Analyzed how tax and institutional constraints shape adoption incentives",
        "Iterated on research with faculty from multiple universities and a prominent philanthropist",
      ],
    },
    {
      company: "University of Pennsylvania",
      title: "Research Assistant",
      dateRange: "Jun 2024 - Dec 2024",
      bullets: [
        "Analyzed and visualized election data across multiple levels of geographies using spatial data analysis",
        "Developed instruments, pipelines, and visualizations to accelerate continued research",
        "Integrated data and conclusions into existing research megastudy data",
      ],
    },
    {
      company: "Farm to People ",
      title: "Intern",
      dateRange: "May 2024 - Aug 2024",
      bullets: [
        "Analyzed customer aqusition cost by aquision channel and identified the optimal aquision channels and promotions by user",
        "Optimized search results and worked on a personalization algorithm using collaborative filtering",
        "Collaborated on a live business analyitcs dashboard using Hex and BigQuery",
      ],
    },
  ],
  education: [
    {
      school: "Philosophy, Politics and Economics, BA: Choice & Behavior, Minor in Data Science",
      degree: "University of Pennsylvania",
      dateRange: "2023 - 2027",
      achievements: [
        "Data Science Club Team Leader, German Society Board, Venture Lab Member, Archery Club",
        "Organized fixed-income roundtable event at Perry World House",
        "MindCORE Research Assistant Training Program",
      ],
    },
    {
      school: "",
      degree: "Other Education and Certifications",
      dateRange: "",
      achievements: [
        "City College of San Francisco - Intro to Programming (Spring 2021)",
        "University of California, Los Angeles - Introduction to Data Science (Summer 2022)",
        "Completion of the MindCORE Research Assistant Training Program with excellence (Spring 2024)",
        "CITI Program Social and Behavioral Responsible Conduct of Research certification (Spring 2024)",
      ],
    },
  ],
};
