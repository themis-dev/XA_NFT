<template>
    <div class="market-detail">
      <div class="share-dialog"  ref="screen" >
              <!-- <div class="share-dialog-author">
                <div class="share-dialog-author-title">收藏者</div>
                <div class="share-dialog-author-name">{{ detailObj.userName }}</div>
              </div>
              <div class="share-dialog-collection-num share-dialog-author">
                <div class="share-dialog-collection-num-title">收藏编号</div>
                <div class="share-dialog-collection-num-val">{{ setNumber(detailObj.oid)}}</div>
              </div>
              <div class="share-dialog-collection-num-time">生成时间 {{nowTime}}</div> -->
              <div class="share-top">
                <div>
                  <div class="share-top-title1">雄安五周年数字纪念品 </div>
                  <div class="share-top-title2">{{detailData.openingTime}}正式发行，欢迎领取！</div>
                </div>
              </div>
              <div class="share-dialog-title">{{ detailData.productName }}</div>
               <img :src="detailData.productImage"  alt="" class="art">
               <div class="share-dialog-author" v-if="detailData.creatorIntroduction !== ' '">
                <div class="share-dialog-author-title">创作者</div>
                <div class="share-dialog-author-name">{{detailData.creatorIntroduction }}</div>
              </div>
               <div class="dash"></div>
               <div class="share-dialog-qrcode">
                <div class="qrcode-left">
                  <img src="../../images/logo.png" alt="">
                  <div>
                    <div class="share-dialog-qrcode-title1">幻安</div>
                    <div class="share-dialog-qrcode-title2">雄安数字纪念品</div>
                    <div class="share-dialog-qrcode-title3">长按二维码或微信扫一扫识别</div>
                  </div>
                </div>
                <div id="qrcode" ref="qrcode" ></div>
              </div>
              <div class="dash1"></div>
              <div class="footer-title">雄安链提供支持</div>
            </div>
      <section class="detail-top">
        <div class="img-work">
          <img v-lazy="detailData.productImage" alt="" class="work">
        </div>
        <div class="share" @click="openShare">
          <img src="../../images/share-w.png" alt="">
          分享
        </div>
        <div class="work-msg">
          <div class="work-name">{{ detailData.name }}</div>
          <div class="work-num">
            <div>
              <div class="item-number">
                <div class="item-number-name">限量</div>
                <div class="item-number-val">{{ detailData.num }}份</div>
              </div>
              <div class="item-number">
                <div class="item-number-name">剩余</div>
                <div class="item-number-val">{{ detailData.remainNum }}份</div>
              </div>
            </div>
            <div class="price">
              {{ detailData.price ? '¥' + detailData.price : '' }} 
            </div>
          </div>
          <div class="buy-btn" @click="handleClick">{{ detailData.price == 0 ? '立即领取' : '立即购买' }}</div>
        </div>
      </section>
      <div class="work-content container">
        <el-dialog
            title=""
            :visible.sync="shareDialogVisible"
            :show-close='false'
            >
            <div class="share-dialog-content"  >
              <img :src="imageurl" alt="" style="width: 100%">
              <div class="footer-title">长按上方图片保存或转发给朋友</div>
            </div>
          </el-dialog>
       
        <div class="work-story">
          作品故事
        </div>
        <div class="line"></div>
        <img src="../../images/img-left.png" alt="" class="img-left">
        <img src="../../images/img-right.png" alt="" class="img-right">
        <!-- <div class="work-msg-item" v-for="item in data" v-bind:key="item.title">
          <div class="work-msg-item-title">{{item.title}}</div>
          <div class="work-msg-item-val">{{item.content}}</div>
        </div> -->
        <div class="work-msg-item" v-show="detailData.productIntroduction !== ' '">
          <div class="work-msg-item-title">作品介绍</div>
          <div class="work-msg-item-val">{{detailData.productIntroduction}}</div>
        </div>
        <div class="work-msg-item" v-show="detailData.productDetail !== ' '">
          <div class="work-msg-item-title">作品细节</div>
          <div class="work-msg-item-val">{{detailData.productDetail}}</div>
        </div>
        <div class="work-msg-item" v-show="detailData.creatorIntroduction !== ' '">
          <div class="work-msg-item-title">作者介绍</div>
          <div class="work-msg-item-val">{{detailData.creatorIntroduction}}</div>
        </div>
        <div class="work-msg-item" v-show="detailData.publisher !== ' '">
          <div class="work-msg-item-title">发行方</div>
          <div class="work-msg-item-val">{{detailData.publisherIntroduction}}</div>
        </div>
        <div class="work-msg-item" v-show="detailData.numismaticValue !== ' '">
          <div class="work-msg-item-title">收藏价值</div>
          <div class="work-msg-item-val">{{detailData.numismaticValue}}</div>
        </div>
        <div class="work-msg-item" v-show="detailData.creationBackground !== ' '">
          <div class="work-msg-item-title">创作背景</div>
          <div class="work-msg-item-val">{{detailData.creationBackground}}</div>
        </div>
        <div class="work-msg-author">
          <div class="work-msg-author-item" v-show="detailData.creationBackground !== ' '">
            <span class="author-item1">创作者</span>
            <span class="author-item2">{{ detailData.creator }}</span>
          </div>
          <div class="work-msg-author-item">
            <span class="author-item1">发行方</span>
            <span class="author-item2">{{ detailData.publisher }}</span>
          </div>
        </div>
        <div class="purchase-notes">
          <div class="purchase-notes-title">
            用户须知
          </div>
          <div class="purchase-notes-content">
            数字纪念品为虚拟数字商品，而非实物，仅限实名认证为年满14周岁的中国大陆用户领取。数字纪念品的版权由发行方或原创者拥有，除另行取得版权拥有者书面同意外，用户不得将数字纪念品用于任何商业用途。本商品源文件不支持本地下载。请勿对数字纪念品进行炒作、场外交易、欺诈，或以任何其他非法方式进行使用。
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
 import QRCode from 'qrcodejs2'
 import html2canvas from 'html2canvas'
 import moment from 'moment'
