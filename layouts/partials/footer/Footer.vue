<template>
  <div class="pt-6 pb-16 bg-brand-600">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 py-2 sm:px-0">
        <div class="grid grid-cols-12 gap-2 sm:gap-6">
          <div class="col-span-12 sm:col-span-6 md:col-span-4 ">
            <div class="mt-3 text-sm text-gray-200">
              <!-- <h6 class="text-base text-brand-700">Editor</h6> -->
              <ul class="space-y-2">
                <li><a href="">প্রধান সম্পাদক : রাকিবুল ইসলাম</a></li>
              </ul>
            </div>
          </div>
          <div class="col-span-12 mt-3 sm:col-span-6 md:col-span-4">
            <div class="text-sm text-gray-200">
              <h6 class="text-base text-brand-700"></h6>
              <ul class="space-y-2">
                <li>
                  <a href="">
                    <span class="size-w-3">
                      <i class="fa fa-home" aria-hidden="true"></i>
                    </span>
                    মহাখালী , ঢাকা - ১২১৩, বাংলাদেশ
                  </a>
                </li>
                <li>
                  <a href=""
                    ><i class="fas fa-phone-alt"></i> +৮৮ ০১৭৩৮৬৮৪৫১৫</a
                  >
                </li>
                <li><a href="">hatirpal18@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 md:col-span-4 ">
            <div class="space-y-2 text-sm text-gray-200">
              <!-- <h6 class="text-base text-brand-700">Follow Us</h6> -->
              <ul class="flex mt-3 mb-5 space-x-2">
                <li
                  class="flex items-center justify-center w-8 h-8 bg-blue-900 rounded-md"
                >
                  <a target="_blank" href="#" class="facebook"
                    ><i class="fa fa-facebook "></i
                  ></a>
                </li>
                <li
                  class="flex items-center justify-center w-8 h-8 p-2 bg-blue-400 rounded-md "
                >
                  <a target="_blank" href="#" class=" twitter"
                    ><i class="fa fa-twitter"></i
                  ></a>
                </li>
                <li
                  class="flex items-center justify-center w-8 h-8 p-2 bg-red-700 rounded-md "
                >
                  <a target="_blank" href="#" class="youtube"
                    ><i class="fa fa-youtube"></i
                  ></a>
                </li>
                <li
                  class="flex items-center justify-center w-8 h-8 p-2 bg-pink-500 rounded-md "
                >
                  <a target="_blank" href="#" class="instagram"
                    ><i class="fa fa-instagram"></i
                  ></a>
                </li>
                <li
                  class="flex items-center justify-center w-8 h-8 p-2 bg-blue-700 rounded-md "
                >
                  <a target="_blank" href="#" class="linkedin"
                    ><i class="fa fa-linkedin"></i
                  ></a>
                </li>
                <li
                  class="flex items-center justify-center w-8 h-8 p-2 bg-red-700 rounded-md "
                >
                  <a target="_blank" href="#" class="pinterest"
                    ><i class="fa fa-pinterest"></i
                  ></a>
                </li>
              </ul>
              <div>
                <a href="">
                  <img
                    src="@/assets/images/default/app.PNG"
                    class="rounded-md w-28"
                    alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex justify-center mt-3 overflow-hidden text-sm text-gray-200 md:justify-end "
        >
          <a href=""> </a>
        </div>
        <div class="flex justify-center mt-3">
          <div class="text-sm text-gray-200">
            &copy;All Right Reserved By Hatirpal
          </div>
        </div>
      </div>
    </div>
    <div>
      <FooterPinnedAdd />
    </div>
  </div>
</template>
<script>
import FooterPinnedAdd from "@/layouts/partials/footer/FooterPinnedAdd";

export default {
  components: {
    FooterPinnedAdd
  }
};
</script>
