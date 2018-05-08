<template>
  <div class="site">
    <topBanner></topBanner>
    <VHeader></VHeader>
    <div class="page-content">
      <div class="main-wrapper">

        <!--S Home Banner -->
        <div class="home-banner">
          <swiperTpl :banner="index.banner" :swiperOption="homoeBanner" ></swiperTpl>
        </div>
        <!--E Home Banner -->

        <!--S Discount Msg -->
        <div class="home-message">
          <div class="top-text">
            <p>
              <b style="color: #d0011b;">FREE SHIPPING </b>
              <b>$59 + </b>
              <span style="position: relative;top: -1px">&nbsp;|&nbsp;</span>
              <b style="color: #d0011b;">15% OFF </b><b>1ST ORDER</b>
            </p>
          </div>
        </div>
        <!--E Discount Msg -->

        <!--S Home Nav -->
        <div class="home-nav">
          <swiper class="swiper-container" v-if="index.nav" :options="homeNav">
              <swiper-slide class="swiper-wrapper">
                  <a href="javascript:;" @click="getProductList($event)" class="swiper-slide" :data-type="navItem.type" :class="{'active':navItem.active}" v-for="(navItem,index) in index.nav" :key="index">
                    {{navItem.text}}
                    <span></span>
                  </a>
              </swiper-slide>
          </swiper>
        </div>
        <!--E Home Nav -->

        <!--S Home Nav Content -->
        <div class="home-nav-content">
          <ul class="home-product-list">
            <li class="home-product-box" v-for="(productItem,index) in indexProductList" :key="index">
              <div class="product-pic">
                <a :href="productItem.url">
                  <img class="lazy" :src="productItem.imgUrl" :alt="productItem.title">
                </a>
              </div>
              <div class="product-info">
                <strong class="lang-price" data-price="33.48">US${{productItem.price}}</strong>
                <a href="javascript:;" class="list-like" :class="{'1':productItem.isLike}">
                  <i class="iconfont icon-favorites"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <!--E Home Nav Content -->
      </div>
    </div>
    <vFooter></vFooter>
  </div>
</template>
<script>
import topBanner from 'components/topBanner/topBanner'
import VHeader from 'components/header/header'
import swiperTpl from 'components/swiper/swiper'
import vFooter from 'components/footer/footer'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'index',
  components: {
    topBanner, VHeader, swiperTpl, swiper, swiperSlide, vFooter
  },
  data () {
    return {
      index: {},
      indexProductList: {},
      homoeBanner: {
        notNextTick: true,
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        observer: true,
        observeParents: true
      },
      homeNav: {
        slidesPerView: 'auto',
        paginationClickable: true,
        freeMode: true,
        freeModeFluid: true
      }
    }
  },
  created () {
    let vm = this
    vm.$http.post('/api/index').then(function (response) {
      if (response.status === 200) {
        vm.index = response.data.data.index
      }
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
    vm.$http.post('/api/index/nav').then(function (response) {
      if (response.status === 200) {
        vm.indexProductList = response.data.data.productList
      }
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
  },
  mounted () {},
  methods: {
    getProductList: function (event) {
      let vm = this
      let listName = event.target.getAttribute('data-type')
      vm.$http.post('/api/index/nav/top').then(function (response) {
        if (response.status === 200) {
          vm.indexProductList = response.data.data.productList
        }
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~common/less/variable';
  @import '~common/less/mixin';
  .home-message {
    color: @text-color;
    display: table;
    margin: .3rem auto .1rem ;
    text-align: center;
    .top-text {
      text-align: center;
      font-size: @text-default-size;
    }
  }
  .home-nav {
    .swiper-container {
      a {
        display: flex;
      }
    }
    a {
      width: auto;
      margin: 0 .28rem;
      font-size:@text-default-size;
      line-height: 1rem;
      text-transform: capitalize;
      &.active {
        color: @text-color;
        font-weight: @text-weight-700;
        span {
          border-color: @text-color;
        }
      }
      span {
        position: absolute;
        width: 40%;
        left: 50%;
        bottom: 10%;
        margin-left: -20%;
        height: 0;
        border: 1px solid #fff;
      }
    }
  }
  .home-product-list {
    .display-flex;
    flex-flow:row wrap;
    .home-product-box {
      flex: 0 0 33.333%;
      font-size: 0.35rem;
      padding: 0.1rem 0.1rem 0 0.1rem;
      img {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
        background-color: #fff;
        margin: 0 auto;
        display: block
        ;width: 100%;
        height: auto;
      }
      .product-pic {
        width: 100%;
        padding-bottom: 133%;
        position: relative;
        overflow: hidden;
        background-size: 30px;
        a {
          display: block;
          bottom: 0;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      .product-info {
        line-height: 0.7rem;
        position: relative;
        strong {
          font-weight: bold;
          font-size: @text-default-size;
        }
        .list-like {
          position: absolute;
          right: 0.15rem;
          top: 0rem;
          i {
            font-size: @text-default-size;
          }
        }
      }
    }
  }
</style>
