﻿<template>
  <footer class="footer" id="footer-wrapper">
    <div class="container">
      <div class="left">
        <img src="../../../images/footer-icon1.png"/>
        <span class="title">幻安</span>
        <span class="desc">雄安数字纪念品</span>
      </div>
      <div class="right">
        <div>
          <img/>
          <span>雄安新区未来工业设计研究院</span>
        </div>
        <div class="right-footer">
          <img/>
          <span>雄安新区区块链实验室</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    components: {},
    computed: {
      ...mapGetters([
        'nightMode'
      ])
    },
    data() {
      return {
        input1: '',
        value: this.$store.getters.nightMode,
        toggleFlag: false,
        mobile: false,
        activeIndex: 0,
        subTitleIndex: 0,
        isRouter: this.$store.state.chains.currentRouter == '/market/collectionActivity' ? true : false
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      handleClick(index) {
        this.activeIndex = index
      },
      hover(index) {
        this.subTitleIndex = index
      },
      onSwitchChange() {
        const nightMode = !this.$store.getters.nightMode;
        this.$store.dispatch('SwitchMode', nightMode).then(() => {

        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" >
  .footer{
    height: 148px;
    background: #BCBCBC;
    .container{
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .left{
        display: flex;
        flex-direction: row;
        align-items: center;
        img{
          width: 26.82px;
          height: 41px;
          vertical-align: middle;
        }
        .title{
          font-size: 24px;
          font-family: MiSans;
          font-weight: 800;
          color: #FFFFFF;
          margin-left: 21px;
        }
        .desc{
          display: none;
          font-size: 16px;
          // font-family: MiSans;
          font-weight: 400;
          color: #FFFFFF;
          margin-left: 24px;
        }
      }
      .right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        .right-footer{
          margin-top: 17px;
        }
      }
    }

    @media (min-width: 991.98px) {
      .left{
        display: flex;
        flex-direction: row;
        align-items: center;
        img{
          width: 26.82px;
          height: 41px;
          vertical-align: middle;
        }
        .title{
          font-size: 24px;
          font-family: MiSans;
          font-weight: 800;
          color: #FFFFFF;
          margin-left: 21px;
        }
        .desc{
          display: inline-block!important;
          font-size: 16px;
          font-family: MiSans;
          font-weight: 400;
          color: #FFFFFF;
          margin-left: 24px;
        }
      }
    }
  }
</style>
