<template>
        <VueSlickCarousel :arrows="true" :dots="true" :slidesToShow="2" :autoplay="true">
          <div v-for="slider in sliders" :key="slider.id">
            <div class="clients__inner">
              <div class="client__box-wrapp">
                <div class="client__logo">
                  <img src="../assets/images/carousel-logo1.png" alt=" " />
                </div>
                <div class="client__text">
                  <p class="para__medium">
                    {{slider.text}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  data() {
    return {
      sliders: [
        {id:1,image:'../assets/images/carousel-logo1.png',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Id modisequi facere amet impedit ipsam'},
        {id:2,image:'../assets/images/carousel-logo2.png',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Id modisequi facere amet impedit ipsam'},
        {id:3,image:'../assets/images/carousel-logo1.png',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Id modisequi facere amet impedit ipsam'},
      ]
  }
}
};
</script>
