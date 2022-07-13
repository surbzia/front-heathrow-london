<template>
 <header>
        <!-- topbar -->
        <div class="top__bar">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-4 col-sm-4">
                        <a href="tel:+1 844-411-4063" class="tel--btn"><img src="../assets/images/us-flag.png" alt=" ">+1
                            844-411-4063</a>
                    </div>
                    <div class="col-md-4 text-center col-sm-4">
                      <nuxt-link to="/" class="logo-wrap">
                        <img src="../assets/images/logo.png" alt=" "></nuxt-link>
                    </div>
                    <div class="col-md-4 text-right col-sm-4">
                        <nuxt-link to="/" class="main-btn btn--transparent text__white border__white">BOOK</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- topbar  -->
        <div class="container">
            <hr>
        </div>
        <!-- Navbar  -->
        <nav class="navbar navbar-expand-md">
            <div class="container">
                <!-- Brand -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav m-auto align-items-center">
                        <li class="nav-item">
                            <!-- <a class="nav-link active-menu-item" href="#">OUR CARS</a> -->
                             <nuxt-link to="/cars" class="nav-link active-menu-item" >OUR CARS</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">SERVICES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CHAUFFEURS</a>
                            <!-- <div class="services__mega-menu">
                                <div class="row">
                                    <div class="col-md-4">
                                        <ul class="dropdown-menulist">
                                            <li><a href="services-inner.html"><img src="../assets/images/wp-ico.png" alt=" ">Wordpress/Custom</a></li>
                                            <li><a href="#"><img src="../assets/images/ecommerce-ico.png" alt=" ">Ecommerce Website</a></li>
                                            <li><a href="#"><img src="../assets/images/logo-ico.png" alt=" ">Logo Services</a></li>
                                            <li><a href="#"><img src="../assets/images/magento-ico.png" alt=" ">Magento</a></li>
                                            <li><a href="#"><img src="../assets/images/maintenance-ico.png" alt=" ">Website Maintenance</a></li>
                                            <li><a href="#"><img src="../assets/images/branding-ico.png" alt=" ">Branding</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <ul class="dropdown-menulist">
                                            <li><a href="#"><img src="../assets/images/seo-ico.png" alt=" ">SEO Services</a></li>
                                            <li><a href="#"><img src="../assets/images/app-ico.png" alt=" ">Mobile App Design</a></li>
                                            <li><a href="#"><img src="../assets/images/web-app-ico.png" alt=" ">Web App</a></li>
                                            <li><a href="#"><img src="../assets/images/open-cart-ico.png" alt=" ">Open Cart</a></li>
                                            <li><a href="#"><img src="../assets/images/woocommerce-ico.png" alt=" ">woo commerce</a></li>
                                            <li><a href="#"><img src="../assets/images/sopify-ico.png" alt=" ">Shopify</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <ul class="dropdown-menulist">
                                            <li><a href="#"><img src="../assets/images/vid-anim-ico.png" alt=" ">Video Animation</a></li>
                                            <li><a href="#"><img src="../assets/images/domain-name-ico.png" alt=" ">Domain Hosting</a></li>
                                            <li><a href="#"><img src="../assets/images/big-commerce-ico.png" alt=" ">Big Commerce</a></li>
                                            <li><a href="#"><img src="../assets/images/react-native-ico.png" alt=" ">React Native</a></li>
                                            <li><a href="#"><img src="../assets/images/smm-ico.png" alt=" ">Social Media Marketing</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> -->
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">OUR COMPANY</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Navbar  -->
    </header>
</template>
<script>
export default {
  computed: {
    cartTotal() {
      return this.$store.state.cart.total;
    },
    currency() {
      return this.$store.state.currency;
    },
    loggedIn() {
      return this.$store.state.loggedIn;
    },
  },
};
</script>
