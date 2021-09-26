<template>
  <div>
    <div v-if="!isLoading">
      <div
        class="py-1 overflow-hidden border-b rounded-md md:py-3"
        v-for="n in asides"
        :key="n"
      >
        <AsideItem />
      </div>
    </div>
    <div class="" v-else>
      <div class="my-3" v-for="n in asides" :key="n">
        <content-placeholders>
          <content-placeholders-heading :img="true" />
        </content-placeholders>
      </div>
    </div>
  </div>
</template>
<script>
import AsideItem from "@/components/sidebar/AsideItem";
export default {
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    AsideItem
  },
  props: {
    asides: {
      required: true,
      type: Number
    }
  }
};
</script>
