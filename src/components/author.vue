<template>
  <div>授权中........</div>
</template>

<script>
import apis from '../common/apis'
import {EventBus} from '../../event-bus'

export default {
  name: 'author',
  data () {
    return {
      token: '',
      code: this.$route.query.code,
      state: this.$route.query.state,
      uuid: '',
      xuanzhuan: 2
    }
  },
  created () {
    this.getCode()
  },
  methods: {
    getUser () {
      let that = this
      let params = {
        uuid: that.uuid
      }
      that.$axios({
        method: 'post',
        url: apis.pollingByUuidApi,
        data: params,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (res.status === 200) {
          console.log('shuju:', res.data)
        }
      }).catch(err => {
        that.$message.error({
          content: this.$t('hint44'),
          background: true
        })
      })
    },
    getCode () {
      let that = this
      let params = {
        code: that.code,
        state: that.state
      }
      that.$axios({
        method: 'get',
        url: apis.qrCodeCallBackApi,
        params: params,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        let v = {
          xuanzhuan: null,
          islogin: null
        }
        if (res.status === 200) {
          EventBus.$emit('params', res.data)
          if (res.data.bearer && res.data.bearer !== null) {
            // console.log('xianshi')
            localStorage.token = res.data.bearer
            this.getMinioTokenFun(res.data.bearer)
          }
          that.uuid = res.data.uuid
          // this.getUser()
          // console.log('第几个执行：', localStorage.getItem('loginName'))
          // EventBus.$emit('loginName', res.data.mobile)
          if (res.data.state === '2') {
            v.xuanzhuan = 2
            v.islogin = false
            // localStorage.loginName = res.data.mobile
            this.$router.push({
              path: '/home',
              params: {
                sign: 1
              }
            })
            this.$nextTick(() => {
              localStorage.setItem('loginName', res.data.mobile)
            })
            EventBus.$emit('dialogVisible', false)
            EventBus.$emit('showOrnot', v)
          } else if (res.data.state === '1' || res.data.state === '3') {
            EventBus.$emit('dialogVisible', true)
            this.$router.push({
              path: '/'
            })
            // v.xuanzhuan = 2
            // v.islogin = true
            // EventBus.$emit('showOrnot', v)
            EventBus.$emit('dataState', res.data.state)
          }
        }
      }).catch(err => {
        that.$message.error({
          content: this.$t('hint44'),
          background: true
        })
      })
    },
    getMinioTokenFun (token) {
      this.$axios({
        method: 'post',
        url: apis.getminTokenApi,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((res) => {
          console.log(res.data)
          localStorage.minioToekn = res.data.bearer
        })
        .catch((err) => {
          if (err.response.status === 500) {
            this.$message.error({
              content: this.$t('hint9'),
              background: true,
              duration: 5
            })
          } else {
            this.$message.error({
              content: this.$t('hint9'),
              background: true
            })
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
