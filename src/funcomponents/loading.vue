<style scoped>
  .mySpin {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333333;
  }
</style>
<template>
  <div class="mySpin">
    <i class="el-icon-loading" style="font-size: 32px; color: #ff7056"></i>
    <p>{{ $t('loading') }}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sizeStyle: {
        width: '16px',
        height: '16px'
      }
    }
  },
  props: {
    width: {
      type: String,
      default: '16px'
    },
    height: {
      type: String,
      default: '16px'
    }
  },
  methods: {

  },
  mounted () {
    this.sizeStyle.width = this.width
    this.sizeStyle.height = this.height
  }
}
</script>
