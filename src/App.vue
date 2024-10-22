

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <div>

    <header>
      <h1>Kristi's Portfolio</h1>
    </header>
    <div class="content">
      <router-view name="App" />
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
    </nav>
    <Footer />
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */

header {
  line-height: normal;
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
  background-color: azure;  
  padding: 20px;
}
</style>
