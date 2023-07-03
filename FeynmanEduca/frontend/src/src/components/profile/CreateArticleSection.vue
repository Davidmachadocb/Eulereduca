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
        <label for="content">Conteúdo:</label>
        <editor v-model="article.content"></editor>
      </div>

      <div class="form-group">
        <label for="image">Imagem:</label>
        <input type="file" id="image" @change="handleImageUpload">
      </div>

      <div class="form-group">
        <img v-if="article.image" :src="article.image" alt="Article Image" class="preview-image">
      </div>

      <button type="submit" class="create-article-button">Criar</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  data() {
    return {
      article: {
        title: '',
        summary: '',
        content: '',
        image: null,
      },
      error: '',
    };
  },
  methods: {
    async createArticle() {
      try {
        // Send the article data to the API
        const formData = new FormData();
        formData.append('title', this.article.title);
        formData.append('summary', this.article.summary);
        formData.append('content', this.article.content);
        formData.append('image', this.article.image);

        const response = await axios.post('/api/articles', formData);

        // Handle the successful creation of the article
        console.log(response.data); // You can do something with the response data here

        // Clear the form fields
        this.article.title = '';
        this.article.summary = '';
        this.article.content = '';
        this.article.image = null;

        // Show a success message or perform any other necessary actions
        // ...
      } catch (error) {
        // Handle the error
        console.error('Article creation failed:', error);
        this.error = 'Failed to create the article. Please try again.';
      }
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.article.image = URL.createObjectURL(file);
    },
  },
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
