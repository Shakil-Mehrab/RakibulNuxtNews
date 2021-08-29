<template>
  <div class="bg-gray-200">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 sm:px-0">
        <div class="flex items-center">
          <div class="flex flex-wrap items-center flex-1 min-w-0">
            <div
              class="flex items-center text-base font-medium whitespace-nowrap text-brand-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                /></svg
              ><span class="mx-2">সোমবার, ৩০ আগস্ট ২০২১</span>
            </div>
            <div
              class="flex items-center text-base font-medium whitespace-nowrap text-brand-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="ml-2">রাত ১:১০</span>
            </div>
          </div>
          <div class="">
            <div
              class="inline-flex items-center ml-3 text-2xl font-medium text-brand-700"
              v-for="n in 4"
              :key="n"
            >
              <i class="fab fa-facebook-square"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
