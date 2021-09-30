<template>
  <div class="scroll">
    <div class="setTopHeight">
      <div class="helpContent">
        <div class="helpTitle">
          {{ $t('helpTitle') }}
        </div>
        <div class="updateTime">
          {{ $t('updateTime') + '2021-09-02 11:26:57' }}
        </div>
        <div class="tips">
          <p>{{ $t('shortHelpCon1') }}</p>
        </div>
        <div class="stepContents">
          <h3>{{ $t('contentTitle1') }}</h3>
          <div class="groupCon">
            <h5>{{ $t('helpContent1') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[0]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc1.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{ $t('helpContent2') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[1]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc2.png" alt="">-->
            </div>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[2]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc3.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{ $t('helpContent3') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[3]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc4.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{ $t('helpContent4') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[4]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc5.png" alt="">-->
            </div>
          </div>
          <h3 class="setSpace">{{ $t('contentTitle2') }}</h3>
          <div class="tips">
            <p>{{ $t('shortHelpCon2') }}</p>
          </div>
          <div class="groupCon">
            <h5>{{ $t('helpContent5') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[5]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc6.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{ $t('helpContent6') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[6]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc7.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>
              {{ $t('helpContent7') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[7]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc8.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{ $t('helpContent8') }}</h5>
            <div class="tips">
              <p>{{ $t('helpNotes1') }}</p>
            </div>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[8]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc9.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{ $t('helpContent9') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[9]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc10.png" alt="">-->
            </div>
          </div>
          <h3 class="setSpace">{{ $t('contentTitle3') }}</h3>
          <h5>{{ $t('helpContent10') }}</h5>
          <h5>{{ $t('helpContent11') }}</h5>
          <h5>{{ $t('helpContent12') }}</h5>
          <h5>{{ $t('helpContent13') }}</h5>
          <h5>{{ $t('helpContent14') }}</h5>
          <div class="images">
            <el-image
              class="setImgWidth"
              :src="srcList[10]"
              :preview-src-list="srcList">
            </el-image>
<!--            <img class="setImgWidth" src="../assets/help/pc11.png" alt="">-->
          </div>
          <h3 class="setSpace">{{ $t('contentTitle4') }}</h3>
          <div class="groupCon">
            <h5>{{ $t('helpContent15') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[11]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc12.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{ $t('helpContent16') }}</h5>
            <div class="tips">
              <p>{{ $t('helpNotes2') }}</p>
            </div>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[12]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc13.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{ $t('helpContent17') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[13]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc14.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{ $t('helpContent18') }}</h5>
            <h5>{{ $t('helpNotes3') }}</h5>
            <h5>{{ $t('helpNotes4') }}</h5>
            <h5>{{ $t('helpNotes5') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[14]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc15.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{ $t('helpContent19') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[15]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc16.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{ $t('helpContent20') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[16]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc17.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{ $t('helpContent21') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[17]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc18.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{ $t('helpContent22') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[18]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc19.png" alt="">-->
            </div>
          </div>
          <h3 class="setSpace">{{ $t('contentTitle5') }}</h3>
          <div class="groupCon">
            <h5>{{'【1】' + $t('helpContent23') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[19]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc20.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{'【2】' + $t('helpContent24') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[20]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc21.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{'【3】' + $t('helpContent25') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[21]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc22.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{'【4】' + $t('helpContent26') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[22]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc23.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>
              <span>{{'【5】' + $t('helpContent27') }}</span>
              <img class="setourImg" src="../assets/home/download@2x.png" alt="">
              <span>{{ $t('helpContent29') }}</span>
              <img class="setourImg" src="../assets/home/download@2x.png" alt="">
              <span>{{ $t('helpContent32') }}</span>
              <img class="setourImg" src="../assets/home/download.png" alt="">
              <span>{{ $t('helpContent33') }}</span>
              <img class="setourImg" src="../assets/home/download.png" alt="">
              <span>{{ $t('helpContent34') }}</span>
              <img class="setourImg" src="../assets/home/download.png" alt="">
              <span>{{ $t('helpContent35') }}</span>
              <img class="setourImg" src="../assets/home/download@2x.png" alt="">
              <span>{{ $t('helpContent36') }}</span>
            </h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[23]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc24.png" alt="">-->
            </div>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[24]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc25.png" alt="">-->
            </div>
          </div>
          <h3 class="setSpace">{{ $t('contentTitle6') }}</h3>
          <div class="groupCon">
            <h5>{{ $t('helpContent28') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[25]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc26.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{'【2】' + $t('helpContent23') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[26]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc27.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{'【3】' + $t('helpContent24') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[27]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc28.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{'【4】' + $t('helpContent25') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[28]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc29.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{'【5】' + $t('helpContent26') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[29]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc30.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>
              <span>{{'【6】' + $t('helpContent27') }}</span>
              <img class="setourImg" src="../assets/home/download@2x.png" alt="">
              <span>{{ $t('helpContent29') }}</span>
              <img class="setourImg" src="../assets/home/download@2x.png" alt="">
              <span>{{ $t('helpContent32') }}</span>
              <img class="setourImg" src="../assets/home/download@2x.png" alt="">
              <span>{{ $t('helpContent33') }}</span>
              <img class="setourImg" src="../assets/home/download@2x.png" alt="">
              <span>{{ $t('helpContent34') }}</span>
              <img class="setourImg" src="../assets/home/download@2x.png" alt="">
              <span>{{ $t('helpContent35') }}</span>
              <img class="setourImg" src="../assets/home/download@2x.png" alt="">
              <span>{{ $t('helpContent36') }}</span>
            </h5>
          </div>
          <h3 class="setSpace">{{ $t('contentTitle7') }}</h3>
          <div class="groupCon">
            <h5>{{ $t('helpContent30') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[30]"
                :preview-src-list="srcList">
              </el-image>
<!--              <img class="setImgWidth" src="../assets/help/pc31.png" alt="">-->
            </div>
          </div>
          <div class="groupCon">
            <h5>{{ $t('helpContent31') }}</h5>
          </div>
          <h3 class="setSpace">{{ $t('contentTitle8') }}</h3>
          <div class="groupCon">
            <h5>{{ $t('helpContent40') }}</h5>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[31]"
                :preview-src-list="srcList">
              </el-image>
              <!--              <img class="setImgWidth" src="../assets/help/pc31.png" alt="">-->
            </div>
            <div class="images">
              <el-image
                class="setImgWidth"
                :src="srcList[32]"
                :preview-src-list="srcList">
              </el-image>
              <!--              <img class="setImgWidth" src="../assets/help/pc31.png" alt="">-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="setZindex">
      <foot></foot>
    </div>
  </div>
</template>

<script>
import foot from '../components/foot'
export default {
  name: 'helpPage',
  components: {
    foot
  },
  data () {
    return {
      srcList: [
        require('../assets/help/pc1.png'),
        require('../assets/help/pc2.png'),
        require('../assets/help/pc3.png'),
        require('../assets/help/pc4.png'),
        require('../assets/help/pc5.png'),
        require('../assets/help/pc6.png'),
        require('../assets/help/pc7.png'),
        require('../assets/help/pc8.png'),
        require('../assets/help/pc9.png'),
        require('../assets/help/pc10.png'),
        require('../assets/help/pc11.png'),
        require('../assets/help/pc12.png'),
        require('../assets/help/pc13.png'),
        require('../assets/help/pc14.png'),
        require('../assets/help/pc15.png'),
        require('../assets/help/pc16.png'),
        require('../assets/help/pc17.png'),
        require('../assets/help/pc18.png'),
        require('../assets/help/pc19.png'),
        require('../assets/help/pc20.png'),
        require('../assets/help/pc21.png'),
        require('../assets/help/pc22.png'),
        require('../assets/help/pc23.png'),
        require('../assets/help/pc24.png'),
        require('../assets/help/pc25.png'),
        require('../assets/help/pc26.png'),
        require('../assets/help/pc27.png'),
        require('../assets/help/pc28.png'),
        require('../assets/help/pc29.png'),
        require('../assets/help/pc30.png'),
        require('../assets/help/pc31.png'),
        require('../assets/help/pc32.png'),
        require('../assets/help/pc33.png')
      ]
    }
  }
}
</script>

<style scoped>
  .setTopHeight {
    margin-top: 70px;
    /*背景色铺满全屏*/
    background-color: #F0F0F0;
    background-size: 100% 100%;
    height: 100%;
    /*position: fixed;*/
    width: 100%;
    /*height: 500px;*/
    /*overflow-y: scroll;*/
  }
  .helpContent {
    margin: 0 420px;
    width: 1080px;
    padding: 48px 30px 80px 30px;
    background-color: #FFFFFF;
  }
  .helpTitle {
    font-size: 24px;
    font-weight: 400;
    line-height: 33px;
    color: #000000;
    opacity: 1;
  }
  .updateTime {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #A9AFBB;
    opacity: 1;
    margin-top: 16px;
  }
  .tips {
    margin-top: 16px;
    padding: 13px 0 13px 17px;
    background: #FFF3F2;
    opacity: 1;
    border-radius: 4px;
  }
  .tips p {
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    color: #333333;
    opacity: 1;
  }
  .stepContents {
    margin-top: 20px;
    padding-top: 21px;
    /*padding-bottom: 80px;*/
    border-top: 1px solid #CDD4E3;
  }
  .stepContents h3 {
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    color: #000000;
    margin-bottom: 10px;
  }
  .stepContents h5 {
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    color: #333333;
    opacity: 1;
  }
  .images {
    margin: 16px 60px 21px 60px;
  }
  .images img {
    width: 100%;
    height: 100%;
  }
  .setImgWidth {
    width: 100%;
    height: 100%;
    /*width: 900px;*/
    /*height: 448px;*/
  }
  .setourImg {
    width: 16px;
    height: 16px;
  }
  .setSpace {
    margin-top: 50px;
  }
  .setZindex {
    width: 100%;
    /*position: fixed;*/
    /*bottom: 0;*/
    /*z-index: 999;*/
  }
</style>
