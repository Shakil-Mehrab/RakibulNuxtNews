<template>
  <main>
    <div class="mx-auto my-6 max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 py-2 sm:px-0">
        <div class="lg:flex">
          <!-- col 8 -->
          <div class="w-full lg:w-8/12">
            <div class="grid grid-cols-12 gap-2 md:gap-6">
              <div class="col-span-12 overflow-hidden rounded-md">
                <Detail />
              </div>
              <div class="col-span-12 overflow-hidden rounded-md">
                <!-- Related  -->

                <div class="pb-2 pl-2 mb-1 border-l-4 border-brand-600">
                  <Divider title="Related" />
                </div>
                <div class="grid grid-cols-12 gap-2 md:gap-6">
                  <div
                    class="col-span-6 shadow md:col-span-4 lg:col-span-3"
                    v-for="n in 12"
                    :key="n"
                  >
                    <NewsItem />
                  </div>
                </div>
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
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import Detail from "@/components/detail/Detail";
import Aside from "@/components/sidebar/Aside";
import NewsItem from "@/components/column/news/NewsItem";

export default {
  data() {
    return {
      active: true
    };
  },
  components: {
    Detail,
    Aside,
    NewsItem
  }
};
</script>
