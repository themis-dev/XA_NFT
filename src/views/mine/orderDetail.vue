<template>
    <div class="container content">
        <div class="order-detail">
            <MineTab />
            <div class="nav" @click="goback">
              <img src="../../images/back.png" alt="">
              <div class="nav-title">我的订单列表</div>
            </div>
            <div class="order-detail-content">
              <div class="order-status">
                <img src="../../images/success.png" alt="">
                <div>交易成功</div>
              </div>
              <div class="order-msg">
                <div class="nft-msg">
                  <img src="../../images/nft-img.png" alt="">
                  <div class="nft-msg-right">
                    <div class="nft-msg-title">《雄安赋》</div>
                    <div class="nft-msg-num">AC9163#00074/10000</div>
                    <div class="nft-msg-author">唐诗</div>
                  </div>
                </div>
                <div class="order-data">
                  <div class="data-item">
                    <div class="data-item-title">订单金额</div>
                    <div class="data-item-num">19.90元</div>
                  </div>
                  <div class="data-item">
                    <div class="data-item-title">交易数量</div>
                    <div class="data-item-num">1</div>
                  </div>
                  <div class="data-item">
                    <div class="data-item-title">创建时间</div>
                    <div class="data-item-num">2021.12.29 13:20:34</div>
                  </div>
                  <div class="data-item">
                    <div class="data-item-title">付款时间</div>
                    <div class="data-item-num">2021.12.29 13:20:34</div>
                  </div>
                  <div class="data-item">
                    <div class="data-item-title">订单编号</div>
                    <div class="data-item-num">2022021041245566777955</div>
                  </div>
                  <div class="data-item">
                    <div class="data-item-title">交易编号</div>
                    <div class="data-item-num">20220210412455612367779123455</div>
                  </div>
                </div>
              </div>
              
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
        active: 1,
      }
    },
    computed: {
      message() {
        return ''
      }
    },
    methods: {
    clickItem(item) {
      this.active = item
    },
    goback() {
      this.$router.go(-1);
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
.order-detail {
    width: 67.5rem;
    margin-left: 50%;
    transform: translate(-50%);
    .nav {
      display: flex;
      margin-top: 40px;
      margin-left: 60px;
      align-items: center;
      cursor: pointer;
      img {
        width: 10px;
        height: 18px;
      }
      .nav-title {
        font-size: 16px;
        font-family: MiSans;
        font-weight: 600;
        color: #333333;
        margin-left: 3px;
      }
    }
}
.order-detail-content {
  width: 535px;
  height: 569px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px 6px 0px 0px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 47px;
  .order-status {
    padding-top: 50px;
    text-align: center;
    img {
      width: 47px;
      height: 47px;
      margin-bottom: 15px;
    }
    font-size: 14px;
    font-family: MiSans;
    font-weight: 500;
    color: #333333;
  }
  .order-msg {
    width: 439px;
    height: 360px;
    // background-color: aqua;
    margin-top: 45px;
    .nft-msg {
      width: 439px;
      height: 110px;
      background: rgba(81, 81, 82, 1);
      border-radius: 8px;
      display: flex;
      img {
        width: 190px;
        height: 110px;
      }
      .nft-msg-right {
        margin-left: 34px;
        .nft-msg-title {
          font-size: 18px;
          font-family: MiSans;
          font-weight: 600;
          line-height: 24px;
          color: #FFFFFF;
          margin-top: 18px;
        }
        .nft-msg-num {
          font-size: 12px;
          font-family: MiSans;
          font-weight: 400;
          line-height: 16px;
          color: #EEE1C5;
          margin-top: 10px;
        }
        .nft-msg-author {
          font-size: 12px;
          font-family: MiSans;
          font-weight: 400;
          line-height: 16px;
          color: #CCCCCC;
          margin-top: 14px;
        }
      }
    }
    .order-data {
      width: 100%;
      height: 220px;
      // background-color: #EEE1C5;
      margin-top: 34px;
      padding: 0 27px;
      background-image: url(../../images/watermark.png);
      background-size: auto 60%;
      background-repeat: no-repeat;
      background-position: 70% 0%;
      .data-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        .data-item-title {
          font-size: 14px;
          font-family: MiSans;
          font-weight: 400;
          line-height: 19px;
          color: #999999;
        }
        .data-item-num {
          font-size: 14px;
          font-family: MiSans;
          font-weight: 500;
          line-height: 19px;
          color: #333333;
        }
      }
    }
  }
}
</style>
