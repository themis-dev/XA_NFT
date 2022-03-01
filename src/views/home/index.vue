<template>
  <div class="homePage">
    
  </div>
</template>
<script>
import { getSearch, getNewBlockList, getNewTxList } from '@/api/chains'
import { formatTime, formatDecimal, bigNumberTransform } from '@/utils/index'

export default {
  name: 'home',
  data() {
    return {
      formatTime: formatTime,
      formatDecimal: formatDecimal,
      bigNumberTransform: bigNumberTransform,
      searchData: '',
      blockData: [],
      txData: [],
      home: this.$store.getters.home,
      time: 0,
      timer: null,
      assetSearch: [],
      onLine: window.navigator.onLine
    }
  },
  components: {},
  computed: {},
  mounted() {
    this.getHome()
    this.getData()
    this.timer = setInterval(() => {
      this.getData()
    }, 5000)
    window.addEventListener('online', this.updateOnlineStatus)
    window.addEventListener('offline', this.updateOnlineStatus)
  },
  methods: {
    updateOnlineStatus(e) {
      const { type } = e
      this.onLine = type === 'online'
    },
    getHome() {
      this.$store.dispatch('GetHomeChainOverview').then((res) => {
        this.home = res
      })
    },
    getData() {
      this.getBlockListData()
      this.getTxListData()
    },
    handleSearchText() {
      if (this.searchData) {
        getSearch(this.searchData).then((res) => {
          if (res.status === 1) {
            if (!res.data) {
              this.$router.push({ path: '/404' })
              return
            }
            const length = this.searchData.length
            if (length === 42) {
              this.goAddress(this.searchData)
            }
            if (length === 40) {
              this.goAddress('0x' + this.searchData)
            }
            if (length === 66 || length === 64) {
              const tx = length === 64 ? '0x' + this.searchData : this.searchData;
              if (res.data.type === 0) {
                this.goTxDetail(tx)
              }
              if (res.data.type === 1) {
                this.goblock(tx)
              }
            }
            if (
              this.searchData.substring(0, 2) !== '0x' &&
              !isNaN(Number(this.searchData)) &&
              this.searchData
            ) {
              this.goblock(this.searchData)
            }
            if (Array.isArray(res.data) && res.data.length > 0) {
              this.goToken(res.data[0].address)
            }
          }
        })
      }
    },
    getBlockListData() {
      getNewBlockList(10).then((res) => {
        if (res.status === 1) {
          this.blockData = res.data
          this.time =
            res.data && res.data.length > 0
              ? (res.data[0].blockTime -
                  res.data[res.data.length - 1].blockTime) /
                (res.data.length - 1)
              : 0
        }
      })
    },
    getTxListData() {
      getNewTxList(10).then((res) => {
        if (res.status === 1) {
          this.txData = res.data
        }
      })
    },
    goAddress(address) {
      this.$router.push({ path: '/address/' + address })
    },
    goTxDetail(tx) {
      this.$router.push({ path: '/tx/' + tx })
    },
    goblock(id) {
      this.$router.push({ path: '/block/' + id })
    },
    goTx() {
      this.$router.push({ path: '/txs' })
    },
    goBlocks() {
      this.$router.push({ path: '/blocks' })
    },
    secTime(item, index) {
      const data = index > 5 ? index : index + 1
      return (item.blockTime - this.blockData[data].blockTime) / 1000
    },
    goToken(address) {
      this.$router.push({ path: '/token/' + address })
      this.assetSearch = []
      this.searchData = ''
    },
    searchFuc(e) {
      if (!e.target.value) {
        this.assetSearch = []
        return
      }
      const data = e.target.value.trim()
      getSearch(data).then((res) => {
        if (res.status === 1) {
          if (!res.data) {
            this.$router.push({ path: '/404' })
            return
          }
          this.assetSearch = res.data
        } else {
          this.assetSearch = []
        }
      })
    },

    cardIconClass(type) {
      if (!this.onLine) {
        return 'offLine'
      }
      if (this[`${type}Show`]) {
        return 'loading'
      }
      if (this[`${type}Data`].length === 0) {
        return 'noData'
      }
      return ''
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
    window.removeEventListener('online', this.updateOnlineStatus)
    window.removeEventListener('offline', this.updateOnlineStatus)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.card-h {
  height: 840px;
}
.homePage {
  .home-top {
    padding-top: 3.25rem;
    padding-bottom: 4.5rem;
  }
  .h4 {
    color: #ffffff;
    font-size: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
  }
  .ui-autocomplete {
    max-height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 1px;
    z-index: 91199;
    width: 100%;
  }
  .u-label--badge-in {
    padding-left: 0.5rem;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .card-header-title {
    font-size: 18px;
  }
  .ui-widget.ui-widget-content {
    border: 1px solid #c5c5c5;
  }
  .ui-widget-content {
    border: 1px solid #ddd;
    background: #fff;
    color: #333;
  }
  .ui-widget {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
  }
  .ui-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    display: block;
    outline: 0;
  }
  .left-content {
    .u-label--badge-in {
      line-height: 1.2;
    }
    .danwei {
      width: 40px;
      display: inline-block;
      text-align: left;
    }
    .add {
      position: absolute;
      top: 0.1rem;
      left: 0;
      font-size: 22px;
      z-index: 9999;
    }
  }
  .total-card {
    font-weight: 500;
    .item {
      margin-top: 6px;
    }
  }
  .search-box {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -ms-flex-align: stretch;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    border-radius: 80px;
    height: 64px;
    background-color: #fff !important;
    box-shadow: 0 0.5rem 1.2rem rgba(189, 197, 209, 0.2);
    select {
      position: absolute;
      max-width: 110px;
      height: 32px;
      left: 16px;
      top: 16px;
      border: 1px solid #cbd2da;
      box-sizing: border-box;
      border-radius: 80px;
      padding-top: 0;
      padding-bottom: 0;
    }
    option {
      margin-top: 20px;
    }
    input {
      position: absolute;
      height: 100%;
      width: calc(100% - 16px);
      border-radius: 0;
      margin-top: 20px;
      margin-left: 0.8rem;
      height: 24px;
      border-left: #cbd2da solid 1px !important;
      padding: 0 1rem;
      font-size: 14px;
      background: rgba(0, 0, 0, 0);
      &:focus {
        box-shadow: none;
      }
    }
    @media (max-width: 767.98px) {
      input {
        border-left: none !important;
      }
    }
    .btn {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      padding: 0;
      line-height: 40px;
      background-color: #3f7fff !important;
      border-color: #3f7fff !important;
      font-size: 20px;
      margin-top: 12px;
      margin-right: 12px;
      &:hover {
        background-color: #5991ff !important;
        border-color: #5991ff !important;
      }
    }
  }

  .content {
    margin-top: 1.5rem;
    padding-bottom: 2rem;
    background-color: transparent;
    margin-bottom: 3rem;
    .text-uppercase {
      margin-bottom: 0;
    }
  }
  .home {
    background-color: #233370;
    background-image: url(../../images/headright.svg),
      url(../../images/headleft.svg);
    background-repeat: no-repeat;
    background-position: calc(50% + 430px) bottom, calc(50% - 650px) 10px;
  }
  .el-button {
    padding: 0;
    line-height: initial;
  }
  .el-button + .el-button {
    margin: 0;
  }
  .card-top-item {
    display: flex;
  }
  .hr-divider {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-top-style: dashed;
  }
  .avatar {
    width: 48px;
    height: 48px;
    margin-right: 16px;
  }

  .card-divider:after {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    border-right: 1px solid #e7eaf3;
    border-right-style: dashed;
    content: '';
    opacity: 1;
  }
  .text-dark {
    font-size: 18px;
  }
  .card-footer {
    border-top: none;
    .btn {
      padding-top: 0.8rem;
      padding-bottom: 0.8rem;
      font-size: 14px;
      font-weight: 500;
    }
  }
  .listline {
    margin-bottom: 25px;
    .media-body {
      white-space: nowrap;
    }
  }
  .hash-tag {
    max-width: 220px;
  }
  .hash-tag--xs {
    max-width: 125px;
  }
  .htlabel {
    width: 100px;
    display: flex;
    padding-left: 0;
    padding-right: 0;
    .htnum {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-left: 3px;
      text-align: right;
    }
    .htname {
      width: 2em;
      margin-right: 5px;
    }
  }
  @media (max-width: 991.98px) {
    .card-divider:after {
      display: none;
    }
  }
}
.noData {
  background: url(../../images/nodata.svg) no-repeat center 38%;
  background-size: 50% auto;
}
.offLine {
  background: url(../../images/offline.svg) no-repeat center 38%;
  background-size: 50% auto;
}
.loading {
  background: url(../../images/loading.svg) no-repeat center 38%;
  background-size: 50% auto;
}
.app-main .card-divider:after {
  opacity: 0.2;
}
.app-main {
  .ui-autocomplete {
    background-color: #252525 !important;
    border-color: #013558 !important;
  }
  .search-box {
    background-color: #20242e !important;
  }
  .noData {
    background-image: url("../../images/noData2.svg");
  }
  .offLine {
    background-image: url("../../images/offLine2.svg");
  }
}
</style>
