<template>
  <div class="hidden sm:ml-6 2md:flex 2md:space-x-8">
    <div
      v-for="n in 6"
      :key="n"
      class="relative inline-flex items-center px-1 pt-1 text-sm font-medium text-white transition duration-700 ease-in-out border-b-4 border-brand-600 hover:border-blue-600 group hover:bg-brand-700"
      aria-current="page"
    >
      <NavigationItem :n="n" :item="item" />
    </div>
  </div>
</template>
<script>
import NavigationItem from "@/layouts/partials/header/lowerHeader/NavigationItem";
export default {
  data() {
    return {
      item: 0
    };
  },
  components: {
    NavigationItem
  }
};
</script>
