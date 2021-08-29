<template>
  <div class="flex items-center space-x-2 overflow-hidden border rounded-md">
    <div class="px-4 py-1 text-base text-white bg-brand-700 ">
      Heading
    </div>
    <marquee width="100%" direction="left" height="100%">
      <span v-for="n in 10" :key="n">
        This is a sample scrolling text that has scrolls
        <span class="text-base font-bold">&#46;</span>
      </span>
    </marquee>
  </div>
</template>
