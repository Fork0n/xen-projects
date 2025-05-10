<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="landing-aspect">
    <header class="gradient-header">
      <nav class="navbar">
        <RouterLink to="/" class="nav-btn" exact-active-class="active">Home</RouterLink>
        <RouterLink to="/projects" class="nav-btn" active-class="active">Projects</RouterLink>
        <RouterLink to="/sponsor" class="nav-btn" active-class="active">Sponsor</RouterLink>
      </nav>
      <div class="header-content">
        <img src="./assets/x-logo.svg" alt="Xen Projects Logo" class="logo" />
        <div>
          <h1 class="title">xen-projects</h1>
          <p class="subtitle">Innovate, Collaborate, Build the Future</p>
        </div>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.landing-aspect {
  min-height: 100vh;
  width: 100vw;
  background: #181c26;
  display: flex;
  flex-direction: column;
}

.gradient-header {
  width: 100%;
  padding: 36px 0 24px 0;
  background: linear-gradient(270deg, #181c26, #35296b, #8a3ffc 80%);
  background-size: 1200% 1200%;
  animation: gradientAnimation 60s ease-in-out infinite;
  box-shadow: 0 4px 24px 0 rgba(30,30,65,0.22);
  border-bottom: 1.5px solid rgba(120,120,160,0.09);
}

@keyframes gradientAnimation {
  0% {background-position: 0 50%;}
  25% {background-position: 50% 100%;}
  50% {background-position: 100% 50%;}
  75% {background-position: 50% 0;}
  100% {background-position: 0 50%;}
}

.navbar {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0 40px 16px 40px;
  border-radius: 22px 22px 0 0;
}

.nav-btn {
  color: #f3ebff;
  background: rgba(35,33,95,0.28);
  border-radius: 8px 8px 0 0;
  padding: 8px 22px 6px 22px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 1.5px;
  font-size: 1.1rem;
  transition: background 0.16s, color 0.17s;
  border: none;
  outline: none;
}
.nav-btn.active,
.nav-btn.router-link-active {
  background: #4424a7;
  color: #fff;
}

.header-content {
  font-family: "Arial Black";
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.logo {
  width: 96px;
  height: 96px;
  border-radius: 16px;
  background: rgba(255,255,255,0.09);
  box-shadow: 0 2px 12px 2px rgba(0,0,0,0.11);
}

.title {
  font-size: 2.4rem;
  font-weight: 900;
  color: #fafaff;
  margin-bottom: 0.2em;
  letter-spacing: 2px;
  text-shadow: 0 2px 16px rgba(80,0,120,0.13);
}

.subtitle {
  color: #e9e2fa;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-shadow: 0 1px 6px rgba(60,0,80,0.11);
}

main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 700px) {
  .header-content {
    flex-direction: column;
    gap: 16px;
  }
  .logo {
    width: 68px; height: 68px;
  }
  .navbar {
    padding: 0 10px 16px 10px;
  }
}
</style>