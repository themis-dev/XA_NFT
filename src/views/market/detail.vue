<template>
    <div class="market-detail">
      <section class="detail-top">
        <img src="../../images/detail-img.png" alt="" class="work">
        <div class="work-msg">
          <div class="work-name">白洋淀风景年画系列·年年有鱼</div>
          <div class="work-num">
            <div class="item-number">
              <div class="item-number-name">限量</div>
              <div class="item-number-val">8000份</div>
            </div>
            <div class="price">
              ¥ 19.90
            </div>
          </div>
          <div class="buy-btn">立即购买</div>
        </div>
      </section>
      <div class="work-content container">
        <div class="work-story">
          作品故事
        </div>
        <div class="line"></div>
        <img src="../../images/img-left.png" alt="" class="img-left">
        <img src="../../images/img-right.png" alt="" class="img-right">
        <div class="work-msg-item" v-for="item in data" v-bind:key="item.title">
          <div class="work-msg-item-title">{{item.title}}</div>
          <div class="work-msg-item-val">{{item.content}}</div>
        </div>
        <div class="work-msg-author">
          <div class="work-msg-author-item">
            <span class="author-item1">创作者</span>
            <span class="author-item2">唐诗</span>
          </div>
          <div class="work-msg-author-item">
            <span class="author-item1">发行方</span>
            <span class="author-item2">湖南叶传媒有限公司</span>
          </div>
        </div>
        <div class="purchase-notes">
          <div class="purchase-notes-title">
            购买须知
          </div>
          <div class="purchase-notes-content">
            数字藏品为虚拟数字商品，而非实物，仅限实名认证为年满14周岁的中国大陆用户购买。数字藏品的版权由发行方或原创者拥有，除另行取得版权拥有者书面同意外，用户不得将数字藏品用于任何商业用途。本商品一经售出，不支持退换。本商品源文件不支持本地下载。请勿对数字藏品进行炒作、场外交易、欺诈，或以任何其他非法方式进行使用。
          </div>
        </div>
        <div class="work-msg-footer">
          <img src="../../images/detail-img2.png" alt="">
          <div class="work-msg-footer-title">雄安链提供支持</div>
        </div>
      </div>
    </div>
</template>

