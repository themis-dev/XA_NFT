<template>
    <div class="container content">
        <div class="collection">
            <div class="market">
              <div class="title">交易市场</div>
              <div class="collection-content">
                <div class="collection-content-item" v-for="item in marketData" v-bind:key='item.pid' @click="goDetail(item)">
                  <div class="time">
                    <img src="../../images/time.png" alt="">
                    <span>{{ setStatus(item.status) }} {{ item.openingTime }}</span>
                  </div>
                  <img :src="item.productImage" alt="" class="nft-img">
                  <div class="item-title">{{ item.name }}</div>
                  <div class="item-number">
                    <div class="item-number-name">限量</div>
                    <div class="item-number-val">{{ item.num }}份</div>
                  </div>
                  <div class="author-price">
                    <div class="author">
                      <!-- <img src="" alt=""> -->
                      <div>{{ item.creator }}</div>
                    </div>
                    <div class="price">
                      ¥ {{ item.price }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getMarketData } from '@/api/market.js'
import moment from 'moment'
  export default {
    name: 'collection',
    components: {
    },
    data() {
      return {
        marketData: []
      }
    },
    computed: {
      message() {
        return ''
      }
    },
    created() {
    },
    mounted() {
      this.getData()
      // console.log(moment().default())
    },
    methods: {
      goDetail(item) {
        this.$router.push({
          path:'/market-detail',
          query: {
            pid: item.pid
          }
        });
      },
      getData() {
        getMarketData({pageNo: 1, pageSize: 100}).then(res => {
          if(res.status == 1 && res.data) {
            this.marketData = res.data.data
          }
        })
      },
      setStatus(value) {
        switch (value) {
          case 0:
            return '售罄';
          case 1:
            return '销售中';
          case 9:
            return '未开售'
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
.collection {
    width: 100%;
    margin-left: 50%;
    transform: translate(-50%);
}
@media (min-width: 799.95px){
      .market {
    // width: 67.5rem;
    // height: 39.375rem;
    // background: rgba(255, 255, 255,1);
    border-radius: 6px 6px 0px 0px;
    margin-top: 25px;
    .title {
      font-size: 40px;
      font-family: MiSans Semibold;
      color: #333333;
      text-align: center;
      // padding-top: 60px;
    }
    .collection-content {
      display: flex;
      justify-content: start;
      margin-top: 54px;
      flex-wrap: wrap;
      .collection-content-item  {
        width: 17.5rem;
        height: 22.875rem;
        background: rgba(81, 81, 82, 1);
        opacity: 1;
        border-radius: 26px;
         margin-bottom: 20px;
         margin-left: 24px;
         position: relative;
         cursor: pointer;
         .time {
           background: rgba(47, 49, 51, 1);
           position: absolute;
          //  display: flex;
          //  align-content: center;
          //  justify-items: center;
           padding: 5px 12px;
           left: 1rem;
           top: 0.8rem;
           img {
             width: 13px;
             height: 13px;
           }
           span {
             font-size: 12px;
              font-family: MiSans;
              font-weight: 400;
              line-height: 16px;
              color: #FFFFFF;
           }
         }
         .nft-img {
           width: 280px;
           height: 261px;
           border-radius: 26px;
         }
        .item-title {
          font-size: 16px;
          font-family: MiSans;
          font-weight: 600;
          line-height: 22px;
          color: #FFFFFF;
          margin-left: 11px;
          margin-top: 13px;

        }
        .item-number {
          margin-left: 11px;
          margin-top: 4px;
          height: 18px;
          color: #515152;
          display: flex;
          align-items: center;
          .item-number-name {
            width: 29px;
            height: 18px;
            background: #EEE1C5;
            font-size: 12px;
            font-family: MiSans;
            font-weight: 400;
            line-height: 18px;
            color: #515152;
            text-align: center;
          }
          .item-number-val {
            width: 56px;
            height: 18px;
            background: #646464;
            font-size: 12px;
            font-family: MiSans;
            font-weight: 400;
            line-height: 18px;
            color: #F1E1BE;
            text-align: center;
          }
        }
        .author-price {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-right: 20px;
          margin-top: 6px;
           margin-left: 16px;
          .author {
            display: flex;
            align-items: center;
            justify-content: space-between;
            img {
              width: 17px;
              height: 17px;
              border-radius: 34px;
              margin-right: 4px;
            }
            font-size: 12px;
            font-family: MiSans;
            font-weight: 400;
            line-height: 16px;
            color: #D9D9D9;
          }
          .price {
            font-size: 18px;
            font-family: MiSans;
            font-weight: 600;
            line-height: 24px;
            color: #FFFFFF;
            letter-spacing: 1px;
          }
        }
        
      }
    }
}       
}

@media (max-width: 799.95px){
    .market {
    // width: 67.5rem;
    // height: 39.375rem;
    // background: rgba(255, 255, 255,1);
    border-radius: 6px 6px 0px 0px;
    // margin-top: 25px;
    .title {
      font-size: 40px;
      font-family: MiSans;
      font-weight: 800;
      color: #333333;
      text-align: center;
    }
    .collection-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // justify-content: start;
      margin-top: 24px;
      // flex-wrap: wrap;
      .collection-content-item  {
        width: 17.5rem;
        height: 22.875rem;
        background: rgba(81, 81, 82, 1);
        opacity: 1;
        border-radius: 26px;
         margin-bottom: 20px;
         position: relative;
         cursor: pointer;
         .time {
           background: rgba(47, 49, 51, 1);
           position: absolute;
          //  display: flex;
          //  align-content: center;
          //  justify-items: center;
           padding: 5px 12px;
           left: 1rem;
           top: 0.8rem;
           img {
             width: 13px;
             height: 13px;
           }
           span {
             font-size: 12px;
              font-family: MiSans;
              font-weight: 400;
              line-height: 16px;
              color: #FFFFFF;
           }
         }
         .nft-img {
           width: 280px;
           height: 261px;
           border-radius: 26px;
         }
        .item-title {
          font-size: 16px;
          font-family: MiSans;
          font-weight: 600;
          line-height: 22px;
          color: #FFFFFF;
          margin-left: 11px;
          margin-top: 13px;

        }
        .item-number {
          margin-left: 11px;
          margin-top: 4px;
          height: 18px;
          color: #515152;
          display: flex;
          align-items: center;
          .item-number-name {
            width: 29px;
            height: 18px;
            background: #EEE1C5;
            font-size: 12px;
            font-family: MiSans;
            font-weight: 400;
            line-height: 18px;
            color: #515152;
            text-align: center;
          }
          .item-number-val {
            width: 56px;
            height: 18px;
            background: #646464;
            font-size: 12px;
            font-family: MiSans;
            font-weight: 400;
            line-height: 18px;
            color: #F1E1BE;
            text-align: center;
          }
        }
        .author-price {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-right: 20px;
          margin-top: 6px;
           margin-left: 16px;
          .author {
            display: flex;
            align-items: center;
            justify-content: space-between;
            img {
              width: 17px;
              height: 17px;
              border-radius: 34px;
              margin-right: 4px;
            }
            font-size: 12px;
            font-family: MiSans;
            font-weight: 400;
            line-height: 16px;
            color: #D9D9D9;
          }
          .price {
            font-size: 18px;
            font-family: MiSans;
            font-weight: 600;
            line-height: 24px;
            color: #FFFFFF;
            letter-spacing: 1px;
          }
        }
        
      }
    }
}   
}
</style>
