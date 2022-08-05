type Sidebar = SidebarGroup[] | SidebarMulti

interface SidebarMulti {
  [path: string]: SidebarGroup[]
}

interface SidebarGroup {
  text: string
  items: SidebarItem[]
  collapsible?: boolean
  collapsed?: boolean
}

interface SidebarItem {
  text: string
  link: string
}

const Sidebar = [
  {
    text: 'Intro',
    collapsible: true,
    collapsed: true,
    items: [
      // This shows `/note/config/index.md` page.
      { text: 'Index', link: '/note/Intro/index' }, // /note/Intro/index.md
      { text: 'Three', link: '/note/Intro/three' },
      { text: 'Four', link: '/note/Intro/four' }
    ]
  },
  {
    text: 'Java SE',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Index', link: '/note/JavaSE/index' },
      { text: 'Three', link: '/note/JavaSE/three' },
      { text: 'Four', link: '/note/JavaSE/four' }
    ]
  },
  {
    text: 'Java Web',
    collapsible: true,
    collapsed: true,
    items: [{ text: 'Index', link: '/note/JavaWeb/index' }]
  },
  {
    text: 'Spring MVC',
    collapsible: true,
    collapsed: true,
    items: [{ text: 'Index', link: '/note/SpringMVC/index' }]
  },
  {
    text: 'Spring Boot',
    collapsible: true,
    collapsed: true,
    items: [{ text: 'Index', link: '/note/SpringBoot/index' }]
  },
  {
    text: 'Spring Cloud',
    collapsible: true,
    collapsed: true,
    items: [{ text: 'Index', link: '/note/SpingCloud/index' }]
  },
  {
    text: 'Docker',
    collapsible: true,
    collapsed: true,
    items: [{ text: 'Index', link: '/note/Docker/index' }]
  },
  {
    text: 'Vue',
    collapsible: true,
    collapsed: true,
    items: [{ text: 'Index', link: '/note/Vue/index' }]
  },
  {
    text: 'Data Structure',
    collapsible: true,
    collapsed: true,
    items: [{ text: 'Index', link: '/note/DataStructure/index' }]
  },
  {
    text: 'Algorithm',
    collapsible: true,
    collapsed: true,
    items: [{ text: 'Index', link: '/note/Algorithm/index' }]
  }
]

export default Sidebar
