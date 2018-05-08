<template>
  <div class="site">
    <topBanner></topBanner>
    <VHeader></VHeader>
    <div class="page-content">
      <div class="main-wrapper">
        <breadcrumb :breadcrumb="product.breadcrumb"></breadcrumb>
        <!--S Info Carousel -->
        <div class="product-info-swiper">
          <swiperTpl :banner="product.banner" :swiperOption="proudctBanner" ></swiperTpl>
        </div>
        <!--E Info Carousel -->

        <div class="p_l_3">
          <!--S Product Title -->
          <div class="product-info-title">
            <p class="title">{{product.info.title}}</p>
            <a href="#">
              <span class="iconfont icon-favorites-copy"></span>
            </a>
          </div>
          <!--E Product Title -->

          <!--S Product Price -->
          <div class="product-info-price">
            <strong class="price">${{product.info.price}}</strong>
            <span class="market-price">${{product.info.oldPrice}}</span>
          </div>
          <!--E Product Price -->

          <!--S Product Time -->
          <div class="flex">
            <div class="product-end-time">
              <i class="iconfont icon-shijian"></i>
              <span class="timer">01 days 23:25:35</span>
            </div>
          </div>
          <!--E Product Time -->

          <div class="info-line"></div>

          <!--S Product Color -->
          <div class="product-color">
            <div class="color-title">
              Color:
              <span>{{selectColorVal}}</span>
            </div>
            <div class="color-list">
              <ul class="clearfix" v-if="product.info.color">
                <li class="color-item" :class="{'active':colorIndex === selectColorIndex}" v-for="(colorItem,colorIndex) in product.info.color" :key="colorIndex" @click="changeColor(colorIndex,colorItem)">
                  <span :class="colorItem"></span>
                </li>
              </ul>
            </div>
          </div>
          <!--E Product Color -->

          <!--S Product size -->
          <div class="product-size">
            <div class="color-title">
              Size:
              <span>{{selectSzieVal}}</span>
            </div>
            <div class="size-list">
              <ul class="clearfix" v-if="product.info.size">
                <li class="size-item" :class="{'active':szieIndex === selectSzieIndex}" v-for="(szieItem,szieIndex) in product.info.size" :key="szieIndex" @click="changeSzie(szieIndex,szieItem)">
                  {{szieItem}}
                </li>
              </ul>
            </div>
          </div>
          <!--E Product size -->

          <!--S Product Num -->
          <div class="product-num">
            <div class="color-title">
              QTY:
            </div>
            <div class="product-num-box">
              <span class="num-btn" @click="changeNum('minus')">
                <span class="num-minus iconfont icon-minus-o"></span>
              </span>
              <span class="qty">{{product.info.qty}}</span>
              <span class="num-btn" @click="changeNum('add')">
                <span class="num-plus iconfont icon-add-o"></span>
              </span>
            </div>
          </div>
          <!--E Product Num -->

          <!--S Add To Cart Btn -->
          <button type="submit" class="add-to-cart" @click="submite">
            ADD TO CART
          </button>
          <!--E Add To Cart Btn -->

          <!--S Product Description List -->
          <ul class="description-list">
            <li class="description-list-item" ref="description">
              <a href="javascript:;" @click="toggleTab($event)">
                DESCRIPTION
                <i class="iconfont icon-add-o"></i>
              </a>
              <div class="item-children description">
                <table border="0" cellspacing="0" cellpadding="10" width="100%">
                  <tr  v-for="(descriptionItem,descriptionIndex) in product.info.description" :key="descriptionIndex">
                    <td width="30%">{{descriptionIndex}}:</td>
                    <td>{{descriptionItem}}</td>
                  </tr>
                </table>
              </div>
            </li>
            <li class="description-list-item" ref="description">
              <a href="javascript:;" @click="toggleTab($event)">
                SIZE CHART
                <i class="iconfont icon-add-o"></i>
              </a>
              <div class="item-children size-chart">
                <table>
                  <thead>
                    <tr>
                      <td width="50%"><b>M</b></td>
                      <td width="28%" class="tit">lnch</td>
                      <td width="22%" class="tit">cm</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="tit">length</td>
                      <td>34</td>
                      <td>87</td>
                    </tr>
                    <tr>
                      <td class="tit">bust</td>
                      <td>33</td>
                      <td>84</td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <thead>
                    <tr>
                      <td width="50%"><b>M</b></td>
                      <td width="28%" class="tit">lnch</td>
                      <td width="22%" class="tit">cm</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="tit">length</td>
                      <td>34</td>
                      <td>87</td>
                    </tr>
                    <tr>
                      <td class="tit">bust</td>
                      <td>33</td>
                      <td>84</td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <thead>
                    <tr>
                      <td width="50%"><b>M</b></td>
                      <td width="28%" class="tit">lnch</td>
                      <td width="22%" class="tit">cm</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="tit">length</td>
                      <td>34</td>
                      <td>87</td>
                    </tr>
                    <tr>
                      <td class="tit">bust</td>
                      <td>33</td>
                      <td>84</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  <strong>All dimensions are measured manually with a deviation of 2 to 4cm.</strong>
                </p>
              </div>
            </li>
            <li class="description-list-item" ref="description">
              <a href="javascript:;" @click="toggleTab($event)">
                SHIPPING & RETURN
                <i class="iconfont icon-add-o"></i>
              </a>
              <div class="item-children shipping">
                <p>Worldwide Delivery</p>
                <p>
                  FREE shipping on orders of <span class="lang-price" data-price="59.00">US$59.00</span>+
                </p>
                <p>Super Savings: 7 - 12 days</p>
                <p>Standard Shipping: 5 - 8 days</p>
                <p>Expedited Shipping: 2 - 5 days</p>
                <p>Preparation for shipping normally takes 1 - 3 Days after payment.</p>
                <p>&nbsp;</p>
                <p>Return or exchange within 30 days from the delivered date is accepted, Requirement:</p>
                <p>1. Items received within 30 days from the delivered date</p>
                <p>2. Items received unused, undamaged and in original package</p>
                <p>3. Return shipping fee is afforded by customers</p>
                <p>&nbsp;</p>
              </div>
            </li>
          </ul>
          <!--E Product Description List-->

          <!--S You Also Like -->
          <div class="product-like">
            <div class="like-title">
              YOU MAY ALSO LIKE
            </div>
            <div class="like-content">
              <swiperTpl :banner="product.likeList" :swiperOption="likeBanner" ></swiperTpl>
            </div>
          </div>
          <!--E You Also Like -->
        </div>
      </div>
    </div>
    <vFooter></vFooter>
  </div>
