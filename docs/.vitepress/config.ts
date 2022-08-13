import NavBar from './config/navbar'
import SideBar from './config/sidebar'

export default {
  head: [['link', { rel: 'icon', href: 'whitehorse.png' }]],
  base: '/',
  lang: 'en-US',
  title: 'WhiteHorse',
  description:
    'A powerful orginization which teach Java, Spring, Spring Boot, and more',

  // Theme related configurations.
  themeConfig: {
    logo: 'whitehorse.png',
    nav: NavBar,
    algolia: {},
    sidebar: SideBar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present White-Horse'
    }
  },
  theme: './theme/index.ts'
}
