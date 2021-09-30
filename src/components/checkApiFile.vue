<style scoped>
</style>
<template>
    <div class="overview">
        <div class="overviewHead">
            API文档-查询文件信息(包括上链信息 文件信息)
        </div>
        <div class="overviewBanner">
            <div class="overviewBannermid">
                            <div class="overviewTitle">
                <div class="overviewTitleLine"></div>
                <span>简介</span>
            </div>
            <div class="jianJie">
                <div class="jianJie_4">
                    <div class="jianJie_4_item">
                        <div class="jianJie_4_item_l">访问地址</div>
                        <div class="jianJie_4_item_r">
                            https://server-cloud.bytebase.cn/cloudApi/v1/findFileInfo
                        </div>
                    </div>
                    <div class="jianJie_4_item">
                        <div class="jianJie_4_item_l">类型</div>
                        <div class="jianJie_4_item_r">POST</div>
                    </div>
                    <div class="jianJie_4_item">
                        <div class="jianJie_4_item_l">状态码</div>
                        <div class="jianJie_4_item_r">
                            200,400204,-400208,-400300
                        </div>
                    </div>
                </div>
                <div class="jianJie_6">
                    <div class="jianJie_5Title">响应码</div>
                    <div class="jianJie_4">
                        <div class="jianJie_4_item">
                            <div class="jianJie_4_item_l">-400208</div>
                            <div class="jianJie_4_item_r">签名验证失败</div>
                        </div>
                        <div class="jianJie_4_item">
                            <div class="jianJie_4_item_l">-400300</div>
                            <div class="jianJie_4_item_r">参数校验失败</div>
                        </div>
                        <div class="jianJie_4_item">
                            <div class="jianJie_4_item_l">200</div>
                            <div class="jianJie_4_item_r">成功</div>
                        </div>
                        <div class="jianJie_4_item">
                            <div class="jianJie_4_item_l">-400203</div>
                            <div class="jianJie_4_item_r">用户不存在</div>
                        </div>
                        <div class="jianJie_4_item">
                            <div class="jianJie_4_item_l">-500100</div>
                            <div class="jianJie_4_item_r">
                                服务器内部发生代码执行错误
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overviewTitle">
                <div class="overviewTitleLine"></div>
                <span>请求接口格式：json</span>
            </div>
            <div class="jianJie_5Title">请求参数</div>
            <div class="jsonTable">
                <div class="jsonTableItem jsonTableItemHead">
                    <div class="jsonTableItem_1">header</div>
                    <div class="jsonTableItem_2">类型</div>
                    <div class="jsonTableItem_3">描述</div>
                    <div class="jsonTableItem_4">必填</div>
                </div>
                <div class="jsonTableItem">
                    <div class="jsonTableItem_1">Content-Type</div>
                    <div class="jsonTableItem_2">String</div>
                    <div class="jsonTableItem_3">application/json</div>
                    <div class="jsonTableItem_4">Y</div>
                </div>
                <div class="jsonTableItem">
                    <div class="jsonTableItem_1">Authorization</div>
                    <div class="jsonTableItem_2">String</div>
                    <div class="jsonTableItem_3">-</div>
                    <div class="jsonTableItem_4">Y</div>
                </div>
                <div class="jsonTableItem jsonTableItemHead">
                    <div class="jsonTableItem_1">body</div>
                    <div class="jsonTableItem_2">类型</div>
                    <div class="jsonTableItem_3">描述</div>
                    <div class="jsonTableItem_4">必填</div>
                </div>
                <div
                    class="jsonTableItem"
                    v-for="(item, index) in bodyList"
                    :key="index"
                >
                    <div class="jsonTableItem_1">{{ item.name }}</div>
                    <div class="jsonTableItem_2">{{ item.type }}</div>
                    <div class="jsonTableItem_3">{{ item.info }}</div>
                    <div class="jsonTableItem_4">{{ item.remark }}</div>
                </div>
            </div>
            <div class="jsonInfo">
                <div class="jianJie_5Title">请求示例</div>
                <div class="jsonInfoBox">
                    <div>{</div>
                    <div class="jsonInfoBoxContent">
                        <div>
                            "userId": "3e2e29f8-7186-2905-ffbc-180aa19bf675",
                        </div>
                        <div>
                            "fileId": "3e2e29f8-7186-2905-ffbc-180aa19bf675",
                        </div>
                    </div>
                    <div>}</div>
                </div>
            </div>
            <div class="overviewTitle">
                <div class="overviewTitleLine"></div>
                <span>返回接口格式：json</span>
            </div>
            <div class="jianJie_5Title">返回参数</div>
            <div class="jsonTable">
                <div class="jsonTableItem jsonTableItemHead">
                    <div class="jsonTableItem_1">参数名</div>
                    <div class="jsonTableItem_2">类型</div>
                    <div class="jsonTableItem_3">描述</div>
                    <div class="jsonTableItem_4">必填</div>
                </div>
                <div
                    class="jsonTableItem"
                    v-for="(item, index) in resultList"
                    :key="index"
                >
                    <div class="jsonTableItem_1">{{ item.name }}</div>
                    <div class="jsonTableItem_2">{{ item.type }}</div>
                    <div class="jsonTableItem_3">{{ item.info }}</div>
                    <div class="jsonTableItem_4">{{ item.remark }}</div>
                </div>
            </div>
            <div class="jsonInfo">
                <div class="jianJie_5Title">返回示例</div>
                <div class="jsonInfoBox">
                    <div>{</div>
                    <div class="jsonInfoBoxContent">
                        <div>"code": 200,</div>
                        <div>"data": {</div>
                        <div style="padding-left: 20px">"list":[{</div>
                        <div style="padding-left: 40px">
                            "dealCid":
                            "bafyreifas3qmns72foejjgmlgsnxgaxw5cqctlkxy6ixiwzrd5ke7uypbq",
                        </div>
                        <div style="padding-left: 40px">
                            "dealMiner": "f02514",
                        </div>
                        <div style="padding-left: 40px">
                            "fileCid": "f4fb115b-ec8c-6a70-4efc-d34a5b96c04d",
                        </div>
                        <div style="padding-left: 40px">
                            "proposalCid":
                            "bafyreifas3qmns72foejjgmlgsnxgaxw5cqctlkxy6ixiwzrd5ke7uypbq",
                        </div>
                        <div style="padding-left: 40px">
                            "message": "unexpected deal status while waiting for
                            data request: 11 (StorageDealFailing)",
                        </div>
                        <div style="padding-left: 40px">
                            "provider": "f03274",
                        </div>
                        <div style="padding-left: 40px">"dealId": 0,</div>
                        <div style="padding-left: 40px">
                            "client":
                            "f3uv4ftkrg6k2grkuqakpjidituemqqh5bvylrqe2mzprthtwi5qzshv3jeei575mtylrg3bofnlq4x53ghgiq",
                        </div>
                        <div style="padding-left: 40px">
                            "pieceSize": 133169152,
                        </div>
                        <div style="padding-left: 40px">
                            "verifiedDeal": false,
                        </div>
                        <div style="padding-left: 40px">"endDeal": 0,</div>
                        <div style="padding-left: 40px">"startDeal": 0,</div>
                        <div style="padding-left: 40px">"price": "",</div>
                        <div style="padding-left: 40px">
                            "minerCollateral": "",
                        </div>
                        <div style="padding-left: 40px">"state": 0,</div>
                        <div style="padding-left: 40px">"stateName": "",</div>
                        <div style="padding-left: 20px">}]</div>
                        <div>},</div>
                        <div>"msg": "Success"</div>
                    </div>
                    <div>}</div>
                </div>
            </div>
                    <div class="overviewFoot">
            <div
                class="overviewFootItem"
                @click="changeApiFunprew"
                @mouseover="preHoverFun()"
                @mouseout="preHoverOutFun()"
            >
                <div class="overviewFootItemTop">
                    <img
                        src="../assets/apiImg/arrow／page_l_nor@2x.png"
                        class="LeftImg"
                        alt=""
                    />
                    <span>上一篇</span>
                </div>
                <span
                    class="overviewFootItemBottom"
                    :class="{ hoverUnderlineStyle: perHoverShow }"
                    >上传文件</span
                >
            </div>
            <div
                class="overviewFootItem overviewFootItemRight"
                @click="changeApiFunnext"
                @mouseover="nextHoverFun()"
                @mouseout="nextHoverOutFun()"
            >
                <div class="overviewFootItemTop">
                    <span>下一篇</span>
                    <img
                        src="../assets/apiImg/arrow／page_r_nor@2x.png"
                        class="RightImg"
                        alt=""
                    />
                </div>
                <span
                    class="overviewFootItemBottom"
                    :class="{ hoverUnderlineStyle: nextHoverShow }"
                    >检索文件</span
                >
            </div>
        </div>
            </div>

        </div>

    </div>
