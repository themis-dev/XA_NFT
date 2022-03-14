<template>
    <div class="registerCode-container">
        <div class="registerCode-wrapper">
            <div class="registerCode-tabs">
                <div class="tab"><i class="el-icon-arrow-left" @click="hanldeBackClick"></i>请输入验证码</div>
            </div>
            <div class="phoneNum-wrapper">
                <div class="num">
                    <span>+86</span>
                    <input placeholder="请输入手机号码"/>
                </div>
                <div class="resend-wrapper">0s后重新获取验证码</div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'registerCode',
    data () {
        return {
            
        }
    },
    methods: {
         hanldeBackClick() {
             this.$router.go(-1)
         }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.registerCode-container{
    display: flex;
    align-items: center;
    justify-content: center;
    .registerCode-wrapper{
        width: 20rem;
        height: auto;
        margin-top: 10rem;
        .registerCode-tabs{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            .tab{
                font-size: 26px;
                color: #333333;
                font-weight: 600;
                .el-icon-arrow-left:hover{
                    cursor: pointer;
                }
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
            .resend-wrapper{
                margin-top: 17px;
                color: #666666;
                text-align: right;
            }
        }

    }
}
</style>