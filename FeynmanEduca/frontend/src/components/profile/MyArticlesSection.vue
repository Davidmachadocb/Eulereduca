<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="article in userArticles" :key="article.id">
          <div class="card mb-4 box-shadow">
            <div class="card-body">
              <h5 class="card-title" style="font-weight: bold; font-size: 1.2rem;">{{ article.attributes.Titulo }}</h5>
              <p class="card-text">{{ truncateText(article.attributes.Resumo, 250) }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <router-link :to="'/artigo/' + article.id" class="btn btn-primary">Leia mais</router-link>
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
import { ref } from "vue";
import axios from "axios";
import { useUserStore } from '../../stores/state';

export default {
  data() {
    return {
      articles: [],
    };
  },
  setup() {
    const user = useUserStore();
    const userArticles = ref([]);

    const fetchArticles = async () => {
      try {
        const response = await axios.get("artigos");
        userArticles.value = response.data.data.filter(
          (article) => article.attributes.Autor === user.username
        );
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    const deleteArticle = async (articleId) => {
      try {
        await axios.delete(`artigos/${articleId}`);
        fetchArticles();
      } catch (error) {
        console.error("Error deleting article:", error);
      }
    };

    fetchArticles();

    return {
      userArticles,
      truncateText(text, limit) {
        if (text.length <= limit) {
          return text;
        }
        return text.substring(0, limit) + "...";
      },
      deleteArticle,
    };
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
