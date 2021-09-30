<template>
  <div class="engineContent">
    <div class="engineContent-top">
      <div class="engineContent-topContent">
        <div class="engineContent-topContent_1">
          <img src="../assets/engines/ren@2x.png" alt="xiaobing">
        </div>
        <div class="engineContent-topContent_2">
          <img class="setImg2" v-if="lang === 'zh-CN' || lang === null" src="../assets/engines/titletop2@2x.png" alt="">
          <img class="setImg2" v-if="lang === 'en-US'" src="../assets/engines/titleTop2_1.png" alt="">
          <img class="setImg1" src="../assets/engines/contenttip2@2x.png" alt="">
          <div class="contentTips">
            <p>{{ $t('setNav_1') }}</p>
            <ul class="tips_1">
              <li>
                <span>{{ $t('setNav_3') }}</span>
                <h2>56%</h2>
              </li>
              <li>
                <span>{{ $t('setNav_4') }}</span>
                <h2>22%</h2>
              </li>
              <li>
                <span>{{ $t('setNav_5') }}</span>
                <h2>17%</h2>
              </li>
            </ul>
            <ul class="tips_2">
              <li>
                <span>{{ $t('setNav_6') }}</span>
                <h2>4%</h2>
              </li>
              <li>
                <span>{{ $t('setNav_7') }}</span>
                <h2>1%</h2>
              </li>
            </ul>
          </div>
        </div>
        <div class="engineContent-topContent_3">
          <img class="setImg3" src="../assets/engines/tips2@2x.png" alt="">
          <div class="contentTips_1">
            <p>{{ $t('setNav_2') }}</p>
            <ul class="tips_3">
              <li>
                <span>{{ $t('setNav_3') }}</span>
                <h2>459.71</h2>
              </li>
              <li>
                <span>{{ $t('setNav_4') }}</span>
                <h2>245.56</h2>
              </li>
              <li>
                <span>{{ $t('setNav_5') }}</span>
                <h2>112.55</h2>
              </li>
            </ul>
            <ul class="tips_4">
              <li>
                <span>{{ $t('setNav_6') }}</span>
                <h2>21.23</h2>
              </li>
              <li>
                <span>{{ $t('setNav_7') }}</span>
                <h2>0</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="fontTips">{{ $t('setNav_29') }}</p>
    </div>
    <div class="engineContent-middle">
      <h3>{{ $t('setNav_8') }}</h3>
      <ul>
        <li>
          <p class="setFont">{{ $t('setNav_3') }}</p>
          <div class="allLogos">
            <img v-for="(img, index) in imgList1" :src="img" alt="" :key="index">
          </div>
        </li>
        <li class="setTop">
          <p class="setFont">{{ $t('setNav_4') }}</p>
          <div class="allLogos2">
            <img v-for="(img, index) in imgList2" :src="img" alt="" :key="index">
          </div>
        </li>
        <li class="twoParts setTop">
          <div>
            <p class="setFont">{{ $t('setNav_5') }}</p>
            <div class="allLogos3">
              <img v-for="(img, index) in imgList3" :src="img" alt="" :key="index">
            </div>
          </div>
          <div>
            <p class="setFont">{{ $t('setNav_9') }}</p>
            <div class="allLogos4">
              <img v-for="(img, index) in imgList4" :src="img" alt="" :key="index">
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="engineContent-bottom">
      <h3>{{ $t('setNav_11') }}</h3>
      <ul>
        <li>
          <p class="setFont">FILECOIN PLUS</p>
          <ul class="setUl setLines">
            <li class="setBox" @click="openUrl(1)">
              <div class="leftImg">
                <img src="../assets/engines/icon5.png" alt="">
              </div>
              <div class="rightTips">
                <h4>{{ $t('setNav_14') }}</h4>
                <span>{{ $t('setNav_14') }}</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(2)">
              <div class="leftImg">
                <img class="setImg_5" src="../assets/engines/icon1.png" alt="">
              </div>
              <div class="rightTips">
                <h4>Filecoin PLUS</h4>
                <span>{{ $t('setNav_15') }}</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(3)">
              <div class="leftImg">
                <img src="../assets/engines/icon5.png" alt="">
              </div>
              <div class="rightTips">
                <h4>Filecoin Plus Registry</h4>
                <span>{{ $t('setNav_16') }}</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(4)">
              <div class="leftImg">
                <img src="../assets/engines/icon12.png" alt="">
              </div>
              <div class="rightTips">
                <h4>Filecoin PLUS LDN</h4>
                <span>Large-Datasets</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(5)">
              <div class="leftImg">
                <img src="../assets/engines/icon12.png" alt="">
              </div>
              <div class="rightTips">
                <h4>DataCap</h4>
                <span>Client-Onboarding</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(6)">
              <div class="leftImg">
                <img src="../assets/engines/icon15.png" alt="">
              </div>
              <div class="rightTips">
                <h4>FILFOX</h4>
                <span>{{ $t('setNav_17') }}</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(7)">
              <div class="leftImg">
                <img class="setImg_5" src="../assets/engines/icon1.png" alt="">
              </div>
              <div class="rightTips">
                <h4>Interplanetary</h4>
                <span>Statistics</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(8)">
              <div class="leftImg">
                <img src="../assets/engines/icon5.png" alt="">
              </div>
              <div class="rightTips">
                <h4>Filecoin Docs</h4>
                <span>{{ $t('setNav_18') }}</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(9)">
              <div class="leftImg">
                <img class="setImg_4" src="../assets/engines/icon3.png" alt="">
              </div>
              <div class="rightTips">
                <h4>{{ $t('setNav_30') }}</h4>
                <span>{{ $t('setNav_19') }}</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(20)">
              <div class="leftImg">
                <img class="setImg_4" src="../assets/engines/icon16.png" alt="">
              </div>
              <div class="rightTips">
                <h4>Gilf</h4>
                <span>{{ $t('serNav_28') }}</span>
              </div>
            </li>
          </ul>
          <i></i>
        </li>
        <li>
          <p class="setFont">{{ $t('setNav_11') }}</p>
          <ul class="setUl setLines">
            <li class="setBox" @click="openUrl(10)">
              <div class="leftImg">
                <img src="../assets/engines/icon5.png" alt="">
              </div>
              <div class="rightTips" >
                <h4>{{ $t('setNav_14') }}</h4>
                <span>{{ $t('setNav_14') }}</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(11)">
              <div class="leftImg">
                <img src="../assets/engines/icon10.png" alt="">
              </div>
              <div class="rightTips">
                <h4>Crust</h4>
                <span>Crust Network</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(12)">
              <div class="leftImg">
                <img src="../assets/engines/icon13.png" alt="">
              </div>
              <div class="rightTips">
                <h4>Arweave.org</h4>
                <span>Arweave Network</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(13)">
              <div class="leftImg">
                <img class="setImg_6" src="../assets/engines/icon2.png" alt="">
              </div>
              <div class="rightTips">
                <h4>STORJ</h4>
                <span>{{ $t('setNav_20') }}</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(14)">
              <div class="leftImg">
                <img src="../assets/engines/icon11.png" alt="">
              </div>
              <div class="rightTips">
                <h4>Chia</h4>
                <span>{{ $t('setNav_21') }}</span>
              </div>
            </li>
          </ul>
          <i></i>
        </li>
        <li>
          <p class="setFont">{{ $t('setNav_27') }}</p>
          <ul class="setUl">
            <li class="setBox" @click="openUrl(15)">
              <div class="leftImg">
                <img src="../assets/engines/icon14.png" alt="">
              </div>
              <div class="rightTips">
                <h4>OpenSea</h4>
                <span>{{ $t('setNav_22') }}</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(16)">
              <div class="leftImg">
                <img src="../assets/engines/icon7.png" alt="">
              </div>
              <div class="rightTips">
                <h4>SuperRare</h4>
                <span>{{ $t('setNav_23') }}</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(17)">
              <div class="leftImg">
                <img src="../assets/engines/icon6.png" alt="">
              </div>
              <div class="rightTips">
                <h4>Async.art</h4>
                <span>{{ $t('setNav_24') }}</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(18)">
              <div class="leftImg">
                <img src="../assets/engines/icon8.png" alt="">
              </div>
              <div class="rightTips">
                <h4>Nifty Gateway</h4>
                <span>{{ $t('setNav_25') }}</span>
              </div>
            </li>
            <li class="setBox" @click="openUrl(19)">
              <div class="leftImg">
                <img src="../assets/engines/icon9.png" alt="">
              </div>
              <div class="rightTips">
                <h4>Rarible</h4>
                <span>{{ $t('setNav_26') }}</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import foot from './foot'

