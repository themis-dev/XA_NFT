<template>
    <div class="market-type-page content">
            <div class="market-type container">
              <div class="title">
                <div class="title-left" @click="goback">
                  <img src="../../images/back-black.png" alt="">
                  <span>雄安五周年数字藏品</span> 
                </div>
                <div class="title-name">{{marketData.productTypeName}}</div>
              </div>
              <div class="line"></div>
              <!-- <div class="share" @click="share" :data-clipboard-text="href">
                <img src="../../images/share.png" alt="">
                <span>分享</span>
              </div> -->
              <div class="introduction">
                <img src="../../images/value-left.png" alt="" class="left">
                <div class="introduction-text">
                  {{marketData.productTypeIntroduction}}
                </div>
                <img src="../../images/value-right.png" alt="" class="right">
              </div>
              <div class="market-type-content">
                <div class="collection-content-item" v-for="item in marketData.data" v-bind:key='item.pid' @click="goDetail(item)">
                  <div class="time">
                    <img src="../../images/time.png" alt="">
                    <span>{{ setStatus(item.status) }} {{ item.openingTime }}</span>
                  </div>
                  <img v-lazy="item.productImage" alt="" class="nft-img">
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
</template>

<script>
import Clipboard from 'clipboard'
import { getMarketData } from '@/api/market.js'
import moment from 'moment'
  export default {
    name: 'collection',
    components: {
    },
    data() {
      return {
        marketData: [],
        href: window.location.href
      }
    },
    computed: {
      message() {
        return ''
      }
    },
    beforeCreate() {
      document.querySelector('#footer-wrapper').style.background = "#1F1F26"
    },
    created() {
    },
    mounted() {
      // document.getElementsByClassName('content')[0].style.backgroundColor = "#151921"
      // document.getElementsByClassName('content')[1].style.backgroundColor = "#151921"
      this.getData()
      // console.log(moment().default())
    },
    methods: {
      goback() {
        this.$router.go(-1)
      },
      share() {
        console.log(window.location.href)
        var clipboard = new Clipboard('.share')
        clipboard.on('success', e => {
            // console.log('复制成功')
            this.$notify({
            title: '复制成功',
            dangerouslyUseHTMLString: true,
            message: ``,
            type: 'success',
            duration: 2 * 1000
        });
            //  释放内存
          clipboard.destroy()
        })
          clipboard.on('error', e =>{
          // 不支持复制
          console.log('该浏览器不支持复制')
          // 释放内存
          clipboard.destroy()
        })
      },
      goDetail(item) {
        this.$router.push({
          path:'/market-detail',
          query: {
            pid: item.pid
          }
        });
      },
      getData() {
        getMarketData({pageNo: 1, pageSize: 100, productType: this.$route.query.type,}).then(res => {
          if(res.status == 1 && res.data) {
            this.marketData = res.data
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
            return '即将发行'
        }
      }
    },
    beforeDestroy() {
        document.querySelector('#footer-wrapper').style.background = "#BCBCBC"
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
// .content {
//     display: flex;
//     flex-direction: column;
//     background-color: #151921;
// }
// .collection {
//     width: 100%;
//     margin-left: 50%;
//     transform: translate(-50%);
//     // background-color: #151921;
// }
.market-type-page {
    background-color: #151921;
    // padding-top: 49px;
}
@media (min-width: 799.95px){
  .market-type {
    padding-top: 49px;
    padding-bottom: 7rem;
    .title {
      display: flex;
      position: relative;
      justify-content: center;
      .title-left {
        cursor: pointer;
        display: flex;
        align-items: center;
        position: absolute;
        left: 0;
        top: 20px;
        img {
          width: 10px;
          height: 17px;
          margin-right: 15px;
        }
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
        color: #B4D0FF;
        
      }
      .title-name {
        font-size: 40px;
        font-family: MiSans Semibold;
        text-align: center;
        color: #FCF079;
        font-weight: 600;
      }
    }
    .line {
      width: 45px;
      height: 7px;
      background: rgba(255, 240, 121, 1);
      border-radius: 26px;
      margin: 0 auto;
      margin-top: 28px;
    }
    .share {
      display: none;
    }
    .introduction {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin-top: 33px;
      .left {
        width: 59px;
        position: absolute;
        left: -100px;
      }
      .introduction-text {
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        color: #FFFFFF;
        width: 80%;
        margin: 0 auto;
      }
      .right {
        width: 59px;  
        position: absolute;
        right: -100px;
      }
    }
    .market-type-content {
      display: flex;
      justify-content: start;
      margin-top: 98px;
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
           padding: 5px 12px;
           left: 1rem;
           top: 0.8rem;
           border-radius: 12px;
           img {
             width: 13px;
             height: 13px;
           }
           span {
             font-size: 12px;
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
         .nft-img[lazy=loading] {
           width: 280px;
           height: 261px;
           background: url('../../images/loading-bg.png') no-repeat;
           background-size: cover;
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
            font-family: MiSans Semibold;
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
    .market-type {
     padding-top: 59px;
     padding-bottom: 7rem;
    .title {
      display: flex;
      position: relative;
      justify-content: center;
      .title-left {
        cursor: pointer;
        display: flex;
        align-items: center;
        position: absolute;
        left: 0px;
        top: -30px;
        img {
          width: 10px;
          height: 17px;
          margin-right: 8px;
        }
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
        color: #B4D0FF;
        
      }
      .title-name {
        font-size: 34px;
        font-family: MiSans Semibold;
        text-align: center;
        color: #FCF079;
        font-weight: 600;
      }
    }
    .line {
      width: 45px;
      height: 7px;
      background: rgba(255, 240, 121, 1);
      border-radius: 26px;
      margin: 0 auto;
      margin-top: 28px;
      display: none;
    }
    .share {
      width: 84px;
      height: 31px;
      background: rgba(250, 222, 69, 1);
      border-radius: 9px;
      color: #3B3B3B;
      font-size: 14px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      margin-top: 28px;
      cursor: pointer;
      img {
        width: 15px;
        margin-right: 5px;
      }
    }
    .introduction {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin-top: 33px;
      .left {
        width: 59px;
        position: absolute;
        left: -100px;
        display: none;
      }
      .introduction-text {
        font-size: 12px;
        font-weight: 400;
        color: #FFFFFF;
        width: 90%;
        margin: 0 auto;
      }
      .right {
        width: 59px;  
        position: absolute;
        right: -100px;
         display: none;
      }
    }
    .market-type-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 44px;
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
           padding: 5px 12px;
           left: 1rem;
           top: 0.8rem;
           border-radius: 12px;
           img {
             width: 13px;
             height: 13px;
           }
           span {
             font-size: 10px;
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
         .nft-img[lazy=loading] {
           width: 280px;
           height: 261px;
           background: url('../../images/loading-bg.png') no-repeat;
           background-size: cover;
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
            font-family: MiSans Semibold;
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
