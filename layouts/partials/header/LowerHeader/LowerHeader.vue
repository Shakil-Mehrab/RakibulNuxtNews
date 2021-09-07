<template>
  <nav class="border-b border-gray-200 bg-brand-600">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex h-full">
          <div class="flex items-center flex-shrink-0 py-1 w-28">
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
              class="w-5 h-5 text-white"
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
            class="p-0.5 rounded-md bg-brand-600"
            @click.prevent="search = false"
            v-show="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 text-white h-7"
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
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-brand-700 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click.prevent="mobile_menu = true"
            v-show="!mobile_menu"
          >
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
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-brand-700 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click.prevent="mobile_menu = false"
            v-show="mobile_menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
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
      </div>
    </div>
    <div
      class="absolute z-50 w-full transition duration-500 ease-in-out transform bg-gray-300 bg-opacity-50 2md:hidden"
      id="mobile-menu"
      :class="mobile_menu ? 'translate-x-0' : '-translate-x-full'"
    >
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
  watch: {
    mobile_menu() {
      let click = document.querySelector("body");
      if (this.mobile_menu) {
        click.style.overflow = "hidden";
      } else {
        click.style.overflow = "";
      }
    }
  },
  components: {
    Search,
    NavigationOption,
    MobileMenu
  }
};
</script>
