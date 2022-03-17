<template>
    <div class="success-container">
        <img src="../../images/success.png"/>
        <span>购买成功</span>
        <button @click="handleCheckClick">查看藏品</button>
    </div>
</template>
<script>
export default {
    data () {
        return {
        
        }
    },
    methods: {
        handleCheckClick() {
            this.$router.push({
                path: '/mine/collection'
            })
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.success-container{
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 172px auto 0;
    img{
        width: 80px;
        height: 80px;
    }
    span{
        margin-top: 51px;
        font-size: 32px;
        font-weight: 600;
        line-height: 42px;
        color: #333333;
    }
    button{
        margin-top: 39px;
        border: none;
        width: 163px;
        height: 39px;
        border-radius: 25px;
        background: #4859D8;
        color: #ffffff;
        font-size: 16px;
    }
    button:hover{
        background: #5D6FD5;
    }
}
</style>