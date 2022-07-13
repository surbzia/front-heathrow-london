<template>
  <div>
    <InnerBanner :data="{ title: 'BOOKING' }" />
    <JourneyDetail v-if="response.journey" v-on:SaveJourney="SaveJourney($event)" />
    <ChooseCar v-if="response.cars" v-on:SaveJourney="SaveJourney($event)" />
  </div>
</template>
<script>
import InnerBanner from "~/components/InnerBanner.vue";
import JourneyDetail from "../../components/JourneyDetail.vue";
import ChooseCar from "~/components/ChooseCar.vue";
export default {
  name: "Booking",
  data() {
    return {
      response: {
        journey: true,
        cars: false,
        passengers: false,
      },
    };
  },
  methods: {
    SaveJourney(obj) {
      this.response = obj;
    },
  },
  mounted() {},
  components: { InnerBanner, JourneyDetail, ChooseCar },
};
</script>
