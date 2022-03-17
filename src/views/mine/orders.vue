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
                    <img src="../../images/nft-img.png" alt="">
                    <div>
                      <div class="item-title">{{ item.productName }}</div>
                      <div class="item-author">{{ item.creator }}</div>
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
        active: 10,
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
            oid: item.oid
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
    padding: 40px 50px;
    position: relative;
    .tab {
      display: flex;
      .tab-item {
        font-size: 18px;
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
        width: 446px;
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
            font-family: MiSans;
            font-weight: 400;
            line-height: 16px;
            color: #999999;
            margin-top: 3px;
          }
          .item-price {
            font-size: 12px;
            font-family: MiSans;
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
</style>
