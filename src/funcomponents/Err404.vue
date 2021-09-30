<template>
    <div v-title data-title="404">
          <div class='T4'>
              <div>404</div>
              <div style="font-size:50px">{{ $t('errorInfo') }}</div>
          </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.T4{
    padding-top: 30vh;
    font-size: 120px;
    color: black;
    background-color: white;
    width: 100%;
    height: 100px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100000;
    flex-direction: column;
}
</style>
