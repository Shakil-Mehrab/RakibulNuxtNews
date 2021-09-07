<template>
  <div class="w-8/12 h-screen pb-3 pr-3 space-y-3 overflow-y-auto bg-brand-700">
    <div class="flex items-center w-full mt-3">
      <Search />
    </div>

    <nuxt-link
      :to="{ name: 'category' }"
      v-for="n in 30"
      :key="n"
      class="block py-2 pl-3 text-base font-medium text-gray-300 border-l-4 border-brand-600 hover:to-brand-600"
    >
      Team
    </nuxt-link>
  </div>
</template>
<script>
import Search from "@/layouts/partials/header/LowerHeader/search";

export default {
  components: {
    Search
  }
};
</script>
