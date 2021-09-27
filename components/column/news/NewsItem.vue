<template>
  <div>
    <a href="" v-if="!isLoading">
      <div class="overflow-hidden rounded-md">
        <img
          src="https://i.picsum.photos/id/966/600/300.jpg?hmac=jriKy-Z9MOgce5eWB6P6eU1E4kBAVY2HWp0_GEbpDZ8"
          alt=""
        />
      </div>
      <div class="p-2">
        <h6 class="mb-2 title">
          বিএনপির রাজনীতি মিথ্যা ও অসত্যের ওপর দাঁড়িয়ে আছে: তথ্যমন্ত্রী দাঁড়িয়ে
          আছে:
        </h6>
        <p class="detail" v-if="detail">
          আগামী মাসে দুই কোটি মানুষকে করোনার টিকা দেয়া হবে বলে জানিয়েছেন
          স্বাস্থ্যমন্ত্রী জাহিদ মালেক।
        </p>
      </div>
    </a>
    <div class="mb-3" v-else>
      <content-placeholders :rounded="true">
        <content-placeholders-img />
        <content-placeholders-heading />
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
  },
  props: {
    detail: {
      require: false,
      type: Boolean,
      default: false
    }
  }
};
</script>
