<template>
  <div>
    <no-ssr>
      <v-calendar
        :attributes="attrs"
        v-model="date"
        is-expanded
        @dayclick="selectDate($event)"
      />
    </no-ssr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      attrs: [
        {
          key: "today",
          highlight: true,
          popover: {
            label: "Today"
          },
          dates: new Date()
        }
      ]
    };
  },
  props: {
    showNews: {
      required: false,
      type: Boolean,
      default: true
    }
  },
  methods: {
    async selectDate(event) {
      if (this.date < event.date || this.showNews === false) {
        return;
      }
      console.log("h8");
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let { year, month_parsed, day } = event;
      let month = monthNames[event.date.getMonth()];
      this.$router.push({
        name: "category",
        query: {
          day: day,
          month: month,
          year: year
        }
      });
    }
  }
};
</script>
