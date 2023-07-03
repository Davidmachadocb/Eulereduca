<template>
  <div class="dashboard">
    <h2 class="dashboard-title">Bem vindo ao FeynmanEduca!</h2>
    <p class="username">Você está logado como: {{ user.username }}</p>

    <nav class="dashboard-nav">
      <ul class="dashboard-menu">
        <li class="dashboard-menu-item">
          <button @click="selectSection('ProfileSection')" class="dashboard-link">Perfil</button>
        </li>
        <li class="dashboard-menu-item">
          <button @click="selectSection('MyArticlesSection')" class="dashboard-link">Meus artigos</button>
        </li>
        <li class="dashboard-menu-item">
          <button @click="selectSection('CreateArticleSection')" class="dashboard-link">Criar Artigo</button>
        </li>
        <li class="dashboard-menu-item">
          <button @click="selectSection('ArticlesSection')" class="dashboard-link">Artigos</button>
        </li>
      </ul>
    </nav>

    <div class="dashboard-content">
      <component :is="selectedSection" :user="user"></component>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProfileSection from "../components/profile/ProfileSection.vue";
import MyArticlesSection from "../components/profile/MyArticlesSection.vue";
import CreateArticleSection from "../components/profile/CreateArticleSection.vue";
import ArticlesSection from "../components/profile/ArticlesSection.vue";

export default {
  name: 'Home',
  data() {
    return {
      user: {},
      selectedSection: ''
    };
  },
  async created() {
    try {
      const response = await axios.get('users/me', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });

      this.user = response.data;
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  },
  methods: {
    selectSection(section) {
      console.log(section);
      this.selectedSection = section;
    }
  },
  components: {
    ProfileSection,
    MyArticlesSection,
    CreateArticleSection,
    ArticlesSection,
  }
};
</script>

<style scoped>
.dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.dashboard-title {
  text-align: center;
}

.username {
  text-align: center;
  margin-bottom: 20px;
}

.dashboard-nav {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
}

.dashboard-menu {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.dashboard-menu-item {
  margin-right: 10px;
}

.dashboard-link {
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  border-radius: 3px;
  transition: background-color 0.3s;
}

.dashboard-link:hover {
  background-color: #eee;
}
</style>
