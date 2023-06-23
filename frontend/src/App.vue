<template>
  <div>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ContactSection />
    <Footer />
    <!-- Bootstrap JS -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

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
