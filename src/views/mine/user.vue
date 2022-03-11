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
                    <el-input v-model="name" placeholder="" disabled size="medium"></el-input>
                  </div>
                  <div class="item">
                    <div class="item-name">手机号</div>
                    <el-input v-model="name" placeholder="" disabled size="medium"></el-input>
                  </div>
                </div>
                <div class="item-row">
                  <div class="item">
                    <div class="item-name">密码</div>
                    <el-input v-model="name" placeholder="" disabled size="medium"></el-input>
                  </div>
                  <div class="item">
                    <div class="item-name">头像</div>
                    <div class="item-upload">
                        <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      </el-upload>
                    </div>
                    
                  </div>
                </div>
                <div class="item-row">
                  <div class="item">
                    <div class="item-name">实名认证</div>
                    <div class="certification">已通过</div>
                  </div>
                </div>
                <div class="line"></div>
                <div class="operation">
                  <div class="logout">注销账号</div>
                  <div class="save">保存</div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'user',
    components: {
      MineTab: () => import('./MineTab.vue')
    },
    data() {
      return {
        name: '唐诗'
      }
    },
    computed: {
      message() {
        return ''
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
.user {
    width: 67.5rem;
    margin-left: 50%;
    transform: translate(-50%);
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
        margin-top: 147px;
        margin-bottom: 35px;
      }
      .operation {
        display: flex;
        align-items: center;
       justify-content: flex-end;
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
</style>
