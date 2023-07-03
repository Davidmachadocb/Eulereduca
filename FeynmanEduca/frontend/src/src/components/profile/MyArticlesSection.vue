<template>
  <div class="my-articles-section">
    <h3 class="section-title">Meus Artigos</h3>
    <div v-if="articles.length > 0">
      <div v-for="article in articles" :key="article.id" class="article-box">
        <div v-if="article.attributes.Autor === user.username">
          <h4 class="article-title">{{ article.attributes.Titulo }}</h4>
          <p class="article-summary">{{ article.attributes.Resumo }}</p>
        </div>
      </div>
    </div>
    <p v-else class="no-articles-message">Não há artigos disponíveis.</p>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'MyArticlesSection',
  props: ['user'],
  data() {
    return {
      articles: [],
      error: '',
    };
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await axios.get('artigos');
        this.articles = response.data.data;
      } catch (error) {
        console.error('Failed to fetch articles:', error);
        this.error = 'Failed to fetch articles. Please try again.';
      }
    },
  },
  mounted() {
    this.fetchArticles();
  },
};
</script>

<style scoped>
/* Styles go here */
</style>
