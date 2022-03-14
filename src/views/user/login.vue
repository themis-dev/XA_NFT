<template>
    <div class="login-container">
        <div class="login-wrapper">
            <div class="login-tabs">
                <div class="tab" :class="(activeName == 1) ? 'active' : ''" @click="hanldeLoginClick(1)">密码登录</div>
                <div class="tab" :class="(activeName == 2) ? 'active' : ''" @click="hanldeLoginClick(2)">验证码登录</div>
            </div>
            <div v-if="activeName == 1" class="phoneNum-wrapper">
                <div class="num">
                    <span>+86</span>
                    <input placeholder="请输入手机号码"/>
                </div>
                <div class="password">
                    <input placeholder="请输入密码"/>
                    <span>
                        <i class="el-icon-view"></i>
                    </span>
                </div>
            </div>
            <div v-else class="code-wrapper">
                <div class="num">
                    <span>+86</span>
                    <input placeholder="请输入手机号码"/>
                </div>
                <div class="password">
                    <input placeholder="请输入验证码"/>
                    <span>
                        发送验证码
                    </span>
                </div>
            </div>
            <div class="btn-wrapper">
                <button type="primary">登录</button>
            </div>
            <div class="note-wrapper">
                <span @click="handleRegisterClick">注册账号</span>
                <span @click="handleForgotClick">忘记密码</span>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'login',
    data () {
        return {
            activeName: 1,
        }
    },
    methods: {
        hanldeLoginClick(value) {
            if(value == 1) {
                this.activeName = 1
            } else if(value == 2) {
                this.activeName = 2
            }
        },
        handleRegisterClick() {
            this.$router.push({
                path: '/user/register'
            })
        },
        handleForgotClick() {
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.login-container{
    display: flex;
    align-items: center;
    justify-content: center;
    .login-wrapper{
        width: 20rem;
        height: auto;
        margin-top: 10rem;
        .login-tabs{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .tab{
                font-size: 26px;
                color: #999999;
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
            .password {
                margin-top: 34px;
                height: 44px;
                background: #f5f5f5;
                display: flex;
                flex-direction: row;
                align-items: center;
                border-radius: 8px;
                input{
                    border: none;
                    flex: 1;
                    background: #f5f5f5;
                    padding-left: 15px;
                }
                span{
                    padding: 13px 15px;
                }
            }
        }
        .code-wrapper{
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
            .password {
                margin-top: 34px;
                height: 44px;
                background: #f5f5f5;
                display: flex;
                flex-direction: row;
                align-items: center;
                border-radius: 8px;
                input{
                    border: none;
                    flex: 1;
                    background: #f5f5f5;
                    padding-left: 15px;
                }
                span{
                    padding: 13px 15px;
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
        .note-wrapper{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 11px;
            color: #4859D8;
            font-size: 14px;
            span:hover{
                cursor: pointer;
            }
        }

    }
}
</style>