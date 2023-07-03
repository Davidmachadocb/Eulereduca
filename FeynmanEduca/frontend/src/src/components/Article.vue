<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="article in articles" :key="article.id">
        <div class="article-box">
          <h3 class="article-title">{{ article.attributes.Titulo }}</h3>
          <p>{{ truncateText(article.attributes.Resumo, 250) }}</p>
          <p class="writer-name">By {{ article.attributes.Autor }}</p>
          <a href="#" class="btn btn-primary">Leia mais</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.fetchArticles();
  },
  methods: {
    fetchArticles() {
      axios
        .get("api/artigos")
        .then((response) => {
          this.articles = response.data.data;
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
    },
    truncateText(text, limit) {
      if (text.length <= limit) {
        return text;
      }
      return text.substring(0, limit) + "...";
    },
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
