<template>
    <div class="Labtable">
        <div class="mainbobydisgo">
            <el-dialog
                :title="$t('operations')"
                :visible.sync="deldisgo"
                width="560px"
                :center="true"
            >
                <div class="mainbobydisgoT1">{{ $t('dele') }}</div>
                <div class="mainbobydisgoT2">
                  {{ $t('dele1') }}
                </div>
                <div class="mainfgx"></div>
                <div class="okbtnwarp">
                    <div class="qxbtn" @click="qxbtn">{{ $t('cancel') }}</div>
                    <div class="delbtnn" @click="okdel">{{ $t('confirmD') }}</div>
                </div>
            </el-dialog>
        </div>
        <div class="labdead">
            <div class="upFileButton" @click="addmainbody" v-show="real_tt">
                <img
                    style="width: 24px; margin-right: 15px"
                    src="../assets/home/icon_add@2x.png"
                    alt=""
                />
                <span>{{ $t('new') }}</span>
            </div>

            <el-popover
                placement="right"
                width="248"
                height="56"
                trigger="hover"
            >
                <div class="elperwarp">
                  {{ $t('realNameCheck') }}<span
                        @click="SmRZ"
                        class="elperwarpred"
                        >{{ $t('goCheck') }}</span
                    >
                </div>

                <div slot="reference" class="upFileButton2" v-show="!real_tt">
                    <img
                        style="width: 24px; margin-right: 15px"
                        src="../assets/home/icon_add@2x.png"
                        alt=""
                    />
                    <span>{{ $t('new') }}</span>
                </div>
            </el-popover>

            <div class="tarLeftSearchBox" v-if="real_tt">
                <input
                    type="text"
                    class="tarLeftSearch"
                    v-model="inputSearchData"
                    :placeholder="$t('search')"
                />
                <img
                    src="../assets/home/icon_srech_noSelect@2x.png"
                    alt=""
                    @click="blurserchval"
                />
                <!-- <img
                    src="../assets/home/searchClose.png"
                    alt=""
                    v-else
                    @click="clearInputFun"
                /> -->
            </div>
        </div>
        <div class="bqtitle">{{ $t('management') }}</div>

        <el-table
            ref="multipleTable"
            :data="tableData"
            :default-sort="{ prop: 'date', order: 'ascending' }"
            tooltip-effect="dark"
            style="width: 100%; padding-left: 40px"
            fit
            @selection-change="handleSelectionChange"
        >
            <el-table-column label="" min-width="130">
                <template
                    slot="header"
                    slot-scope="scope"
                    style="padding-left: 28px"
                >
                  {{ $t('dataSubjects') }}
                </template>
                <template slot-scope="scope">{{ scope.row.dataName }}</template>
            </el-table-column>
            <el-table-column label="" min-width="50">
              <template
                slot="header"
                slot-scope="scope"
                style="padding-left: 28px"
              >
                {{ $t('abbreviation') }}
              </template>
              <template slot-scope="scope">{{ scope.row.dataReferred }}</template>
            </el-table-column>
            <el-table-column label="" min-width="80" style="padding-left: 28px">
                <template slot="header" slot-scope="scope">
                  <span class="el-dropdown-link">{{ $t('status') }}</span>
                </template>
                    <template slot-scope="scope" >
                        <div v-if="scope.row.applyType === 1">{{ $t('newApplication') }}</div>
                        <div v-if="scope.row.applyType === 2">-</div>
                        <div v-if="scope.row.applyType === 3">{{ $t('Expansion') }}</div>
                    </template>
            </el-table-column>

            <el-table-column label="" min-width="70" style="padding-left: 28px">
                <template slot="header" slot-scope="scope">
                    <el-dropdown @command="handleSh">
                        <span class="el-dropdown-link">
                            {{ $t('currentStatus') }}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="1"
                                >{{ $t('reviewing') }}</el-dropdown-item
                            >
                            <el-dropdown-item command="2"
                                >{{ $t('pass') }}</el-dropdown-item
                            >
                            <el-dropdown-item command="3"
                                >{{ $t('return') }}</el-dropdown-item
                            >
                        </el-dropdown-menu>
                    </el-dropdown>
                </template>
                <template slot-scope="scope" >
                  <div v-if="scope.row.auditState===1">{{ $t('reviewing') }}</div>
                  <div v-if="scope.row.auditState===2">{{ $t('approved') }}</div>
                  <div v-if="scope.row.auditState===3">{{ $t('return') }}</div>
                </template>
            </el-table-column>
