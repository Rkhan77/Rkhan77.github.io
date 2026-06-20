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
            `Automate the preparation of payment request emails for new and existing clients while accurately calculating fees and service quantities.`,
          imageUrl: 
            'Projects/img/ap1.png',
          link: 'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/e249614a0618cf1ea10f848794adef82972aed72/Projects/img/ap1.png',
        },
        {
          title: 'Automation Project 2: Onboarding Email',
          description:
            'Automated personalised welcome emails for new clients.',
          imageUrl: 'Projects/img/ap2.png',
          link: 'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/refs/heads/main/Projects/img/ap2.png',
        },
        {
          title: 'Automation Project 3: Update Client Database',
          description:
            'Automate client database updates with accurate record handling.',
          imageUrl: 'Projects/img/ap3.png',
          link: 'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/refs/heads/main/Projects/img/ap3.png',
        },
        {
          title: 'Automation Project 4: Update Cellcast and Outlook Contacts',
          description:
            'Sync and update contacts across Cellcast and Outlook automatically.',
          imageUrl: 'Projects/img/ap4.png',
          link: 'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/refs/heads/main/Projects/img/ap4.png',
        },
        {
          title: 'Automation Project 5: Scheduled AI-Powered Marketing SMS',
          description:
            'Schedule and send AI-powered marketing SMS campaigns automatically.',
          imageUrl:
            'Projects/img/ap5.png',
          link: 'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/refs/heads/main/Projects/img/ap5.png',
        },
        {
          title: 'Automation Project 6: Job Allocation Email',
          description:
            'Automated job allocation and notification emails for internal teams.',
          imageUrl:
            'Projects/img/ap6.png',
          link: 'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/refs/heads/main/Projects/img/ap6.png',
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
      from: '2020',
      to: '2022',
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
    defaultTheme: 'forest',
    disableSwitch: true,
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
