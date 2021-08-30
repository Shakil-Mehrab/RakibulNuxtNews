<template>
  <div class="flex">
    <div class="flex items-center flex-shrink-0">
      <img
        class="block w-24 h-4 md:w-auto md:h-8"
        src="@/assets/images/default/logo.PNG"
        alt="Workflow"
      />
    </div>
    <div class="hidden 2md:-my-px sm:ml-6 2md:flex 2md:space-x-8">
      <a
        v-for="n in 8"
        :key="n"
        href="#"
        class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-indigo-500"
        aria-current="page"
      >
        Dashboard
      </a>
    </div>
  </div>
</template>
