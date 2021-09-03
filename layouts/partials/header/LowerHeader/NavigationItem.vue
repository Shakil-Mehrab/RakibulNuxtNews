<template>
  <div class="nav-item">
    <a href="#" class=""> Dashboard </a>
    <div
      class="absolute right-0 z-50 invisible w-48 py-1 origin-top-right bg-white rounded-md sub-cat-margin group-hover:visible"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabindex="-1"
    >
      <div class="h-1.5 -mt-1 bg-brand-600"></div>
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
