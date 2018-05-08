<template>
  <div>
    <!-- S Header -->
    <header class="header">
      <!-- S Header Menu Switch-->
      <div class="header-left">
        <div class="header-aside-switch" @click="toggleSlide">
          <i class="iconfont icon-menu"></i>
        </div>
      </div>
      <!-- E Header Menu Switch-->
      <!-- S Header Logo-->
      <div class="header-center">
        <div class="header-logo">
          <a href="#">
            <img src="//sp.aopcdn.com//banner/1514275084281.png?ver=15142750" alt="stylishplus.com" title="stylishplus.com">
          </a>
        </div>
      </div>
      <!-- E Header Logo-->
      <!-- S Header Cart-->
      <div class="header-right">
        <div class="header-cart">
          <a href="#">
            <i class="iconfont icon-cart"></i>
            <span class="header-cart-point">2</span>
          </a>
        </div>
      </div>
      <!-- E Header Cart-->
    </header>
    <!-- E Header -->
    <!-- S Slide -->
    <transition name="slide-fade">
      <div class="slide" v-show="slideShow">
        <div class="slide-wrapper">
          <!-- S Login -->
          <div class="login">
            <!-- 登录 -->
            <template v-if="slide.login.isLogin">
              <a href="javascript:;" class="login-switch" @click="toggleLoginBox">
                <span>
                <i class="iconfont icon-user-login"></i>
                {{slide.login.userEmai}}
                </span>
                <span class="iconfont" :class="{'icon-moreunfold': !showLoginBox,'icon-less': showLoginBox}"></span>
              </a>
              <div class="login-box" v-show="showLoginBox">
                <div class="item" v-for="(userMenu,index) in slide.login.userMenu" :key="index">
                  <router-link :to="{path: userMenu.url }" tag="a" @click.native="toggleSlide">{{ userMenu.title }}</router-link>
                </div>
              </div>
            </template>
            <!-- 未登录  -->
            <template v-else>
              <router-link :to="{path: '/login' }" tag="a" @click.native="toggleSlide">
                <span>
                <i class="iconfont icon-account"></i>
                Login / Register
                </span>
              </router-link>
            </template>
          </div>
          <!-- E Login -->
          <!-- S LeftMenu -->
          <div class="slide-menu">
            <div class="menu-item" v-for="(menu,menuIndex) in slide.menu" :key="menuIndex" :class="{'active':menu.title === toggleName}">
              <template v-if="!menu.children">
                <router-link :to="{path: menu.url }" tag="a" @click.native="toggleSlide">{{ menu.title }}</router-link>
              </template>
              <template v-else>
                <a href="javascript:;" @click="toggleMenuItem(menu.title)">{{ menu.title }}</a>
                <i class="iconfont" :class="{'icon-moreunfold':menu.title != toggleName,'icon-less':menu.title === toggleName}"></i>
                <transition name="menu-toggle">
                  <div class="menu-item-children" v-show="menu.title === toggleName">
                    <ul>
                      <li v-for="(menuChild,index) in menu.children" :key="index">
                        <router-link :to="{path: menuChild.url }" tag="a" @click.native="toggleSlide">{{ menuChild.title }}</router-link>
                      </li>
                    </ul>
                  </div>
                </transition>
              </template>
            </div>
          </div>
          <!-- E LeftMenu -->
        </div>
      </div>
    </transition>
    <!-- E Slide -->
    <!-- S Shade -->
    <transition name="fade">
      <div class="all-shade" v-show="slideShow" @click="toggleSlide"></div>
    </transition>
    <!-- E Shade -->
  </div>
</template>

