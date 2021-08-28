<template>
  <div class="min-h-screen bg-white">
    <Header />
    <Nuxt />
  </div>
</template>
<script>
import Header from "@/layouts/partials/header/Header";
// import Footer from "@/layouts/partials/Footer";

export default {
  components: {
    Header
    // Footer
  }
};
</script>
