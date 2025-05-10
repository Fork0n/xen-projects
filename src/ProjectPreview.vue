<template>
  <div class="project-preview">
    <div class="preview-image">
      <img :src="project.imageUrl" :alt="project.title" />
    </div>
    <div class="preview-content">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectPreview',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.project-preview {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(20, 0, 50, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #262a44;
  border: 1px solid #35296b;
}

.project-preview:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(35, 0, 90, 0.25);
}

.project-preview:hover .preview-content {
  background: linear-gradient(270deg, #35296b, #594380, #8a3ffc, #673ab7, #4424a7);
  background-size: 500% 500%;
  animation: gradientAnimation 15s ease infinite;
}

@keyframes gradientAnimation {
  0% {background-position: 0% 50%;}
  25% {background-position: 50% 100%;}
  50% {background-position: 100% 50%;}
  75% {background-position: 50% 0%;}
  100% {background-position: 0% 50%;}
}

.preview-image {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  background: #212338;
}

.preview-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-preview:hover .preview-image img {
  transform: scale(1.05);
}

.preview-content {
  padding: 18px;
  flex: 1;
  background: #212338;
  transition: background 0.3s ease;
}

.preview-content h3 {
  margin: 0 0 8px 0;
  font-size: 1.25rem;
  color: #f3ebff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.preview-content p {
  margin: 0;
  color: #e9e2fa;
  font-size: 0.9rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}
</style>