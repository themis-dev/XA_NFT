<template>
  <div class="homePage-container">
    <div class="recommend-wrapper">
      <div class="recommend-info">
        <el-row :gutter="24" justify="center">
          <el-col :xs="24" :md="12" :lg="12">
            <div class="recommend item">
              <span class="title">幻安数字藏品</span>
              <span class="main">雄安区块链数字藏品NFT平台</span>
              <span class="desc">数字藏品是使用雄安链的区块链技术进行唯一标识的经数字化的特定作品、艺术品和商品，包括但不限于数字画作、图片、音乐、视频、3D模型等各种形式。数字藏品为虚拟数字商品，而非实物，一经售出，不支持退换。</span>
              <div class="btn-wrapper">
                <button class="explore" @click="handleExploreClick">探索</button>
                <button @click="handleRegisterClick">注册</button>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :md="12" :lg="12">
            <div class="recommend">
              <div class="mark">
                <span class="title">雄安五周年纪念系列</span>
                <span class="desc">雄安五周年纪念品，以白洋淀生态和未来科技创新为思维点，创作了10件代表雄安新区特色的数字艺术作品，分别由10位不同领域的数字艺术家创作而成。内容丰富，类型多样，书法、绘画、影视、数字手办、音乐以及动画等等</span>
                <div class="check">
                  <button class="btn" @click="handleMoreClick">查看</button>
                  <!-- <span class="price">￥ 19.9<span>起</span></span> -->
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="platform-wrapper">
      <div class="platform-info">
        <div class="title">
          <span class="sub-title">雄安官方数字藏品NFT平台</span>
          <span class="desc">通过区块链智能合约进行链上存证、链上确权、链上交易，真实可信</span>
        </div>
        <el-row :gutter="24" justify="center">
          <el-col :xs="24" :md="8" :lg="8">
            <div class="series1 plarform-series">
              <div class="series-wrapper">
                <span class="title">白洋淀风景油画系列</span>
                <span class="desc">作为数字藏品的收藏家，你拥有每个数字藏品背后对应的特定作品、艺术品和商品的单个数字复制品，不仅可以观赏藏品、享受收藏的美好体验，还可以与好友分享收藏见解和快乐。</span>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :md="8" :lg="8">
            <div class="series2 plarform-series">
              <div class="series-wrapper">
                <span class="title">雄安莲花山玉石系列</span>
                <span class="desc">作为数字藏品的收藏家，你拥有每个数字藏品背后对应的特定作品、艺术品和商品的单个数字复制品，不仅可以观赏藏品、享受收藏的美好体验，还可以与好友分享收藏见解和快乐。</span>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :md="8" :lg="8">
            <div class="series3 plarform-series">
              <div class="series-wrapper">
                <span class="title">雄安五周年纪念品活动</span>
                <span class="desc">作为数字藏品的收藏家，你拥有每个数字藏品背后对应的特定作品、艺术品和商品的单个数字复制品，不仅可以观赏藏品、享受收藏的美好体验，还可以与好友分享收藏见解和快乐。</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="plarform-btn">
          <button class="btn" @click="handleMoreClick">查看更多</button>
        </div>
        <div class="plarform-left">
          <img src="../../images/plarform-left.png"/>
        </div>
        <div class="plarform-right">
          <img src="../../images/plarform-right.png"/>
        </div>
      </div>
    </div>

    <div class="value-wrapper">
      <div class="value-info">
        <div class="title">
          <span class="sub-title">数字艺术藏品价值</span>
          <span class="desc">数字藏品具有唯一性，是因为它们基于区块链技术，从诞生起就与特定的作品、艺术品和商品建立唯一的映射关系，每个数字藏品都具有独一无二的链上序列号，可以作为数字藏品在特定区块链上对应且唯一的权利证明。</span>
        </div>
        <el-row :gutter="24" justify="center">
          <el-col :xs="8" :md="4" :lg="4">
            <div class="series1 value-series">
              <div class="series-wrapper">
                <span class="title">《雄安赋》</span>
                <span class="desc">雄安五周年纪念系列</span>
              </div>
            </div>
          </el-col>
          <el-col :xs="8" :md="4" :lg="4">
            <div class="series2 value-series">
              <div class="series-wrapper">
                <span class="title">龙蛋</span>
                <span class="desc">未来都市系列</span>
              </div>
            </div>
          </el-col>
          <el-col :xs="8" :md="4" :lg="4">
            <div class="series3 value-series">
              <div class="series-wrapper">
                <span class="title">AI人-ORA</span>
                <span class="desc">唐家数字人系列</span>
              </div>
            </div>
          </el-col>
          <el-col :xs="0" :md="4" :lg="4">
            <div class="series4 value-series">
              <div class="series-wrapper">
                <span class="title">欧阳修咏零陵</span>
                <span class="desc">雄安书画作品集</span>
              </div>
            </div>
          </el-col>
          <el-col :xs="0" :md="4" :lg="4">
            <div class="series5 value-series">
              <div class="series-wrapper">
                <span class="title">山行</span>
                <span class="desc">雄安创新音乐人系列</span>
              </div>
            </div>
          </el-col>
          <el-col :xs="0" :md="4" :lg="4">
            <div class="series6 value-series">
              <div class="series-wrapper">
                <span class="title">GT2RS</span>
                <span class="desc">数字跑车系列</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="value-btn">
          <button class="btn" @click="handleMoreClick">查看更多</button>
        </div>
        <div class="value-left">
          <img src="../../images/value-left.png"/>
        </div>
        <div class="value-right">
          <img src="../../images/value-right.png"/>
        </div>
      </div>
    </div>

    <div class="artist-wrapper">
      <div class="artist-info">
        <div class="title">
          <span class="sub-title">数字藏品艺术家纷纷选择幻安</span>
          <span class="desc">区块链技术可以很好地解决传统互联网时代“复制黏贴”无法有效保护知识产权的顽疾，它可以帮助明确权利所有者与使用者之间的关系，这对于尊重数字内容创新和保护知识产权都有非常重要的积极意义。</span>
        </div>
        <div class="artist-list">
          <div class="item">
            <img src="https://5b0988e595225.cdn.sohucs.com/images/20180922/1dd9c8b236464d32ad1426a8f5a1df73.jpeg"/>
            <div class="item-desc">
              <span class="name">刘江</span>
              <span class="desc">西泠印社金石篆刻传承人</span>
              <span class="desc">中国美术学院教授</span>
            </div>
          </div>
          <div class="item">
            <img src="https://5b0988e595225.cdn.sohucs.com/images/20180922/1dd9c8b236464d32ad1426a8f5a1df73.jpeg"/>
            <div class="item-desc">
              <span class="name">刘江</span>
              <span class="desc">西泠印社金石篆刻传承人</span>
              <span class="desc">中国美术学院教授</span>
            </div>
          </div>
          <div class="item">
            <img src="https://5b0988e595225.cdn.sohucs.com/images/20180922/1dd9c8b236464d32ad1426a8f5a1df73.jpeg"/>
            <div class="item-desc">
              <span class="name">刘江</span>
              <span class="desc">西泠印社金石篆刻传承人</span>
              <span class="desc">中国美术学院教授</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'home',
  data() {
    return {
      token: ''
    }
  },
  watch: {
    token(newVal) {
      if(newVal) {
        this.$router.push({
          path: '/'
        })
      }
    }
  },
  components: {},
  computed: {},
  mounted() {
    this.token = this.$store.state.user.token
  },
  methods: {
    handleExploreClick() {
      this.$router.push({
        path: '/market/collectionActivity'
      })
    },
    handleRegisterClick() {
      this.$router.push({
        path: '/user/register'
      })
    },
    handleMoreClick() {
      this.$router.push({
        path: '/market/collectionActivity'
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@media (max-width: 991.98px) {
.homePage-container {
  overflow-y: scroll;
  overflow-x: hidden;
  background: #FFFFFF;
  // 推荐
  .recommend-wrapper{
    width: 100%;
    height: auto;
    margin: 0 auto;
    background: url('../../images/home-bgImage.png') no-repeat;
    background-size: cover;
    .recommend {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .mark {
          background: url('../../images/home-mark.png') no-repeat;
          background-size: 100% 100%;
          width: 21rem;

          margin: 0 auto;
          display: flex;
          flex-direction: column;
          .title{
            font-family: MiSans Semibold;
            display: inline-block;
            font-size: 30px;
            color: #FFB080;
            margin-top: 124px;
            font-weight: 600;
            margin-left: 27px;
          }
          .desc{
            color: #EAEAEA;
            padding-left: 18px;
            padding-right: 18px;
          }
          .check{
            margin-top: 5px;
            padding-bottom: 10px;
            padding-left: 34px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .btn{
              border: none;
              background: linear-gradient(90deg, #EDD9BB 0%, #BE905D 100%);
              border-radius: 26px;
              width: 5rem;
              height: 39px;
              line-height: 15px;
              color: #401306;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .btn:hover{
              cursor: pointer;
            }
            .price{
              font-size: 30px;
              font-weight: 600;
              color: #CFA980;
              text-shadow: 0px 3px 6px rgba(255, 209, 142, 0.34);
              margin-right: 34px;
            }
          }
        }
    }
    .item{
      padding: 2.3rem 1.5rem;
      .title{
        font-size: 40px;
        color: #333333;
        font-weight: 600;
      }
      .main{
        font-size: 24px;
        color: #666666;
        margin-top: 8px;
      }
      .desc{
        font-size: 12px;
        color: #999999;
        margin-top: 19px;
      }
      .btn-wrapper{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 37px;
        button{
          width: 8.18rem;
          height: 2.44rem;
          border: 1px solid #4859D8;
          background: #ffffff;
          border-radius: 25px;
        }
        .explore{
          background: #4859D8;
          color: #FFFFFF;
        }
        .explore:hover{
          background: #5D6FD5;
        }
      }
    }
  }

  .platform-wrapper {
    width: 100%;
    background: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    .platform-info{
      .title{
        display: flex;
        flex-direction: column;
        padding-top: 36px;
        padding-bottom: 30px;
        text-align: center;
        .sub-title{
          font-size: 20px;
          font-weight: 600;
          color: #333333;
        }
        .desc{
          font-size: 14px;
          font-weight: 400;
          color: #999999;
          margin-top: 10px;
          padding-left: 21px;
          padding-right: 21px;
        }
      }
      .plarform-series {
        margin: 0 auto;
        display: flex;
        align-items: flex-end;
        .series-wrapper{
          width: 100%;
          height: 104px;
          background: rgba(31, 31, 31, 0.5);
          display: flex;
          flex-direction: column;
          border-radius: 5px;
          .title{
            width: 21.6rem;
            font-size: 16px;
            font-weight: 600;
            color: #FFFFFF;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 11px;
            padding: 0;
          }
          .desc{
            width: 21.6rem;
            height: 35px;
            color: #FFFFFF;
            padding: 0 0.5rem;
            overflow: hidden;
            margin-top: 16px;
          }
        }
      }
      .series1{
        width: 21.6rem;
        height: 166px;
        background: url('../../images/home-series1.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
      .series2{
        width: 21.6rem;
        height: 166px;
        background: url('../../images/home-series2.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
      .series3{
        width: 21.6rem;
        height: 166px;
        background: url('../../images/home-series3.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
    }
    .plarform-btn{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .btn{
          width: 10.18rem;
          height: 39px;
          border: none;
          background: #FFF079;
          border-radius: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333333;
        }
        .btn:hover{
          cursor: pointer;
        }
      }
    .plarform-left, .plarform-right{
      display: none;
    }
  }


  .value-wrapper {
    width: 100%;
    background: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    .value-info{
      .title{
        display: flex;
        flex-direction: column;
        padding-top: 36px;
        padding-bottom: 30px;
        text-align: center;
        padding: 0 0.5rem;
        margin-top: 50px;
        .sub-title{
          font-size: 20px;
          font-weight: 600;
          color: #333333;
        }
        .desc{
          font-size: 14px;
          font-weight: 400;
          color: #999999;
          margin-top: 21px;
          margin-bottom: 41px;
          padding-left: 18px;
          padding-right: 18px;
        }
      }
      .value-series {
        margin: 0 auto;
        padding: 0;
        display: flex;
        align-items: flex-end;
        .series-wrapper{
          width: 100%;
          height: 104px;
          background: rgba(31, 31, 31, 0.18);
          display: flex;
          flex-direction: column;
          .title{
            width: 100%;
            font-size: 16px;
            font-weight: 600;
            color: #FCF079;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 11px;
            padding: 0;
          }
          .desc{
            width: 100%;
            height: 35px;
            color: #FFFFFF;
            padding: 0 0.5rem;
            margin-top: 16px;
            text-align: center;
          }
        }
      }
      .series1{
        width: 6.8rem;
        height: 293px;
        background: url('../../images/value-icon1.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
      .series2{
        width: 6.8rem;
        height: 293px;
        background: url('../../images/value-icon2.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
      .series3{
        width: 6.8rem;
        height: 293px;
        background: url('../../images/value-icon3.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
      .series4{
        width: 6.8rem;
        height: 293px;
        background: url('../../images/value-icon4.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
      .series5{
        width: 6.8rem;
        height: 293px;
        background: url('../../images/value-icon5.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
      .series6{
        width: 6.8rem;
        height: 293px;
        background: url('../../images/value-icon6.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
    }
    .value-btn{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .btn{
          width: 10.18rem;
          height: 39px;
          border: none;
          background: #E0E4FF;
          border-radius: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333333;
        }
      }
    .value-left, .value-right{
      display: none;
    }
  }

  .artist-wrapper {
    width: 100%;
    background: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding-bottom: 7rem;
    .artist-info{
      .title{
        display: flex;
        flex-direction: column;
        padding-top: 36px;
        padding-bottom: 30px;
        text-align: center;
        .sub-title{
          font-size: 20px;
          font-weight: 600;
          color: #333333;
        }
        .desc{
          font-size: 14px;
          font-weight: 400;
          color: #999999;
          margin-top: 10px;
          padding: 45px 18px 10px 18px;
        }
      }
      .artist-list{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: row wrap;
          padding-bottom: 54px;
          .item{
            width: 16.6rem;
            height: 86px;
            background: #ECECEF;
            margin-bottom: 10px;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            border-radius: 8px;
            img{
              width: 68px;
              height: 68px;
              border-radius: 100%;
              vertical-align: middle;
              border: 1px solid #999;
            }
            .item-desc{
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 21px;
              line-height: 20px;
              .name{
                font-size: 16px;
                color: #666666;
              }
              .desc{
                font-size: 12px;
                color: #8e8e8e;
              }
            }
          }
        }
    }
  }
}
}
@media (min-width: 991.98px) {
  .homePage-container{
    background: #FFFFFF;
    .recommend-wrapper {
      width: 100%;
      height: 415px;
      margin: 0 auto;
      background: url('../../images/home-bgImage.png') no-repeat;
      background-size: cover;
      .recommend-info{
        width: 1089px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .recommend {
          width: 439px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .mark {
            background: url('../../images/home-mark.png') no-repeat;
            background-size: 100% 100%;
            width: 466px;
            height: 320px;
            display: flex;
            flex-direction: column;
            margin-top: 38px;
            margin-left: 150px;
            .title{
              font-family: MiSans Semibold;
              display: inline-block;
              font-size: 30px;
              color: #FFB080;
              margin-top: 124px;
              font-weight: 600;
              margin-left: 34px;
            }
            .desc{
              color: #EAEAEA;
              padding-left: 34px;
              padding-right: 34px;
            }
            .check{
              margin-top: 15px;
              padding-left: 34px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              .btn{
                border: none;
                background: linear-gradient(90deg, #EDD9BB 0%, #BE905D 100%);
                border-radius: 26px;
                width: 5rem;
                height: 39px;
                line-height: 15px;
                color: #401306;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .btn:hover{
                cursor: pointer;
              }
              .price{
                font-size: 30px;
                font-weight: 600;
                color: #CFA980;
                text-shadow: 0px 3px 6px rgba(255, 209, 142, 0.34);
                margin-right: 34px;
              }
            }
          }
        }
        .item{
          padding: 5.3rem 2rem;
          .title{
            font-size: 40px;
            color: #333333;
            font-weight: 600;
          }
          .main{
            font-size: 24px;
            color: #666666;
            margin-top: 8px;
          }
          .desc{
            font-size: 12px;
            color: #999999;
            margin-top: 19px;
          }
          .btn-wrapper{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 37px;
            button{
              width: 10.18rem;
              height: 2.44rem;
              border: 1px solid #4859D8;
              background: #ffffff;
              border-radius: 25px;
            }
            .explore{
              background: #4859D8;
              color: #FFFFFF;
            }
            .explore:hover{
              background: #5D6FD5;
            }
          }
        }
      }
      
    }
    .platform-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      .platform-info{
        width: 1089px;
        height: 100%;
        margin: 0 auto;
        .title{
        display: flex;
        flex-direction: column;
        padding-top: 36px;
        padding-bottom: 30px;
        text-align: center;
        .sub-title{
          font-size: 20px;
          font-weight: 600;
          color: #333333;
        }
        .desc{
          font-size: 14px;
          font-weight: 400;
          color: #999999;
          margin-top: 10px;
          padding-left: 21px;
          padding-right: 21px;
        }
      }
        .plarform-series {
          display: flex;
          flex-direction: column;
          .series-wrapper{
            width: 100%;
            height: 104px;
            margin-top: 211px;
            background: rgba(31, 31, 31, 0.13);
            display: flex;
            flex-direction: column;
            .title{
              width: 100%;
              margin-top: 11px;
              font-size: 16px;
              font-weight: 600;
              color: #FFFFFF;
              padding: 0;
            }
            .desc{
              width: 100%;
              height: 34px;
              color: #FFFFFF;
              margin-top: 16px;
              padding: 0px 19px 0px 20px;
              overflow: hidden;
            }
          }
        }
        .series1 {
          width: 346px;
          height: 315px;
          background: url('../../images/home-series1.png') no-repeat;
          background-size: 100% 100%;
          margin-bottom: 20px;
        }
        .series2 {
          width: 346px;
          height: 315px;
          background: url('../../images/home-series2.png') no-repeat;
          background-size: 100% 100%;
          margin-bottom: 20px;
        }
        .series3 {
          width: 346px;
          height: 315px;
          background: url('../../images/home-series3.png') no-repeat;
          background-size: 100% 100%;
          margin-bottom: 20px;
        }
      }
      .plarform-btn{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .btn{
          width: 163px;
          height: 39px;
          border: none;
          background: #FFF079;
          border-radius: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333333;
        }
        .btn:hover{
          cursor: pointer;
        }
      }
      .plarform-left{
        display: block;
        position: absolute;
        z-index: 10;
        top: 199px;
        left: 195px;
        width: 128.06px;
        height: 157.14px;
        img{
          width: 100%;
        }
      }
      .plarform-right {
        display: block;
        position: absolute;
        z-index: 10;
        top: 199px;
        right: 191px;
        width: 128.06px;
        height: 157.14px;
        img{
          width: 100%;
        }
      }
    }

    .value-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      background: #FFFFFF;
      overflow: hidden;
      .value-info{
        width: 1089px;
        height: 100%;
        margin: 0 auto;
        .title {
          display: flex;
          flex-direction: column;
          padding-top: 36px;
          padding-bottom: 30px;
          text-align: center;
          padding: 0 0.5rem;
          margin-top: 50px;
          .sub-title{
            font-size: 20px;
            font-weight: 600;
            color: #333333;
          }
          .desc{
            width: 725px;
            font-size: 14px;
            font-weight: 400;
            color: #999999;
            margin: 21px auto 41px;
            padding-left: 18px;
            padding-right: 18px;
          }
        }
        .value-series {
          display: flex;
          flex-direction: column;
          .series-wrapper{
            width: 100%;
            height: 104px;
            margin-top: 189px;
            background: rgba(31, 31, 31, 0.18);
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 9px;
            .title{
              width: 100%;
              margin-top: 11px;
              font-size: 16px;
              font-weight: 600;
              color: #FCF079;
              padding: 0;
            }
            .desc{
              height: 34px;
              color: #FFFFFF;
              margin-top: 2px;
              padding: 0px 19px 0px 20px;
              overflow: hidden;
              text-align: center;
            }
          }
        }
        .series1 {
          width: 174px;
          height: 293px;
          background: url('../../images/value-icon1.png') no-repeat;
          background-size: 100% 100%;
          margin-bottom: 20px;
        }
        .series2 {
          width: 174px;
          height: 293px;
          background: url('../../images/value-icon2.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
        }
        .series3 {
          width: 174px;
          height: 293px;
          background: url('../../images/value-icon3.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
        }
        .series4 {
          width: 174px;
          height: 293px;
          background: url('../../images/value-icon4.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
        }
        .series5 {
          width: 174px;
          height: 293px;
          background: url('../../images/value-icon5.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
        }
        .series6 {
          width: 174px;
          height: 293px;
          background: url('../../images/value-icon6.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
        }
      }
      .value-btn{
        display: none;
      }
      .value-left{
        display: block;
        position: absolute;
        z-index: 10;
        top: 269px;
        left: 222px;
        width: 59.18px;
        height: 76.4px;
        img{
          width: 100%;
        }
      }
      .value-right {
        display: block;
        position: absolute;
        z-index: 10;
        top: 269px;
        right: 251px;
        width: 59.18px;
        height: 76.4px;
        img{
          width: 100%;
        }
      }
    }

    .artist-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      padding-bottom: 7rem;
      .artist-info{
        width: 1089px;
        height: 100%;
        margin: 0 auto;
        .title{
        display: flex;
        flex-direction: column;
        padding-top: 36px;
        padding-bottom: 30px;
        text-align: center;
        .sub-title{
          font-size: 20px;
          font-weight: 600;
          color: #333333;
        }
        .desc{
          width: 725px;
          font-size: 14px;
          font-weight: 400;
          color: #999999;
          margin: 10px auto;
          padding: 12px 18px 10px 18px;
        }
      }
        .artist-list{
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-flow: row wrap;
          padding-bottom: 41px;
          .item{
            width: 266px;
            height: 86px;
            background: #ECECEF;
            margin-bottom: 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0 12px;
            border-radius: 8px;
            img{
              width: 68px;
              height: 68px;
              border-radius: 100%;
              vertical-align: middle;
              border: 1px solid #999;
            }
            .item-desc{
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 21px;
              line-height: 20px;
              .name{
                font-size: 16px;
                color: #666666;
              }
              .desc{
                font-size: 12px;
                color: #8e8e8e;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style rel="stylesheet/scss" lang="scss">
.homePage-container {
  .value-wrapper{
    .value-info {
      .el-row {
        margin-left: 0px!important;
        margin-right: 0px!important;
        .el-col{
          margin: 0px!important;
          padding: 0px!important;
        }
      }
    }
  }
}
</style>
