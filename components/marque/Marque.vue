<template>
  <div class="flex items-center space-x-2 overflow-hidden border rounded-md">
    <div class="px-4 py-1 text-base text-white bg-brand-700 ">
      Heading
    </div>
    <marquee
      width="100%"
      direction="left"
      loop="number"
      onmouseover="this.stop();"
      onmouseout="this.start();"
      height="100%"
    >
      <a
        href="#"
        class="tracking-normal text-gray-700 test-base"
        v-for="n in 10"
        :key="n"
      >
        কামরাঙ্গীরচরে নকল প্রসাধনী জব্দ করেছে গোয়েন্দা পুলিশ
        <span class="text-base font-bold">&#46;</span>
      </a>
    </marquee>
  </div>
</template>
