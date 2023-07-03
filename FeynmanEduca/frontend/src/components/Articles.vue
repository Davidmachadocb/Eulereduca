<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="article in articles" :key="article.id">
          <div class="card mb-4 box-shadow">
            <div class="card-body">
              <h5 class="card-title" style="font-weight: bold; font-size: 1.2rem;">{{ article.attributes.Titulo }}</h5>
              <p class="card-text">{{ truncateText(article.attributes.Resumo, 250) }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Curtir</button>
                </div>
                <router-link :to="'/artigo/' + article.id" class="btn btn-primary">Leia mais</router-link>
              </div>
            </div>
          </div>
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
        .get("artigos")
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
