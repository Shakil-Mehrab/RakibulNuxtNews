<template>
  <div class="grid grid-cols-2 gap-2 md:gap-6 md:grid-cols-none">
    <div
      class="relative col-span-1 overflow-hidden rounded-md"
      v-for="n in 2"
      :key="n"
    >
      <ColumnAbsoluteItem />
    </div>
  </div>
</template>
<script>
import ColumnAbsoluteItem from "@/components/column/columnAbsolute/ColumnAbsoluteItem";

export default {
  components: {
    ColumnAbsoluteItem
  }
};
</script>
