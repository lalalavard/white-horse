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
  { text: 'Guide', link: '/note/Intro/index' },
  {
    text: 'Interview',
    items: [
      { text: 'Java', link: '/interview/Java' },
      { text: 'Spring Boot', link: '/interview/SpringBoot' },
      { text: 'Spring MVC', link: '/interview/SpringMVC' },
      { text: 'Redis', link: '/interview/Redis' },
      { text: 'Mysql', link: '/interview/Mysql' },
      { text: 'Vue', link: '/interview/Vue' },
      { text: 'Kafka', link: '/interview/Kafka' },
      { text: 'Leetcode', link: '/interview/Leetcode' },
      { text: 'Resume', link: '/interview/Resume' },
      { text: 'Compony', link: '/interview/Compony' }
    ]
  },
  { text: 'About', link: '/About' },
  { text: 'Links', link: '/FriendLink' }
]

// export = navbar
export default navbar