export default {
  name: 'searchEngine',
  components: {
    foot
  },
  data () {
    return {
      lang: sessionStorage.getItem('lang'),
      imgList1: [
        require('../assets/engines/logos/11.png'),
        require('../assets/engines/logos/22.png'),
        require('../assets/engines/logos/33.png'),
        require('../assets/engines/logos/44.png'),
        require('../assets/engines/logos/55.png'),
        require('../assets/engines/logos/66.png'),
        require('../assets/engines/logos/77.png'),
        require('../assets/engines/logos/88.png')
      ],
      imgList2: [
        require('../assets/engines/logos/99.png'),
        require('../assets/engines/logos/1010.png'),
        require('../assets/engines/logos/1111.png'),
        require('../assets/engines/logos/1212.png'),
        require('../assets/engines/logos/1313.png'),
        require('../assets/engines/logos/1414.png'),
        require('../assets/engines/logos/1515.png')
      ],
      imgList3: [
        require('../assets/engines/logos/1616.png'),
        require('../assets/engines/logos/1717.png'),
        require('../assets/engines/logos/1818.png'),
        require('../assets/engines/logos/1919.png'),
        require('../assets/engines/logos/2424.png')
      ],
      imgList4: [
        require('../assets/engines/logos/2020.png'),
        require('../assets/engines/logos/2121.png'),
        require('../assets/engines/logos/2222.png'),
        require('../assets/engines/logos/2323.png')
      ]
    }
  },
  methods: {
    openUrl (val) {
      console.log('val:', val)
      let openurl = window.open('_blank')
      switch (val) {
        case 1:
          openurl.location.href = 'https://filecoin.io/'
          break
        case 2:
          openurl.location.href = 'https://filplus.info/'
          break
        case 3:
          openurl.location.href = 'https://plus.fil.org/'
          break
        case 4:
          openurl.location.href = 'https://github.com/filecoin-project/filecoin-plus-large-datasets/issues'
          break
        case 5:
          openurl.location.href = 'https://github.com/filecoin-project/filecoin-plus-client-onboarding/issues'
          break
        case 6:
          openurl.location.href = 'https://filfox.info/'
          break
        case 7:
          openurl.location.href = 'https://filplus.d.interplanetary.one/'
          break
        case 8:
          openurl.location.href = 'https://docs.filecoin.io/'
          break
        case 9:
          openurl.location.href = 'https://www.bytebase.cn/'
          break
        case 10:
          openurl.location.href = 'https://filecoin.io/'
          break
        case 11:
          openurl.location.href = 'https://www.crust.network/'
          break
        case 12:
          openurl.location.href = 'https://www.arweave.org/'
          break
        case 13:
          openurl.location.href = 'https://storj.io/'
          break
        case 14:
          openurl.location.href = 'https://www.chia.net/'
          break
        case 15:
          openurl.location.href = 'https://opensea.io/'
          break
        case 16:
          openurl.location.href = 'https://superrare.com/'
          break
        case 17:
          openurl.location.href = 'https://async.art/'
          break
        case 18:
          openurl.location.href = 'https://www.niftygateway.com/'
          break
        case 19:
          openurl.location.href = 'https://rarible.com/'
          break
        case 20:
          openurl.location.href = 'https://wallet.glif.io/'
          break
      }
    }
  }
}
</script>

