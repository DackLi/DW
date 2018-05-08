<template>
  <!--S Progress -->
    <div class="progress">
        <ul class="progress-list">
          <li class="progress-item" :class="{'active':status === 1}">
              <p>1</p>
              <p>Shopping Cart</p>
          </li>
          <li class="progress-item" :class="{'active':status === 2}">
              <p>2</p>
              <p>Shopping</p>
          </li>
          <li class="progress-item" :class="{'active':status === 3}">
              <p>3</p>
              <p>Payment</p>
          </li>
        </ul>
    </div>
  <!--E Progress -->
</template>
<script>
export default {
  name: 'VProgress',
  data () {
    return {
    }
  },
  props: {
    status: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~common/less/variable';
  @import '~common/less/mixin';
  .progress {
    padding: 0.3rem 0;
    .progress-list {
      .display-flex;
      .progress-item {
        flex: 1;
        .display-flex;
        .align-items(center);
        flex-direction: column;
        font-size: .35rem;
        height: auto;
          p {
            line-height: 0.7rem;
            color: #ccc;
          }
          p:first-child {
            .display-flex;
            .align-items(center);
            flex-direction: column;
            width: 0.7rem;
            height: 0.7rem;
            background-color: #ccc;
            color: #fff;
            border-radius: 100%;
          }
      }
      .active {
        p {
          color: #333;
        }
        p:first-child {
          background-color: #000;
          color: #fff;
        }
      }
    }
  }
</style>
