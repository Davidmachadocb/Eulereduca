<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="article in articles" :key="article.id">
          <div class="card mb-4 box-shadow">
            <div class="card-body">
              <h5 class="card-title" style="font-weight: bold; font-size: 1.2rem;">{{ article.Titulo }}</h5>
              <p class="card-text">{{ truncateText(article.Resumo, 250) }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <router-link :to="'/artigo/' + article.id" class="btn btn-primary">Leia mais</router-link>
                <router-link :to="'/editar-artigo/' + article.id" class="btn btn-sm btn-secondary">Editar</router-link>
                <button type="button" class="btn btn-sm btn-danger" @click="deleteArticle(article.id)">Delete</button>
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
import { useUserStore } from '../../stores/state';

export default {
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    async fetchArticles() {
      try {
        const user = useUserStore();
        const auth = {
          Authorization: `Bearer ${user.jwt}`
        };
        const response = await axios.get("users/me?populate=artigos", {
          headers: auth
        });
        this.articles = response.data.artigos;
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    },
    async deleteArticle(articleId) {
      try {
        const user = useUserStore();
        const auth = {
          Authorization: `Bearer ${user.jwt}`
        };
        await axios.delete(`artigos/${articleId}`, {
          headers: auth
        });
        this.fetchArticles();
      } catch (error) {
        console.error("Error deleting article:", error);
      }
    },
    truncateText(text, limit) {
      if (text.length <= limit) {
        return text;
      }
      return text.substring(0, limit) + "...";
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

.btn-danger {
  background-color: red;
  border-color: red;
}
</style>
