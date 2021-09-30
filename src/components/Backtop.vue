<template>
    <div class="page-component__scroll">
        <el-backtop target=".page-component__scroll">
            <img class="backtp" src="../assets/backtop.png" />
        </el-backtop>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Backtop'
}
</script>

<style >
.page-component__scroll {
    position: absolute;
    top: 0px;
    left: 0;
    bottom: 0;
    right: 0;
    overflow-x: hidden;
    min-width: 1440px;
}
.el-backtop {
    background-color: white;
    border-radius: 6px;
    height: 48px;
    width: 48px;
    /* box-shadow: 0px 0px  10px rgba(239, 25, 15,.3)  !important; */
}
.el-backtop:hover {
    background-color: white;
    border-radius: 6px;
    height: 48px;
    width: 48px;
    box-shadow: 0px 5px  10px 0 rgba(239, 25, 15,.3)  !important;
}
.backtp {
    width: 20px;
    height: 25px;
}
</style>
