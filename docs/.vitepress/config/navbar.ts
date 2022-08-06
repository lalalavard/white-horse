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
  { text: 'Guide', link: '/note/Intro/Introduce' },
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
  // {
  //   text: 'Resource',
  //   items: [
  //     { text: 'Technical Books ', link: '/resource/Java' },
  //     { text: 'Open Source Projects', link: '/resource/SpringBoot' },
  //     { text: 'Site Navigation ', link: '/resource/SpringBoot' },
  //     { text: 'Tools Sharing', link: '/resource/SpringBoot' }
  //   ]
  // },
  { text: 'About', link: '/About' },
  { text: 'Links', link: '/FriendLink' }
]

// export = navbar
export default navbar
