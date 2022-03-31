<template>
    <div class="container content">
        <div class="order-detail">
            <MineTab />
            <div class="nav" @click="goback">
              <img src="../../images/back.png" alt="">
              <div class="nav-title">我的纪念品列表</div>
            </div>
            <div class="order-detail-content">
              <div class="order-status">
                <div>纪念品详情</div>
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
                    <div class="nft-function-item web" @click="openShare">
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
                    <div class="nft-function-item" @click="goDetail(detailObj.pid)">
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
                    <div class="data-item-title">纪念品哈希值</div>
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
                温馨提示：本数字纪念品版权由发行方或者原作创作者拥有，除另行取得版权拥有者书面同意外，用户不得将数字纪念品用于任何商业用途。请远离非理性炒作，防范欺诈风险
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
            <div class="share-dialog-content"  >
              <img :src="imageurl" alt="" style="width: 100%">
              <div class="work-msg-footer-title">长按上方图片保存或转发给朋友</div>
            </div>
          </el-dialog>
          <!-- <el-dialog
            title=""
            :visible.sync="shareDialogVisible1"
            :show-close='false'
            > -->
            <div class="share-dialog"  ref="screen" >
              <div class="share-dialog-author" v-if="detailObj.creator !== ' '">
                <div class="share-dialog-author-title">创作者</div>
                <div class="share-dialog-author-name">{{ detailObj.creator }}</div>
              </div>
              <div class="share-dialog-author">
                <div class="share-dialog-author-title">收藏者</div>
                <div class="share-dialog-author-name">{{ detailObj.userName }}</div>
              </div>
              <div class="share-dialog-collection-num share-dialog-author">
                <div class="share-dialog-collection-num-title">收藏编号</div>
                <div class="share-dialog-collection-num-val">{{ setNumber(detailObj.oid)}}</div>
              </div>
              <div class="share-dialog-collection-num-time">生成时间 {{nowTime}}</div>
              <div class="share-dialog-title">{{ detailObj.productName }}</div>
               <img :src="detailObj.productImage"  alt="" class="art">
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
              <div class="work-msg-footer-title">雄安链提供支持</div>
            </div>
          <!-- </el-dialog> -->
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
import moment from 'moment'

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
        shareDialogVisible1: false,
        giftDialogVisible: false,
        qr: '',
        phone: '',
        captcha: '',
        isShowSend: true,
        timer: null,
        countNum: 60,
        nowTime: '',
        imageurl: ""
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
                // this.imageUrlToBase64()
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
        width: 72,
        height: 72, // 高度
        text: 'https://arts.huoshu.org/market-detail?pid=' + this.detailObj.pid, // 二维码内容
        // render: 'canvas', // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: '#f0f',
        // foreground: '#ff0'
      })
    },
    openShare() {
      this.imageurl = ''
      setTimeout(() => {
        this.shareDialogVisible = true
      }, 1000)
      this.nowTime = moment.parseZone(new Date().getTime()).local().format('YYYY-MM-DD HH:mm:ss')
      if (!this.qr) {
          this.$nextTick(() => {
            this.crateQrcode()
              this.handleOk()
          })
        }
        this.$nextTick(() => {
        this.handleOk()
      })
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
    goDetail(id) {
      this.$router.push({
        path: '/market-detail',
        query: {
          pid: id
        }
      })
    },
    imageUrlToBase64() {
			//一定要设置为let，不然图片不显示
			let image = new Image();
	
			//解决跨域问题
			image.setAttribute('crossOrigin', 'anonymous');
			
			let imageUrl = this.detailObj.productImage;
			image.src = imageUrl

			//image.onload为异步加载
			image.onload = () => {
				var canvas = document.createElement("canvas");
				canvas.width = image.width;
				canvas.height = image.height;
				var context = canvas.getContext('2d');
				context.drawImage(image, 0, 0, image.width, image.height);
				
				var quality = 0.8;
				//这里的dataurl就是base64类型
        console.log(1111)
				var dataURL = canvas.toDataURL("image/jpeg", quality);//使用toDataUrl将图片转换成jpeg的格式,不要把图片压缩成png，因为压缩成png后base64的字符串可能比不转换前的长！
			  console.log(dataURL)
			}
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
                    let imagename = 'img-share'
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
                     
                } else {
                  this.$message({
                        message: res.message,
                        type: 'error'
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
    margin-bottom: 7rem;
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
      @media (min-width: 500px) {
      .web {
        display: none;
      }
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
    .work-msg-footer-title {
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        color: #D6D6D6;
        margin-top: 6px;
        text-align: center;
      }
@media (min-width: 500px) {
  .share-dialog{
    // display: none;
  }
  .work-msg-footer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 24px;
    img{
      width: 26.82px;
      height: 41px;
    }
  }
}
@media (max-width: 500px) {
  .work-msg-footer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 24px;
    img{
      width: 26.82px;
      height: 41px;
    }
  }
}
@media (max-width: 500px) {
  .order-detail {
    width: 19.7rem;
    margin-left: 0%!important;
    transform: translate(0%)!important;
    margin: 0 auto!important;
    padding-bottom: 40px;
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
          width: 100%;
          object-fit: contain;
          // width: 15.25rem;
          // height: 15.25rem;
          // object-fit:contain;
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
.share-dialog-content {
  .work-msg-footer-title {
      font-size: 14px;
      font-family: MiSans Semibold;
      font-weight: 500;
      line-height: 22px;
      color: rgb(77, 63, 235);
      margin-left: 14px;
      margin-top: 10px;
      padding-bottom: 0px;
    }
}

.share-dialog {
  position: absolute;
  z-index: -100;
  // width: 100%;
  padding: 30px 30px 30px 30px !important;
  // background-color: beige;
  @media (max-width: 500px) { 
      padding: 20px 30px 20px 30px !important;
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
    margin-top: 12px;
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
      width: 90%;
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

.gift-dialog {
  padding: 20px;
  .gift-dialog-title {
    font-size: 28px;
    font-family: MiSans Semibold;
    font-weight: 600;
    color: #333333;
    // margin-left: -20px;
    @media (max-width: 500px) { 
      font-size: 22px;
    }
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
       @media (max-width: 500px) { 
      width: 90%;
     }
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
    @media (max-width: 500px) { 
      .gift-input-div-item {
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      position: relative;
      .item-title {
        font-size: 12px;
        font-weight: 500;
        line-height: 19px;
        color: #333333;
        width: 120px;
        text-align: right;
        margin-right: 12px;
        
      }
      .item-title-span {
        width: 80px;
        padding: 8px 0;
        background: #4859D8;
        color: #FFFFFF;
        border-radius: 8px;
        text-align: center;
        position: absolute;
        font-size: 12px;
        right: 0px;
        top: 0px;
        cursor: pointer;
      }
     /deep/  .el-input__inner {
        width: 200px;
        background: #f5f5f5;
        border: none;
      }
      .el-input {
        width: 200px;
      }
      
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
       @media (max-width: 500px) { 
         width: 103px;
          height: 39px;
         font-size: 13px;
        }
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
