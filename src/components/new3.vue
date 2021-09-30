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
                <div class="arttiel">
                    胡安：Filecoin已采用以太坊EIP-1559标准应对网络拥塞问题
                </div>
                <div class="arttime">2021-01-07 17:05:33</div>
                <div class="artfgx"></div>
                <p>
                    文本总结了Filecoin创始人胡安先生对Filecoin中采用EIP-1559的发言。
                </p>
                <img src="../assets/byteimg/new33.png" alt="" />
                <p>
                    在Filecoin网络，gas的概念被用于测量执行一个给定的链上交易所需要的计算资源。因需要去支付这些资源成本，导致了必须作出谁应该承担这些成本，以及如何对有效资源的消耗交易进行优先级排序的决定。
                </p>
                <p>
                    就像是价高者得的首价拍卖一样。在这样的体系中，想要在区块链上执行交易的参与者对区块矿工出价。接着当矿工参与已开采区块中的相关交易时，矿工将收取这个出价作为费用。考虑到一个区块交易花费的区块大小的容量以及gas的量，矿工为了提高收取的费用会优先考虑交易。
                </p>
                <p>
                    虽然这种方法在概念上非常简单，却有一些不足之处。首次价格拍卖的操作可能很复杂，而且可能导致出价者大量的额外支出。在网络拥塞期间，它们还可能导致不良行为。
                </p>
                <p>
                    上述系统奖励了矿工全部gas费，却忽略了一个事实：网络中的非矿工参与者也必然会花费资源来处理每笔交易。
                </p>
                <div class="yswarp">
                    <span class="ys">EIP-1559</span>
                </div>
                <p>
                    以太坊改进提议（EIP）1559是针对这些问题制定的一个标准。它主要的创新是与每个区块相关的基础费用（每个单位的gas）的介绍。该费用根据网络拥塞情况或涨或跌，推动着网络交通回到目标级。
                </p>
                <p>
                    在EIP-1559机制下，交易发起者制定了一个费用容量（他们愿意支付的每个单位的，交易包含的花费的gas最大值）。
                </p>
                <p>
                    当费用容量少于区块基础费用的时候，它将不能被包含在区块中。交易发起者也可以制定一个小费（同样也是每单位的gas），这个小费也被区块矿工收取。
                </p>
                <p>
                    与单一价格拍卖不同，交易发起者只需支付最低的 a) 费用容量 b)
                    基础费用和小费，再增加交易所使用的gas。所有基本费用的收入被消耗了，导致了补偿整个网络执行交易所花费资源的通货紧缩压力。
                </p>
                <p>
                    反而言之，矿工获得最低的 a)小费 b) 费用容量减去基础费用，
                    加上交易所使用的gas。
                </p>
                <p>
                    在这个机制下，交易发起者可以确保他们的高优先级交易仍可以进入区块链，并且支付比通常所需少得多的费用。
                </p>
                <div class="yswarp">
                    <span class="ys">Filecoin中的EIP-1559</span>
                </div>
                <p>EIP-1559有大量与Filecoin设计考虑一致的属性：</p>
                <p>
                    · 效率性。EIP-1559勾画了一个更有效的设置和计算gas费的模型。
                </p>
                <p>· 用户体验。估算和费用设置比参加首价拍卖要容易得多。</p>
                <p>
                    · 重要消息吞吐量。
                    在Filecoin中的WindowPost消息对时间的要求非常严格，并且因此必须以抗拥塞的方式进行处理。EIP-1559为此类消息提供了更高的可靠性和吞吐量。
                </p>
                <p>
                    · 因交易获益的网络。
                    整个网络承担处理交易的成本，并因此得到相应的补偿。
                </p>
                <p>
                    由于所有这些原因，Filecoin已经将EIP-1559进行小的调整后合并到其核心协议中。Filecoin使用tipsets;它的交易在被执行之前会进入链中，在这之前无法确定gas的实际用量。因此，Filecoin需要用户提供交易预估的gas限额。因此Filecoin要求用户提供交易的估算的gas限额。为了适当地调整激励措施，超过一定限度的高估将通过高估燃烧来惩罚。
                </p>
                <div class="yswarp">
                    <span class="ys">当前成果与改进</span>
                </div>
                <p>EIP-1559已经在Filecoin主网实施并运行。目前，每天由网络交易的FIL消耗高达10万至15万。因此融入该标准带来了至少两个关键性的益处：</p>
            <p>· 高价值交易的快速通道。 有时，存储待上链信息威胁到了对时间更为敏感的WindowPost消息定价。然而，正如预期那样，融入EIP-1559向Filecoin参与者提供了低成本的、解决拥塞的、直截了当的机制。 </p>
           <p>· 网络容量管理。到目前为止，EIP-1559的基础费用机制百分百确保了网络的容量。</p>
            <p>随着时间的推移，交易发起者在估算交易所需的gas量方面完成得更好了，从而在长期上减少高估导致的惩罚。</p>
            <p>我们还有一些改进的余地：基本费用差异很大，其变化率曲线很陡峭。这是由于随着链上存储量的增加导致的网络拥塞。在过去，这也致使了关键的WindowPost消息定价升高。</p>
            <p>Filecoin社区可以研究许多不同的方法来解决这些定价问题：</p>
            <p>· Gas控制通道。一种可能解决网络拥塞的的方法是将控制通道与数据通道分离，交易创建专用的通道，留出每个区块的一部分给到对区块链功能至关重要的特定消息。</p>
            <p>· 消息类型费用结构。解决这个问题的另一种可行的方法是降低WindowPost的成本，或者增加其他消息的成本，特别是Pre/ProveCommit消息。</p>
            <p>· 基本费用变化率。 基本费用随时间推移，费率变化曲线过于陡峭，可以引入与gas模型无关的其他方法来帮助缓解拥塞，让曲线变化更平滑；</p>
            <p> 扩展证明。 扩展Filecoin的证明机制构想包括SNARK的批量验证，以减少需要预先完成的验证量。</p>
            <p>· 扩展共识。 考虑到当前的拥塞率，Filecoin可能需要快速参考采用分片机制。</p>
                  <div class="yswarp">
                    <span class="ys">未来展望</span>
                </div>
                <p>展望未来，还有许多基于Filecoin网络目前所取得的成果所做的数据分析工作，以及通过EIP-1159的想法与其他研究人员和区块链社区进行开发的合作机会。一些可能的调查方向包括了在gas模型（当前模式可能存在效率低下的问题）中引入排队论，保证某些消息和交易的服务质量，并探索将可以在未来的时间点执行的加密交易引入区块链的方法。</p>
            </div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
import headnav from "@/funcomponents/head";
import foot from "@/components/foot";
export default {
    components: {
        headnav,
        foot,
    },
    mounted() {},
    methods: {
        back() {
                this.$router.push('/news')
        },
                goindex(){
            this.$router.push('/')
        }
    },
};
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
    font-size: 15px;
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