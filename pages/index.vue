<template>
  <main class="overflow-hidden">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 py-2 sm:px-0">
        <div class="my-4">
          <Marque />
        </div>
        <div class="lg:flex">
          <!-- col 8 -->
          <div class="w-full lg:w-8/12">
            <div class="grid grid-cols-12 gap-2 md:gap-6">
              <div class="col-span-12 overflow-hidden rounded-md md:col-span-8">
                <Top />
              </div>

              <div class="col-span-12 md:col-span-4">
                <ColumnAbsolute />
              </div>
              <div
                class="col-span-6 shadow md:col-span-4"
                v-for="n in 6"
                :key="n"
              >
                <NewsItem />
              </div>
            </div>
          </div>
          <!-- col 4  -->
          <div class="w-full mt-5 lg:w-4/12 lg:mt-0 lg:pl-5">
            <div>
              <ul class="flex w-full">
                <li
                  class="flex justify-center w-full px-5 py-3 text-base font-bold "
                  :class="{ 'bg-pink-500 text-white rounded-md': active }"
                  @click.prevent="active = true"
                >
                  <a href="#">সর্বশেষ</a>
                </li>
                <li
                  class="flex justify-center w-full px-5 py-3 text-base font-bold "
                  :class="{ 'bg-pink-500 text-white rounded-md': !active }"
                  @click.prevent="active = false"
                >
                  <a href="#">জনপ্রিয়</a>
                </li>
              </ul>
            </div>
            <div v-show="active">
              <Aside :asides="7" />
            </div>
            <div v-show="!active">
              <Aside :asides="7" />
            </div>

            <div class="my-3">
              <Calender />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- national  -->
    <div class="mx-auto mt-12 max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 py-2 sm:px-0">
        <div class="pb-2 pl-2 mb-1 border-l-4 border-brand-600">
          <Divider title="বাংলাদেশ" />
        </div>
        <div class="grid grid-cols-12 gap-2 md:gap-6">
          <div
            class="col-span-6 shadow md:col-span-3 lg:col-span-2"
            v-for="n in 12"
            :key="n"
          >
            <NewsItem />
          </div>
        </div>
      </div>
    </div>
    <!-- video  -->
    <div class="mt-12 bg-brand-600">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="px-4 py-2 sm:px-0">
          <div class="my-5">
            <div class="relative">
              <div
                class="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div class="w-full border-t-2 border-white"></div>
              </div>
              <div class="relative flex justify-start">
                <span class="pr-2 text-2xl font-bold text-white bg-brand-600">
                  ভিডিও
                </span>
              </div>
            </div>
          </div>
          <Video />
        </div>
      </div>
    </div>
    <!-- international  -->
    <div class="mx-auto mt-12 max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 py-2 sm:px-0">
        <div class="grid grid-cols-12 gap-6">
          <div
            class="col-span-12 shadow md:col-span-6 lg:col-span-4"
            v-for="n in 3"
            :key="n"
          >
            <div class="pb-2 pl-2 mb-1 border-l-4 border-brand-600">
              <Divider title="আন্তর্জাতিক" />
            </div>
            <NewsItem :detail="true" />
            <div>
              <Aside :asides="3" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- sports  -->
    <div class="mx-auto mt-12 max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 py-2 sm:px-0">
        <div class="pb-2 pl-2 mb-1 border-l-4 border-brand-600">
          <Divider title="খেলাধুলা" />
        </div>
        <div class="grid grid-cols-12 gap-2 md:gap-6">
          <div
            class="col-span-6 shadow md:col-span-3 lg:col-span-2"
            v-for="n in 12"
            :key="n"
          >
            <NewsItem />
          </div>
        </div>
      </div>
    </div>
    <!-- recreation  -->
    <div class="mx-auto mt-12 max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 py-2 sm:px-0">
        <div class="pb-2 pl-2 mb-1 border-l-4 border-brand-600">
          <Divider title="বিনোদন" />
        </div>
        <div class="grid grid-cols-12 gap-2 md:gap-6">
          <div
            class="col-span-6 shadow md:col-span-3 lg:col-span-3"
            v-for="n in 12"
            :key="n"
          >
            <NewsItem />
          </div>
        </div>
      </div>
    </div>
    <!-- slider  -->
    <div class="mx-auto my-6 max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 py-2 sm:px-0">
        <div class="lg:flex">
          <!-- col 8 -->
          <div class="w-full lg:w-8/12">
            <Slider />
          </div>
          <!-- col 4  -->
          <div class="w-full mt-5 lg:w-4/12 lg:mt-0 lg:pl-5">
            <div>
              <ul class="flex w-full">
                <li
                  class="flex justify-center w-full px-5 py-3 text-base font-bold text-white bg-pink-500 rounded-md"
                >
                  <a href="#">সর্বশেষ</a>
                </li>
              </ul>
            </div>
            <div>
              <Aside :asides="7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Marque from "@/components/marque/Marque";
import Aside from "@/components/sidebar/Aside";
import Top from "@/components/index/topNews/Top";
import ColumnAbsolute from "@/components/column/columnAbsolute/ColumnAbsolute";
import NewsItem from "@/components/column/news/NewsItem";
import Divider from "@/components/divider/Divider";
import Video from "@/components/video/Video";
import Calender from "@/components/calender/Calender";
import Slider from "@/components/slider/Slider";

export default {
  data() {
    return {
      active: true
    };
  },
  components: {
    Marque,
    Aside,
    Top,
    ColumnAbsolute,
    NewsItem,
    Divider,
    Video,
    Calender,
    Slider
  }
};
</script>
