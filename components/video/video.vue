<template>
  <div>
    <div class="grid grid-cols-12 gap-6" v-if="!isLoading">
      <div
        class="col-span-12 shadow md:col-span-4 2md:col-span-4 lg:col-span-3"
        v-for="n in 8"
        :key="n"
      >
        <VideoItem />
      </div>
    </div>
    <div class="grid grid-cols-12 gap-6 mb-6" v-else>
      <div
        class="col-span-12 shadow md:col-span-4 2md:col-span-4 lg:col-span-3"
        v-for="n in 8"
        :key="n"
      >
        <img src="@/assets/images/default/loader.gif" alt="ferg" />
      </div>
    </div>
  </div>
</template>
<script>
import VideoItem from "@/components/video/VideoItem";
export default {
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    VideoItem
  },
  props: {
    detail: {
      require: false,
      type: Boolean,
      default: false
    }
  }
};
</script>
