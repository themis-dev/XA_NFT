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
                    <div class="nft-msg-title">{{ orderObj.productName }}</div>
                    <div class="nft-msg-num">{{ setNumber(orderObj.productHash) }}</div>
                    <div class="nft-msg-author">{{ orderObj.creator }}</div>
                  </div>
                </div>
                <div class="order-data">
                  <div class="data-item">
                    <div class="data-item-title">订单金额</div>
                    <div class="data-item-num">{{ orderObj.price }}元</div>
                  </div>
                  <div class="data-item">
                    <div class="data-item-title">交易数量</div>
                    <div class="data-item-num">{{ orderObj.num }}</div>
                  </div>
                  <!-- <div class="data-item">
                    <div class="data-item-title">创建时间</div>
                    <div class="data-item-num">{{  }}</div>
                  </div> -->
                  <div class="data-item">
                    <div class="data-item-title">付款时间</div>
                    <div class="data-item-num">{{ orderObj.payTime }}</div>
                  </div>
                  <div class="data-item">
                    <div class="data-item-title">订单编号</div>
                    <div class="data-item-num">{{ orderObj.oid }}</div>
                  </div>
                  <div class="data-item">
                    <div class="data-item-title">交易编号</div>
                    <div class="data-item-num">{{ orderObj.paymentId }}</div>
                  </div>
                </div>
              </div>
              
            </div>
        </div>
    </div>
</template>

<script>
import { getOrderDetail } from '@/api/mine'

  export default {
    name: 'order',
    components: {
      MineTab: () => import('./MineTab.vue')
    },
    data() {
      return {
        active: 1,
        pid: this.$route.query.pid,
        orderObj: {}
      }
    },
    computed: {
      message() {
        return ''
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        getOrderDetail({pid: this.pid}).then(res => {
          console.log(res)
          if(res.status == 1 && res.data) {
            this.orderObj = res.data
          }
        })
      },
    clickItem(item) {
      this.active = item
    },
    goback() {
      this.$router.go(-1);
    },
    setNumber(value) {
      if(value) {
        let str = value.substring(0, 8)
        let newStr = value.substring(value.length - 8, value.length)
        return `${str}...${newStr}`
      } else {
        return ''
      }
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
        font-family: MiSans Semibold;
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
    font-family: MiSans Semibold;
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
          font-family: MiSans Semibold;
          font-weight: 600;
          line-height: 24px;
          color: #FFFFFF;
          margin-top: 18px;
        }
        .nft-msg-num {
          font-size: 12px;
          font-family: MiSans Semibold;
          font-weight: 400;
          line-height: 16px;
          color: #EEE1C5;
          margin-top: 10px;
        }
        .nft-msg-author {
          font-size: 12px;
          font-family: MiSans Semibold;
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
          font-family: MiSans Semibold;
          font-weight: 400;
          line-height: 19px;
          color: #999999;
        }
        .data-item-num {
          font-size: 14px;
          font-family: MiSans Semibold;
          font-weight: 500;
          line-height: 19px;
          color: #333333;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .order-detail{
    width: 19.7rem;
    margin-left: 0%!important;
    transform: translate(0%)!important;
    margin: 0 auto!important;
    .mine-tab {
      display: flex!important;
      flex-direction: row!important;
      justify-content: space-around!important;
      
    }
    .mine-tab .item{
        margin-left: 0!important;
      }
    .nav {
      display: flex;
      margin-top: 40px;
      align-items: center;
      cursor: pointer;
      margin-left: 0px;
      padding-left: 5px;
      img {
        width: 10px;
        height: 18px;
      }
      .nav-title {
        font-size: 16px;
        font-family: MiSans Semibold;
        font-weight: 600;
        color: #333333;
        margin-left: 3px;
      }
    }
    
  }

  .order-detail-content {
    width: 19.7rem;
    height: 569px;
    background: rgba(255, 255, 255, 1);
    border-radius: 6px 6px 0px 0px;
    margin-left: -10px;
    padding: 0px!important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .order-status {
      padding-top: 50px;
      text-align: center;
      img {
        width: 47px;
        height: 47px;
        margin-bottom: 15px;
      }
      font-size: 14px;
      font-family: MiSans Semibold;
      font-weight: 500;
      color: #333333;
    }
    .order-msg {
      width: 18rem;
      height: 360px;
      // background-color: aqua;
      margin-top: 45px;
      .nft-msg {
        width: 19.7rem;
        height: 110px;
        background: rgba(81, 81, 82, 1);
        border-radius: 8px;
        display: flex;
        img {
          width: 8rem;
          height: 6.9rem;
        }
        .nft-msg-right {
          .nft-msg-title {
            font-size: 18px;
            font-family: MiSans Semibold;
            font-weight: 600;
            line-height: 24px;
            color: #FFFFFF;
            margin-top: 18px;
          }
          .nft-msg-num {
            font-size: 12px;
            font-family: MiSans Semibold;
            font-weight: 400;
            line-height: 16px;
            color: #EEE1C5;
            margin-top: 10px;
          }
          .nft-msg-author {
            font-size: 12px;
            font-family: MiSans Semibold;
            font-weight: 400;
            line-height: 16px;
            color: #CCCCCC;
            margin-top: 14px;
          }
        }
      }
      .order-data {
        width: 19.7rem;
        height: 220px;
        // background-color: #EEE1C5;
        margin-top: 34px;
        background-image: url(../../images/watermark.png);
        background-size: auto 60%;
        background-repeat: no-repeat;
        background-position: 70% 0%;
        padding: 0px;
        .data-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
          .data-item-title {
            font-size: 14px;
            font-family: MiSans Semibold;
            font-weight: 400;
            line-height: 19px;
            color: #999999;
          }
          .data-item-num {
            font-size: 14px;
            font-family: MiSans Semibold;
            font-weight: 500;
            line-height: 19px;
            color: #333333;
          }
        }
      }
    }
  }
}
</style>
