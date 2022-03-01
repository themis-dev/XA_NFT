﻿<template>
  <footer class="footer">
    <div class="container">
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
        subTitleIndex: 0
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
    background: #BCBCBC
  }
</style>
