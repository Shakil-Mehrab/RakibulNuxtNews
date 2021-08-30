<template>
  <nav class="bg-white border-b border-gray-200">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <NavigationOption v-show="!search" />
        <Search v-show="search" />
        <div class="hidden 2md:ml-6 2md:flex 2md:items-center">
          <button
            type="button"
            class="w-full p-1 text-gray-700 bg-white rounded-full"
          >
            <div>
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  type="text"
                  name="account-number"
                  id="account-number"
                  class="block w-0 h-8 border border-gray-300 rounded-md sm:text-sm "
                  placeholder="Search ..."
                />
                <div
                  class="absolute inset-y-0 right-0 flex items-center px-1 text-white rounded-md bg-brand-700"
                >
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    @click.prevent="search = false"
                    v-show="search"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
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
