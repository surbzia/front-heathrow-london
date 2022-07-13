<template>

           <div class="cars__info-wrapper">
          <img :src="data.image_url" alt=" " />
          <h4 class="car__name">{{data.name}}</h4>
          <ul class="cars__details-list">
            <li>
              <span class="cars__detail">Hourly rate (minimum 3 hours)</span
              ><span class="cars__price">£{{data.rate_per_hour}}</span>
            </li>
            <li>
              <span class="cars__detail">Day rate (8 hours)</span
              ><span class="cars__price">£ {{data.rate_per_day}}</span>
            </li>
            <li>
              <span class="cars__detail">Heathrow to Central London</span
              ><span class="cars__price">£150</span>
            </li>
          </ul>
          <p class="car__conc">Prices subject to VAT</p>
           <nuxt-link to="/booking" class="main-btn btn--colored text__white"> BOOK THIS CAR <i class="fa fa-arrow-right"></i
          ></nuxt-link>
          <nuxt-link to="/" class="btn__underlined" v-if="homeView"> FIND OUT MORE</nuxt-link>
        </div>
</template>
<script>
export default {
    props: {
    data: {
      default: {},
      type: Object,
    },
    homeView:true,
  },
};
</script>
