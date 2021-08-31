<template>
  <nav class="bg-white border-b border-gray-200">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex">
          <div class="flex items-center flex-shrink-0 w-28">
            <img
              class="block w-full h-4 md:w-auto md:h-8"
              src="@/assets/images/default/logo.PNG"
              alt="Workflow"
            />
          </div>
          <NavigationOption v-show="!search" />
        </div>
        <Search v-show="search" class="hidden 2md:block" />
        <div class="hidden 2md:flex 2md:items-center">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              @click.prevent="search = true"
              v-show="!search"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button
            class="p-0.5 rounded-md bg-brand-800"
            @click.prevent="search = false"
            v-show="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 text-white h-7 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex items-center -mr-2 2md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click.prevent="mobile_menu = !mobile_menu"
          >
            <span class="sr-only">Open main menu</span>

            <svg
              class="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="2md:hidden" id="mobile-menu" v-show="mobile_menu">
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center w-full px-4">
          <Search />
        </div>
      </div>
      <MobileMenu />
    </div>
  </nav>
</template>
<script>
import Search from "@/layouts/partials/header/LowerHeader/search";
import NavigationOption from "@/layouts/partials/header/LowerHeader/NavigationOption";
import MobileMenu from "@/layouts/partials/header/LowerHeader/MobileMenu";

export default {
  data() {
    return {
      mobile_menu: false,
      search: false
    };
  },
  components: {
    Search,
    NavigationOption,
    MobileMenu
  }
};
</script>
