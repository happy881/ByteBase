<style scoped>
  .setHeight {
    height: 100%;
  }
  .longText {
    padding: 0 16px;
    word-break: break-word;
  }
</style>
<template>
    <div class="overview">
        <div class="overviewHead">{{ $t('forthItem') }}</div>
        <div class="overviewBanner">
            <div class="overviewBannermid">
                <div class="overviewTitle">
                    <div class="overviewTitleLine"></div>
                    <span>{{ $t('itemContent29') }}</span>
                </div>
                <div class="jianJie">
                    <p class="jianJie_5Title">{{ $t('itemContent30') }}</p>
                    <div class="jianJie_4">
                        <div class="jianJie_4_item">
                            <div class="jianJie_4_item_l">{{ $t('itemContent13') }}</div>
                            <div class="jianJie_4_item_r">
<!--                                https://server-cloud.bytebase.cn/cloudApi/v1/upload-->
                              {{ $t('itemContent14') + '{' + $t('itemContent22') + '}' }}
<!--                              https://bos.bytebase.cn/{数据主体简称}/{文件名}-->
                            </div>
                        </div>
                        <div class="jianJie_4_item">
                            <div class="jianJie_4_item_l">{{ $t('itemContent15') }}</div>
                            <div class="jianJie_4_item_r">PUT</div>
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
                        <div class="jsonTableItem_3 longText">AWS4-HMAC-SHA256 Credential=jitash/20210322/cn-north-1/s3/aws4_request,
                          SignedHeaders=host;x-amz-content-sha256;x-amz-date;x-amz-decoded-content-length,
                          Signature=836f0a1b6fed9c59392197716984257285a9b31a0161b2dfe45ee466a77cbd14</div>
                        <div class="jsonTableItem_4">Y</div>
                    </div>
                  <div class="jsonTableItem">
                    <div class="jsonTableItem_1">Content-Type</div>
                    <div class="jsonTableItem_2">String</div>
                    <div class="jsonTableItem_3">image/jpeg</div>
                    <div class="jsonTableItem_4">-</div>
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
                      <div class="jsonTableItem_3">STREAMING-AWS4-HMAC-SHA256-PAYLOAD</div>
                      <div class="jsonTableItem_4">Y</div>
                    </div>
                    <div class="jsonTableItem">
                      <div class="jsonTableItem_1">X-Amz-Date</div>
                      <div class="jsonTableItem_2">String</div>
                      <div class="jsonTableItem_3">20210322T022510Z</div>
                      <div class="jsonTableItem_4">Y</div>
                    </div>
                    <div class="jsonTableItem setHeight">
                      <div class="jsonTableItem_1">X-Amz-Decoded-Content-Length</div>
                      <div class="jsonTableItem_2">String</div>
                      <div class="jsonTableItem_3">11223</div>
                      <div class="jsonTableItem_4">-</div>
                    </div>
                </div>
                <div class="overviewTitle">
                    <div class="overviewTitleLine"></div>
                    <span>{{ $t('itemContent33') }}</span>
                </div>
                <div class="jianJie_5Title">{{ $t('itemContent20') }}</div>
                <div class="jsonTable">
                    <div class="jsonTableItem jsonTableItemHead">
                      <div class="jsonTableItem_1">{{ $t('itemContent31') }}</div>
                      <div class="jsonTableItem_2">{{ $t('itemContent15') }}</div>
                      <div class="jsonTableItem_3">{{ $t('itemContent18') }}</div>
                      <div class="jsonTableItem_4">{{ $t('itemContent19') }}</div>
                    </div>
                    <div
                        class="jsonTableItem setHeight"
                        v-for="(item, index) in resultList"
                        :key="index"
                    >
                        <div class="jsonTableItem_1">{{ item.name }}</div>
                        <div class="jsonTableItem_2">{{ item.type }}</div>
                        <div class="jsonTableItem_3 longText">{{ item.info }}</div>
                        <div class="jsonTableItem_4">{{ item.remark }}</div>
                    </div>
                </div>
                <div class="jsonTable">
                  <div class="jsonTableItem jsonTableItemHead">
                    <div class="jsonTableItem_3">header</div>
                    <div class="jsonTableItem_3">{{ $t('itemContent34') }}</div>
                  </div>
                  <div class="jsonTableItem">
                    <div class="jsonTableItem_3">Etag</div>
                    <div class="jsonTableItem_3">{{ $t('itemContent35') }}</div>
                  </div>
                </div>
              <!--获取分片上传ID-->
              <div class="overviewTitle">
                <div class="overviewTitleLine"></div>
                <span>{{ $t('itemContent36') }}</span>
              </div>
              <div class="jianJie">
                <p class="jianJie_5Title">{{ $t('itemContent37') }}</p>
                <div class="jianJie_4">
                  <div class="jianJie_4_item">
                    <div class="jianJie_4_item_l">{{ $t('itemContent13') }}</div>
                    <div class="jianJie_4_item_r">
                      <!--                                https://server-cloud.bytebase.cn/cloudApi/v1/upload-->
                      {{ $t('itemContent14') + '{' + $t('itemContent22') + '}' + '?' + 'uploads'}}
