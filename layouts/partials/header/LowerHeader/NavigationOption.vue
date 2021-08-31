<template>
  <div class="hidden 2md:-my-px sm:ml-6 2md:flex 2md:space-x-8">
    <div
      v-for="n in 6"
      :key="n"
      class="relative inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 hover:border-indigo-500 group"
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
