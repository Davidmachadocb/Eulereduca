<script>
import HeroSection from '../components/homeview/HeroSection.vue'
import AboutSection from '../components/homeview/AboutSection.vue'
import ServicesSection from '../components/homeview/ServicesSection.vue'
import ContactSection from '../components/homeview/ContactSection.vue'

export default {
components: {
    HeroSection,
    AboutSection,
    ServicesSection,
    ContactSection,
  }
}
</script>

<template>
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ContactSection />
  </main>
</template>
