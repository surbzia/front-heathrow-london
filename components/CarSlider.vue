<template>
  <VueSlickCarousel
    :arrows="true"
    :dots="true"
    :slidesToShow="3"
    :autoplay="true"
    v-if="vehicles.length > 0"
  >
    <div v-for="vehicle in vehicles" :key="vehicle.id">
      <div class="col-md-12" data-aos="fade-up" data-aos-duration="1000">
        <!-- <div class="cars__info-wrapper">
          <img :src="vehicle.image_url" alt=" " />
          <h4 class="car__name">{{ vehicle.name }}</h4>
          <ul class="cars__details-list">
            <li>
              <span class="cars__detail">Hourly rate (minimum 3 hours)</span
              ><span class="cars__price">£{{ vehicle.rate_per_hour }}</span>
            </li>
            <li>
              <span class="cars__detail">Day rate (8 hours)</span
              ><span class="cars__price">£{{ vehicle.rate_per_day }}</span>
            </li>
            <li>
              <span class="cars__detail">Heathrow to Central London</span
              ><span class="cars__price">£150</span>
            </li>
          </ul>
          <p class="car__conc">Prices subject to VAT</p>

           <nuxt-link to="/booking" class="main-btn btn--colored text__white"> BOOK THIS CAR <i class="fa fa-arrow-right"></i
          ></nuxt-link>

          <nuxt-link to="/" class="btn__underlined"> FIND OUT MORE</nuxt-link>
        </div> -->
        <CarCard :data="vehicle" :homeView="true" />
      </div>
    </div>
  </VueSlickCarousel>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
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
};
</script>
