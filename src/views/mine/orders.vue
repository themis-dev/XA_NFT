<template>
    <div class="container content">
        <div class="order">
            <MineTab />
            <div class="mine-order">
              <div class="tab">
                <div :class="active === 10 ? 'tab-item active': 'tab-item'" @click="clickItem(10)">全部</div>
                <div :class="active === 9 ? 'tab-item active': 'tab-item'" @click="clickItem(9)">待付款</div>
                <div :class="active === 1 ? 'tab-item active': 'tab-item'" @click="clickItem(1)">已付款</div>
                <div :class="active === 0 ? 'tab-item active': 'tab-item'" @click="clickItem(0)">已取消</div>
              </div>
              <div class="line"></div>
              <div class="order-content">
                <div class="order-item" @click="goDetail(item)" v-for="(item, index) in data" v-bind:key='index'>
                  <div class="item-left">
                    <img :src="item.productImage" alt="">
                    <div>
                      <div class="item-title">{{ setMarkName(item.productName) }}</div>
                      <div class="item-author">{{ item.creator }}</div>
                      <div class="item-order">订单号：{{ item.oid }}</div>
                      <div class="item-price">{{ item.price }} 元</div>
                    </div>
                  </div>
                  <div class="status">{{ setOrderStatus(item.orderStatus) }}</div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getOrderList } from '@/api/mine'

  export default {
    name: 'order',
    components: {
      MineTab: () => import('./MineTab.vue')
    },
    data() {
      return {
        active: this.$route.query.active ? this.$route.query.active : 10,
        data: []
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
    clickItem(item) {
      this.active = item
      getOrderList({index: this.active}).then(res => {
          if(res.status == 1 && res.data) {
            this.data = res.data
          }
        })
    },
    getData() {
      getOrderList({index: 10}).then(res => {
        if(res.status == 1 && res.data) {
          this.data = res.data
        }
      })
    },
    goDetail(item) {
      if(item.orderStatus == 9) {
        this.$router.push({
          path: '/mine/payment',
          query: {
            oid: item.oid,
            pid: item.pid,
            productImage: item.productImage,
            productName: item.productName,
            creator: item.creator
          }
        })
      } else {
        this.$router.push({
          path:'/mine/order-detail',
          query: {
            pid: item.pid
          }
          
        });
      }
    },
    setOrderStatus(status) {
      switch (status) {
        case 0:
          return '已取消';
        case 1:
          return "已付款";
        case 9:
          return '待付款';
      }
    },
    setMarkName(name) {
        return name.substring(0, 8)
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
    margin-bottom: 7rem;
}
.mine-order {
    width: 67.5rem;
    height: 39.375rem;
    background: rgba(255, 255, 255,1);
    border-radius: 6px 6px 0px 0px;
    margin-top: 25px;
    padding: 40px 50px;
    position: relative;
    .tab {
      display: flex;
      .tab-item {
        font-size: 18px;
        font-family: MiSans Semibold;
        // font-weight: 600;
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
    .line {
        width: 100%;
        height: 1px;
        background-color:  #EFEFEF;
        margin-top: 17px;
        margin-bottom: 27px;
      }
    .order-content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .order-item {
        width: 466px;
        height: 103px;
        background: rgba(248, 250, 255, 1);
        border-radius: 6px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 21px 23px;
        cursor: pointer;
        .item-left {
          display: flex;
          align-items: center;
          img {
            width: 61px;
            height: 61px;
            border-radius: 8px;
            margin-right: 16px;
          }
          .item-title {
            font-size: 18px;
            font-weight: 600;
            line-height: 24px;
            color: #333333;
          }
          .item-author {
            font-size: 12px;
            font-family: MiSans Semibold;
            font-weight: 400;
            line-height: 16px;
            color: #999999;
            margin-top: 3px;
          }
          .item-order {
            font-size: 12px;
            font-family: MiSans Semibold;
            font-weight: 400;
            line-height: 16px;
            color: #999999;
            margin-top: 3px;
          }
          .item-price {
            font-size: 12px;
            font-family: MiSans Semibold;
            font-weight: bold;
            line-height: 16px;
            color: #333333;
            margin-top: 3px;
          }
        }
        .status {
          font-size: 14px;
          font-weight: 500;
          line-height: 19px;
          color: #333333;
        }
      }
    }  

}
@media (max-width: 500px) {
  .container {
    background: #FAFAFA;
  }
  .content{
    padding-top: 46px;
    margin-top: 0px!important;
    padding-bottom: 0px!important;
  }
  .order {
    width: 19.7rem!important;
    .mine-tab {
      display: flex!important;
      flex-direction: row!important;
      justify-content: space-around!important;
      
    }
    .mine-tab .item{
        margin-left: 0!important;
      }
  }
  .mine-order {
    width: 19.7rem;
    height: 39.375rem;
    background: rgba(255, 255, 255,1);
    border-radius: 6px 6px 0px 0px;
    margin-top: 25px;
    position: relative;
    padding: 22px 7px 0px 7px!important;
    .tab {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .tab-item {
        font-size: 18px;
        font-family: MiSans Semibold;
        font-weight: 600;
        line-height: 29px;
        color: #999999;
        margin-left: 0px!important;
        cursor: pointer;
        &.active {
          color: #333333;
        }
        &:first-child {
          margin-left: 0px;
        }
      }
    }
    .line {
        width: 100%;
        height: 1px;
        background-color:  #EFEFEF;
        margin-top: 17px;
        margin-bottom: 27px;
      }
    .order-content {
      // width: 18.5rem;
      display: flex;
      flex-wrap: wrap;
      // margin: 0 auto;
      .order-item {
        // width: 19.7rem!important;
        height: 100px;
        background: rgba(248, 250, 255, 1);
        border-radius: 6px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // padding: 21px 23px;
        cursor: pointer;
        .item-left {
          display: flex;
          align-items: center;
          img {
            width: 61px;
            height: 61px;
            border-radius: 8px;
            // margin-right: 16px;
          }
          .item-title {
            font-size: 18px;
            font-weight: 600;
            line-height: 24px;
            color: #333333;
          }
          .item-author {
            font-size: 12px;
            font-family: MiSans Semibold;
            font-weight: 400;
            line-height: 16px;
            color: #999999;
            margin-top: 3px;
          }
          .item-order {
            font-size: 12px;
            font-family: MiSans Semibold;
            font-weight: 400;
            line-height: 16px;
            color: #999999;
            margin-top: 3px;
            width: 110px;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
          }
          .item-price {
            font-size: 12px;
            font-family: MiSans Semibold;
            font-weight: bold;
            line-height: 16px;
            color: #333333;
            margin-top: 3px;
          }
        }
        .status {
          font-size: 14px;
          font-weight: 500;
          line-height: 19px;
          color: #333333;
        }
      }
    }  

}
}
</style>