<!--            <el-table-column label="" min-width="70" style="padding-left: 28px">-->
<!--                <template slot="header" slot-scope="scope">-->
<!--                    <el-dropdown @command="handboby">-->
<!--                        <span class="el-dropdown-link">-->
<!--                            {{ $t('level') }}<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
<!--                        </span>-->
<!--                        <el-dropdown-menu slot="dropdown">-->
<!--                            <el-dropdown-item command="1"-->
<!--                                >A类数据主体</el-dropdown-item-->
<!--                            >-->
<!--                            <el-dropdown-item command="2"-->
<!--                                >B类数据主体</el-dropdown-item-->
<!--                            >-->
<!--                            <el-dropdown-item command="3"-->
<!--                                >C类数据主体</el-dropdown-item-->
<!--                            >-->
<!--                        </el-dropdown-menu>-->
<!--                    </el-dropdown>-->
<!--                </template>-->
<!--&lt;!&ndash;                <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div v-if="scope.row.dataSubjectLevel == '1'">&ndash;&gt;-->
<!--&lt;!&ndash;                        A类数据主体&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div v-if="scope.row.dataSubjectLevel == '2'">&ndash;&gt;-->
<!--&lt;!&ndash;                        B类数据主体&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div v-if="scope.row.dataSubjectLevel == '3'">&ndash;&gt;-->
<!--&lt;!&ndash;                        C类数据主体&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--            </el-table-column>-->

            <el-table-column label="" min-width="110" style="padding-left: 28px"  show-overflow-tooltip>
                <template slot="header" slot-scope="scope" align="center"  >{{ $t('uploaded') + '/' + '\n' + $t('used') + '/' + '\n' + $t('total') }}</template>
                <template slot-scope="scope">
                    <div class="TIbclass">
                        <div style="color: #ef190f; font-weight: bold">
                            {{setFormat(scope.row.chainCapacityFront)}}
                        </div>
                        <div style="margin-left: 5px; margin-right: 5px">/</div>
                        <div style="font-weight: bold">
                            {{setFormat(scope.row.useCapacityFront)}}

                        </div>
                        <div style="margin-left: 5px; margin-right: 5px">/</div>
                        <div
                            style="color: #a1a1a1; font-weight: bold"
                            v-if="scope.row.totalCapacity != null"
                        >
                            {{setFormat(scope.row.totalCapacityFront)}}
                        </div>
                        <div style="color: #a1a1a1; font-weight: bold" v-else>
                            0 TiB
                        </div>
                    </div>
                </template>
            </el-table-column>

            <el-table-column
                sortable
                prop="date"
                align="left"
                :label="$t('createTime')"
                min-width="70"
                :show-overflow-tooltip="true"
            >
                <template slot-scope="scope"><span>{{ scope.row.createTime }}</span></template>
            </el-table-column>
            <el-table-column
                prop="address"
                align="center"
                :label="$t('operations')"
                min-width="70"
                width="210"
                style="margin-left: auto"
            >
                <template slot-scope="scope">
                    <el-popover placement="bottom" width="158" trigger="click">
                        <img
                            slot="reference"
                            class="editimg"
                            src="../assets/home/edit@2x.png"
                            alt=""
                        />
                        <ul>
                            <li
                                :class="
                                    scope.row.auditState === 3 && scope.row.applyType===1
                                        ? 'options'
                                        : 'failOpt'
                                "
                                @click="handlexg(scope.$index, scope.row)"
                            >
                                {{ $t('modify') }}
                            </li>
                            <li
                                :class="
                                    scope.row.auditState === 2||(scope.row.applyType!==1 && scope.row.auditState !== 1)
                                        ? 'options'
                                        : 'failOpt'
                                "
                                @click="handlexp(scope.$index, scope.row)"
                            >
                                {{ $t('appExpansion') }}
                            </li>
