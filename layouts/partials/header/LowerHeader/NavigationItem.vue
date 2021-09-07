<template>
  <div class="nav-item">
    <nuxt-link :to="{ name: 'category' }" class="">
      Dashboard
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline-block w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </nuxt-link>
    <div
      class="absolute left-0 z-50 invisible w-48 py-1 mt-8 transition duration-500 ease-in-out origin-top-right transform bg-white border rounded-b-md group-hover:-translate-y-3 group-hover:visible"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabindex="-1"
    >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 "
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
