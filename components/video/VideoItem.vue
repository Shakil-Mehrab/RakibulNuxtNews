<template>
  <a href="">
    <div class="relative overflow-hidden rounded-md">
      <img
        src="https://asset1.dbcnews.tv/storage/images/7ca62e04-49fa-4de5-87f5-9488e87e49bc.jpg"
        alt=""
      />
      <div
        class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center"
      >
        <div class="inline-block px-2 rounded-lg bg-brand-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="rounded-md w-9 h-9 text-brand-700"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="p-2">
      <h6 class="title-white-sm">
        বিএনপির রাজনীতি মিথ্যা ও অসত্যের ওপর দাঁড়িয়ে আছে: তথ্যমন্ত্রী দাঁড়িয়ে
        আছে:
      </h6>
      <p class="detail" v-if="detail">
        আগামী মাসে দুই কোটি মানুষকে করোনার টিকা দেয়া হবে বলে জানিয়েছেন
        স্বাস্থ্যমন্ত্রী জাহিদ মালেক।
      </p>
    </div>
  </a>
</template>