<!--                            <li-->
<!--                                :class="-->
<!--                                    (scope.row.auditState === 2 && scope.row.dataSubjectLevel !== '3')||(scope.row.applyType!=1&& scope.row.dataSubjectLevel !== '3'&&scope.row.auditState != 1)-->
<!--                                        ? 'options'-->
<!--                                        : 'failOpt'-->
<!--                                "-->
<!--                                @click="handlupd(scope.$index, scope.row)"-->
<!--                            >-->
<!--                                升级数据主体-->
<!--                            </li>-->
                            <li :class="
                                    scope.row.auditState === 2||(scope.row.applyType!==1 && scope.row.auditState !== 1)
                                        ? 'options'
                                        : 'failOpt'
                                " @click="accentManage(scope.row)">{{ $t('accManagement') }}</li>
                        </ul>
                        <!--                      <el-button slot="reference" >click 激活</el-button>-->
                    </el-popover>
                    <img
                        class="editimg"
                        src="../assets/home/edit1.png"
                        @click="handlelookmainbody(scope.$index, scope.row)"
                        alt=""
                    />
                    <img
                        v-if="scope.row.auditState !== 2 && scope.row.auditState !== 1 && scope.row.applyType === 1"
                        class="editimg"
                        src="../assets/byteicon/del2.png"
                        @click="handledel(scope.$index, scope.row)"
                        alt=""
                    />
                    <img
                        v-if="scope.row.auditState === 2 || scope.row.auditState === 1 ||scope.row.applyType !== 1"
                        class="editimg"
                        src="../assets/byteicon/del1.png"
                        alt=""
                    />
                </template>
            </el-table-column>
        </el-table>

        <div class="fywarp">
            <div style="padding-left: 25px; margin-right: auto">
              <span v-if="lang === 'zh-CN'">{{  $t('Total') + ' ' + total + '条'}}</span>
              <span v-if="lang === 'en-US'">{{  $t('Total') + ' ' + total }}</span>
            </div>
            <div style="margin-right: 10px">{{ $t('hint105') }}</div>
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">{{ commandNum }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="10">10</el-dropdown-item>
                    <el-dropdown-item command="20">20</el-dropdown-item>
                    <el-dropdown-item command="30">30</el-dropdown-item>
                    <el-dropdown-item command="40">40</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <div class="ffwarp">
                <div class="leftmore">
                    <img
                        class="icon"
                        src="../assets/byteicon/leftmore.png"
                        alt=""
                    />
                </div>
                <div class="leftmore">
                    <img
                        class="icon2"
                        src="../assets/byteicon/leftbtn.png"
                        alt=""
                        @click="handleleft"
                    />
                </div>
                <div class="yeinput">
                    <input
                        v-model="current"
                        class="inll"
                        type="text"
                        style="width: 100%; height: 100%"
                        @blur="pageonChange"
                    />
                </div>
                <div class="totleys">{{ current }}/{{ pages }}{{ $t('hint106') }}</div>
                <div class="rightmore">
                    <img
                        class="icon"
                        src="../assets/byteicon/rightbtn.png"
                        alt=""
                        @click="handleright"
                    />
                </div>
                <div class="rightmore">
                    <img
                        class="icon2"
                        src="../assets/byteicon/rightmore.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { EventBus } from '../../event-bus.js'
