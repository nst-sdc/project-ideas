import DefaultTheme from 'vitepress/theme'
import ProjectCard from './components/ProjectCard.vue'
import CategoryGrid from './components/CategoryGrid.vue'
import StatsBar from './components/StatsBar.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectCard', ProjectCard)
    app.component('CategoryGrid', CategoryGrid)
    app.component('StatsBar', StatsBar)
  }
}
