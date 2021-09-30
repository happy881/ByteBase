<template>
    <div>
      <headnav></headnav>
        <div class="newsconter">
            <div class="newstitle">{{ $t('Dynamic') }}</div>
            <img src="../assets/byteimg/01.png" alt="" style="position: absolute;right: -150px;top: 10px;z-index: -1;">
            <div class="red"></div>
            <div class="Latestitemwarp">
                <div class="Latestitem" v-for="(item, index) in infoList" @click="newAll(item)" :key="index">
                  <img
                    class="Latestitemimg"
                    :src="item.listImg"
                    alt=""
                  />
                    <div class="Latestitemfont">
                      {{ item.title }}
                    </div>
                    <div class="Latestitemfgx"></div>
                </div>
            </div>
            <div class="itemwarp" v-for="(temp, index) in allNews" @click="newAll(temp)" :key="index">
                <img class="newsimg" :src="temp.listImg" alt="" />
                <div style="position: relative" class='l'>
                    <div class="newstitle22">
                      {{ temp.title }}
                    </div>
                    <div class="newscont">
                      {{ temp.abstracts }}
                    </div>
                    <div class="newstime">{{ temp.createTime }}</div>
                </div>
            </div>
            <div class="itemfgx"></div>
            <div class="pagination">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="params.current"
                :page-sizes="['3']"
                :page-size="params.size"
                layout="total, prev, pager, next, jumper"
                :total="total">
              </el-pagination>
            </div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
import headnav from '@/funcomponents/head'
import foot from '@/components/foot'
import apis from '../common/apis'
export default {
  components: {
    headnav,
    foot
  },
  data () {
    return {
      allNews: null,
      infoList: null,
      params: {
        current: 1,
        size: 3
      },
      total: 0
    }
  },
  created () {
    // this.getNewsList()
    this.$axios({
      method: 'post',
      url: apis.newsApi,
      data: {
        current: 1,
        size: 3
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      this.allNews = res.data.records[0]
      this.total = res.data.total
      this.infoList = res.data.records[0].slice(0, 3)
    })
  },
  // mounted () {
  //   this.$route.query.index
  // },
  watch: {
    informations (newVal, oldVal) {
      if (newVal >= oldVal) {
        this.sign = false
      }
    }
  },
  methods: {
    new1 () {
      this.$router.push('/new1')
    },
    new2 () {
      this.$router.push('/new2')
    },
    new3 () {
      this.$router.push('/new3')
    },
    newAll (val) {
      this.$router.push({
        path: '/new1',
        query: val
      })
      console.log('xianshi:', val)
    },
    getNewsList () {
      this.$axios({
        method: 'post',
        url: apis.newsApi,
        data: this.params,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        this.allNews = res.data.records[0]
        this.total = res.data.total
        // this.infoList = res.data.records[0].slice(0, 3)
      })
    },
    getMore () {
      let params = {
        current: 1,
        size: 5
      }
      this.getNewsList(params)
    },
    // 获取所有标签
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
      this.params.size = val
      this.getNewsList()
    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`)
      this.params.current = val
      this.getNewsList()
    },
    handlePageSize () {
      if (!this.pageSize) {
        this.pageSize = 0
      }
    }
  }
}
</script>

<style scoped>
.newsconter {
    position: relative;
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 70px;
    padding-bottom: 40px;
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
    object-fit:cover
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
    /*width: 1190px;*/
    cursor: pointer;
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
    object-fit: cover;
}
.newstitle22 {
    width: 800px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 24px;
}
.itemwarp:hover>.l >.newstitle22{

     color: #ef190f;
}
/* .newstitle22:hover {
    width: 800px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #ef190f;
    font-size: 24px;
} */
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
.pagination {
  text-align: center;
  margin: 40px 0 0 0;
}
.pagination >>> .el-pagination button:hover {
  color: #ef190f;
}
.pagination >>> .el-pager li.active {
  color: #ef190f;
}
.pagination >>> .el-pager li:hover {
  color: #ef190f;
}
.pagination >>> .el-pagination__sizes .el-input .el-input__inner:hover {
  border-color: #ef190f;
}
.pagination >>> .el-input.is-active .el-input__inner, .pagination >>> .el-input__inner:focus {
  border-color: #ef190f;
}
.more {
    width: 1280px;
    height: 50px;
    color: #a1a1a1;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
