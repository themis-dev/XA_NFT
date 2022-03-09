<template>
  <div class="mine-tab">
      <div :class="active === 1 ?'item active': 'item'" @click="clickItem(1)">个人信息</div>
      <div :class="active === 2 ?'item active': 'item'" @click="clickItem(2)">我的藏品</div>
      <div :class="active === 3 ?'item active': 'item'" @click="clickItem(3)">我的订单</div>
  </div>
</template>

<script>

export default {
  name: 'MineTab',
  components: {
  },
  computed: {},
  data() {
    return {
      active: 1
    }
  },
  created() {},
  mounted() {
    if ( this.$route.name === 'user') this.active = 1
    if ( this.$route.name === 'collection') this.active = 2
    if ( this.$route.name === 'order' || this.$route.name === 'orderDetail') this.active = 3
  },
  methods: {
    clickItem(item) {
      this.active = item
      if (item === 1) this.$router.push({ path: '/mine/user' })
      if (item === 2) this.$router.push({path:'/mine/collection'})
      if (item === 3) this.$router.push({path:'/mine/order'})
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.mine-tab {
  display: flex;
  .item {
    font-size: 22px;
    font-family: MiSans;
    font-weight: 600;
    line-height: 29px;
    color: #999999;
    margin-left: 2rem;
    cursor: pointer;
    &.active {
      color: #333333;
    }
    &:first-child {
      margin-left: 0px;
    }
  }
}

</style>
