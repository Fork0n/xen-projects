<template>
  <div class="project-grid">
    <ProjectPreview 
      v-for="project in projects" 
      :key="project.id" 
      :project="project" 
      class="grid-item"
    />
  </div>
</template>

<script>
import ProjectPreview from '../ProjectPreview.vue'

export default {
  name: 'ProjectGrid',
  components: {
    ProjectPreview
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  width: 100%;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .project-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 992px) {
  .project-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>