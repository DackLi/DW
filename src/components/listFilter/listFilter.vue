<template>
  <div>
    <!--S filter -->
    <div class="filter clearfix">
      <span class="filter-srot l" @click="toggleSort()">
        Sort
        <i class="iconfont icon-moreunfold"></i>
      </span>
      247 Products
      <span class="filter-attrs r"  @click="toggleFlisiter()">
        Filter
        <i class="iconfont icon-shaixuan"></i>
      </span>
    </div>
    <!--E filter -->

    <!--S filter Modal-->
    <transition name="filter-fade">
      <div class="filter-modal  trans" id="filter-modal" v-show="ShowListFilter">
        <div class="close-modal" @click="toggleFlisiter()"></div>
        <div class="modal-dialog">
          <div class="modal-header clearfix">
            Filter By
            <a href="javascript:;" class="btn btn-white" id="close-modal-btn" @click="toggleFlisiter()">Cancel</a>
            <a href="javascript:;" class="btn btn-black" @click="toggleFlisiter(),submitFlister()">Apply</a>
          </div>
          <div class="modal-content">
            <div class="filter-select" v-if="filterSortList.length > 0">
              <p class="select-item" v-for="(item,itemIndex) in filterSortList" :key="itemIndex">
                {{item.value}}
                <a href="#" class="iconfont icon-close"></a>
              </p>
            </div>
            <div class="clear-warp">
              <a href="#" class="clearfix">Clear All</a>
            </div>
            <div class="refine-list" v-if="filter">

              <div v-for="(filterItems,filtersIndex) in filter" :key="filtersIndex">
                <div class="list-group-item">
                  <p @click="toggleFlisterItem(filterItems)">{{filterItems.type}}</p>
                  <i class="iconfont" :class="{'icon-moreunfold':!filterItems.isShow,'icon-less':filterItems.isShow}" ></i>
                </div>
                <div class="group-item-next" v-show="filterItems.isShow"  v-if="filterItems.child">
                  <div class="list-group-item active" :data-name='filterItems.type'  v-for="(filterItem,filterIndex) in filterItems.child" :key="filterIndex">
                    <span class="iconfont" :class="{'icon-checkboxSelect' : filterItem.isSelect, 'icon-checkbox': !filterItem.isSelect}" :data-value='filterItem.value'></span>
                    <p @click="toggleFlisterItems(filterItem)">
                      {{filterItem.value}}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </transition>
    <!--E filter Modal -->

    <!--S srot Modal-->
    <transition name="filter-fade">
      <div class="filter-modal" id="sort-modal" v-show="ShowListSort">
        <div class="close-modal" @click="toggleSort()"></div>
        <div class="modal-dialog">
          <div class="modal-header clearfix">
            Sort By
          </div>
          <div class="modal-content">
            <div class="sort-list" data-name='sort' v-if="sort">
              <div class="list-group-item" @click="toggleSort(),toggleSortItem(sortItem,sortIndex)" v-for="(sortItem,sortIndex) in sort" :key="sortIndex">
                <p>{{sortItem.text}}</p>
                <i class="iconfont" :class="{'icon-radio':!sortItem.isSelect,'icon-radioSelect':sortItem.isSelect}"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!--E srot Modal -->
  </div>