<!--                      https://bos.bytebase.cn/{数据主体简称}/{文件名}?uploads-->
                    </div>
                  </div>
                  <div class="jianJie_4_item">
                    <div class="jianJie_4_item_l">{{ $t('itemContent15') }}</div>
                    <div class="jianJie_4_item_r">POST</div>
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
                  <div class="jsonTableItem_3 longText">
                    AWS4-HMAC-SHA256 Credential=jitash/20210323/cn-north-1/s3/aws4_request, SignedHeaders=content-type;host;x-amz-content-sha256;x-amz-date, Signature=ae0692eb4f3595775c72850f9c11e2b05b334327288135f00140f54f4359bd8c
                  </div>
                  <div class="jsonTableItem_4">Y</div>
                </div>
                <div class="jsonTableItem">
                  <div class="jsonTableItem_1">Content-Type</div>
                  <div class="jsonTableItem_2">String</div>
                  <div class="jsonTableItem_3">application/zip</div>
                  <div class="jsonTableItem_4">-</div>
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
                  <div class="jsonTableItem_3">UNSIGNED-PAYLOAD</div>
                  <div class="jsonTableItem_4">Y</div>
                </div>
                <div class="jsonTableItem">
                  <div class="jsonTableItem_1">X-Amz-Date</div>
                  <div class="jsonTableItem_2">String</div>
                  <div class="jsonTableItem_3">20210323T085657Z</div>
                  <div class="jsonTableItem_4">Y</div>
                </div>
              </div>
              <div class="overviewTitle">
                <div class="overviewTitleLine"></div>
                <span>{{ $t('itemContent33') }}</span>
              </div>
              <div class="jianJie_5Title">{{ $t('itemContent20') }}</div>
              <div class="jsonTable">
                <div class="jsonTableItem jsonTableItemHead">
                  <div class="jsonTableItem_3">{{ $t('itemContent31') }}</div>
                  <div class="jsonTableItem_3">{{ $t('itemContent18') }}</div>
                </div>
                <div
                  class="jsonTableItem setHeight"
                  v-for="(item, index) in resultList2"
                  :key="index"
                >
                  <div class="jsonTableItem_3">{{ item.name }}</div>
                  <div class="jsonTableItem_3 longText">{{ item.info }}</div>
                </div>
              </div>
<!--              分片上传-->
              <div class="overviewTitle">
                <div class="overviewTitleLine"></div>
                <span>{{ $t('itemContent38') }}</span>
              </div>
              <div class="jianJie">
                <div class="jianJie_4">
                  <div class="jianJie_4_item">
                    <div class="jianJie_4_item_l">{{ $t('itemContent13') }}</div>
                    <div class="jianJie_4_item_r">
                      {{ $t('itemContent39') }}
                      <!--                                https://server-cloud.bytebase.cn/cloudApi/v1/upload-->
