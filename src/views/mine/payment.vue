<template>
    <div class="payment-container">
        <div class="order-detail">
            <div class="nav" @click="goback">
              <img src="../../images/back.png" alt="">
              <div class="nav-title">支付</div>
            </div>
            <div class="order-detail-content">
              <div class="order-msg">
                <div class="nft-msg">
                  <img :src="productImage" alt="">
                  <div class="nft-msg-right">
                    <div class="nft-msg-title">{{ setNameLength(productName, 8) }}</div>
                    <div class="nft-msg-num">{{ setNameLength(oid, 12) }}</div>
                    <div class="nft-msg-author">{{ creator }}</div>
                  </div>
                </div>
              </div>
              <el-radio-group v-model="radioValue" class="radio-group-wrapper">
                <el-radio :label="1">支付宝</el-radio>
                <el-radio :label="2" disabled>微信</el-radio>
              </el-radio-group>
              <div class="btn-wrapper">
                <button type="primary" @click="handlePaymentClick">去支付</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { goPayment, getOrderDetail } from '@/api/mine'
import { Message } from 'element-ui'
  export default {
    name: 'order',
    data() {
      return {
        active: 1,
        oid: this.$route.query.oid,
        pid: this.$route.query.pid,
        productImage: this.$route.query.productImage,
        productName: this.$route.query.productName,
        creator: this.$route.query.creator,
        radioValue: 1
      }
    },
    computed: {
      message() {
        return ''
      }
    },
    mounted() {
      // this.getOrderDetail()
    },
    methods: {
      // getOrderDetail() {
      //   getOrderDetail({pid: this.pid}).then(res => {
      //     console.log(res)
      //   })
      // },
      handlePaymentClick() {
          let reqObj = {
              oid: this.oid,
              whichPay: this.radioValue
          }
          goPayment(reqObj).then((res) => {
            console.log(res)
              let div = document.createElement('div')
              div.id = 'alipay'
              div.innerHTML = res
              document.body.appendChild(div)
              document.querySelector('#alipay').children[0].submit()
          }).catch(error => {
            Message({
              message: error.message,
              type: 'error'
            })
            console.log(error)
          })
      },
    clickItem(item) {
      this.active = item
    },
    goback() {
      this.$router.go(-1);
    },
    setNameLength(name, number) {
      return name.substring(0, number)
    }
  }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.payment-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 46px;
  .order-detail {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .nav {
        width: 24.4rem;
        display: flex;
        margin-top: 40px;
        margin-bottom: 20px;
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
          margin-left: 5px;
          color: #333333;
        }
      }
  }
  .order-detail-content {
    width: 24.4rem;
    .order-msg {
      .nft-msg {
        background: rgba(81, 81, 82, 1);
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        img {
          width: 9.8rem;
          height: 110px;
        }
        .nft-msg-right {
          padding-left: 18px;
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
        padding-left: 5rem;
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
}
@media (max-width: 500px) {
  .payment-container {
    width: 19.7rem;
    margin: 0 auto;
    .order-detail{
      .nav{
        width: 19.7rem;
      }
      .order-detail-content{
        width: 19.7rem;
      }
    }
  }
}
</style>
