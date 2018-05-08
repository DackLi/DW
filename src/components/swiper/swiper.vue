<template>
  <swiper class="swiper-container" :options="swiperOption" ref="mySwiper" v-if="banner" @mouseleave.native="play()"  @mouseover.native="stopPlay()">
    <swiper-slide class="swiper-wrapper" v-for="(bannerItem,index) in banner" :key="index">
      <router-link :to="{path: bannerItem.url }" tag="a">
        <img :src="bannerItem.imgUrl" alt="">
      </router-link>
    </swiper-slide>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- 前进后退按钮 -->
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'lSwiper',
  data () {
    return {
    }
  },
  props: {
    banner: {
      type: Array
    },
    swiperOption: {
      type: Object
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    mySwiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    stopPlay () {
      this.mySwiper.autoplay.stop()
      console.log(1)
    },
    play () {
      this.mySwiper.autoplay.start()
      console.log(2)
    }
  },
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