import apis from '../common/apis.js'
export default {
  data () {
    return {
      lang: sessionStorage.getItem('lang') || 'zh-CN',
      deldisgo: false,
      Shstaut: '当前状态',
      bobystaut: '数据主体等级',
      pagese: 0,
      ladbelsstr: '',
      labels: [],
      addlablebtn: false,
      page: 1,
      commandNum: 10,
      multipleSelection: 0,
      tablength: 0,
      total: 0,
      inputSearchData: null,
      tableData: [],
      pages: 0,
      current: 0,
      Shindenx: 0,
      bodyindex: 0,
      real_tt: false
    }
  },
  created () {
    let token = localStorage.token
    this.$axios({
      method: 'post',
      url: apis.currentUserApi,
      headers: {
        'Content-Type': 'application/json',
        Bearer: token
      }
    }).then((r) => {
      console.log(r.data)
      localStorage.setItem('stateMessage', r.data.stateMessage)
      localStorage.setItem('subjectMessage', r.data.subjectMessage)
      if (r.data.real == true) {
        localStorage.setItem('real', true)
      } else {
        localStorage.setItem('real', false)
      }

      localStorage.setItem('mainBody', r.data.mainBody)
    })

    if (localStorage.real == 'false') {
      this.real_tt = false
    } else {
      this.real_tt = true
    }

    // total 总数 size 当前页数量 current 当前页  pages 总页数

    let prams = {
      current: 1,
      size: 10,
      createTimeSort: 1
    }
    this.$axios({
      method: 'post',
      url: apis.dataMainBodyListApi,
      data: prams,
      headers: {
        'Content-Type': 'application/json',
        Bearer: token
      }
    }).then((r) => {
      console.log(r)
      if (r.status == 200) {
        console.log(r.data.records[0])
        this.tableData = r.data.records[0]
        this.total = r.data.records[0].length
        this.current = r.data.current
        this.pages = r.data.pages
      }
    })
  },
  mounted () {
    EventBus.$on('addsubmit', (msg) => {
      this.onloadfunc()
    })
  },
  methods: {
    blurserchval () {
      console.log(this.inputSearchData)
      let that = this
      let token = localStorage.token
      let pr = {
        current: 1,
        size: that.commandNum,
        auditState: that.Shindenx,
        dataLevel: that.bodyindex,
        dataName: this.inputSearchData,
        createTimeSort: 1
      }
      that.$axios({
        method: 'post',
        url: apis.dataMainBodyListApi,
        data: pr,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        console.log(r)
        if (r.status == 200) {
          console.log(r.data.records[0])
          that.tableData = r.data.records[0]
          that.total = r.data.total
          that.current = r.data.current
          that.pages = r.data.pages
        }
      })
    },
    handlelookmainbody (index, row) {
      let that = this
      let token = localStorage.token
      let parms = {
        id: row.id
      }
      this.$axios({
        method: 'post',
        url: apis.dataMainBodyDetailApi,
        data: parms,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        console.log(r)
        if (r.status === 200) {
          let msg = r.data
          msg.type = row.applyType
          console.log('2222:', msg)
          EventBus.$emit('lookmainbody', msg)
        }
      })
    },
    handlexg (index, row) {
      if (row.auditState === 3 && row.applyType === 1) {
        let that = this
        let token = localStorage.token
        let parms = {
          id: row.id
        }
        that.$axios({
          method: 'post',
          url: apis.dataMainBodyDetailApi,
          data: parms,
          headers: {
            'Content-Type': 'application/json',
            Bearer: token
          }
        }).then((r) => {
          console.log(r)
          if (r.status === 200) {
            let msg = r.data
            EventBus.$emit('MainBodyDetail', msg)
          }
        })
      } else {
        console.log('NULL')
      }
    },
    handlexp (index, row) {
      console.log('ru:', row)
      if (row.auditState === 2 || (row.applyType !== 1 && row.auditState !== 1)) {
        let that = this
        let token = localStorage.token
        let parms = {
          id: row.id,
          ids: []
        }
        that.$axios({
          method: 'post',
          url: apis.dataMainBodyCapacityListApi,
          data: parms,
          headers: {
            'Content-Type': 'application/json',
            Bearer: token
          }
        }).then((r) => {
          console.log(r)
          if (r.status === 200) {
            let msg = r.data
            // console.log('申请扩容', msg)
            EventBus.$emit('expansion', msg)
            EventBus.$emit('sendId', row.id)
          }
        })
        // EventBus.$emit('expansion', row)
        // console.log('申请扩容', row)
      } else {
        console.log('NULL')
      }
    },
    handlupd (index, row) {
      if ((row.auditState === 2 && row.dataSubjectLevel !== '3') || (row.applyType !== 1 && row.dataSubjectLevel !== '3' && row.auditState != 1)) {
        let that = this
        let token = localStorage.token
        let parms = {
          id: row.id,
          ids: []
        }
        this.$axios({
          method: 'post',
          url: apis.dataMainBodyUpgradeListApi,
          data: parms,
          headers: {
            'Content-Type': 'application/json',
            Bearer: token
          }
        }).then((r) => {
          console.log(r)
          if (r.status === 200) {
            let msg = r.data
            EventBus.$emit('sendData', msg)
          }
        }).catch(e => {
          this.$message.info({
            content: e.response.data,
            background: true,
            duration: 3
          })
        })
        EventBus.$emit('updateData', row)
        console.log('升级数据主体', row)
      } else {
        console.log('NULL')
      }
    },
    accentManage (row) {
      console.log('当前账号:', row)
      if (row.auditState === 2 || (row.applyType !== 1 && row.auditState !== 1)) {
        row.showSign = true
        this.$store.state.accent = row.id
        EventBus.$emit('accentManage', row)
        console.log('当前账号:', row)
      }
    },

    okdel () {
      let that = this
      let row = this.row
      let token = localStorage.token
      let prams = {
        id: row.id
      }
      this.$axios({
        method: 'post',
        url: apis.dataMainBodyDelApi,
        data: prams,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        if (r.status === 200) {
          that.$message.info({
            content: this.$t('deleteSuc'),
            background: true,
            duration: 3
          })
          let pr = {
            current: Number(this.current),
            size: that.commandNum,
            auditState: that.Shindenx,
            dataLevel: that.bodyindex,
            createTimeSort: 1
          }
          that.$axios({
            method: 'post',
            url: apis.dataMainBodyListApi,
            data: pr,
            headers: {
              'Content-Type': 'application/json',
              Bearer: token
            }
          }).then((r) => {
            console.log(r)
            if (r.status === 200) {
              console.log(r.data.records[0])
              that.tableData = r.data.records[0]
              that.total = r.data.total
              that.current = r.data.current
              that.pages = r.data.pages
              this.deldisgo = false
            }
          })
        }
      })
    },
    onloadfunc () {
      let that = this
      let token = localStorage.token
      let pr = {
        current: Number(this.current),
        size: that.commandNum,
        auditState: that.Shindenx,
        dataLevel: that.bodyindex,
        createTimeSort: 1
      }
      that.$axios({
        method: 'post',
        url: apis.dataMainBodyListApi,
        data: pr,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        console.log(r)
        if (r.status === 200) {
          console.log(r.data.records[0])
          that.tableData = r.data.records[0]
          that.total = r.data.total
          that.current = r.data.current
          that.pages = r.data.pages
        }
      })

      this.$axios({
        method: 'post',
        url: apis.currentUserApi,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        this.real = r.data.real
        this.mainBody = r.data.mainBody
      })
    },
    SmRZ () {
      EventBus.$emit('SmRz')
    },
    qxbtn () {
      this.deldisgo = false
    },
    handledel (index, row) {
      let that = this
      console.log(row.id)
      this.row = row
      this.deldisgo = true
    },
    handleSh (item) {
      this.Shindenx = item
      if (item == 1) {
        this.Shstaut = '审核中'
      }
      if (item == 2) {
        this.Shstaut = '通过'
      }
      if (item == 3) {
        this.Shstaut = '退回'
      }
      console.log(item)
      let token = localStorage.token
      if (this.bodyindex == 0) {
        var prams = {
          current: 1,
          size: 10,
          auditState: item
        }
      } else {
        var prams = {
          current: 1,
          size: 10,
          auditState: item,
          dataLevel: this.bodyindex,

          createTimeSort: 1
        }
      }

      this.$axios({
        method: 'post',
        url: apis.dataMainBodyListApi,
        data: prams,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        console.log(r)
        if (r.status == 200) {
          console.log(r.data.records[0])
          this.tableData = r.data.records[0]
          this.total = r.data.records[0].length
        }
      })
    },
    handboby (item) {
      this.bodyindex = item

      // if (item == 1) {
      //   this.bobystaut = 'A类数据主体'
      // }
      // if (item == 2) {
      //   this.bobystaut = 'B类数据主体'
      // }
      // if (item == 3) {
      //   this.bobystaut = 'C类数据主体'
      // }
      let token = localStorage.token
      if (this.Shindenx == 0) {
        var prams = {
          current: 1,
          size: 10,
          dataLevel: item
        }
      } else {
        var prams = {
          current: 1,
          size: 10,
          auditState: this.Shindenx,
          dataLevel: item,
          createTimeSort: 1
        }
      }
      this.$axios({
        method: 'post',
        url: apis.dataMainBodyListApi,
        data: prams,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        console.log(r)
        if (r.status == 200) {
          console.log(r.data.records[0])
          this.tableData = r.data.records[0]
        }
      })
    },
    addmainbody () {
      EventBus.$emit('Sqztxm')
    },
    handleCommand (command) {
      this.commandNum = command
      let token = localStorage.token
      let prams = {
        current: 1,
        size: this.commandNum,
        auditState: this.Shindenx,
        dataLevel: this.bodyindex,
        createTimeSort: 1
      }
      this.$axios({
        method: 'post',
        url: apis.dataMainBodyListApi,
        data: prams,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        console.log(r)
        if (r.status == 200) {
          console.log(r.data.records[0])
          this.tableData = r.data.records[0]
          this.total = r.data.records[0].length
          this.current = r.data.current
          this.pages = r.data.pages
        }
      })
    },

    handleleft () {
      let that = this
      if (this.current == 1) {
        that.$message.info({
          content: '当前是第一页',
          background: true,
          duration: 3
        })
        return
      }
      let token = localStorage.token
      let prams = {
        current: Number(this.current) - 1,
        size: this.commandNum,
        auditState: this.Shindenx,
        dataLevel: this.bodyindex,
        createTimeSort: 1
      }
      this.$axios({
        method: 'post',
        url: apis.dataMainBodyListApi,
        data: prams,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        console.log(r)
        if (r.status == 200) {
          console.log(r.data.records[0])
          this.tableData = r.data.records[0]
          this.total = r.data.records[0].length
          this.current = r.data.current
          this.pages = r.data.pages
        }
      })
    },
    handleright () {
      let that = this
      if (this.current == this.pages) {
        that.$message.info({
          content: '已经是最后一页了',
          background: true,
          duration: 3
        })
        return
      }
      let token = localStorage.token
      let prams = {
        current: Number(this.current) + 1,
        size: this.commandNum,
        auditState: this.Shindenx,
        dataLevel: this.bodyindex,
        createTimeSort: 1
      }
      this.$axios({
        method: 'post',
        url: apis.dataMainBodyListApi,
        data: prams,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        console.log(r)
        if (r.status == 200) {
          console.log(r.data.records[0])
          this.tableData = r.data.records[0]
          this.total = r.data.records[0].length
          this.current = r.data.current
          this.pages = r.data.pages
        }
      })
    },

    pageonChange () {
      // 失去焦点 请求页数
      let that = this
      console.log(this.page)
      if (this.current > this.pages) {
        that.$message.info({
          content: '输入的页数大于最大页数了！',
          background: true,
          duration: 3
        })
      } else {
        let that = this
        // total 总数 size 当前页数量 current 当前页  pages 总页数
        let token = localStorage.token
        that.pramsdata = {
          size: that.commandNum,
          current: this.current,
          createTimeSort: 1
        }

        this.$axios({
          method: 'post',
          url: apis.dataMainBodyListApi,
          data: that.pramsdata,
          headers: {
            'Content-Type': 'application/json',
            Bearer: token
          }
        }).then((r) => {
          console.log(r)
          if (r.status == 200) {
            this.tableData = r.data.records[0]
            this.total = r.data.records[0].length
            this.pages = r.data.pages // 总页数
            this.current = r.data.current // 当前页数
          }
        })
      }
    },
    clearInputFun () {
      this.inputSearchData = null
    },
    handleSelectionChange (val) {
      console.log(val)
      this.multipleSelection = val
      console.log(this.multipleSelection.length)
      this.tablength = this.multipleSelection.length
    },
    handleEdit () {},
    toggleSelection (rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection() // 清空选项，项目中：请求接口后，重新请求数据渲染页面的时候，使用此方式，清空选中勾选状态。
      }
    },
    setFormat (str) {
      let v = str.substring(str.length - 2)
      if (v === ' B') {
        return str
      } else if (v === 'KB') {
        return (str.substring(0, str.length - 2) + 'KiB')
      } else if (v === 'MB') {
        return (str.substring(0, str.length - 2) + 'MiB')
      } else if (v === 'GB') {
        return (str.substring(0, str.length - 2) + 'GiB')
      } else if (v === 'TB') {
        return (str.substring(0, str.length - 2) + 'TiB')
      } else if (v === 'PB') {
        return (str.substring(0, str.length - 2) + 'PiB')
      }
    }
  }
}
</script>

