<template>
  <div class="homePage-container">
    <div class="recommend-wrapper">
      <div class="recommend-info">
        <el-row :gutter="24" justify="center">
          <el-col :xs="24" :md="12" :lg="12">
            <div class="recommend item">
              <span class="title">雄安数字纪念品</span>
              <span class="main">基于雄安区块链底层系统</span>
              <span class="desc">数字纪念品是使用区块链技术进行唯一标识的经数字化的特定作品、艺术品和商品，包括但不限于数字画作、图片、音乐、视频、3D模型、书法等各种形式。数字纪念品为虚拟数字商品，而非实物。</span>
              <div class="btn-wrapper">
                <button class="explore" @click="handleExploreClick">探索</button>
                <button @click="handleRegisterClick">注册</button>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :md="12" :lg="12">
            <div class="recommend">
              <div class="mark" @click="handleMoreClick">
                <span class="title">雄安五周年纪念系列</span>
                <span class="desc">雄安新区设立五周年之际，首款数字纪念品将震撼发布，献礼雄安每位建设者！雄安数字纪念品以数字图片、3D荣誉宝盒的形式向公众亮相，每个系列限量发行。</span>
                <div class="check">
                  <button class="btn">查看</button>
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
          <!-- <span class="sub-title">雄安数字纪念品</span>
          <span class="desc">通过区块链智能合约进行链上存证、链上确权、链上交易，真实可信</span> -->
          <span class="sub-title">多层密钥，锁住你的雄安记忆</span>
          <span class="desc">雄安首款数字纪念品基于雄安区块链底层系统发布，可追溯、不可篡改，充分保护了创作者和收藏者的相关权益。</span>
        </div>
        <!-- <div class="title">
          <span class="sub-title">独一无二，专属你的雄安记忆</span>
          <span class="desc">每个雄安数字纪念品都具有独一无二的链上序列号，可以作为数字纪念品在雄安链上对应且唯一的权利证明。</span>
        </div> -->
        <el-row :gutter="24" justify="center">
          <el-col :xs="24" :md="8" :lg="8">
            <div class="series1 plarform-series" @click="handleMoreClick">
              <div class="series-wrapper">
                <span class="title">《雄安五周年大事记数字图片》</span>
                <span class="desc">整套数字图片包括10张不同类型的数字图片，均代表着雄安新区成立五周年以来不同阶段的重要时刻，每幅限量发行2022份。</span>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :md="8" :lg="8">
            <div class="series2 plarform-series" @click="handleMoreClick">
              <div class="series-wrapper">
                <span class="title">《我与雄安的故事系列数字明信片》</span>
                <span class="desc">整套数字明信片包含12张，从设计师、医生、教育工作者、农民、建筑师、厨师、记者、警察、歌手、消防员等不同角度展现雄安各行业建设者新形象，每张限量2022份。</span>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :md="8" :lg="8">
            <div class="series3 plarform-series" @click="handleMoreClick">
              <div class="series-wrapper">
                <span class="title">《雄安五周年纪念数字海报》</span>
                <span class="desc">整套数字海报包括9张不同类型的海报，分别由圈点设计、日一设计、韵博设计等三家知名设计公司围绕“雄安五周年”主题进行绘制，十分具有纪念意义，每张限量2022份。</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="24" justify="center">
          <el-col :xs="24" :md="8" :lg="8">
            <div class="series4 plarform-series series-top" @click="handleMoreClick">
              <div class="series-wrapper">
                <span class="title">《以先见，见未来》</span>
                <span class="desc">根据雄安发展这一千年大计的政治占位，以历史、现在和未来的千年时 间轴这一思路，发行三款数字纪念品</span>
              </div>
            </div>
          </el-col>
          <!-- <el-col :xs="24" :md="8" :lg="8">
            <div class="series5 plarform-series  series-top" @click="handleMoreClick">
              <div class="series-wrapper">
                <span class="title">《千分之五》</span>
                <span class="desc">隐藏款五周年纪念章，以“千分之五”为理念，在雄安千年大计的时间轴上见证数字城市、智能城市基石铸就的五年。</span>
              </div>
            </div>
          </el-col> -->
          <el-col :xs="24" :md="8" :lg="8">
            <div class="series6 plarform-series  series-top" @click="handleMoreClick">
              <div class="series-wrapper">
                <span class="title">《雄安五周年书法集》</span>
                <span class="desc">作品集围绕雄安新区成立五周年这一重大主题，通过书法的艺术表现形式与数字展览叙事手法，将雄安新区五年来壮丽辉煌的建设成果，化作笔端的浓情厚谊。作品集由全国书坛大家名家和骨干书家、中国书协各团体会员书法工作者、全国高校书法专业工作者等共同参与，这些作品或高谈阔论，或清言雅语，点线结合，经纬交织，展现了雄安新区万众一心进行伟大实践的奋斗历程。</span>
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
        <!-- <div class="title">
          <span class="sub-title">数字艺术纪念品价值</span>
          <span class="desc">数字纪念品具有唯一性，是因为它们基于区块链技术，从诞生起就与特定的作品、艺术品和商品建立唯一的映射关系，每个数字纪念品都具有独一无二的链上序列号，可以作为数字纪念品在特定区块链上对应且唯一的权利证明。</span>
        </div> -->
        <div class="title">
          <span class="sub-title">独一无二，专属你的雄安记忆</span>
          <span class="desc">每个雄安数字纪念品都具有独一无二的链上序列号，可以作为数字纪念品在雄安链上对应且唯一的权利证明。</span>
        </div>
        <div class="value-image-wrapper">
          <div class="series1 value-series" @click="handleMoreClick">
              <div class="series-wrapper">
                <span class="title">雄安建设场景</span>
                <span class="desc">《雄安五周年大事记数字图片》</span>
              </div>
          </div>
          <div class="series2 value-series" @click="handleMoreClick">
              <div class="series-wrapper">
                <span class="title">热忱</span>
                <span class="desc">《我与雄安的故事系列数字明信片》</span>
              </div>
            </div>
          <div class="series3 value-series" @click="handleMoreClick">
              <div class="series-wrapper">
                <span class="title">雄安崛起</span>
                <span class="desc">《雄安五周年纪念数字海报》</span>
              </div>
            </div>
            <div class="series4 value-series" @click="handleMoreClick">
              <div class="series-wrapper">
                <span class="title">雄安站</span>
                <span class="desc">《以先见，见未来》</span>
              </div>
            </div>
            <div class="series6 value-series" @click="handleMoreClick">
              <div class="series-wrapper">
                <span class="title">燕赵大地</span>
                <span class="desc">《雄安五周年书法集》</span>
              </div>
            </div>
        </div>
        <!-- <el-row :gutter="24" justify="center" class="footer-wrapper">
          <el-col :xs="8" :md="5" :lg="4">
            <div class="series1 value-series" @click="handleMoreClick">
              <div class="series-wrapper">
                <span class="title">雄安建设场景</span>
                <span class="desc">《雄安五周年大事记数字图片》</span>
              </div>
          </div>
          </el-col>
          <el-col :xs="8" :md="5" :lg="4">
            <div class="series2 value-series" @click="handleMoreClick">
              <div class="series-wrapper">
                <span class="title">热忱</span>
                <span class="desc">《我与雄安的故事系列数字明信片》</span>
              </div>
            </div>
          </el-col>
          <el-col :xs="8" :md="5" :lg="4">
            <div class="series3 value-series" @click="handleMoreClick">
              <div class="series-wrapper">
                <span class="title">雄安崛起</span>
                <span class="desc">《雄安五周年纪念数字海报》</span>
              </div>
            </div>
          </el-col>
          <el-col :xs="0" :md="5" :lg="4">
            <div class="series4 value-series" @click="handleMoreClick">
              <div class="series-wrapper">
                <span class="title">雄安站</span>
                <span class="desc">《以先见，见未来》</span>
              </div>
            </div>
          </el-col>
          <el-col :xs="0" :md="5" :lg="4">
            <div class="series6 value-series" @click="handleMoreClick">
              <div class="series-wrapper">
                <span class="title">燕赵大地</span>
                <span class="desc">《雄安五周年书法集》</span>
              </div>
            </div>
          </el-col>
        </el-row> -->
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

    <!-- <div class="artist-wrapper">
      <div class="artist-info">
        <div class="title">
          <span class="sub-title">数字纪念品艺术家纷纷选择幻安</span>
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
    </div> -->
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
    padding-bottom: 40px;
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
        border-radius: 8px;
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
        background: url('../../images/home-series7.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
      .series2{
        width: 21.6rem;
        height: 166px;
        background: url('../../images/home-series8.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
      .series3{
        width: 21.6rem;
        height: 166px;
        background: url('../../images/home-series9.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
      .series4{
        display: none;
      }
      .series5{
        display: none;
      }
      .series6{
        display: none;
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
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding-bottom: 59px;
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
      .value-image-wrapper{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      .value-series {
        margin: 0 auto;
        padding: 0px;
        display: flex;
        align-items: flex-end;
        .series-wrapper{
          width: 100%;
          height: 104px;
          background: rgba(31, 31, 31, 0.5);
          display: flex;
          flex-direction: column;
          border-radius: 8px;
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
            font-size: 10px;
          }
        }
      }
      .series1{
        width: 6.8rem;
        height: 293px;
        background: url('../../images/value-icon7.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
      .series2{
        width: 6.8rem;
        height: 293px;
        background: url('../../images/value-icon8.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
      .series3{
        width: 6.8rem;
        height: 293px;
        background: url('../../images/value-icon9.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
      .series4{
        display: none;
        width: 6.8rem;
        height: 293px;
        background: url('../../images/value-icon4.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
      .series5{
        display: none;
        width: 6.8rem;
        height: 293px;
        background: url('../../images/value-icon5.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
      }
      .series6{
        display: none;
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
          .mark:hover{
            cursor: pointer;
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
      background: #FAFAFA;
      padding-bottom: 40px;
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
          border-radius: 8px;
          overflow: hidden;
          .series-wrapper{
            width: 100%;
            height: 104px;
            margin-top: 211px;
            background: rgba(31, 31, 31, 0.5);
            display: flex;
            flex-direction: column;
            border-radius: 8px;
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
              height: 35px;
              color: #FFFFFF;
              margin-top: 16px;
              padding: 0px 19px 0px 20px;
              overflow: hidden;
              border-radius: 8px;
            }
          }
        }
        .plarform-series:hover{
          cursor: pointer;
        }
        .series-top {
          margin-top: 40px;
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
        .series4 {
          width: 346px;
          height: 315px;
          background: url('../../images/home-series4.jpg') no-repeat;
          background-size: 100% 100%;
          margin-bottom: 20px;
        }
        .series5 {
          width: 346px;
          height: 315px;
          background: url('../../images/home-series5.png') no-repeat;
          background-size: 100% 100%;
          margin-bottom: 20px;
        }
        .series6 {
          width: 346px;
          height: 315px;
          background: url('../../images/home-series6.png') no-repeat;
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
      justify-content: center!important;
      position: relative;
      background: #FFFFFF;
      overflow: hidden;
      padding-bottom: 59px;
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
        .value-image-wrapper{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .value-series {
          display: flex;
          flex-direction: column;
          .series-wrapper{
            width: 100%;
            height: 104px;
            margin-top: 189px;
            background: rgba(31, 31, 31, 0.5);
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
              // overflow: hidden;
              text-align: center;
            }
          }
        }
        .value-series:hover{
          cursor: pointer;
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
          display: block;
          width: 174px;
          height: 293px;
          background: url('../../images/value-icon4.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
        }
        // .series5 {
        //   width: 174px;
        //   height: 293px;
        //   background: url('../../images/value-icon5.png') no-repeat;
        // background-size: 100% 100%;
        // margin-bottom: 20px;
        // }
        .series6 {
          display: block;
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