<!--                      https://bos.bytebase.cn/{数据主体简称}/{文件名}?partNumber={片号}&uploadId={上传Id}-->
                    </div>
                  </div>
                  <div class="jianJie_4_item">
                    <div class="jianJie_4_item_l">{{ $t('itemContent15') }}</div>
                    <div class="jianJie_4_item_r">PUT</div>
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
                  <div class="jsonTableItem_3 longText">
                    AWS4-HMAC-SHA256 Credential=jitash/20210324/cn-north-1/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=d3dc7e80c7d493dcaf70af710930c24d5dba2bad14a2fdc10f964a623029f254
                  </div>
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
                  <div class="jsonTableItem_3">UNSIGNED-PAYLOAD</div>
                  <div class="jsonTableItem_4">Y</div>
                </div>
                <div class="jsonTableItem">
                  <div class="jsonTableItem_1">X-Amz-Date</div>
                  <div class="jsonTableItem_2">String</div>
                  <div class="jsonTableItem_3">20210324T022920Z</div>
                  <div class="jsonTableItem_4">Y</div>
                </div>
              </div>
              <div class="overviewTitle">
                <div class="overviewTitleLine"></div>
                <span>{{ $t('itemContent33') }}</span>
              </div>
              <div class="jianJie_5Title">{{ $t('itemContent20') }}</div>
              <div class="jsonTable">
                <div class="jsonTableItem jsonTableItemHead">
                  <div class="jsonTableItem_1">{{ $t('itemContent31') }}</div>
                  <div class="jsonTableItem_2">{{ $t('itemContent15') }}</div>
                  <div class="jsonTableItem_3">{{ $t('itemContent18') }}</div>
                  <div class="jsonTableItem_4">{{ $t('itemContent19') }}</div>
                </div>
                <div
                  class="jsonTableItem setHeight"
                  v-for="(item, index) in resultList3"
                  :key="index"
                >
                  <div class="jsonTableItem_1">{{ item.name }}</div>
                  <div class="jsonTableItem_2">{{ item.type }}</div>
                  <div class="jsonTableItem_3 longText">{{ item.info }}</div>
                  <div class="jsonTableItem_4">{{ item.remark }}</div>
                </div>
              </div>
<!--              分片上传之后，通过接口通知服务端完成上传-->
              <div class="overviewTitle">
                <div class="overviewTitleLine"></div>
                <span>{{ $t('itemContent40') }}</span>
              </div>
              <div class="jianJie">
                <p class="jianJie_5Title">{{ $t('itemContent41') }}</p>
                <div class="jianJie_4">
                  <div class="jianJie_4_item">
                    <div class="jianJie_4_item_l">{{ $t('itemContent13') }}</div>
                    <div class="jianJie_4_item_r">
                      {{ $t('itemContent42') }}
                      <!--                                https://server-cloud.bytebase.cn/cloudApi/v1/upload-->
