<template>
  <div class="stats-bar">
    <div class="stat" v-for="stat in stats" :key="stat.label">
      <span class="stat-number">{{ stat.value }}</span>
      <span class="stat-label">{{ stat.label }}</span>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { value: '64', label: 'Projects' },
  { value: '5', label: 'Categories' },
  { value: '800+', label: 'Guided Steps' },
  { value: '0', label: 'Excuses Left' },
]
</script>

<style scoped>
.stats-bar {
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 2rem 1rem;
  margin: 2rem 0;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}
.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--vp-c-brand-1);
}
.stat-label {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
@media (max-width: 640px) {
  .stats-bar { gap: 1.5rem; flex-wrap: wrap; }
  .stat-number { font-size: 1.5rem; }
}
</style>
