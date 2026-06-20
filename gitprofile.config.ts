// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Rkhan77',
  },

  base: '/',

  projects: {
    github: {
      display: false,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: true,
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
          description:
            `• Automated fee and service quantity calculations
• Generated personalised payment request emails
• Created Outlook draft emails for review
• Updated processing logs automatically
• Reduced manual administration and calculation errors`,
          imageUrl: 'Projects/img/Client Payment Info Automation.png',
          link: 'https://example.com',
        },
        {
          title: 'Automation Project 2: Onboarding Email',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Automation Project 3: Update Client Database',
          description:
            'Automate client database updates with accurate record handling.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Automation Project 4: Update Cellcast and Outlook Contacts',
          description:
            'Sync and update contacts across Cellcast and Outlook automatically.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Automation Project 5: Scheduled AI-Powered Marketing SMS',
          description:
            'Schedule and send AI-powered marketing SMS campaigns automatically.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Automation Project 6: Job Allocation Email',
          description:
            'Automate job allocation and notification emails for internal teams.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },

  seo: {
    title: 'Rezaul_Portfolio',
    description: '',
    imageURL: '',
  },

  social: {
    location: 'Perth WA 6103 Australia',
    linkedin: 'rezaul-k',
    instagram: 'rezaul_kh4n',
    gurushots: 'https://gurushots.com/RawPixel/',
    phone: '0449695807',
    email: 'khanrezaul77@gmail.com',
  },

  resume: {
    fileUrl: 'Resume_rkhan_2026.pdf',
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
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],

  certifications: [
    {
      name: 'Python for data science & AI development',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],

  educations: [
    {
      institution: 'Edith Cowan University',
      degree: 'Master of Management Information Systems',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
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
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: false,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  enablePWA: true,
};

export default CONFIG;
