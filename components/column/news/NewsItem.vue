<template>
  <a href="">
    <div class="overflow-hidden rounded-md">
      <img
        src="https://asset1.dbcnews.tv/storage/images/7ca62e04-49fa-4de5-87f5-9488e87e49bc.jpg"
        alt=""
      />
    </div>
    <div class="p-2">
      <h3 class="title sm:font-semibold">
        বিএনপির রাজনীতি মিথ্যা ও অসত্যের ওপর দাঁড়িয়ে আছে: তথ্যমন্ত্রী দাঁড়িয়ে
        আছে:
      </h3>
      <p class="detail" v-if="detail">
        আগামী মাসে দুই কোটি মানুষকে করোনার টিকা দেয়া হবে বলে জানিয়েছেন
        স্বাস্থ্যমন্ত্রী জাহিদ মালেক।
      </p>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    detail: {
      require: false,
      type: Boolean,
      default: false
    }
  }
};
</script>
