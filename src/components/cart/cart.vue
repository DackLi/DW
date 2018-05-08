<template>
  <div class="site">
    <topBanner></topBanner>
    <VHeader></VHeader>
    <div class="page-content">
      <div class="main-wrapper">
        <VProgress :status="progressStatus"></VProgress>

        <div class="cart-empty" v-if="getTotalQty === 0">
          <span class="iconfont icon-cart"></span>
          <p>Your shopping cart is empty.</p>
          <div class="go-shipping-btn">
            <a href="#/">
              Continue shopping
            </a>
          </div>
        </div>

        <!--S Cart Content -->
        <div class="cart-content" v-else>
          <!--S Cart List -->
          <ul class="cart-list" v-if="cart">
            <!--S Cart Item -->
            <li class="cart-item" v-for="(cartItem,cartindex) in cart.cartList" :key="cartindex">
              <div class="cart-item-box">
                <div class="cart-img">
                  <a :href="cartItem.url">
                    <img :src="cartItem.imgUrl"/>
                  </a>
                </div>
                <div class="cart-info">
                  <div class="cart-info-title">
                    <p>{{cartItem.title}}</p>
                    <p>Color: {{cartItem.color}}</p>
                    <p>Size: {{cartItem.size}}</p>
                    <p>Unit Price: <span class="lang-price">US${{cartItem.price}}</span></p>
                  </div>
                </div>
                <div class="cart-qty">
                  <div >
                    <span class="num-btn btn-num" @click="changeProductNum('minus', cartItem)">
                      <span class="num-minus iconfont icon-minus-o"></span>
                    </span>
                    <span class="qty">{{cartItem.qty}}</span>
                    <span class="num-btn btn-num" @click="changeProductNum('add', cartItem)">
                      <span class="num-plus iconfont icon-add-o"></span>
                    </span>
                  </div>
                  <span class="num-delete-btn num-btn" @click="delectPrice(cartItem, cartindex)">
                    <span class="num-minus iconfont icon-delete"></span>
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <!--S Free Tip -->
          <p class="free-shipping-tip">
            <span>{{freeShipping}}</span>
          </p>
          <!--E Free Tip -->
          <!--S Cart Order -->
          <div class="cart-order">
            <div class="order-total-qty">
              <span class="title">
                Total Quantity :
              </span>
              <span>
                {{getTotalQty}}
              </span>
            </div>
            <div class="order-total-price">
              <span class="title">
                Sub Total :
              </span>
              <span>
                {{getTotalPrice}}
              </span>
            </div>
          </div>
          <!--E Cart Order -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topBanner from 'components/topBanner/topBanner'
import VHeader from 'components/header/header'
import vFooter from 'components/footer/footer'
import VProgress from 'components/progress/progress'
export default {
  name: 'cart',
  components: {
    topBanner, VHeader, vFooter, VProgress
  },
  data () {
    return {
      progressStatus: 1,
      cart: {},
      totalPrice: 0,
      totalQty: 0
    }
  },
  created () {
    let vm = this
    vm.$http.post('/api/cart').then(function (response) {
      if (response.status === 200) {
        vm.cart = response.data
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  computed: {
    getTotalPrice: function () {
      let vm = this
      if (this.cart.cartList) {
        vm.totalPrice = 0
        this.cart.cartList.forEach((item) => {
          vm.totalPrice += item.qty * item.price
        })
        return vm.totalPrice.toFixed(2)
      }
    },
    getTotalQty: function () {
      let vm = this
      if (this.cart.cartList) {
        vm.totalQty = 0
        this.cart.cartList.forEach((item) => {
          vm.totalQty += item.qty
        })
        return vm.totalQty
      }
    },
    freeShipping: function () {
      if (this.totalPrice >= 99) {
        return 'FREE SHIPPING!'
      } else {
        let freeShippingPrice = (99 - this.totalPrice).toFixed(2)
        return `You're US$${freeShippingPrice} from FREE SHIPPING!`
      }
    }
  },
  methods: {
    changeProductNum: function (type, cartItem) {
      if (type === 'add') {
        cartItem.qty++
      } else {
        if (cartItem.qty > 0 && cartItem.qty !== 1) {
          cartItem.qty--
        }
      }
    },
    delectPrice: function (cartItem, index) {
      this.cart.cartList.splice(cartItem, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~common/less/variable';
  @import '~common/less/mixin';
  .cart-empty {
    padding: 1.5rem .3rem 0.8rem;
    font-size: .4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .icon-cart {
      font-size: 1rem;
      line-height: 1rem;
      height: 1rem;
    }
    p {
      font-size: 0.4rem;
      line-height: 0.4rem;
      padding: 0.6rem 0 0.3rem;
    }
    .go-shipping-btn {
      width: 100%;
      margin-top: 0.6rem;
      a {
        display: block;
        width: 80%;
        padding: 0.3rem 0.2rem;
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.4rem;
        background-color: @btn-black;
        color: #fff;
        margin: 0 auto;
      }
    }
  }
  .cart-content {
    padding-bottom: 2.3rem;
    .cart-list {
      padding-top: 0.2rem;
      .cart-item {
        padding: 0 0.3rem 0.2rem 0.3rem;
        .border-1px(#eee);
        margin-bottom: 0.2rem;
        .cart-item-box {
          display: flex;
          position: relative;
          .cart-img {
            flex: 0 0 30%;
            width: 30%;
            position: relative;
            padding-top: 40%;
            a {
              position: absolute;
              display: block;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
            }
          }
          .cart-info {
            flex: 0 0 70%;
            width: 70%;
            padding-left: 0.3rem;
            p {
              line-height: 0.5rem;
              font-size: 0.3rem;
            }
            .cart-info-title p:first-child {
              .text-hidden(2);
            }
          }
          .cart-qty {
            position: absolute;
            left: 30%;
            right: 0;
            bottom: 0;
            padding-left: 0.3rem;
            height: 0.8rem;
            display: flex;
            justify-content: space-between;
            div {
              display: flex;
              align-items: center;
            }
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
                top: 0;
                left: 50%;
                margin-left: -0.25rem;
                margin-top: -0.01rem;
              }
            }
            .qty {
              font-size: 0.6rem;
              display: inline-block
              ;margin: 0 0.2rem;
            }
            .num-delete-btn {
              background-color: #fff;
              .iconfont {
                color: @text-color;
              }
            }
          }
        }
      }
    }
    .free-shipping-tip {
      margin: .3rem .3rem;
      background: #eaeaea;
      color: @text-color;
      padding: .2rem;
      font-size: 0.3rem;
      line-height: 0.4rem;
      span {
        color: @text-theme-color;
        font-weight: @text-weight-700;
      }
    }
    .cart-order {
      padding: 0.3rem;
      font-size: @text-default-size;
      div {
        height: 0.8rem;
        border-bottom: 1px solid #eee;
        padding: 0.2rem 0.2rem;
        .display-flex;
        .align-items(center);
        .justify-content(space-between);
      }
    }
  }
</style>
