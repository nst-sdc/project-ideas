<template>
  <a :href="link" class="project-card" :class="difficultyClass">
    <div class="project-header">
      <span class="project-difficulty">{{ difficulty }}</span>
      <span class="project-time">{{ time }}</span>
    </div>
    <h4 class="project-title">{{ title }}</h4>
    <p class="project-desc">{{ description }}</p>
    <div class="project-skills">
      <span v-for="skill in skillList" :key="skill" class="skill-tag">{{ skill }}</span>
    </div>
    <div class="project-built-by" v-if="builtBy">
      <span class="built-label">Built by:</span> {{ builtBy }}
    </div>
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  title: String,
  description: String,
  difficulty: String,
  time: String,
  skills: String,
  builtBy: String,
  href: String,
})

const link = computed(() => withBase(props.href || '#'))

const skillList = computed(() =>
  props.skills ? props.skills.split(',').map(s => s.trim()).slice(0, 4) : []
)

const difficultyClass = computed(() => ({
  'diff-beginner': props.difficulty === 'Beginner',
  'diff-intermediate': props.difficulty === 'Intermediate',
  'diff-advanced': props.difficulty === 'Advanced',
}))
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
}
.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.project-difficulty {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border-radius: 4px;
}
.diff-beginner .project-difficulty { background: #dcfce7; color: #166534; }
.diff-intermediate .project-difficulty { background: #fef3c7; color: #92400e; }
.diff-advanced .project-difficulty { background: #fce7f3; color: #9d174d; }
:root.dark .diff-beginner .project-difficulty { background: #14532d; color: #86efac; }
:root.dark .diff-intermediate .project-difficulty { background: #78350f; color: #fde68a; }
:root.dark .diff-advanced .project-difficulty { background: #831843; color: #f9a8d4; }
.project-time {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}
.project-title {
  margin: 0 0 0.4rem;
  font-size: 1.05rem;
  font-weight: 700;
}
.project-desc {
  margin: 0 0 0.75rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  flex: 1;
}
.project-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 0.5rem;
}
.skill-tag {
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 4px;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
}
.project-built-by {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  padding-top: 0.5rem;
  border-top: 1px solid var(--vp-c-divider);
}
.built-label {
  font-weight: 600;
}
</style>
