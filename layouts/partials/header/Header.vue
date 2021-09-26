<template>
  <div
    class="fixed w-full h-24 transition-all duration-200 ease-in-out transform bg-red-900 -top-28 z-100 both-header"
    :class="{ 'nav--pinned': pinned }"
  >
    <TopHeader />
    <LowerHeader />
  </div>
</template>
<script>
import TopHeader from "@/layouts/partials/header/TopHeader";
import LowerHeader from "@/layouts/partials/header/lowerHeader/LowerHeader";

export default {
  data() {
    return {
      open: false,
      mobile_menu: false,
      pinned: true
    };
  },
  components: {
    TopHeader,
    LowerHeader
  },
  methods: {
    addScrollListener() {
      let pxTrigger = 0;
      const menuHeight = 96;
      document.addEventListener("scroll", () => {
        const pxFromTop = window.scrollY || window.pageYOffset;
        if (pxFromTop > menuHeight) {
          this.pinned = pxFromTop < pxTrigger;
          pxTrigger = pxFromTop;
        } else {
          this.pinned = true;
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
<style scoped>
.both-header {
  z-index: 999999;
}
.nav--pinned {
  top: 0;
}
</style>
