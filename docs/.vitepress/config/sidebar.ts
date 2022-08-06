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
      { text: 'Introduce', link: '/note/Intro/Introduce' },
      { text: 'Prepare', link: '/note/Intro/Prepare' },
      { text: 'Tips', link: '/note/Intro/Tips' }
    ]
  },
  {
    text: 'Java SE',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Java基础语法', link: '/note/JavaSE/Java基础语法' },
      { text: 'Java对象和多态', link: '/note/JavaSE/Java对象和多态' },
      { text: '异常机制', link: '/note/JavaSE/异常机制' },
      { text: '泛型与集合类', link: '/note/JavaSE/泛型与集合类' },
      { text: 'I/O', link: '/note/JavaSE/IO' },
      { text: '多线程', link: '/note/JavaSE/多线程' },
      { text: '反射和注解', link: '/note/JavaSE/反射和注解' }
    ]
  },
  {
    text: 'Java Web',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Java网络编程', link: '/note/JavaWeb/Java网络编程' },
      { text: '数据库基础', link: '/note/JavaWeb/数据库基础' },
      { text: 'Java与数据库', link: '/note/JavaWeb/Java与数据库' }
    ]
  },
  {
    text: 'Spring MVC',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Spring基础', link: '/note/SpringMVC/Spring基础' },
      { text: 'SpringMVC基础', link: '/note/SpringMVC/SpringMVC基础' },
      {
        text: 'SpringSecurity框架',
        link: '/note/SpringMVC/SpringSecurity框架'
      },
      { text: 'MySQL高级', link: '/note/SpringMVC/MySQL高级' }
    ]
  },
  {
    text: 'Spring Boot',
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: 'SpringBoot核心内容',
        link: '/note/SpringBoot/SpringBoot核心内容'
      },
      {
        text: 'Redis数据库',
        link: '/note/SpringBoot/Redis数据库'
      },
      {
        text: '其他中间件介绍',
        link: '/note/SpringBoot/其他中间件介绍'
      },
      {
        text: 'Git版本控制',
        link: '/note/SpringBoot/Git版本控制'
      },
      {
        text: 'Linux系统与项目部署',
        link: '/note/SpringBoot/Linux系统与项目部署'
      }
    ]
  },
  {
    text: 'Spring Cloud',
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: '微服务基础 Cloud Netflix',
        link: '/note/SpingCloud/微服务基础 Cloud Netflix'
      },
      {
        text: '微服务进阶 Cloud Alibaba',
        link: '/note/SpingCloud/微服务进阶 Cloud Alibaba'
      },
      {
        text: '微服务应用',
        link: '/note/SpingCloud/微服务应用'
      },
      {
        text: '消息队列',
        link: '/note/SpingCloud/消息队列'
      }
    ]
  },
  {
    text: 'Docker',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Docker安装和使用', link: '/note/Docker/Docker安装和使用' },
      { text: '容器和镜像', link: '/note/Docker/容器和镜像' },
      { text: 'DockerFile编写', link: '/note/Docker/DockerFile编写' },
      { text: 'DockerCompose', link: '/note/Docker/DockerCompose' },
      { text: 'Docker集群', link: '/note/Docker/Docker集群' }
    ]
  },
  {
    text: 'Vue',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'ref和reactive', link: '/note/Vue/ref和reactive' },
      { text: 'toRef和toRefs', link: '/note/Vue/toRef和toRefs' },
      { text: 'Computed', link: '/note/Vue/Computed' },
      { text: 'WatchEffect', link: '/note/Vue/WatchEffect' },
      { text: '组件和props', link: '/note/Vue/组件和props' },
      { text: 'Vue生命周期', link: '/note/Vue/Vue生命周期' },
      { text: 'Suspense', link: '/note/Vue/Suspense' },
      { text: 'Vue-Router', link: '/note/Vue/Vue-Router' },
      { text: 'Pinia', link: '/note/Vue/Pinia' }
    ]
  },
  {
    text: 'Data Structure',
    collapsible: true,
    collapsed: true,
    items: [
      { text: '数组', link: '/note/DataStructure/数组' },
      { text: '字符串', link: '/note/DataStructure/字符串' },
      { text: '栈和队列', link: '/note/DataStructure/栈和队列' },
      { text: '链表', link: '/note/DataStructure/链表' },
      { text: '哈希表', link: '/note/DataStructure/哈希表' },
      { text: '二叉树', link: '/note/DataStructure/二叉树' }
    ]
  },
  {
    text: 'Algorithm',
    collapsible: true,
    collapsed: true,
    items: [
      { text: '时间复杂度', link: '/note/Algorithm/时间复杂度' },
      { text: '暴力算法', link: '/note/Algorithm/暴力算法' },
      { text: '排序算法', link: '/note/Algorithm/排序算法' },
      { text: '双指针法', link: '/note/Algorithm/双指针法' },
      { text: '回溯算法', link: '/note/Algorithm/回溯算法' },
      { text: '贪心算法', link: '/note/Algorithm/贪心算法' },
      { text: '动态规划', link: '/note/Algorithm/动态规划' },
      { text: '优化算法', link: '/note/Algorithm/优化算法' }
    ]
  }
]

export default Sidebar
