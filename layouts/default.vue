<template>
  <div class="min-h-screen bg-white">
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
    addScrollListener() {
      let pxTrigger = 0;
      const scrollHeight = 800;
      document.addEventListener("scroll", () => {
        const pxFromTop = window.scrollY || window.pageYOffset;
        if (pxFromTop > scrollHeight) {
          document.getElementById("go-to-top").style.opacity = 1;
        } else {
          document.getElementById("go-to-top").style.opacity = 0;
        }
        console.log(pxFromTop);
      });
    }
  },
  mounted() {
    this.addScrollListener();
  }
};
</script>