<style scoped>
.elperwarp {
    font-size: 13px;
    color: #4f4f4f;
    cursor: pointer;
    word-wrap: break-word;
    word-break: normal;
}
.elperwarpred {
    color: #ef190f;
    font-weight: bold;
    cursor: pointer;
}
.is-leaf {
    min-width: 280px !important;
}
.el-table__header-wrapper {
    min-width: 1140px;
    width: 100% !important;
}
.okbtnwarp {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
}
.qxbtn {
    width: 98px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid #4f4f4f;
    color: #4f4f4f;
    font-size: 16px;
    margin-right: 16px;
    cursor: pointer;
}
.delbtnn {
    cursor: pointer;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #ffffff;
    background-color: #ef190f;
    font-size: 16px;
    margin-right: 16px;
    margin-right: 32px;
}
.mainfgx {
    margin-top: 35px;
    height: 1px;
    width: 100%;
    background-color: #e8eaec;
}
.mainbobydisgoT1 {
    margin-top: 30px;
    color: #333333;
    font-size: 18px;
    margin-left: 30px;
}
.mainbobydisgoT2 {
    margin-top: 10px;
    color: #a1a1a1;
    font-size: 14px;
    margin-left: 30px;
    word-wrap: break-word;
    word-break: normal;
}
.mainbobydisgo >>> .el-dialog__body {
    height: 200px !important;
    padding: 0 !important;
}
.mainbobydisgo >>> .el-dialog--center {
    margin-top: 30vh !important;
}
.TIbclass {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #333333;
}
.el-dropdown-link {
    color: #a1a1a1 !important;
    font-size: 13px !important;
}
input {
    background: none;
    outline: none;
    border: 1px solid #cccccc;
}
input:focus {
    border: 1px solid #cccccc;
}

