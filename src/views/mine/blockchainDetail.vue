<template>
    <div class="blockchain-wrapper">
        <div class="blockchain-header">
            <span>区块链详情</span>
        </div>
        <div class="nav" @click="goback">
            <img src="../../images/back.png" alt="">
            <div class="nav-title">区块链查证信息概览</div>
        </div>
        <div class="order-data">
            <div class="order-data-title">产品数据</div>
            <el-divider></el-divider>
            <div class="order-data-content">
                <div class="watermark">

                </div>
                <div class="content-title">
                    <span class="title">商品名称</span>
                    <span class="desc">{{ blockDetail.productName }}</span>
                </div>
                <div class="content-title">
                    <span class="title">创作者</span>
                    <span class="desc">{{ blockDetail.creator }}</span>
                </div>
                <div class="content-title">
                    <span class="title">发行方</span>
                    <span class="desc">{{ blockDetail.publisher }}</span>
                </div>
                <div class="content-title">
                    <span class="title">收藏者</span>
                    <span class="desc">{{ blockDetail.owner }}</span>
                </div>
                <div class="content-title">
                    <span class="title">作品介绍</span>
                    <span class="desc">{{ blockDetail.productIntroduction }}</span>
                </div>
            </div>
        </div>
        <div class="order-circulation">
            <div class="order-circulation-title">流转信息</div>
            <el-divider></el-divider>
            <!-- <a-steps progress-dot :current="1" direction="vertical">
                <a-step title="苦行诗" description="This is a description. This is a description." />
                <a-step title="Finished" description="This is a description. This is a description." />
                <a-step title="In Progress" description="This is a description. This is a description." />
                <a-step title="Waiting" description="This is a description." />
                <a-step title="Waiting" description="This is a description." />
            </a-steps> -->
            <el-timeline>
                <el-timeline-item
                v-for="(activity, index) in blockDetail.voList"
                :key="index"
                color="#3842FE">
                <div class="timeLine-item">
                    <p style="font-size: 14px; font-weight: 500; color: #333333;">{{ activity.from.length > 10 ? setNumber(activity.from) : activity.from }}</p>
                </div>
                <div class="timeLine-item">
                    <p style="font-size: 12px; font-weight: 400; color: #999999;">发行时间</p>
                    <p style="font-size: 14px; font-weight: 500; color: #333333;">{{ activity.time }}</p>
                </div>
                <div class="timeLine-item">
                    <p style="font-size: 12px; font-weight: 400; color: #999999;">哈希值</p>
                    <p style="font-size: 14px; font-weight: 500; color: #333333;">{{ setNumber(activity.txHash) }}</p>
                </div>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>
<script>
import { checkBlockChain } from '@/api/mine'
export default {
    data () {
        return {
            oid: this.$route.query.oid ? this.$route.query.oid : '',
            blockDetail: {}
        }
    },
    beforeCreate() {
        document.querySelector('.browser-header').style.display="none"
    },
    mounted() {
        this.getBlockchain()
    },
    methods: {
        getBlockchain() {
            checkBlockChain({ oid: this.oid }).then(res => {
                if(res.status == 1 && res.data) {
                    this.blockDetail = res.data
                }
            })
        },
        goback() {
            this.$router.go(-1)
            document.querySelector('.browser-header').style.display="block"
        },
        setNumber(value) {
            if(value) {
                let str = value.substring(0, 10)
                let newStr = value.substring(value.length - 10, value.length)
                return `${str}...${newStr}`
            } else {
                return ''
            }
        },
    },
    beforeDestroy() {
        document.querySelector('.browser-header').style.display="block"
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.blockchain-wrapper{
    background: #FAFAFA;
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 7rem;
    .blockchain-header{
        width: 100%;
        height: 90px;
        background: rgba(255, 255, 255, 0.39);
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        span{
            display: inline-block;
            font-size: 24px;
            // font-family: MiSans;
            font-weight: 800;
            color: #333333;
            width: 100%;
            height: 90px;
            line-height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .nav{
        width: 41.9rem;
        margin: 20px auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        img{
            width: 10px;
            height: 18px;
        }
        img:hover{
            cursor: pointer;
        }
        .nav-title{
            font-size: 16px;
            // font-family: MiSans;
            font-weight: 600;
            color: #333333; 
            padding-left: 12px;
        }
    }
    .order-data{
        width: 41.9rem;
        height: auto;
        background: #FFFFFF;
        padding: 27px;
        .order-data-title{
            font-size: 16px;
            // font-family: MiSans;
            font-weight: 600;
            line-height: 22px;
            color: #333333;
        }
        .order-data-content{
            position: relative;
            .watermark {
                width: 115px;
                height: 115px;
                position: absolute;
                z-index: 3;
                top: 20px;
                left: 20px;
                background: url('../../images/watermark.png') no-repeat;
                background-size: cover;
            }
            .content-title{
                display: flex;
                flex-direction: column;
                .title{
                    font-size: 12px;
                    // font-family: MiSans;
                    font-weight: 400;
                    line-height: 16px;
                    color: #999999;
                    margin-top: 14px;
                }
                .desc{
                    font-size: 14px;
                    // font-family: MiSans;
                    font-weight: 500;
                    line-height: 19px;
                    color: #333333;
                    margin-top: 7px;
                }
            }
        }
    }
    .order-circulation{
        width: 41.9rem;
        height: auto;
        background: #FFFFFF;
        padding: 27px;
        margin-top: 34px;
        .order-circulation-title{
            font-size: 16px;
            // font-family: MiSans;
            font-weight: 600;
            line-height: 22px;
            color: #333333;
        }
        /deep/ .el-timeline{
            padding-left: 0!important;

        }
    }
}
@media (max-width: 500px) {
    .blockchain-wrapper{
        background: #FAFAFA;
        width: 100vw;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 40px;
        .nav{
            width: 19.7rem;
            margin: 20px auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            img{
                width: 10px;
                height: 18px;
            }
            .nav-title{
                font-size: 16px;
                // font-family: MiSans;
                font-weight: 600;
                color: #333333; 
                padding-left: 12px;
            }
        }
        .order-data{
            width: 19.7rem;
            padding: 27px;
            height: auto;
            background: #FFFFFF;
            .order-data-title{
                font-size: 16px;
                // font-family: MiSans;
                font-weight: 600;
                line-height: 22px;
                color: #333333;
            }   
            .order-data-content{
                position: relative;
                .watermark {
                    width: 115px;
                    height: 115px;
                    position: absolute;
                    z-index: 3;
                    top: 20px;
                    left: 20px;
                    background: url('../../images/watermark.png') no-repeat;
                    background-size: cover;
                }
                .content-title{
                    display: flex;
                    flex-direction: column;
                    .title{
                        font-size: 12px;
                        // font-family: MiSans;
                        font-weight: 400;
                        line-height: 16px;
                        color: #999999;
                        margin-top: 14px;
                    }
                    .desc{
                        font-size: 14px;
                        // font-family: MiSans;
                        font-weight: 500;
                        line-height: 19px;
                        color: #333333;
                        margin-top: 7px;
                    }
                }
            }
        }
        .order-circulation{
            margin-top: 34px;
            width: 19.7rem;
            height: auto;
            background: #FFFFFF;
            padding: 27px;
            .order-circulation-title{
                font-size: 16px;
                // font-family: MiSans;
                font-weight: 600;
                line-height: 22px;
                color: #333333;
            }
        }
    }
}
</style>