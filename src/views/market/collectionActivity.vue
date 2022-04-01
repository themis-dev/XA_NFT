<template>
    <div class="activity-wrapper">
        <div class="title">
            <img class="title-icon" src="../../images/activity-icon1.png"/>
            <span class="title-text">雄安五周年数字纪念品</span>
            <img class="title-icon" src="../../images/activity-icon1.png"/>
        </div>
        <div class="subtitle">
            <span class="second">雄安数字纪念品</span>
            <span class="line"></span>
            <span class="share-wrapper share" @click="handleShareClick" :data-clipboard-text="href"><img src="../../images/share-icon1.png"/>  <span>分享</span></span>
        </div>
        <div class="category-title">
            多款限量数字纪念品 限量领取 先抢先得
        </div>
        <div class="collection-wrapper">
            <div class="collection-item item1" @click="handleCollectionClick(1)">
                <div class="item-desc">
                    <span class="item-title">《雄安五周年大事记数字图片》</span>
                    <span class="item-text">整套数字图片包括10张不同类型的数字图片，均代表着雄安新区成立五周年以来不同阶段的重要时刻，每幅限量发行2022份。</span>
                    <span class="item-mobile-text">观赏纪念品</span>
                </div>
            </div>
            <div class="collection-item item2" @click="handleCollectionClick(2)">
                <div class="item-desc">
                    <span class="item-title">《我与雄安的故事系列数字明信片》</span>
                    <span class="item-text">整套数字明信片包含12张，从设计师、医生、教育工作者、农民、建筑师、厨师、记者、警察、歌手、消防员等不同角度展现雄安各行业建设者新形象，每张限量2022份。</span>
                    <span class="item-mobile-text">观赏纪念品</span>
                </div>
            </div>
            <div class="collection-item item3" @click="handleCollectionClick(3)">
                <div class="item-desc">
                    <span class="item-title">《雄安五周年纪念数字海报》</span>
                    <span class="item-text">整套数字海报包括9张不同类型的海报，分别由圈点设计、日一设计、韵博设计等三家知名设计公司围绕“雄安五周年”主题进行绘制，十分具有纪念意义，每张限量2022份。</span>
                    <span class="item-mobile-text">观赏纪念品</span>
                </div>
            </div>
            <div class="collection-item item4" @click="handleCollectionClick(4)">
                <div class="item-desc">
                    <span class="item-title">《以先见，见未来》</span>
                    <span class="item-text">根据雄安发展这一千年大计的政治占位，以历史、现在和未来的千年时 间轴这一思路，发行三款数字纪念品</span>
                    <span class="item-mobile-text">观赏纪念品</span>
                </div>
            </div>
            <div class="collection-item item5" @click="handleCollectionClick(5)">
                <div class="item-desc">
                    <span class="item-title">《千分之五》</span>
                    <span class="item-text">隐藏款五周年纪念章，以“千分之五”为理念，在雄安千年大计的时间轴上见证数字城市、智能城市基石铸就的五年。</span>
                    <span class="item-mobile-text">观赏纪念品</span>
                </div>
            </div>
            <div class="collection-item item6" @click="handleCollectionClick(6)">
                <div class="item-desc">
                    <span class="item-title">《雄安五周年书法集》</span>
                    <span class="item-text">作品集围绕雄安新区成立五周年这一重大主题，通过书法的艺术表现形式与数字展览叙事手法，将雄安新区五年来壮丽辉煌的建设成果，化作笔端的浓情厚谊。作品集由全国书坛大家名家和骨干书家、中国书协各团体会员书法工作者、全国高校书法专业工作者等共同参与，这些作品或高谈阔论，或清言雅语，点线结合，经纬交织，展现了雄安新区万众一心进行伟大实践的奋斗历程。</span>
                    <span class="item-mobile-text">观赏纪念品</span>
                </div>
            </div>
            <div class="description-wrapper">
                <div class="desc">为迎接雄安新区成立五周年，雄安区块链实验室、雄安新区未来工业设计研究院联合人民雄安网、北京星原传奇文化传媒有限公司、中信银行科技团队共同在数字文旅领域推出发行数字纪念品，其将在“雄安数字纪念平台”--幻安，以数字图片、3D 荣誉宝盒和纪念章的形式向公众亮相。数字图片以新区五年来各行业不同发展阶段的珍藏“大事记”照片、展现雄安各行业建设者新形象的“我与雄安的故事”系列数字明信片、为了庆祝新区五周年联合知名设计公司绘制的雄安五周年纪念海报，用数字图片定格雄安记忆；以及3D荣誉宝盒将以古文明纪念品、“雄安今朝”纪念品、“未来之眼”纪念品的三个系列发行，以先见，见未来；另外，推出线上纪念章一枚，以“千分之五”为理念，在雄安千年大计的时间轴上见证数字城市、智能城市基石铸就的五年。每张图片、每个3D荣誉宝盒以及纪念币均基于雄安区块链技术铸造生成，都具有独一无二的链上序列号，可以作为数字藏品在雄安链上对应且唯一的权利证明。彰显雄安未来城市的新形象、新时尚，增强雄安引领未来城市品牌的认知，更好的记录、延续“专属”于建设者的雄安数字记忆。</div>
            </div>
        </div>
        <el-dialog
            title=""
            :visible.sync="activityDialogVisible"
            :show-close='false'
        >
            <div class="share-dialog-content"  >
              <img :src="imageUrl" alt="" style="width: 100%">
              <div class="share-footer-title">长按上方图片保存或转发给朋友</div>
            </div>
        </el-dialog>
        <div class="dialog-wrapper" ref="screen">
                <div class="dialog-image-wrapper">
                    <div class="dialog-title">
                        <span class="dialog-main-title">雄安五周年数字纪念品</span>
                        <span class="dialog-line"></span>
                    </div>
                    <div class="dialog-content">
                        雄安新区成立五周年，艺术家们创作了众多优秀的雄安数字纪念品。每张海报、每个3D荣誉宝盒、纪念币以及书法作品均基于雄安区块链技术铸造生成，都具有独一无二的链上序列号，可以作为数字藏品在雄安链上对应且唯一的权利证明。彰显雄安未来城市的新形象、新时尚，增强雄安引领未来城市品牌的认知。它让我们在数字雄安、智能雄安时代，真正拥有“专属”于自己的内容。
                        <span class="dialog-subtitle">雄安数字纪念品</span>
                        <span class="dialog-line"></span>
                    </div>
                    <div class="dialog-collection-wrapper">
                        <div class="dialog-collection-item">
                            <img src="../../images/home-series1.png" class="dialog-image"/>
                            <span class="dialog-image-desc">《雄安五周年大事记数字图片》</span>
                        </div>
                        <div class="dialog-collection-item">
                            <img src="../../images/home-series2.png" class="dialog-image"/>
                            <span class="dialog-image-desc">《我与雄安的故事系列数字明信片》</span>
                        </div>
                        <div class="dialog-collection-item">
                            <img src="../../images/home-series3.png" class="dialog-image"/>
                            <span class="dialog-image-desc">《雄安五周年纪念数字海报》</span>
                        </div>
                        <div class="dialog-collection-item">
                            <img src="../../images/home-series4.jpg" class="dialog-image"/>
                            <span class="dialog-image-desc">《以先见，见未来》</span>
                        </div>
                        <div class="dialog-collection-item">
                            <img src="../../images/home-series5.png" class="dialog-image"/>
                            <span class="dialog-image-desc">《千分之五》</span>
                        </div>
                        <div class="dialog-collection-item">
                            <img src="../../images/home-series6.png" class="dialog-image"/>
                            <span class="dialog-image-desc">《雄安五周年书法集》</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-footer-wrapper">
                        <div class="dialog-footer-left">
                            <div class="footer-company">
                                <img class="footer-image" src="../../images/logo.png"/>
                                <div class="footer-title">
                                    <span class="footer-subtitle">幻安</span>
                                    <span class="footer-desc">雄安数字纪念品</span>
                                </div>
                            </div>
                            <div class="dialog-qcord-text">长按二维码或微信扫一扫识别</div>
                        </div>
                        <div class="dialog-footer-right">
                            <div id="qrcode" ref="qrcode" ></div>
                        </div>
                </div>
        </div>
    </div>
