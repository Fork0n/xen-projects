<script setup>
import { RouterView, RouterLink } from 'vue-router'
const userProfileImage = "https://picsum.photos/40/40"
</script>

<template>
  <div class="landing-aspect">
    <header class="gradient-header">
      <nav class="navbar">
        <div class="nav-links">
          <RouterLink to="/" class="nav-btn" exact-active-class="active">Home</RouterLink>
          <RouterLink to="/projects" class="nav-btn" active-class="active">Projects</RouterLink>
          <RouterLink to="/sponsor" class="nav-btn" active-class="active">Sponsor</RouterLink>
        </div>
        <RouterLink to="/account" class="profile-btn">
          <img :src="userProfileImage" alt="User Profile" class="profile-image" />
        </RouterLink>

      </nav>
      <div class="header-content">
        <img src="./assets/x-logo.svg" alt="Xen Projects Logo" class="logo" />
        <div>
          <h1 class="title">xen-projects</h1>
          <p class="subtitle">Not following the system</p>
        </div>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Global styles to fix white border issues */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background: #181c26;
}

#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fafaff;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
</style>

<style scoped>
.landing-aspect {
  min-height: 100vh;
  width: 100%; /* Changed from 100vw to 100% */
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
  justify-content: space-between; /* Change from center to space-between */
  align-items: center;
  padding: 0 24px 16px 24px;
  border-radius: 22px 22px 0 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}


.nav-btn {
  color: #f3ebff;
  background: rgba(35,33,95,0.28);
  border-radius: 12px; /* Increased roundness from 8px 8px 0 0 */
  padding: 8px 22px 6px 22px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 1.5px;
  font-size: 1.1rem;
  transition: background 0.16s, color 0.17s, border-color 0.2s; /* Added border-color transition */
  border: 1px solid rgba(138, 63, 252, 0.4); /* Added a subtle purple border */
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Optional: adds a slight shadow */
}

/* Add a container for the navigation links */
.nav-links {
  display: flex;
  gap: 10px;
}

/* Profile button styles */
.profile-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(35, 33, 95, 0.28);
  border: 2px solid rgba(138, 63, 252, 0.5);
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.profile-btn:hover {
  transform: scale(1.05);
  border-color: #8a3ffc;
  box-shadow: 0 3px 15px rgba(138, 63, 252, 0.4);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.nav-btn.active,
.nav-btn.router-link-active {
  background: #4424a7;
  color: #fff;
  border-color: #8a3ffc; /* Brighter border for active state */
  box-shadow: 0 2px 12px rgba(138, 63, 252, 0.3); /* Enhanced shadow for active state */
}

/* Optional: add a hover effect */
.nav-btn:hover:not(.active):not(.router-link-active) {
  background: rgba(35,33,95,0.5);
  border-color: rgba(138, 63, 252, 0.7);
}

.header-content {
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
  .nav-links {
    gap: 5px;
  }
  .nav-btn {
    padding: 6px 14px;
    font-size: 0.95rem;
  }

}
</style>