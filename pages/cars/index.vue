<template>
  <div>
    <InnerBanner :data="{ title: 'OUR CARS' }" />
      <div class="row m-3">
        <div class="col-md-3 card" v-for="vehicle in vehicles" :key="vehicle.id">
        <CarCard :data="vehicle" :homeView="false"/>
        </div>
    </div>
  </div>
</template>
<script>
import InnerBanner from "~/components/InnerBanner.vue";
import JourneyDetail from "../../components/JourneyDetail.vue";
import ChooseCar from "~/components/ChooseCar.vue";
import CarCard from "~/components/CarCard.vue";
export default {
  data() {
    return {
      vehicles: [],
    };
  },
  mounted() {
    this.getAllVehicles();
  },
  methods: {
    async getAllVehicles() {
      let res = await this.$axios.get("get_all_vehicles").then((data) => {
        this.vehicles = data.data.vehicles;
      });
    },
  },
  components: { InnerBanner, JourneyDetail, ChooseCar, CarCard },
};
</script>
