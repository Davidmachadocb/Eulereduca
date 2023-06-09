<template>
  <div class="container mt-5">
    <h3>Comments</h3>
    <div v-if="comments.length">
      <ul class="list-group">
        <li class="list-group-item" v-for="comment in comments" :key="comment.id">
          <div class="comment-header">
            <strong>{{ comment.attributes.nome }}</strong> says:
          </div>
          <div class="comment-content">{{ comment.attributes.comentario }}</div>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No comments yet.</p>
    </div>
    <form @submit.prevent="submitComment" v-if="isUserAuthenticated">
      <div class="form-group">
        <label for="content">Seu comentario</label>
        <textarea v-model="comentario" class="form-control" id="content" rows="3" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <p v-else>You need to be logged in to comment.</p>
  </div>
</template>
  
<script>
import axios from 'axios';
import { useUserStore } from '../../stores/state';

export default {
  props: {
    articleId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      comments: [],
      comentario: "",
    };
  },
  computed: {
    user() {
      return useUserStore().$state;
    },
    isUserAuthenticated() {
      return useUserStore().isAuthenticated;
    },
  },
  mounted() {
    this.fetchComments();
  },
  methods: {
    fetchComments() {
      axios
        .get(`artigos/${this.articleId}?populate=comentarios`)
        .then((response) => {
          this.comments = response.data.data.attributes.comentarios.data;
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
        });
    },
    submitComment() {
      const comment = {
        nome: this.user.username,
        comentario: this.comentario,
        articleID: this.articleId,
        artigo: parseInt(this.articleId)
      };
      const auth = {
            Authorization: `Bearer ${this.user.jwt}`
          }
      axios.post("comentarios",
        {
          data: comment
        },
        { 
          headers: auth
      }).then(() => {
        this.comentario = "";
        this.fetchComments();
      })
        .catch((error) => {
          console.error("Error submitting comment:", error);
        });
    },
  },
};
</script>
  
<style scoped>
.comment-header {
  font-weight: bold;
  margin-bottom: 5px;
}

.comment-content {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

/* Add additional styles as needed */
</style>
  