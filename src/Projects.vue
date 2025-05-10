<template>
  <div class="projects-container">
    <h1>Our Projects</h1>
    <ProjectGrid :projects="projects" />
  </div>
</template>

<script>
import ProjectGrid from './components/ProjectGrid.vue'

export default {
  name: 'Projects',
  components: {
    ProjectGrid
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Project One',
          description: 'This is the first project description.',
          imageUrl: '  https://picsum.photos/600/338'
        },
        {
          id: 2,
          title: 'Project Two',
          description: 'This is the second project description.',
          imageUrl: '  https://picsum.photos/600/338'
        },
        {
          id: 3,
          title: 'Project Three',
          description: 'This is the third project description.',
          imageUrl: '  https://picsum.photos/600/338'
        },
        {
          id: 4,
          title: 'Project Four',
          description: 'This is the fourth project description.',
          imageUrl: '  https://picsum.photos/600/338'
        },
        {
          id: 5,
          title: 'Project Five',
          description: 'This is the fifth project description.',
          imageUrl: '  https://picsum.photos/600/338'
        },
        {
          id: 6,
          title: 'Project Six',
          description: 'This is the sixth project description.',
          imageUrl: '  https://picsum.photos/600/338'
        },
        {
          id: 7,
          title: 'Project Seven',
          description: 'This is the seventh project description.',
          imageUrl: '  https://picsum.photos/600/338'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  margin-bottom: 30px;
  text-align: center;
}
</style>