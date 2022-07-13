<template>
<footer id="footer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <img src="../assets/images/logo.png" alt=" " class="foo-logo">
                </div>
                <div class="col-md-6">
                    <a href="tel:+1 844-411-4063" class="tel--btn"><img src="../assets/images/us-flag.png" alt=" ">+1 844-411-4063</a>
                </div>
            </div>
            <div class="spacer"></div>
            <div class="row">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-4">
                            <h3 class="foo__title text__white">OUR CARS</h3>
                            <ul class="foo__list">
                                <li><a href="#">Mercedes S-Class</a></li>
                                <li><a href="#">Mercedes V-Class & EQV</a></li>
                                <li><a href="#">Mercedes E-Class</a></li>
                                <li><a href="#">Range Rover Hybrid LWB</a></li>
                                <li><a href="#">Bentley Mulsanne</a></li>
                                <li><a href="#">Rolls-Royce Phantom</a></li>
                                <li><a href="#">Minibuses</a></li>

                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h3 class="foo__title text__white">SERVICES</h3>
                            <ul class="foo__list">
                                <li><a href="#">By The Hour</a></li>
                                <li><a href="#">One way</a></li>
                                <li><a href="#">Airport</a></li>
                                <li><a href="#">Business</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Tours</a></li>
                                <li><a href="#">Weddings</a></li>

                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h3 class="foo__title text__white">OUR COMPANY</h3>
                            <ul class="foo__list">
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Safety</a></li>
                                <li><a href="#">Sustainability</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Press & Media</a></li>

                            </ul>
                        </div>
                        <div class="social__links-wrapp">
                            <a href="https://www.facebook.com"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.twitter.com"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.youtube.com"><i class="fab fa-youtube"></i></a>
                            <a href="https://www.pinterest.com"><i class="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="footer__form-wrapp">
                        <h3 class="foo__title text__white">JOIN THE CLUB</h3>
                        <p class="para__small text__white">EMAIL ADDRESS</p>
                         <form action="#" @submit="saveNewsletter">
                            <label>
                                <input type="email" v-model="newsletter.email" placeholder="Enter Your Email Address">
                                <!-- <i class="fab fa-envelope"></i> -->
                            </label>
                            <input type="submit"  value="SUBSCRIBE">
                          </form>
                    </div>
                </div>
            </div>
            <div class="foo__bottom">
                <div class="row">
                    <div class="col-md-6">
                        <p>© ichauffeur 2022. All rights reserved.</p>
                    </div>
                    <div class="col-md-6">
                        <div class="foo__btns-wrapp">
                            <a href="#">Terms</a>
                            <a href="#">Privacy</a>
                            <a href="#">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import Vue from 'vue';
export default {
  data() {
    return {
      newsletter: {
        email: "",
      },
    };
  },
  methods: {
    saveNewsletter(event) {
      event.preventDefault();
      this.$store.dispatch("newsletter/save", this.newsletter);
      this.newsletter.email = "";
    },
  },
  computed: {

    loader() {
      return this.$store.state.newsletter.loading;
    },
    newsletterErrors() {
      return this.$store.state.newsletter.newsletterErrors;
    },
    hasErrors() {
      return this.$store.state.newsletter.hasErrors;
    },
  },
};
</script>
