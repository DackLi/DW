<template>
  <!--S Breadcrumb -->
    <ul class="breadcrumb" v-if="breadcrumb">
      <li v-for="(breadcrumb,breadcrumbIndex) in breadcrumb" :key="breadcrumbIndex">
        <router-link :to="{path: breadcrumb.url }" tag="a" >{{ breadcrumb.text }}</router-link>
      </li>
    </ul>
  <!--E Breadcrumb -->
</template>
<script>
export default {
  name: 'breadcrumb',
  data () {
    return {
    }
  },
  props: {
    breadcrumb: {
      type: Array
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '~common/less/variable';
  .breadcrumb {
    padding: 0.2rem;
    background-color: #f5f5f5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 0;
     li {
       display: inline-block;
       line-height: 0;
          a {
             font-size: @text-default-size;
             line-height: 0.6rem;
           }
     }
     li+li:before {
       color: #ccc;
       content: "/\00a0";
       font-size: @text-default-size;
       padding: 0 0.2rem;
     }
     .active {
       color: #777;
     }
    }
</style>
