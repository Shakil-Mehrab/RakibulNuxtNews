<template>
  <button type="button" class="w-full pl-1 text-gray-70">
    <div>
      <div class="relative rounded-md shadow-sm">
        <input
          type="text"
          name="account-number"
          id="account-number"
          class="block w-full h-8 pl-2 pr-10 border border-gray-300 rounded-md sm:text-sm focus:outline-none"
          placeholder="Search ..."
        />
        <div
          class="absolute inset-y-0 right-0 flex items-center px-1 text-white rounded-r-md bg-brand-600 2md:bg-brand-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  </button>
</template>
