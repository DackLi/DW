<template>
  <div class="site">
    <topBanner></topBanner>
    <VHeader></VHeader>
    <div class="page-content">
      <div class="main-wrapper">
        <VProgress :status="progressStatus"></VProgress>
        <div class="p_l_3">
          <!--S Address Content-->
          <div class="address-content box">
            <div class="box-title">
              Shipping Address
            </div>
            <div class="box-content">
              <!--S Adderss List -->
                <div class="has-address">
                  <ul class="address-list">
                    <li class="address-item clearfix active" data-value="cc" data-countryid="Afghanistan">
                      <div >
                        <span data-name='last_name'>
                          <strong>kai</strong>
                        </span>
                        <span data-name='frist_name'>
                          li
                        </span>
                        <span data-name='address1'>shanxi</span>
                        <span data-name='address2'>xian yuhuazhai</span>
                        <span data-name='province'>xian</span>
                        <span data-name='city'>xian</span>
                        <span data-name='country' data-countryid="2">United Kingdom</span>
                        <span data-name='zip'>071000</span>
                        <span data-name='phone'>13111111111</span>
                      </div>
                      <div class="operation r">
                        <i class="iconfont icon-edit"></i>
                        <i class="iconfont icon-delete"></i>
                      </div>
                    </li>
                    <li class="address-item clearfix" data-value="aa" data-countryid="Bahamas">
                      <div >
                        <span data-name='last_name'>
                          <strong>kai</strong>
                        </span>
                        <span data-name='frist_name'>
                          li
                        </span>
                        <span data-name='address1'>beijing</span>
                        <span data-name='address2'>beijing yuhuazhai</span>
                        <span data-name='province'>beijing</span>
                        <span data-name='country' data-countryid="1">china</span>
                        <span data-name='city'>beijing</span>
                        <span data-name='zip'>011000</span>
                        <span data-name='phone'>13122222222</span>
                      </div>
                      <div class="operation r">
                        <i class="iconfont icon-edit"></i>
                        <i class="iconfont icon-delete"></i>
                      </div>
                    </li>
                  </ul>
                  <button class="add-new-address" type="button">+ ADD A NEW ADDRESS</button>
                </div>
                <!--E Adderss List -->

            </div>
          </div>
          <!--E Address Content-->

          <!--S Shipping Content -->
          <div class="shipping-content box">
            <div class="box-title">
              SHIPPING METHOD
            </div>
            <div class="box-content">
              <ul class="shipping-list">
                <li class="shipping-item active" data-value="0|0.00">
                  <span>Free Shipping</span>
                  <span>5 - 8  Days</span>
                  <span>US$0.00</span>
                </li>
                <li class="shipping-item" data-value="1|23.2">
                  <span>Standard Shipping</span>
                  <span>5 - 8  Days</span>
                  <span>US$2.06</span>
                </li>
                <li class="shipping-item" data-value="2|15.6">
                  <span>Express Shipping</span>
                  <span>2 - 5 Days</span>
                  <span>US$12.06</span>
                </li>
              </ul>
            </div>
          </div>
          <!--E Shipping Content -->

          <!--S Payment Content -->
          <div class="Shipping-content box">
            <div class="box-title">
              PAYMENT METHOD
            </div>
            <div class="box-content">
              <ul class="payment-list">
                <li class="payment-item active" data-type = "paypal">
                  <span>Paypal</span>
                  <span>
                    <img class="payment-img" src="">
                  </span>
                </li>
                <li class="payment-item" data-type = "card">
                  <span>Credit Card</span>
                  <span>
                    <img class="payment-img" src="">
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <!--E Payment Content -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topBanner from 'components/topBanner/topBanner'
import VHeader from 'components/header/header'
import VProgress from 'components/progress/progress'
export default {
  name: 'Aaddress',
  components: {
    topBanner, VHeader, VProgress
  },
  data () {
    return {
      progressStatus: 2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~common/less/variable';
  @import '~common/less/mixin';
  .box {
    border: 1px solid #e3e3e3;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
    margin-bottom: .5rem;
    .box-title {
      font-weight: 700;
      padding: .4rem .3rem;
      font-size: .4rem;
      line-height: .4rem;
      text-transform: uppercase;
      border-bottom: 1px solid #e3e3e3;
    }
    .box-content {
      padding: .3rem;
    }
  }
  .address-content {
    .has-address {
      .add-new-address {
        color: #000;
        border: 1px solid #ddd;
        background-color: #f6f6f6;
        -webkit-tap-highlight-color: transparent;
        transition: background-color .3s;
        cursor: pointer;
        text-decoration: none;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        white-space: nowrap;
        text-transform: uppercase;
        text-align: center;
        padding: .8em 1.4em;
        margin: .3rem 0;
        font-size: 0.3rem;
        line-height: 0.3rem;
      }
      .address-list {
        li.active {
          border: 1px solid #333;
        }
        .address-item {
          font-size: 0.3rem;
          padding: .3rem;
          border: 1px solid #ddd;
          margin-bottom: .3rem;
          span {
            line-height: 0.5rem;
            margin-right: 0.2rem;
          }
          .operation {
            margin-top: .2rem;
            height: 0.4rem;
            i {
              margin-right: .2rem;
              color: #000;
              font-size: 0.4rem;
            }
          }
        }
      }
    }
  }
  .shipping-content {
    .shipping-list {
      .shipping-item {
        display: flex;
        align-items: center;
        justify-content:space-between;
        font-size: 0.3rem;
        height: 1rem;
        border: 1px solid #eee;
        margin-bottom: 0.3rem;
        span {
          display: flex;
          justify-content:center;
          font-size: 0.3rem;
          flex: 0 0 33.333%;
        }
      }
      .active {
        border-color: #333;
      }
    }
  }
</style>
