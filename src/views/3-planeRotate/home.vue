<template>
  <div class="container">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in test" :key="index">
        <div class="swiper-box">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          recusandae deserunt repudiandae excepturi labore amet sapiente
          perferendis mollitia eaque et aliquid iure, quas quos ipsum. Quos
          rerum repellat cupiditate dolorem.
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "planeRotate",
  data() {
    return {
      test: [1, 2, 3, 4, 5],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 10,
        centeredSlides: false,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      },
    };
  },
  components: {},
  created() {},
  methods: {},
};
</script>
<style scoped>
.swiper-box {
  background: red;
}
</style>
 