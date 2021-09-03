<template>
  <div class="grid grid-cols-2 gap-2 md:gap-6 md:grid-cols-none">
    <div
      class="relative col-span-1 overflow-hidden rounded-md"
      v-for="n in 2"
      :key="n"
    >
      <MiddleItem />
    </div>
  </div>
</template>
<script>
import MiddleItem from "@/components/index/topNews/middle/MiddleItem";

export default {
  components: {
    MiddleItem
  }
};
</script>
