<template>
  <div class="py-10">
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="px-4 py-8 sm:px-0">
          <div class="lg:flex">
            <!-- col 8 -->
            <div class="w-full lg:w-8/12">
              <div class="grid gap-5 grid-cols-12">
                <div
                  class="col-span-12 md:col-span-8 rounded-md overflow-hidden "
                >
                  <div class="h-full relative">
                    <a href="">
                      <div>
                        <img
                          src="https://asset1.dbcnews.tv/storage/images/9076c248-4dcf-4bd6-8160-cffca94f8aaa.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        class="bg-gradient-to-t from-brand-700 to-transparent bg-opacity-50 absolute bottom-0   w-full p-4"
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
                  <div class="grid gap-5 grid-cols-2 md:grid-cols-none">
                    <div
                      class="col-span-1 rounded-md overflow-hidden relative"
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
                          class="bg-gradient-to-t from-brand-700 to-transparent bg-opacity-50 absolute bottom-0   w-full p-2 "
                        >
                          <h3 class="title-white  md:font-semibold truncate">
                            বিএনপির রাজনীতি মিথ্যা ও অসত্যের ওপর দাঁড়িয়ে আছে:
                            তথ্যমন্ত্রী দাঁড়িয়ে আছে:
                          </h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="col-span-6 md:col-span-4 shadow"
                  v-for="n in 6"
                  :key="n"
                >
                  <a href="">
                    <div class="rounded-lg overflow-hidden">
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
            <div class="w-full lg:w-4/12 mt-5 lg:mt-0 lg:pl-5">
              <div>
                <ul class="w-full flex">
                  <li
                    class="py-3 w-full px-5 flex justify-center text-base font-bold"
                    :class="{ 'bg-pink-500 text-white rounded-md': active }"
                    @click.prevent="active = true"
                  >
                    <a href="">সর্বশেষ</a>
                  </li>
                  <li
                    class=" py-3 w-full px-5 flex justify-center text-base font-bold"
                    :class="{ 'bg-pink-500 text-white rounded-md': !active }"
                    @click.prevent="active = false"
                  >
                    <a href="">জনপ্রিয়</a>
                  </li>
                </ul>
              </div>
              <div v-show="active">
                <div
                  class="first:py-3 rounded-md overflow-hidden py-3 border-b "
                  v-for="n in 7"
                  :key="n"
                >
                  <div class="">
                    <a href="" class="grid grid-cols-12 gap-5">
                      <div
                        class="col-span-4 sm:col-span-2 lg:col-span-4 rounded-md overflow-hidden"
                      >
                        <img
                          src="https://asset1.dbcnews.tv/storage/images/7ca62e04-49fa-4de5-87f5-9488e87e49bc.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        class="col-span-8 sm:col-span-10 lg:col-span-8 title "
                      >
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
                  class="first:py-3 rounded-md overflow-hidden py-3 border-b "
                  v-for="n in 7"
                  :key="n"
                >
                  <div class="">
                    <a href="" class="grid grid-cols-12 gap-5">
                      <div
                        class="col-span-4 sm:col-span-2 lg:col-span-4 rounded-md overflow-hidden"
                      >
                        <img
                          src="https://asset1.dbcnews.tv/storage/images/7ca62e04-49fa-4de5-87f5-9488e87e49bc.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        class="col-span-8 sm:col-span-10 lg:col-span-8 title "
                      >
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      active: true
    };
  }
};
</script>