import { getMarketDetail, marketPayment } from '@/api/market.js'
  export default {
    name: 'collection',
    components: {
    },
    data() {
      return {
        pid: this.$route.query.pid,
        data: [
          {
            title: '作品介绍',
            content: '雄安五周年纪念品，以白洋淀生态和未来科技创新为思维点，创作了10件代表雄安新区特色的数字艺术作品，分别由10位不同领域的数字艺术家创作而成。内容丰富，类型多样，书法、绘画、影视、数字手办、音乐以及动画等等'
          },
          {
            title: '作品细节',
            content: '数字纪念品是使用蚂蚁链的区块链技术进行唯一标识的经数字化的特定作品、艺术品和商品，包括但不限于数字画作、图片、音乐、视频、3D模型等各种形式。数字纪念品为虚拟数字商品，而非实物，一经售出，不支持退换。'
          },
          {
            title: '作者介绍',
            content: '每个数字纪念品都映射着特定区块链上的唯一序列号，不可篡改、不可分割，也不能互相替代。每一个数字纪念品都代表特定作品、艺术品和商品或其限量发售的单个数字复制品，记录着其不可篡改的链上权利。'
          },
          {
            title: '发行方',
            content: '雄安五周年纪念品，以白洋淀生态和未来科技创新为思维点，创作了10件代表雄安新区特色的数字艺术作品，分别由10位不同领域的数字艺术家创作而成。内容丰富，类型多样，书法、绘画、影视、数字手办、音乐以及动画等等'
          },
          {
            title: '收藏价值',
            content: '数字纪念品是使用蚂蚁链的区块链技术进行唯一标识的经数字化的特定作品、艺术品和商品，包括但不限于数字画作、图片、音乐、视频、3D模型等各种形式。数字纪念品为虚拟数字商品，而非实物，一经售出，不支持退换。每个数字纪念品都映射着特定区块链上的唯一序列号，不可篡改、不可分割，也不能互相替代。每一个数字纪念品都代表特定作品、艺术品和商品或其限量发售的单个数字复制品，记录着其不可篡改的链上权利。因此数字纪念品与虚拟货币等同质化代币存在本质不同，有特定作品、艺术品和商品的实际价值做支撑，也不具备支付功能等任何货币属性。'
          },
          {
            title: '创作背景',
            content: '作为数字纪念品的收藏家，你拥有每个数字纪念品背后对应的特定作品、艺术品和商品的单个数字复制品，不仅可以观赏藏品、享受收藏的美好体验，还可以与好友分享收藏见解和快乐。'
          },
        ],
        detailData: {},
        shareDialogVisible: false,
        imageurl: ''

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
     
    },
    methods: {
      // 生成二维码
    crateQrcode() {
      this.qr = new QRCode('qrcode', {
        width: 72,
        height: 72, // 高度
        text: window.location.href, // 二维码内容
        // render: 'canvas', // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: '#f0f',
        // foreground: '#ff0'
      })
    },
    openShare() {
      setTimeout(() => {
        this.shareDialogVisible = true
      }, 1000)
      
    },
      //截屏
        handleOk() {
            html2canvas(this.$refs.screen, {
                useCORS: true,
                allowTaint:false,
            }).then((canvas) => {
                if (navigator.msSaveBlob) {
                    // IE10+
                    let blob = canvas.msToBlob()
                    return navigator.msSaveBlob(blob, name)
                } else {
                    let imageurl = canvas.toDataURL('image/png')
                    //这里需要自己选择命名规则
                    let imagename = 'img-share1'
                    // this.fileDownload(imageurl, imagename)
                    console.log(imageurl)
                    this.imageurl = imageurl
                }
            })
        },
        //下载截屏图片
        fileDownload(downloadUrl, downloadName) {
            let aLink = document.createElement('a')
            aLink.style.display = 'none'
            aLink.href = downloadUrl
            aLink.download = `${downloadName}.jpg`
            // 触发点击-然后移除
            document.body.appendChild(aLink)
            aLink.click()
            document.body.removeChild(aLink)
        },
      goDetail() {
        this.$router.push({path:'/mine/order-detail'});
      },
      getData() {
        getMarketDetail({pid: this.pid}).then(res => {
          if(res.status == 1 && res.data) {
            this.detailData = res.data
          } 
          this.nowTime = moment.parseZone(new Date().getTime()).local().format('YYYY-MM-DD HH:mm:ss')
          if (!this.qr) {
              this.$nextTick(() => {
                this.crateQrcode()
              })
            }
           this.$nextTick(() => {
                this.handleOk()
            })
        }).catch(error => {
          console.log(error)
        })
      },
      handleClick() {
        if(this.detailData.status == 0) {
          this.$message({
            message: '当前商品已售罄',
            type: 'warning'
          })
          return
        } else if(this.detailData.status == 9){
          this.$message({
            message: '当前商品未开售',
            type: 'warning'
          })
          return
        }
        marketPayment(this.pid).then(res => {
          console.log(res)
          if(res.status == 1) {
            this.$message({
              message: res.message,
              type: 'success'
            })
            this.$router.push({
              path: '/mine/collection',
              query: {
                active: 9
              }
            })
          } else if(res.status == -1) {
            this.$message({
              message: res.message,
              type: 'warning'
            })
          }
        }).catch(error => {
          console.log(error)
          if(error.response.data.status == -9) {
            this.$message({
              message: error.response.data.message,
              type: 'error'
            })
            this.$router.push({
              path: '/user/login'
            })
          }
        })
      },
      setMarkName(name) {
        if(name) {
          return name.substring(0, 8)
        } else {
          name
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 @media (min-width: 500px) {
.market-detail {
  // margin-bottom: -4rem;
  margin-bottom: 7rem;
  background-color: #fff;
    .share-dialog-content {
  .footer-title {
      font-size: 14px;
      font-family: MiSans Semibold;
      font-weight: 500;
      line-height: 22px;
      color: rgb(77, 63, 235);
      margin-left: 14px;
      margin-top: 10px;
      padding-bottom: 0px;
      text-align: center;
    }
}

.share-dialog {
  display: none;
  position: absolute;
  z-index: -200;
  // width: 100%;
  padding: 30px 30px 30px 30px !important;
  // background-color: beige;
  @media (max-width: 500px) { 
      padding: 20px 30px 20px 30px !important;
  }
  .share-top {
    width: 100%;
    height: 106px;
    background: url('../../images/share-bg.png') no-repeat;
    background-size: 100% 100%;
    background-color: #151921;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .share-top-title1 {
      font-size: 26px;
      font-weight: 600;
      line-height: 34px;
      color: #FADE45;
    }
    .share-top-title2 {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      color: #FFFFFF;
      margin-top: 8px;
    }
  }
  .share-dialog-title {
    font-size: 28px;
    font-family: MiSans Semibold;
    font-weight: 600;
    color: #333333;
    margin-top: 20px;
    @media (max-width: 500px) { 
      font-size: 22px;
    }
  }
  .share-dialog-author {
    display: flex;
    margin-top: 16px;
    margin-left: 10px;
    .share-dialog-author-title {
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      color: #999999;
    }
    .share-dialog-author-name {
      font-size: 14px;
      font-family: MiSans Semibold;
      font-weight: 500;
      line-height: 19px;
      color: #333333;
      margin-left: 22px;
    }
  }
   .art {
     width: 100%;
      border-radius: 8px;
      margin: 0 auto;
      margin-top: 30px;
      display: flex;
      justify-content: center;
      @media (max-width: 500px) { 
      width: 90%;
     }
    }
    .share-dialog-collectioner {
      .share-dialog-collectioner-title {
        font-size: 14px;
        font-weight: 400;
        color: #999999;
        margin-top: 23px;
      }
      .share-dialog-collectioner-name {
        font-size: 20px;
        font-family: MiSans Semibold;
        font-weight: 500;
        line-height: 27px;
        color: #333333;
         margin-top: 8px;
      }
    }
  .share-dialog-collection-num {
    display: flex;
    margin-top: 8px;
    align-items: center;
    .share-dialog-collection-num-title {
      font-size: 14px;
      font-family: MiSans Semibold;
      font-weight: 400;
      line-height: 19px;
      color: #999999;
    }
    .share-dialog-collection-num-val {
          width: 12rem;
          height: 2rem;
          background-image: url(../../images/collection-arrow.png);
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center center;
          font-size: 12px;
          font-family: MiSans Semibold;
          font-weight: 400;
          color: #515152;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 22px;
    }
  }
  .share-dialog-collection-num-time {
      font-size: 13px;
      font-family: MiSans Semibold;
      font-weight: 400;
      line-height: 19px;
      color: #999999;
       margin-top: 1px;
    }
    .dash {
      width: 100%;
      // height: 1px;
      border: 1px dashed #E5E5E5;
      margin-top: 30px;
    }
    .dash1 {
      width: 100%;
      border: 1px dashed #E5E5E5;
      margin-top: 10px;
    }

  .footer-title {
      font-size: 16px;
      font-family: MiSans Semibold;
      font-weight: 400;
      line-height: 22px;
      color: #747474;
      margin-left: 14px;
      margin-top: 10px;
      text-align: center;
    }
  .share-dialog-qrcode {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 20px;
    .qrcode-left {
      display: flex;
      // align-items: center;
      img {
        width: 27px;
        height: 41px;
        margin-right: 6px;
      }
    }
    .share-dialog-qrcode-title1 {
      font-size: 24px;
      font-family: MiSans;
      font-weight: 500;
      line-height: 22px;
      color: #333;
    }
    .share-dialog-qrcode-title2 {
      font-size: 9px;
      font-weight: 400;
      line-height: 16px;
      color: #999999;
      margin-top: 2px;
    }
    .share-dialog-qrcode-title3 {
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      color: #4073C4;
    }
    #qrcode {

    }
  }
  
}
  .detail-top {
    background-color: #233370;
    background-image: url(../../images/market-banner.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 692px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .share {
      display: flex;
      flex-direction: column;
      display: none;
      img {
        width: 25px;
        height: 24px;
        margin-top: 10px;
        margin-bottom: 6px;
      }
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      color: #f1f1f1;

    }
    .work {
      // width: 336px;
      height: 336px;
      margin-top: 76px;
      border-radius: 8px;
    }
    .work[lazy=loading] {
      width: 336px;
      height: 336px;
      background: url('../../images/loading-bg.png') no-repeat;
      background-size: 100%;
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
        font-family: MiSans Semibold;
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
          padding-left: 11px;
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
            font-family: MiSans Semibold;
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
            font-family: MiSans Semibold;
            font-weight: 400;
            line-height: 18px;
            color: #F1E1BE;
            text-align: center;
          }
      }
      .price {
        font-size: 30px;
        font-family: MiSans Semibold;
        font-weight: 600;
        line-height: 39px;
        color: #CFA980;
        letter-spacing: 1.3px;
        padding-left: 30px;
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
        font-family: MiSans Semibold;
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
      font-family: MiSans Semibold;
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
      padding-left: 73px;
      padding-right: 66px;
      .work-msg-item-title {
        font-size: 18px;
        font-family: MiSans Semibold Semibold;
        font-weight: 600;
        line-height: 24px;
        color: #666666;
        margin-bottom: 15px;
      }
      .work-msg-item-val {
        font-size: 14px;
        font-family: MiSans Semibold;
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
          font-family: MiSans Semibold;
          font-weight: 400;
          line-height: 24px;
          color: #666666;
        }
        .author-item2 {
          font-size: 18px;
          font-family: MiSans Semibold Semibold;
          font-weight: 600;
          line-height: 24px;
          color: #666666;
          padding-left: 30px;
        }
      }
    }
    .purchase-notes {
      margin-top: 54px;
      text-align: center;
      .purchase-notes-title {
        font-size: 16px;
        font-family: MiSans Semibold Semibold;
        font-weight: 600;
        line-height: 22px;
        color: #777777;
      }
      .purchase-notes-content {
        font-size: 12px;
        font-family: MiSans Semibold;
        font-weight: 400;
        line-height: 18px;
        color: #B5B5B5;
        margin-top: 12px;
        // padding: 0 260px;
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
        font-family: MiSans Semibold;
        font-weight: 400;
        line-height: 22px;
        color: #747474;
        margin-top: 6px;
      }
    }
  }
}
}
@media (max-width: 500px) {
  .container{
    padding: 0;
  }
  .share-dialog-content {
  .footer-title {
      font-size: 14px;
      font-family: MiSans Semibold;
      font-weight: 500;
      line-height: 22px;
      color: rgb(77, 63, 235);
      margin-left: 14px;
      margin-top: 10px;
      padding-bottom: 0px;
      text-align: center;
    }
}

.share-dialog {
  position: absolute;
  z-index: -200;
  padding: 30px 30px 30px 30px !important;
  @media (max-width: 500px) { 
      padding: 20px 30px 20px 30px !important;
  }
  .share-top {
    width: 100%;
    height: 106px;
    background: url('../../images/share-bg.png') no-repeat;
    background-size: 100% 100%;
    background-color: #151921;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .share-top-title1 {
      font-size: 26px;
      font-weight: 600;
      line-height: 34px;
      color: #FADE45;
    }
    .share-top-title2 {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      color: #FFFFFF;
      margin-top: 8px;
    }
  }
  .share-dialog-title {
    font-size: 28px;
    font-family: MiSans Semibold;
    font-weight: 600;
    color: #333333;
    margin-top: 20px;
    @media (max-width: 500px) { 
      font-size: 22px;
    }
  }
  .share-dialog-author {
    display: flex;
    margin-top: 16px;
    margin-left: 10px;
    .share-dialog-author-title {
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      color: #999999;
    }
    .share-dialog-author-name {
      font-size: 14px;
      font-family: MiSans Semibold;
      font-weight: 500;
      line-height: 19px;
      color: #333333;
      margin-left: 22px;
    }
  }
   .art {
     width: 100%;
      border-radius: 8px;
      margin: 0 auto;
      margin-top: 30px;
      display: flex;
      justify-content: center;
      @media (max-width: 500px) { 
      width: 90%;
     }
    }
    .share-dialog-collectioner {
      .share-dialog-collectioner-title {
        font-size: 14px;
        font-weight: 400;
        color: #999999;
        margin-top: 23px;
      }
      .share-dialog-collectioner-name {
        font-size: 20px;
        font-family: MiSans Semibold;
        font-weight: 500;
        line-height: 27px;
        color: #333333;
         margin-top: 8px;
      }
    }
  .share-dialog-collection-num {
    display: flex;
    margin-top: 8px;
    align-items: center;
    .share-dialog-collection-num-title {
      font-size: 14px;
      font-family: MiSans Semibold;
      font-weight: 400;
      line-height: 19px;
      color: #999999;
    }
    .share-dialog-collection-num-val {
          width: 12rem;
          height: 2rem;
          background-image: url(../../images/collection-arrow.png);
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center center;
          font-size: 12px;
          font-family: MiSans Semibold;
          font-weight: 400;
          color: #515152;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 22px;
    }
  }
  .share-dialog-collection-num-time {
      font-size: 13px;
      font-family: MiSans Semibold;
      font-weight: 400;
      line-height: 19px;
      color: #999999;
       margin-top: 1px;
    }
    .dash {
      width: 100%;
      // height: 1px;
      border: 1px dashed #E5E5E5;
      margin-top: 30px;
    }
    .dash1 {
      width: 100%;
      border: 1px dashed #E5E5E5;
      margin-top: 10px;
    }

  .footer-title {
      font-size: 16px;
      font-family: MiSans Semibold;
      font-weight: 400;
      line-height: 22px;
      color: #747474;
      margin-left: 14px;
      margin-top: 10px;
      text-align: center;
    }
  .share-dialog-qrcode {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 20px;
    .qrcode-left {
      display: flex;
      // align-items: center;
      img {
        width: 27px;
        height: 41px;
        margin-right: 6px;
      }
    }
    .share-dialog-qrcode-title1 {
      font-size: 24px;
      font-family: MiSans;
      font-weight: 500;
      line-height: 22px;
      color: #333;
    }
    .share-dialog-qrcode-title2 {
      font-size: 9px;
      font-weight: 400;
      line-height: 16px;
      color: #999999;
      margin-top: 2px;
    }
    .share-dialog-qrcode-title3 {
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      color: #4073C4;
    }
    #qrcode {

    }
  }
  
}
.market-detail{
  width: 100%;
  background-color: #fff;
  margin-bottom: 7rem;
  .detail-top {
    background-color: #233370;
    background-image: url(../../images/market-banner.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 670px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .share {
      display: flex;
      flex-direction: column;
      img {
        width: 25px;
        height: 24px;
        margin-top: 10px;
        margin-bottom: 6px;
      }
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      color: #f1f1f1;

    }
    .img-work {
      // width: 100%;
      text-align: center;
    }
    .work {
      // width: 18.69rem;
      // width: 90%;
      height: 220px;
      margin-top: 76px;
      border-radius: 8px;
      
    }
    .work[lazy=loading] {
      width: 18.69rem;
      height: 18.69rem;
      background: url('../../images/loading-bg.png') no-repeat;
      background-size: 100%;
    }
    .work-msg {
        background-image: url(../../images/detail-img1.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 21rem;
        height: 142px;
        margin-top: 34px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        position: relative;
        .work-name {
          font-size: 28px;
          font-family: MiSans Semibold;
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
          padding-left: 11px;
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
            font-family: MiSans Semibold;
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
                font-family: MiSans Semibold;
                font-weight: 400;
                line-height: 18px;
                color: #F1E1BE;
                text-align: center;
              }
          }
          .price {
            font-size: 26px;
            font-family: MiSans Semibold;
            font-weight: 600;
            line-height: 39px;
            color: #CFA980;
            letter-spacing: 1.3px;
            padding-left: 30px;
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
            font-family: MiSans Semibold;
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
    position: relative;
    .work-story {
      font-size: 22px;
      font-family: MiSans Semibold;
      font-weight: 600;
      line-height: 29px;
      color: #333333;
      padding: 0 24px;
    }
    .line {
      width: 100%;
      height: 1px;
      background-color:#E5E5E5;
      margin-top: 17px;
      margin-bottom: 44px;
    }
    .img-left {
      display: none;
    }
    .img-right {
      display: none;
    }
    .work-msg-item {
      padding: 0 24px;
      .work-msg-item-title {
        font-size: 18px;
        font-family: MiSans Semibold Semibold;
        font-weight: 600;
        line-height: 24px;
        color: #666666;
        margin-bottom: 15px;
      }
      .work-msg-item-val {
        font-size: 14px;
        font-family: MiSans Semibold;
        font-weight: 400;
        line-height: 19px;
        color: #848484;
        margin-bottom: 25px;
      }
    }
    .work-msg-author {
      width: 100%;
      height: 105px;
      background: rgba(244, 244, 255, 1);
      border-radius: 10px;
      margin-top: 44px;
      display: flex;
      flex-direction: column;
      padding: 0 24px;
      align-items: center;
      justify-content: center;
      .work-msg-author-item {
        width: 100%;
        display: flex;
        align-items: center;
        .author-item1 {
          font-size: 18px;
          font-family: MiSans Semibold;
          font-weight: 400;
          line-height: 34px;
          color: #666666;
        }
        .author-item2 {
          font-size: 18px;
          font-family: MiSans Semibold Semibold;
          font-weight: 600;
          line-height: 34px;
          color: #666666;
          padding-left: 30px;
        }
      }
    }
    .purchase-notes {
      padding: 0px 20px;
      margin-top: 54px;
      text-align: center;
      .purchase-notes-title {
        font-size: 16px;
        font-family: MiSans Semibold Semibold;
        font-weight: 600;
        line-height: 22px;
        color: #777777;
      }
      .purchase-notes-content {
        font-size: 12px;
        font-family: MiSans Semibold;
        font-weight: 400;
        line-height: 18px;
        color: #B5B5B5;
        margin-top: 12px;
        // padding: 0 260px;
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
        font-family: MiSans Semibold;
        font-weight: 400;
        line-height: 22px;
        color: #747474;
        margin-top: 6px;
      }
    }
  }
}
}
</style>
