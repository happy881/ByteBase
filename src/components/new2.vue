<template>
    <div>

        <div class="newswarp">
            <div class="newsback" @click="back">
                <div class="leftimg">
                    <img src="../assets/byteimg/left.png" alt="" style="width: 20px" />
                </div>
                <div class="backfont">返回动态</div>
            </div>
            <div class="articwarp">
                <div class="arttiel">重磅！分布式资本宣布投资1500万美金成立IPFS/Filecoin生态基金！</div>
                <div class="arttime">2021-01-14 13:50:09</div>
                <div class="artfgx"></div>

                <div class="yswarp">
                    <span class="ys">前言</span>
                </div>
                                <p>
                    本文是2020年12月11日分布式资本合伙人Roland Sun在存储市场峰会的发言总结。
                </p>
                <img src="../assets/byteimg/new22.png" alt="">
                <p> 分布式资本宣布与协议实验室合作，并投资1500万+美金成立IPFS和Filecoin生态基金。该基金的使命是推动IPFS和Filecoin生态系统的增长。</p>

                <div class="yswarp">
                    <span class="ys">基金详情</span>
                </div>

                <p>
                   分布式资本计划筹集1500万-2000万美金，并承诺所有的资金将筹集及配置于Fil，而非稳定币或其他加密资产。分布式资本已与其他有限合伙人共同向该基金投入100万美金。
                </p>
                <p>分布式资本预计定位以下三个来源为主要投资渠道：</p>
                <p>1. Slingshot项目 协议实验室发起的Slingshot项目有望为潜在的投资提供一个强大的渠道。Slingshot第一阶段已经结束，有100多个项目提交了申请。</p>
                <p>2. LongHash Filecoin 前沿加速营 总部位于新加坡的LongHash Ventures最近宣布了为期12周的Filecoin前沿加速营。过去几年，分布式资本和LongHash一直在密切合作，150多份加速营申请预计将为分布式生态基金带来潜在的投资。</p>
                <p>3. 中国社区 中国社区成员不仅对挖矿感兴趣，很多中国团队也在开发与IPFS和Filecoin相关的应用。我们已经看到了一些团队的雏形，也希望从中发现机会。</p>
               <p>分布式资本将负责分布式生态基金的所有财务相关方面，协议实验室则将担任技术咨询的角色。该基金每年收取2%的管理费，20%的利息，为期五年。分布式资本的投资包括全球范围内的代币和股权投资，该基金将不限于任何特定的司法管辖区。</p>
            </div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
import headnav from '@/funcomponents/head'
import foot from '@/components/foot'
export default {
  components: {
    headnav,
    foot
  },
  mounted () {

  },
  methods: {
    back () {
      this.$router.push('/news')
    },
    goindex () {
      this.$router.push('/')
    }
  }

}
</script>

<style scoped>
.yswarp {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
}
.ys {
    padding: 10px;
    background-color: rgb(226, 235, 255);
    font-size: 18px;
}
p {
    font-size: 17px;
}
.ptitle {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 25px;
    margin-top: 25px;
}
.articwarp {
    width: 1240px;
    padding-top: 48px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 100px;
}
.arttime {
    color: #a9afbb;
    font-size: 16px;
    margin-top: 20px;
}
.artfgx {
    margin-top: 40px;
    margin-bottom: 30px;
    width: 1280px;
    height: 1px;
    background-color: #cdd4e3;
}
.arttiel {
    color: #000000;
    font-size: 24px;
    font-weight: bold;
}
.backfont {
    font-size: 18px;
    color: #333333;
    margin-left: 10px;
    cursor: pointer;
}
.leftimg {
    width: 24px;
    height: 24px;
    margin-left: 10px;
    /* border: 1px dashed #333333; */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.newswarp {
    padding-top: 70px;
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
}
.newsback {
    width: 1280px;
    height: 84px;
    display: flex;
    align-items: center;
}
.el-carousel__container {
    width: 100%;
    height: 500px;
}
.bannerimg {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    min-width: 1440px;
    object-fit: cover;
}
.newsconter {
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 70px;
    padding-bottom: 100px;
}
.newstitle {
    font-size: 24px;
    color: #333333;
    margin-top: 30px;
}
.red {
    width: 66px;
    height: 6px;
    background-color: #ef190f;
    margin-top: 10px;
}

.Latestitemwarp {
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    display: flex;
    align-items: center;
    margin-bottom: 111px;
}
.Latestitemwarp :nth-child(3n + 1) {
    margin-left: 0 !important;
}
.Latestitem {
    width: 370px;
    height: 234px;
    margin-left: 85px;
    background-color: #fdfdfd;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
}
.Latestitemimg {
    width: 370px;
    height: 160px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2);
}
.Latestitemfont {
    width: 330px;
    height: 44px;
    color: #333333;
    font-size: 16px;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
}
.Latestitemfgx {
    margin-top: 10px;
    width: 370px;
    height: 1px;
    background-color: #333333;
}
.Latestitem:hover > .Latestitemfont {
    color: #ef190f;
}
.Latestitem:hover > .Latestitemfgx {
    background-color: #ef190f;
}
.itemwarp {
    width: 1190px;
    height: 160px;
    background-color: white;
    display: flex;
    padding-top: 20px;
    padding-bottom: 36px;
    padding-left: 20px;
    padding-right: 70px;
    margin-bottom: 30px;
}
.itemwarp:hover {
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1);
}
.newsimg {
    width: 370px;
    height: 160px;
    margin-right: 20px;
}
.newstitle22 {
    width: 800px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #ef190f;
    font-size: 24px;
}
.newscont {
    color: #a1a1a1;
    font-size: 13px;
    margin-top: 10px;
    width: 800px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.newstime {
    margin-top: 26px;
    color: #a1a1a1;
    font-size: 13px;
    position: absolute;
    bottom: 5px;
}
.itemfgx {
    width: 1280px;
    height: 1px;
    background-color: #cccccc;
    margin-top: 30px;
}
.more {
    width: 1280px;
    height: 50px;
    color: #a1a1a1;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.headwarp {
    width: 100%;
    height: 70px;
    min-width: 1440px;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    display: flex;
    z-index: 10;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(51, 51, 15, 0.1);
}
.conter {
    width: 1280px;
    display: flex;
    align-items: center;
}
.headlogo {
    width: 127px;
    cursor: pointer;
}

.loginwarp {
    margin-left: auto;
    font-size: 12px;
    display: flex;
    align-items: center;
    height: 60px;
    color: #333333;
}
.logbtn {
    cursor: pointer;
}
.regsbtn {
    width: 64px;
    height: 26px;
    border-radius: 2px;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 18px;
    cursor: pointer;
    border: 1px solid #333333;
}
</style>
