<template>
  <div class="category-grid">
    <a
      v-for="cat in categories"
      :key="cat.title"
      :href="cat.link"
      class="category-card"
      :style="{ '--accent': cat.color }"
    >
      <span class="category-icon">{{ cat.icon }}</span>
      <h3>{{ cat.title }}</h3>
      <p>{{ cat.description }}</p>
      <div class="category-meta">
        <span class="category-count">{{ cat.count }} projects</span>
        <span class="category-arrow">&rarr;</span>
      </div>
    </a>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'

const categories = [
  {
    title: 'Web Applications',
    icon: '🌐',
    description: 'Full-stack apps from a single HTML file to deployed platforms.',
    count: 16,
    color: '#3b82f6',
    link: withBase('/web/'),
  },
  {
    title: 'Creative & Visual',
    icon: '🎨',
    description: 'Things you can see, hear, animate, and generate.',
    count: 14,
    color: '#a855f7',
    link: withBase('/creative/'),
  },
  {
    title: 'Games',
    icon: '🎮',
    description: 'Game loops, physics, sprites, and multiplayer.',
    count: 4,
    color: '#ef4444',
    link: withBase('/games/'),
  },
  {
    title: 'System-Level',
    icon: '⚙️',
    description: 'Operating systems, networking, hardware, and the stuff beneath the browser.',
    count: 14,
    color: '#f59e0b',
    link: withBase('/systems/'),
  },
  {
    title: 'Cluster Projects',
    icon: '🖥️',
    description: 'Distributed systems built to run on the NST Compute Cluster.',
    count: 16,
    color: '#10b981',
    link: withBase('/cluster/'),
  },
]
</script>

<style scoped>
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
  padding: 1rem 0;
}
.category-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}
.category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent);
}
.category-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}
.category-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.category-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.15rem;
  font-weight: 700;
}
.category-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  flex: 1;
}
.category-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--vp-c-divider);
}
.category-count {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent);
}
.category-arrow {
  font-size: 1.1rem;
  color: var(--accent);
  transition: transform 0.2s;
}
.category-card:hover .category-arrow {
  transform: translateX(4px);
}
</style>
