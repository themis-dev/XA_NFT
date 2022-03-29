<template>
    <div class="activity-wrapper">
        <div class="title">
            <img class="title-icon" src="../../images/activity-icon1.png"/>
            <span class="title-text">雄安五周年数字藏品</span>
            <img class="title-icon" src="../../images/activity-icon1.png"/>
        </div>
        <div class="subtitle">
            <span class="second">雄安官方数字藏品NFT平台</span>
            <span class="line"></span>
            <span class="share-wrapper" @click="handleShareClick" :data-clipboard-text="href"><img src="../../images/share-icon1.png"/>  <span>分享</span></span>
        </div>
        <div class="description-wrapper">
            <div class="desc">为了迎接雄安新区成立五周年，雄安新区智能城市创新联合会雄安区块链实验室、雄安新区未来工业设计研究院联合人民雄安网、北京星原传奇文化传媒有限公司、中信银行科技团队共同在数字文旅领域推出发行NFT数字藏品，其将在“雄安数字藏品平台”以数字图片、3D 荣誉宝盒（NFT）和纪念币的形式向公众亮相。数字图片以新区五年来各行业不同发展阶段的珍藏“大事记”照片、展现雄安各行业建设者新形象的“我与雄安的故事”系列数字明信片、为了庆祝新区五周年联合知名设计公司绘制雄安五周年纪念海报，推出具有深刻意义的数字图片，用数字图片定格雄安记忆；3D荣誉宝盒（NFT）将以古文明藏品、“雄安今朝”藏品、“容和通天”藏品的三个系列发行，以先见，见未来；另外，推出线上纪念币一枚，以“千分之五”为理念，在雄安千年大计的时间轴上见证数字城市、智能城市基石铸就的五年。每张海报、每个3D荣誉宝盒以及纪念币均基于雄安区块链技术铸造生成，都具有独一无二的链上序列号，可以作为数字藏品在雄安链上对应且唯一的权利证明。彰显雄安未来城市的新形象、新时尚，增强雄安引领未来城市品牌的认知。它让我们在数字雄安、智能雄安时代，真正拥有“专属”于自己的内容。</div>
        </div>
        <div class="category-title">
            六大类活动藏品，丰富的雄安数字藏品
        </div>
        <div class="collection-wrapper">
            <div class="collection-item item1" @click="handleCollectionClick(1)">
                <div class="item-desc">
                    <span class="item-title">《雄安五周年大事记数字图片》</span>
                    <span class="item-text">整套数字图片包括10张不同类型的数字图片，均代表着雄安新区成立五周年以来不同阶段的重要时刻，每幅限量发行2022份。</span>
                </div>
            </div>
            <div class="collection-item item2" @click="handleCollectionClick(2)">
                <div class="item-desc">
                    <span class="item-title">《我与雄安的故事系列数字明信片》</span>
                    <span class="item-text">整套数字明信片包含12张，从设计师、医生、教育工作者、农民、建筑师、厨师、记者、警察、歌手、消防员等不同角度展现雄安各行业建设者新形象，每张限量2022份。</span>
                </div>
            </div>
            <div class="collection-item item3" @click="handleCollectionClick(3)">
                <div class="item-desc">
                    <span class="item-title">《雄安五周年纪念数字海报》</span>
                    <span class="item-text">整套数字海报包括9张不同类型的海报，分别由圈点设计、日一设计、韵博设计等三家知名设计公司围绕“雄安五周年”主题进行绘制，十分具有纪念意义，每张限量2022份。</span>
                </div>
            </div>
            <div class="collection-item item4" @click="handleCollectionClick(4)">
                <div class="item-desc">
                    <span class="item-title">《以先见，见未来》</span>
                    <span class="item-text">根据雄安发展这一千年大计的政治占位，以历史、现在和未来的千年时 间轴这一思路，发行三款数字藏品</span>
                </div>
            </div>
            <div class="collection-item item5" @click="handleCollectionClick(5)">
                <div class="item-desc">
                    <span class="item-title">《千分之五》</span>
                    <span class="item-text">隐藏款五周年纪念币，以“千分之五”为理念，在雄安千年大计的时间轴上见证数字城市、智能城市基石铸就的五年。</span>
                </div>
            </div>
            <div class="collection-item item6" @click="handleCollectionClick(6)">
                <div class="item-desc">
                    <span class="item-title">《雄安五周年书法集》</span>
                    <span class="item-text">作品集围绕雄安新区成立五周年这一重大主题，通过书法的艺术表现形式与数字展览叙事手法，将雄安新区五年来壮丽辉煌的建设成果，化作笔端的浓情厚谊。作品集由全国书坛大家名家和骨干书家、中国书协各团体会员书法工作者、全国高校书法专业工作者等共同参与，这些作品或高谈阔论，或清言雅语，点线结合，经纬交织，展现了雄安新区万众一心进行伟大实践的奋斗历程。</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            href: window.location.href
        }
    },
    methods: {
        handleShareClick() {
            var clipboard = new Clipboard('.share')
            clipboard.on('success', e => {
                // console.log('复制成功')
                this.$notify({
                title: '复制成功',
                dangerouslyUseHTMLString: true,
                message: ``,
                type: 'success',
                duration: 2 * 1000
            });
                //  释放内存
            clipboard.destroy()
            })
            clipboard.on('error', e =>{
            // 不支持复制
            console.log('该浏览器不支持复制')
            // 释放内存
            clipboard.destroy()
            })
        },
        handleCollectionClick(type) {
            this.$router.push({
                path: '/market-type',
                query: {
                    type: type
                }
            })
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.activity-wrapper{
    width: 100%;
    background: url('../../images/home-bgImage.png') no-repeat;
    background-size: 100% 100%;
    background-color: #151921;
    .title{
        width: 1178px;
        margin: 0 auto;
        color: #FADE45;
        font-size: 50px;
        font-family: MiSans Semibold;
        font-weight: 600;
        color: #FADE45;
        padding-top: 49px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .title-icon{
            display: block;
            width: 29.83px;
            height: 45.59px;
        }
        .title-text{
            padding: 0px 96px;
        }
    }
    .subtitle{
        width: 1178px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .second{
            font-size: 24px;
            font-family: MiSans;
            font-weight: 500;
            color: #D5D5D5;
            padding: 22px 0px 13px 0px;
        }
        .line{
            display: block;
            width: 45px;
            height: 7px;
            background: #FFF079;
            border-radius: 26px;
        }
        .share-wrapper{
            display: none;
        }
    }
    .description-wrapper{
        width: 1178px;
        margin: 0 auto;
        padding-top: 47px;
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        color: #FFFFFF;
    }
    .category-title{
        width: 1178px;
        margin: 0 auto;
        padding-top: 80px;
        font-size: 30px;
        font-family: MiSans Semibold;
        font-weight: 600;
        color: #D1EFFF;
        text-align: center;
    }
    .collection-wrapper{
        width: 1178px;
        margin: 0 auto;
        color: #FFFFFF;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        padding-bottom: 81px;
        .collection-item{
            width: 30%;
            height: 315px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            border-radius: 9px;
            margin-top: 49px;
            .item-desc{
                width: 100%;
                height: 104px;
                display: flex;
                flex-direction: column;
                align-items: center;
                background: rgba(31, 31, 31, 0.24);
                padding: 0px 20px 0px 20px;
                border-radius: 9px;
                .item-title{
                    padding-top: 11px;
                    font-size: 16px;
                    font-family: MiSans;
                    font-weight: 600;
                    color: #FFFFFF;
                }
                .item-text{
                    width: 100%;
                    height: 38px;
                    margin-top: 12px;
                    overflow: hidden;
                    font-size: 12px;
                    font-weight: 400;
                    color: #FFFFFF;
                }
            }
        }
        .item1{
            background: url('../../images/home-series1.png') no-repeat;
            background-size: cover;
        }
        .item2{
            background: url('../../images/home-series2.png') no-repeat;
            background-size: cover;
        }
        .item3{
            background: url('../../images/home-series3.png') no-repeat;
            background-size: cover;
        }
        .item4{
            background: url('../../images/home-series4.png') no-repeat;
            background-size: cover;
        }
        .item5{
            background: url('../../images/home-series5.png') no-repeat;
            background-size: cover;
        }
        .item6{
            background: url('../../images/home-series6.png') no-repeat;
            background-size: cover;
        }
    }
}
@media (max-width: 500px) {
    .activity-wrapper{
        width: 100%;
        background: url('../../images/home-bgImage.png') no-repeat;
        background-size: 100% 100%;
        background-color: #151921;
        .title{
            width: 19.7rem;
            color: #FADE45;
            font-size: 34px;
            font-family: MiSans Semibold;
            font-weight: 600;
            color: #FADE45;
            text-align: center;
            padding-top: 49px;
            .title-icon{
                display: none;
            }
            .title-text{
                padding: 0px!important;
            }
        }
        .subtitle{
            width: 19.7rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .second{
                font-size: 24px;
                font-family: MiSans;
                font-weight: 500;
                color: #D5D5D5;
            }
            .line{
                display: none;
            }
            .share-wrapper{
                display: block;
                width: 84px;
                height: 31px;
                color: #3B3B3B;
                border-radius: 9px;
                background: #FADE45;
                font-size: 14px;
                text-align: center;
                line-height: 31px;
                img{
                    width: 14.9px;
                    height: 14.6px;
                    vertical-align: middle;
                    margin-top: -5px;
                }
                span{
                    margin-left: 5px;
                }
            }
        }
        .description-wrapper{
            width: 21.7rem;
            margin: 0 auto;
            padding-top: 47px;
            font-size: 16px;
            font-weight: 400;
            line-height: 30px;
            color: #FFFFFF;
        }
        .category-title{
            width: 19.7rem;
            margin: 0 auto;
            padding-top: 80px;
            padding-bottom: 47px;
            font-size: 30px;
            font-family: MiSans Semibold;
            font-weight: 600;
            color: #D1EFFF;
            text-align: center;
        }
        .collection-wrapper{
            width: 19.7rem;
            margin: 0 auto;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            color: #FFFFFF;
            .collection-item{
                width: 19.7rem;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                .item-desc{
                    width: 100%;
                    height: 104px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: rgba(31, 31, 31, 0.24);
                    padding: 0px 20px 0px 20px;
                    border-radius: 9px;
                    .item-title{
                        padding-top: 11px;
                        font-size: 16px;
                        font-family: MiSans;
                        font-weight: 600;
                        color: #FFFFFF;
                    }
                    .item-text{
                        width: 100%;
                        height: 38px;
                        margin-top: 12px;
                        overflow: hidden;
                        font-size: 12px;
                        font-weight: 400;
                        color: #ffffff;
                    }
                }

            }
            .item1{
                background: url('../../images/home-series1.png') no-repeat;
                background-size: 100% 100%;
            }
            .item2{
                background: url('../../images/home-series2.png') no-repeat;
                background-size: 100% 100%;
            }
            .item3{
                background: url('../../images/home-series3.png') no-repeat;
                background-size: 100% 100%;
            }
            .item4{
                background: url('../../images/home-series4.png') no-repeat;
                background-size: cover;
            }
            .item5{
                background: url('../../images/home-series5.png') no-repeat;
                background-size: cover;
            }
            .item6{
                background: url('../../images/home-series6.png') no-repeat;
                background-size: cover;
            }

        }
    }
    
}
</style>