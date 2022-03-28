<template>
    <div class="container content">
        <div class="collection">
            <MineTab />
            <div class="mine-collection">
              <div class="title">藏品列表</div>
              <div class="collection-content">
                <div class="collection-content-item" v-for="item of orderList" :key="item.pid" @click="handleClick(item)">
                  <img :src="item.productImage" alt="">
                  <div class="item-title">{{ item.productName }}</div>
                  <div class="item-number">{{ item.oid }}</div>
                  <div class="author">{{ item.creator }}</div>
                </div>
                <!-- <div class="collection-content-item">
                  <img src="../../images/nft-img.png" alt="">
                  <div class="item-title">《雄安赋》</div>
                  <div class="item-number">AC9163#00074/10000</div>
                  <div class="author">李二狗</div>
                </div>
                <div class="collection-content-item">
                  <img src="../../images/nft-img.png" alt="">
                  <div class="item-title">《雄安赋》</div>
                  <div class="item-number">AC9163#00074/10000</div>
                  <div class="author">王大力</div>
                </div> -->
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getCollection } from '@/api/mine'
  export default {
    name: 'collection',
    components: {
      MineTab: () => import('./MineTab.vue')
    },
    data() {
      return {
       orderList: []
      }
    },
    computed: {
      message() {
        return ''
      }
    },
    mounted() {
      this.getCollectionList()
    },
    methods: {
      getCollectionList() {
        getCollection().then(res => {
          if(res.status == 1 && res.data) {
            this.orderList = res.data
          }
        })
      },
      handleClick(item) {
        this.$router.push({
          path: '/mine/collectionDetail',
          query: {
            pid: item.pid
          }
        })
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
.collection {
    width: 67.5rem;
    margin-left: 50%;
    transform: translate(-50%);
.mine-collection {
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
      // font-family: MiSans Semibold;
    }
    .collection-content {
      display: flex;
      justify-content: space-around;
      margin-top: 54px;
      .collection-content-item  {
        width: 17.5rem;
        height: 18.875rem;
        background: rgba(81, 81, 82, 1);
        opacity: 1;
        border-radius: 20px;
        img {
          width: 17.5rem;
          height: 190px;
          border-radius: 20px;
        }
        .item-title {
          font-size: 16px;
          font-family: MiSans Semibold;
          font-weight: 600;
          line-height: 22px;
          color: #FFFFFF;
          margin-left: 11px;
          margin-top: 13px;

        }
        .item-number {
          width: 15rem;
          height: 2rem;
          background-image: url(../../images/collection-arrow.png);
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center center;
          margin-left: 11px;
          margin-top: 4px;
          font-size: 12px;
          font-family: MiSans Semibold;
          font-weight: 400;
          line-height: 16px;
          color: #515152;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 25px;
        }
        .author {
          font-size: 12px;
          font-family: MiSans Semibold;
          font-weight: 400;
          line-height: 16px;
          color: #D9D9D9;
          margin-left: 16px;
          margin-top: 6px;
        }
      }
      .collection-content-item:hover{
        cursor: pointer;
      }
    }
}
}

@media (max-width: 500px) {
  .collection {
    width: 19.7rem;
    .mine-tab {
      display: flex!important;
      flex-direction: row!important;
      justify-content: space-around!important;
      
    }
    .mine-tab .item{
        margin-left: 0!important;
      }
    .mine-collection {
    width: 19.7rem;
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
      font-family: MiSans Semibold;
    }
    .collection-content {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      margin-top: 54px;
      .collection-content-item  {
        width: 17.5rem;
        height: 18.875rem;
        background: rgba(81, 81, 82, 1);
        opacity: 1;
        border-radius: 20px;
        margin-top: 20px;
        img {
          width: 17.5rem;
          height: 190px;
          border-radius: 20px;
        }
        .item-title {
          font-size: 16px;
          font-family: MiSans Semibold;
          font-weight: 600;
          line-height: 22px;
          color: #FFFFFF;
          margin-left: 11px;
          margin-top: 13px;

        }
        .item-number {
          width: 15rem;
          height: 2rem;
          background-image: url(../../images/collection-arrow.png);
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center center;
          margin-left: 11px;
          margin-top: 4px;
          font-size: 12px;
          font-family: MiSans Semibold;
          font-weight: 400;
          line-height: 16px;
          color: #515152;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 25px;
        }
        .author {
          font-size: 12px;
          font-family: MiSans Semibold;
          font-weight: 400;
          line-height: 16px;
          color: #D9D9D9;
          margin-left: 16px;
          margin-top: 6px;
        }
      }
      .collection-content-item:hover{
        cursor: pointer;
      }
    }
  }
  }
}
</style>
