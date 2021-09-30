<style scoped>
</style>
<template>
    <div class="overview">
        <div class="overviewHead">API文档-查询认证状态</div>
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
                            https://server-cloud.bytebase.cn/cloudApi/v1/findUserStateById
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
                        <div style="padding-left: 20px">
                            "state":1&nbsp;&nbsp;&nbsp;1-未认证 2-已认证
                            3-认证失败
                        </div>
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
                    >用户注册</span
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
                    >上传文件</span
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
                    info: "用户 id",
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
                    name: "state",
                    type: "Number",
                    info: "1-未认证 2-已认证 3-认证失败",
                    remark: "Y",
                },
                {
                    name: "msg",
                    type: "String",
                    info: "返回码描述",
                    remark: "Y",
                },
            ],
        };
    },
    created() {},
    methods: {
        changeApiFunprew(){
            EventBus.$emit("changeAPi","3-2")
        },
        changeApiFunnext(){
       EventBus.$emit("changeAPi","3-4")
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