</template>
<script>
import QRCode from 'qrcodejs2'
import html2canvas from 'html2canvas'
import moment from 'moment'
import { Message } from 'element-ui'
export default {
    data () {
        return {
            href: window.location.href,
            activityDialogVisible: false,
            nowTime: '',
            qr: '',
            timer: 500,
            imageUrl: ''
        }
    },
    beforeCreate() {
        document.querySelector('#footer-wrapper').style.background = "#1F1F26"
    },
    created() {
        
    },
    mounted() {
         this.nowTime = moment.parseZone(new Date().getTime()).local().format('YYYY-MM-DD HH:mm:ss')
            if (!this.qr) {
                this.$nextTick(() => {
                    this.crateQrcode()
                    this.handleSaveClick()
                })
            }
    },
    methods: {
        handleShareClick() {
            this.activityDialogVisible = true
            // var clipboard = new Clipboard('.share')
            // clipboard.on('success', e => {
            //     // console.log('复制成功')
            //     this.$notify({
            //     title: '复制成功',
            //     dangerouslyUseHTMLString: true,
            //     message: ``,
            //     type: 'success',
            //     duration: 2 * 1000
            // });
            //     //  释放内存
            // clipboard.destroy()
            // })
            // clipboard.on('error', e =>{
            // // 不支持复制
            // console.log('该浏览器不支持复制')
            // // 释放内存
            // clipboard.destroy()
            // })
           
            console.log(document.querySelector('#screen'))
        // document.querySelector('#screen').addEventListener('touchstart', () => {
        //     Message({
        //         message: '开始'
        //     })
        // })
        // document.querySelector('#screen').addEventListener('touchend', () => {
        //     Message({
        //         message: '结束'
        //     })
        // })
        // document.querySelector('#screen').addEventListener('touchmove', () => {
        //     Message({
        //         message: '长按'
        //     })
        // })
        },
        handleCollectionClick(type) {
            this.$router.push({
                path: '/market-type',
                query: {
                    type: type
                }
            })
        },
        crateQrcode() {
            this.qr = new QRCode('qrcode', {
                width: 74,
                height: 74, 
                text: `${this.href}`, 
            })
        },
        handleSaveClick() {
            html2canvas(this.$refs.screen, {
                useCORS: true,
                allowTaint:false,
            }).then((canvas) => {
                if (navigator.msSaveBlob) {
                    // IE10+
                    let blob = canvas.msToBlob()
                    return navigator.msSaveBlob(blob, name)
                } else {
                    let imageurl = canvas.toDataURL('image/png')
                    //这里需要自己选择命名规则
                    let imagename = 'img-share'
                    // this.fileDownload(imageurl, imagename)
                    console.log(imageurl)
                    this.imageUrl = imageurl
                }
            })
            // html2canvas(document.querySelector('#screen')).then(canvas => {
            //     let imgUrl = canvas.toDataURL('image/png');
            //     let dataURL = imgUrl;
                
            //     console.log(dataURL)
                
            // }).catch(error => {

            // })
        }
    },
    beforeDestroy() {
        document.querySelector('#footer-wrapper').style.background = "#BCBCBC"
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
            // font-family: MiSans;
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
                    display: block;
                    width: 100%;
                    height: 38px;
                    margin-top: 12px;
                    overflow: hidden;
                    font-size: 12px;
                    font-weight: 400;
                    color: #FFFFFF;
                }
                .item-mobile-text{
                    display: none;
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
            background: url('../../images/home-series4.jpg') no-repeat;
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
    .dialog-wrapper{
        display: none;
    }
}
@media (max-width: 500px) {
    .activity-wrapper{
        width: 100%;
        background: url('../../images/home-bgImage.png') no-repeat;
        background-size: 100% 100%;
        background-color: #151921;
        /deep/ .el-dialog__wrapper .el-dialog__header{
            display: none;
        }
        /deep/ .el-dialog {
            .share-dialog-content {
                padding-top: 20px;
                .share-footer-title{
                    width: 100%;
                    font-size: 14px;
                    font-family: MiSans Semibold;
                    font-weight: 500;
                    line-height: 22px;
                    color: rgb(77, 63, 235);
                    margin-left: 14px;
                    margin-top: 20px;
                    text-align: center;
                    margin-left: 0px;
                }
            }
        }
        .title{
            width: 100%;
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
                // font-family: MiSans;
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
            width: 20.5rem;
            margin: 0 auto;
            padding-top: 47px;
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            color: #FFFFFF;
        }
        .category-title{
            width: 18.7rem;
            margin: 0 auto;
            padding-top: 21px;
            padding-bottom: 15px;
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
                height: 166px;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                border-radius: 8px;
                margin-top: 11px;
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
                        display: none;
                        width: 100%;
                        height: 38px;
                        margin-top: 12px;
                        overflow: hidden;
                        font-size: 12px;
                        font-weight: 400;
                        color: #ffffff;
                    }
                    .item-mobile-text{
                        display: block;
                        width: 84px;
                        height: 31px;
                        background: #FADE45;
                        line-height: 31px;
                        text-align: center;
                        color: #3B3B3B;
                        font-size: 14px;
                        border-radius: 5px;
                        margin-top: 20px;
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
                background: url('../../images/home-series4.jpg') no-repeat;
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
        .dialog-wrapper{
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -99999;
            width: 295px;
            margin-left: -35px;
            text-align: center;
            padding-bottom: 20px;
            .dialog-image-wrapper{
                background: url('../../images/home-bgImage.png');
                background-size: 100% 100%;
                background-color: #151921;
                .dialog-title{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .dialog-main-title{
                        font-size: 24px;
                        color: #FADE45;
                        padding-top: 30px;
                        font-family: MiSans Semibold;
                        font-weight: 600;
                    }
                    .dialog-subtitle{
                        font-size: 18px;
                        color: #D5D5D5;
                        font-family: MiSans Semibold;
                        font-weight: 400;
                    }
                    .dialog-line{
                        display: block;
                        width: 45px;
                        height: 7px;
                        background: #FFF079;
                        border-radius: 26px;
                        margin-top: 8px;
                    }
                }
                .dialog-content{
                    font-size: 12px;
                    color: #E0E0FF;
                    margin: 8px 20px 8px 20px;
                    text-align: left;
                }
                .dialog-collection-wrapper{
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-around;
                    margin: 16px 25px 16px 25px;
                    .dialog-collection-item{
                        width: 28%;
                        font-size: 12px;
                        padding-bottom: 10px;
                        padding-top: 5px;
                        .dialog-image{
                            width: 100%;
                            border-radius: 8px;
                        }
                        .dialog-image-desc{
                            display: inline-block;
                            padding-top: 5px;
                            font-family: MiSans Semibold;
                            color: #FADE45;
                            font-size: 8px;
                        }
                    }
                }
            }
            
            .dialog-footer-wrapper{
                margin: 0px 8px;
                padding-top: 12px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                background: #FFFFFF;
                border: none;
                .dialog-footer-left{
                    display: flex;
                    flex-direction: column;
                    .footer-company{
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        .footer-image{
                            width: 30.82px;
                            height: 50px;
                        }
                        .footer-title{
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-start;
                            padding-left: 7px;
                            .footer-subtitle{
                                font-size: 24px;
                                color: #333333;
                                text-align: left;
                                font-weight: 600;
                            }
                            .footer-desc{
                                font-size: 12px;
                                font-family: MiSans Semibold;
                            }
                        }
                    }
                    .dialog-qcord-text{
                        padding-left: 36px;
                        color:#4073C4;
                        font-size: 12px;
                        font-family: MiSans Semibold;
                        padding-top: 6px;
                    }
                }
            }
            
        }
        
    }
    
}
</style>