<script>
import { getMarketData } from '@/api/market.js'
  export default {
    name: 'collection',
    components: {
    },
    data() {
      return {
        data: [
          {
            title: '作品介绍',
            content: '雄安五周年纪念品，以白洋淀生态和未来科技创新为思维点，创作了10件代表雄安新区特色的数字艺术作品，分别由10位不同领域的数字艺术家创作而成。内容丰富，类型多样，书法、绘画、影视、数字手办、音乐以及动画等等'
          },
          {
            title: '作品细节',
            content: '数字藏品是使用蚂蚁链的区块链技术进行唯一标识的经数字化的特定作品、艺术品和商品，包括但不限于数字画作、图片、音乐、视频、3D模型等各种形式。数字藏品为虚拟数字商品，而非实物，一经售出，不支持退换。'
          },
          {
            title: '作者介绍',
            content: '每个数字藏品都映射着特定区块链上的唯一序列号，不可篡改、不可分割，也不能互相替代。每一个数字藏品都代表特定作品、艺术品和商品或其限量发售的单个数字复制品，记录着其不可篡改的链上权利。'
          },
          {
            title: '发行方',
            content: '雄安五周年纪念品，以白洋淀生态和未来科技创新为思维点，创作了10件代表雄安新区特色的数字艺术作品，分别由10位不同领域的数字艺术家创作而成。内容丰富，类型多样，书法、绘画、影视、数字手办、音乐以及动画等等'
          },
          {
            title: '收藏价值',
            content: '数字藏品是使用蚂蚁链的区块链技术进行唯一标识的经数字化的特定作品、艺术品和商品，包括但不限于数字画作、图片、音乐、视频、3D模型等各种形式。数字藏品为虚拟数字商品，而非实物，一经售出，不支持退换。每个数字藏品都映射着特定区块链上的唯一序列号，不可篡改、不可分割，也不能互相替代。每一个数字藏品都代表特定作品、艺术品和商品或其限量发售的单个数字复制品，记录着其不可篡改的链上权利。因此数字藏品与虚拟货币等同质化代币存在本质不同，有特定作品、艺术品和商品的实际价值做支撑，也不具备支付功能等任何货币属性。'
          },
          {
            title: '创作背景',
            content: '作为数字藏品的收藏家，你拥有每个数字藏品背后对应的特定作品、艺术品和商品的单个数字复制品，不仅可以观赏藏品、享受收藏的美好体验，还可以与好友分享收藏见解和快乐。'
          },
        ]

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
    },
    methods: {
      goDetail() {
        this.$router.push({path:'/mine/order-detail'});
      },
      getData() {
        getMarketData({pageNo: 1, pageSize: 100}).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.market-detail {
  margin-bottom: -4rem;
  background-color: #fff;
  .detail-top {
    background-color: #233370;
    background-image: url(../../images/market-banner.png);
    background-repeat: no-repeat;
    width: 100%;
    height: 670px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .work {
      width: 336px;
      height: 336px;
      margin-top: 76px;
    }
    .work-msg {
      background-image: url(../../images/detail-img1.png);
      background-repeat: no-repeat;
      width: 649px;
      height: 144px;
      margin-top: 34px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      position: relative;
      .work-name {
        font-size: 28px;
        font-family: MiSans;
        font-weight: 600;
        line-height: 37px;
        color: #FFFFFF;
      }
      .work-num {
        display: flex;
        align-items: center;
        justify-content: start;
        margin-top: 10px;
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
      .price {
        font-size: 30px;
        font-family: MiSans;
        font-weight: 600;
        line-height: 39px;
        color: #CFA980;
        letter-spacing: 1.3px;
        margin-left: 30px;
      }
      .buy-btn {
        width: 215px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(152deg, #EDD9BB 0%, #BE905D 100%);
        box-shadow: 0px 3px 6px rgba(200, 159, 113, 0.47);
        opacity: 1;
        border-radius: 26px;
        font-size: 20px;
        font-family: MiSans;
        font-weight: 600;
        color: #FFFFFF;
        text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.38);
        cursor: pointer;
        position: absolute;
        bottom: -20px;
      }
    }
  }
  .work-content {
    background-color: #fff;
    margin-top: 59px;
    padding: 0 40px;
    position: relative;
    .work-story {
      font-size: 22px;
      font-family: MiSans;
      font-weight: 600;
      line-height: 29px;
      color: #333333;
    }
    .line {
      width: 100%;
      height: 1px;
      background-color:#E5E5E5;
      margin-top: 17px;
      margin-bottom: 44px;
    }
    .img-left {
      width: 129px;
      height: 158px;
      position: absolute;
      left: -200px;
      top: 300px;
    }
    .img-right {
      width: 140px;
      height: 161px;
      position: absolute;
      right: -200px;
      top: 300px;
    }
    .work-msg-item {
      margin-left: 73px;
      margin-right: 66px;
      .work-msg-item-title {
        font-size: 18px;
        font-family: MiSans;
        font-weight: 600;
        line-height: 24px;
        color: #666666;
        margin-bottom: 15px;
      }
      .work-msg-item-val {
        font-size: 14px;
        font-family: MiSans;
        font-weight: 400;
        line-height: 19px;
        color: #848484;
        margin-bottom: 25px;
      }
    }
    .work-msg-author {
      width: 100%;
      height: 66px;
      background: rgba(244, 244, 255, 1);
      border-radius: 10px;
      margin-top: 44px;
      display: flex;
      justify-content: space-between;
      padding-left: 85px;
      padding-right: 228px;
      .work-msg-author-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .author-item1 {
          font-size: 18px;
          font-family: MiSans;
          font-weight: 400;
          line-height: 24px;
          color: #666666;
        }
        .author-item2 {
          font-size: 18px;
          font-family: MiSans;
          font-weight: 600;
          line-height: 24px;
          color: #666666;
          margin-left: 30px;
        }
      }
    }
    .purchase-notes {
      margin-top: 54px;
      text-align: center;
      .purchase-notes-title {
        font-size: 16px;
        font-family: MiSans;
        font-weight: 600;
        line-height: 22px;
        color: #777777;
      }
      .purchase-notes-content {
        font-size: 12px;
        font-family: MiSans;
        font-weight: 400;
        line-height: 18px;
        color: #B5B5B5;
        margin-top: 12px;
        padding: 0 260px;
        text-align: left;
      }
    }
    .work-msg-footer {
      margin-top: 31px;
      text-align: center;
      img {
        width: 27px;
        height: 41px;
      }
      .work-msg-footer-title {
        font-size: 16px;
        font-family: MiSans;
        font-weight: 400;
        line-height: 22px;
        color: #747474;
        margin-top: 6px;
      }
    }
  }
}
</style>
