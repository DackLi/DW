<template>
  <div class="site">
    <topBanner></topBanner>
    <VHeader></VHeader>

    <div class="page-content">
      <div class="main-wrapper">
        <breadcrumb :breadcrumb="list.breadcrumb"></breadcrumb>
        <listFilter :filter="list.filter" :sort="list.sort" @getProductList="changeProduct"></listFilter>
        <!--E List Product -->
        <div class="list-wrapper">
          <ul class="flex list-box" v-if="list.productList">
            <li class="list-item" v-for="(productItem,productIndex) in list.productList" :key="productIndex">
              <div class="product-img">
                <a :href="productItem.url">
                  <img :src="productItem.imgUrl">
                </a>
              </div>
              <div class="product-name">
                {{productItem.title}}
              </div>
              <div class="product-price">
                <strong class="lang-price" data-price="33.48">US${{productItem.price}}</strong>
                <a href="javascript:;" class="list-like" >
                  <i class="iconfont" :class="{'icon-favorites':!productItem.isLike,'icon-favorites-copy':productItem.isLike}"></i>
                </a>
              </div>
            </li>
          </ul>
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
import breadcrumb from 'components/breadcrumb/breadcrumb'
import listFilter from 'components/listFilter/listFilter'
export default {
  name: 'list',
  components: {
    topBanner, VHeader, vFooter, breadcrumb, listFilter
  },
  data () {
    return {
      list: {}
    }
  },
  created () {
    let vm = this
    vm.$http.post('/api/list/top').then(function (response) {
      if (response.status === 200) {
        vm.list = response.data.data
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    changeProduct: function (response) {
      this.list.productList = response.data.data.productList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~common/less/variable';
  @import '~common/less/mixin';
  .list-wrapper {
    padding-top: 0.2rem;
      .list-box {
        .display-flex;
        flex-flow:row wrap;
        align-content: flex-start;
        .list-item {
          flex: 0 0 50%;
          overflow: hidden;
          margin-bottom: 0.2rem;
          &:nth-child(odd) {
            padding: 0 0.1rem 0 0.2rem;
          }
          &:nth-child(even) {
            padding: 0 0.2rem 0 0.1rem;
          }
            .product-img {
              padding: 67.68% 50%;
              display: block;
              position: relative;
              a {
                display: block;
                padding-top: 100%;
                  img {
                    width: 100%;
                    height: auto;
                    position: absolute;
                    top: 0;
                    left: 0;
                  }
              }
            }
            .product-name {
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              color: #666;
              font-size: 0.35rem;
              line-height: 0.6rem;
            }
            .product-price {
              line-height: 0.6rem;
              position: relative;
              font-size: @text-default-size;
                strong {
                  font-weight: 700;
                }
                a {
                  position: absolute;
                  right: 0.15rem;
                  top: 0;
                }
            }
        }
      }
  }
</style>
