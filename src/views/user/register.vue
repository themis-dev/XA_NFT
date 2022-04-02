<template>
    <div class="register-container">
        <div class="register-wrapper">
            <div class="register-tabs">
                <div class="tab" >注册</div>
            </div>
            <div class="phoneNum-wrapper">
                <div class="num">
                    <span>+86</span>
                    <input v-model="phoneNumber" placeholder="请输入手机号码"/>
                </div>

                <div class="agreement-wrapper">
                    <el-checkbox v-model="isChecked" @change="handleCheckChange"></el-checkbox>
                    <span style="margin-left: 2px;">阅读并同意<span class="link" @click="handleServerClick">服务协议</span></span>
                </div>
            </div>
            <div class="btn-wrapper">
                <button type="primary" @click="handleNextClick">下一步</button>
            </div>
        </div>
        <el-dialog :visible.sync="dialogVisible" class="dialog-wrapper">
                <div class="verify-wrapper">
                    <slide-verify :l="42"
                        :r="10"
                        :w="310"
                        :h="155"
                        ref="slideblock"
                        slider-text="向右滑动"
                        @success="onSuccess"
                        @fail="onFail"
                        @refresh="onRefresh"
                    ></slide-verify>
                </div>
            </el-dialog>
    </div>
</template>
<script>
import { getCaptcha } from '@/api/user'
import { Message } from 'element-ui'

export default {
    name: 'register',
    data () {
        return {
            phoneNumber: '',
            isChecked: false,
            dialogVisible: false
        }
    },
    methods: {
        handleCheckChange(value) {
            this.isChecked = value
        },
        onSuccess(){
                let reqObj = {
                    index: 1,
                    phoneNumber: this.phoneNumber
                }
                getCaptcha(reqObj).then(res => {
                    if(res.status == 1) {
                        this.$router.push({
                            path: '/user/registerCode',
                            query: {
                                phoneNumber: this.phoneNumber
                            }
                        })
                    } else if(res.status == -1) {
                        Message({
                            message: res.message,
                            type: 'warning'
                        })
                        this.dialogVisible = false
                        return
                    }
                    this.dialogVisible = false
                    this.$refs.slideblock.reset();
                }).catch(error => {
                    console.log(error)
                })
        },
        onFail(){
            // this.$refs.slideblock.reset();
        },
        onRefresh(){
            
        },
        handleNextClick() {
            if(!this.phoneNumber) {
                this.$message({
                    message: '请输入手机号码',
                    type: 'warning'
                })
                return
            }
            if(this.isChecked) {
                this.dialogVisible = true
            } else {
                Message({
                    message: '请勾选阅读并同意',
                    type: 'warning'
                })
                return
            }
            this.$refs.slideblock.reset();
            
        },
        handleServerClick() {
            this.$router.push({
                path: '/user/serviceAgreement'
            })
        }  
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.content{
      background-color: #fff !important;
    }
.register-container{
    display: flex;
    align-items: center;
    justify-content: center;
    .register-wrapper{
        width: 20rem;
        height: auto;
        margin-top: 10rem;
        .register-tabs{
            display: flex;
            flex-direction: row;
            justify-content: center;
            .tab{
                font-size: 26px;
                color: #333333;
                font-weight: 600;
            }
            .tab:hover{
                cursor: pointer;
            }
            .active{
                color: #333333;
            }
        }
        .phoneNum-wrapper{
            .num{
                margin-top: 33px;
                height: 44px;
                background: #f5f5f5;
                display: flex;
                flex-direction: row;
                align-items: center;
                border-radius: 8px;
                span{
                    display: inline-block;
                    padding: 0.8rem 0.93rem;
                    position: relative;
                    margin-right: 10px;
                }
                span::after{
                    position: absolute;
                    content: "";
                    width: 1px;
                    height: 20px;
                    background: #D6D6D6;
                    top: 14px;
                    right: 0;
                }
                input{
                    border: none;
                    background: #f5f5f5;
                    flex: 1;
                    padding-right: 5px;
                    width: 100%;
                }
            }
            .agreement-wrapper{
                margin-top: 17px;
                color: #939393;
                .link{
                    color: #4859D8;
                    margin: 0px 2px;
                }
                .link:hover{
                    cursor: pointer;
                }
            }
        }
        .btn-wrapper{
            height: 50px;
            margin-top: 56px;
            width: 100%;
            button{
                height: 100%;
                border: none;
                width: 100%;
                height: 100%;
                border-radius: 25px;
                background: #4859D8;
                color: #ffffff;
                font-size: 16px;
            }
            button:hover{
                background: #5D6FD5;
            }
        }

    }
    .dialog-wrapper{
        @media (max-width: 500px) {
            /deep/.el-dialog{
                width: 100px!important;
                .el-dialog__header{
                    width: 100px!important;
                }
                .el-dialog__body{
                    width: 80px!important;
                }
            }
        }
        
        /deep/ .el-dialog__body{
            height: 280px;
            .verify-wrapper{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 80px;
            }
        }
    }
    /deep/.el-dialog-wrapper{
        @media (max-width: 500px) {
             width: 200px!important;
        }
    }
}
</style>
<style rel="stylesheet/scss" lang="scss">
.register-container {
    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner  {
        background-color: #4859D8;
        border-color: #4859D8;
    }
    .el-checkbox__input.is-focus .el-checkbox__inner {
        border-color: #4859D8;
    }
}
</style>