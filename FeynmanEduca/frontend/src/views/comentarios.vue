<template>
    <div>
        <h2>Comments</h2>
        <div v-if="comments.length === 0">No comments found.</div>
        <div v-else>
            <div v-for="comment in comments" :key="comment.id">
                <div class="comment">
                    <h4>{{ comment.attributes.nome }}</h4>
                    <p>{{ comment.attributes.comentario }}</p>
                    <button @click="deleteComment(comment.id)">Delete</button>
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import { useUserStore } from '../stores/state';

export default {
    data() {
        return {
            user: useUserStore(),
            comments: []
        };
    },
    methods: {
        async fetchComments() {
            try {
                const auth = {
                    Authorization: `Bearer ${this.user.jwt}`
                 };
                const response = await axios.get('comentarios', {headers: auth});
                this.comments = response.data.data;
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        },
        async deleteComment(commentId) {
            try {
                const auth = {
                    Authorization: `Bearer ${this.user.jwt}`
                 };
                await axios.delete(`comentarios/${commentId}`, {headers: auth});
                this.fetchComments();
            } catch (error) {
                console.error('Error deleting comment:', error);
            }
        },
    },
    mounted() {
        this.fetchComments();
    },
};
</script>
  
<style scoped>
.comment {
    margin-bottom: 20px;
}
</style>
  