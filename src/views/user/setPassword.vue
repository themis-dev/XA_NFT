<template>
    <div class="setPassword-container">
        <div class="setPassword-wrapper">
            <div class="setPassword-tabs">
                <div class="tab">请设置昵称</div>
            </div>
            <div class="phoneNum-wrapper">
                <div class="num">
                    <input v-model="nickName" placeholder="请输入昵称"/>
                </div>
            </div>
            <div class="setPassword-tabs">
                <div class="tab">请设置密码</div>
            </div>
            <div class="phoneNum-wrapper">
                <div class="num">
                    <input v-model="password" placeholder="8-16位，可包含字母大小写、数字、下划线"/>
                </div>
            </div>
        </div>
        <div class="btn-wrapper">
            <button type="primary" @click="handleSubmitClick">完成</button>
        </div>
    </div>
</template>
<script>
import { registerUser } from '@/api/user'

export default {
    name: 'setPassword',
    data () {
        return {
            phoneNumber: this.$route.query.phoneNumber,
            captcha: this.$route.query.captcha,
            nickName: '',
            password: ''
        }
    },
    mounted() {
        console.log(this.phoneNumber, this.captcha)
        // const div = document.createElement('div')
        // div.innerHTML = result
        // document.body.appendChild(div)
        // document.forms[0].acceptCharset = 'GBK'
        // document.forms[0].submit()
    },
    methods: {
         hanldeBackClick() {
             this.$router.go(-1)
         },
         handleSubmitClick() {
             if(!this.nickName) {
                 this.$message({
                     message: '请输入昵称',
                     type: 'warning'
                 })
             }
             if(!this.password) {
                 this.$message({
                     message: '请输入密码',
                     type: 'warning'
                 })
             }
             let reqObj = {
                 phoneNumber: this.phoneNumber,
                 captcha: this.captcha,
                 nickName: this.nickName,
                 password: this.password
             }
             registerUser(reqObj).then(res => {
                 console.log(res)
                 if(res.status == 1) {
                     this.$message({
                         message: res.message,
                        type: 'success'
                     })
                     this.$router.push({
                         path: '/user/login'
                     })
                }
             }).catch(error => {
                console.log(error)
            })
         }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.setPassword-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .setPassword-wrapper{
        width: 20rem;
        height: auto;
        margin-top: 10rem;
        .setPassword-tabs{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            margin-top: 20px;
            .tab{
                font-size: 26px;
                color: #333333;
                font-weight: 600;
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
                    padding-left: 10px;
                }
            }
        }

    }
    .btn-wrapper{
        height: 50px;
        margin-top: 56px;
        width: 20rem;
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
</style>