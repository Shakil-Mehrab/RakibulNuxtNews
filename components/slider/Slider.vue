<template>
  <div>
    <client-only>
      <carousel
        class="relative product-slider"
        :perPageCustom="[[350, 1]]"
        :loop="true"
        :autoplay="false"
      >
        <slide v-for="data in 10" :key="data">
          <div>
            <nuxt-link to="">
              <!-- <img
                  v-if="data.thumbnail"
                  v-lazy="data.thumbnail"
                  :alt="data.name"
                  width="100%"
                /> -->
              <img
                src="https://i.picsum.photos/id/852/600/300.jpg?hmac=uxqwOyVgN9kSsvp9J2TjzUC_czkDKaI0uuaRPxZCjtQ"
                alt=""
              />

              <div class="absolute bottom-0 w-full bg-black opacity-50">
                <h6 class="py-3 title-white-lg">
                  বিএনপির রাজনীতি মিথ্যা ও অসত্যের ওপর দাঁড়িয়ে আছে: তথ্যমন্ত্রী
                  দাঁড়িয়ে আছে:
                </h6>
              </div>
            </nuxt-link>
          </div>
        </slide>
      </carousel>
    </client-only>
    <div class="flex mt-3 space-x-3">
      <a href="" v-for="n in 10" :key="n">
        <img
          src="https://asset1.dbcnews.tv/storage/images/7ca62e04-49fa-4de5-87f5-9488e87e49bc.jpg"
          alt=""
        />
      </a>
    </div>
  </div>
</template>
<style>
.product-slider .VueCarousel-dot-container {
  display: none !important;
}
</style>
