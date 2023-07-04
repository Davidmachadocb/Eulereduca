<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">FeynmanEduca</router-link>

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
          <li class="nav-item" v-if="isAuthenticated || showMenu">
            <router-link to="/artigos" class="nav-link">Artigos</router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <router-link to="/criar-artigos" class="nav-link">Criar Artigos</router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <router-link to="/profile" class="nav-link">Perfil</router-link>
          </li>
        </ul>
      </div>

      <ul class="navbar-nav">
        <li class="nav-item" v-if="isAuthenticated">
          <a class="nav-link" @click="logout">Logout</a>
        </li>
        <li class="nav-item" v-else>
          <router-link to="/login" class="nav-link">Sign In</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useUserStore } from '../stores/state';

export default {
  computed: {
    showLogo() {
      return this.$route.path !== '/login';
    },
    showMenu() {
      return this.$route.path === '/';
    },
    isAuthenticated() {
      const userStore = useUserStore();
      return userStore.isAuthenticated;
    },
  },
  methods: {
    logout() {
      const userStore = useUserStore();
      userStore.logout();
      localStorage.clear();
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
/* Styles remain the same */
</style>
