<template>
  <div
    class="w-8/12 pb-3 space-y-1 transition ease-in-out duration-2000 bg-brand-700"
  >
    <div class="flex items-center w-full">
      <Search />
    </div>

    <a
      href="#"
      class="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50"
      aria-current="page"
    >
      Dashboard
    </a>
    <a
      v-for="n in 10"
      :key="n"
      href="#"
      class="block py-2 pl-3 pr-4 text-base font-medium text-white border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
    >
      Team
    </a>
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
