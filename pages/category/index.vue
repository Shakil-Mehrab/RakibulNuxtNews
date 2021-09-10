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
            <div
              class="grid grid-cols-12 gap-2 overflow-y-auto md:gap-6"
              id="catnews"
            >
              <div class="col-span-12 overflow-hidden rounded-md">
                <Top />
              </div>
              <div
                class="col-span-6 shadow md:col-span-4"
                v-for="n in 24"
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
    <!-- video  -->
    <div class="pb-6 my-6 mt-12 bg-brand-600">
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
    Calender
  }
};
</script>
