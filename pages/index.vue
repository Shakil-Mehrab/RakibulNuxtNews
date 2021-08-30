<template>
  <main>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 py-2 sm:px-0">
        <div class="my-4">
          <Marque />
        </div>
        <div class="lg:flex">
          <!-- col 8 -->
          <div class="w-full lg:w-8/12">
            <div class="grid grid-cols-12 gap-5">
              <div
                class="col-span-12 overflow-hidden rounded-md md:col-span-8 "
              >
                <Top />
              </div>

              <div class="col-span-12 md:col-span-4 ">
                <TopMiddle />
              </div>
              <div
                class="col-span-6 shadow md:col-span-4"
                v-for="n in 6"
                :key="n"
              >
                <TopLower />
              </div>
            </div>
          </div>
          <!-- col 4  -->
          <div class="w-full mt-5 lg:w-4/12 lg:mt-0 lg:pl-5">
            <div>
              <ul class="flex w-full">
                <li
                  class="flex justify-center w-full px-5 py-3 text-base font-bold"
                  :class="{ 'bg-pink-500 text-white rounded-md': active }"
                  @click.prevent="active = true"
                >
                  <a href="">সর্বশেষ</a>
                </li>
                <li
                  class="flex justify-center w-full px-5 py-3 text-base font-bold "
                  :class="{ 'bg-pink-500 text-white rounded-md': !active }"
                  @click.prevent="active = false"
                >
                  <a href="">জনপ্রিয়</a>
                </li>
              </ul>
            </div>
            <div v-show="active">
              <Aside />
            </div>
            <div v-show="!active">
              <Aside />
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
import TopMiddle from "@/components/index/topNews/middle/TopMiddle";
import TopLower from "@/components/index/topNews/TopLower";

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
    TopMiddle,
    TopLower
  }
};
</script>
