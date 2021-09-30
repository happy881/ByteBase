<template>
    <div class="setHelp" @click="help">
      <img class="sethelpImg" src="../assets/help/help-icon2.png" alt="">
<!--      <p>{{ $t('help') }}</p>-->
    </div>
</template>

<script>
export default {
  name: 'helpbutton',
  methods: {
    help () {
      this.$router.push('/helpPage')
    }
  }
}
</script>

<style scoped>
.setHelp {
  /*width: 48px;*/
  /*height: 60px;*/
  /*text-align: center;*/
  /*padding-top: 8px;*/
  /*background: linear-gradient(180deg, #EF190F 0%, #F04D30 100%);*/
  /*opacity: 1;*/
  /*border-radius: 5px;*/
  cursor: pointer;
}
.setHelp p {
  font-size: 12px;
  font-weight: 400;
  /*line-height: 28px;*/
  color: #FFFFFF;
}
  .sethelpImg {
    width: 80px;
    height: 111px;
  }
</style>
