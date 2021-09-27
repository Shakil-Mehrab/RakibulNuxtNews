<template>
  <div
    class="fixed w-full h-24 transition-all duration-200 ease-in-out transform -top-28 z-100 both-header"
    :class="{ 'nav--pinned': pinned }"
  >
    <TopHeader
      :class="
        top_pinned
          ? 'transition-all duration-200 ease-in-out transform'
          : '-mt-12 sm:-mt-8 transition-all duration-200 ease-in-out transform'
      "
    />
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
      pinned: true,
      top_pinned: true
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
          this.top_pinned = false;
          this.pinned = pxFromTop < pxTrigger;
          pxTrigger = pxFromTop;
        } else {
          this.pinned = true;
          this.top_pinned = true;
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
