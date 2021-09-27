<template>
  <div class="">
    <nuxt-link
      :to="{ name: 'news-slug' }"
      class="grid grid-cols-12 gap-2 md:gap-6"
    >
      <div
        class="col-span-4 overflow-hidden rounded-md sm:col-span-2 lg:col-span-4"
      >
        <img
          src="https://i.picsum.photos/id/933/600/300.jpg?hmac=TAwZkZdS6XUkpxT_NwalEJ4lJeaKnHAMJM0x0Msitdc"
          alt=""
        />
      </div>
      <div class="col-span-8 sm:col-span-10 lg:col-span-8 title ">
        <h6 class="title">
          বিএনপির রাজনীতি মিথ্যা ও অসত্যের ওপর দাঁড়িয়ে আছে: তথ্যমন্ত্রী
        </h6>
      </div>
    </nuxt-link>
  </div>
</template>
