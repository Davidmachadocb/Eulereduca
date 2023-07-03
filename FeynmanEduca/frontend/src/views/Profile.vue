<template>
    <section class="section about-section gray-bg" id="about">
        <div class="container">
            <div class="row align-items-center flex-row-reverse">
                <div class="col-lg-6">
                    <div class="about-text go-to">
                        <h3 class="dark-color">{{ user.username }}</h3>
                        <h6 class="theme-color lead">A Lead UX &amp; UI designer based in Canada</h6>
                        <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating
                            stylish, modern websites, web services and online stores. My passion is to design digital user
                            experiences through the bold interface and meaningful interactions.</p>
                        <router-link to="/profile/edit" class="btn btn-primary">Edit Profile</router-link>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt="">
                    </div>
                </div>
            </div>
            <div>
                <div class="count-data text-center">
                    <h6 class="count h2" data-to="500" data-speed="500">Artigos</h6>
                    <p class="m-0px font-w-600 larger-font">{{ artigos }}</p>
                </div>
            </div>
            <MyArticlesSection />
        </div>
    </section>
</template>
  
<script>
import MyArticlesSection from '../components/profile/MyArticlesSection.vue';
import { useUserStore } from '../stores/state';
import { useRouter } from 'vue-router';

export default {
    components: {
        MyArticlesSection
    },
    data() {
        return {
            user: useUserStore(),
            artigos: 3,
        };
    },
    methods: {
        editProfile() {
            const router = useRouter();
            router.push('/profile/edit');
        }
    }
};
</script>
  
<style scoped>
.gradient-custom-2 {
    /* fallback for old browsers */
    background: #fbc2eb;

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgba(251, 194, 235, 1), rgba(166, 193, 238, 1));

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgba(251, 194, 235, 1), rgba(166, 193, 238, 1))
}

.larger-font {
    font-size: 20px; /* Adjust the font size as needed */
  }  
</style>
  