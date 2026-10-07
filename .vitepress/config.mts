import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ML Docs',
  description: 'Machine Learning Documentation',

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Syllabus', link: '/content/syllabus.md' },
    ],

    sidebar: [
      {
        text: 'Machine Learning',
        items: [
          {
            text: 'Prerequisites',
            link: '/content/ml/prerequisites'
          }
        ]
      }
    ]
  }
})