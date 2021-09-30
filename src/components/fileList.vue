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
    <div class="overviewHead">{{ $t('thirdItem') }}</div>
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
            <div class="jsonTableItem_3 longText">AWS4-HMAC-SHA256 Credential=newuser1/20210319/us-east-1/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=67d505cd2a17a58b141a9f2963d0e662d47c379ea203b73a9a02e42311c9c1b3</div>
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
            <div class="jsonTableItem_3">20210319T114402Z</div>
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
<!--        <div class="setSome"></div>-->
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
            >{{ $t('encryptionRule') }}</span
            >
          </div>
          <div
            class="overviewFootItem overviewFootItemRight"
            @click="changeApiFunnext"
            @mouseover="nextHoverFun()"
            @mouseout="nextHoverOutFun()"
          >
            <div class="overviewFootItemTop">
              <span>{{ $t('nextOne') }}</span>
              <img
                src="../assets/apiImg/arrow／page_r_nor@2x.png"
                class="RightImg"
                alt=""
              />
            </div>
            <span
              class="overviewFootItemBottom"
              :class="{ hoverUnderlineStyle: nextHoverShow }"
            >{{ $t('uploadFiles') }}</span>
          </div>
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
          name: 'FileId',
          type: 'Int',
          info: this.$t('itemContent21'),
          remark: 'Y'
        },
        {
          name: 'Key',
          type: 'String',
          info: this.$t('itemContent22'),
          remark: 'Y'
        },
        {
          name: 'LastModified',
          type: 'String',
          info: this.$t('itemContent23'),
          remark: 'Y'
        },
        {
          name: 'Size',
          type: 'Int',
          info: this.$t('itemContent24'),
          remark: 'Y'
        },
        {
          name: 'ContentType',
          type: 'String',
          info: this.$t('itemContent25'),
          remark: 'Y'
        },
        {
          name: 'State',
          type: 'Int',
          info: this.$t('itemContent26'),
          remark: 'Y'
        },
        {
          name: 'FileType',
          type: 'Int',
          info: this.$t('itemContent27'),
          remark: 'Y'
        }
      ]
    }
  },
  created () {},
  methods: {
    changeApiFunprew () {
      EventBus.$emit('changeAPi', '3-2')
    },
    changeApiFunnext () {
      EventBus.$emit('changeAPi', '3-4')
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
