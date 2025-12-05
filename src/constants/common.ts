import { IEducationItem, IExperienceItem } from '@/types/experience'
import { FiBookOpen, FiClipboard, FiGlobe, FiHome, FiMail, FiUser, FiBriefcase } from 'react-icons/fi'

export const HOST = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'

export const NAV_ITEMS = [
  { path: '/', label: 'Home', Icon: FiHome },
  { path: '/about', label: 'About', Icon: FiUser },
  { path: '/education', label: 'Education', Icon: FiBookOpen },
  { path: '/experience', label: 'Experience', Icon: FiBriefcase },
  { path: '/projects', label: 'Projects', Icon: FiClipboard },
  { path: '/blog', label: 'Blog', Icon: FiGlobe },
  { path: '/contact', label: 'Contact', Icon: FiMail },
]

export const PAGE_TITLES = {
  '/': '._',
  '/about': 'About',
  '/blog': 'Blog',
  '/projects': 'Projects',
  '/contact': 'Contact',
  '/education': 'Education',
  '/experience': 'Experience',
}

export const SOCIALS = {
  GH: 'https://github.com/marwa-shahal',
  IN: 'http://www.linkedin.com/in/marwa-al-shahal',
  MA: 'marwa.al.shahal@gmail.com',
}

export const RESUME_URL = 'https://docs.google.com/document/d/1kSrh6fIO6Fo1xYPmbuZ2_P77DCgDItEZ-3VSU4209-k/edit?usp=sharing'

export const FORMSPREE_KEY = 'xwpgbpyn'

export const EXPERIENCE_DATA: IExperienceItem[] = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Vianeos',
    location: 'Tripoli, Lebanon',
    period: 'Sep 2023 — Aug 2025',
    description: [
      'Developed and delivered front-end features using Angular, React, and Next.js, ensuring responsive, accessible interfaces across devices for diverse IPTV and OTT product requirements.',
      'Contributed to the development of a custom CMS built with a proprietary JavaScript framework based on object-oriented programming principles.',
      'Designed and maintained backend APIs using Node.js and MySQL, supporting seamless integration between front-end systems and content management.',
      'Resolved bugs, resulting in improved application performance and stability.',
      'Collaborated with design, QA, and backend teams in Agile sprints to deliver features on schedule.',
      'Created user documentation and participated in cross-team stakeholder meetings to clarify technical requirements.',
    ],
  },
  {
    id: 2,
    title: 'Coding & Robotics Trainer',
    company: 'CodeBrave',
    location: 'Lebanon',
    period: 'Oct 2021 — Present',
    description: [
      'Plan, prepare, and deliver remote coding classes for youth in Lebanon aged 11-21, teaching them Python and web development.',
      'Mentored and guided through the full lifecycle of project development, fostering independent problem-solving and technical skill growth through engaging project-based lessons.',
      'Deliver remote coding classes to students aged 5+, introducing them to basic coding concepts through Scratch and other educational platforms.',
      'Foster a fun and interactive learning environment to inspire and motivate students in their coding journey.',
    ],
  },
  {
    id: 3,
    title: 'Mentee',
    company: 'Codi tech',
    location: 'Tripoli, Lebanon',
    period: 'Nov 2022 — May 2023',
    description: [
      'Six-month intensive web development boot camp providing hands-on experience with real-life client projects.',
      "Collaborated with fellow mentees on all phases of the project's development life cycle.",
      'Gathered requirements, designed, developed, tested, and deployed dynamic web applications.',
      'Developed creative solutions responding to the project requirements of diverse clients.',
    ],
  },
  {
    id: 4,
    title: 'Mathematics Teacher',
    company: 'AZM Educational Campus',
    location: 'Tripoli, Lebanon',
    period: 'Sep 2021 — July 2022',
    description: [
      'Managed and taught a classroom of 25 - 30 cycle 2 & 3 students.',
      'Developed and implemented engaging math lessons that aligned with the Common Core Standards.',
      'Assessed learning progress through formative and summative evaluation methods.',
    ],
  },
  {
    id: 5,
    title: 'BLN Facilitator',
    company: 'Al Fayhaa Association',
    location: 'Tripoli, Lebanon',
    period: 'Mar 2021 — June 2021',
    description: [
      'Teach Math remotely to 55+ out of school children (10-14) years old following BLN curriculum.',
      "Monitor and evaluate each student's learning progress throughout daily follow ups and weekly assessments.",
    ],
  },
  {
    id: 6,
    title: 'Mathematics Teacher',
    company: 'Darb Al Tabbanah School',
    location: 'Tripoli, Lebanon',
    period: 'Aug 2019 — July 2020',
    description: [
      'Develop yearly plans, weekly and daily lesson plans for cycle 1 & 2 students.',
      'Manage classes of 15+ students effectively by implementing positive and active learning strategies.',
      'Design Educational videos, Exams, Worksheets.',
    ],
  },
]



export const EDUCATION_DATA: IEducationItem[] = [
  {
    type: 'certification',
    title: 'IBM IT Project Manager',
    institution: 'Coursera',
    location: 'Online',
    period: 'Oct 2025',
    details: [
      'Completed 6 courses covering traditional and Agile PM methodologies, stakeholder management, risk analysis, and project execution.',
      'Training included: Project Management Foundations, Initiation & Planning, Agile Development & Scrum, Scrum Master Profession.',
    ],
  },
  // {
  //   type: 'certification',
  //   title: 'Machine Learning Specialization Bootcamp',
  //   institution: 'Zaka AI',
  //   location: 'Online',
  //   period: 'May 2025 — Oct 2025',
  //   details: ['20 weeks of intensive project-based learning in Machine Learning.'],
  // },
  {
    type: 'certification',
    title: 'Google Data Analytics Certificate',
    institution: 'Coursera',
    location: 'Online',
    period: 'Jan 2023',
    details: ['8 courses covering data processing, analysis, and visualization, including a capstone project.'],
  },
  {
    type: 'certification',
    title: 'Google Project Management Professional Certificate',
    institution: 'Coursera',
    location: 'Online',
    period: 'Dec 2021',
    details: ['6 courses on Agile and traditional PM methodologies, stakeholder management, and project delivery.'],
  },
  {
    type: 'certification',
    title: 'Front End Web Development Bootcamp',
    institution: 'Re:Coded & Flatiron School',
    location: 'Online',
    period: 'Nov 2020 — Mar 2021',
    details: [
      '5 months of intensive project-based learning in HTML/CSS, JavaScript, and React.',
      'Included an immersive coding experience with a simulated client project.',
    ],
  },
  // Academic Education
  {
    type: 'academic',
    title: 'Master1 Degree in Pure Mathematics',
    institution: 'Lebanese University / Faculty of Sciences',
    location: 'Tripoli, Lebanon',
    period: 'Nov 2018',
    details: ['Strong background in complex problem-solving and analytical thinking.'],
  },
  // Diploma
  {
    type: 'diploma',
    title: 'Teaching Skills Diploma',
    institution: 'Ajwad Organization',
    location: 'Tripoli, Lebanon',
    period: 'Sep 2018',
    details: ['Completed 75 training hours in educational methods.'],
  },
];
