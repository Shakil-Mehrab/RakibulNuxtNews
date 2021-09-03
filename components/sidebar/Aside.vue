<template>
  <div>
    <div
      class="py-3 overflow-hidden border-b rounded-md first:py-3 "
      v-for="n in asides"
      :key="n"
    >
      <div class="">
        <nuxt-link
          :to="{ name: 'news-slug' }"
          class="grid grid-cols-12 gap-2 md:gap-6"
        >
          <div
            class="col-span-4 overflow-hidden rounded-md sm:col-span-2 lg:col-span-4"
          >
            <img
              src="https://www.ntvbd.com/sites/default/files/styles/medium_2/public/images/2021/08/29/240837521_254.jpg?itok=wOSHXif6&timestamp=1630249368"
              alt=""
            />
          </div>
          <div class="col-span-8 sm:col-span-10 lg:col-span-8 title ">
            <h3 class="title sm:font-semibold">
              বিএনপির রাজনীতি মিথ্যা ও অসত্যের ওপর দাঁড়িয়ে আছে: তথ্যমন্ত্রী
            </h3>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    asides: {
      required: true,
      type: Number
    }
  }
};
</script>
