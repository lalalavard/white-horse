type NavItem = NavItemWithLink | NavItemWithChildren

type NavItemWithLink = {
  text: string
  link: string
  activeMatch?: string
}

interface NavItemWithChildren {
  text?: string
  items: NavItemWithLink[]
  activeMatch?: string
}

const navbar = [
  { text: 'Docs', link: '/note/Intro/Introduce' },
  { text: 'Courses', link: '/Courses' },
  {
    text: 'Interview',
    items: [
      { text: 'Java', link: '/interview/Java' },
      { text: 'Spring SSM', link: '/interview/SpringSSM' },
      { text: 'Spring Boot', link: '/interview/SpringBoot' },
      { text: 'Spring Cloud', link: '/interview/SpringCloud' },
      { text: 'Redis', link: '/interview/Redis' },
      { text: 'Mysql', link: '/interview/Mysql' },
      { text: 'Vue', link: '/interview/Vue' },
      { text: 'Kafka', link: '/interview/Kafka' },
      { text: 'Leetcode', link: '/interview/Leetcode' },
      { text: 'Resume', link: '/interview/Resume' },
      { text: 'Compony', link: '/interview/Compony' }
    ]
  },
  {
    text: 'Resource',
    items: [
      { text: 'Site Navigation ', link: '/resource/Navagation' },
      { text: 'Technical Books ', link: '/resource/Books' },
      { text: 'Open Source Projects', link: '/resource/Projects' },
      { text: 'Tools Sharing', link: '/resource/Tools' }
    ]
  },
  { text: 'Community', link: '/Community' },
]

// export = navbar
export default navbar