</template>
<script>
import { EventBus } from '../../event-bus.js'
export default {
    data() {
        return {
            nextHoverShow: false,
            perHoverShow: false,
            bodyList: [
                {
                    name: "userId",
                    info: " 用户 id",
                    type: "String",
                    remark: "Y",
                },
                {
                    name: "fileId",
                    info: "文件 id",
                    type: "String",
                    remark: "Y",
                },
            ],
            resultList: [
                {
                    name: "code",
                    type: "Number",
                    info: "返回码",
                    remark: "Y",
                },
                {
                    name: "data",
                    type: "Object",
                    info: "数据结果集",
                    remark: "Y",
                },
                {
                    name: "list",
                    type: "Arrar",
                    info: "列表",
                    remark: "Y",
                },
                {
                    name: "DealMiner",
                    type: "String",
                    info: " 接收 deal 的矿工",
                    remark: "Y",
                },
                {
                    name: "FileCid",
                    type: "String",
                    info: "文件唯一标识",
                    remark: "Y",
                },
                {
                    name: "ProposalCid",
                    type: "String",
                    info: "标识 deal 唯一的 id",
                    remark: "Y",
                },
                {
                    name: "Message",
                    type: "String",
                    info: "消息",
                    remark: "Y",
                },
                {
                    name: "Provider",
                    type: "String",
                    info: "接收方",
                    remark: "Y",
                },
                {
                    name: "DealId",
                    type: "int",
                    info: "订单 id",
                    remark: "Y",
                },
                {
                    name: "Client",
                    type: "String",
                    info: "发送方",
                    remark: "Y",
                },
                {
                    name: "PieceSize",
                    type: "int",
                    info: "文件大小",
                    remark: "Y",
                },
                {
                    name: "VerifiedDeal",
                    type: "bool",
                    info: "验证结果",
                    remark: "Y",
                },
                {
                    name: "EndDeal",
                    type: "int",
                    info: "deal 结束高度",
                    remark: "Y",
                },
                {
                    name: "StartDeal",
                    type: "int",
                    info: "deal 起始高度",
                    remark: "Y",
                },
                {
                    name: "Price",
                    type: "int",
                    info: "价格",
                    remark: "Y",
                },
                {
                    name: "MinerCollateral",
                    type: "int",
                    info: "矿工的抵押",
                    remark: "Y",
                },
                {
                    name: "ClientCollateral",
                    type: "int",
                    info: "客户端的抵押",
                    remark: "Y",
                },
                {
                    name: "State",
                    type: "int",
                    info: "订单状态",
                    remark: "Y",
                },
                {
                    name: "StateName",
                    type: "String",
                    info: "订单状态描述",
                    remark: "Y",
                },
                {
                    name: "msg",
                    type: "String",
                    info: "接口响应描述",
                    remark: "Y",
                },
            ],
        };
    },
    created() {},
    methods: {
        changeApiFunprew(){
            EventBus.$emit("changeAPi","3-4")
        },
        changeApiFunnext(){
       EventBus.$emit("changeAPi","3-6")
        },
        changeApiFun(type) {
            this.$emit("onChange", type);
        },
        nextHoverFun() {
            this.nextHoverShow = true;
        },
        nextHoverOutFun() {
            this.nextHoverShow = false;
        },
        preHoverFun() {
            this.perHoverShow = true;
        },
        preHoverOutFun() {
            this.perHoverShow = false;
        },
    },
};
</script>