</template>
<script>
export default {
  name: 'listFilter',
  data () {
    return {
      ShowListFilter: false,
      ShowListSort: false,
      filterSortList: []
    }
  },
  props: {
    filter: {
      type: Array
    },
    sort: {
      type: Array
    }
  },
  methods: {
    toggleFlisiter: function () {
      this.ShowListFilter = !this.ShowListFilter
    },
    toggleSort: function () {
      this.ShowListSort = !this.ShowListSort
    },
    toggleFlisterItem: function (filterItems) {
      if (filterItems.isShow === undefined) {
        this.$set(filterItems, 'isShow', true)
      } else {
        filterItems.isShow = !filterItems.isShow
      }
    },
    toggleFlisterItems: function (filterItems) {
      if (filterItems.isSelect === undefined) {
        this.$set(filterItems, 'isSelect', true)
      } else {
        filterItems.isSelect = !filterItems.isSelect
      }
      this.getFlisterSortValue()
    },
    toggleSortItem: function (sortItem, index) {
      if (sortItem.isSelect === undefined) {
        this.$set(sortItem, 'isSelect', true)
      } else {
        sortItem.isSelect = !sortItem.isSelect
      }
      this.sort.forEach((sort, sortindex) => {
        sort.isSelect = false
        if (sortindex === index) {
          sort.isSelect = true
        }
      })
      this.getFlisterSortValue()
      this.submitFlister()
    },
    getFlisterSortValue: function () {
      this.filterSortList = []
      for (let i = 0; i < this.filter.length; i++) {
        for (let index = 0; index < this.filter[i].child.length; index++) {
          if (this.filter[i].child[index].isSelect) {
            let obj = {}
            obj.type = this.filter[i].type
            obj.value = this.filter[i].child[index].value
            this.filterSortList.push(obj)
          }
        }
      }
      for (let index = 0; index < this.sort.length; index++) {
        const element = this.sort[index]
        if (element.isSelect) {
          let obj = {}
          obj.type = 'sort'
          obj.value = element.value
          this.filterSortList.push(obj)
        }
      }
    },
    submitFlister: function () {
      let vm = this
      vm.$http.post('/api/list/top', vm.filterSortList).then(function (response) {
        if (response.status === 200) {
          vm.$emit('getProductList', response)
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
  .filter {
    font-size: @text-default-size;
    position: relative;
    margin: 0.4rem 0.2rem 0.2rem;
    line-height: 0.6rem;
    color: @text-color;
    text-align: center;
  }
  .filter-modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 51;
    width: 100%;
    &.filter-fade-enter-active, &.filter-fade-leave-active {
      transition: all .5s ease;
    }
    &.filter-fade-enter, &.filter-fade-leave-to {
      transform: translateX(-150px);
      opacity: 0;
    }
     .close-modal {
       position: absolute;
       right: 0;
       top: 0;
       width: 10%;
       height: 100%;
       background-color:rgba(0,0,0,.7);
       z-index: 51;
     }
     .modal-dialog {
       position: absolute;
       right: 10%;
       top: 0;
       bottom: 0;
       width: 90%;
       background: #fff;
        .modal-header {
          font-size: 0.55rem;
          line-height: 1.5rem;
          padding-left: 0.3rem;
          font-weight: @text-weight-700;
          position: absolute;
          width: 100%;
          border-bottom:1px solid #ddd;
          background: #fff;
          z-index: 52;
            .btn {
              text-align: center;
              white-space: nowrap;
              cursor: pointer;border: 1px solid transparent;
              font-size: @text-default-size;
              padding: 0.2rem 0.4rem;
              position: absolute;
              top: 0.35rem;
              line-height: 0.4rem;
            }
            .btn-white {
              background: linear-gradient(top,#fff,#f0f0f0);
              border: 1px solid #e2e2e2;
              color: #666;
              right: 2.5rem;
            }
            .btn-black {
              background-color: #000;
              color: #fff;
              right: 0.3rem;
            }
        }
        .modal-content {
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          overflow-y: auto;
          overflow-x: hidden;
          .filter-select {
            line-height: 0;
            padding: 0.4rem 0.3rem 0.2rem 0.3rem;
            background: #f7f7f7;
            .border-1px(#ddd);
              .select-item {
                border-radius: 2px;
                color: #fff;
                background: #333;
                display: inline-block;
                position: relative;
                padding:0 0.8rem 0 0.2rem;
                line-height: 0.7rem;
                font-size: 0.4rem;
                margin: 0 0.2rem 0.2rem 0;
                  .icon-close {
                    font-size: 0.4rem;
                    height: 0.7rem;
                    width: 0.6rem;
                    position: absolute;
                    right: 0;
                    top: 0;
                    line-height: 0.7rem;
                    color: #fff;
                    border-left: 1px solid #6d6d6d;
                    border-radius: 2px;
                    text-align: center;
                  }
              }
          }
          .clear-warp {
            font-size: @text-default-size;
            line-height: 0.7rem;
            text-align: right;
            padding: 0.2rem 0.3rem 0.2rem 0.3rem;
            .border-1px(#ddd);
          }
          .refine-list {
            .group-item-next{
              padding-left: 0.3rem;
              background: #f7f7f7;
               .list-group-item {
                 .border-1px(#ddd);
                padding: 0 0.3rem;
                line-height: 1rem;
                position: relative;
                  p {
                    font-size: 0.4rem;
                    line-height: 1rem;
                    text-indent: .7rem;
                  }
                  span {
                    font-size: .5rem;
                    position: absolute;
                  }
               }
            }
            .list-group-item {
             .border-1px(#ddd);
              padding: 0 0.3rem;
              line-height: 1rem;
              position: relative;
                p {
                  font-size: 0.4rem;
                  line-height: 1rem;
                }
                i {
                    position: absolute;
                    right: 0.3rem;
                    top: 0;
                    font-size: .5rem;
                  }
            }
          }
          .sort-list {
            .list-group-item {
             .border-1px(#ddd);
              padding: 0 0.3rem;
              line-height: 1rem;
              position: relative;
                p {
                  font-size: 0.4rem;
                  line-height: 1rem;
                }
                i {
                    position: absolute;
                    right: 0.3rem;
                    top: 0;
                    font-size: .5rem;
                  }
            }
          }
        }
     }
  }
</style>
