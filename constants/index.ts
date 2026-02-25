export const socials = [
  {
    name: "github",
    url: "/github.svg",
    link: "https://github.com/lucassiqueira08",
  },
  {
    name: "linkedin",
    url: "/linkedin.svg",
    link: "https://www.linkedin.com/in/lucassiqueira08/",
  },
];

export const experience = [
  {
    company: "Tela",
    role: "Product Engineer",
    period: "2024 – present",
    description:
      "Tela builds AI-powered automation for enterprises — replacing manual workflows with LLM agents. I work full-stack here: Nuxt/Vue frontends, Hono/Bun APIs, and the AI agent infrastructure underneath. Close enough to founders to shape what gets built, not just ship what's already decided.",
    skills: ["TypeScript", "Node.js", "Python", "LLMs", "AI Agents"],
  },
  {
    company: "Pagar.me",
    role: "Senior Software Engineer",
    period: "2021 – 2024",
    description:
      "Pagar.me is Brazil's leading developer-focused payments platform — a Stone Co. subsidiary (NASDAQ: STNE) processing R$367B+ annually across 2.5M+ merchants. I was on the receivables anticipation team, the company's most profitable product. Diagnosed and solved a critical bottleneck on the highest-revenue route — long-query alerts at production scale — with a daily payables aggregation backed by an indexed read store. 90% performance improvement. Delivered a tax optimization mechanism saving R$23M per month. Built the fee calculator end-to-end: the public tool merchants use to simulate anticipation fees across every card brand and installment plan.",
    skills: ["Node.js", "TypeScript", "PostgreSQL", "Kafka", "Python"],
  },
  {
    company: "Sky.One",
    role: "Full Stack Developer → Technical Lead",
    period: "2019 – 2021",
    description:
      "In 2.3 years at Sky.One, I went from entry-level Python developer to Technical Lead — growing across three products and two distinct roles. Each move wasn't planned: it was a product that needed someone to step up. Went from backend microservices maintenance to full-stack development to owning the delivery of a greenfield portal serving 25,000+ enterprise clients.",
    phases: [
      {
        role: "Full Stack Developer",
        period: "Aug 2019 – Apr 2021",
        projects: [
          {
            name: "AutoSky",
            description:
              "Maintained and developed features for AutoSky, Sky.One's flagship ERP-to-cloud migration and virtualization platform. First real exposure to microservices architecture, message queues, and containerization at production scale.",
          },
          {
            name: "IntegraSky",
            description:
              "Joined the IntegraSky team — Sky.One's iPaaS platform for enterprise workflow automation — and helped take it from beta to production launch. Expanded from Python-only backend to full-stack on the job, learning React and Node.js as the product demanded.",
          },
        ],
      },
      {
        role: "Technical Lead",
        period: "May – Nov 2021",
        projects: [
          {
            name: "Customer Portal",
            description:
              "Promoted to Technical Lead and handed a greenfield project: a self-service portal for Sky.One's enterprise client base, integrating SAP, Zoho CRM, and multiple internal systems into a single product. Led 4 engineers through the full delivery cycle. Sky.One now serves 25,000+ enterprise clients on that foundation.",
          },
        ],
      },
    ],
    skills: ["TypeScript", "NestJS", "ReactJS", "Redux", "TypeORM", "Python", "Docker", "AWS", "RabbitMQ"],
  },
  {
    company: "Tivit",
    role: "Junior Software Developer",
    period: "2018 – 2019",
    description:
      "First job in tech. Tivit was one of Brazil's largest IT services firms — 10,000+ employees, with 8 of the 10 largest Brazilian companies as clients. I was on the One.Cloud team: a multi-cloud management portal spanning AWS, GCP, and Azure. Building real enterprise software from day one set the standard for everything that followed.",
    skills: ["Python", "Django", "DRF", "Docker", "Ansible", "AWS", "GCP", "Azure", "RabbitMQ"],
  },
];
