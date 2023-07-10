<template>
    <section class="section about-section gray-bg" id="about">
        <div class="container">
            <div class="count-data text-center">
                <h6 class="count h2" data-to="500" data-speed="500">{{ user.username }}</h6>
                <p class="m-0px font-w-600 larger-font">Esses são os artigos que você produziu</p>
            </div>
            <MyArticlesSection />
        </div>
    </section>
</template>
  
<script>
import MyArticlesSection from '../components/profile/MyArticlesSection.vue';
import { useUserStore } from '../stores/state';
import axios from 'axios';

export default {
    components: {
        MyArticlesSection
    },
    data() {
        return {
            user: useUserStore(),
        };
    },
    async created() {
        try {
            const auth = {
                Authorization: `Bearer ${this.user.jwt}`
            };
            const response = await axios.get(`users/me?populate=*`, {
                headers: auth
            });
        } catch (error) {
            console.error('Failed to fetch user data:', error);
        }
    }
};
</script>
  
<style scoped>
.larger-font {
    font-size: 20px;
    /* Adjust the font size as needed */
}
</style>