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
                    <span style="margin-left: 2px;">阅读并同意<span class="link">服务协议</span>和<span class="link">隐私协议</span></span>
                </div>
            </div>
            <div class="btn-wrapper">
                <button type="primary" @click="handleNextClick">下一步</button>
            </div>
        </div>
    </div>
</template>
<script>
import { getCaptcha } from '@/api/user'

export default {
    name: 'register',
    data () {
        return {
            phoneNumber: '',
            isChecked: false
        }
    },
    methods: {
        handleCheckChange(value) {
            console.log(value)
            this.isChecked = value
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
                let reqObj = {
                    index: 1,
                    phoneNumber: this.phoneNumber
                }
                getCaptcha(reqObj).then(res => {
                    this.$router.push({
                        path: '/user/registerCode',
                        query: {
                            phoneNumber: this.phoneNumber
                        }
                    })
                })
            } else {
                this.$message({
                    message: '请勾选阅读并同意',
                    type: 'warning'
                })
                return
            }
        }   
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
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
                    padding: 13px 15px;
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