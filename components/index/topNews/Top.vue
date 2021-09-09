<template>
  <div class="relative h-full">
    <nuxt-link :to="{ name: 'category' }" v-if="!isLoading">
      <div>
        <img
          src="https://asset1.dbcnews.tv/storage/images/0db2f45a-2b9a-4464-96da-88cb9ea79a61.jpg"
          alt=""
        />
      </div>
      <div
        class="absolute bottom-0 w-full p-4 bg-opacity-50 bg-gradient-to-t from-black to-transparent"
      >
        <h6 class="title-white-lg">
          বিএনপির রাজনীতি মিথ্যা ও অসত্যের ওপর দাঁড়িয়ে আছে: তথ্যমন্ত্রী দাঁড়িয়ে
          আছে:
        </h6>
      </div>
    </nuxt-link>
    <div v-else>
      <content-placeholders :rounded="true">
        <content-placeholders-img style="height:200px" />
      </content-placeholders>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false
    };
  }
};
</script>
