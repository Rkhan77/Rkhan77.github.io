// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'rkhan77',
  },

  base: '/',

  projects: {
    github: {
      display: true,
      header: 'Programming Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 4,
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
      header: 'Automation & AI Projects',
      projects: [
        {
          title: 'Automated Client Billing & Payment System',
          description:
            'Reduced manual billing preparation time by ~80% by automating fee calculation and email generation for client payments',
          imageUrl:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap1.png',
          link:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap1.png',
        },
        {
          title: 'Automated Client Onboarding Email System',
          description:
            'Automated personalised welcome emails for new clients and triggered onboarding workflows',
          imageUrl:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap2.png',
          link:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap2.png',
        },
        {
          title: 'Client Data Synchronisation Pipeline',
          description:
            'Automates client database updates with accurate record validation and cross-system syncing',
          imageUrl:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap3.png',
          link:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap3.png',
        },
        {
          title: 'Cross-Platform Contact Sync Automation',
          description:
            'Syncs and updates contacts between Cellcast and Outlook automatically',
          imageUrl:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap4.png',
          link:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap4.png',
        },
        {
          title: 'AI-Powered SMS Marketing Scheduler',
          description:
            'Schedules and sends AI-assisted SMS marketing campaigns automatically',
          imageUrl:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap5.png',
          link:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap5.png',
        },
        {
          title: 'Automated Job Allocation Notification System',
          description:
            'Automates internal job allocation notifications and workforce coordination emails',
          imageUrl:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap6.png',
          link:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap6.png',
        },
      ],
    },
  },

  seo: {
    title: 'Rezaul Portfolio',
    description: 'Portfolio of automation, AI, and data engineering projects',
    imageURL:
      'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap1.png',
  },

  social: {
    linkedin: 'rezaul-k',
    instagram: 'rezaul_kh4n',
    gurushots: 'RawPixel',
    phone: '+61 449 695 807',
    email: 'khanrezaul77@gmail.com',
  },

  resume: {
    fileUrl:
      'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/Resume_rkhan_2026.pdf',
  },

  skills: [
    'Automation Engineering',
    'Python',
    'JavaScript',
    'API Integration',
    'n8n Workflow Automation',
    'Microsoft Azure (Entra ID)',
    'Google Cloud',
    'Large Language Models',
    'Docker',
    'Data Pipelines',
    'System Integration',
    'REST API Integrations',
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
      companyLink: undefined,
    },
    {
      company: 'ATOM Supply',
      position: 'Data Support Officer',
      from: 'Jun 2023',
      to: 'Dec 2024',
      companyLink: undefined,
    },
  ],

  certifications: [
    {
      name: 'Python for Data Science & AI Development',
      body: 'IBM',
      year: 'March 2022',
      link: 'https://www.coursera.org',
    },
  ],

  educations: [
    {
      institution: 'Edith Cowan University',
      degree: 'Master of Management Information Systems',
      from: '2020',
      to: '2022',
    },
  ],

  googleAnalytics: {
    id: '',
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