.Lablesubmit {
    cursor: pointer;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: #ef190f;
    color: white;
    font-size: 16px;
    margin-top: 35px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
}
.Lbainput {
    width: 360px;
    height: 35px;
    margin-left: 22px;
    border-color: #cccccc;
    box-shadow: 0 0 0;
    margin-top: 6px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 13px;
}
.ltitke {
    color: #333333;
    font-size: 12px;
    margin-left: 22px;
}
.lable >>> .el-dialog__header {
    border: 0;
}
.lable >>> .el-dialog__body {
    height: 150px;
    padding: 0 !important;
}
.lable >>> .el-dialog--center {
    text-align: center;
    margin-top: 30vh !important;
}
.totleys {
    width: 60px;
    height: 30px;

    font-size: 14px;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
}
.inll {
    border: none;
    padding-left: 20px;
}
.yeinput {
    width: 60px;
    height: 100%;
    background-color: white;
    font-size: 14px;
    color: #333333;
    border-right: 1px solid #cccccc;
}
.icon {
    width: 16px;
    height: 16px;
}
.icon2 {
    width: 17px;
    height: 17px;
}
.ffwarp {
    margin-right: 30px;
    width: 235px;
    height: 32px;
    margin-left: 5px;
    border-radius: 3px;
    border: 1px solid #cccccc;
    display: flex;
    align-items: center;
}
.el-dropdown-link {
    cursor: pointer;
    color: #333333;
    font-weight: bold;
}
.Labtable >>> .el-table_1_column_1 {
    width: 78px !important;
}
.Labtable >>> .el-table_1_column_2 {
    width: 209px !important;
}
.Labtable >>> .el-table-column--selection .cell {
    padding-left: 10px;
}
.Labtable >>> .el-table__row {
    height: 68px;
}
.fywarp {
    min-width: 1140px;
    /* width: 1624px; */
    height: 40px;
    margin-left: 24px;
    background-color: #fbfbfb;
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-top: 18px;
    font-size: 14px;
}

