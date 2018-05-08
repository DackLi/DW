<template>
  <!-- S Footer -->
  <footer class="footer">
    <div class="p_l_3">
      <ul class="footer-menu">
        <li class="footer-menu-item"  v-for="(footerItem,footerItemIndex) in footerlist" :key="footerItemIndex">
          <a href="javascript:;" class="footer-menu-item-title" @click="toggleFooterDiv($event,footerItemIndex)">
            <span>{{footerItem.nvaText}}</span>
            <span class="iconfont" :class="{'icon-add-o':!footerItem.openChildern,'icon-minus-o':footerItem.openChildern}"></span>
          </a>
          <div class="footer-menu-item-children" v-if="footerItem.navChildern" v-show="footerItem.openChildern">
            <ul>
              <li v-for="(footerChildernItem,footerChildernItemIndex) in footerItem.navChildern" :key="footerChildernItemIndex">
                <a :href="footerChildernItem.url">
                  {{footerChildernItem.text}}
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <p class="copyright">© 2018stylishplus.com.</p>
    </div>
  </footer>
  <!-- E Footer -->
</template>
<script>
export default {
  name: 'vFooter',
  data () {
    return {
      footerlist: [
        {
          nvaText: 'COMPANY',
          openChildern: false,
          navChildern: [
            {
              url: '/index',
              text: 'About Us'
            },
            {
              url: '/index',
              text: 'About Us'
            },
            {
              url: '/index',
              text: 'About Us'
            },
            {
              url: '/index',
              text: 'About Us'
            }
          ]
        },
        {
          nvaText: 'COMPANY',
          openChildern: false,
          navChildern: [
            {
              url: '/index',
              text: 'About Us'
            },
            {
              url: '/index',
              text: 'About Us'
            },
            {
              url: '/index',
              text: 'About Us'
            },
            {
              url: '/index',
              text: 'About Us'
            }
          ]
        },
        {
          nvaText: 'COMPANY',
          openChildern: false,
          navChildern: [
            {
              url: '/index',
              text: 'About Us'
            },
            {
              url: '/index',
              text: 'About Us'
            },
            {
              url: '/index',
              text: 'About Us'
            },
            {
              url: '/index',
              text: 'About Us'
            }
          ]
        }
      ]
    }
  },
  methods: {
    toggleFooterDiv: function (event, index) {
      for (let i = 0; i < this.footerlist.length; i++) {
        this.footerlist[i].openChildern = false
        if (i === index) {
          this.footerlist[index].openChildern = true
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '~common/less/variable';
@import '~common/less/mixin';
.footer {
  margin-top: 0.5rem;
  background: #333;
  color: #fff;
  font-size:@text-default-size;
  .footer-menu {
    .footer-menu-item {
      a.footer-menu-item-title {
        color: #fff;
        padding: .4rem 0;
        border-bottom: 1px solid #9b9b9b;
        height: 1rem;
        font-size: @text-default-size;
        .display-flex;
        .justify-content(space-between);
        .align-items(center)
      }
      .footer-menu-item-children {
        padding-left: 0.4rem;
        li {
          a {
            display: block;
            line-height: 1rem;
            font-size: @text-default-size;
            color: #fff;
          }
        }
      }
    }
  }
  .copyright {
    font-size: 12px;
    text-align: center;
    padding: .5rem 0;
    line-height: 0.3rem;
  }
}
</style>
