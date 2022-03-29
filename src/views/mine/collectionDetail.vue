<template>
    <div class="container content">
        <div class="order-detail">
            <MineTab />
            <div class="nav" @click="goback">
              <img src="../../images/back.png" alt="">
              <div class="nav-title">我的藏品列表</div>
            </div>
            <div class="order-detail-content">
              <div class="order-status">
                <div>藏品详情</div>
              </div>
              <div class="order-msg">
                <div class="nft-msg">
                  <img :src="detailObj.productImage" alt="">
                  <div class="nft-msg-right">
                    <div class="nft-msg-title">{{ detailObj.productName }}</div>
                    <div class="nft-msg-num">
                        <img src="../../images/order-icon.png"/>
                        {{ detailObj.oid }}
                    </div>
                  </div>
                </div>
                <div class="nft-function">
                    <div class="nft-function-item" @click="openShare">
                      <img style="width: 25px;height: 25px;" src="../../images/share-icon.png"/>
                      <span>分享</span>
                    </div>
                    <div class="nft-function-item" @click="openGift">
                      <img style="width: 25px;height: 25px;" src="../../images/giveto-icon.png"/>
                      <span>转赠</span>
                    </div>
                    <div class="nft-function-item" @click="handleBlockchainClick(detailObj.oid)">
                      <img style="width: 25px;height: 25px;" src="../../images/certificate-icon.png"/>
                      <span>证书</span>
                    </div>
                    <div class="nft-function-item">
                      <img style="width: 25px;height: 25px;" src="../../images/more-icon.png"/>
                      <span>更多</span>
                    </div>
                  </div>
                <div class="order-data">
                 <div class="data-item">
                    <div class="data-item-title">收藏者</div>
                    <div class="data-item-num">{{ detailObj.userName }}</div>
                  </div>
                  <div class="data-item">
                    <div class="data-item-title">生成时间</div>
                    <div class="data-item-num">{{ detailObj.createTime }}</div>
                  </div>
                  <div class="data-item">
                    <div class="data-item-title">藏品哈希值</div>
                    <div class="data-item-num">{{ setNumber(detailObj.productHash)}}</div>
                  </div>
                  <div class="data-item">
                    <div class="data-item-title">创作者</div>
                    <div class="data-item-num">{{ detailObj.creator }}</div>
                  </div>
                  <div class="data-item">
                    <div class="data-item-title">交易金额</div>
                    <div class="data-item-num">{{ detailObj.price }}元</div>
                  </div>
                  <div class="data-item">
                    <div class="data-item-title">交易时间</div>
                    <div class="data-item-num">{{ detailObj.payTime }}</div>
                  </div>
                  <div class="data-item">
                    <div class="data-item-title">记录单号</div>
                    <div class="data-item-num">{{ setNumber(detailObj.oid) }}</div>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="purchase-notes">
              <div class="purchase-notes-content">
                温馨提示：本数字藏品版权由发行方或者原作创作者拥有，除另行取得版权拥有者书面同意外，用户不得将数字藏品用于任何商业用途。请远离非理性炒作，防范欺诈风险
              </div>
            </div>
            <div class="work-msg-footer">
              <img src="../../images/detail-img2.png" alt="">
              <div class="work-msg-footer-title">雄安链提供支持</div>
            </div>
          </div>
          <el-dialog
            title=""
            :visible.sync="shareDialogVisible"
            :show-close='false'
            >
            <div class="share-dialog"  ref="screen">
              <div class="share-dialog-title">{{ detailObj.productName }}</div>
              <div class="share-dialog-author">
                <div class="share-dialog-author-title">创作者</div>
                <div class="share-dialog-author-name">{{ detailObj.creator }}</div>
              </div>
              <img :src="detailObj.productImage" alt="" class="art" >
              <div class="share-dialog-collectioner">
                <div class="share-dialog-collectioner-title">收藏者</div>
                <div class="share-dialog-collectioner-name">{{ detailObj.userName }}</div>
              </div>
              <div class="share-dialog-collection-num">
                <div class="share-dialog-collection-num-title">收藏编号</div>
                <div class="share-dialog-collection-num-val">AC9163#00074/10000</div>
                <div class="share-dialog-collection-num-time">生成时间 2021.12.29 13:20:34</div>
              </div>
              <div class="share-dialog-msg-footer">
                <img src="../../images/detail-img2.png" alt="">
                <div class="work-msg-footer-title">雄安链提供支持</div>
              </div>
              <div class="share-dialog-qrcode">
                <div>
                  <div class="share-dialog-qrcode-title1">扫码查看幻安详情</div>
                  <div class="share-dialog-qrcode-title2">雄安官方数字藏品NFT平台</div>
                </div>
                <div id="qrcode" ref="qrcode" ></div>
              </div>
            </div>
          </el-dialog>
           <el-dialog
            title=""
            :visible.sync="giftDialogVisible"
            :show-close='false'
            >
            <div class="gift-dialog">
              <div class="gift-dialog-title">{{ detailObj.productName }}</div>
              <div class="gift-dialog-author">
                <div class="gift-dialog-author-title">创作者</div>
                <div class="gift-dialog-author-name">{{ detailObj.creator }}</div>
              </div>
              <div>
                <img :src="detailObj.productImage" alt="" class="art">
              </div>
              <div class="gift-input-div">
                <div class="gift-input-div-item">
                  <div class="item-title">受赠人手机号</div>
                  <el-input v-model="phone" placeholder="请输入手机号" size="medium" ></el-input>
                </div>
                <div class="gift-input-div-item">
                  <div class="item-title">您的验证码</div>
                  <el-input v-model="captcha" :type="'passwrod'" placeholder="请输入验证码" size="medium"></el-input>
                  <span @click="handleSendCodeClick">
                      <span v-if="isShowSend" class="item-title-span">发送验证码</span>
                      <span v-else class="item-title-span">{{ countNum }}s后重发</span>
                  </span>
                </div>
                <div class="sure" @click="surePresent">确认转赠</div>
              </div>
              <div class="gift-dialog-msg-footer">
                <img src="../../images/detail-img2.png" alt="">
                <div class="work-msg-footer-title">雄安链提供支持</div>
              </div>
            </div>
          </el-dialog>
    </div>
