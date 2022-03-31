<template>
    <div class="registerCode-container">
        <div class="registerCode-wrapper">
            <div class="registerCode-tabs">
                <div class="tab"><i class="el-icon-arrow-left" @click="hanldeBackClick"></i>请输入验证码</div>
            </div>
            <div class="phoneNum-wrapper">
                <div class="num">
                    <!-- <input :class="{ 'active': isFirstActive }" ref="first" v-model="firstValue" maxlength="1" oninput = "value = value.replace(/[^0-9]{1}/g,'')"/>
                    <input :class="{ 'active': isSecondActive }" ref="second" v-model="secondValue" maxlength="1" oninput = "value = value.replace(/[^0-9]{1}/g,'')" @keyup.delete="handleSecondDeleteClick"/>
                    <input :class="{ 'active': isThirdActive }" ref="third" v-model="thirdValue" maxlength="1" oninput = "value = value.replace(/[^0-9]{1}/g,'')" @keyup.delete="handleThirdDeleteClick"/>
                    <input :class="{ 'active': isFourthActive }" ref="fourth" v-model="fourthValue" maxlength="1" oninput = "value = value.replace(/[^0-9]{1}/g,'')" @keyup.delete="handleFourthDeleteClick"/>
                    <input :class="{ 'active': isFifthActive }" ref="fifth" v-model="fifthValue" maxlength="1" oninput = "value = value.replace(/[^0-9]{1}/g,'')" @keyup.delete="handleFifthDeleteClick"/>
                    <input :class="{ 'active': isSixthActive }" ref="sixth" v-model="sixthValue" maxlength="1" oninput = "value = value.replace(/[^0-9]{1}/g,'')" @keyup.delete="handleSixthDeleteClick"/> -->
                    <input v-model="sendCodeValue" type="number" @input="handleChange" maxlength="6" pattern="[0-9]*"/>
                </div>
                <div class="resend-wrapper">{{ countTime }}s后重新获取验证码</div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'registerCode',
    data () {
        return {
            isFirstActive: false,
            isSecondActive: false,
            isThirdActive: false,
            isFourthActive: false,
            isFifthActive: false,
            isSixthActive: false,
            firstValue: '',
            secondValue: '',
            thirdValue: '',
            fourthValue: '',
            fifthValue: '',
            sixthValue: '',
            phoneNumber: this.$route.query.phoneNumber,
            countTime: 60,
            countDate: null,
            isShowSend: true,
            sendCodeValue: ''
        }
    },
    // watch: {
    //     firstValue(newVal) {
    //         if(newVal) {
    //             this.isFirstActive = true
    //             this.$refs.second.focus()
    //         } else {
    //             this.isFirstActive = false
    //         }
    //     },
    //     secondValue(newVal) {
    //         if(newVal) {
    //             this.isSecondActive = true
    //             this.$refs.third.focus()
    //         } else {
    //             this.isSecondActive = false
    //         }
    //     },
    //     thirdValue(newVal) {
    //         if(newVal) {
    //             this.isThirdActive = true
    //             this.$refs.fourth.focus()
    //         } else {
    //             this.isThirdActive = false
    //         }
    //     },
    //     fourthValue(newVal) {
    //         if(newVal) {
    //             this.isFourthActive = true
    //             this.$refs.fifth.focus()
    //         } else {
    //             this.isFourthActive = false
    //         }
    //     },
    //     fifthValue(newVal) {
    //         if(newVal) {
    //             this.isFifthActive = true
    //             this.$refs.sixth.focus()
    //         } else {
    //             this.isFifthActive = false
    //         }
    //     },
    //     sixthValue(newVal) {
    //         if(newVal) {
    //             this.isSixthActive = true
    //             if(this.firstValue && this.secondValue && this.thirdValue && this.fourthValue && this.fifthValue && this.sixthValue) {
    //                 this.$router.push({
    //                     path: '/user/setPassword',
    //                     query: {
    //                         phoneNumber: this.phoneNumber,
    //                         captcha: `${this.firstValue}${this.secondValue}${this.thirdValue}${this.fourthValue}${this.fifthValue}${this.sixthValue}`
    //                     }
    //                 })
    //             }
    //         } else {
    //             this.isSixthActive = false
    //         }
    //     }
    // },
    mounted () {
        this.countDate = setInterval(() => {
            this.countTime--
            if(this.countTime == 0) {
                clearInterval(this.countDate)
                this.countTime = 60
                return
            }
        }, 1000)
    },
    methods: {
         hanldeBackClick() {
             this.$router.go(-1)
         },
         handleChange(e) {
            console.log(e.target.value)
            e.target.value = e.target.value.replace(/[^0-9]{6}/g,'')
            if(e.target.value.length > 6) {
                this.sendCodeValue = e.target.value.slice(0, 6)
            }
            if(this.sendCodeValue.length == 6) {
                this.$router.push({
                    path: '/user/setPassword',
                    query: {
                        phoneNumber: this.phoneNumber,
                        captcha: this.sendCodeValue
                    }
                })
                this.sendCodeValue = ''
            }
         },
         handleFirstFocus(e) {
             console.log(e.target.value)
             if(e.target.value) {
                this.isActive = true
             }
         },
         handleSecondDeleteClick() {
             this.$refs.first.focus()
         },
         handleThirdDeleteClick() {
             this.$refs.second.focus()
         },
         handleFourthDeleteClick() {
             this.$refs.third.focus()
         },
         handleFifthDeleteClick() {
             this.$refs.fourth.focus()
         },
         handleSixthDeleteClick() {
             this.$refs.fifth.focus()
         }
    },
    beforeDestroy() {
        clearInterval(this.countDate)
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
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                border-radius: 8px;
                input{
                    width: 320px;
                    height: 44px;
                    border: none;
                    background: #f5f5f5;
                    // margin-right: 0.8rem;
                    border-radius: 8px;
                    font-size: 16px;
                    padding-left: 10px;
                }
                .active{
                    background: #4859D8;
                    color: #FFFFFF;
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