<template>
  <div>
    <a href="#" class="">
      Dashboard
    </a>
    <div
      class="absolute right-0 z-50 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg top-16 ring-1 ring-black ring-opacity-5 focus:outline-none "
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabindex="-1"
      v-if="n == item"
    >
      <!-- Active: "bg-gray-100", Not Active: "" -->
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabindex="-1"
        id="user-menu-item-0"
        >Your Profile{{ n }}
      </a>
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabindex="-1"
        id="user-menu-item-1"
        >Settings{{ item }}</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabindex="-1"
        id="user-menu-item-2"
        >Sign out</a
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    n: {
      required: true,
      type: Number
    },
    item: {
      required: true,
      type: Number
    }
  }
};
</script>
