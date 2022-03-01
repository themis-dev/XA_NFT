<template>
  <header class="browser-header">
    <div class="brower-header__box">
      <div class="container">
        <nav class="navbar navbar-expand-md">
          <div>
            <a class="navbar-brand text-dark font-weight-bolder" href="/">
              <img height="24" :src="logosrc()" alt="Huobi Logo" />
              <span class="title">幻安</span>
              <span class="title-meta">雄安官方数字藏品NFT平台</span>
            </a>
          </div>
          <div>
            <button
              type="button"
              class="hb-hamburger btn navbar-toggler"
              @click="showNavBar"
              aria-label="Toggle navigation"
              aria-expanded="false"
              aria-controls="navBar"
              data-toggle="collapse"
              data-target="#navBar"
            >
              <span class="hb-hamburger__box">
                <span class="hb-hamburger__inner"></span>
              </span>
            </button>
          </div>
          <div style="width: 100%">
            <div id="navBar" class="collapse navbar-collapse">
              <NavbarItem :NavBarFlag="navBarFlag" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import NavbarItem from './NavbarItem.vue'

export default {
  components: {
    NavbarItem
  },
  computed: {},
  data() {
    return {
      navBarFlag: false,
      showTestLogo: process.env.NETWORK !== 'mainnet'
    }
  },
  created() {},
  mounted() {},
  methods: {
    showNavBar() {
      this.navBarFlag = !this.navBarFlag
    },
    logosrc() {
      const nightMode = this.$store.getters.nightMode
      return require(`../../../images/logo${nightMode ? '2' : ''}.png`)
    },
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.brower-header__box {
  position: relative;
  z-index: 999;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  padding: 1rem 0;
  .navbar {
    padding: 0.3rem 0;
    padding-top: 0;
    padding-bottom: 0;
    .navbar-brand {
      display: flex;
      align-items: center;
      .title {
        margin-left: 1rem;
        font-size: 24px;
        font-weight: 800;
        line-height: 32px;
        color: #333333;
        opacity: 1;
      }
      .title-meta {
        margin-left: 1.2rem;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        color: #999999;
      }
    }
  }
}
</style>
