<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t-2 border-brand-700"></div>
    </div>
    <div class="relative flex justify-start">
      <span class="pr-2 text-2xl font-bold bg-white text-brand-700">
        {{ title }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    }
  }
};
</script>