.editimg {
    width: 24px;
    height: 24px;
    cursor: pointer;
}
.bqtitle {
    min-width: 1140px;
    /* width: 1680px; */
    height: 40px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    padding-left: 28px;
    color: #4f4f4f;
    font-size: 16px;
}
.labdead {
    /* width: 1680px; */
    min-width: 1140px;
    height: 74px;
    display: flex;
    align-items: center;
    padding-left: 24px;
    border-bottom: 1px solid #e8eaec;
}
.upFileButton {
    width: 140px;
    height: 44px;
    background: linear-gradient(to left, #ef190f, #f04d30);
    /* background: #EF190F; */
    border-radius: 4px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
    white-space: nowrap;
    justify-content: center;
}
.upFileButton2 {
    width: 140px;
    height: 44px;
    background-color: #a1a1a1;
    /* background: #EF190F; */
    border-radius: 4px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
    white-space: nowrap;
    justify-content: center;
}
.delbtn {
    width: 51px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: rgba(204, 204, 204, 0.1);
    margin-left: 22px;
    color: #4f4f4f;
    cursor: pointer;
    font-size: 14px;
}

.tarLeftSearchBox {
    width: 526px;
    height: 44px;
    position: relative;
    margin-left: auto;
    margin-right: 40px;
    border-radius: 5px;
    border-color: #e8eaec;
}

.tarLeftSearchBox img {
    height: 44px;
    width: 44px;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
}

.tarLeftSearch {
    width: 526px;
    height: 44px;
    padding: 12px 16px;
    padding-right: 56px;
    border-radius: 5px;
    border: 1px solid #e8eaec;
}
input::-webkit-input-placeholder {
    color: #6f6f6f;
    font-size: 14px;
}
.leftmore {
    width: 30px;
    height: 30px;
    border-right: 1px solid #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f2;
}
.rightmore {
    width: 30px;
    height: 30px;
    border-left: 1px solid #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f2;
}

.options,
.failOpt {
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    text-align: center;
}
.failOpt {
    color: #cccccc;
}
.options:nth-child(2),
.failOpt:nth-child(2) {
    margin: 5px 0;
}
.options:hover {
    background: #fff3f2;
    color: #ef190f;
    font-weight: 400;
    font-size: 14px;
}
.failOpt:hover {
    background: #fff3f2;
    font-weight: 400;
    font-size: 14px;
}
.el-table .ascending .sort-caret.ascending {
    border-bottom-color: #f04d30 !important;
}
.el-table .descending .sort-caret.descending {
    border-top-color: #f04d30 !important;
}

.el-table .ascending .sort-caret.ascending {
    border-bottom-color: #f04d30 !important;
}
.el-table .descending .sort-caret.descending {
    border-top-color: #f04d30 !important;
}
</style>
<style>
.el-popover {
    padding: 5px 10px;
}
</style>
