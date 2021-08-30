<template>
  <div>
    <TopHeader />
    <LowerHeader />
  </div>
</template>
<script>
import TopHeader from "@/layouts/partials/header/TopHeader";
import LowerHeader from "@/layouts/partials/header/LowerHeader/LowerHeader";

export default {
  data() {
    return {
      open: false,
      mobile_menu: false
    };
  },
  components: {
    TopHeader,
    LowerHeader
  }
};
</script>
