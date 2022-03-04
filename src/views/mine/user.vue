<template>
    <div class="container content">
        <div class="user">
            <MineTab />
            <div class="mine-user">
              <div class="title">个人信息</div>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'user',
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
.user {
    width: 67.5rem;
    margin-left: 50%;
    transform: translate(-50%);
}
.mine-user {
    width: 67.5rem;
    height: 39.375rem;
    background: rgba(255, 255, 255,1);
    border-radius: 6px 6px 0px 0px;
    margin-top: 25px;
    .title {
      font-size: 28px;
      font-weight: 600;
      line-height: 37px;
      color: #333333;
      text-align: center;
      padding-top: 1.875rem;
    }
}
</style>
