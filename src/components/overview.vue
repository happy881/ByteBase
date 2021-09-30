<style scoped>
.buzhouItem {
    width: 100%;
    height: 60px;
    background: #ffffff;
    border-radius: 4px;
    margin-bottom: 8px;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.buzhouItem:hover {
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
}

.buzhouItemTitle {
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #515a6e;
}

.buzhouItemInfo {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #808695;
}
.buzhouItemRight {
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.colorChange {
    color: #ef190f;
}

.overviewFootLeftdisable {
    cursor: not-allowed;
}

.setFont {
  font-size: 14px;
}

.keySecret, .accessKey {
  display: flex;
}

.overviewFootLeftTop {
    cursor: pointer;
}
</style>

<template>
    <div class="overview">
        <div class="overviewHead">{{ $t('firstItem') }}</div>
        <div class="overviewBanner">
            <div class="overviewBannermid">

                <div class="overviewTitle">
                    <div class="overviewTitleLine"></div>
                    <span>{{ $t('Introduction') }}</span>
                </div>
                <div class="jianJie">
                    <div class="jianJie_1">
                        {{ $t('IntroductionItem1') }}
                    </div>
                    <div class="jianJie_2">
                        {{ $t('IntroductionItem2') }}
                    </div>
                    <div class="jianJie_3">
                        {{ $t('IntroductionItem3') }}
                    </div>
                </div>
              <div class="overviewTitle">
                <div class="overviewTitleLine"></div>
                <span>{{ $t('firstItemTitle') }}</span>
              </div>
              <div class="keys">
                <div class="accessKey">
                  <h4 class="setFont">Access_key_id：</h4>
                  <span class="setFont">{{ accessKey }}</span>
                </div>
                <div class="keySecret">
                  <h4 class="setFont">Access_key_secret：</h4>
                  <span class="setFont">{{ secretKey }}</span>
                </div>
              </div>

                <div class="overviewTitle">
                    <div class="overviewTitleLine"></div>
                    <span>{{ $t('steps') }}</span>
                </div>
                <div
                    class="buzhouItem"
                    v-for="(item, index) in stepList"
                    :key="index"
                    @mouseover="selectStyle(item)"
                    @mouseout="outStyle(item)"
                    @click="changeApiFun(item)"
                >
                    <div
                        class="buzhouItemTitle"
                        :class="{ colorChange: item.select }"
                    >
                        {{ (index+1) + '.' + item.title }}
                    </div>
                    <img
                        v-if="item.select"
                        src="../assets/apiImg/icon_next@2x.png"
                        class="buzhouItemRight"
                        alt=""
                    />
                    <img
                        v-if="!item.select"
                        src="../assets/apiImg/icon_next_2@2x.png"
                        class="buzhouItemRight"
                        alt=""
                    />
                </div>
              <div class="overviewFoot">
            <div class="overviewFootLeft overviewFootLeftdisable">
                <div class="overviewFootLeftTop">
                    <img
                        src="../assets/apiImg/arrow／page_l_dis@2x.png"
                        class="LeftImg"
                        alt=""
                    />
                    <span>{{ $t('lastOne') }}</span>
                </div>
                <span class="overviewFootLeftBottom">{{ $t('None') }}</span>
            </div>
            <div
                class="overviewFootLeft"
                @click="changeApinext"
                @mouseover="nextHoverFun()"
                @mouseout="nextHoverOutFun()"
            >
                <div class="overviewFootLeftTop">
                    <span style="color: #808695">{{ $t('nextOne') }}</span>
                    <img
                        src="../assets/apiImg/arrow／page_r_nor@2x.png"
                        class="RightImg"
                        alt=""
                    />
                </div>
                <span
                    class="overviewFootLeftBottom overviewFootLeftTop"
                    :class="{ hoverUnderlineStyle: nextHoverShow }"
                    style="color: #333333"
                    >{{ $t('encryptionRule') }}</span>
            </div>
        </div>
            </div>
        </div>

    </div>
</template>
<script>
import { EventBus } from '../../event-bus'
export default {
  data () {
    return {
      nextHoverShow: false,
      accessKey: '',
      secretKey: '',
      stepList: [
        {
          id: 2,
          title: this.$t('encryptionRule'),
          select: false,
          key: '3-2'
        },
        {
          id: 3,
          title: this.$t('fileList'),
          select: false,
          key: '3-3'
        },
        {
          id: 4,
          title: this.$t('uploadFiles'),
          select: false,
          key: '3-4'
        },
        {
          id: 5,
          title: this.$t('downloadFiles'),
          select: false,
          key: '3-5'
        }
        // {
        //     id: 6,
        //     title: "5.检索文件",
        //     select: false,
        //        key:'3-6'
        // },
        // {
        //     id: 7,
        //     title: "6.查询检索文件交易",
        //     select: false,
        //        key:'3-7'
        // },
      ]
    }
  },
  created () {
    this.accessKey = JSON.parse(localStorage.getItem('userInfo')).accessKey
    this.secretKey = JSON.parse(localStorage.getItem('userInfo')).secretKey
  },
  methods: {
    changeApinext () {
      EventBus.$emit('changeAPi', '3-2')
    },
    changeApiFun (item) {
      EventBus.$emit('changeAPi', item.key)
      // this.$emit("onChange",);
    },
    changeApiFun_1 () {
      this.$emit('onChange', '3-2')
    },
    selectStyle (item) {
      item.select = true
    },
    outStyle (item) {
      item.select = false
    },
    nextHoverFun () {
      this.nextHoverShow = true
    },
    nextHoverOutFun () {
      this.nextHoverShow = false
    }
  }
}
</script>