<!--                      https://bos.bytebase.cn/{数据主体简称}/{文件名}?uploadId={上传id}-->
                    </div>
                  </div>
                  <div class="jianJie_4_item">
                    <div class="jianJie_4_item_l">{{ $t('itemContent15') }}</div>
                    <div class="jianJie_4_item_r">POST</div>
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
                  <div class="jsonTableItem_3 longText">
                    AWS4-HMAC-SHA256 Credential=jitash/20210324/cn-north-1/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=4f4c3b4479f3c19a70b77c8ae52e4d0ed18532c5787a9e1033dfd01d205d4648
                  </div>
                  <div class="jsonTableItem_4">Y</div>
                </div>
                <div class="jsonTableItem">
                  <div class="jsonTableItem_1">Content-Type</div>
                  <div class="jsonTableItem_2">String</div>
                  <div class="jsonTableItem_3">application/zip</div>
                  <div class="jsonTableItem_4">-</div>
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
                  <div class="jsonTableItem_3 longText">3ba1003aaea0990f6308f8a6cef0e22e2f9c59291603b405899f775b5a5c8aaa</div>
                  <div class="jsonTableItem_4">Y</div>
                </div>
                <div class="jsonTableItem">
                  <div class="jsonTableItem_1">X-Amz-Date</div>
                  <div class="jsonTableItem_2">String</div>
                  <div class="jsonTableItem_3">20210324T022933Z</div>
                  <div class="jsonTableItem_4">Y</div>
                </div>
              </div>
              <div class="overviewTitle">
                <div class="overviewTitleLine"></div>
                <span>{{ $t('itemContent33') }}</span>
              </div>
              <div class="jianJie_5Title">{{ $t('itemContent20') }}</div>
              <div class="jsonTable">
                <div class="jsonTableItem jsonTableItemHead">
                  <div class="jsonTableItem_3">{{ $t('itemContent31') }}</div>
                  <div class="jsonTableItem_3">{{ $t('itemContent18') }}</div>
                </div>
                <div
                  class="jsonTableItem setHeight"
                  v-for="(item, index) in resultList4"
                  :key="index"
                >
                  <div class="jsonTableItem_3">{{ item.name }}</div>
                  <div class="jsonTableItem_3 longText">{{ item.info }}</div>
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
                        >{{ $t('fileList') }}</span>
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
                        >{{ $t('downloadFiles') }}</span>
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
      bodyList: [
        {
          name: 'files',
          info: this.$t('itemContent43'),
          type: 'Object',
          remark: 'Y'
        },
        {
          name: 'userId',
          info: this.$t('itemContent44'),
          type: 'String',
          remark: 'Y'
        },
        {
          name: 'path',
          info: this.$t('itemContent45'),
          type: 'String',
          remark: 'Y'
        }
      ],
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
            'Content-Length:[0] \n' +
            'Content-Security-Policy:[block-all-mixed-content] \n' +
            'Date:[Tue, 23 Mar 2021 03:21:10 GMT]\n' +
            'Etag:["51bc10f0a6543ec462df6337285960f3"] \n' +
            'Server:[MinIO] \n' +
            'Vary:[Origin] \n' +
            'X-Amz-Request-Id:[166EDA99E16EAF20] \n' +
            'X-Xss-Protection:[1; mode=block]\n' +
            ']',
          remark: 'Y'
        }
      ],
      resultList2: [
        {
          name: 'Bucket',
          // type: 'String',
          info: this.$t('itemContent46')
          // remark: 'Y'
        },
        {
          name: 'Key',
          // type: 'String',
          info: this.$t('itemContent47')
          // remark: 'Y'
        },
        {
          name: 'UploadId',
          // type: 'String',
          info: this.$t('itemContent48')
          // remark: 'Y'
        }
      ],
      resultList3: [
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
            'Content-Length:[0] \n' +
            'Content-Security-Policy:[block-all-mixed-content] \n' +
            'Date:[Wed, 24 Mar 2021 02:29:27 GMT]\n' +
            'Etag:["77294730820aa5d43681d58f961436fe"] \n' +
            'Server:[MinIO] \n' +
            'Vary:[Origin] \n' +
            'X-Amz-Request-Id:[166F265A393CCB18] \n' +
            'X-Xss-Protection:[1; mode=block]\n' +
            ']',
          remark: 'Y'
        }
      ],
      resultList4: [
        {
          name: 'Bucket',
          // type: 'String',
          info: this.$t('itemContent46')
          // remark: 'Y'
        },
        {
          name: 'Key',
          // type: 'String',
          info: this.$t('itemContent47')
          // remark: 'Y'
        },
        {
          name: 'ETag',
          // type: 'String',
          info: this.$t('itemContent49')
          // remark: 'Y'
        }
      ]
    }
  },
  created () {},
  methods: {
    changeApiFunprew () {
      EventBus.$emit('changeAPi', '3-3')
    },
    changeApiFunnext () {
      EventBus.$emit('changeAPi', '3-5')
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
