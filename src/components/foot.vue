<template>
    <div>
       <div class='footwarp'>
           <div class='footconter'>
               <img src="../assets/byteimg/logo_w.png" alt="" style="width:100px">
               <div class="fontcont">
                 <span @click="go"> DataCap Allocation Record</span>
                 <span>|</span>
                 <span @click="openurl">Ⓒ 2010-2021 bytebase.cn 版权所有 沪ICP备2021002308号-1</span>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {

    }
  },
  methods: {
    openurl () {
      var openurl = window.open('_blank')
      openurl.location.href = 'https://beian.miit.gov.cn/#/Integrated/index'
    },
    go () {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped>
.footwarp{
    width: 100%;
    /*height: 55px;*/
    background-color: #292A32;
    justify-content: center;
    display: flex;
}
.footconter{
    width: 1280px;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;

}
.fontcont{
    color:#6F6F6F;
    font-size: 12px;
    margin-left: auto;
    cursor: pointer;
}

</style>
