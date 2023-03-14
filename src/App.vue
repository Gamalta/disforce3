<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <h1 class="green">Dis-force3</h1>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/profile">profile</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
<style scoped>
header {
  display: flex;
  line-height: 1.5;
  max-height: 100vh;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1.6rem;

    padding: 1rem 0;
  }
}

main {
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 12px;
  background-color: rgba(60, 60, 60, 0.29);
}
</style>