<style scoped>
.engineContent {
  margin-top: 70px;
}
.engineContent-top {
  height: 500px;
  background-image:url('../assets/engines/topbgd@2x.png');
  background-repeat: no-repeat;
  background-size: 100% 500px;
  position: relative;
}
.engineContent-topContent {
  margin: 0 297px;
  height: 100%;
  display: flex;
  align-items: center;
}
.engineContent-topContent_1 img {
  width: 135px;
  height: 359px;
}
.engineContent-topContent_2 {
  width: 538px;
}
.setImg1 {
  height: 311px;
  position: relative;
}
.contentTips {
  position: absolute;
  top: 140px;
  left: 500px;
}
.contentTips p {
  font-size: 24px;
  color: #FFFFFF;
  margin-bottom: 24px;
}
.setImg2 {
  width: 411px;
  margin-left: 35px;
}
.tips_1 {
  padding-right: 27px;
  padding-bottom: 14.5px;
  margin-bottom: 29px;
  justify-content: space-between;
  border-bottom: 1px solid #0D9BD6;
}
.tips_1, .tips_2 {
  width: 440px;
  display: flex;
}
.tips_1 li, .tips_2 li {
  width: 108px;
}
.tips_1 span, .tips_2 span {
  font-size: 16px;
}
.tips_2 > li:nth-child(2) {
  margin-left: 43px;
}
h2 {
  font-size: 38px;
  color: #0D9BD6;
  font-weight: 800;
}
.setImg3 {
  width: 595px;
  height: 311px;
  margin-left: 48.79px;
  margin-top: 51.92px;
  position: relative;
}
.contentTips_1 {
  position: absolute;
  top: 140px;
  right: 330px;
}
.contentTips_1 p {
  font-size: 24px;
  color: #FFFFFF;
  margin-bottom: 24px;
}
.tips_3 {
  padding-right: 27px;
  padding-bottom: 14.5px;
  margin-bottom: 29px;
  justify-content: space-between;
  border-bottom: 1px solid #0D9BD6;
}
.tips_3, .tips_4 {
  width: 494px;
  display: flex;
}
.tips_3 span, .tips_4 span {
  font-size: 16px;
}
.tips_4 > li:nth-child(2) {
  margin-left: 51px;
}
.twoParts {
  display: flex;
  justify-content: space-between;
}
.engineContent-middle {
  height: 547px;
  padding: 36px 360px;
  background: #F7F7F7;
}
.allLogos, .allLogos2 {
  width: 1200px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 10px;
  padding: 0 30px;
}
.allLogos img:nth-child(5) {
  width: 150px;
}
.allLogos img:nth-child(7) {
  width: 110px;
}
.allLogos img:nth-child(8) {
  width: 83px;
}
.allLogos img, .allLogos2 img, .allLogos3 img, .allLogos4 img {
  width: 122px;
}
.allLogos2 img:first-child {
  width: 70px;
}
.allLogos2 img:last-child {
  width: 276px;
}
.allLogos2 img:nth-child(5) {
  width: 50px;
}
.allLogos3, .allLogos4  {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 10px;
  padding: 0 30px;
}
.allLogos3 {
  width: 620px;
}
.allLogos4 {
  width: 550px;
}
.allLogos3 img:nth-child(1) {
  width: 168px;
}
.allLogos3 img:nth-child(2) {
  width: 80px;
}
.allLogos3 img:nth-child(3) {
  width: 129px;
}
.allLogos3 img:nth-child(4) {
  width: 35px;
}
.allLogos3 img:nth-child(5) {
  width: 93px;
}
.allLogos4 img:nth-child(1) {
  width: 145px;
}
.allLogos4 img:nth-child(2) {
  width: 107px;
}
.allLogos4 img:nth-child(3) {
  width: 75px;
}
.allLogos4 img:nth-child(4) {
  width: 93px;
}
.engineContent-bottom {
  padding: 50px 360px;
}
.setBox {
  width: 220px;
  height: 70px;
  cursor: pointer;
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}
.setBox_2 {
  width: 220px;
  height: 70px;
}
.setBox:hover {
  border: 1px solid #0D9BD6;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
.setFont{
  height: 27px;
  font-size: 16px;
  font-weight: 500;
  color: #A1A1A1;
  margin-bottom: 16px;
  /*line-height: 261px;*/
}
.setUl {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-items: stretch;
}
h3 {
  font-size: 20px;
  color: #000000;
  margin-bottom: 16px;
}
.setLines {
  border-bottom: 1px solid #CCCCCC;
  padding-bottom: 30px;
  margin-bottom: 30px;
}
.setTop {
  margin-top: 16px;
}
.leftImg img {
  width: 40px;
  height: 40px;
  margin: 0 15px;
}
.rightTips h4 {
  font-size: 14px;
  font-weight: 600;
  color: #000000;
}
.rightTips span {
  font-size: 12px;
  font-weight: 400;
  color: #A1A1A1;
}
.setImg_4 {
  width: 35px !important;
}
.setImg_5 {
  width: 42px !important;
  height: 42px !important;
}
.setImg_6 {
  width: 36px !important;
  height: 41px !important;
}
.fontTips {
  margin: 0 297px;
  position: absolute;
  right: 10px;
  bottom: 30px;
  color: #fff;
  font-size: 16px;
}
</style>
