import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import list from '@/components/list/list'
import cart from '@/components/cart/cart'
import product from '@/components/product/product'
import address from '@/components/address/address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/list/:list_name',
      name: 'list',
      component: list
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/product/:product_id',
      name: 'product',
      component: product
    },
    {
      path: '/address',
      name: 'address',
      component: address
    }
  ]
})
