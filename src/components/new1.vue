<template>
    <div>
      <headnav></headnav>
        <div class="newswarp">
            <div class="newsback" @click="back">
                <div class="leftimg">
                    <img src="../assets/byteimg/left.png" alt="" style="width: 20px" />
                </div>
                <div class="backfont">{{ $t('back') }}</div>
            </div>
            <div class="articwarp">
                <div class="arttiel">{{ newsInfo.title }}</div>
                <div class="arttime">{{ newsInfo.createTime }}</div>
                <div class="artfgx"></div>
                <div v-html="newsInfo.info"></div>
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
  data () {
    return {
      newsInfo: this.$route.query
    }
  },
  mounted () {
    console.log('信息详情:', this.newsInfo)
    // document.querySelector('#headwarp').scrollIntoView({
    //   behavior: 'smooth'
    // })
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
