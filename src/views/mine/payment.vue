<template>
    <div class="content">
        <div class="order-detail">
            <div class="nav" @click="goback">
              <img src="../../images/back.png" alt="">
              <div class="nav-title">支付</div>
            </div>
            <div class="order-detail-content">
              <div class="order-msg">
                <div class="nft-msg">
                  <img src="../../images/nft-img.png" alt="">
                  <div class="nft-msg-right">
                    <div class="nft-msg-title">《雄安赋》</div>
                    <div class="nft-msg-num">AC9163#00074/10000</div>
                    <div class="nft-msg-author">唐诗</div>
                  </div>
                </div>
              </div>
              <el-radio-group v-model="radioValue" class="radio-group-wrapper">
                <el-radio :label="1">支付宝</el-radio>
                <el-radio :label="2">微信</el-radio>
              </el-radio-group>
              <div class="btn-wrapper">
                <button type="primary" @click="handlePaymentClick">去支付</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { goPayment } from '@/api/mine'

  export default {
    name: 'order',
    data() {
      return {
        active: 1,
        oid: this.$route.query.oid,
        radioValue: 1
      }
    },
    computed: {
      message() {
        return ''
      }
    },
    methods: {
      handlePaymentClick() {
          let reqObj = {
              oid: this.oid,
              whichPay: this.radioValue
          }
          goPayment(reqObj).then(res => {
              console.log(res)
              const div = document.createElement('div')
              div.id = 'alipay'
              div.innerHTML = res
              document.body.appendChild(div)
              document.querySelector('#alipay').children[0].submit()
          })
      },
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
    width: 27.4rem;
    margin-left: 50%;
    transform: translate(-50%);
    .nav {
      display: flex;
      margin-top: 40px;
      padding-left: 60px;
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
        padding-left: 3px;
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
    // background-color: aqua;
    margin-top: 45px;
    margin-bottom: 20px;
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
  }
  .radio-group-wrapper{
      width: 14.6rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 80px;
      padding-top: 20px;
      .el-radio{
          padding-bottom: 20px;
      }
  }
  .btn-wrapper{
        height: 50px;
        margin-top: 35px;
        width: 10.2rem;
        margin: 0 auto;
        button{
            height: 100%;
            border: none;
            width: 100%;
            height: 100%;
            border-radius: 25px;
            background: #4859D8;
            color: #ffffff;
            font-size: 16px;
        }
        button:hover{
            background: #5D6FD5;
        }
    }
}
</style>
