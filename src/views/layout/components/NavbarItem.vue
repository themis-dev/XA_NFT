<template>
  <ul class="navbar-nav header-navbar">
    <li
      class="nav-item has-menu menu-initialized"
      :class="[
        item.opened && index === activeIndex ? 'active menu-opened' : ''
      ]"
      v-for="(item, index) in navData"
      :key="index"
      @click="handleClick(index)"
      @mouseleave="hover(0)"
      @mouseenter="hover(index)"
    >
      <a
        v-if="item.subTitle"
        class=" nav-link-toggle nav-link header-nav-link "
        :href="item.path"
        >{{ item.title }}</a
      >
      <a class="nav-link header-nav-link " :href="item.path" v-else>{{ item.title }}</a>
      <ul
        v-if="item.subTitle"
        :class="[subTitleIndex === index ? 'slideInUp' : 'fadeOut']"
        class=" hb-mobile-state menu hb-header-sub-menu  hb-header-sub-menu--spacer animated"
        :style="[
          { display: subTitleIndex === index ? 'block' : 'none' },
          { minWidth: '140px' },
          { top: '100%' }
        ]"
      >
        <li
          v-for="(v, i) in item.subTitle"
          v-if="v.title !== 'divider'"
          :key="i"
        >
          <a :href="v.path" class="nav-link hb-header-sub-menu-nav-link"
            >{{ v.title }} <span v-if="v.icon" v-html="v.icon"></span
          ></a>
        </li>
        <li v-else class="dropdown-divider"></li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavbarItem',
  components: {},
  props: {
    NavBarFlag: Boolean
  },
  computed: {},
  data() {
    return {
      value: this.$store.getters.nightMode,
      activeIndex: 0,
      subTitleIndex: 0,
      activeLang: false,
      navData: [
        {
          title: '首页',
          path: '/home'
        },
        {
          title: '交易市场',
          path: '/market'
        },
        {
          title: '我的',
          path: '/mine/user'
        }
      ],
    };
  },
  watch: {
    NavBarFlag(curVal, oldVal) {
      if (!curVal) {
        this.navData.map((v, i) => {
          v.opened = false;
        });
      }
    }
  },
  created() {
    const language = navigator.language || navigator.userLanguage;
    const lang = this.$cookies.get('CultureInfo') || language;
    this.currentLang = lang !== 'zh-CN' ? 'English' : '简体中文'
  },
  methods: {
    handleClick(index) {
      this.activeIndex = index;
      this.navData.map((v, i) => {
        if (i === index) {
          v.opened = !v.opened;
        } else {
          v.opened = false;
        }
      });
      this.subTitleIndex = this.navData[index].opened ? index : '';
    },
    hover(index) {
      this.subTitleIndex = index;
    },
    handleLanguageClick(v) {
      this.currentLang = v.name;
      const lang = v.id === 1 ? 'zh-CN' : 'en';
      if (lang === this.$cookies.get('CultureInfo')) {
        return
      }
      this.$router.go(0);
      this.$cookies.set('CultureInfo', lang);
      this.$i18n.locale = lang;
    },
    handleLanguageShow() {
      this.activeLang = !this.activeLang;
      this.navData.map((v, i) => {
        v.opened = false;
      })
    },
    hoverLanguageShow(flag) {
      this.activeLang = flag;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.brower-header__box {
  position: relative;
  z-index: 999;
  background-color: transparent;
  -webkit-box-shadow: 0 1px 10px rgba(151, 164, 175, 0.1);
  box-shadow: 0 1px 10px rgba(151, 164, 175, 0.1);
  padding: 0.25rem 0;
  .navbar {
    padding: 0.25rem 0;
    padding-top: 0;
    padding-bottom: 0;
  }
}
.nav-link.header-nav-link {
    font-size: 1rem;
    font-family: MiSans;
    font-weight: 500;
    color: #2B2B2B;
    &:hover {
      color: #4859D8;
    }
  }
@media (min-width: 768px) {
  .navbar-expand-md .header-navbar .hb-header-sub-menu {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    width: max-content;
    border-top: none;
    border-bottom-right-radius: 0.35rem;
    border-bottom-left-radius: 0.35rem;
    -webkit-box-shadow: 0 8px 20px rgba(52, 152, 219, 0.075);
    box-shadow: 0 8px 20px rgba(52, 152, 219, 0.075);
    white-space: nowrap;
    left: 1rem;
    top: 80%;
    li:hover {
      background: #eff1f5;
    }
  }
  .navbar-expand-md .header-navbar .hb-header-sub-menu-nav-link {
    padding-right: 0.75rem;
    padding-left: 0.75rem;
  }
  .app-main {
    .navbar-expand-md .header-navbar .hb-header-sub-menu {
      li:hover {
        background: #37415c;
        a {
          color: #fff;
        }
      }
    }
  }
  
}
</style>
