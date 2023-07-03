<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="(article, index) in articles" :key="article.id">
        <div class="article-box" v-if="article.attributes.Autor === user.username">
          <h3 class="article-title">{{ article.attributes.Titulo }}</h3>
          <p>{{ truncateText(article.attributes.Resumo, 250) }}</p>
          <p class="writer-name">By {{ article.attributes.Autor }}</p>
          <a :href="'/article/' + article.id" class="btn btn-primary">Leia mais</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useUserStore } from '../../stores/state';

export default {
  name: 'MyArticlesSection',
  data() {
    return {
      user: useUserStore(),
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
    truncateText(text, limit) {
      if (text.length <= limit) {
        return text;
      }
      return text.substring(0, limit) + '...';
    },
  },
  mounted() {
    this.fetchArticles();
  },
};
</script>

<style>
/* Custom styles */
.article-box {
  border: 1px solid #ccc;
  padding: 10px;
  height: 100%;
}

.article-title {
  font-size: 18px;
}

.writer-name {
  font-size: 14px;
}

.row {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
