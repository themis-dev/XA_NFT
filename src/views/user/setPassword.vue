<template>
    <div class="setPassword-container">
        <div class="setPassword-wrapper">
            <div class="setPassword-tabs">
                <div class="tab">请设置密码</div>
            </div>
            <div class="phoneNum-wrapper">
                <div class="num">
                    <input placeholder="8-16位，可包含字母大小写、数字、下划线"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'setPassword',
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
.setPassword-container{
    display: flex;
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
                }
            }
        }

    }
}
</style>