<template>
    <div>
        <img src="../assets/byteimg/bgc.jpg" alt="" class="bgc" />
        <div class="conner" id="Top">
            <div class="Bannertitle">{{ $t('PrivacyStoragePlatform') }}</div>
            <div class="Bannerfont">
              {{ $t('FreeStorage') }}
            </div>
            <div class="Bannerfont" style="margin-top: 0">
              {{ $t('blockchainTechnology') }}
            </div>
        </div>
        <div class="Bannerfix">
            <div class="Fixconter">
                <div class="Fixitem">
                    <img
                        src="../assets/byteimg/Fix1.png"
                        alt=""
                        class="Fiximg"
                    />
                    <div class="Fixwarp">
                        <div class="Fixtitle">{{ $t('EmpowermentOutput') }}</div>
                        <div class="Fixname">
                          {{ $t('EmpowermentOutputDetail') }}
                        </div>
                    </div>
                </div>
                <div class="Fixitem setMargin">
                    <img src="../assets/byteimg/Fix2.png" alt="" />
                    <div class="Fixwarp">
                        <div class="Fixtitle">{{ $t('operation') }}</div>
                        <div class="Fixname">
                            {{ $t('operationDetail') }}
                        </div>
                    </div>
                </div>
                <div class="Fixitem">
                    <img src="../assets/byteimg/Fix3.png" alt="" />
                    <div class="Fixwarp">
                        <div class="Fixtitle">{{ $t('NoTampered') }}</div>
                        <div class="Fixname">
                            {{ $t('NoTamperedDetail') }}
                        </div>
                    </div>
                </div>
                <div class="Fixitem">
                    <img src="../assets/byteimg/Fix4.png" alt="" />
                    <div class="Fixwarp">
                        <div class="Fixtitle">{{ $t('kindsOfData') }}</div>
                        <div class="Fixname">
                            {{ $t('kindsOfDataDetail') }}
                        </div>
                    </div>
                </div>
                <div class="Fixitem setMargin">
                    <img src="../assets/byteimg/Fix5.png" alt="" />
                    <div class="Fixwarp">
                        <div class="Fixtitle">{{ $t('GlobalAccessibility') }}</div>
                        <div class="Fixname">
                            {{ $t('GlobalAccessibilityDetail') }}
                        </div>
                    </div>
                </div>
                <div class="Fixitem">
                    <img src="../assets/byteimg/Fix6.png" alt="" />
                    <div class="Fixwarp">
                        <div class="Fixtitle">{{ $t('PhysicalSecurity') }}</div>
                        <div class="Fixname">
                            {{ $t('PhysicalSecurityDetail') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Solution" id="Solution">
            <img
                src="../assets/byteimg/Solutionbgc.png"
                alt=""
                class="Solutionbgc"
            />
            <div class="Solutionwarp">
                <img
                    src="../assets/byteimg/Titleimg.png"
                    alt=""
                    class="Titleimg"
                />
                <div class="Tibtom"></div>
                <div class="Solutiontitle">
                    <div class="Solutionname">{{ $t('solutions') }}</div>
                    <div class="Xtitle">SOLUTION</div>
                    <!-- <div class="Solutionmore">了解更多</div>
                    <div class="Solutionjoin">立即加入</div> -->
                </div>
                <div class="Solutionlist">
                    <img
                        src="../assets/byteimg/Solution1.png"
                        alt=""
                        class="Solutionlistimg"
                    />
                    <div class="Solulist">
                        <div
                            class="Soluitem"
                            v-for="(item, index) in Solulist"
                            :key="item.id"
                            @mouseover="changeIndex(index)"
                            @mouseout="changeIndexBack(index)"
                        >
                            <img :src="item.img" alt="" class="Soluitemimg" />
                            <div class="Soluitemwarp">
                                <div class="Solutitle">{{ item.title }}</div>
                                <div class="Solucoent">{{ item.conent }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Service" id="Service">
            <img
                src="../assets/byteimg/Service.png"
                alt=""
                class="Serviceimg"
            />
            <div class="Solutionwarp">
                <img
                    src="../assets/byteimg/Titleimg2.png"
                    alt=""
                    class="Titleimg"
                />
                <div class="Tibtom"></div>
                <div class="Servicetitle">
                    <div class="Servicename">{{ $t('servicess') }}</div>
                    <div class="Xtitle2">SERVICE</div>
                    <!-- <div class="Servicemore">了解更多</div>
                    <div class="Servicejoin">立即加入</div> -->
                </div>
            </div>
            <div class="Servefgx"></div>
            <div class="Servecontior">
                                <div class="Serveitme">
                    <img
                        src="../assets/byteimg/SE3.png"
                        alt=""
                        class="Serveitmeimg"
                    />
                    <div class="Serveitembgc"></div>
                    <div class="Servebb1">
                        <div class="Servebb2" style="">
                            <img
                                class="Servebb"
                                src="../assets/byteimg/Servebb.png"
                                alt=""
                            />
                        </div>
                        <img src="../assets/byteimg/Serve3.png" />
                    </div>

                    <div class="Serveitmetitle">{{ $t('storageCenter') }}</div>
                    <div class="Serveitemcont">
                      {{ $t('storageCenterDetail') }}
                    </div>
                </div>
                                <div class="Serveitme">
                    <img
                        src="../assets/byteimg/SE4.png"
                        alt=""
                        class="Serveitmeimg"
                    />
                    <div class="Serveitembgc"></div>
                    <div class="Servebb1">
                        <div class="Servebb2" style="">
                            <img
                                class="Servebb"
                                src="../assets/byteimg/Servebb.png"
                                alt=""
                            />
                        </div>
                        <img src="../assets/byteimg/Serve4.png" />
                    </div>

                    <div class="Serveitmetitle">{{ $t('documentStorage') }}</div>
                    <div class="Serveitemcont">
                      {{ $t('documentStorageDetail') }}
                    </div>
                </div>
                <div class="Serveitme">
                    <img
                        src="../assets/byteimg/SE1.png"
                        alt=""
                        class="Serveitmeimg"
                    />
                    <div class="Serveitembgc"></div>
                    <div class="Servebb1">
                        <div class="Servebb2" style="">
                            <img
                                class="Servebb"
                                src="../assets/byteimg/Servebb.png"
                                alt=""
                            />
                        </div>
                        <img src="../assets/byteimg/Serve1.png" />
                    </div>

                    <div class="Serveitmetitle">{{ $t('openCapability') }}</div>
                    <div class="Serveitemcont">
                      {{ $t('openCapabilityDetail') }}
                    </div>
                </div>
                <div class="Serveitme">
                    <img
                        src="../assets/byteimg/SE2.png"
                        alt=""
                        class="Serveitmeimg"
                    />
                    <div class="Serveitembgc"></div>
                    <div class="Servebb1">
                        <div class="Servebb2" style="">
                            <img
                                class="Servebb"
                                src="../assets/byteimg/Servebb.png"
                                alt=""
                            />
                        </div>
                        <img src="../assets/byteimg/Serve2.png" />
                    </div>

                    <div class="Serveitmetitle">{{ $t('openStorageSpace') }}</div>
                    <div class="Serveitemcont">
                      {{ $t('openStorageSpaceDetail') }}
                    </div>
                </div>

            </div>
        </div>
        <div class="Customer" id="Customer">
            <div class="Solutionwarp">
                <img
                    src="../assets/byteimg/Titleimg.png"
                    alt=""
                    class="Titleimg2"
                />
                <div class="Tibtom2"></div>
                <div class="Solutiontitle">
                    <div class="Solutionname2">{{ $t('ourCustomers') }}</div>
                    <div class="Xtitle3">CUSTOMER</div>

                </div>
            </div>
            <div class="Customerwarp">
                <div
                    class="Customeritem"
                    v-for="(item, index) in kehulist"
                    :key="item.id"
                >
<!--                  <div-->
<!--                    class="Customeritem"-->
<!--                    v-for="(item, index) in kehulist"-->
<!--                    :key="item.id"-->
<!--                    @mouseover="hoverover(index)"-->
<!--                    @mouseout="hoverback(index)"-->
<!--                  >-->
                    <img :src="item.img" alt="" />
                </div>

            </div>
        </div>
        <div class="Latest" id="Latest">
            <div class="Solutionwarp">
                <img
                    src="../assets/byteimg/Titleimg2.png"
                    alt=""
                    class="Titleimg"
                />
                <div class="Tibtom"></div>
                <div class="Servicetitle">
                    <div class="Servicename">{{ $t('industryNews') }}</div>
                    <div class="Xtitle2">LATEST NEWS</div>
                    <div class="Latestmore" @click="morenews">{{ $t('moreNews') }}</div>
                    <div class="rightimg" @click="morenews">
                        <img
                            src="../assets/byteimg/right.png"
                            alt=""
                            style="width: 12px; height: 12px"
                        />
                    </div>
                </div>
                <ul class="Latestitemwarp">
                    <li class="Latestitem" v-for="(item, index) in infoList" @click="newAll(item)" :key="index">
                      <img
                        class="Latestitemimg"
                        :src="item.listImg"
                        :alt="item.title"
                      />
                      <p class="Latestitemfont">{{ item.title }}</p>
                      <div class="Latestitemfgx"></div>
                    </li>
                </ul>
            </div>
            <img
                style="position: absolute; bottom: -32px"
                src="../assets/byteimg/L.png"
                alt=""
            />
        </div>
        <div class="About" id="About" >
            <div class="Solutionwarp">
                <img
                    src="../assets/byteimg/Titleimg.png"
                    alt=""
                    class="Titleimg"
                />
                <div class="Tibtom"></div>
                <div class="Servicetitle">
                    <div class="Servicename" style="color: #333333">
                        {{ $t('aboutByteBase') }}
                    </div>
                    <div class="Xtitle">ABOUT BYTEBASE</div>
                </div>
                <div class="Aboutwarp">
                    <div class="Ableft">
                        <div>
                          {{ $t('aboutBytebaseF') }}
                        </div>
                        <div style="margin-top: 35px">
                          {{ $t('aboutBytebaseS') }}
                        </div>
                        <div class="Alitemwarp">
                            <div class="Alitem">
                                <div class="AlitemTile">
                                    <img
                                        class="Abimg"
                                        src="../assets/byteimg/Ab1.png"
                                        alt=""
                                    />
                                    <div class="Afont">{{ '10.831 EiB' }}</div>
                                </div>
                                <div class="Abfont" >
                                    <span v-if="langType !== 'EN'">{{ '10.831 EiB' }}</span><span style="color: #ef190f">{{ $t('free') }}</span
                                    >{{ $t('storageResources') }}
                                </div>
                            </div>
                            <div class="Alitem">
                                <div class="AlitemTile">
                                    <img
                                        class="Abimg"
                                        src="../assets/byteimg/Ab2.png"
                                        alt=""
                                    />
                                    <!-- {{ miner }} -->
                                    <!-- {{ miner }} -->
                                    <div class="Afont">{{ '3213' }}</div>
                                </div>
                                <div class="Abfont"><span v-if="langType !== 'EN'">{{ '3213' }}</span>{{ $t('nodes') }}</div>
                            </div>
                            <div class="Alitem">
                                <div class="AlitemTile">
                                    <img
                                        class="Abimg"
                                        src="../assets/byteimg/Ab3.png"
                                        alt=""
                                    />
                                    <div class="Afont">300+</div>
                                </div>
                                <div class="Abfont"><span v-if="langType !== 'EN'">300+</span>{{ $t('partnerCompanies') }}</div>
                            </div>
                        </div>
                        <p style="margin-top: 20px;">{{ $t('indexTips') }}</p>
                        <div class="Acodewarp">
                            <img
                                style="width: 100px; height: 100px"
                                src="../assets/byteimg/Code.png"
                                alt=""
                            />
                            <div class="Acoderight">
                                <div
                                    style="
                                        font-weight: bold;
                                        margin-bottom: 15px;
                                    "
                                >
                                  {{ $t('contactByteBase') }}
                                </div>
                                <div>
                                  {{ $t('Address') }}
                                </div>
                                <div>{{ $t('Mail') }}</div>
                                <div>{{ $t('telephone') }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="Abright">
                        <img src="../assets/byteimg/Aright.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
import headnav from '@/funcomponents/head'
import foot from '@/components/foot'
import { EventBus } from '../../event-bus.js'
import apis from '../common/apis'
export default {
  name: 'index',
  components: {
    headnav,
    foot
  },
  data () {
    return {
      dialogVisible: false,
      computingPower: '',
      miner: '',
      Solulist: [
        {
          id: 0,
          img: require('../assets/byteimg/S1.png'),
          title: this.$t('enforcementCredibility'),
          conent: this.$t('enforcementCredibilityDetail'),
          check: true
        },
        {
          id: 1,
          img: require('../assets/byteimg/S2.png'),
          title: this.$t('propertyRightsProtection'),
          conent: this.$t('propertyRightsProtectionDetail'),
          check: false
        },
        // {
        //     id: 2,
        //     img: require("../assets/byteimg/S3.png"),
        //     title: "金融行业",
        //     conent:
        //         "借贷、征信、借条、理财、保险、证券、基金等多领域解决方案",
        //     check: false,
        // },
        // {
        //     id: 3,
        //     img: require("../assets/byteimg/S4.png"),
        //     title: "电子商务",
        //     conent: "智能合约、电子发票、商品溯源、租赁业务等解决方案",
        //     check: false,
        // },
        {
          id: 4,
          img: require('../assets/byteimg/S5.png'),
          title: this.$t('videoInterconnection'),
          conent: this.$t('videoInterconnectionDetail'),
          check: false
        },
        {
          id: 5,
          img: require('../assets/byteimg/S6.png'),
          title: this.$t('medicalTransparency'),
          conent: this.$t('medicalTransparencyDetail'),
          check: false
        }
      ],
      kehulist: [
        {
          id: 1,
          img: require('../assets/byteimg/K11.png')
        },
        {
          id: 2,
          img: require('../assets/byteimg/K22.png')
        },
        {
          id: 3,
          img: require('../assets/byteimg/K33.png')
        },
        {
          id: 4,
          img: require('../assets/byteimg/K44.png')
        },
        {
          id: 5,
          img: require('../assets/byteimg/K55.png')
        },
        {
          id: 6,
          img: require('../assets/byteimg/K66.png')
        },
        {
          id: 7,
          img: require('../assets/byteimg/K77.png')
        },
        {
          id: 8,
          img: require('../assets/byteimg/K88.png')
        }
      ],
      newsList: null,
      infoList: null,
      today: ' ',
      langType: sessionStorage.getItem('langType')
    }
  },
  created () {
    this.getNewsList()
  },
  mounted () {
    EventBus.$on('fix', (msg) => {
      // A发送来的消息
      EventBus.$emit('msg')
    })
    // this.timer = setInterval(function () {
    //   // this.updateData()
    // }, 5000)
    this.updateData()
  },
  destroyed () {
    clearTimeout(this.times())
  },
  watch: {
    today () {
      this.times()
    }
  },
  methods: {
    // reload () {
    //   this.showRouter = false
    //   this.$nextTick(() => {
    //     this.showRouter = true
    //   })
    // },
    new1 () {
      this.$router.push('/new1')
    },
    new2 () {
      this.$router.push('/new2')
    },
    new3 () {
      this.$router.push('/new3')
    },
    morenews () {
      this.$router.push({
        name: 'news',
        params: this.newsList
      })
    },
    newAll (val) {
      this.$router.push({
        path: '/new1',
        query: val
      })
      console.log('xianshi:', val)
    },
    changeIndex (index) {
      if (index === 0) {
        this.Solulist[index].img = require('../assets/byteimg/S11.png')
      }
      if (index === 1) {
        this.Solulist[index].img = require('../assets/byteimg/S22.png')
      }
      // if (index == 2) {
      //     this.Solulist[index].img = require("../assets/byteimg/S33.png");
      // }
      // if (index == 3) {
      //     this.Solulist[index].img = require("../assets/byteimg/S44.png");
      // }
      if (index === 2) {
        this.Solulist[index].img = require('../assets/byteimg/S55.png')
      }
      if (index === 3) {
        this.Solulist[index].img = require('../assets/byteimg/S66.png')
      }
    },
    hoverover (index) {
      if (index === 0) {
        this.kehulist[index].img = require('../assets/byteimg/K11.png')
      }
      if (index === 1) {
        this.kehulist[index].img = require('../assets/byteimg/K22.png')
      }
      if (index === 2) {
        this.kehulist[index].img = require('../assets/byteimg/K33.png')
      }
      if (index === 3) {
        this.kehulist[index].img = require('../assets/byteimg/K44.png')
      }
      if (index === 4) {
        this.kehulist[index].img = require('../assets/byteimg/K55.png')
      }
      if (index === 5) {
        this.kehulist[index].img = require('../assets/byteimg/K66.png')
      }
      if (index === 6) {
        this.kehulist[index].img = require('../assets/byteimg/K77.png')
      }
      if (index === 7) {
        this.kehulist[index].img = require('../assets/byteimg/K88.png')
      }
    },
    hoverback (index) {
      if (index === 0) {
        this.kehulist[index].img = require('../assets/byteimg/K1.png')
      }
      if (index === 1) {
        this.kehulist[index].img = require('../assets/byteimg/K2.png')
      }
      if (index === 2) {
        this.kehulist[index].img = require('../assets/byteimg/K3.png')
      }
      if (index === 3) {
        this.kehulist[index].img = require('../assets/byteimg/K4.png')
      }
      if (index === 4) {
        this.kehulist[index].img = require('../assets/byteimg/K5.png')
      }
      if (index === 5) {
        this.kehulist[index].img = require('../assets/byteimg/K6.png')
      }
      if (index === 6) {
        this.kehulist[index].img = require('../assets/byteimg/K7.png')
      }
      if (index === 7) {
        this.kehulist[index].img = require('../assets/byteimg/K8.png')
      }
    },
    changeIndexBack (index) {
      if (index === 0) {
        this.Solulist[index].img = require('../assets/byteimg/S1.png')
      }
      if (index === 1) {
        this.Solulist[index].img = require('../assets/byteimg/S2.png')
      }
      // if (index == 2) {
      //     this.Solulist[index].img = require("../assets/byteimg/S3.png");
      // }
      // if (index == 3) {
      //     this.Solulist[index].img = require("../assets/byteimg/S4.png");
      // }
      if (index === 2) {
        this.Solulist[index].img = require('../assets/byteimg/S5.png')
      }
      if (index === 3) {
        this.Solulist[index].img = require('../assets/byteimg/S6.png')
      }
    },
    // 获取新闻资讯
    getNewsList () {
      this.$axios({
        method: 'post',
        url: apis.newsApi,
        data: {},
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        this.newsList = res.data.records[0]
        this.infoList = res.data.records[0].slice(0, 3)
        console.log('列表:', this.newsList)
      })
    },
    // 定时更新数据
    updateData () {
      this.today = new Date().getDate()
      this.$axios({
        method: 'post',
        url: apis.filcoinNetCountApi,
        data: {},
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => {
          console.log(res)
          if (res.status === 200) {
            this.computingPower = res.data.netWorkPower
            this.miner = res.data.miners
          }
        })
        .catch((err) => {
          console.log(err)
        })
      // this.computingPower = ''
      // this.miner = ''
    },
    times () {
      return setTimeout(() => {
        this.updateData()
      }, 5000)
    }
  }
}
</script>
<style scoped>
.bgc {
    width: 100%;
    position: absolute;
    object-fit: cover;
    min-width: 1440px;
    z-index: -1;
    height: 1030px;
}

.conner {
    width: 1280px;
    margin: 0 auto;
    padding-top: 250px;
}
.Bannertitle {
    /* padding-top: 250px; */
    font-size: 52px;
    color: #333333;

    font-weight: 600;
}
.Bannerfont {
    color: #333333;
    font-size: 20px;
    margin-top: 25px;

    width: 600px;
    line-height: 35px;
    font-weight: 600;
}
.Bannerbtn {
    width: 180px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: white;
    border-radius: 4px;
    background-color: #ef190f;
    margin-top: 40px;
    font-weight: bold;
    cursor: pointer;
}
.Bannerbtn:hover {
    width: 180px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: white;
    border-radius: 4px;
    background-image: linear-gradient(to right, #fa583c, #ef190f);
    /* background-color: #ef190f; */
    margin-top: 40px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 3px 10px 0px #ef190f;
}

.Bannerbtn2 {
    width: 180px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: white;
    border-radius: 4px;
    margin-top: 40px;
    font-weight: bold;
    cursor: pointer;
}
.Bannerbtn2:hover {
    width: 180px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: white;
    border-radius: 4px;

    /* background-color: #ef190f; */
    margin-top: 40px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 3px 10px 0px #ef190f;
}
.Bannerfix {
    height: 360px;
    background-color: rgba(255, 255, 255, 0.6);
    margin-top: 180px;
    padding-top: 30px;
}
.Fixconter {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}

.Fixitem {
    width: 400px;
    height: 150px;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    /* margin-left: 85px; */
    /*padding-left: 20px;*/
    /*padding-right: 20px;*/
}
.Fixitem:hover {
    margin-bottom: 20px;
    /*width: 370px;*/
    height: 150px;
    display: flex;
    align-items: center;
    background-color: #fff;
    color: #ef190f;
    box-shadow: 0 6px 10px 0px #e6e6e6;
}
.setMargin {
  margin: 0 40px;
}
.Fixwarp {
    margin-left: 15px;

    height: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.Fixtitle {
    font-size: 18px;
    font-weight: bold;
}
.Fixname {
    font-size: 14px;
    color: #333333;
    margin-top: 5px;
}
.Solution {
    width: 100%;
    background-color: #fff;
    height: 715px;
    position: relative;
}
.Solutionbgc {
    position: absolute;
    width: 100%;
}
.Solutionwarp {
    width: 1280px;
    margin: 0 auto;
    position: relative;
    margin-top: 50px;
}
.Solutionname {
    font-size: 38px;
    color: #333333;
    padding-top: 82px;
}
.Solutionname2 {
    font-size: 38px;
    color: #333333;
    padding-top: 32px;
}
.Solutiontitle {
    display: flex;
}
.Titleimg {
    position: absolute;
    margin-top: 50px;
}
.Titleimg2 {
    position: absolute;
}
.Xtitle {
    color: #cfcfcf;

    font-size: 18px;
    margin-top: 100px;
    margin-left: 15px;
    font-weight: bold;
}
.Xtitle2 {
    color: #cfcfcf;

    font-size: 18px;
    margin-top: 100px;
    margin-left: 15px;
    font-weight: bold;
}
.Xtitle3 {
    color: #cfcfcf;

    font-size: 18px;
    margin-top: 50px;
    margin-left: 15px;
    font-weight: bold;
}

.Tibtom {
    position: absolute;
    width: 66px;
    height: 6px;
    background-color: #ef190f;
    top: 143px;
}
.Tibtom2 {
    position: absolute;
    width: 66px;
    height: 6px;
    background-color: #ef190f;
    top: 93px;
}

.Solutionmore2 {
    margin-top: 59px;
    margin-left: auto;
    width: 110px;
    height: 40px;
    border-radius: 2px;
    border: 1px solid #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
}
.Solutionmore2:hover {
    margin-top: 59px;
    margin-left: auto;
    width: 110px;
    height: 40px;
    border-radius: 2px;
    border: 1px solid #ef190f;
    color: #ef190f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
}
.Solutionjoin2 {
    font-size: 14px;
    margin-top: 59px;
    margin-left: 20px;
    width: 110px;
    height: 40px;
    border-radius: 2px;
    background-color: #ef190f;
    color: white;
    border: 1px solid #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.Solutionjoin2:hover {
    font-size: 14px;
    margin-top: 59px;
    margin-left: 20px;
    width: 112px;
    height: 42px;
    border-radius: 2px;
    background-image: linear-gradient(to right, #fa583c, #ef190f);
    box-shadow: 0 1px 10px 0px #fa583c;
    color: white;
    border: 0px solid #ef190f;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.Solutionmore {
    margin-top: 109px;
    margin-left: auto;
    width: 110px;
    height: 40px;
    border-radius: 2px;
    border: 1px solid #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
}
.Solutionmore:hover {
    margin-top: 109px;
    margin-left: auto;
    width: 110px;
    height: 40px;
    border-radius: 2px;
    border: 1px solid #ef190f;
    color: #ef190f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
}
.Solutionjoin {
    font-size: 14px;
    margin-top: 109px;
    margin-left: 20px;
    width: 110px;
    height: 40px;
    border-radius: 2px;
    background-color: #ef190f;
    color: white;
    border: 1px solid #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.Solutionjoin:hover {
    font-size: 14px;
    margin-top: 109px;
    margin-left: 20px;
    width: 112px;
    height: 42px;
    border-radius: 2px;
    background-image: linear-gradient(to right, #fa583c, #ef190f);
    box-shadow: 0 1px 10px 0px #fa583c;
    color: white;
    border: 0px solid #ef190f;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.Solutionlist {
    margin-top: 60px;
    display: flex;
}
.Solulist {
    display: flex;
    flex-wrap: wrap;
    width: 744px;
    margin-left: 40px;
}
.Soluitem {
    width: 370px;
    height: 195px;
    border: 1px solid #f0f0f0;
    display: flex;
    cursor: pointer;
    align-items: center;
    background-color: white;
}
.Soluitem:hover {
    width: 370px;
    height: 195px;
    border: 1px solid #ef190f;
    display: flex;
    cursor: pointer;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
}
.Soluitem:hover > .Soluitemwarp > .Solutitle {
    color: #ef190f;
}
.Solutionlistimg {
    width: 480px;
    height: 390px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.15);
}
.Soluitemimg {
    width: 41px;
    height: 47px;
    /*margin-top: 30px;*/
    margin-left: 20px;
}
.Soluitemwarp {
    margin-left: 25px;
    width: 248px;
}
.Solutitle {
    font-size: 18px;
    color: #333333;
    font-weight: bold;
    /*margin-top: 20px;*/
    margin-bottom: 15px;
}
.Solucoent {
    color: #333333;
    font-size: 13px;
}
.Service {
    width: 100%;

    height: 910px;
    position: relative;
    background-image: linear-gradient(to bottom, #333333, #1e1e1e);
    z-index: 2;
}
.Serviceimg {
    position: absolute;
    width: 100%;
    height: 910px;
    object-fit: cover;
    z-index: -1;
    min-width: 1440px;
}
.Servicewarp {
    width: 1280px;
    margin: 0 auto;
    position: relative;
}
.Servicename {
    font-size: 38px;
    color: white;
    padding-top: 82px;
}
.Solutiontitle {
    display: flex;
}
.Servicetitle {
    display: flex;
}
.Servicemore {
    margin-top: 109px;
    margin-left: 770px;
    width: 110px;
    height: 40px;
    border-radius: 2px;
    border: 1px solid white;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
}
.Servicemore:hover {
    margin-top: 109px;
    margin-left: 770px;
    width: 110px;
    height: 40px;
    border-radius: 2px;
    border: 1px solid #ef190f;
    color: #ef190f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
}
.Servicejoin {
    font-size: 14px;
    margin-top: 109px;
    margin-left: 20px;
    width: 110px;
    height: 40px;
    border-radius: 2px;
    background-color: #ef190f;
    color: white;
    /* border: 1px solid #f8f8f8; */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.Servicejoin:hover {
    font-size: 14px;
    margin-top: 109px;
    margin-left: 20px;
    width: 112px;
    height: 40px;
    border-radius: 2px;
    background-image: linear-gradient(to right, #fa583c, #ef190f);
    box-shadow: 0 1px 10px 0px #fa583c;
    color: white;
    border: 0px solid #ef190f;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.Servefgx {
    width: 100%;
    height: 1px;
    background-color: #535353;
    margin-top: 60px;
}
.Servecontior {
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 90px;
    display: flex;
}
.Serveitme {
    width: 318px;
    height: 455px;
    position: relative;
    color: white;
}
.Serveitmeimg {
    width: 318px;
    height: 455px;
    position: absolute;
    z-index: -1;
}
.Serveitembgc {
    background-image: linear-gradient(to right, #000000, #7e0707);
    opacity: 0.5;
    position: absolute;
    width: 318px;
    height: 455px;
    z-index: -1;
}
.Servebb {
    opacity: 0.2;
}
.Serveitmetitle {
    font-size: 18px;
    font-weight: bold;
    margin-left: 25px;
    margin-top: 20px;
}
.Serveitemcont {
    font-size: 14px;
    margin-top: 15px;
    opacity: 0.8;
    /*width: 260px;*/
    margin-left: 25px;
    line-height: 20px;
    word-wrap: break-word;
    word-break: normal;
    margin-right: 0.05rem;
}
.Serveitme:hover > .Serveitembgc {
    background-image: linear-gradient(to right, #ef190f, #210303);
    opacity: 0.85;
    position: absolute;
    width: 318px;
    height: 455px;
    z-index: -1;
}
.Servebb1 {
    position: relative;
    margin-top: 80px;
    margin-left: 25px;
}
.Servebb2 {
    position: absolute;
    z-index: -1;
}
.Serveitme:hover > .Servebb1 > .Servebb2 > .Servebb {
    opacity: 1;
}
.Incentive {
    width: 100%;
    height: 910px;
    background-color: white;
}
.Incentivetitle {
    width: 1270px;
    font-size: 18px;
    color: #333333;
    margin-top: 60px;
}
.xxpng {
    position: absolute;
    z-index: -1;
    width: 1920px;
    height: 751px;
    z-index: 0;
    margin-top: 150px;
}
.Incentivewarp {
    height: 520px;
    margin-top: 40px;
    background-color: white;
    display: flex;
}
.Incentiveleft {
    width: 388px;
    padding-left: 30px;
    padding-right: 30px;
    height: 520px;
    padding-top: 25px;
    border: 1px solid #dedede;
    background-color: #fcfdfe;
}
.lefttitle {
    font-size: 20px;
    color: #333333;
    font-weight: bold;
}
.leftcont {
    width: 330px;
    height: 80px;
    margin-top: 10px;
    color: #6f6f6f;
    font-size: 14px;
    line-height: 20px;
}
.leftbottom {
    margin-top: 30px;
    display: flex;
}
.yuan {
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: #ef190f;
    position: absolute;
}
.xian {
    height: 248px;
    position: absolute;
    border: 1px dashed #ef190f;
}
.rightbottom {
    margin-left: 20px;
}
.rightitem {
    width: 310px;
    margin-top: 20px;
}
.Incentivelt {
    color: #333333;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 2px;
}
.Incentivelc {
    color: #6f6f6f;
    font-size: 12px;
}
.Incentiveright {
    width: 890px;
    height: 520px;
    display: flex;
    flex-wrap: wrap;
}
.Incentiverightitem {
    width: 443px;
    height: 260px;
    border: 1px solid #dedede;
    padding-left: 30px;
    padding-right: 30px;
    cursor: pointer;
}
.Ititle {
    color: #333333;
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
}
.Ifgx {
    background-color: #f0f0f0;
    width: 100%;
    height: 1px;
    margin-top: 14px;
}
.Ititle2 {
    margin-top: 20px;
    font-size: 14px;
    color: #333333;
}
.Ititle3 {
    margin-top: 10px;
    font-size: 30px;
    color: #333333;
    font-style: italic;
    font-weight: bold;
}
.Ititle4 {
    font-size: 14px;
    color: #333333;
    margin-top: 18px;
    width: 386px;
    line-height: 20px;
}
.Incentiverightitem:hover > .Ititle {
    color: #ef190f;
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
}
.Incentiverightitem:hover > .Ititle3 {
    color: #ef190f;
    margin-top: 10px;
    font-size: 30px;
}
.Customer {
    width: 100%;
    height: 419px;
    background-color: white;
}
.Customerwarp {
    width: 1280px;
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
}
.Customeritem {
    width: 318px;
    height: 108px;
    border: 1px solid #f6f6f6;
    justify-content: center;
    align-items: center;
    display: flex;
}
.Customeritem:hover {
    width: 318px;
    height: 108px;
    border: 1px solid #f6f6f6;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
}
.Latest {
    width: 100%;
    background-image: url("../assets/byteimg/xingkong.png");
    /* background-color: #3c3c3c; */
    height: 600px;
    position: relative;
}
.Latestmore {
    font-size: 14px;
    color: white;
    margin-left: auto;
    margin-top: 129px;
    cursor: pointer;
}
.rightimg {
    width: 15px;
    height: 16px;
    margin-top: 130.5px;
    margin-left: 10px;
    /* border: 1px dashed white; */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.Latestitemwarp {
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    display: flex;
    align-items: center;
}
.Latestitemwarp :nth-child(3n + 1) {
    margin-left: 0 !important;
}
.Latestitem {
    width: 370px;
    height: 250px;
    margin-left: 85px;
}
.Latestitemimg {
    width: 370px;
    height: 160px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2);
    object-fit: contain;
}
.Latestitemfont {
    width: 370px;
    height: 50px;
    color: white;
    font-size: 18px;
    margin-top: 20px;
}
.Latestitemfgx {
    margin-top: 20px;
    width: 370px;
    height: 1px;
    background-color: white;
}
.Latestitem:hover > .Latestitemfont {
    color: #ef190f;
}
.Latestitem:hover > .Latestitemfgx {
    background-color: #ef190f;
}
.About {
    width: 100%;
    /*height: 757px;*/
    padding-bottom: 60px;
    background-color: white;
}
.Ableft {
    width: 760px;
    margin-top: 85px;
    color: #333333;
    font-size: 15px;
    line-height: 21px;
}
.Alitemwarp {
    width: 760px;
    margin-top: 40px;
    display: flex;
    align-items: center;
}
.Alitemwarp :nth-child(1) {
    margin-left: 0;
}
.Alitem {
    width: 250px;
    height: 115px;
    border: 1px solid #f0f0f0;
    margin-left: 20px;
    cursor: pointer;
}
.Alitem:hover {
    border: 1px solid #ef190f;
}
.AlitemTile {
    margin-top: 17px;
    /*margin-left: 20px !important;*/
    /*text-align: center;*/
    display: flex;
    justify-content: center;
    align-items: center;
}
.Afont {
    font-size: 34px;
    color: #333333;
    margin-left: 10px;
    font-weight: bold;
    font-style: italic;
}
.Abimg {
    width: 40px;
    height: 40px;
}
.Aboutwarp {
    display: flex;
}
.Abfont {
    margin-top: 12px;
    font-size: 18px;
    color: #333333;
    text-align: center;
    /*margin-left: 20px !important;*/
}
.Acodewarp {
    margin-top: 44px;
    display: flex;
}
.Acoderight {
    margin-left: 30px;
    font-size: 14px;
    color: #333333;
    font-weight: 400;
    line-height: 20px;
}
.redwarp {
    width: 100%;
    height: 125px;
    z-index: -2;
    background-color: #C4C4C4;
    background-image: url("../assets/byteimg/redpng.png");
}

.readconter {
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    display: flex;
    align-items: center;
}
.readfont {
    color: #fff;
    font-size: 28px;
    line-height: 40px;
}
.readmore {
    width: 175px;
    height: 40px;
    border-radius: 2px;
    border: 1px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: white;
    margin-left: auto;
    cursor: pointer;
}
.readjoin {
    width: 175px;
    height: 40px;
    border-radius: 2px;
    border: 1px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    background-color: white;
    color: #ef190f;
    margin-left: 20px;
    cursor: pointer;
}
</style>
