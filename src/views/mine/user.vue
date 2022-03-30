<template>
    <div class="container content">
        <div class="user">
            <MineTab />
            <div class="mine-user">
              <div class="title">个人信息</div>
              <div class="user-content">
                <div class="item-row">
                  <div class="item">
                      <div class="item-name">昵称</div>
                        <el-input v-model="nickName" placeholder="" disabled size="medium"></el-input>
                      </div>
                      <div class="item">
                        <div class="item-name">手机号</div>
                        <el-input v-model="phoneNumber" placeholder="" disabled size="medium"></el-input>
                      </div>
                </div>
                <div class="item-row">
                  <!-- <div class="item">
                    <div class="item-name">密码</div>
                    <el-input v-model="password" placeholder="" disabled size="medium"></el-input>
                  </div> -->
                  <!--
                    action="http://35.201.215.236:8082/interface/api/customer/avatar"
                    :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                  -->
                  <!-- <div class="item upload-wrapper">
                    <div class="item-name">头像</div>
                    <div class="item-upload">
                      <el-upload
                          class="avatar-uploader"
                          ref="upload"
                          action="http://192.168.3.233:8082/interface/api/customer/avatar"
                          :headers="headers"
                          :on-success="handleSuccess"
                          :on-change="handleUploadChange"
                          :on-error="handleUploadError"
                          list-type="picture-card"
                          :auto-upload="false">
                            <i slot="default" class="el-icon-plus"></i>
                            <div slot="file" slot-scope="{file}">
                              <img
                                class="el-upload-list__item-thumbnail"
                                :src="file.url" alt=""
                              >
                            </div>
                        </el-upload>
                        <div class="upload-button">
                          <el-button @click="handleUploadClick">上传</el-button>
                        </div>
                    </div>
                    
                  </div> -->
                </div>
                <div class="item-row">
                  <div class="item real-name">
                    <div class="item-name">实名认证</div>
                    <div class="certification">待认证</div>
                  </div>
                </div>
                <div class="line"></div>
                <div class="trusteeship-wrapper">
                  <div class="trusteeship-left">
                    <div class="number">
                      {{phoneNumber}}
                    </div>
                    <div class="address">
                      <span>账户地址： <span id="address">{{ setNumber(address) }}</span></span><span class="copy-address" @click="handleAddressClick" :data-clipboard-text="address">复制</span>
                    </div>
                    <div class="secret">
                      <span>密钥托管ID：<span id="secret">{{ setNumber(mandatoryId) }}</span></span><span class="copy-secret" @click="handleSecretClick" :data-clipboard-text="mandatoryId">复制</span>
                    </div>
                  </div>
                  <div class="trusteeship-right">
                    <div class="item-left">
                      <span class="status-title">密钥托管</span>
                      <span class='status'>已托管</span>
                    </div>
                    <div class="item-right">
                      <span class='date-title'>创建时间</span>
                      <span class='date'>{{ createTime }}</span>
                    </div>
                  </div>
                </div>
                <div class="footer-line-wrapper">
                  <el-divider><span class="divider-text">永久保存·不可篡改·公开透明</span></el-divider>
                </div>
                <div class="footer-mobile-line-wrapper">
                  <span class="footer-line"></span>
                  <span>永久保存·不可篡改·公开透明</span>
                  <span class="footer-line"></span>
                </div>
                <div class="operation">
                  <div class="operation-left">
                    <img src="../../images/detail-img2.png" alt="">
                    <div class="operation-left-title">雄安链提供支持</div>
                  </div>
                  <!-- <div class="operation-right">
                    <div class="logout">注销账号</div>
                    <div class="save">保存</div>
                  </div> -->
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import { updateAvatar } from '@/api/mine'
import axios from 'axios'
import moment from 'moment'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import Clipboard from 'clipboard'
import { Message } from 'element-ui'
  export default {
    name: 'user',
    components: {
      MineTab: () => import('./MineTab.vue')
    },
    data() {
      return {
        nickName: window.localStorage.getItem('nickName'),
        phoneNumber: window.localStorage.getItem('phoneNumber'),
        imageUrl: '',
        headers: {
          Authorization: window.localStorage.getItem(ACCESS_TOKEN) ? window.localStorage.getItem(ACCESS_TOKEN) : ''
        },
        address: window.localStorage.getItem('address') ? window.localStorage.getItem('address') : '',
        mandatoryId: window.localStorage.getItem('mandatoryId') ? window.localStorage.getItem('mandatoryId') : '',
        createTime: window.localStorage.getItem('createTime') ? moment(parseInt(window.localStorage.getItem('createTime'))).format('YYYY-MM-DD hh:mm:ss') : '',
        fileUrl: [],
        api: process.env.BASE_API
      }
    },
    computed: {
      message() {
        return ''
      }
    },
    mounted() {
      let clipboard = new Clipboard('.copy-address')

      clipboard.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);  
        e.clearSelection();
      }) 
      let clipboardSecret = new Clipboard('.copy-secret')

      clipboardSecret.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);  
        e.clearSelection();
      })  
    },
    methods: {
      handleAvatarSuccess(res) {
        console.log(res)
      },
      beforeAvatarUpload(file) {
        const isLt100M = file.size / 1024 / 1024 <= 100
        if (!isLt100M) {
          Message({
            message: '上传文件大小不能超过 100MB!',
            type: 'error'
          })
          return false
        }
      },
      handleSuccess(res) {
        console.log(res)
        if(res.status == 1) {
          Message({
            message: res.message,
            type: 'success'
          })
          this.$store.state.user.avatar = this.$root.avatarUrl + res.data
          window.localStorage.setItem('avatar', this.$root.avatarUrl + res.data)
        }
        
      },
      handleUploadError(err) {
        Message({
          message: err.response.message,
          type: 'error'
        })
      },
      handleAddressClick() {
        var clipboard = new Clipboard('.copy-address')
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
      handleSecretClick() {
        var clipboard = new Clipboard('.copy-secret')
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
      handleUploadChange(file, fileList) {
        this.fileUrl = fileList
      },
      handleUploadClick() {
        if(this.fileUrl.length == 0) {
          this.$message.error('请上传头像')
          return
        }
        this.$nextTick(() => {
          this.$refs.upload.submit()
        })
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
.user {
    width: 67.5rem;
    margin-left: 50%;
    transform: translate(-50%);
}
.avatar-uploader {
  display: flex;
  flex-direction: row;
}

/deep/.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    
    // position: relative;
    // overflow: hidden;
  }
  /deep/.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  /deep/.avatar-uploader .el-upload--picture-card {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  /deep/ .el-upload-list--picture-card .el-upload-list__item{
    width: 50px;
    height: 50px;
  }
  /deep/.avatar-uploader-icon {
    font-size: 14px;
    color: #8c939d;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  /deep/.avatar {
    width: 50px;
    height: 50px;
    display: block;
  }
.mine-user {
    width: 67.5rem;
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
    }
    .user-content {
      padding: 56px 132px;
      .item-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 22px;
        .item {
          display: flex;
          align-items: center;
          width: 40%;
          .item-name {
            width: 80px;
            margin-right: 20px;
            text-align: right;
          }
          .item-upload {
            width: 320px;
            display: flex;
            flex-direction: row;
            align-items: center;
            .upload-button{
              margin-left: 20px;
              margin-top: -3px;
              /deep/ .el-button{
                background: #4859D8;
                color: #FFFFFF;
                padding: 10px 16px;
              }
            }
          }
          .certification {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-family: MiSans;
            font-weight: 500;
            line-height: 19px;
            color: #407C60;
            width: 98px;
            height: 33px;
            background: rgba(222, 255, 240, 0.39);
            opacity: 1;
            border-radius: 6px;
          }
        }
      }
      .line {
        width: 100%;
        height: 1px;
        background-color:  #EFEFEF;
        margin-top: 50px;
        margin-bottom: 35px;
      }
      .trusteeship-wrapper{
        width: 823px;
        height: 109px;
        display: flex;
        flex-direction: row;
        margin-bottom: 36px;
        .trusteeship-left {
          width: 369px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          .number{
            color: #333333;
            font-size: 16px;
            font-weight: 500;
          }
          .address{
            margin-top: 23px;
            color: #777777;
            font-weight: 400;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px 0px 0px;
            .copy-address{
              color: #4859D8;
              cursor: pointer;
            }
          }
          .secret{
            margin-top: 15px;
            color: #777777;
            font-weight: 400;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px 0px 0px;
            .copy-secret{
              color: #4859D8;
              cursor: pointer;
            }
          }
        }
        .trusteeship-right{
          width: 454px;
          display: flex;
          flex-direction: row;
          background: #F7FBFF;
          .item-left{
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            .status-title{
              color: #777777;
              font-size: 12px; 
              font-weight: 400;
            }
            .status{
              margin-top: 18px;
              font-size: 14px;
              font-weight: 600;
            }
          }
          .item-left::before{
            content: '';
            position: absolute;
            top: 23px;
            right: 2px;
            height: 66px;
            width: 1px;
            background:#D3E7FD;
            z-index: 10;
          }
          .item-right{
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .date-title{
              color: #777777;
              font-size: 12px; 
              font-weight: 400;
            }
            .date{
              margin-top: 18px;
              font-size: 14px;
              font-weight: 400;
            }
          }
        }
      }
      .footer-line-wrapper{
        .divider-text{
          font-size: 14px;
          font-family: YouSheBiaoTiHei;
          font-weight: 400;
          color:#C3C3C3;
        }
      }
      .footer-mobile-line-wrapper{
        display: none;
      }
      .operation {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-top: 20px;
        .operation-left{
          display: flex;
          flex-direction: row;
          align-items: center;
          img{
            width: 26.82px;
            height: 41px;
            margin-right: 25px;
          }
          .operation-left-title{
            font-size: 16px;
            font-weight: 400;
            color: #747474; 
          }
        }
        .operation-right{
          display: flex;
          flex-direction: row;
          align-items: center;
          .logout {
            font-size: 14px;
            font-family: MiSans;
            font-weight: 500;
            line-height: 19px;
            color: #AF3E3E;
            margin-right: 20px;
            cursor: pointer;
          }
          .save {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 169px;
            height: 38px;
            background: rgba(72, 89, 216, 1);
            border-radius: 19px;
            font-size: 14px;
            font-family: MiSans;
            font-weight: 600;
            line-height: 19px;
            color: #FFFFFF;
            cursor: pointer;
          }
        }
        
      }
    }
}
@media (max-width: 500px) {
  .user {
    width: 19.7rem;
    .mine-tab {
      display: flex!important;
      flex-direction: row!important;
      justify-content: space-around!important;
      
    }
    .mine-tab .item{
        margin-left: 0!important;
      }

  }
  .mine-user .user-content .item-row .item .certification{
    margin-left: -20px;
  }
  .mine-user {
    width: 19.7rem;
    height: auto!important;
    background: rgba(255, 255, 255,1);
    border-radius: 6px 6px 0px 0px;
    margin-top: 20px;
    padding-bottom: 54px;
    .title {
      font-size: 28px;
      font-weight: 600;
      line-height: 37px;
      color: #333333;
      text-align: center;
      padding-top: 1.875rem;
    }
    .user-content {
      padding: 0px;
      .item-row {
        display: flex;
        flex-direction: column;
        margin-bottom: 22px;
        .item {
          display: flex;
          align-items: center;
          width: 100%;
          margin-top: 21px;
          margin-bottom: 0px;
          .item-name {
            width: 80px;
            margin-right: 20px;
            text-align: right;
          }
          .item-upload {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            .upload-button{
              margin-left: 20px;
              margin-top: -3px;
              /deep/ .el-button{
                background: #4859D8;
                color: #FFFFFF;
                padding: 10px 16px;
              }
            }
          }
          .certification {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-family: MiSans;
            font-weight: 500;
            line-height: 19px;
            color: #407C60;
            width: 98px;
            height: 33px;
            background: rgba(222, 255, 240, 0.39);
            opacity: 1;
            border-radius: 6px;
          }
        }
        .upload-wrapper{
          margin-top: -2px;
        }
        .real-name{
          margin-top: -2px;
          .item-name{
            text-align: left;
            padding-left: 8px;
          }
          .certificationa{
            margin-left: -20px!important;
          }
      }
      }
      .line {
        width: 100%;
        height: 1px;
        background-color:  #EFEFEF;
        margin-top: 20px;
        margin-bottom: 35px;
      }
      .trusteeship-wrapper{
        width: 19.7rem;
        height: auto;
        display: flex;
        flex-direction: column;
        margin-bottom: 36px;
        .trusteeship-left {
          width: 19.7rem;
          display: flex;
          justify-content: center;
          flex-direction: column;
          .number{
            color: #333333;
            font-size: 16px;
            font-weight: 500;
          }
          .address{
            margin-top: 23px;
            color: #777777;
            font-weight: 400;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px;
            .copy-address{
              color: #4859D8;
              cursor: pointer;
            }
          }
          .secret{
            margin-top: 15px;
            color: #777777;
            font-weight: 400;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px;
            .copy-secret{
              color: #4859D8;
              cursor: pointer;
            }
          }
        }
        .trusteeship-right{
          width: 19.7rem;
          padding: 20px 0px;
          display: flex;
          flex-direction: row;
          background: #F7FBFF;
          margin-top: 30px;
          .item-left{
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            .status-title{
              color: #777777;
              font-size: 12px; 
              font-weight: 400;
            }
            .status{
              margin-top: 18px;
              font-size: 14px;
              font-weight: 600;
            }
          }
          .item-left::before{
            content: '';
            position: absolute;
            top: -0.3rem;
            right: 2px;
            height: 66px;
            width: 1px;
            background:#D3E7FD;
            z-index: 10;
          }
          .item-right{
            width: 70%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .date-title{
              color: #777777;
              font-size: 12px; 
              font-weight: 400;
            }
            .date{
              margin-top: 18px;
              font-size: 14px;
              font-weight: 400;
            }
          }
        }
      }
      .footer-line-wrapper{
        display: none;
      }
      .footer-mobile-line-wrapper{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-family: YouSheBiaoTiHei;
        font-size: 14px;
        .footer-line{
          width: 50px;
          height: 1px;
          border-top: 1px solid #ccc;
        }
      }
      .operation {
        display: flex;
        align-items: center;
       justify-content: flex-end;
       margin-top: 60px;
       .operation-left{
         display: none;
       }
        .logout {
          font-size: 14px;
          font-family: MiSans;
          font-weight: 500;
          line-height: 19px;
          color: #AF3E3E;
          margin-right: 20px;
          cursor: pointer;
        }
        .save {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 169px;
          height: 38px;
          background: rgba(72, 89, 216, 1);
          border-radius: 19px;
          font-size: 14px;
          font-family: MiSans;
          font-weight: 600;
          line-height: 19px;
          color: #FFFFFF;
          cursor: pointer;
        }
      }
    }
}
}
</style>