<script>
export default {
  name: 'VHeader',
  data () {
    return {
      'slide': { // 本页面数据
        login: {}
      },
      'slideShow': false, // 是否显示左侧菜单
      'toggleName': '', // 子菜单名称
      'showLoginBox': false // 是否显示个人登录菜单
    }
  },
  created () {
    let vm = this
    vm.$http.post('/api/slide').then(function (response) {
      if (response.status === 200) {
        vm.slide = response.data.data.slide
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    toggleSlide () {
      this.slideShow = !this.slideShow
    },
    toggleMenuItem (name) {
      this.toggleName = name
    },
    toggleLoginBox (name) {
      this.showLoginBox = !this.showLoginBox
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~common/less/variable';
  @import '~common/less/mixin';
  .header {
    .display-flex;
    height: 50px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: #fff;
    .border-1px(#e6e6e6);
    &-left {
      flex: 1;
      position: relative;
      .display-flex;
      .align-items(center);
        .header-aside-switch {
          .px2rem(padding-left,15);
          .display-flex;
          .align-items(center);
            .iconfont {
              font-size: 30px;
            }
        }
    }
    &-center {
      flex: 4;
        .header-logo {
          width: 100%;
          height: 100%;
          .flex-center;
            img {
              width: 100%;
            }
        }
    }
    &-right {
      flex: 1;
      position: relative;
      .display-flex;
      .justify-content(flex-end);
        .header-cart {
          .px2rem(padding-right,15);
          .display-flex;
          .align-items(center);
            a {
              display: block;
              position: relative;
              .display-flex;
              .justify-content(flex-end);
                .icon-cart {
                  font-size: 30px;
                }
                .header-cart-point {
                  position: absolute;
                  width: 18px;
                  height: 18px;
                  color: #fff;
                  top: -2px;
                  right: -5px;
                  border-radius: 50%;
                  font-size: 14px;
                  line-height: 18px;
                  background-color: @bg-theme-color;
                  text-align:center;
                }
            }
        }
    }
  }
  .slide {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 70%;
    background: #fff;
    -webkit-overflow-scrolling: touch;
    z-index: 51;
    &.slide-fade-enter-active, &.slide-fade-leave-active {
      transition: all .5s ease;
    }
    &.slide-fade-enter, &.slide-fade-leave-to {
      transform: translateX(-150px);
      opacity: 0;
    }
    &-wrapper {
      overflow-y: auto;
      overflow-x: hidden;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      .login {
        padding: 0 10px 0px 10px;
        a {
          height: 1rem;
          font-size: @text-default-size;
          color: @text-color;
          font-weight: 700;
          .display-flex;
          .justify-content(space-between);
          .align-items(center);
        }
        .login-box {
          padding-left: 0.6rem;
          a {
            color: @text-color;
          }
        }
        .iconfont {
          font-size: 0.45rem;
        }
      }
      .slide-menu {
        .menu-item {
          .border-1px(#e6e6e6);
          a {
            padding: 0 0.2rem;
            font-size:@text-default-size;
            display: block;
            height: 100%;
            line-height: 1rem;
          }
          .select {
            color: @text-theme-color
          }
          i {
            position: absolute;
            right: 0.2rem;
            line-height: 1rem;
            top: 0;
            font-size: 0.45rem;
          }
          .menu-item-children {
            &.menu-toggle-enter-active, &.menu-toggle-leave-active {
              transition: all .5s linear;
              height: 100%;
              height: auto;
              overflow: hidden;
            }
            &.menu-toggle-enter, &.menu-toggle-leave-to {
              height: 0;
              opacity: 0;
            }
            padding-left: 0.45rem;
            font-size: @text-default-size;
            a {
              color: #9b9b9b;
            }
          }
        }
        .active {
          background: #f4f5f7;
          .menu-item-children {
            display: block;
          }
        }
      }
    }
  }
  .all-shade {
    position: fixed;
    pointer-events: auto;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background-color: #000;
    z-index: 50;
    &.fade-enter-active, &.fade-leave-active {
      transition: opacity .5s;
    }
    &.fade-enter, &.fade-leave-to{
      opacity: 0;
    }
  }
</style>