</template>
<script>
import topBanner from 'components/topBanner/topBanner'
import VHeader from 'components/header/header'
import vFooter from 'components/footer/footer'
import swiperTpl from 'components/swiper/swiper'
import breadcrumb from 'components/breadcrumb/breadcrumb'
export default {
  name: 'product',
  components: {
    topBanner, VHeader, vFooter, swiperTpl, breadcrumb
  },
  data () {
    return {
      product: {
        info: {}
      },
      // 产品图片轮播配置
      proudctBanner: {
        paginationClickable: true,
        effect: 'coverflow',
        slidesPerView: 1.5,
        centeredSlides: true,
        coverflow: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: false
        },
        prevButton: null,
        nextButton: null
      },
      // solo like 轮播配置
      likeBanner: {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 5,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'
      },
      selectColorIndex: 0,
      selectColorVal: '',
      selectSzieIndex: 0,
      selectSzieVal: ''
    }
  },
  created () {
    let vm = this
    console.log(vm.$route.params)
    // 获取本页面数据
    vm.$http.post('/api/product').then(function (response) {
      if (response.status === 200) {
        vm.product = response.data
        vm.selectColorVal = vm.product.info.color[0]
        vm.selectSzieVal = vm.product.info.size[0]
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    changeColor: function (colorIndex, colorItem) {
      this.selectColorIndex = colorIndex
      this.selectColorVal = colorItem
    },
    changeSzie: function (szieIndex, szieItem) {
      this.selectSzieIndex = szieIndex
      this.selectSzieVal = szieItem
    },
    changeNum: function (type) {
      if (type === 'add') {
        this.product.info.qty++
      } else {
        if (this.product.info.qty > 0 && this.product.info.qty !== 1) {
          this.product.info.qty--
        }
      }
    },
    toggleTab: function (event) {
      if (event.target.nextSibling.nextSibling.style.display === 'block') {
        event.target.childNodes[1].className = 'iconfont icon-add-o'
        event.target.nextSibling.nextSibling.style.display = 'none'
      } else {
        event.target.nextSibling.nextSibling.style.display = 'block'
        event.target.childNodes[1].className = 'iconfont icon-minus-o'
      }
    },
    submite: function () {
      let par = {}
      let vm = this
      par.suk = vm.product.info.sku
      par.color = vm.selectColorVal
      par.size = vm.selectSzieVal
      par.qty = vm.product.info.qty
      vm.$http.post('/api/cart', par).then(function (response) {
        if (response.status === 200) {
          vm.$router.push({ path: '/cart' })
        }
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
  .product-info-swiper {
    padding-top: 0.3rem;
  }
  .product-info-title {
    position: relative;
    margin-top: 0.3rem;
    p {
      font-size: 0.45rem;
      line-height: 0.6rem;
      width: 85%;
      .text-hidden(2)
    }
    span {
      position: absolute;
      right: 0;
      top: 0.2rem;
      font-size: 0.6rem;
      line-height: 0.4rem;
    }
  }
  .product-info-price {
    font-size: 0.5rem;
    padding: 0.3rem 0;
    line-height: 0.3rem;
    strong {
      font-size: 0.6rem;
      font-weight: 700;
      color: @text-theme-color;
    }
    .market-price {
      font-weight: 300;
      color: #999;
      text-decoration: line-through;
      font-size: 0.4rem;
    }
  }
  .flex {
    display: flex;
    .product-end-time {
      display: flex;
      height: 0.4rem;
      font-size: 0.4rem;
      background: rgba(0,0,0,0.8);
      color: #fff;
      padding: 0.4rem 0.3rem;
      border-radius: 0.2rem;
      flex: 0 0 auto;
      align-items: center;
      span {
        color: #fff;
        margin-left: 0.2rem;
      }
      i {
        font-size: 0.4rem;
      }
    }
  }
  .info-line {
    border-bottom: 1px solid #e5e5e5;
    margin: 0.3rem 0;
  }
  .color-title {
    font-size: 0.3rem;
    line-height: 0.8rem;
    font-weight: 700;
    span {
      color: #999;
      text-transform: uppercase;
    }
  }
  .color-list {
    .color-item {
      border: 1px solid #fff;
      float: left;
      margin-right: 10px;
      padding: 2px;
      border-radius: 100%;
      span {
        width: 0.7rem;
        height: 0.7rem;
        line-height: 0.7rem;
        display: block;
        border-radius: 100%;
      }
      span.black{background-color: #000;}
      span.green{background-color: #55A532;}
      span.wihite{border: 1px solid #ccc;background: #fff;}
    }
    .active {
      border: 1px solid #000;
    }
  }
  .size-list {
    .size-item {
      float: left;
      margin-right: 10px;
      margin-bottom: 10px;
      text-align: center;
      line-height: 0.3rem;
      padding: 0.2rem 0.3rem;
      font-size: 0.3rem;
      border: 1px solid #d4d4d4;
    }
    .active {
      background-color: #000;
      color: #fff;
    }
  }
  .product-num-box {
    display: flex;
    align-items: center;
    .num-btn {
      width: 0.8rem;
      height: 0.8rem;
      display: inline-block;
      line-height: 0.8rem;
      background-color: @btn-black;
      position: relative;
      .iconfont {
        color: #fff;
        font-size: 0.5rem;
        position: absolute;
        // top: 50%;
        left: 50%;
        margin-left: -0.25rem;
        margin-top: -0.01rem;
      }
    }
    .qty {
      font-size: 0.6rem;
      display: inline-block;
      margin: 0 0.2rem;
    }
  }
  .add-to-cart {
    width: 100%;
    margin: 0.4rem auto;
    display: block;
    font-size: 0.4rem;
    line-height: 0.6rem;
    background: @btn-black;
    color: #fff;
    padding: 0.3rem 0;
    border: 0;
  }
  .description-list {
    margin-top: 0.4rem;
    .description-list-item {
      display: flex;
      flex-wrap: wrap;
      font-size: 0.4rem;
      height: auto;
      align-items: center;
      border-bottom: 1px solid #ddd;
      padding-left: 0.2rem;
      a {
        display: block;
        width: 100%;
        position: relative;
        line-height: 1rem;
        i {
          position: absolute;
          font-size: 0.4rem;
          right: 0.2rem;
          color: #000;
        }
      }
      .item-children {
        display: none;
        width: 100%;
        table {
          width: 100%;
          font-size: 0.2rem;
          margin-bottom: .2rem;
        }
      }
      .description {
          table {
            tr {
              td:first-child {
                text-align: right;
              }
              td {
                color: #666;
                padding: 0.1rem;
              }
            }
          }
        }
        .size-chart {
          table {
            border-bottom: 1px solid #e9e9e9;
            td {
              padding: 0.1rem .3rem;
            }
            .tit {
              color: #999;
            }
          }
          p {
            line-height: 0.5rem;
            margin-bottom: 0.3rem;
            font-weight: bolder;
            color: #666;
          }
        }
        .shipping {
          p {
            line-height: 0.5rem;
            color: #666;
            font-size: 0.2rem;
          }
        }
    }
  }
  .product-like {
    margin-top: 0.2rem;
    .like-title {
      font-size: 0.4rem;
      line-height: 0.8rem;
      font-weight: 700;
    }
  }
</style>
