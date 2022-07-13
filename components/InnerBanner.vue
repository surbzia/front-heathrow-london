<template>
    <section class="banner banner--inner">
        <div
          class="banner--bottom-sec"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="banner--text-wrapp text-center">
            <h1>{{data.title}}</h1>
          </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
    data: {
      default: {},
      type: Object,
    },
  },
};
</script>
