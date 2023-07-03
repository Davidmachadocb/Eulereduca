<template>
    <div>
      <h3>Artigos</h3>
      <ul>
        <li v-for="article in articles" :key="article.id">
          <h4>{{ article.title }}</h4>
          <p>{{ article.content }}</p>
          <p>Author: {{ article.author }}</p>
        </li>
      </ul>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        articles: [],
        error: '',
      };
    },
    methods: {
      async fetchArticles() {
        axios
        .get("artigos")
        .then((response) => {
          this.articles = response.data.data;
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
      },
    },
    mounted() {
      // Fetch the articles when the component is mounted
      this.fetchArticles();
    },
  };
  </script>
  