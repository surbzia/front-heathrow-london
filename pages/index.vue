<template>
  <div>
    <!-- Banner section  -->
    <section class="banner banner--home">
      <div class="container">
        <div
          class="row align-items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="col-md-7">
            <div class="banner--text-wrapp">
              <h1>YOUR PERSONAL CHAFFEUR SERVICE</h1>
              <p>AWARDED BEST UK CHAUFFEUR COMPANY</p>
              <img src="../assets/images/banner-badge.png" alt=" " />
            </div>
          </div>
          <div class="col-md-5">
            <div class="banner--form-wrapp">
              <h3>GET A PRICE & BOOK</h3>
              <form action="#">
                <div class="row banner-check--box-wrapp">
                  <div class="col-md-6">
                    <input
                      type="checkbox"
                      name="one-way"
                      value="one way"
                      v-model="form.type"
                      id="oneWay"
                    />
                    <label for="oneWay">One Way</label>
                  </div>
                  <div class="col-md-6">
                    <input
                      type="checkbox"
                      name="one-way"
                      value="one way"
                      v-model="form.type"
                      id="byHour"
                    />
                    <label for="byHour">BY THE HOUR</label>
                  </div>
                </div>
                <label>
                  <span>WHERE FROM?</span>
                  <!-- <input
                    type="text"
                    name="where-from"
                    value=""
                    @input="getFromAddress"
                    placeholder="Enter Collection Address"
                  /> -->
                  <v-select
                    label="address"
                    v-model="form.address_from"
                    :options="address_data"
                  ></v-select>
                  <i class="fa fa-location"></i>
                </label>
                <label>
                  <span>WHERE TO?</span>
                  <!-- <input
                    type="text"
                    name="where-to"
                    value=""
                     @input="getToAddress"
                    placeholder="Enter Destination Address"
                  /> -->
                  <v-select
                    label="address"
                    v-model="form.address_to"
                    :options="address_data"
                  ></v-select>
                  <i class="fa fa-location"></i>
                </label>
                <label class="input--submit-wrapp">
                  <input type="submit" value="GET MY PRICES" />
                  <i class="fa fa-arrow-right" style="color: #fff"></i>
                </label>
              </form>
            </div>
          </div>
        </div>
        <!-- banner--bottom-sec -->
        <div
          class="banner--bottom-sec"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-8">
                <h3 class="sec--title text__white">YOUR ELECTRIC CHAUFFEUR</h3>
                <h4 class="post--title text__white">
                  We are transitioning to an all-electric fleet
                </h4>
              </div>
              <div class="col-md-4">
                <a
                  href="#"
                  class="main-btn btn--transparent border__white text__white"
                  >ELECTRIC CHAUFFEUR</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- banner--bottom-sec -->
      </div>
    </section>

    <!-- Banner section  -->

    <section class="cars cars--info">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <CarSlider />
            <!-- <div class="col-md-3" data-aos="fade-up" data-aos-duration="1000">
            <div class="cars__info-wrapper">
              <img src="../assets/images/bookcar-1.png" alt=" " />
              <h4 class="car__name">MERCEDES S-CLASS</h4>
              <ul class="cars__details-list">
                <li>
                  <span class="cars__detail">Hourly rate (minimum 3 hours)</span
                  ><span class="cars__price">£65</span>
                </li>
                <li>
                  <span class="cars__detail">Day rate (8 hours)</span
                  ><span class="cars__price">£520</span>
                </li>
                <li>
                  <span class="cars__detail">Heathrow to Central London</span
                  ><span class="cars__price">£150</span>
                </li>
              </ul>
              <p class="car__conc">Prices subject to VAT</p>
              <a href="#" class="main-btn btn--colored text__white"
                >BOOK THIS CAR <i class="fa fa-arrow-right"></i
              ></a>
              <a href="#" class="btn__underlined">FIND OUT MORE</a>
            </div>
          </div>
          <div class="col-md-3" data-aos="fade-up" data-aos-duration="1200">
            <div class="cars__info-wrapper">
              <img src="../assets/images/bookcar-2.png" alt=" " />
              <h4 class="car__name">MERCEDES S-CLASS</h4>
              <ul class="cars__details-list">
                <li>
                  <span class="cars__detail">Hourly rate (minimum 3 hours)</span
                  ><span class="cars__price">£65</span>
                </li>
                <li>
                  <span class="cars__detail">Day rate (8 hours)</span
                  ><span class="cars__price">£520</span>
                </li>
                <li>
                  <span class="cars__detail">Heathrow to Central London</span
                  ><span class="cars__price">£150</span>
                </li>
              </ul>
              <p class="car__conc">Prices subject to VAT</p>
              <a href="#" class="main-btn btn--colored text__white"
                >BOOK THIS CAR <i class="fa fa-arrow-right"></i
              ></a>
              <a href="#" class="btn__underlined">FIND OUT MORE</a>
            </div>
          </div>
          <div class="col-md-3" data-aos="fade-up" data-aos-duration="1700">
            <div class="cars__info-wrapper">
              <img src="../assets/images/bookcar-3.png" alt=" " />
              <h4 class="car__name">MERCEDES S-CLASS</h4>
              <ul class="cars__details-list">
                <li>
                  <span class="cars__detail">Hourly rate (minimum 3 hours)</span
                  ><span class="cars__price">£65</span>
                </li>
                <li>
                  <span class="cars__detail">Day rate (8 hours)</span
                  ><span class="cars__price">£520</span>
                </li>
                <li>
                  <span class="cars__detail">Heathrow to Central London</span
                  ><span class="cars__price">£150</span>
                </li>
              </ul>
              <p class="car__conc">Prices subject to VAT</p>
              <a href="#" class="main-btn btn--colored text__white"
                >BOOK THIS CAR <i class="fa fa-arrow-right"></i
              ></a>
              <a href="#" class="btn__underlined">FIND OUT MORE</a>
            </div>
          </div> -->
          </div>
          <div class="col-md-3" data-aos="fade-up" data-aos-duration="1900">
            <div class="car__sidebar">
              <img src="../assets/images/car-badge.png" alt=" " />
              <h3 class="heading__medium text__white">
                NEED MULTIPLE CARS OR HAVE A BESPOKE REQUEST?
              </h3>
              <p class="para__medium text__white">
                We cater for all requests, no matter how large or small
              </p>
              <img src="../assets/images/car-side-banner.png" alt=" " />
              <a href="#" class="btn__normal btn__white"
                >SPEAK TO US <i class="fa fa-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="award-sec">
      <div class="container">
        <div
          class="sec__video-wrapp"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <video
            src="../assets/images/heathrow.mp4"
            autoplay
            loop
            muted
          ></video>
        </div>
        <div
          class="video__text-wrap"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 class="sec--title text__dark">AWARD WINNING</h3>
          <h4 class="post--title text__light">
            OUTSTANDING SERVICE. EVERY TIME.
          </h4>
          <div class="bar__bottom"></div>
          <p class="para__medium text__dark">
            From the moment you contact us, to the moment you're chauffeur opens
            your door. Enjoy outstanding service every step of the way. Winning
            Awards for Best UK Chauffeur Company in 2017, 2018, 2019 & 2021
            demonstrates our commitment to providing the best chauffeur service.
          </p>
          <a href="#" class="main-btn btn--transparent border--dark text__dark"
            >OUR COMPANY</a
          >
        </div>
      </div>
    </section>

    <section class="services">
      <div class="container">
        <div
          class="services__main-text-wrapp"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 class="sec--title text__dark">OUR SERVICES</h3>
          <h4 class="post--title text__light">
            OUTSTANDING SERVICE. EVERY TIME.
          </h4>
          <div class="bar__bottom bg_dark"></div>
        </div>
        <div class="row">
          <div class="col-md-4" data-aos="fade-up" data-aos-duration="1200">
            <!-- services box  -->
            <div class="services__box">
              <img src="../assets/images/services-1.jpg" alt=" " />
              <div class="services__text-wrapp">
                <h4 class="text__dark">BY THE HOUR</h4>
                <p class="para__medium text__capitalize">As Directed Hire</p>
                <p class="para__medium">
                  Transparent hourly pricing with no hidden extras keeps you in
                  control.
                </p>
                <a href="#" class="btn__underlined"
                  >VIEW SERVICES
                  <!--<i class="fa fa-arrow-right"></i>-->
                  →</a
                >
              </div>
            </div>
            <!-- services box  -->
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-duration="1500">
            <!-- services box  -->
            <div class="services__box">
              <img src="../assets/images/services-2.jpg" alt=" " />
              <div class="services__text-wrapp">
                <h4 class="text__dark">AIRPORT</h4>
                <p class="para__medium text__capitalize">Meet and Greet</p>
                <p class="para__medium">
                  Expect high-flying service and style with our all inclusive
                  airport meet and greet service
                </p>
                <a href="#" class="btn__underlined"
                  >VIEW SERVICES
                  <!--<i class="fa fa-arrow-right"></i>-->
                  →</a
                >
              </div>
            </div>
            <!-- services box  -->
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-duration="1700">
            <!-- services box  -->
            <div class="services__box">
              <img src="../assets/images/services-3.jpg" alt=" " />
              <div class="services__text-wrapp">
                <h4 class="text__dark">ONE WAY</h4>
                <p class="para__medium text__capitalize">
                  First Class Service From A to B
                </p>
                <p class="para__medium">
                  Enjoy safe and luxurious travel from pickup to destination.
                </p>
                <a href="#" class="btn__underlined"
                  >VIEW SERVICES
                  <!--<i class="fa fa-arrow-right"></i>-->
                  →</a
                >
              </div>
            </div>
            <!-- services box  -->
          </div>
        </div>
      </div>
    </section>

    <section class="clients">
      <div class="container">
        <SlickCarousel />
      </div>
    </section>

    <section class="winning-banner" data-aos="fade-up" data-aos-duration="1000">
      <div class="container">
        <div
          class="winning__text-wrapp"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h3 class="sec--title text__white">AWARD WINNING</h3>
          <h4 class="post--title text__light">
            OUTSTANDING SERVICE. EVERY TIME.
          </h4>
          <div class="bar__bottom bg_white"></div>
          <a href="#" class="main-btn btn--colored text__white">BOOK NOW</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SlickCarousel from "~/components/SlickCarousel.vue";
import CarSlider from "../components/CarSlider.vue";
export default {
  name: "HomePage",
  data() {
    return {
      vehicles: [],
      address_data: [],
      form: {
        address_to: null,
        address_from: null,
        type: null,
      },
    };
  },
  mounted() {
    this.getAddress();
  },
  methods: {
    async getAddress() {
      const data = await this.$axios.$get("location");
      this.address_data = data;
    },
  },
  components: { SlickCarousel, CarSlider },
};
</script>
