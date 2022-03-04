<template>
    <div class="container content">
        <div class="order">
            <MineTab />
            <div class="mine-order">
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'order',
    components: {
      MineTab: () => import('./MineTab.vue')
    },
    data() {
      return {
      }
    },
    computed: {
      message() {
        return ''
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    margin-top: 46px;
    // margin-left: 30px;
}
.order {
    width: 67.5rem;
    margin-left: 50%;
    transform: translate(-50%);
}
.mine-order {
    width: 67.5rem;
    height: 39.375rem;
    background: rgba(255, 255, 255,1);
    border-radius: 6px 6px 0px 0px;
    margin-top: 25px;
}
</style>
