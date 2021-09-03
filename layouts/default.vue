<template>
  <div class="min-h-screen bg-white">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from "@/layouts/partials/header/Header";
import Footer from "@/layouts/partials/footer/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
