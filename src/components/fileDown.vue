<style scoped>
  .setHeight {
    height: 100%;
  }
  .longText {
    padding: 0 16px;
    word-break: break-word;
  }
  .setStyle {
    margin-bottom: 10px;
  }
  .setSome {
    margin: 10px 0;
    height: 10px;
  }
</style>
<template>
  <div class="overview">
    <div class="overviewHead">{{ $t('fifthItem') }}</div>
    <div class="overviewBanner">
      <div class="overviewBannermid">

        <div class="overviewTitle">
          <div class="overviewTitleLine"></div>
          <span>{{ $t('Introduction') }}</span>
        </div>
        <div class="jianJie">
          <div class="jianJie_4">
            <div class="jianJie_4_item">
              <div class="jianJie_4_item_l">{{ $t('itemContent13') }}</div>
              <div class="jianJie_4_item_r">
                {{ $t('itemContent14') }}
              </div>
            </div>
            <div class="jianJie_4_item">
              <div class="jianJie_4_item_l">{{ $t('itemContent15') }}</div>
              <div class="jianJie_4_item_r">GET</div>
            </div>
          </div>
        </div>
        <div class="overviewTitle">
          <div class="overviewTitleLine"></div>
          <span>{{ $t('itemContent16') }}</span>
        </div>
        <div class="jianJie_5Title">{{ $t('itemContent17') }}</div>
        <div class="jsonTable">
          <div class="jsonTableItem jsonTableItemHead">
            <div class="jsonTableItem_1">header</div>
            <div class="jsonTableItem_2">{{ $t('itemContent15') }}</div>
            <div class="jsonTableItem_3">{{ $t('itemContent18') }}</div>
            <div class="jsonTableItem_4">{{ $t('itemContent19') }}</div>
          </div>
          <div class="jsonTableItem setHeight">
            <div class="jsonTableItem_1">Authorization</div>
            <div class="jsonTableItem_2">String</div>
            <div class="jsonTableItem_3 longText">AWS4-HMAC-SHA256 Credential=jitash/20210324/cn-north-1/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=205d552fc7bbccce8cad511190e2bb21fd9b43747a78cd66656e4670030a1c36</div>
            <div class="jsonTableItem_4">Y</div>
          </div>
          <div class="jsonTableItem">
            <div class="jsonTableItem_1">User-Agent</div>
            <div class="jsonTableItem_2">String</div>
            <div class="jsonTableItem_3">PostmanRuntime/7.26.10</div>
            <div class="jsonTableItem_4">-</div>
          </div>
          <div class="jsonTableItem setHeight">
            <div class="jsonTableItem_1">X-Amz-Content-Sha256</div>
            <div class="jsonTableItem_2">String</div>
            <div class="jsonTableItem_3 longText">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
            <div class="jsonTableItem_4">-</div>
          </div>
          <div class="jsonTableItem">
            <div class="jsonTableItem_1">X-Amz-Date</div>
            <div class="jsonTableItem_2">String</div>
            <div class="jsonTableItem_3">20210324T025039Z</div>
            <div class="jsonTableItem_4">Y</div>
          </div>
        </div>
        <div class="overviewTitle">
          <div class="overviewTitleLine"></div>
          <span>{{ $t('itemContent33') }}</span>
        </div>
        <div class="jianJie_5Title">{{ $t('itemContent20') }}</div>
        <div class="jsonTable setStyle">
          <div class="jsonTableItem jsonTableItemHead">
            <div class="jsonTableItem_1">{{ $t('itemContent31') }}</div>
            <div class="jsonTableItem_2">{{ $t('itemContent15') }}</div>
            <div class="jsonTableItem_3">{{ $t('itemContent18') }}</div>
            <div class="jsonTableItem_4">{{ $t('itemContent19') }}</div>
          </div>
          <div class="jsonTableItem setHeight" v-for="(item, index) in resultList" :key="index">
            <div class="jsonTableItem_1">{{ item.name }}</div>
            <div class="jsonTableItem_2">{{ item.type }}</div>
            <div class="jsonTableItem_3 longText">{{ item.info }}</div>
            <div class="jsonTableItem_4">{{ item.remark }}</div>
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
              <span>{{ $t('lastOne') }}</span>
            </div>
            <span
              class="overviewFootItemBottom"
              :class="{ hoverUnderlineStyle: perHoverShow }"
            >{{ $t('itemContent28') }}</span>
          </div>
<!--          <div-->
<!--            class="overviewFootItem overviewFootItemRight"-->
<!--            @click="changeApiFunnext"-->
<!--            @mouseover="nextHoverFun()"-->
<!--            @mouseout="nextHoverOutFun()"-->
<!--          >-->
<!--            <div class="overviewFootItemTop">-->
<!--              <span>下一篇</span>-->
<!--              <img-->
<!--                src="../assets/apiImg/arrow／page_r_nor@2x.png"-->
<!--                class="RightImg"-->
<!--                alt=""-->
<!--              />-->
<!--            </div>-->
<!--            <span-->
<!--              class="overviewFootItemBottom"-->
<!--              :class="{ hoverUnderlineStyle: nextHoverShow }"-->
<!--            >检索文件</span-->
<!--            >-->
<!--          </div>-->
        </div>
      </div>

    </div>

  </div>
</template>
<script>
import { EventBus } from '../../event-bus.js'
export default {
  data () {
    return {
      nextHoverShow: false,
      perHoverShow: false,
      resultList: [
        {
          name: 'Status',
          type: 'String',
          info: '200 OK',
          remark: 'Y'
        },
        {
          name: 'StatusCode',
          type: 'Int',
          info: '200',
          remark: 'Y'
        },
        {
          name: 'Proto',
          type: 'String',
          info: 'HTTP/1.1',
          remark: 'Y'
        },
        {
          name: 'ProtoMajor',
          type: 'Int',
          info: '1',
          remark: 'Y'
        },
        {
          name: 'Proto',
          type: 'String',
          info: 'HTTP/1.1',
          remark: 'Y'
        },
        {
          name: 'Header',
          type: 'Header',
          info: 'map[\n' +
            'Accept-Ranges:[bytes] \n' +
            'Content-Length:[174714] \n' +
            'Content-Security-Policy:[block-all-mixed-content] \n' +
            'Date:[Wed, 24 Mar 2021 02:50:39 GMT]\n' +
            'Etag:["c1427a68c439a7f95a6addf53eeeede6"] \n' +
            'Server:[MinIO] \n' +
            'Vary:[Origin] \n' +
            'X-Amz-Request-Id:[166F2783FF0EBC28] \n' +
            'X-Xss-Protection:[1; mode=block]\n' +
            ']',
          remark: 'Y'
        }
      ]
    }
  },
  created () {},
  methods: {
    changeApiFunprew () {
      EventBus.$emit('changeAPi', '3-4')
    },
    changeApiFunnext () {
      EventBus.$emit('changeAPi', '3-6')
    },
    changeApiFun (type) {
      this.$emit('onChange', type)
    },
    nextHoverFun () {
      this.nextHoverShow = true
    },
    nextHoverOutFun () {
      this.nextHoverShow = false
    },
    preHoverFun () {
      this.perHoverShow = true
    },
    preHoverOutFun () {
      this.perHoverShow = false
    }
  }
}
</script>
