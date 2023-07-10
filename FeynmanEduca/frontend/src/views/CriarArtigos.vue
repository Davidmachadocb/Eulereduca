<template>
  <div class="create-article">
    <h3>Criar Artigo</h3>
    <form @submit.prevent="createArticle" class="create-article-form">
      <div class="form-group">
        <label for="title">Título:</label>
        <input type="text" id="title" v-model="article.title" required>
      </div>

      <div class="form-group">
        <label for="summary">Resumo:</label>
        <textarea id="summary" v-model="article.summary" required></textarea>
      </div>

      <div class="form-group">
        <label for="summary">Texto:</label>
        <textarea id="content" v-model="article.content" required></textarea>
      </div>

      <button type="submit" class="create-article-button">Criar</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { useUserStore } from '../stores/state';

export default {
  data() {
    return {
      article: {
        user: null,
        title: '',
        summary: '',
        content: '',
      },
      error: '',
      successMessage: '',
    };
  },
  methods: {
    async createArticle() {
      try {
        const artigo = {
          Titulo: this.article.title,
          Texto: this.article.content,
          Autor: this.user.username,
          Resumo: this.article.summary,
          users_permissions_user: parseInt(this.user.id)
        };

        const response = await axios.post('artigos', { data: artigo }, {
          headers: {
            Authorization: `Bearer ${this.user.jwt}`
          }
        });

        this.article.title = '';
        this.article.summary = '';
        this.article.content = '';
        this.successMessage = 'Artigo criado com sucesso!';
        setTimeout(() => {
          this.successMessage = '';
          this.$router.push('/profile');
        }, 2000);
      } catch (error) {
        console.error('Article creation failed:', error);
        this.error = 'Falha ao criar o artigo. Por favor, tente novamente.';
      }
    },
  },
  computed: {
    user() {
      return useUserStore().$state;
    }
  },
  mounted() {
    this.article.user = this.user;
  }
};
</script>

  
<style scoped>
.create-article {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

.create-article h3 {
  text-align: center;
  margin-bottom: 20px;
}

.create-article-form {
  display: grid;
  grid-gap: 10px;
}

.create-article-form .form-group {
  display: grid;
  grid-template-columns: 1fr;
}

.create-article-form label {
  font-weight: bold;
}

.create-article-form input[type="text"],
.create-article-form textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.create-article-button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}

.preview-image {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}
</style>
  