</template>

<script>
 import QRCode from 'qrcodejs2'
 import html2canvas from 'html2canvas'
import { getCollectionDetail, giftPresent } from '@/api/mine'
import { getCaptcha } from '@/api/user'

  export default {
    name: 'order',
    components: {
      MineTab: () => import('./MineTab.vue')
    },
    data() {
      return {
        active: 1,
        pid: this.$route.query.pid,
        detailObj: {},
        shareDialogVisible: false,
        giftDialogVisible: false,
        qr: '',
        phone: '',
        captcha: '',
        isShowSend: true,
        timer: null,
        countNum: 60
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
        getCollectionDetail({pid: this.pid}).then(res => {
            if(res.status == 1 && res.data) {
                this.detailObj = res.data
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
    },
    // 生成二维码
    crateQrcode() {
      this.qr = new QRCode('qrcode', {
        width: 84,
        height: 84, // 高度
        text: '1231231', // 二维码内容
        // render: 'canvas', // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: '#f0f',
        // foreground: '#ff0'
      })
    },
    openShare() {
      this.shareDialogVisible = true
      if (!this.qr) {
          this.$nextTick(() => {
            this.crateQrcode()
            // setTimeout(() => {
            //   this.handleOk()
            // }, 1000)
          })
        }
    },
    openGift() {
      this.giftDialogVisible = true
    },
    handleBlockchainClick(id) {
      this.$router.push({
        path: '/mine/blockchainDetail',
        query: {
          oid: id
        }
      })
    },
    //截屏
        handleOk() {
            html2canvas(this.$refs.screen, {
                useCORS: true,
            }).then((canvas) => {
                if (navigator.msSaveBlob) {
                    // IE10+
                    let blob = canvas.msToBlob()
                    return navigator.msSaveBlob(blob, name)
                } else {
                    let imageurl = canvas.toDataURL('image/png')
                    //这里需要自己选择命名规则
                    let imagename = 'img1'
                    this.fileDownload(imageurl, imagename)
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
         handleSendCodeClick() {
           if (!this.phone) {
             this.$message({
                    message: '请输入手机号',
                    type: 'error'
                })
             return
           }
            let reqObj = {
                    index: 3,
                    phoneNumber: localStorage.getItem('phoneNumber')
                }
                getCaptcha(reqObj).then(res => {
                    if(res.status == 1) {
                        this.$message({
                            message: res.message,
                            type: 'success'
                        })
                    }
                })
            this.isShowSend = false
            this.timer = setInterval(() => {
                this.countNum--
                if(this.countNum == 0) {
                    this.isShowSend = true
                    clearInterval(this.timer)
                    this.countNum = 60
                    return
                } 
            }, 1000)
        },
        surePresent() {
          console.log(this.detailObj)
          if (!this.captcha || !this.phone) {
            return
          }
          let obj = {
            captcha: this.captcha,
            phoneNumber: this.phone,
            oid: this.detailObj.oid,
            pid: this.pid
          }
          giftPresent(obj).then(res => {
            console.log(res)
            if(res.status == 1) {
                    this.$message({
                        message: '转赠成功',
                        type: 'success'
                    })
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
  background: rgba(255, 255, 255, 1);
  border-radius: 6px 6px 0px 0px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 47px;
  .order-status {
    padding-top: 50px;
    text-align: center;
    font-size: 22px;
    font-family: MiSans Semibold;
    font-weight: 600;
    color: #333333;
    img {
      width: 47px;
      height: 47px;
      margin-bottom: 15px;
    }
  }
  .order-msg {
    width: 439px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
    .nft-msg {
      width: 300px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      img {
        width: 300px;
        height: 300px;
        border-radius: 8px;
      }
      .nft-msg-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        .nft-msg-title {
          font-size: 24px;
          font-family: MiSans Semibold;
          font-weight: 600;
          line-height: 37px;
          color: #333333;
          margin-top: 18px;
        }
        .nft-msg-num {
          font-size: 12px;
        font-family: MiSans Semibold;
        font-weight: 400;
        line-height: 16px;
        color: #515152;
          margin-top: 10px;
          background: rgba(238, 225, 197, 0.39);
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 8px 16px;
          img{
              width: 10.45px;
              height: 15.97px;
              margin-right: 5px;
          }
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
    .nft-function{
      width: 300px;
      display: flex;
      flex-direction: row;
      margin-top: 27px;
      justify-content: space-around;
      align-items: center;
      .nft-function-item {
        cursor: pointer;
      }
      div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        img{
          vertical-align: middle;
        }
        span{
          // font-family: MiSans se;
        }
      }
    }
    .order-data {
      width: 100%;
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
.purchase-notes {
      margin-top: 54px;
      text-align: center;
      .purchase-notes-title {
        font-size: 16px;
        font-family: MiSans Semibold;
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
        font-family: MiSans Semibold;
        font-weight: 400;
        line-height: 22px;
        color: #747474;
        margin-top: 6px;
      }
    }
@media (max-width: 500px) {
  .order-detail {
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
      // margin-left: 60px;
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
      }
    }
}
  .order-detail-content {
    width: 19.7rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 6px 6px 0px 0px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 0px!important;
    .order-status {
      padding-top: 50px;
      text-align: center;
      font-size: 22px;
      font-family: MiSans Semibold;
      font-weight: 600;
      color: #333333;
      img {
        width: 47px;
        height: 47px;
        margin-bottom: 15px;
      }
    }
    .order-msg {
      width: 19.7rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 45px;
      .nft-msg {
        width: 19.7rem;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 15.25rem;
          height: 15.25rem;
          border-radius: 8px;
        }
        .nft-msg-right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          .nft-msg-title {
            font-size: 24px;
            font-family: MiSans Semibold;
            font-weight: 600;
            line-height: 37px;
            color: #333333;
            margin-top: 18px;
          }
          .nft-msg-num {
            font-size: 12px;
          font-family: MiSans Semibold;
          font-weight: 400;
          line-height: 16px;
          color: #515152;
            margin-top: 10px;
            background: rgba(238, 225, 197, 0.39);
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 8px 16px;
            img{
                width: 10.45px;
                height: 15.97px;
                margin-right: 5px;
            }
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
      .nft-function{
        width: 19.7rem;
        display: flex;
        flex-flow: row wrap;
        margin-top: 27px;
        justify-content: space-around;
        align-items: center;
        div{
          width: 50%;
          margin-top: 16px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          img{
            vertical-align: middle;
          }
        }
      }
      .order-data {
        width: 19.7rem;
        // background-color: #EEE1C5;
        margin-top: 34px;
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

  .purchase-notes {
      width: 19.7rem;
      margin-top: 54px;
      text-align: center;
      .purchase-notes-title {
        font-size: 16px;
        font-family: MiSans Semibold;
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
        padding: 0px;
        text-align: left;
      }
    }
}

.share-dialog {
   background-image: url(../../images/watermark.png);
  background-size: auto 20%;
  background-repeat: no-repeat;
  background-position: 80% 76%;
  .share-dialog-title {
    font-size: 28px;
    font-family: MiSans Semibold;
    font-weight: 600;
    color: #333333;
    margin-left: -20px;
  }
  .share-dialog-author {
    display: flex;
    margin-top: 8px;
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
     width: 60%;
      border-radius: 8px;
      margin: 0 auto;
      margin-top: 30px;
      display: flex;
      justify-content: center;
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
    .share-dialog-collection-num-title {
      font-size: 14px;
      font-family: MiSans Semibold;
      font-weight: 400;
      line-height: 19px;
      color: #999999;
       margin-top: 20px;
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
           margin-top: 12px;
    }
    .share-dialog-collection-num-time {
      font-size: 13px;
      font-family: MiSans Semibold;
      font-weight: 400;
      line-height: 19px;
      color: #999999;
       margin-top: 14px;
    }
    
  }

  .share-dialog-msg-footer {
    display: flex;
    align-items: center;
    margin-top: 10px;
    img {
      width: 27px;
    }
    .work-msg-footer-title {
      font-size: 16px;
      font-family: MiSans Semibold;
      font-weight: 400;
      line-height: 22px;
      color: #747474;
      margin-left: 14px;
      margin-top: 10px;
    }
  }
  .share-dialog-qrcode {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .share-dialog-qrcode-title1 {
      font-size: 16px;
      // font-family: MiSans;
      font-weight: 400;
      line-height: 22px;
      color: #747474;
    }
    .share-dialog-qrcode-title2 {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      color: #999999;
      margin-top: 2px;
    }
  }
  
}

.gift-dialog {
  .gift-dialog-title {
    font-size: 28px;
    font-family: MiSans Semibold;
    font-weight: 600;
    color: #333333;
    margin-left: -20px;
  }
  .gift-dialog-author {
    display: flex;
    margin-top: 8px;
    .gift-dialog-author-title {
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      color: #999999;
    }
    .gift-dialog-author-name {
      font-size: 14px;
      font-family: MiSans Semibold;
      font-weight: 500;
      line-height: 19px;
      color: #333333;
      margin-left: 22px;
    }
  }
   .art {
      width: 60%;
      border-radius: 8px;
      margin: 0 auto;
      margin-top: 30px;
      display: flex;
      justify-content: center;
    }
    .gift-dialog-collectioner {
      .gift-dialog-collectioner-title {
        font-size: 14px;
        font-weight: 400;
        color: #999999;
        margin-top: 23px;
      }
      .gift-dialog-collectioner-name {
        font-size: 20px;
        font-family: MiSans Semibold;
        font-weight: 500;
        line-height: 27px;
        color: #333333;
         margin-top: 8px;
      }
    }
  .gift-dialog-msg-footer {
    display: flex;
    align-items: center;
    margin-top: 90px;
    justify-content: center;
    img {
      width: 27px;
    }
    .work-msg-footer-title {
      font-size: 16px;
      font-family: MiSans Semibold;
      font-weight: 400;
      line-height: 22px;
      color: #747474;
      margin-left: 14px;
      margin-top: 10px;
    }
  }
  .gift-input-div {
    display: flex;
    flex-direction: column;
    margin-top: 42px;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    .gift-input-div-item {
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      position: relative;
      .item-title {
        font-size: 14px;
        font-weight: 500;
        line-height: 19px;
        color: #333333;
        width: 160px;
        text-align: right;
        margin-right: 12px;
        
      }
      .item-title-span {
        width: 100px;
        padding: 8px 0;
        background: #4859D8;
        color: #FFFFFF;
        border-radius: 8px;
        text-align: center;
        position: absolute;
        font-size: 13px;
        right: 0px;
        top: 0px;
        cursor: pointer;
      }
     /deep/  .el-input__inner {
        width: 240px;
        background: #f5f5f5;
        border: none;
      }
      .el-input {
        width: 240px;
      }
      
    }
    .sure {
        width: 163px;
        height: 39px;
        cursor: pointer;
        background: rgba(72, 89, 216, 1);
        border-radius: 19px;
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
      }
  }

  // /deep/ input{
  //     border: none;
  //     background: #f5f5f5;
  //     width: 14.4rem;
  //     // padding-right: 5px;
  //     padding-left: 10px;
  // }
  
}
</style>
