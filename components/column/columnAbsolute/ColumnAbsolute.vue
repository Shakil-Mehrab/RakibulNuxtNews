<template>
  <div>
    <div
      class="grid grid-cols-2 gap-2 md:gap-6 md:grid-cols-none"
      v-if="!isLoading"
    >
      <div
        class="relative col-span-1 overflow-hidden rounded-md"
        v-for="n in 2"
        :key="n"
      >
        <ColumnAbsoluteItem />
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2 md:gap-6 md:grid-cols-none" v-else>
      <div v-for="n in 2" :key="n">
        <content-placeholders :rounded="true">
          <content-placeholders-img />
        </content-placeholders>
      </div>
    </div>
  </div>
</template>
<script>
import ColumnAbsoluteItem from "@/components/column/columnAbsolute/ColumnAbsoluteItem";

export default {
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    ColumnAbsoluteItem
  }
};
</script>
