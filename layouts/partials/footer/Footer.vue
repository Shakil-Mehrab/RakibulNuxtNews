<template>
  <div class="pt-6 bg-brand-600">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 py-2 sm:px-0">
        <div class="grid grid-cols-12 gap-2 sm:gap-6">
          <div
            class="col-span-6 2md:col-span-4 lg:col-span-3"
            v-for="n in 4"
            :key="n"
          >
            <div class="text-sm text-gray-200">
              <h3 class="text-base text-brand-700">Browse By Category</h3>
              <ul>
                <li><a href="">Latest News</a></li>
                <li><a href="">192 new kakrail, Dhaka</a></li>
                <li><a href="">Latest News</a></li>
                <li><a href="">Latest News</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="flex justify-center mt-3 overflow-hidden text-sm text-gray-200 md:justify-end "
        >
          <a href=""
            ><img
              src="@/assets/images/default/app.PNG"
              class="rounded-md"
              alt=""
          /></a>
        </div>
        <div class="flex justify-center mt-3">
          <div class="text-sm text-gray-200">
            &copy;All Right Reserved By Hatirpal
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
