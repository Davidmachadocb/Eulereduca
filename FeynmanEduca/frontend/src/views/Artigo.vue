<template>
  <div v-if="article" class="container mt-5">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">{{ article.attributes.Titulo }}</h2>
        <p class="card-text">{{ article.attributes.Resumo }}</p>
        <p class="card-text"><strong>Autor:</strong> {{ article.attributes.Autor }}</p>
        <div class="article-content" v-html="article.attributes.Texto"></div>
      </div>
    </div>
  </div>
</template>

  
<script>
import axios from "axios";

export default {
  data() {
    return {
      article: null,
    };
  },
  mounted() {
    const articleId = this.$route.params.id;
    this.fetchArticle(articleId);
  },
  methods: {
    fetchArticle(articleId) {
      axios
        .get(`artigos/${articleId}`)
        .then((response) => {
          this.article = response.data.data;
        })
        .catch((error) => {
          console.error("Error fetching article:", error);
        });
    },
  },
};
</script>
  
<style scoped>
.card {
  border-radius: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.card-text {
  font-size: 16px;
  margin-bottom: 10px;
}

.article-content {
  font-size: 18px;
  line-height: 1.6;
}
</style>
  