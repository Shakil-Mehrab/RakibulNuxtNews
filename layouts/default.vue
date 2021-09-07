<template>
  <div class="min-h-screen bg-white" @mousewheel="scrollHeight()">
    <Header />
    <Nuxt />
    <Footer />
    <GoToTop />
  </div>
</template>
<script>
import Header from "@/layouts/partials/header/Header";
import Footer from "@/layouts/partials/footer/Footer";
import GoToTop from "@/components/gototop/GoToTop";

export default {
  components: {
    Header,
    Footer,
    GoToTop
  },
  methods: {
    scrollHeight() {
      var y = window.pageYOffset;
      console.log(y);
      if (y >= 800) {
        let top = document.getElementById("go-to-top");
        top.style.opacity = 1;
      } else {
        let top = document.getElementById("go-to-top");
        top.style.opacity = 0;
      }
    }
  }
};
</script>
