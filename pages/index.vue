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
                <div class="relative h-full">
                  <a href="">
                    <div>
                      <img
                        src="https://asset1.dbcnews.tv/storage/images/9076c248-4dcf-4bd6-8160-cffca94f8aaa.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      class="absolute bottom-0 w-full p-4 bg-opacity-50 bg-gradient-to-t from-brand-700 to-transparent"
                    >
                      <h3 class="title-white sm:font-semibold md:text-xl">
                        বিএনপির রাজনীতি মিথ্যা ও অসত্যের ওপর দাঁড়িয়ে আছে:
                        তথ্যমন্ত্রী দাঁড়িয়ে আছে:
                      </h3>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-span-12 md:col-span-4 ">
                <div class="grid grid-cols-2 gap-5 md:grid-cols-none">
                  <div
                    class="relative col-span-1 overflow-hidden rounded-md"
                    v-for="n in 2"
                    :key="n"
                  >
                    <a href="">
                      <div>
                        <img
                          src="https://asset1.dbcnews.tv/storage/images/7ca62e04-49fa-4de5-87f5-9488e87e49bc.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        class="absolute bottom-0 w-full p-2 bg-opacity-50 bg-gradient-to-t from-brand-700 to-transparent "
                      >
                        <h3 class="truncate title-white md:font-semibold">
                          বিএনপির রাজনীতি মিথ্যা ও অসত্যের ওপর দাঁড়িয়ে আছে:
                          তথ্যমন্ত্রী দাঁড়িয়ে আছে:
                        </h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="col-span-6 shadow md:col-span-4"
                v-for="n in 6"
                :key="n"
              >
                <a href="">
                  <div class="overflow-hidden rounded-lg">
                    <img
                      src="https://asset1.dbcnews.tv/storage/images/7ca62e04-49fa-4de5-87f5-9488e87e49bc.jpg"
                      alt=""
                    />
                  </div>
                  <div class="p-2">
                    <h3 class="title sm:font-semibold">
                      বিএনপির রাজনীতি মিথ্যা ও অসত্যের ওপর দাঁড়িয়ে আছে:
                      তথ্যমন্ত্রী দাঁড়িয়ে আছে:
                    </h3>
                  </div>
                </a>
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
              <div
                class="py-3 overflow-hidden border-b rounded-md first:py-3 "
                v-for="n in 7"
                :key="n"
              >
                <div class="">
                  <a href="" class="grid grid-cols-12 gap-5">
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
                        বিএনপির রাজনীতি মিথ্যা ও অসত্যের ওপর দাঁড়িয়ে আছে:
                        তথ্যমন্ত্রী
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div v-show="!active">
              <div
                class="py-3 overflow-hidden border-b rounded-md first:py-3 "
                v-for="n in 7"
                :key="n"
              >
                <div class="">
                  <a href="" class="grid grid-cols-12 gap-5">
                    <div
                      class="col-span-4 overflow-hidden rounded-md sm:col-span-2 lg:col-span-4"
                    >
                      <img
                        src="https://asset1.dbcnews.tv/storage/images/7ca62e04-49fa-4de5-87f5-9488e87e49bc.jpg"
                        alt=""
                      />
                    </div>
                    <div class="col-span-8 sm:col-span-10 lg:col-span-8 title ">
                      <h3 class="title sm:font-semibold">
                        বিএনপির রাজনীতি মিথ্যা ও অসত্যের ওপর দাঁড়িয়ে আছে:
                        তথ্যমন্ত্রী
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Marque from "@/components/marque/Marque";
export default {
  data() {
    return {
      open: false,
      active: true
    };
  },
  components: {
    Marque
  }
};
</script>
