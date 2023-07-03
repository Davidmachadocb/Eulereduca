<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">FeynmanEduca</router-link>

      <!--somente mostrado se na pagina inicial-->>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a v-if="showMenu" class="nav-link" href="#about">Sobre</a>
          </li>
          <li class="nav-item">
            <a v-if="showMenu" class="nav-link" href="#services">Serviços</a>
          </li>
          <li class="nav-item">
            <a v-if="showMenu" class="nav-link" href="#contact">Contato</a>
          </li>
          <li class="nav-item">
            <router-link v-if="showMenu" to="artigos" class="nav-link">Artigos</router-link>
          </li>
        </ul>
      </div>

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Sign In</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    showLogo() {
      // Check if the current route is not the login page
      return this.$route.path !== '/login';
    },
    showMenu() {
      // Check if the current route is the home page
      return this.$route.path === '/';
    },
  },
};
</script>