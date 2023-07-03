<template>
  <div>
    <Navbar/>
    <main class="container">
       <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/homeview/HeroSection.vue'
import AboutSection from './components/homeview/AboutSection.vue'
import ServicesSection from './components/homeview/ServicesSection.vue'
import ContactSection from './components/homeview/ContactSection.vue'
import Footer from './components/homeview/Footer.vue'

export default {
  components: {
    Navbar,
    HeroSection,
    AboutSection,
    ServicesSection,
    ContactSection,
    Footer
  }
}
</script>

<style>
/* Estilos Personalizados */
.hero-image {
  background-image: url('img/diagram.jpg');
  background-size: cover;
  background-position: center;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
}

.feature-card {
  padding: 2rem;
}
</style>
