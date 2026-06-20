// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Rkhan77',
  },

  base: '/',

  projects: {
    github: {
      display: true,
      header: 'Programming Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },

    external: {
      header: 'Projects',
      projects: [
        {
          title: 'Automation Project 1: Client Payment Request Email',
          description: `Automated the preparation of payment request emails for new and existing clients while accurately calculating fees and service quantities.`,
          imageUrl: '/Projects/img/ap1.png',
          link: 'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap1.png',
        },
        {
          title: 'Automation Project 2: Onboarding Email',
          description: 'Automated personalised welcome emails for new clients.',
          imageUrl: '/Projects/img/ap2.png',
          link: 'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap2.png',
        },
        {
          title: 'Automation Project 3: Update Client Database',
          description: 'Automate client database updates with accurate record handling.',
          imageUrl: '/Projects/img/ap3.png',
          link: 'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap3.png',
        },
        {
          title: 'Automation Project 4: Update Cellcast and Outlook Contacts',
          description: 'Sync and update contacts across Cellcast and Outlook automatically.',
          imageUrl: '/Projects/img/ap4.png',
          link: 'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap4.png',
        },
        {
          title: 'Automation Project 5: Scheduled AI-Powered Marketing SMS',
          description: 'Schedule and send AI-powered marketing SMS campaigns automatically.',
          imageUrl: '/Projects/img/ap5.png',
          link: 'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap5.png',
        },
        {
          title: 'Automation Project 6: Job Allocation Email',
          description: 'Automated job allocation and notification emails for internal teams.',
          imageUrl: '/Projects/img/ap6.png',
          link: 'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap6.png',
        },
      ],
    },

  seo: {
    title: 'Rezaul_Portfolio',
    description: 'Portfolio of automation, AI, and data projects',
    imageURL: '',
  },

  social: {
    location: 'Perth WA 6103, Australia',
    linkedin: 'rezaul-k',
    instagram: 'rezaul_kh4n',
    gurushots: 'RawPixel',
    phone: '0449695807',
    email: 'khanrezaul77@gmail.com',
  },

  resume: {
    fileUrl: '/Projects/Resume_rkhan_2026.pdf',
  },

  skills: [
    'Python',
    'JavaScript',
    'HTML',
    'Microsoft Azure (Entra ID)',
    'Google Cloud',
    'Cellcast SMS Platform',
    'Docker',
    'n8n',
    'Large Language Models',
    'XGBoost Machine Learning Library',
    'LM Studio',
    'REST API Integrations',
    'PyCharm',
    'Jupyter Notebook',
  ],

  experiences: [
    {
      company: 'Ace Tutoring',
      position: 'AI Platform Developer (Contract)',
      from: 'March 2026',
      to: 'Present',
      companyLink: undefined,
    },
    {
      company: 'EverAbility Group',
      position: 'System Administrator',
      from: 'Mar 2025',
      to: 'Jun 2025',
      companyLink: '',
    },
    {
      company: 'ATOM Supply',
      position: 'Data Support Officer',
      from: 'Jun 2023',
      to: 'Dec 2024',
      companyLink: '',
    },
  ],

  certifications: [
    {
      name: 'Python for Data Science & AI Development',
      body: 'IBM',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],

  educations: [
    {
      institution: 'Edith Cowan University',
      degree: 'Master of Management Information Systems',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'Southeast University',
      degree: 'Bachelor of Business Administration (Major in Marketing)',
      from: '2012',
      to: '2014',
    },
  ],

  googleAnalytics: {
    id: 'G-398542808',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'forest',
    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: false,
    themes: [
      'light', 'dark', 'cupcake', 'bumblebee', 'emerald',
      'corporate', 'synthwave', 'retro', 'cyberpunk',
      'valentine', 'halloween', 'garden', 'forest',
      'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe',
      'black', 'luxury', 'dracula', 'cmyk', 'autumn',
      'business', 'acid', 'lemonade', 'night', 'coffee',
      'winter', 'dim', 'nord', 'sunset', 'caramellatte',
      'abyss', 'silk', 'procyon',
    ],
  },

  enablePWA: false,
};

export default CONFIG;
