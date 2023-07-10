<template>
    <div class="container">
        <h2>Edit Artigo</h2>
        <form @submit.prevent="updateArtigo">
            <div class="form-group">
                <label for="titulo">Title</label>
                <input type="text" v-model="artigo.Titulo" class="form-control" id="titulo" required>
            </div>
            <div class="form-group">
                <label for="resumo">Summary</label>
                <textarea v-model="artigo.Resumo" class="form-control" id="resumo"></textarea>
            </div>
            <div class="form-group">
                <label for="texto">Content</label>
                <textarea v-model="artigo.Texto" class="form-control" id="texto"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';
import { useUserStore } from '../stores/state';

export default {
    data() {
        return {
            artigo: {
                Titulo: '',
                Resumo: '',
                Texto: ''
            }
        };
    },
    created() {
        this.fetchArtigo();
    },
    methods: {
        fetchArtigo() {
            const user = useUserStore();
            const auth = {
                Authorization: `Bearer ${user.jwt}`
            };
            const artigoId = this.$route.params.id;
            axios.get(`artigos/${artigoId}`, {
                headers: auth
            }).then(response => {
                this.artigo = response.data;
            }).catch(error => {
                console.error('Error fetching artigo:', error);
            });
        },
        updateArtigo() {
            const user = useUserStore();
            const auth = {
                Authorization: `Bearer ${user.jwt}`
            };
            const artigoId = this.$route.params.id;
            axios.put(`artigos/${artigoId}`,
                {
                    data: this.artigo
                },
                {
                    headers: auth
                }).then(response => {
                    console.log('Artigo updated successfully:', response.data);
                    this.$router.push(`/artigo/${artigoId}`);
                }).catch(error => {
                    console.error('Error updating artigo:', error);
                });
        }
    },
};
</script>
  