<style scoped>

/*
.ivu-input:hover {
    border:1px solid rgb(167, 165, 165);
} */
.setImg {
  width: 28px;
  height: 25px;
}
.s_line {
  display: inline-block;
  font-size: 14px;
  margin: 0px 3px;
  position: relative;
  top: -2px;
  opacity: 0.7;
}
.changeLang {
  /*width: 1.3rem;*/
  text-align: right;
}
.el-icon-view {
  font-size: 16px;
  line-height: 24px;
  margin-left: 5px;
}
.smdialog2 >>>.ivu-input:hover {
    border-color: #cccccc !important;
}
.smdialog2 >>>.ivu-input:focus {
 border: 1px solid #cccccc !important ;
  border-color: #cccccc !important;
box-shadow: 0px 1px 8px 0px rgb(240 77 48 / 10%)
}
.smdialog2 >>> .ivu-input{
    height: 35px !important;
}
.smdialog6 >>>.el-dialog__body {
    height: 800px;
    padding: 32px !important;
    display: block;
    padding-bottom: 50px !important;
}
.sqbtnwarp {
    display: flex;
    align-items: center;
    padding: 20px 0 20px 256px;
    /*margin-top: 30px;*/
    /*margin-bottom: -20px;*/
    /*height: 40px;*/
}
.setskicy {
  position: sticky;
  bottom: 0;
  background-color: #FFFFFF;
  z-index: 100;
  border-top: 2px solid #e8eaec;
  margin-bottom: 0;
}
.sqbtnwarp2 {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 256px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 40px;
}
.sqbtn1 {
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-size: 16px;
    border: 1px solid #4f4f4f;
    color: #4f4f4f;
    margin-right: 16px;
    cursor: pointer;
}
.sqbtn2 {
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-size: 16px;
    margin-right: 16px;
    border: 1px solid #ef190f;
    color: white;
    background-color: #ef190f;
    cursor: pointer;
}
.sqbtn3 {
    margin-right: 16px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-size: 16px;
    border: 1px solid #ef190f;
    background-color: white;
    color: #ef190f;
    cursor: pointer;
}
.Sqydjs {
    color: #a1a1a1;
    font-size: 13px;
    margin-left: 14px;
}
.Sqxy {
    color: #333333;
    font-size: 13px;
    text-decoration: underline;
    cursor: pointer;
    margin-left: 5px;
    line-height: 20px;
    word-break: normal;
    word-wrap: break-word;
}
.Sqcheckbox {
    margin-top: 23px;
    display: flex;
    align-items: center;
    margin-left: 40px;
}
.row-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.captcha_input_wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}
.captcha_input_box {
    width: 36px;
    height: 36px;
    margin-right: 10px;
    margin-left: 10px;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    border: 1px solid #dddddd;
    font-size: 20px;
    text-align: center;
    color: #1e243a;
}
.smimg2 {
    width: 52px;
    height: 60px;
    margin-top: 52px;
    margin-left: 60px;
}
.smmidwarp {
    display: flex;
    height: 231px;
    width: 100%;
    border-bottom: 1px solid #e8eaec;
}

.nosee {
    color: #333333;
    font-size: 14px;
    margin-left: 10px;
    font-weight: bold;
}
.gosm {
    border-radius: 4px;
    width: 100px;
    height: 40px;
    color: white;
    background-color: #ef190f;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 32px;
    margin-left: auto;
    cursor: pointer;
}
.gosm2 {
    border-radius: 4px;
    width: 100px;
    height: 40px;
    color: #ef190f;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    cursor: pointer;
    border: 1px solid #ef190f;
}
.gosm3 {
    border-radius: 4px;
    width: 100px;
    height: 40px;
    color: white;
    background-color: #ef190f;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 32px;
    margin-left: 10px;
    cursor: pointer;
}
.warptitme {
    color: #333333;
    font-size: 18px;
    line-height: 25px;
    font-weight: bold;
}
.warptitme2 {
    color: #333333;
    font-size: 14px;
    line-height: 28px;
    margin-top: 20px;
    word-wrap: break-word;
    word-break: normal;
}
.smrzfontwarp {
    width: 425px;
    margin-left: 20px;
    color: #333333;
    margin-top: 50px;
}
.Smidbottom {
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
}
.smdialog >>> .el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #ef190f;
    border-color: #ef190f;
}
.smdialog >>> .el-checkbox__inner:hover {
    border: 1px solid #ef190f;
}
.smdialog >>> .el-checkbox__input .el-checkbox__inner {
    border-color: #cccccc;
    width: 14px;
    height: 14px;
    margin-left: 32px;
}
.smdialog >>> .el-icon-close:before {
    content: "\E6DB";
    font-size: 20px;
    font-weight: bold;
    color: black;
}
.smdialog >>> .el-dialog--center {
    text-align: center;
    margin-top: 30vh !important;
}
.emaildialog >>> .el-dialog__header {
    padding: 0;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 22px;
    font-size: 21px;
    color: #333333;

    border-bottom: 0px solid #e8eaec;
}
.emaildialog >>> .el-dialog__body {
    height: 186px !important;
    padding: 0 !important;
    display: block;
}
.emaildialog >>> .el-dialog__title {
    font-weight: 100 !important;
    font-size: 18px;
}
.emaildialog >>> .el-dialog--center {
    margin-top: 30vh !important;
}
.smdialog >>> .el-dialog__header {
    padding: 0;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 22px;
    font-size: 21px;
    color: #333333;
    font-weight: 500;
    border-bottom: 1px solid #e8eaec;
}
.smdialog >>> .el-dialog__title {
    font-size: 21px;
    color: #333333;
    font-weight: bold;
}
.smdialog >>> .el-dialog__body {
    height: 312px;
    padding: 0 !important;
    display: block;
}
.check {
    color: #ef190f;
    border-bottom: 2px solid #ef190f;
}
.headwarp {
    width: 20rem;
    height: 70px;
    min-width: 1366px;
    background-color: rgba(255, 255, 255);
    position: fixed;
    top: 0;
    z-index: 999999999;
    margin-bottom: 70px;
    display: flex;
    z-index: 10;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(51, 51, 15, 0.1);
}
.setDropdown {
    /*width: 96px;*/
}
.setDropdown >>> .el-dropdown-menu__item {
    width: 1.7rem;
}
.conter {
    /*width: 1440px;*/
    /*width: 85%;*/
    display: flex;
    align-items: center;
}
.headlogo {
    width: 1.3rem;
    /*height: 60px;*/
    cursor: pointer;
}
.conter > ul {
    width: 6rem;
    display: flex;
    height: 68px;
    margin-left: 0.5rem;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #4f4f4f;
}
/*.conter > ul :first-child {*/
/*    margin-left: 0;*/
/*}*/
.conter > ul > li {
    /*width: 64px;*/
    /*margin-left: 40px;*/
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    /* border-bottom: 2px solid #EF190F; */
}
.loginwarp {
    margin-left: 20px;
    /*margin-left: auto;*/
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
    /*width: 64px;*/
    height: 30px;
    border-radius: 2px;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 18px;
    cursor: pointer;
    border: 1px solid #333333;
    padding: 0 5px;
}
.homeApp {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    width: 100%;
    background: #f2f7f4;
    display: flex;
    justify-content: center;
}

input {
    border: none;
    color: #333333;
    background-color: #ffffff;
    /* 透明背景*/
    font-size: 14px;
    border-radius: 4px;
    outline: none;
    /* 去除选中状态边框*/
}

input:focus {
    color: #333333;
    box-shadow: 0px 1px 8px 0px rgba(240, 77, 48, 0.1);
}

input::-webkit-input-placeholder {
    color: #8f93a0;
    font-size: 14px;
}

.tar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px 0 26px;
    height: 60px;
    background: black;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
}

.tarLeft {
    display: flex;
    align-items: center;
}

.tarLeftLine {
    width: 1px;
    height: 60px;
    background: rgba(232, 234, 236, 0.3);
    margin-left: 86.5px;
    margin-right: 22px;
}

.tarLeft img {
    width: 127px;
    height: 60px;
}

.tarLeftSearchBox {
    width: 526px;
    height: 44px;
    position: relative;
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
}

.topSearchBox {
  margin-left: 0.4rem;
  width: 3.6rem ;
  height: 36px;
  position: relative;
}
.topSearchBox img {
  height: 36px;
  width: 36px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
.topSearch {
  width: 3.6rem;
  height: 36px;
  /*padding: 12px 16px;*/
  /*padding-right: 33px;*/
}
.topSearch >>> .el-input__inner {
  border-color: #C0C4CC;
}
.topSearch >>> .el-input__inner:focus {
  border-color: #ef190f;
}
.topSearch >>> .el-input__prefix {
  line-height: 36px;
  cursor: pointer;
}
.tarEn {
    width: 145px !important;
    height: 30px !important;
}

.tarRight {
    display: flex;
    align-items: center;
    height: 30px;
    font-size: 14px;
    position: relative;
}

.touxiang {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: 15px;
}

.touxiang img {
    width: 100%;
    height: 100%;
}

.jiantou {
    width: 24px;
    height: 24px;
    margin-left: 5px;
}

.jiantou img {
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.phone {
    color: black;
  width: 77px;
  font-size: 14px;
}

.tarRightSet {
    width: 24px;
    height: 24px;
    margin-right: 77px;
    cursor: pointer;
}

.tarRightSet img {
    width: 100%;
    height: 100%;
}

.tarRightApi {
    margin-right: 23px;
    position: relative;
    display: flex;
}

.tarRightApiCom {
    font-size: 15px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: white;
    width: 72px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
    position: relative;
}

.tarRightApiCom:hover {
    color: #ef190f;
}

.tarRightApiLine {
    position: absolute;
    left: 16px;
    bottom: 0;
    width: 40px;
    height: 3px;
    background: #ef190f;
    transition: left linear 0.3s;
}

.selectApiClass {
    color: #ef190f;
}

.tarRightApiLineRight {
    left: 88px;
}

.languageBox2 {
    color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-left: 30px;
}

.outLoginBox {
    width: 140px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    border: 1px solid black;
    position: absolute;
    right: 0px;
    bottom: -130px;
    z-index: 99;
}

.outLoginBoxes {
  width: 140px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  border: 1px solid black;
  position: absolute;
  right: 0px;
  bottom: -90px;
  z-index: 99;
}
.outLogin {
  width: 140px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  border: 1px solid black;
  position: absolute;
  right: 0px;
  bottom: -50px;
  z-index: 99;
}
.outLoginContent {
    width: 100%;
    height: 35px;
    margin-top: 6px;
    text-align: center;
    line-height: 35px;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: black;
    cursor: pointer;
}

.outLoginContent:hover {
    background: rgba(255, 47, 161, 0.1);
    color: #ef190f;
}
.touxiangBox {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.selectLan {
    color: black;
}
.savewarp {
    width: 1.4rem;
    height: 0.5rem;
    background-image: -webkit-linear-gradient(#ef190f, #f04d30);
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(240, 77, 48, 0.5);
    margin-left: 20px;
    /*margin-left: auto;*/
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.setNode {
  width: 1.4rem;
  height: 0.5rem;
  /*background-image: -webkit-linear-gradient(#ef190f, #f04d30);*/
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(240, 77, 48, 0.21);
  border: 1px solid #EF2919;
  margin-left: 12px;
  /*margin-left: auto;*/
  color: #F02718;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.setNode img {
  /*width: 22px;*/
  /*height: 22px;*/
  margin-right: 5px;
}
.input#upfile.file-upload-input {
    cursor: pointer;
}
.smdialog2 >>> .el-dialog__body {
    padding: 42px 42px 0px !important;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #ef190f;
    border-color: #ef190f;
}
.el-checkbox__inner:hover {
    border: 1px solid #ef190f;
}
.el-checkbox__input .el-checkbox__inner {
    border-color: #cccccc;
    width: 14px;
    height: 14px;
    margin-left: 32px;
}
.el-icon-close:before {
    content: "\E6DB";
    font-size: 20px;
    font-weight: bold;
    color: black;
}
.el-dialog--center {
    text-align: center;
    margin-top: 2vh !important;
}
.el-dialog__header {
    padding: 0;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 22px;
    font-size: 21px;
    color: #333333;
    font-weight: 500;
    border-bottom: 1px solid #e8eaec;
}
.el-dialog__title {
    font-size: 21px;
    color: #333333;
    /* font-weight: bold; */
}
.el-dialog__body {
    overflow: scroll;
    height: 800px;
    padding: 42px 42px 0px !important;
    display: block;
}

.smtitle {
    color: #333333;
    font-size: 20px;
}
.coent1 {
    color: #6f6f6f;
    font-size: 14px;
    margin-top: 10px;
}
.coent2 {
    color: #6f6f6f;
    font-size: 14px;
    margin-top: 20px;
}
input {
    background: none;
    outline: none;
    border: 1px solid #cccccc;
}
input:focus {
    border: 1px solid #cccccc;
}
.dtitle {
    color: #4f4f4f;
    font-size: 13px;
    margin-top: 20px;
    /*margin-left: 42px;*/
}
.dinpit {
    width: 536px;
    height: 35px;
    border-color: #cccccc;
    box-shadow: 0 0 0;
    margin-top: 6px;
    padding-left: 10px;
    font-size: 13px;
    /*margin-left: 42px;*/
}
.dinpitn {
    width: 536px;
    height: 35px;
    border-color: #cccccc;
    box-shadow: 0 0 0;
    margin-top: 6px;
    font-size: 13px;
}
.dinpit2 {
    width: 442px;
    height: 35px;
    border-color: #cccccc;
    box-shadow: 0 0 0;

    padding-left: 10px;
    font-size: 13px;
}
input::-webkit-input-placeholder {
    color: #a1a1a1;
}
.upzzwarp {
    width: 536px;
    /*height: 53px;*/
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    color: #a1a1a1;
    font-size: 12px;
    margin-top: 8px;
    /*margin-bottom: 8px;*/
}
.setcontent {
  width: 536px;
  /*height: 53px;*/
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  color: #a1a1a1;
  font-size: 12px;
  margin-top: 8px;
  line-height: 23px;
}
.uptitle {
    width: 420px;
    margin-left: 10px;
    margin-right: 16px;
    word-wrap: break-word;
    word-break: normal;
    /*height: 34px;*/
}
.setLineHeight {
  line-height: 34px;
}
.setYB {
  width: 412px;
  margin-left: 10px;
  margin-right: 16px;
  word-wrap: break-word;
  word-break: normal;
  /*height: 90px;*/
}
.another-upload {
  width: 88px;
  height: 32px;
  position: relative;
  overflow: hidden;
  background-color: #333333;
  color: white;
  display: inline-block;
  border-radius: 2px;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  margin: 10px 0 auto auto;
}
.another-upload-input {
  background-color: transparent;
  position: absolute;
  width: 120px;
  height: 32px;
  cursor: pointer;
  top: 0;
  left: -12px;
  opacity: 0;
}
.file-upload {
    width: 88px;
    height: 32px;
    position: relative;
    overflow: hidden;
    background-color: #333333;
    color: white;
    display: inline-block;
    border-radius: 2px;

    text-align: center;
    cursor: pointer;
    /*margin: 10px 0 auto auto;*/
}
.setMarign {
  /*margin-top: 30px;*/
}
.file-upload-input {
    background-color: transparent;
    position: absolute;
    width: 120px;
    height: 32px;
    cursor: pointer;
    top: 0;
    left: -32px;
    opacity: 0;
}

.upbtn {
    width: 88px;
    height: 32px;
    background-color: #333333;
    color: white;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.uplisences {
    background-color: #333333;
    color: white;
    border-radius: 2px;
    text-align: center;
    cursor: pointer;
    padding: 0 5px;
}
.zzimgwarp {
    padding:8px ;
    width: 536px;
    /* height: 32px; */
    background-color: #f9f9f9;
    margin-top: 1px;
    display: flex;
    align-items: center;
    color: #4f4f4f;
    font-size: 12px;
}
.setMargin {
  margin-left: 42px;
}
.zzdel {
    margin-left: auto;
    margin-right: 20px;
    cursor: pointer;
}
.zzdel2 {
    color: #ef190f;
    margin-left: auto;
    /*width: 30px;*/
    /* margin-right: 20px; */
    margin-top: 5px;
    cursor: pointer;
}
.setUrl1 {
  margin-left: 5px;
  cursor: pointer;
  width: 430px;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
.Dzhushi {
    margin-top: 20px;
    width: 536px;
    height: 32px;
    background-color: #f9f9f9;
    color: #a1a1a1;
    font-size: 12px;
    padding-left: 10px;
    display: flex;
    align-items: center;
}
.emailbtn {
    width: 86px;
    height: 32px;
    margin-left: 8px;
    border-radius: 2px;
    background-color: #333333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    cursor: pointer;
}
.downModel {
  position: relative;
}
.setDowns {
  display: flex;
  align-items: center;
  position: absolute;
  top: -3px;
  right: 0;
}
.checksmbtnWarp {
    height: 80px;
    margin-top: 30px;
    border-top: 1px solid #e8eaec;
    display: flex;
    align-items: center;
}
.checkSmQx {
    width: 100px;
    height: 40px;
    border: 1px solid #4f4f4f;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #4f4f4f;
    background-color: white;
    margin-left: auto;
    cursor: pointer;
}
.checkSmQr {
    width: 100px;
    height: 40px;

    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: white;
    background-color: #ef190f;
    margin-left: 16px;
    cursor: pointer;
}
.Sm4title {
    color: #333333;
    font-size: 20px;
    font-weight: bold;
}
.Sm4coent1 {
    color: #6f6f6f;
    font-size: 14px;
    margin-top: 10px;
}
.Sm4coent2 {
    color: #6f6f6f;
    font-size: 14px;
    margin-top: 20px;
}
.smdialog4 >>> .el-dialog__body {
    height: 800px;
    padding: 30px 30px !important;
    display: block;
}
.smdialog5 >>> .el-dialog__body {
    height: 800px;
    padding: 0 !important;
    display: block;
    /*padding-bottom: 20px !important;*/
}
.Sm4warp {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;
    padding-bottom: 60px;
}
.Sm4item {
    width: 268px;
    height: 298px;
    border: 1px solid #f0f0f0;
    position: relative;
}
.ZTimg {
    width: 36px;
    height: 36px;
    margin-right: 10px;
}
.ZTtt {
    color: #333333;
    font-size: 16px;
    font-weight: bold;
}
.Sm4midtitle {
    color: #333333;
    font-size: 14px;
    margin-top: 10px;
    margin-left: 17px;
}
.Sm4midfont {
    font-size: 20px;
    color: #333333;
    margin-left: 17px;
    margin-top: 10px;
    font-weight: bold;
}
.Sm4item:hover {
    width: 268px;
    height: 298px;
    border: 1px solid #ef190f;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
.Sm4item:hover .ZTtt {
    color: #ef190f;
    font-size: 16px;
    font-weight: bold;
}
.Sm4item:hover .Sm4midfont {
    font-size: 20px;
    color: #ef190f;
    margin-left: 17px;
    margin-top: 10px;
    font-weight: bold;
}
.Sm4itemtilewarp {
    display: flex;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
    height: 50px;
    border-bottom: 1px solid #f0f0f0;
}
.Sm4coents {
    font-size: 13px;
    color: #333333;
    margin-left: 17px;
    margin-right: 15px;
    margin-top: 10px;
}
.Sm4btn {
    bottom: 20px;
    left: 83px;
    width: 114px;
    height: 34px;
    border: 1px solid #ef190f;
    color: #ef190f;
    background-color: white;
    font-size: 16px;
    /* font-weight: bold; */
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 4px;
    cursor: pointer;
}
.Sm4item:hover .Sm4btn {
    bottom: 20px;
    left: 83px;
    width: 114px;
    height: 34px;
    border: 1px solid #ef190f;
    color: white;
    background-color: #ef190f;
    font-size: 16px;
    /* font-weight: bold; */
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 4px;
    cursor: pointer;
}
.Sm5titlewarp {
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
}
.Sm5titleitem {
    width: 206px;
    font-size: 16px;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 60px;
    border-bottom: 4px solid #d9d9d9;
}
.Sm5titleitemcheck {
    width: 206px;
    font-size: 16px;
    color: #ef190f;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 60px;
    border-bottom: 4px solid #ef190f;
}
.XXwarp {
    width: 100%;
    height: 60px;
}
.XX {
    height: 60px;
    width: 206px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.popclass {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 36px !important;
    font-size: 12px !important;
    color: #a1a1a1 !important;
    /* box-shadow: -4px -0 10px rgba(0, 0, 0, .15); */
}
.popclasscheck {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 36px !important;
    font-size: 12px !important;
    color: white !important;
    background-color: #ef190f;
    box-shadow: 0px 3px 6px rgba(239, 25, 15, 0.1) !important;
    border-radius: 2px;
}
.popclasscheck::after {
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0px;
    top: -5px;
    content: "";
    border-style: solid;
    border-width: 5px;
    border-color: #ef190f #ef190f transparent transparent;
    transform: rotate(-45deg);
    box-shadow: 2px -2px 2px rgba(0, 0, 0, 0.07);
}
.popclass::after {
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0px;
    top: -5px;
    content: "";
    border-style: solid;
    border-width: 5px;
    border-color: #fff #fff transparent transparent;
    transform: rotate(-45deg);
    box-shadow: 2px -2px 2px rgba(0, 0, 0, 0.07);
}
.smdialog5 >>> .el-popover {
    padding: 0 !important;
    height: 36px !important;
    position: initial;
    margin-top: 20px;
}
.setbody >>> .el-dialog__body {
    margin-right: 42px;
}
.picktitle {
    width: 564px;
    /*height: 60px;*/
    background-color: #fff3f2;
    align-items: center;
    justify-content: center;
    padding: 13px 14px 13px 15px;
    font-size: 13px;
    color: #333333;
    margin-top: 20px;
    margin-left: 28px;
    word-wrap: break-word;
    word-break: normal;
}
.Sm5Dtitle {
    color: #333333;
    font-size: 16px;
    margin-top: 20px;
    margin-left: 42px;
}
.setDownModel {
    display: flex;
    justify-content: space-between;
    padding-right: 42px;
    cursor: pointer;
}
.setnewModel {
  background-color: #F0F0F0;
  opacity: 1;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  /*cursor: pointer;*/
  padding: 5px 20px;
  position: relative;
  word-wrap: break-word;
  word-break: normal;
}
.setLines{
  width: 4px;
  height: 26px;
  background-color: #ef190f;
  position: absolute;
  left: 0;
  top: 5px;
}
.Sm5Dnewtitle {
  color: #333333;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 26px;
  /*margin-left: 42px;*/
}
.setDownModel img {
    width: 24px;
    margin-left: 5px;
}
.modelDownLoad {
    height: 26px;
    display: flex;
    background: linear-gradient(270deg, #EF190F 0%, #F04D30 100%);
    box-shadow: 0px 2px 8px rgba(240, 77, 48, 0.5);
    opacity: 1;
    border-radius: 4px;
    color: #FFFFFF;
    font-weight: 400;
    padding: 0 5px;
    /*border-left: 4px solid #ef190f;*/
}
.modelDownLoad p {
    font-size: 12px;
    line-height: 26px;
    cursor: pointer;
}

.Sm5xtitle {
    color: #4f4f4f;
    font-size: 13px;
    margin-top: 20px;
    margin-left: 42px;
}
.Sm5sizewarp {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 5px;
    margin-left: 42px;
    height: 32px;
}
.Sm5sizeitem {
    /*width: 80px;*/
    /* height: 32px; */
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    font-size: 13px;
    color: #4f4f4f;
    padding: 10px;
    /*margin-left: 8px;*/
    cursor: pointer;
}
.Sm5sizeitem-check {
    cursor: pointer;
    width: 80px;
    height: 32px;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    font-size: 13px;
    color: #ef190f;
    margin-left: 8px;
    border: 1px solid #ef190f;
}
.Areasizewarp {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /*flex-wrap: wrap;*/
  margin: 5px 0 20px 0;
  height: 32px;
}
.Areasizeitem {
  padding: 0 5px;
  line-height: 32px;
  background-color: #f9f9f9;
  border-radius: 2px;
  border: 1px solid #f9f9f9;
  font-size: 13px;
  color: #4f4f4f;
  margin-left: 8px;
  cursor: pointer;
  box-sizing: border-box;
}
.Areasizeitem-check {
  padding: 0 5px;
  cursor: pointer;
  line-height: 32px;
  background-color: #f9f9f9;
  align-items: center;
  border-radius: 2px;
  font-size: 13px;
  color: #ef190f;
  margin-left: 8px;
  border: 1px solid #ef190f;
  box-sizing: border-box;
}
.Sm5xbian {
    display: flex;
    align-items: center;
    height: 24px;
    margin-top: 10px;
    margin-left: 42px;
}
.Sm5dataitem {
    height: 24px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    background-color: #f0f0f0;
    color: #333333;
    font-size: 12px;
    margin-left: 8px;
    cursor: pointer;
}
.Sm5xaddwarp {
    display: flex;
    margin-top: 5px;
    margin-left: 42px;
}
.Sm5xinput {
    width: 474px;
    height: 35px;
    font-size: 13px;
    color: #333333;
    padding-left: 10px;
    display: flex;
    align-items: center;
}
.setWidth {
    width: 442px;
}
.Sm5addbtn {
    width: 54px;
    height: 32px;
    margin-left: 8px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    background-color: #333333;
    cursor: pointer;
}
.Sm5Xdatalistwarp {
    margin-left: 42px;
    margin-top: 8px;
    width: 536px;
    background-color: #f9f9f9;
    padding: 8px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.Sm5Xdatalistitem {
    height: 24px;
    padding: 5px;
    color: #333333;
    font-size: 12px;
    display: flex;
    align-items: center;
    background-color: #d9d9d9;
    border-radius: 2px;
    margin-left: 10px;
    margin-top: 5px;
}
.Sm5closeicon {
    width: 15px;
    height: 15px;
    margin-left: 4px;
    cursor: pointer;
}
.textarea {
    width: 536px;
    height: 78px;
    margin-left: 42px;
    padding-top: 9px;
    padding-left: 10px;
    border: 1px solid #cccccc;
    resize: none;
    font-size: 13px;
}
.textarea2 {
    width: 536px;
    margin-left: 42px;
    padding-top: 9px;
    padding-left: 10px;
    padding-bottom: 9px;
    padding-right: 10px;
    resize: none;
    font-size: 13px;

    background-color: #f9f9f9;
}
.emailtitle {
    font-size: 12px;
    color: #333333;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}
.codeClass {
    margin-top: 20px;
    height: 40px;
    color: #333333;
    font-size: 14px;
    display: flex;
    justify-content: center;
    cursor: pointer;
}
.buttons {
  color: #333333;
  font-size: 14px;
}
.okemail {
    width: 120px;
    height: 40px;
    /*margin-top: 10px;*/
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 140px;
    background-color: #ef190f;
    color: white;
    font-size: 16px;
    cursor: pointer;
}
  .starSign {
    color: #EF190F;
  }
  .el-form {
    padding: 0 42px;
  }
  .setRadio >>> .el-radio__input.is-checked .el-radio__inner {
    display: none;
  }
  .setRadio >>> .el-radio__inner {
    display: none;
  }
  .setRadio >>> .el-radio {
    margin-right: 5px;
    padding: 10px !important;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    background-color: #f9f9f9;
  }
  .setRadio >>> .el-radio-group {
    width: 100%;
  }
  .setRadio >>> .el-radio__input.is-checked .el-radio__inner {
    border-color:#ef190f;
  }
  .setRadio >>> .el-radio__label {
    font-size: 13px;
  }
  .setRadio >>> .el-radio__label {
    padding-left: 0;
  }
  .setRadio >>> .el-radio.is-bordered.is-checked {
    border-color: #ef190f;;
  }
  .setRadio >>> .el-radio__input.is-checked+.el-radio__label {
    color: #ef190f;
  }
  .setlabels >>> .el-form-item__label {
    line-height: 20px;
    text-align: left;
    margin-bottom: 10px;
    word-wrap: break-word;
    word-break: normal;
  }
  .setLabel >>> .el-form-item__label {
    /*line-height: 20px;*/
    text-align: left;
    /*margin-bottom: 10px;*/
    word-wrap: break-word;
    word-break: normal;
  }
  .setLine {
    line-height: 20px;
  }
  .setHeights {
    line-height: 36px;
  }
  .setPhone {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .setUrl {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .changeLang >>> .el-radio__input.is-checked .el-radio__inner {
    display: none;
  }
  .changeLang >>> .el-radio__inner {
    display: none;
  }
  .changeLang >>> .el-radio {
    margin-right: 10px;
  }
  .changeLang >>> .el-radio__label {
    font-size: 16px;
  }
  .changeLang >>> .el-radio__input.is-checked+.el-radio__label {
    color: #ef190f;
  }
  .demo-ruleForm >>> .el-form-item__content, .demo-ruleForm >>> .el-form-item__label {
    font-size: 13px;
    line-height: 0.2rem;
    text-align: left;
    margin-bottom: 0.1rem;
    word-wrap: break-word;
    word-break: normal;
  }
  .setEachOption >>> .el-radio.is-bordered+.el-radio.is-bordered {
    width: 80px;
    text-align: center;
  }
  .setEachOption >>> .el-radio.is-bordered+.el-radio.is-bordered {
    margin-left: 0;
  }
  .setEachOption >>> .el-radio--medium.is-bordered {
    width: 80px;
    text-align: center;
  }
  .demo-ruleForm >>> .el-input__inner:focus {
    border-color: #ef190f;
  }
  /*.setRadio >>> .el-radio.is-bordered.is-checked {*/
  /*  width: 80px;*/
  /*  text-align: center;*/
  /*}*/
</style>
<style>
  .el-dropdown-link {
    cursor: pointer;
    color: black;
  }
  .el-icon-arrow-down {
    font-size: 14px;
    font-weight: bold;
    color: #9194A1;
  }
  .el-dropdown-menu__item {
    width: 150px;
    text-align: center;
  }
  .el-dropdown-menu {
    /*border-color: #333333;*/
  }
</style>
<template>
    <div>
        <div class="headwarp">
            <div class="conter">
                <img class="headlogo" src="../assets/byteimg/logox2.png" alt="" @click="$router.push('/')" />
                <ul>
                    <li
                        v-for="(item, index) in title"
                        :key="item.index"
                        @click="checkindex(item, index)"
                        :class="{
                            check: (index !== 5 && item.checked)
                        }"
                    >
                        {{ item.label }}
                    </li>
                </ul>
              <div class="topSearchBox">
                <el-input
                  :clearable="true"
                  type="text"
                  class="topSearch"
                  v-model="inputDataAdress"
                  :placeholder="$t('dataCap')"
                  @keyup.enter.native="datacap"
                >
                  <i slot="prefix" class="el-input__icon el-icon-search" @click="datacap"></i>
                </el-input>
              </div>
                <div class="savewarp" @click="Cunzeng" v-if="!islogin">
                    <img
                        style="width: 23px; height: 25px; margin-right: 5px"
                        src="../assets/byteicon/pticon2.png"
                        alt=""
                    />
                    {{ $t('Storage') }}
                </div>
                <div class="setNode" @click="openNode" v-if="!islogin">
                  <img class="setImg" src="../assets/byteicon/node2.png" alt="">
                  {{ $t('storageNode') }}
                </div>
                <div class="tarRight" v-if="!islogin">
                    <div class="touxiang">
                        <img src="../assets/home/pic_默认头像@2x.png" alt="" />
                    </div>
                  <el-dropdown @command="menumCommand" class="setDropdown">
                    <span class="el-dropdown-link">
                    {{ mobile }}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <div v-if="subjectSign && subjectSign === 'false'">
                        <el-dropdown-item command="b" v-if="real || thisReal">{{ $t('realNameOne') }}</el-dropdown-item>
                        <el-dropdown-item command="SmRz" v-if="!(real || thisReal)">{{ $t('realNameTow') }}</el-dropdown-item>
                        <el-dropdown-item command="viewInfo" v-if="real || thisReal">{{ $t('partnerInfos') }}</el-dropdown-item>
                      </div>
                      <div v-if="subjectSign && subjectSign === 'true'">
                        <el-dropdown-item command="viewUserInfo">{{ $t('partnerInfos') }}</el-dropdown-item>
                      </div>
                      <el-dropdown-item command="logout">{{ $t('logout') }}</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
                <div class="loginwarp" v-if="islogin">
                  <div class="savewarp" @click="gohome(0)"><img
                    style="width: 23px; height: 25px; margin-right: 5px"
                    src="../assets/byteicon/pticon2.png"
                    alt=""
                  />
                    {{ $t('Storage') }}</div>
                </div>
              <div class="setNode" @click="openNode" v-if="islogin">
                <img class="setImg" src="../assets/byteicon/node2.png" alt="">
                {{ $t('storageNode') }}
              </div>
                <div class="changeLang">
                  <el-radio-group v-model="radio" @change="handleCommand">
                    <el-radio :label="'zh-CN'">中</el-radio>
                    <i class="s_line">|</i>
                    <el-radio :label="'en-US'">EN</el-radio>
                  </el-radio-group>
                </div>
            </div>
        </div>
        <login
            v-if="dialogVisible"
            :dialogVisible="dialogVisible"
            :logintype="logintype"
            :checkcunzeng="checkcunzeng"
            :state="state"
            :uuid="uuid"
            :dataState="dataState"
            @closepop="closepop"
            @closepop2="closepop2"
            ref="myComponent"
        ></login>
        <div class="emaildialog">
            <el-dialog
                :title="telvaltitle"
                :visible.sync="teldisgo"
                width="400px"
                :center="true"
            >
                <div class="emailtitle">{{ $t('enterVer') }}</div>
                <div class="row-center captcha_input_wrapper">
                    <input
                        v-for="(item, index) in telcaptchas"
                        :key="index"
                        v-model="item.num"
                        :ref="'telcaptchas' + index"
                        :id="'telcaptchas' + index"
                        @input="inputFinash2(index)"
                        @focus="adjust2(index)"
                        @keydown="inputDirection2(index)"
                        class="captcha_input_box row-center"
                        type="tel"
                        maxlength="1"
                    />
                </div>
                <div v-show="telshow" @click="submittell" class="codeClass">
                  {{ $t('resend') }}
                </div>
                <div v-show="!telshow" class="codeClass">{{ telcount }} s</div>

                <div class="okemail" @click="oktelphone">{{ $t('confirms') }}</div>
            </el-dialog>
        </div>
        <div class="emaildialog">
            <el-dialog
                :title="emailvaltitle"
                :visible.sync="email"
                width="400px"
                :center="true"
                :before-close="closeemadldialog"
            >
                <div class="emailtitle">{{ $t('enterVer') }}</div>
                <div class="row-center captcha_input_wrapper">
                    <input
                        v-for="(item, index) in captchas"
                        :key="index"
                        v-model="item.num"
                        :id="'captcha' + index"
                        @input="inputFinash(index)"
                        @focus="adjust(index)"
                        @keydown="inputDirection(index)"
                        class="captcha_input_box row-center"
                        type="tel"
                        maxlength="1"
                    />
                </div>
                <div v-show="Eamilshow" class="codeClass">
                  <el-button type="text" class="buttons" @click="submitEamil">{{ $t('resend') }}</el-button>
                </div>
                <div v-show="!Eamilshow" class="codeClass">
                    {{ Eamilcount }} s
                </div>

                <div class="okemail" @click="okeml">{{ $t('confirms') }}</div>
            </el-dialog>
        </div>
        <div class="smdialog">
            <el-dialog
                :title="$t('Authentication')"
                :visible.sync="openSm"
                :center="true"
                :before-close="closeSmdialog"
            >
                <div class="smmidwarp" style="">
                    <img
                        class="smimg2"
                        src="../assets/byteicon/shiming2.png"
                        alt=""
                    />
                    <div class="smrzfontwarp">
                        <div class="warptitme">{{ $t('ImproveAut') }}</div>
                        <div class="warptitme2">
                            {{ $t('AutContent') }}
                        </div>
                    </div>
                </div>
                <div class="Smidbottom">
                    <el-checkbox fill="#ef190f" v-model="checked"></el-checkbox>
                    <div class="nosee">{{ $t('prompt') }}</div>
                    <div class="gosm" @click="rzclick">{{ $t('AUT') }}</div>
                </div>
            </el-dialog>
        </div>
        <div class="smdialog2">
            <el-dialog
                :title="$t('Authentication')"
                :visible.sync="rzopen"
                :center="true"
            >
                <div class="dtitle" style="margin-top: 0"><span class="starSign">*</span>{{ $t('companyType') }}</div>
                <div class="Areasizewarp">
                  <div
                    style="margin-left: 0px"
                    :class="
                            areaIndex === 1
                                ? 'Areasizeitem-check'
                                : 'Areasizeitem'
                        "
                  @click="areaIndex = 1"
                >
                  {{ $t('mainland') }}
                </div>
                  <div
                    :class="
                            areaIndex === 2
                                ? 'Areasizeitem-check'
                                : 'Areasizeitem'
                        "
                    @click="areaIndex = 2"
                >
                  {{ $t('nomainland') }}
                </div>
                </div>
                <div class="dtitle" style="margin-top: 0"><span class="starSign">*</span>{{ $t('companyName') }}</div>
                <input
                    type="text"
                    class="dinpit"
                    :placeholder="$t('companyNamenotes')"
                    v-model="smcname"
                />
                <div class="dtitle" style="margin-top: 20px" v-if="areaIndex === 1"><span class="starSign">*</span>{{ $t('businessLic') }}</div>
                <div class="upzzwarp" v-if="areaIndex === 1">
                    <div class="uptitle">
                        {{ $t('businessLicnotes') }}
                    </div>
                    <div class="file-upload">
                        <div class="upbtn">{{ $t('uploaadBL') }}</div>
                        <input
                            class="file-upload-input"
                            name="upfile"
                            @change="handleFileChange"
                            id="upfile"
                            type="file"
                            accept="image/*"
                            ref="inputer"
                        />
                    </div>
                </div>
                <div v-if="areaIndex === 1">
                  <div class="zzimgwarp" v-if="ZZfileUrl !== ''">
                    <img
                    style="margin-left: 5px"
                    src="../assets/byteicon/zzimg.png"
                    alt=""
                  />
                    <div
                    @click="zzimgyl"
                    style="margin-left: 5px; cursor: pointer"
                  >
                      {{ $t('businessLic') }}.{{ZZfileFormat}}
                  </div>
                    <div class="zzdel" @click="delzzimg">{{ $t('delete') }}</div>
                  </div>
                  <el-progress v-if="upFileList1.name !== '' && upFileList1.percentage !== undefined && upFileList1.percentage !== 0" :status="upFileList1.status" :percentage="upFileList1.percentage"></el-progress>
                </div>
                <div class="dtitle" v-if="areaIndex === 1"><span class="starSign">*</span>{{ $t('bankAccount') }}</div>
                <Input
                    v-if="areaIndex === 1"
                    type="text"
                    class="dinpitn"
                    :placeholder="$t('bankAccountnotes')"
                    v-model="Smzh"
                ></Input>
                <div class="Dzhushi" v-if="areaIndex === 1">
                    {{ $t('bankAccountTips') }}
                </div>
                <div class="dtitle" v-if="areaIndex === 1"><span class="starSign">*</span>{{ $t('bankName') }}</div>
                <!--                      v-model="preStoreUtils.openingBank"
                      readonly -->
                <Input
                    v-if="areaIndex === 1"
                    type="text"
                    class="dinpitn"
                    :placeholder="$t('bankNamenotes')"
                   v-model="smbank"
                ></Input>
                <div class="dtitle" v-if="areaIndex === 1"><span class="starSign">*</span>{{ $t('Receiving') }}</div>

                  <input
                    v-if="areaIndex === 1"
                    type="text"
                    class="dinpit"
                    :placeholder="$t('Receivingnotes')"
                    v-model="smcontest"
                  />
                <div class="dtitle" v-if="areaIndex === 1"><span class="starSign">*</span>{{ $t('billEmail') }}</div>
                <div style="display: flex; align-items: center" v-if="areaIndex === 1">
                    <input
                        v-model="emailval"
                        type="text"
                        class="dinpit2"
                        :placeholder="$t('billEmailnotes')"
                    />
                  <!-- </el-tooltip> -->
                  <div class="emailbtn" @click="emaildigo">{{ $t('mailVerification') }}</div>
                </div>
                <div class="dtitle" v-if="areaIndex === 1">{{ $t('conAddress') }}</div>
                <input
                    v-if="areaIndex === 1"
                    type="text"
                    v-model="smaddress"
                    class="dinpit"
                    :placeholder="$t('conAddressnotes')"
                />
                <div class="dtitle" v-if="areaIndex === 1">{{ $t('note') }}</div>
                <input
                  v-if="areaIndex === 1"
                  type="text"
                  v-model="notes"
                  class="dinpit"
                  :placeholder="$t('notes')"
                />
              <div class="dtitle" style="margin-top: 20px" v-if="areaIndex === 2"><span class="starSign">*</span>{{ $t('registrationCertificate') }}</div>
              <div class="upzzwarp" v-if="areaIndex === 2">
                <div class="uptitle" style="margin-right: 0">
                  {{ $t('businessLicnotes') }}
                </div>

                <div class="another-upload">
                  <div class="uplisences">{{ $t('registrationCertificateUP') }}</div>
                  <input
                    class="another-upload-input"
                    name="upfile"
                    @change="handleFileChange7"
                    id="upfile7"
                    type="file"
                    accept="image/*"
                    ref="inputer7"
                  />
                </div>
              </div>
              <div v-if="areaIndex === 2">
                <div class="zzimgwarp" v-for="(item, index) in BRlicenseUrl" :key="index">
                  <img
                    style="margin-left: 5px"
                    src="../assets/byteicon/zzimg.png"
                    alt=""
                  />
                  <div>
                    {{ $t('registrationCertificate') }}.{{BRlicenseFormat}}
                  </div>
                  <div class="zzdel" @click="delBRlicense(index)">{{ $t('delete') }}</div>
                </div>
                <el-progress v-if="upFileList7.name !== '' && upFileList7.percentage !== undefined" :status="upFileList7.status" :percentage="upFileList7.percentage"></el-progress>
              </div>
                <div class="dtitle" v-if="areaIndex === 2"><span class="starSign">*</span>{{ $t('personCon') }}</div>
                <input
                  v-if="areaIndex === 2"
                  type="text"
                  class="dinpit"
                  :placeholder="$t('personConotes')"
                  v-model="smcontest"
                />
                <div class="dtitle" v-if="areaIndex === 2"><span class="starSign">*</span>{{ $t('emailAddress') }}</div>
                <div style="display: flex; align-items: center" v-if="areaIndex === 2">
                  <input
                    v-model="emailval"
                    type="text"
                    class="dinpit2"
                    :placeholder="$t('emailAddressnotes')"
                  />
                  <!-- </el-tooltip> -->
                  <div class="emailbtn" @click="emaildigo">{{ $t('mailVerification') }}</div>
                </div>
                <div class="dtitle" v-if="areaIndex === 2">{{ $t('USDT') }}</div>
                <input
                  v-if="areaIndex === 2"
                  type="text"
                  v-model="packet"
                  class="dinpit"
                  :placeholder="$t('USDTnotes')"
                />
                <div class="checksmbtnWarp">
                    <div class="checkSmQx" @click="qxsmrz">{{ $t('cancel') }}</div>
                    <div class="checkSmQr" @click="submitSave">{{ $t('confirms') }}</div>
                </div>
            </el-dialog>
        </div>
        <div class="smdialog3">
            <el-dialog
                :title="$t('applySubject')"
                :visible.sync="openZT"
                :center="true"
                :before-close="closeZTdialog"
            >
                <div class="smmidwarp" style="">
                    <img
                        class="smimg2"
                        src="../assets/byteicon/shiming2.png"
                        alt=""
                    />
                    <div class="smrzfontwarp">
                        <div class="warptitme">{{ $t('notSubject') }}</div>
                        <div class="warptitme2">
                          {{ $t('notSubject') + '。' + $t('notSubNote') }}
<!--                            您尚无已认证的数据主体。申请数据主体并认证通过，-->
                            <span style="font-weight: bold">
                              {{ $t('obtained') }}
<!--                                每100GiB最高可获得500元的存储收益-->
                            </span>
                        </div>
                    </div>
                </div>
                <div class="Smidbottom">
                    <el-checkbox
                        fill="#ef190f"
                        v-model="checked2"
                    ></el-checkbox>
                    <div class="nosee">{{ $t('noMore') }}</div>
                    <div class="gosm2">{{ $t('subjectTips') }}</div>
                    <div class="gosm3" @click="rzclick2">{{ $t('GoApply') }}</div>
                </div>
            </el-dialog>
        </div>
        <div class="smdialog5">
            <el-dialog
                :title="$t('dataAPP')"
                :visible.sync="Sqztxm"
                :before-close="closeXY"
                :center="true"
            >
                <div style="display: flex;width: 100%;justify-content: space-around;"></div>
                <div class="picktitle">
                  {{ $t('dataTips') }}
<!--                  恭喜您成为冰塔认证数据伙伴，可以开始引入数据主体的愉快旅程了！-->
<!--                  推广期内，每名数据伙伴申请的数据主体个数上限为150家，您可通过提交如下材料来完成每个（企业/机构）数据主体的申请。在资质满足的情况下，平台也支持数据伙伴复用自身的资质参与一家数据主体的申请和存储体验。-->
                  <p>
                    <span>
                      {{ $t('hint100') }}
                    </span>
                    <span style="color: #EF190F;">{{ '*' }}</span>
                    <span>
                     {{ $t('hint101') }}
                    </span>
                  </p>
                </div>
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" size="medium" class="demo-ruleForm">
                <div class="Sm5Dnewtitle setnewModel">
                  <div class="setLeft">{{ $t('requiredInfo') }}</div>
                  <div @click="downloadModel" class="modelDownLoad">
                    <p>{{ $t('viewModel') }}</p>
                    <i class="el-icon-view"></i>
                  </div>
                  <i class="setLines"></i>
                </div>
                <el-form-item class="setRadio" :label="$t('regoinType')" prop="countindex">
                  <el-radio-group v-model="ruleForm.countindex">
                    <el-radio border v-for="(item, index) in radioOptions" :key="index" :label="item.value">{{ item.label }}</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item :label="$t('companyName')" prop="sqcnname">
                  <el-input :placeholder="$t('companyNamenotes')" v-model="ruleForm.sqcnname"></el-input>
                </el-form-item>
                <el-form-item class="setlabels" :label="$t('fullNametips')" prop="dataReferred">
                  <el-input :placeholder="$t('fullNamenotes')" v-model="ruleForm.dataReferred"></el-input>
                </el-form-item>
                <el-form-item :label="$t('companyWeb')" prop="Sqwzaddress">
                  <el-input :placeholder="$t('companyWebnotes')" v-model="ruleForm.Sqwzaddress"></el-input>
                </el-form-item>
                <el-form-item :label="$t('companyLicense')" prop="ZTZZfileUrl">
                  <div class="upzzwarp">
                    <div class="uptitle setLine">
                      {{ $t('companyLicensenotes') }}
                    </div>
                    <div class="file-upload">
                      <div class="upbtn">{{ $t('uploads') }}</div>
                      <input
                        class="file-upload-input"
                        @change="handleFileChange2"
                        id="upfile2"
                        type="file"
                        accept="image/*"
                        ref="inputer2"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      class="zzimgwarp"
                      v-if="ruleForm.ZTZZfileUrl !== ''"
                    >
                      <img
                        style="margin-left: 5px"
                        src="../assets/byteicon/zzimg.png"
                        alt=""
                      />
                      <div style="margin-left: 5px; cursor: pointer">
                        {{ $t('businessLic') }}.{{ruleForm.ZTZZfileFormat}}
                      </div>
                      <div class="zzdel" @click="delsqyyzz">{{ $t('delete') }}</div>
                    </div>
                    <el-progress v-if="upFileList2.name !== '' && upFileList2.percentage !== undefined && upFileList2.percentage !== 0" :status="upFileList2.status" :percentage="upFileList2.percentage"></el-progress>
                  </div>
                </el-form-item>
                <el-form-item :label="$t('contactPerson')" prop="sqxmname">
                  <el-input :placeholder="$t('contactPersonnotes')" v-model="ruleForm.sqxmname"></el-input>
                </el-form-item>
                <el-form-item :label="$t('contactPhone')" prop="tlephone" v-if="ruleForm.countindex === 1">
                  <div class="setPhone">
                    <el-input v-model="ruleForm.tlephone" :placeholder="$t('contactPhonenotes')"></el-input>
                    <div class="emailbtn" style="width: 86px;" @click="bindteldisgo">{{ $t('phoneVerification') }}</div>
                  </div>
                </el-form-item>
                <el-form-item :label="$t('contactPhone')" prop="otherPhone" v-if="ruleForm.countindex !== 1">
                  <div v-if="ruleForm.countindex !== 1" class="setPhone">
                    <el-input v-model="ruleForm.otherPhone" :placeholder="$t('contactPhonenotes')"></el-input>
                  </div>
                </el-form-item>
                <el-form-item :label="$t('contactMail')" prop="sqyxemail">
                  <el-input :placeholder="$t('contactMailnotes')" v-model="ruleForm.sqyxemail"></el-input>
                </el-form-item>
                <el-form-item :label="$t('mediaUrl')" prop="companySocialMediaUrl">
                  <div class="setUrl">
                    <el-input :placeholder="$t('mediaUrlnotes')" v-model="ruleForm.Sm5Url"></el-input>
                    <div @click="Sm5Urladdbtn" class="Sm5addbtn" style="width: 86px">{{ $t('add') }}</div>
                  </div>
                  <div
                    v-for="(item, index) in ruleForm.companySocialMediaUrl"
                    :key="index"
                    class="zzimgwarp">
                    <img
                      style="margin-left: 5px"
                      src="../assets/byteicon/zzimg.png"
                      alt=""
                    />
                    <div class="setUrl1">
                      {{ item }}
                    </div>
                    <div class="zzdel2" @click="zzdel2(index)">{{ $t('delete') }}</div>
                  </div>
                </el-form-item>
                <el-form-item class="downModel" :label="$t('authorization')" prop="ZTSQfileUrl" v-if="ruleForm.countindex === 1">
                  <div
                    class="upzzwarp"
                  >
                    <div class="uptitle setLine">
                      {{ $t('authorizationnotes') }}
                    </div>

                    <div class="file-upload">
                      <div class="upbtn">{{ $t('uploadAuthorization') }}</div>
                      <input
                        class="file-upload-input"
                        @change="handleFileChange3"
                        id="upfile3"
                        type="file"
                        accept="image/*"
                        ref="inputer3"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      class="zzimgwarp"
                      v-if="ruleForm.ZTSQfileUrl !== ''"
                    >
                      <img
                        style="margin-left: 5px"
                        src="../assets/byteicon/zzimg.png"
                        alt=""
                      />
                      <div style="margin-left: 5px; cursor: pointer">
                        {{ $t('authorizate') }}.{{ruleForm.ZTSQfileFormat}}
                      </div>
                      <div class="zzdel" @click="delZTSQ">{{ $t('delete') }}</div>
                    </div>
                    <el-progress v-if="upFileList3.name !== '' && upFileList3.percentage !== undefined && upFileList3.percentage !== 0" :status="upFileList3.status" :percentage="upFileList3.percentage"></el-progress>
                  </div>
                  <div @click="xzmb" class="setDowns">
                    <div style="margin-left: auto; cursor: pointer" >
                      {{ $t('downloadAuthorization') }}
                    </div>
                    <img
                      style="
                            margin-left: 5px;
                            width: 24px;
                            height: 24px;
                            cursor: pointer;
                        "
                      src="../assets/byteicon/down.png"
                      alt=""
                    />
                  </div>
                </el-form-item>
                <el-form-item :label="$t('mainDescription')" prop="Sqzyms">
                  <el-input type="textarea" :rows="5" minlength="20" maxlength="200" :placeholder="$t('mainDescriptionnotes')" v-model="ruleForm.Sqzyms"></el-input>
                </el-form-item>
                <el-form-item :label="$t('distribution')" prop="Sqgx">
                  <el-input type="textarea" :rows="5" minlength="20" maxlength="200" :placeholder="$t('distributionnotes')" v-model="ruleForm.Sqgx"></el-input>
                </el-form-item>
                <el-form-item :label="$t('contentSourse')" prop="Sqccxz">
                  <el-input type="textarea" :rows="5" minlength="20" maxlength="200" :placeholder="$t('contentSoursenotes')" v-model="ruleForm.Sqccxz"></el-input>
                </el-form-item>
                <el-form-item :label="$t('sample')" prop="ZTYBfileUrl">
                  <div
                    class="setcontent"
                  >
                    <div class="setYB">
<!--                      为快速通过内容验证，上传样本数据的最低要求是（八项中至少选择其中一项，大小为该类型文件的合计）：（1）图片为5MB；（2）音频为5MB；（3）视频为10MB; (4) 镜像文件为20MB；（5）压缩文件为20MB；（6）文本文件为500KB；（7）PDF文件为10MB；（8）其他。-->
                      {{ $t('samplenotes') }}
                    </div>

                    <div class="file-upload setMarign">
                      <div class="upbtn">{{ $t('uploads') }}</div>
                      <input
                        class="file-upload-input"
                        @change="handleFileChange6"
                        id="upfile6"
                        type="file"
                        accept="*"
                        ref="inputer6"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      class="zzimgwarp"
                      v-if="ruleForm.ZTYBfileUrl !== ''"
                    >
                      <img
                        style="margin-left: 5px"
                        src="../assets/byteicon/zzimg.png"
                        alt=""
                      />
                      <div style="margin-left: 5px; cursor: pointer">
                        {{ $t('sample') }}.{{ruleForm.ZTYBfileFormat}}
                      </div>
                      <div class="zzdel" @click="delyb">{{ $t('delete') }}</div>
                    </div>
                    <el-progress v-if=" upFileList6.name !== '' && upFileList6.percentage !== undefined && upFileList6.percentage !== 0" :status="upFileList6.status" :percentage="upFileList6.percentage"></el-progress>
                  </div>
                </el-form-item>
                <el-form-item class="setRadio" :label="$t('applyStorage')" prop="sizeindex">
                  <el-radio-group v-model="ruleForm.sizeindex" class="setEachOption">
                    <el-radio border v-for="(item, index) in sizeOptions" :key="index" :label="item.value">{{ item.label }}</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item class="setRadio" :label="$t('otherDocument')" prop="otherFile">
                  <el-radio-group v-model="ruleForm.otherFile" class="setEachOption">
                    <el-radio border v-for="(item, index) in otherOptions" :key="index" :label="item.value">{{ item.label }}</el-radio>
                  </el-radio-group>
                </el-form-item>
                <div style="margin-top: 50px;"></div>
                <div class="Sm5Dnewtitle setnewModel" v-if="ruleForm.countindex === 1">{{ $t('optionalItems') }}<i class="setLines"></i></div>
                <el-form-item :label="$t('charter')" prop="ZTBylawsfileUrl" v-if="ruleForm.countindex === 1">
                  <div
                    class="upzzwarp"
                  >
                    <div class="uptitle setHeights">
                     {{ $t('uploadCharter') }}
                    </div>
                    <div class="file-upload">
                      <div class="upbtn">{{ $t('uploads') }}</div>
                      <input
                        class="file-upload-input"
                        @change="handleFileChange8"
                        id="upfile8"
                        type="file"
                        accept="image/*"
                        ref="inputer8"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      class="zzimgwarp"
                      v-if="ruleForm.ZTBylawsfileUrl !== ''"
                    >
                      <img
                        style="margin-left: 5px"
                        src="../assets/byteicon/zzimg.png"
                        alt=""
                      />
                      <div style="margin-left: 5px; cursor: pointer">
                        {{ $t('Chart') }}.{{ruleForm.ZTBylawsfileFormat}}
                      </div>
                      <div class="zzdel" @click="delbylaws">{{ $t('delete') }}</div>
                    </div>
                    <el-progress v-if=" upFileList8.name !== '' && upFileList8.percentage !== undefined" :status="upFileList8.status" :percentage="upFileList8.percentage"></el-progress>
                  </div>
                </el-form-item>
                <el-form-item :label="$t('shareHolder')" prop="ZTGDfileUrl" v-if="ruleForm.countindex === 1">
                  <div
                    class="upzzwarp"
                  >
                    <div class="uptitle setHeights">
                      {{ $t('screenshot') }}
                    </div>
                    <div class="file-upload">
                      <div class="upbtn">{{ $t('uploads') }}</div>
                      <input
                        class="file-upload-input"
                        @change="handleFileChange5"
                        id="upfile5"
                        type="file"
                        accept="image/*"
                        ref="inputer5"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      class="zzimgwarp"
                      v-if="ruleForm.ZTGDfileUrl.length !== 0"
                      v-for="(item, index) in ruleForm.ZTGDfileUrl" :key="index"
                    >
                      <img
                        style="margin-left: 5px"
                        src="../assets/byteicon/zzimg.png"
                        alt=""
                      />
                      <div style="margin-left: 5px; cursor: pointer">
                        {{ $t('shareHolder') }}.{{ruleForm.ZTGDfileFormat}}
                      </div>
                      <div class="zzdel" @click="delZTGDfileUrl(index)">{{ $t('delete') }}</div>
                    </div>
                    <el-progress v-if=" upFileList5.name !== '' && upFileList5.percentage !== undefined" :status="upFileList5.status" :percentage="upFileList5.percentage"></el-progress>
                  </div>
                </el-form-item>
                <el-form-item :label="$t('boardMembers')" prop="ZTRBDfileUrl" v-if="ruleForm.countindex === 1">
                  <div
                    class="upzzwarp"
                  >
                    <div class="uptitle setHeights">
                      {{ $t('boardMembersnotes') }}
                    </div>
                    <div class="file-upload">
                      <div class="upbtn">{{ $t('uploads') }}</div>
                      <input
                        class="file-upload-input"
                        @change="handleFileChange9"
                        id="upfile9"
                        type="file"
                        accept="image/*"
                        ref="inputer9"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      class="zzimgwarp"
                      v-if="ruleForm.ZTRBDfileUrl !== ''"
                    >
                      <img
                        style="margin-left: 5px"
                        src="../assets/byteicon/zzimg.png"
                        alt=""
                      />
                      <div style="margin-left: 5px; cursor: pointer">
                        {{ $t('boardMembers') }}.{{ruleForm.ZTRBDfileFormat}}
                      </div>
                      <div class="zzdel" @click="delztrbd">{{ $t('delete') }}</div>
                    </div>
                    <el-progress v-if="upFileList9.name !== '' && upFileList9.percentage !== undefined" :status="upFileList9.status" :percentage="upFileList9.percentage"></el-progress>
                  </div>
                </el-form-item>
                <el-form-item class="setLabel" :label="$t('naturalShareholder')" prop="ZTSFfileUrl" v-if="ruleForm.countindex === 1">
                  <div
                    class="upzzwarp"
                  >
                    <div class="uptitle setLine">
<!--                      请上传该主体享有25%以上股权的自然股东，身份证明或护照的拷贝，支持.jpg .jpeg .bmp .gif .png格式图片，大小不超过10M-->
                      {{ $t('naturalShareholdernotes') }}
                    </div>
                    <div class="file-upload">
                      <div class="upbtn">{{ $t('uploads') }}</div>
                      <input
                        class="file-upload-input"
                        @change="handleFileChange4"
                        id="upfile4"
                        type="file"
                        accept="image/*"
                        ref="inputer4"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      class="zzimgwarp"
                      v-if="ruleForm.ZTSFfileUrl !== ''"
                    >
                      <img
                        style="margin-left: 5px"
                        src="../assets/byteicon/zzimg.png"
                        alt=""
                      />
                      <div style="margin-left: 5px; cursor: pointer">
                        {{ $t('Identity') }}.{{ruleForm.ZTSFfileFormat}}
                      </div>
                      <div class="zzdel" @click="delZTSF">{{ $t('delete') }}</div>
                    </div>
                    <el-progress v-if="upFileList4.name !== '' && upFileList4.percentage !== undefined && upFileList4.percentage !== 0" :status="upFileList4.status" :percentage="upFileList4.percentage"></el-progress>
                  </div>
                </el-form-item>
                <el-form-item :label="$t('financialYear')" prop="ZTFRfileUrl" v-if="ruleForm.countindex === 1">
                  <div
                    class="upzzwarp"
                  >
                    <div class="uptitle setHeights">
                      {{ $t('financialYearnotes') }}
                    </div>
                    <div class="file-upload">
                      <div class="upbtn">{{ $t('uploads') }}</div>
                      <input
                        class="file-upload-input"
                        @change="handleFileChange10"
                        id="upfile10"
                        type="file"
                        accept="image/*"
                        ref="inputer10"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      class="zzimgwarp"
                      v-if="ruleForm.ZTFRfileUrl !== ''"
                    >
                      <img
                        style="margin-left: 5px"
                        src="../assets/byteicon/zzimg.png"
                        alt=""
                      />
                      <div style="margin-left: 5px; cursor: pointer">
                        {{ $t('financial') }}.{{ruleForm.ZTFRfileFormat}}
                      </div>
                      <div class="zzdel" @click="delztfr">{{ $t('delete') }}</div>
                    </div>
                    <el-progress v-if="upFileList10.name !== '' && upFileList10.percentage !== undefined" :status="upFileList10.status" :percentage="upFileList10.percentage"></el-progress>
                  </div>
                </el-form-item>
                <el-form-item :label="$t('officeAddress')" prop="ZTFRfileUrl" v-if="ruleForm.countindex === 1">
                  <div
                    class="upzzwarp"
                  >
                    <div class="uptitle setHeights">
                      {{ $t('officeAddressnotes') }}
                    </div>
                    <div class="file-upload">
                      <div class="upbtn">{{ $t('uploads') }}</div>
                      <input
                        class="file-upload-input"
                        @change="handleFileChange11"
                        id="upfile11"
                        type="file"
                        accept="image/*"
                        ref="inputer11"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      class="zzimgwarp"
                      v-if="ruleForm.ZTPAfileUrl !== ''"
                    >
                      <img
                        style="margin-left: 5px"
                        src="../assets/byteicon/zzimg.png"
                        alt=""
                      />
                      <div style="margin-left: 5px; cursor: pointer">
                        {{ $t('addressCertificate') }}.{{ruleForm.ZTPAfileFormat}}
                      </div>
                      <div class="zzdel" @click="delztpa">{{ $t('delete') }}</div>
                    </div>
                    <el-progress v-if="upFileList11.name !== '' && upFileList11.percentage !== undefined" :status="upFileList11.status" :percentage="upFileList11.percentage"></el-progress>
                  </div>
                </el-form-item>
                <el-form-item prop="Sqcheckbox">
                  <div style="display: flex;">
                    <el-checkbox
                      fill="#ef190f"
                      v-model="ruleForm.Sqcheckbox"
                      style="z-index: 1;"
                    ></el-checkbox>
                    <div class="Sqydjs">{{ $t('aleady')}}<span class="Sqxy" @click="bindbytexy">{{ $t('btxy') }}</span></div>
                  </div>
                </el-form-item>
              </el-form>
              <div class="sqfgx"></div>
              <div class="sqbtnwarp setskicy">
                <div class="sqbtn1" @click="SQcanle">{{ $t('cancel') }}</div>
                <div class="sqbtn3" @click="SQsave">{{ $t('Save') }}</div>
                <button
                  class="sqbtn2"
                  @click="save('ruleForm')"
                >
                  {{ $t('confirms') }}
                </button>
              </div>
            </el-dialog>
        </div>

        <div class="smdialog5 setbody">
            <el-dialog
                :title="kk"
                :visible.sync="lookmainbody"
                :center="true"
            >
              <div class="Sm5Dtitle">{{ $t('requiredInfo') }}</div>
              <div class="Sm5xtitle" style="color: #a1a1a1"><span class="starSign">*</span>{{ $t('regoinType') }}</div>
              <div class="Sm5sizewarp">
                <div
                  v-if="countindex === 1"
                  style="margin-left: 0px"
                  :class="countindex === 1 ? 'Sm5sizeitem' : 'Sm5sizeitem'"
                  @click="countindex = 1"
                >
                  {{ $t('mainland') }}
                </div>
                <div
                  v-if="countindex === 2"
                  :class="countindex === 2 ? 'Sm5sizeitem' : 'Sm5sizeitem'"
                  @click="countindex = 2"
                >
                  {{ $t('macauArea') }}
                </div>
                <div
                  v-if="countindex === 3"
                  :class="countindex === 3 ? 'Sm5sizeitem' : 'Sm5sizeitem'"
                  @click="countindex = 3"
                >
                  {{ $t('overseas') }}
                </div>
              </div>
              <div class="dtitle setMargin" style="color: #a1a1a1">
                <span class="starSign">*</span>{{ $t('companyName') }}
              </div>
              <div class="dinpit setMargin" style="
                        background-color: #f9f9f9;
                        align-items: center;
                        display: flex;
                    ">{{ sqcnname }}</div>
              <div class="dtitle setMargin" style="color: #a1a1a1">
                <span class="starSign">*</span>{{ $t('fullNametips') }}
              </div>
              <div type="text" class="dinpit setMargin" style="
                        background-color: #f9f9f9;
                        align-items: center;
                        display: flex;
                    ">{{ dataReferred }}</div>
              <div class="dtitle setMargin" style="color: #a1a1a1">
                <span class="starSign">*</span>{{ $t('companyWeb') }}
              </div>
              <div type="text" class="dinpit setMargin" style="
                        background-color: #f9f9f9;
                        align-items: center;
                        display: flex;
                    ">{{ Sqwzaddress }}</div>
              <div class="dtitle setMargin" style="margin-top: 20px;color: #a1a1a1">
                <span class="starSign">*</span>{{ $t('companyLicense') }}
              </div>
              <div class="zzimgwarp setMargin" v-if="ZTZZfileUrl !== ''">
                <img style="margin-left: 5px" src="../assets/byteicon/zzimg.png" alt=""/>
                <div style="margin-left: 5px; cursor: pointer">{{ $t('businessLic') }}.jpg</div>
              </div>
              <div class="dtitle setMargin" style="color: #a1a1a1">
                <span class="starSign">*</span>{{ $t('contactPerson') }}
              </div>
              <div class="dinpit setMargin" style="
                        background-color: #f9f9f9;
                        align-items: center;
                        display: flex;
                    ">{{ sqxmname }}</div>
              <div class="dtitle setMargin" style="color: #a1a1a1">
                <span class="starSign">*</span>{{ $t('contactPhone') }}
              </div>
              <div style="
                        display: flex;
                        align-items: center;
                    ">
                <div style="
                            background-color: #f9f9f9;
                            align-items: center;
                            display: flex;
                        " type="text" class="dinpit setMargin">{{ tlephone || otherPhone }}</div>
              </div>
              <div class="dtitle setMargin" style="color: #a1a1a1">
                <span class="starSign">*</span>{{ $t('contactMail') }}
              </div>
              <div style="
                        display: flex;
                        align-items: center;
                    ">
                <div style="
                            background-color: #f9f9f9;
                            align-items: center;
                            display: flex;
                        " type="text" class="dinpit setMargin">{{ sqyxemail }}</div>
              </div>
              <div class="dtitle setMargin" style="color: #a1a1a1">
                <span class="starSign">*</span>{{ $t('mediaUrl') }}
              </div>
              <div class="zzimgwarp setMargin" v-if="companySocialMediaUrl !== ''" v-for="item in companySocialMediaUrl" :key="item">
                <img
                  style="margin-left: 5px"
                  src="../assets/byteicon/zzimg.png"
                  alt=""
                />
                <div style="margin-left: 5px; cursor: pointer;width:450px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
                  {{ item }}
                </div>
              </div>
              <div v-if="countindex === 1">
                <div
                  class="dtitle setMargin"
                  style="
                        display: flex;
                        align-items: center;
                        color: #a1a1a1;
                    "
                >
                  <div><span class="starSign">*</span>{{ $t('authorization') }}</div>
                </div>
                <div
                  class="zzimgwarp setMargin"
                  v-if="ZTSQfileUrl !== ''"
                >
                  <img
                    style="margin-left: 5px"
                    src="../assets/byteicon/zzimg.png"
                    alt=""
                  />
                  <div style="margin-left: 5px; cursor: pointer">
                    {{ $t('authorizate') }}.jpeg
                  </div>
                </div>
              </div>
              <div class="dtitle setMargin" style="color: #a1a1a1">
                <span class="starSign">*</span>{{ $t('mainDescription') }}
              </div>
              <div class="textarea2" name="" id="">
                {{ Sqzyms }}
              </div>

              <div class="dtitle setMargin" style="color: #a1a1a1">
                <span class="starSign">*</span>{{ $t('distribution') }}
              </div>
              <div class="textarea2">
                {{ Sqgx }}
              </div>

              <div class="dtitle setMargin" style="color: #a1a1a1">
                <span class="starSign">*</span>{{ $t('contentSourse') }}
              </div>
              <div class="textarea2">
                {{ Sqccxz }}
              </div>
              <div class="dtitle setMargin" style="margin-top: 20px;color: #a1a1a1">
                <span class="starSign">*</span>{{ $t('sample') }}
              </div>
              <div
                class="zzimgwarp setMargin"
                v-if="ZTYBfileUrl !== ''"
              >
                <img
                  style="margin-left: 5px"
                  src="../assets/byteicon/zzimg.png"
                  alt=""
                />
                <div style="margin-left: 5px; cursor: pointer">
                  {{ $t('sample') }}.jpg
                </div>
              </div>
              <div class="Sm5xtitle" style="color: #a1a1a1">
                <span class="starSign">*</span>{{ $t('applyStorage') }}
              </div>
              <div class="Sm5sizewarp">
                <div
                  v-if="sizeindex === 1"
                  style="margin-left: 0px"
                  :class="sizeindex === 1 ? 'Sm5sizeitem' : 'Sm5sizeitem'">
                  100GiB
                </div>
                <div
                  v-if="sizeindex === 2"
                  :class="sizeindex === 2 ? 'Sm5sizeitem' : 'Sm5sizeitem'"
                >
                  500GiB
                </div>
                <div
                  v-if="sizeindex === 3"
                  :class="sizeindex === 3 ? 'Sm5sizeitem' : 'Sm5sizeitem'"
                >
                  1.5TiB
                </div>
                <div
                  v-if="sizeindex === 4"
                  :class="sizeindex === 4 ? 'Sm5sizeitem' : 'Sm5sizeitem'"
                >
                  3TiB
                </div>
                <div
                  v-if="sizeindex === 5"
                  :class="sizeindex === 5 ? 'Sm5sizeitem' : 'Sm5sizeitem'"
                >
                  5TiB
                </div>
                <div
                  v-if="sizeindex === 6"
                  :class="sizeindex === 6 ? 'Sm5sizeitem' : 'Sm5sizeitem'"
                >
                  {{ $t('moreSize') }}
                </div>
              </div>
              <div class="Sm5xtitle" style="color: #a1a1a1">
                <span class="starSign">*</span>{{ $t('otherDocument') }}
              </div>
              <div class="Sm5sizewarp">
                <div
                  v-if="otherFile === 2"
                  style="margin-left: 0px"
                  :class="otherFile === 2 ? 'Sm5sizeitem' : 'Sm5sizeitem'">
                  {{ $t('yes') }}
                </div>
                <div
                  style="margin-left: 0px"
                  v-if="otherFile === 1"
                  :class="otherFile === 1 ? 'Sm5sizeitem' : 'Sm5sizeitem'"
                >
                  {{ $t('no') }}
                </div>
              </div>
              <div v-if="countindex === 1">
                <div class="Sm5Dtitle">{{ $t('optionalItems') }}</div>
                <div>
                  <div class="dtitle setMargin" style="margin-top: 20px;color: #a1a1a1">
                    {{ $t('charter') }}
                  </div>
                  <div
                    class="zzimgwarp setMargin"
                    v-if="ZTBylawsfileUrl"
                  >
                    <img
                      style="margin-left: 5px"
                      src="../assets/byteicon/zzimg.png"
                      alt=""
                    />
                    <div style="margin-left: 5px; cursor: pointer">
                      {{ $t('Chart') }}.jpg
                    </div>
                  </div>
                  <div
                    class="zzimgwarp setMargin"
                    v-else
                  >
                    <div style="margin-left: 5px; cursor: pointer">
                      {{ $t('null') }}
                    </div>
                  </div>
                </div>
                <div>
                  <div class="dtitle setMargin" style="margin-top: 20px;color: #a1a1a1">
                    {{ $t('shareHolder') }}
                  </div>
                  <div
                    class="zzimgwarp setMargin"
                    v-if="ZTGDfileUrl && ZTGDfileUrl.length > 0"
                  >
                    <img
                      style="margin-left: 5px"
                      src="../assets/byteicon/zzimg.png"
                      alt=""
                    />
                    <div style="margin-left: 5px; cursor: pointer">
                      {{ $t('shareHolder') }}.jpg
                    </div>
                  </div>
                  <div
                    class="zzimgwarp setMargin"
                    v-else
                  >
                    <div style="margin-left: 5px; cursor: pointer">
                      {{ $t('null') }}
                    </div>
                  </div>
                </div>
                <div>
                  <div class="dtitle setMargin" style="margin-top: 20px;color: #a1a1a1">
                    {{ $t('boardMembers') }}
                  </div>
                  <div
                    class="zzimgwarp setMargin"
                    v-if="ZTRBDfileUrl"
                  >
                    <img
                      style="margin-left: 5px"
                      src="../assets/byteicon/zzimg.png"
                      alt=""
                    />
                    <div style="margin-left: 5px; cursor: pointer">
                      {{ $t('boardMembers') }}.jpg
                    </div>
                  </div>
                  <div
                    class="zzimgwarp setMargin"
                    v-else
                  >
                    <div style="margin-left: 5px; cursor: pointer">
                      {{ $t('null') }}
                    </div>
                  </div>
                </div>
                <div>
                  <div class="dtitle setMargin" style="margin-top: 20px;color: #a1a1a1">
                    {{ $t('naturalShareholder') }}
                  </div>
                  <div
                    class="zzimgwarp setMargin"
                    v-if="ZTSFfileUrl"
                  >
                    <img
                      style="margin-left: 5px"
                      src="../assets/byteicon/zzimg.png"
                      alt=""
                    />
                    <div style="margin-left: 5px; cursor: pointer">
                      {{ $t('Identity') }}.jpg
                    </div>
                  </div>
                  <div
                    class="zzimgwarp setMargin"
                    v-else
                  >
                    <div style="margin-left: 5px; cursor: pointer">
                      {{ $t('null') }}
                    </div>
                  </div>
                </div>
                <div>
                  <div class="dtitle setMargin" style="margin-top: 20px;color: #a1a1a1">
                    {{ $t('financialYear') }}
                  </div>
                  <div
                    class="zzimgwarp setMargin"
                    v-if="ZTFRfileUrl"
                  >
                    <img
                      style="margin-left: 5px"
                      src="../assets/byteicon/zzimg.png"
                      alt=""
                    />
                    <div style="margin-left: 5px; cursor: pointer">
                      {{ $t('financial') }}.jpg
                    </div>
                  </div>
                  <div
                    class="zzimgwarp setMargin"
                    v-else
                  >
                    <div style="margin-left: 5px; cursor: pointer">
                      {{ $t('null') }}
                    </div>
                  </div>
                </div>
                <div>
                  <div class="dtitle setMargin" style="margin-top: 20px;color: #a1a1a1">
                    {{ $t('officeAddress') }}
                  </div>
                  <div
                    class="zzimgwarp setMargin"
                    v-if="ZTPAfileUrl"
                  >
                    <img
                      style="margin-left: 5px"
                      src="../assets/byteicon/zzimg.png"
                      alt=""
                    />
                    <div style="margin-left: 5px; cursor: pointer">
                      {{ $t('addressCertificate') }}.jpg
                    </div>
                  </div>
                  <div
                    class="zzimgwarp setMargin"
                    v-else
                  >
                    <div style="margin-left: 5px; cursor: pointer">
                      {{ $t('null') }}
                    </div>
                  </div>
                </div>
              </div>
                <div class="Sm5Dtitle">{{ $t('verificationResult') }}</div>

                <div class="dtitle setMargin" style="color: #a1a1a1">
                  {{ $t('verificationResult') }}
                </div>
                <div
                    v-if="auditStatus === 1"
                    class="textarea2 setMargin"
                >
                    {{ $t('reviewing') }}
                </div>
                <div
                    v-if="auditStatus === 2"
                    class="textarea2 setMargin"
                >
                  {{ $t('pass') }}
                </div>
                <div
                    v-if="auditStatus === 3"
                    class="textarea2 setMargin"
                >
                  {{ $t('return') }}
                </div>
                <div
                    v-if="auditStatus !== 1"
                    class="dtitle setMargin"
                    style="color: #a1a1a1"
                >
                    {{ $t('feedBack') }}
                </div>
                <div
                    class="textarea2 setMargin"
                    v-if="auditStatus !== 1"
                >
                    {{ remarks }}
                </div>
                <div class="sqfgx"></div>
                <div class="sqbtnwarp2">
                    <div class="sqbtn1" @click="SQcanle2">{{ $t('cancel') }}</div>
                    <div
                        class="sqbtn2"
                        v-if="auditStatus === 3 && types === 1"
                        @click="replayclick"
                    >
                        {{ $t('Reapply') }}
                    </div>
                </div>
            </el-dialog>
        </div>
        <div class="smdialog5">
          <nodeApplicate v-if="nodeApplicate"></nodeApplicate>
        </div>
        <bytexy :showbytexy='showbytexy' @closexy='closexy'></bytexy>
    </div>
</template>
<script>
import { bankCardAttribution } from './bankNoPatterns.js'
import bytexy from '../components/bytexy'
import apis from '../common/apis.js'
import login from '../pages/login'
import { EventBus } from '../../event-bus.js'
import { debounce } from '../common/utils.js'
import nodeApplicate from '../components/nodeApplicate.vue'
export default {
  inject: ['showHead', 'reload'],
  components: {
    login,
    bytexy,
    nodeApplicate
  },
  watch: {
    Sqztxm (newVal, oldValue) {
      if (newVal === false) {
        this.autoSave()
      }
      if (newVal === true) {
        this.goSqztxm()
      }
    },
    // 此步骤是为了更清楚的格式化银行卡号，每4位一个空格
    'preStoreUtils.cardNumber' (val) {
      if (val === '') {
        this.preStoreUtils.openingBank = ''
      }
      this.$nextTick(() => {
        this.preStoreUtils.cardNumber = val
          .replace(/\D/g, '')
          .replace(/....(?!$)/g, '$& ')
        // console.log(this.preStoreUtils.cardNumber, 'jjjj')
      })
    },
    ZZfileUrl (newVal, oldVal) {
      if (newVal === '') {
        this.upFileList1.name = ''
      }
    },
    'ruleForm.ZTZZfileUrl' (val) {
      // console.log('aaaa', val)
      if (val === '') {
        this.upFileList2.name = ''
        // this.$refs['ruleForm'].validateField(['ZTZZfileUrl'])
      } else {
        // this.$refs['ruleForm'].clearValidate(['ZTZZfileUrl'])
      }
    },
    ZTZZfileUrl (newVal, oldVal) {
      if (newVal === '') {
        this.upFileList2.name = ''
      }
    },
    'ruleForm.ZTSQfileUrl' (val) {
      if (val === '') {
        this.upFileList3.name = ''
        // this.$refs['ruleForm'].validateField(['ZTSQfileUrl'])
      } else {
        // this.$refs['ruleForm'].clearValidate(['ZTSQfileUrl'])
      }
    },
    ZTSQfileUrl (newVal, oldVal) {
      if (newVal === '') {
        this.upFileList3.name = ''
      }
    },
    'ruleForm.ZTSFfileUrl' (val) {
      if (val === '') {
        this.upFileList4.name = ''
      }
    },
    ZTSFfileUrl (newVal, oldVal) {
      if (newVal === '') {
        this.upFileList4.name = ''
      }
    },
    'ruleForm.ZTGDfileUrl' (val) {
      if (val.length === 0) {
        this.upFileList5.name = ''
      }
      // console.log('股东手持身份证明:', newVal)
    },
    ZTGDfileUrl (newVal, oldVal) {
      if (newVal.length === 0) {
        this.upFileList5.name = ''
      }
      // console.log('股东手持身份证明:', newVal)
    },
    'ruleForm.ZTYBfileUrl' (val) {
      if (val === '') {
        this.upFileList6.name = ''
        // this.$refs['ruleForm'].validateField(['ZTYBfileUrl'])
      } else {
        // this.$refs['ruleForm'].clearValidate(['ZTYBfileUrl'])
      }
    },
    ZTYBfileUrl (newVal, oldVal) {
      // console.log('样本', newVal)
      if (newVal === '') {
        this.upFileList6.name = ''
      }
    },
    'ruleForm.BRlicenseUrl' (val) {
      if (val === '') {
        this.upFileList7.name = ''
      }
    },
    BRlicenseUrl (newVal, oldVal) {
      if (newVal === '') {
        this.upFileList7.name = ''
      }
    },
    'ruleForm.ZTBylawsfileUrl' (val) {
      if (val === '') {
        this.upFileList8.name = ''
      }
    },
    ZTBylawsfileUrl (newVal, oldVal) {
      if (newVal === '') {
        this.upFileList8.name = ''
      }
    },
    'ruleForm.ZTRBDfileUrl' (val) {
      if (val === '') {
        this.upFileList9.name = ''
      }
    },
    ZTRBDfileUrl (newVal, oldVal) {
      if (newVal === '') {
        this.upFileList9.name = ''
      }
    },
    'ruleForm.ZTFRfileUrl' (val) {
      if (val === '') {
        this.upFileList10.name = ''
      }
    },
    ZTFRfileUrl (newVal, oldVal) {
      if (newVal === '') {
        this.upFileList10.name = ''
      }
    },
    'ruleForm.ZTPAfileUrl' (val) {
      if (val === '') {
        this.upFileList11.name = ''
      }
    },
    ZTPAfileUrl (newVal, oldVal) {
      if (newVal === '') {
        this.upFileList11.name = ''
      }
    },
    isshow (n, o) {
      if (n === true) {
        this.islogin = true
      }
    }
  },
  props: {
    isshow: {
      type: Boolean,
      default: null
    },
    thisReal: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      inputDataAdress: '',
      ruleForm: {
        countindex: 1, // 地域类型
        sqcnname: '', // 公司全称
        dataReferred: '', // 公司简称
        Sqwzaddress: '', // 公司官网
        sqxmname: '', // 联络人姓名
        tlephone: '', // 联络手机
        otherPhone: '',
        sqyxemail: '', // 联络邮箱
        Sm5Url: '', // 公司媒体
        companySocialMediaUrl: [], // 公司媒体
        ZTZZfileUrl: '', // 主体营业执照
        ZTZZfileFormat: '', // 主体营业执照格式
        ZTZZsaveUrl: '', // 主体营业执照保存
        ZTSQfileUrl: '', // 主体授权证明
        ZTSQfileFormat: '', // 主体授权证明格式
        ZTSQsaveUrl: '', // 主体授权证明保存
        Sqzyms: '', // 主营业务描述
        Sqccxz: '', // 数据来源
        Sqgx: '', // 对分布式存储的了解或贡献
        ZTYBfileUrl: '', // 主体样本数据
        ZTYBfileFormat: '', // 主体样本数据格式
        ZTYBsaveUrl: '', // 主体样本数据保存
        sizeindex: 1, // 存储容量
        otherFile: 2, // 补签内容
        ZTBylawsfileUrl: '', // 章程
        ZTBylawsfileFormat: '', // 章程格式
        ZTBylawssaveUrl: '', // 章程保存
        ZTGDfileUrl: [], // 股东名册
        ZTGDfileFormat: '', // 股东名册格式
        ZTGDsaveUrl: [], // 股东名册构成
        ZTRBDfileUrl: '', // 董事会成员名册
        ZTRBDfileFormat: '', // 董事会成员名册格式
        ZTRBDsaveUrl: '', // 董事会成员名册保存
        ZTSFfileUrl: '', // 25%以上股东证明
        ZTSFfileFormat: '', // 25%以上股东证明格式
        ZTSFsaveUrl: '', // 25%以上股东证明保存
        ZTFRfileUrl: '', // 财务报告
        ZTFRfileFormat: '', // 财务报告格式
        ZTFRsaveUrl: '', // 财务报告保存
        ZTPAfileUrl: '', // 办公地址
        ZTPAfileFormat: '', // 办公地址格式
        ZTPAsaveUrl: '', // 办公地址保存
        Sqcheckbox: null
      },
      radioOptions: [
        { value: 1, label: this.$t('mainland') },
        { value: 2, label: this.$t('macauArea') },
        { value: 3, label: this.$t('overseas') }
      ],
      sizeOptions: [
        { value: 1, label: '100GiB' },
        { value: 2, label: '500GiB' },
        { value: 3, label: '1.5TiB' },
        { value: 4, label: '3TiB' },
        { value: 5, label: '5TiB' },
        { value: 6, label: this.$t('moreSize') }
      ],
      otherOptions: [
        { value: 2, label: this.$t('yes') },
        { value: 1, label: this.$t('no') }
      ],
      rules: {
        countindex: [
          { required: true, message: this.$t('hint96'), trigger: 'change' }
        ],
        sqcnname: [
          { required: true, message: this.$t('hint54'), trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        dataReferred: [
          { required: true, message: this.$t('hint95'), trigger: 'blur' },
          { min: 3, max: 10, message: this.$t('hint94'), trigger: 'blur' },
          { pattern: /^[a-z\d\-]+$/, message: this.$t('hint93') }
        ],
        Sqwzaddress: [
          { required: true, message: this.$t('hint92'), trigger: 'blur' }
        ],
        sqxmname: [
          { required: true, message: this.$t('hint91'), trigger: 'blur' }
        ],
        tlephone: [
          { required: true, message: this.$t('hint90'), trigger: 'blur' },
          { pattern: /^[1][3,4,5,6,7,8,9][0-9]{9}$/, message: this.$t('hint98'), trigger: 'blur' }
        ],
        otherPhone: [
          { required: true, message: this.$t('hint90'), trigger: 'blur' },
          { pattern: /^[0-9]*$/, message: this.$t('hint98'), trigger: 'blur' }
        ],
        sqyxemail: [
          { required: true, message: this.$t('hint89'), trigger: 'blur' },
          { pattern: /^(([a-zA-Z0-9_-]+\.)|[a-zA-Z0-9_-])+@([a-zA-Z0-9]+\.)+(com|cn|net|org|tw)$/, message: this.$t('hint99') }
        ],
        companySocialMediaUrl: [
          { required: true, message: this.$t('hint88'), trigger: 'change' }
        ],
        ZTZZfileUrl: [
          { required: true, message: this.$t('hint87'), trigger: 'change' }
        ],
        ZTSQfileUrl: [
          { required: true, message: this.$t('hint86'), trigger: 'change' }
        ],
        Sqzyms: [
          { required: true, message: this.$t('hint85'), trigger: 'blur' },
          { min: 20, max: 200, message: this.$t('hint83'), trigger: 'blur' }
        ],
        Sqccxz: [
          { required: true, message: this.$t('hint84'), trigger: 'blur' },
          { min: 20, max: 200, message: this.$t('hint83'), trigger: 'blur' }
        ],
        Sqgx: [
          { required: true, message: this.$t('hint82'), trigger: 'blur' },
          { min: 20, max: 200, message: this.$t('hint83'), trigger: 'blur' }
        ],
        ZTYBfileUrl: [
          { required: true, message: this.$t('hint81'), trigger: 'change' }
        ],
        sizeindex: [
          { required: true, message: this.$t('hint80'), trigger: 'change' }
        ],
        otherFile: [
          { required: true, message: this.$t('hint79'), trigger: 'change' }
        ],
        Sqcheckbox: [
          { required: true, message: this.$t('hint78'), trigger: 'change' }
        ]
      },
      radio: sessionStorage.getItem('lang') || 'zh-CN',
      langType: sessionStorage.getItem('langType') || '中',
      subjectSign: false,
      options: [{
        value: 'zh-CN',
        label: '中'
      }, {
        value: 'en-US',
        label: 'EN'
      }],
      show: false,
      dataState: '',
      logintype: 0,
      telcode: '',
      isDisable: false,
      preStoreUtils: {
        cardNumber: '',
        openingBank: ''
      },
      types: 0,
      Eid: 0,
      checkcunzeng: false, // 默认为false 不是点击存证平台
      kk: '',
      notes: '', // 反馈内容
      auditStatus: 0, // 审核状态   1 2 3
      lookmainbody: false,
      changid: null,
      Sqwzaddress: '',
      telshow: false,
      teldisgo: false,
      telcount: 0,
      Sqgd: '', // 股东结构
      sqxmname: '', // 联系人名字
      tlephone: '', // 电话
      otherPhone: '',
      sqyxemail: '', // 邮箱
      smcname: '', // 实名公司名
      Smzh: '', // 实名账户
      smbank: '', // 银行
      smcontest: '', // 收款人
      packet: '', // TCR20钱包地址
      smaddress: '', // 地址
      Sqzyms: '', // 主营业务
      dataReferred: '', // 数据主体简称
      remarks: '', // 备注
      Sqjsnl: '',
      ZTSQfileFormat: '',
      Sqccxz: '', // 数据的来源、格式及内容的描述
      ZZfileFormat: '',
      BRlicenseFormat: '',
      Sqgx: '', // 对分布式存储的了解或贡献

      emailval: '',
      telvaltitle: '',
      telTimer: null,
      timer: null,
      Eamilshow: false,
      Eamilcount: 0,
      activeInput: 0,
      activeInput2: 0,
      captchas: [
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' }
      ],
      telcaptchas: [
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' }
      ],
      ZTSFfileFormat: '',
      ZTGDfileFormat: '',
      ZTYBfileFormat: '',
      email: false,
      Sm5Url: '',
      companySocialMediaUrl: [],
      countindex: 1,
      areaIndex: 1,
      Sm5xinputval: '',
      datalxlist: [],
      sizeindex: 1,
      otherFile: 2,
      visible2: true,
      visible: true,
      changeIndex: 1,
      Sqztxm: false,
      choseZT: false,
      real: false,
      ZTGDfileUrl: [],
      ZTGDsaveUrl: [],
      ZTSFfileUrl: '',
      ZTSFsaveUrl: '',
      ZTSQfileUrl: '',
      ZTSQsaveUrl: '',
      ZTYBsaveUrl: '',
      ZZfileUrl: '',
      ZZsaveUrl: '',
      BRlicenseUrl: [],
      BRsaveUrl: [],
      ZTZZfileUrl: '',
      ZTZZsaveUrl: '',
      ZTYBfileUrl: '',
      openZT: false,
      rzopen: false,
      checked: false,
      checked2: false,
      openSm: false,
      islogin: false,
      dialogVisible: false,
      showBind: '',
      languagetype: '2',
      searchInput: false,
      typeApi: 1,
      xuanzhuan: 2,
      mobile: null,
      languageShow: true,
      inputSearchData: null,
      // Sqcheckbox: false,
      ZTZZfileFormat: '',
      sqcnname: '', // 公司名称
      title: [
        { label: this.$t('homePage'), checked: true },
        { label: this.$t('solutions'), checked: false },
        { label: this.$t('servicess'), checked: false },
        { label: this.$t('industryNews'), checked: false },
        { label: this.$t('aboutByteBase'), checked: false },
        { label: this.$t('dataRetrieval'), checked: false },
        // { label: 'Notary Info', checked: false }
        // { label: this.$t('storageNode'), checked: false }
      ],
      dataStorageTypeList: [],
      ischeck: false,
      categoryIndex: 0,
      smcname: '', // 实名认证公司名称
      emailvaltitle: '',
      emailcode: '',
      showbytexy: false,
      ZTFRfileUrl: '', // 财务报告
      ZTFRsaveUrl: '', // 财务报告（保存地址）
      ZTFRfileFormat: '', // 财务报告（后缀单位）
      ZTRBDfileUrl: '', // 董事会成员名册
      ZTRBDsaveUrl: '', // 董事会成员名册（保存地址）
      ZTRBDfileFormat: '', // 董事会成员名册（后缀单位）
      ZTBylawsfileUrl: '', // 章程
      ZTBylawssaveUrl: '', // 章程（保存地址）
      ZTBylawsfileFormat: '', // 章程（后缀单位）
      ZTPAfileUrl: '', // 办公地址证明
      ZTPAsaveUrl: '', // 办公地址证明（保存地址）
      ZTPAfileFormat: '', // 办公地址证明（后缀单位）
      upFileList1: {},
      upFileList2: {},
      upFileList3: {},
      upFileList4: {},
      upFileList5: {},
      upFileList6: {},
      upFileList7: {},
      upFileList8: {}, // 章程
      upFileList9: {}, // 董事会成员名册
      upFileList10: {}, // 财务报告
      upFileList11: {}, // 办公地址证明
      successSign: '',
      QRcodeUrl: '',
      states: '',
      url: '',
      state: '',
      uuid: '',
      Nameall: '',
      compression: ['rar', 'zip', 'jar', '7z'],
      picture: ['jpg', 'jpeg', 'bmp', 'gif', 'png'],
      pdf: ['pdf'],
      video: ['wmv', 'mp4', 'mov', 'mpeg', 'mpg', 'rmvb', 'rm', 'avi', '3gp', 'flv', 'dat', 'm2v', 'mkv', 'm4v'],
      avdeo: ['mp3', 'wav', 'wmv'],
      isolist: ['iso', 'bin', 'nrg', 'vsd', 'cif', 'fcd', 'img', 'ccd', 'c2d', 'dfi', 'tao', 'dao', 'cue'],
      txt: ['txt'],
      nodeApplicate: false
    }
  },
  created () {
    if (this.$route.query) {
      this.state = this.$route.query.state
      this.uuid = this.$route.query.uuid
    }
    this.Nameall = localStorage.loginName
    this.$nextTick(() => {
      this.subjectSign = localStorage.getItem('subject')
    })
    this.categoryIndex = this.$route.meta.index
    if (localStorage.loginName !== undefined && localStorage.loginName !== null) {
      var tel = localStorage.loginName
      tel = '' + tel
      var tel1 = tel.substr(0, 3) + '****' + tel.substr(7)
      this.mobile = tel1
      this.islogin = false
    } else {
      this.islogin = true
    }
    this.languagetype = localStorage.languagetype
    this.changelanguagetype(this.languagetype)
    let href = location.href
    if (href.indexOf('apiWord') !== -1) {
      this.typeApi = 2
    }
  },
  mounted () {
    EventBus.$on('dataState', msg => {
      this.dataState = msg
    })
    EventBus.$on('dialogVisible', msg => {
      this.dialogVisible = msg
      // this.showHead()
    })
    EventBus.$on('showOrnot', msg => {
      this.xuanzhuan = msg.xuanzhuan
      this.islogin = msg.islogin
      this.showHead()
    })
    EventBus.$on('params', msg => {
      this.showBind = msg
    })
    EventBus.$on('MainBodyDetail', (msg) => {
      // console.log('!!!!!', msg)
      this.changid = msg.id
      this.Sqztxm = true
      this.ruleForm.Sqcheckbox = false
      this.auditStatus = msg.data.auditStatus
      this.changeIndex = msg.data.dataType
      this.ruleForm.ZTSQsaveUrl = msg.data.authorizationSaveUrl
      this.ruleForm.ZTSQfileUrl = msg.data.grantAuthorizationUrl
      this.ruleForm.ZTZZfileUrl = msg.data.businessLicenseUrl

      this.ruleForm.ZTZZsaveUrl = msg.data.companyBusinessLicenseSaveUrl
      this.ruleForm.sqcnname = msg.data.companyName
      this.Sqjsnl = msg.data.companyScale
      this.ruleForm.Sqwzaddress = msg.data.companySites
      if (msg.data.companySocialMediaUrl === null) {
        this.ruleForm.companySocialMediaUrl = []
      } else {
        this.ruleForm.companySocialMediaUrl =
          msg.data.companySocialMediaUrl
      }
      this.ruleForm.otherFile = msg.data.isReissue
      this.otherFile = msg.data.isReissue
      this.ruleForm.countindex = msg.data.companyType
      this.ruleForm.tlephone = msg.data.dataContactMobile
      this.ruleForm.otherPhone = msg.data.dataContactMobile
      this.ruleForm.sqyxemail = msg.data.mailbox
      this.ruleForm.sqxmname = msg.data.dataContactName
      this.ruleForm.dataReferred = msg.data.dataReferred
      this.ruleForm.sizeindex = msg.data.dataSizeType
      if (msg.data.dataTypes === null) {
        this.datalxlist = []
      } else {
        this.datalxlist = msg.data.dataTypes
      }

      this.ZTSFsaveUrl = msg.data.majorShareholderUrl
      this.ZTSFfileUrl = msg.data.majorShareholderFrontUrl
      if (msg.data.shareholderProofIdentityUrl === null || msg.data.shareholderProofIdentityUrl === '' || msg.data.shareholderProofIdentityUrl === undefined) {
        this.ruleForm.ZTGDfileUrl = []
        this.ruleForm.ZTGDsaveUrl = []
      } else {
        this.ruleForm.ZTGDfileUrl = msg.data.shareholderProofIdentityUrl
        this.ruleForm.ZTGDsaveUrl = msg.data.shareholdersHandheldIdentityUrl
      }
      this.ruleForm.ZTYBsaveUrl = msg.data.dataSampleUrl
      this.ruleForm.ZTYBfileUrl = msg.data.dataSampleFrontUrl
      this.Sqgd = msg.data.shareholderStructure
      this.ruleForm.Sqgx = msg.data.storageKnow
      this.ruleForm.Sqccxz = msg.data.dataDescription
      this.ruleForm.Sqzyms = msg.data.mainBusinessDescription
      this.changid = msg.data.id
      this.remarks = msg.data.remarks
      this.ruleForm.ZTBylawsfileUrl = msg.data.bylawsFrontUrl // 章程/其他组织宪章性文件访问url 2
      this.ruleForm.ZTBylawssaveUrl = msg.data.bylawsUrl // 章程/其他组织宪章性文件保存url 2
      this.ruleForm.ZTRBDfileUrl = msg.data.memberOfTheBoardFrontUrl// 董事会成员名册访问url 2
      this.ruleForm.ZTRBDsaveUrl = msg.data.memberOfTheBoardUrl // 董事会成员名册保存url 2
      this.ruleForm.ZTSFfileUrl = msg.data.majorShareholderFrontUrl // 25%以上股权的自然人股东 ,身份证明或护照的访问url  2
      this.ruleForm.ZTSFsaveUrl = msg.data.majorShareholderUrl // 25%以上股权的自然人股东 ,身份证明或护照的保存url  2
      this.ruleForm.ZTFRfileUrl = msg.data.financialReportFrontUrl // 过去一个财务年度的财务报告访问url 2
      this.ruleForm.ZTFRsaveUrl = msg.data.financialReportUrl // 过去一个财务年度的财务报告保存url 2
      this.ruleForm.ZTPAfileUrl = msg.data.officeAddressFrontUrl // 办公地址证明访问url 2
      this.ruleForm.ZTPAsaveUrl = msg.data.officeAddressUrl // 办公地址证明保存url 2
      // console.log('!!!!!', this.otherFile)
    })
    EventBus.$on('lookmainbody', (msg) => {
      this.types = msg.type
      this.Eid = msg.id
      this.kk = msg.companyName
      this.auditStatus = msg.auditStatus
      this.lookmainbody = true
      this.changeIndex = msg.dataType
      this.otherFile = msg.isReissue
      this.ZTSQsaveUrl = msg.authorizationSaveUrl
      this.ZTSQfileUrl = msg.grantAuthorizationUrl
      this.ZTZZfileUrl = msg.businessLicenseUrl
      this.ZTZZsaveUrl = msg.companyBusinessLicenseSaveUrl
      this.sqcnname = msg.companyName
      this.Sqjsnl = msg.companyScale
      this.sqyxemail = msg.mailbox
      this.Sqwzaddress = msg.companySites
      this.companySocialMediaUrl = msg.companySocialMediaUrl
      this.countindex = msg.companyType
      this.tlephone = msg.dataContactMobile
      this.sqxmname = msg.dataContactName
      this.dataReferred = msg.dataReferred
      this.sizeindex = msg.dataSizeType
      this.datalxlist = msg.dataTypeNames
      this.ZTSFsaveUrl = msg.majorShareholderUrl
      this.ZTSFfileUrl = msg.majorShareholderFrontUrl
      if (msg.shareholderProofIdentityUrl === null || msg.shareholderProofIdentityUrl === '' || msg.shareholderProofIdentityUrl === undefined) {
        this.ZTGDfileUrl = []
        this.ZTGDsaveUrl = []
      } else {
        this.ZTGDfileUrl = msg.shareholderProofIdentityUrl
        this.ZTGDsaveUrl = msg.shareholdersHandheldIdentityUrl
      }
      this.ZTYBsaveUrl = msg.dataSampleUrl
      this.ZTYBfileUrl = msg.dataSampleFrontUrl
      this.Sqgd = msg.shareholderStructure
      this.Sqgx = msg.storageKnow
      this.Sqccxz = msg.dataDescription
      this.Sqzyms = msg.mainBusinessDescription
      this.changid = msg.id
      this.remarks = msg.remarks
      this.ZTBylawsfileUrl = msg.bylawsFrontUrl // 章程/其他组织宪章性文件访问url 2
      this.ZTBylawssaveUrl = msg.bylawsUrl // 章程/其他组织宪章性文件保存url 2
      this.ZTRBDfileUrl = msg.memberOfTheBoardFrontUrl// 董事会成员名册访问url 2
      this.ZTRBDsaveUrl = msg.memberOfTheBoardUrl // 董事会成员名册保存url 2
      this.ZTSFfileUrl = msg.majorShareholderFrontUrl // 25%以上股权的自然人股东 ,身份证明或护照的访问url  2
      this.ZTSFsaveUrl = msg.majorShareholderUrl // 25%以上股权的自然人股东 ,身份证明或护照的保存url  2
      this.ZTFRfileUrl = msg.financialReportFrontUrl // 过去一个财务年度的财务报告访问url 2
      this.ZTFRsaveUrl = msg.financialReportUrl // 过去一个财务年度的财务报告保存url 2
      this.ZTPAfileUrl = msg.officeAddressFrontUrl // 办公地址证明访问url 2
      this.ZTPAsaveUrl = msg.officeAddressUrl // 办公地址证明保存url 2

      this.ruleForm.Sqcheckbox = false
      this.auditStatus = msg.auditStatus
      this.changeIndex = msg.dataType
      this.ruleForm.ZTSQsaveUrl = msg.authorizationSaveUrl
      this.ruleForm.ZTSQfileUrl = msg.grantAuthorizationUrl
      this.ruleForm.ZTZZfileUrl = msg.businessLicenseUrl
      this.ruleForm.otherFile = msg.isReissue
      this.ruleForm.ZTZZsaveUrl = msg.companyBusinessLicenseSaveUrl
      this.ruleForm.sqcnname = msg.companyName
      this.Sqjsnl = msg.companyScale
      this.ruleForm.Sqwzaddress = msg.companySites
      if (msg.companySocialMediaUrl === null) {
        this.ruleForm.companySocialMediaUrl = []
      } else {
        this.ruleForm.companySocialMediaUrl =
          msg.companySocialMediaUrl
      }

      this.ruleForm.countindex = msg.companyType
      this.ruleForm.tlephone = msg.dataContactMobile
      this.ruleForm.otherPhone = msg.dataContactMobile
      this.ruleForm.sqyxemail = msg.mailbox
      this.ruleForm.sqxmname = msg.dataContactName
      this.ruleForm.dataReferred = msg.dataReferred
      this.ruleForm.sizeindex = msg.dataSizeType
      if (msg.dataTypes === null) {
        this.datalxlist = []
      } else {
        this.datalxlist = msg.dataTypes
      }
      this.ZTSFsaveUrl = msg.majorShareholderUrl
      this.ZTSFfileUrl = msg.majorShareholderFrontUrl
      if (msg.shareholderProofIdentityUrl === null || msg.shareholderProofIdentityUrl === '' || msg.shareholderProofIdentityUrl === undefined) {
        this.ruleForm.ZTGDfileUrl = []
        this.ruleForm.ZTGDsaveUrl = []
      } else {
        this.ruleForm.ZTGDfileUrl = msg.shareholderProofIdentityUrl
        this.ruleForm.ZTGDsaveUrl = msg.shareholdersHandheldIdentityUrl
      }
      this.ruleForm.ZTYBsaveUrl = msg.dataSampleUrl
      this.ruleForm.ZTYBfileUrl = msg.dataSampleFrontUrl
      this.Sqgd = msg.shareholderStructure
      this.ruleForm.Sqgx = msg.storageKnow
      this.ruleForm.Sqccxz = msg.dataDescription
      this.ruleForm.Sqzyms = msg.mainBusinessDescription
      this.changid = msg.id
      this.remarks = msg.remarks
      this.ruleForm.ZTBylawsfileUrl = msg.bylawsFrontUrl // 章程/其他组织宪章性文件访问url 2
      this.ruleForm.ZTBylawssaveUrl = msg.bylawsUrl // 章程/其他组织宪章性文件保存url 2
      this.ruleForm.ZTRBDfileUrl = msg.memberOfTheBoardFrontUrl// 董事会成员名册访问url 2
      this.ruleForm.ZTRBDsaveUrl = msg.memberOfTheBoardUrl // 董事会成员名册保存url 2
      this.ruleForm.ZTSFfileUrl = msg.majorShareholderFrontUrl // 25%以上股权的自然人股东 ,身份证明或护照的访问url  2
      this.ruleForm.ZTSFsaveUrl = msg.majorShareholderUrl // 25%以上股权的自然人股东 ,身份证明或护照的保存url  2
      this.ruleForm.ZTFRfileUrl = msg.financialReportFrontUrl // 过去一个财务年度的财务报告访问url 2
      this.ruleForm.ZTFRsaveUrl = msg.financialReportUrl // 过去一个财务年度的财务报告保存url 2
      this.ruleForm.ZTPAfileUrl = msg.officeAddressFrontUrl // 办公地址证明访问url 2
      this.ruleForm.ZTPAsaveUrl = msg.officeAddressUrl // 办公地址证明保存url 2
    })
    EventBus.$on('msg', (msg) => {
      // A发送来的消息
      this.islogin = true
    })
    EventBus.$on('Sqztxm', (msg) => {
      this.Sqztxm = true
      let that = this
      let token = localStorage.token
      // that.goSqztxm()
      let prams = {}
      this.$axios({
        method: 'post',
        url: apis.dataMainBodyApplyInfoByPidApi,
        data: prams,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((r) => {
          console.log(r)
          if (r.status === 200) {
            console.log(r)
            this.ruleForm.Sqcheckbox = false
            this.auditStatus = r.data.auditStatus
            this.changeIndex = r.data.dataType
            this.ruleForm.ZTSQsaveUrl = r.data.authorizationSaveUrl
            this.ruleForm.ZTSQfileUrl = r.data.grantAuthorizationUrl
            this.ruleForm.ZTZZfileUrl = r.data.businessLicenseUrl

            this.ruleForm.ZTZZsaveUrl = r.data.companyBusinessLicenseSaveUrl
            this.ruleForm.sqcnname = r.data.companyName
            this.Sqjsnl = r.data.companyScale
            this.ruleForm.Sqwzaddress = r.data.companySites
            if (r.data.companySocialMediaUrl === null) {
              this.ruleForm.companySocialMediaUrl = []
            } else {
              this.ruleForm.companySocialMediaUrl =
                                r.data.companySocialMediaUrl
            }

            this.ruleForm.countindex = r.data.companyType
            this.ruleForm.tlephone = r.data.dataContactMobile
            this.ruleForm.sqyxemail = r.data.mailbox
            this.ruleForm.sqxmname = r.data.dataContactName
            this.ruleForm.dataReferred = r.data.dataReferred
            this.ruleForm.sizeindex = r.data.dataSizeType
            if (r.data.dataTypes === null) {
              this.datalxlist = []
            } else {
              this.datalxlist = r.data.dataTypes
            }
            this.ZTSFsaveUrl = r.majorShareholderUrl
            this.ZTSFfileUrl = r.majorShareholderFrontUrl
            if (r.data.shareholderProofIdentityUrl === null || r.data.shareholderProofIdentityUrl === '' || r.data.shareholderProofIdentityUrl === undefined) {
              this.ruleForm.ZTGDfileUrl = []
              this.ruleForm.ZTGDsaveUrl = []
            } else {
              this.ruleForm.ZTGDfileUrl = r.data.shareholderProofIdentityUrl
              this.ruleForm.ZTGDsaveUrl = r.data.shareholdersHandheldIdentityUrl
            }
            this.ruleForm.ZTYBsaveUrl = r.data.dataSampleUrl
            this.ruleForm.ZTYBfileUrl = r.data.dataSampleFrontUrl
            this.Sqgd = r.data.shareholderStructure
            this.ruleForm.Sqgx = r.data.storageKnow
            this.ruleForm.Sqccxz = r.data.dataDescription
            this.ruleForm.Sqzyms = r.data.mainBusinessDescription
            this.changid = r.data.id
            this.remarks = r.data.remarks
            this.ruleForm.ZTBylawsfileUrl = r.data.bylawsFrontUrl // 章程/其他组织宪章性文件访问url 2
            this.ruleForm.ZTBylawssaveUrl = r.data.bylawsUrl // 章程/其他组织宪章性文件保存url 2
            this.ruleForm.ZTRBDfileUrl = r.data.memberOfTheBoardFrontUrl// 董事会成员名册访问url 2
            this.ruleForm.ZTRBDsaveUrl = r.data.memberOfTheBoardUrl // 董事会成员名册保存url 2
            this.ruleForm.ZTSFfileUrl = r.data.majorShareholderFrontUrl // 25%以上股权的自然人股东 ,身份证明或护照的访问url  2
            this.ruleForm.ZTSFsaveUrl = r.data.majorShareholderUrl // 25%以上股权的自然人股东 ,身份证明或护照的保存url  2
            this.ruleForm.ZTFRfileUrl = r.data.financialReportFrontUrl // 过去一个财务年度的财务报告访问url 2
            this.ruleForm.ZTFRsaveUrl = r.data.financialReportUrl // 过去一个财务年度的财务报告保存url 2
            this.ruleForm.ZTPAfileUrl = r.data.officeAddressFrontUrl // 办公地址证明访问url 2
            this.ruleForm.ZTPAsaveUrl = r.data.officeAddressUrl // 办公地址证明保存url 2
          }
        })
        .catch((err) => {
          this.ruleForm.auditStatus = ''
          this.changeIndex = 1
          this.ruleForm.ZTSQsaveUrl = ''
          this.ruleForm.ZTSQfileUrl = ''
          this.ruleForm.ZTZZfileUrl = ''
          this.ruleForm.ZTZZsaveUrl = ''
          this.ruleForm.sqcnname = ''
          this.ruleForm.Sqjsnl = ''
          this.ruleForm.Sqwzaddress = ''
          this.ruleForm.companySocialMediaUrl = []
          this.ruleForm.countindex = 1
          this.ruleForm.tlephone = ''
          this.ruleForm.otherPhone = ''
          this.ruleForm.sqyxemail = ''
          this.ruleForm.sqxmname = ''
          this.ruleForm.dataReferred = ''
          this.ruleForm.sizeindex = 1
          this.ruleForm.datalxlist = []
          this.ruleForm.ZTYBsaveUrl = ''
          this.ruleForm.ZTYBfileUrl = ''
          this.ruleForm.ZTSFsaveUrl = ''
          this.ruleForm.ZTSFfileUrl = ''
          this.ruleForm.ZTGDfileUrl = []
          this.ruleForm.ZTGDsaveUrl = []
          this.Sqgd = ''
          this.ruleForm.Sqgx = ''
          this.ruleForm.Sqccxz = ''
          this.ruleForm.Sqzyms = ''
          this.changid = null
          this.remarks = ''
          this.ruleForm.ZTBylawsfileUrl = '' // 章程/其他组织宪章性文件访问url 2
          this.ruleForm.ZTBylawssaveUrl = '' // 章程/其他组织宪章性文件保存url 2
          this.ruleForm.ZTRBDfileUrl = '' // 董事会成员名册访问url 2
          this.ruleForm.ZTRBDsaveUrl = '' // 董事会成员名册保存url 2
          this.ruleForm.ZTSFfileUrl = '' // 25%以上股权的自然人股东 ,身份证明或护照的访问url  2
          this.ruleForm.ZTSFsaveUrl = '' // 25%以上股权的自然人股东 ,身份证明或护照的保存url  2
          this.ruleForm.ZTFRfileUrl = '' // 过去一个财务年度的财务报告访问url 2
          this.ruleForm.ZTFRsaveUrl = ''// 过去一个财务年度的财务报告保存url 2
          this.ruleForm.ZTPAfileUrl = '' // 办公地址证明访问url 2
          this.ruleForm.ZTPAsaveUrl = '' // 办公地址证明保存url 2
        })
    })
    EventBus.$on('SmRz', (msg) => {
      // A发送来的消息
      // if()
      this.rzopen = true
    })
    EventBus.$on('SmRz3', (msg) => {
      // A发送来的消息
      // if()
      this.openSm = true
    })
    EventBus.$on('TXmb', (msg) => {
      this.openZT = true
    })
    EventBus.$on('rzopen', (msg) => {
      this.rzopen = true
    })
    EventBus.$on('userinfo', (msg) => {
      console.log(msg)
      this.real = msg.real
    })
    EventBus.$on('RzZT', (msg) => {
      // A发送来的消息
      this.Sqztxm = true
    })
    EventBus.$on('sendParams', msg => {
      // console.log('过来的参数:', msg)
      this.url = msg.url
      // this.getCode()
    })
    let token = localStorage.token
    let prams = {}
    this.$axios({
      method: 'post',
      url: apis.dataStorageTypeListApi,
      data: prams,
      headers: {
        'Content-Type': 'application/json',
        Bearer: token
      }
    }).then((r) => {
      console.log(r.data)
      this.dataStorageTypeList = r.data
    })
  },
  methods: {
    datacap () {
      let rex = '^(([f][1])|([f][3]))'
      let str = this.inputDataAdress.replace(/\s/ig,'')
      let sign = new RegExp(rex).test(str)
      if (str.length > 0) {
        this.$router.push({
          path: '/searchDatacap'
        })
        sessionStorage.setItem('datacap', str)
        sessionStorage.setItem('checkSign', sign)
        this.reload()
      } else {
        this.$message.info({
          content: this.$t('hint45'),
          background: true,
          duration: 3
        })
      }
    },
    autoSave () {
      console.log('保存啊', this.ruleForm)
      localStorage.setItem('formInfo', JSON.stringify(this.ruleForm))
    },
    handleCommand () {
      // 切换语言
      let t
      t = this.options.find(e => e.value === this.radio)
      this.langType = t.label
      this.$i18n.locale = this.radio// 关键语句
      window.sessionStorage.setItem('lang', this.radio)
      window.sessionStorage.setItem('langType', t.label)
      location.reload()
      // this.reload()
      // this.showHead()
    },
    menumCommand (command) {
      console.log('command', command)
      if (command === 'SmRz') {
        this.SmRz()
      } else if (command === 'viewInfo') {
        this.viewInfo()
      } else if (command === 'logout') {
        this.loginOutFun()
      } else if (command === 'viewUserInfo') {
        this.viewInfo()
      }
    },
    checkWebsite () {
      if (this.Sqwzaddress) {
        let sign = this.validateURL(this.Sqwzaddress)
        if (!sign) {
          this.$message.info({
            content: this.$t('hint46'),
            background: true,
            duration: 3
          })
        }
      } else {
        this.$message.info({
          content: this.$t('hint47'),
          background: true,
          duration: 3
        })
      }
    },
    validateURL (textval) {
      // eslint-disable-next-line no-useless-escape
    //   var strRegex = '(((^https?:(?:\\/\\/)?)(?:[-;:&=\\+\\$,\\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\\+\\$,\\w]+@)[A-Za-z0-9.-]+)((?:\\/[\\+~%\\/.\\w-_]*)?\\??(?:[-\\+=&;%@.\\w_]*)#?(?:[\\w]*))?)$'
      var strRegex = '^([hH][tT]{2}[pP]:\\/\\/|[hH][tT]{2}[pP][sS]:\\/\\/|www\\.)(([A-Za-z0-9-~]+)\\.)+([A-Za-z0-9-~\\/])+$'
      var re = new RegExp(strRegex)
      if (re.test(textval)) {
        return (true)
      } else {
        return (false)
      }
    },
    closexy () {
      this.showbytexy = false
    },
    bindbytexy () {
      // console.log(this.showbytexy)
      this.showbytexy = true
    },
    replayclick () {
      // 重新申请
      if (this.types === 3) {
        let token = localStorage.token
        let parms = {
          id: this.Eid,
          ids: []
        }
        this.$axios({
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
            EventBus.$emit('sendId', this.Eid)
          }
        })
      } else if (this.types === 2) {
        let token = localStorage.token
        let parms = {
          id: this.Eid,
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
            content: this.$t('hint9'),
            background: true,
            duration: 3
          })
        })
        let row = {
          dataSubjectLevel: this.changeIndex,
          id: this.Eid
        }
        EventBus.$emit('updateData', row)
      } else if (this.types === 1) {
        this.Sqztxm = true
        console.log('查看', this.ruleForm)
      }
      setTimeout(() => {
        this.lookmainbody = false
      }, 500)
    },
    refoundNumber () {
      let number = this.preStoreUtils.cardNumber
      let num = number.replace(/\s+/g, '')
      console.log(num)
      let obj = bankCardAttribution(num)
      if (obj === 'error') {
        // this.$Message.error('请输入正确的银行卡号！')
      } else {
        this.preStoreUtils.openingBank = obj.bankName
      }
    },
    print () {
      let number = this.preStoreUtils.cardNumber
      if (number !== '') {
        let num = number.replace(/\s+/g, '')
        let obj = bankCardAttribution(num)
        if (obj !== 'error') {
          this.preStoreUtils.openingBank = obj.bankName
        } else {
          // this.$Message.error('请输入正确的银行卡号！')
          this.$message.error({
            content: this.$t('hint48'),
            background: true,
            duration: 3
          })
        }
      } else {
        // this.$Message.error('请输入银行卡号！')
        this.$message.error({
          content: this.$t('hint49'),
          background: true,
          duration: 3
        })
      }
    },
    levalchange () {
      // 等级变更
      setTimeout(() => {
        this.lookmainbody = false
      }, 1000)
      // this.lookmainbody = false
      if (this.auditStatus === 2 && this.changeIndex !== '3') {
        let that = this
        let token = localStorage.token
        let parms = {
          id: this.changid,
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
        })
          .then((r) => {
            console.log(r)
            if (r.status === 200) {
              let msg = r.data
              EventBus.$emit('sendData', msg)
            }
          })
          .catch((e) => {
            this.$message.info({
              content: e.response.data,
              background: true,
              duration: 3
            })
          })
        let row = {
          dataSubjectLevel: this.changeIndex,
          id: this.changid
        }
        EventBus.$emit('updateData', row)
        // console.log('升级数据主体', row)
      } else {
        console.log('NULL')
      }
    },
    okeml () {
      let that = this
      console.log(this.emailcode)
      let token = localStorage.token
      let prams = {
        code: this.emailcode,
        type: 1,
        login: this.emailval
      }
      this.$axios({
        method: 'post',
        url: apis.emailOrSmsAuthApi,
        data: prams,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((r) => {
          console.log(r)
          if (r.status === 200) {
            this.$message.info({
              content: this.$t('hint50'),
              background: true,
              duration: 3
            });
            (that.captchas = [
              { num: '' },
              { num: '' },
              { num: '' },
              { num: '' },
              { num: '' },
              { num: '' }
            ]),
            (that.email = false)
            that.successSign = true
          }
        })
        .catch((err) => {
          this.$message.info({
            content: this.$t('hint118'),
            background: true,
            duration: 3
          })
        })
    },
    SQsave () {
      // 数据主体保存
      var parms = {
        mailbox: this.ruleForm.sqyxemail, // 联络邮箱  1
        isReissue: this.ruleForm.otherFile, // 是否愿意增补签署其他要求的证明文件 枚举 1-不需要 2-需要  1
        code: this.telcode, // 验证码 1
        authorizationSaveUrl: this.ruleForm.ZTSQsaveUrl, // 数据主体对数据联系人的授权url 1
        grantAuthorizationUrl: this.ruleForm.ZTSQfileUrl, // 数据主体对数据联系人的授权访问url 1
        businessLicenseUrl: this.ruleForm.ZTZZfileUrl, // 公司营业执照访问url 1
        companyBusinessLicenseSaveUrl: this.ruleForm.ZTZZsaveUrl, // 公司营业执照url 1
        companyName: this.ruleForm.sqcnname, // 公司名称 1
        companySites: this.ruleForm.Sqwzaddress, // 公司网站 1
        companySocialMediaUrl: this.ruleForm.companySocialMediaUrl, // 公司社交媒体链接  1
        companyType: this.ruleForm.countindex, // 公司类型 1-中国大陆 2-港澳台地区 3-海外地区  1
        dataContactMobile: this.ruleForm.tlephone || this.ruleForm.otherPhone, // 数据主体联系人手机号 1
        dataContactName: this.ruleForm.sqxmname, // 数据主体联系人姓名 1
        dataReferred: this.ruleForm.dataReferred, // 数据主体简称 1
        dataSizeType: this.ruleForm.sizeindex, // 数据存储大小 1
        dataDescription: this.ruleForm.Sqccxz, // 数据的来源，格式及内容的描述 1
        mainBusinessDescription: this.ruleForm.Sqzyms, // 主营业务描述 1
        storageKnow: this.ruleForm.Sqgx, // 对去中心化分布式存储的了解或贡献 1
        dataSampleFrontUrl: this.ruleForm.ZTYBfileUrl, // 数据样本访问url 1
        dataSampleUrl: this.ruleForm.ZTYBsaveUrl, // 数据样本url 1
        bylawsFrontUrl: this.ruleForm.ZTBylawsfileUrl, // 章程/其他组织宪章性文件访问url 2
        bylawsUrl: this.ruleForm.ZTBylawssaveUrl, // 章程/其他组织宪章性文件保存url 2
        shareholderProofIdentityUrl: this.ruleForm.ZTGDfileUrl, // 股东名册及构成访问url 2
        shareholdersHandheldIdentityUrl: this.ruleForm.ZTGDsaveUrl, // 股东名册及构成 2
        memberOfTheBoardFrontUrl: this.ruleForm.ZTRBDfileUrl, // 董事会成员名册访问url 2
        memberOfTheBoardUrl: this.ruleForm.ZTRBDsaveUrl, // 董事会成员名册保存url 2
        majorShareholderFrontUrl: this.ruleForm.ZTSFfileUrl, // 25%以上股权的自然人股东 ,身份证明或护照的访问url  2
        majorShareholderUrl: this.ruleForm.ZTSFsaveUrl, // 25%以上股权的自然人股东 ,身份证明或护照的保存url  2
        financialReportFrontUrl: this.ruleForm.ZTFRfileUrl, // 过去一个财务年度的财务报告访问url 2
        financialReportUrl: this.ruleForm.ZTFRsaveUrl, // 过去一个财务年度的财务报告保存url 2
        officeAddressFrontUrl: this.ruleForm.ZTPAfileUrl, // 办公地址证明访问url 2
        officeAddressUrl: this.ruleForm.ZTPAsaveUrl, // 办公地址证明保存url 2
        identitySaveUrl: '', // 数据主体联系人的身份证明
        proofIdentityUrl: '', // 数据主体联系人的身份证明访问url
        shareholderStructure: this.Sqgd, // 股东结构
        storageStatus: this.Sqccxz, // 存储现状
        businessModel: this.Sqzyms, // 经营模式
        dataType: this.changeIndex, // 数据主体类型
        dataTypes: this.datalxlist, // 数据类型
        companyScale: this.Sqjsnl // 公司规模及技术能力
      }
      let token = localStorage.token
      console.log(parms)
      this.$axios({
        method: 'post',
        url: apis.dataMainBodyApplySaveApi,
        data: parms,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((r) => {
          this.Sqztxm = false
          console.log(r)
          if (r.status === 200) {
            this.$message.info({
              content: this.$t('hint2'),
              background: true,
              duration: 3
            })
          }
          localStorage.setItem('formInfo', JSON.stringify(parms))
          // localStorage.setItem('storageInfo', parms)
        })
        .catch((e) => {
          this.$message.info({
            content: this.$t('hint51'),
            background: true,
            duration: 3
          })
          // this.ruleForm = JSON.parse(localStorage.getItem('formInfo'))
          this.Sqztxm = false
        })
    },
    save: debounce(function (val) {
      this.$refs[val].validate((valid) => {
        if (valid) {
          console.log('ssssss', valid)
          this.SQsubmit()
        } else {
          let v = this.ruleForm
          if ((v.ZTYBfileUrl === '' || v.ZTYBfileUrl === null) || v.Sqccxz.length === 0 || v.Sqgx.length === 0 || v.Sqzyms.length === 0 ||
            (v.ZTSQfileUrl === '' || v.ZTSQfileUrl === null) || v.companySocialMediaUrl.length <= 0 || (v.sqyxemail === '' || v.sqyxemail === null) || (v.tlephone === '' || v.tlephone === null) ||
            (v.ZTZZfileUrl === '' || v.ZTZZfileUrl === null) || (v.Sqwzaddress === '' || v.Sqwzaddress === null) || v.dataReferred.length < 1 || (v.sqcnname === '' || v.sqcnname === null)) {
            this.$message.info({
              content: this.$t('hint52'),
              background: true,
              duration: 3
            })
            return
          }
          console.log('ssssss', valid)
          console.log('error submit!!')
          return false
        }
      })
      // this.test()
    }, 1000),
    SQsubmit () {
      let that = this
      if (!that.ruleForm.Sqcheckbox) {
        that.$message.info({
          content: this.$t('hint78'),
          background: true,
          duration: 3
        })
        return
      }
      var parms = {
        mailbox: this.ruleForm.sqyxemail, // 联络邮箱  1
        isReissue: this.ruleForm.otherFile, // 是否愿意增补签署其他要求的证明文件 枚举 1-不需要 2-需要  1
        code: this.telcode, // 验证码 1
        authorizationSaveUrl: this.ruleForm.ZTSQsaveUrl, // 数据主体对数据联系人的授权url 1
        grantAuthorizationUrl: this.ruleForm.ZTSQfileUrl, // 数据主体对数据联系人的授权访问url 1
        businessLicenseUrl: this.ruleForm.ZTZZfileUrl, // 公司营业执照访问url 1
        companyBusinessLicenseSaveUrl: this.ruleForm.ZTZZsaveUrl, // 公司营业执照url 1
        companyName: this.ruleForm.sqcnname, // 公司名称 1
        companySites: this.ruleForm.Sqwzaddress, // 公司网站 1
        companySocialMediaUrl: this.ruleForm.companySocialMediaUrl, // 公司社交媒体链接  1
        companyType: this.ruleForm.countindex, // 公司类型 1-中国大陆 2-港澳台地区 3-海外地区  1
        dataContactMobile: this.ruleForm.tlephone || this.ruleForm.otherPhone, // 数据主体联系人手机号 1
        dataContactName: this.ruleForm.sqxmname, // 数据主体联系人姓名 1
        dataReferred: this.ruleForm.dataReferred, // 数据主体简称 1
        dataSizeType: this.ruleForm.sizeindex, // 数据存储大小 1
        dataDescription: this.ruleForm.Sqccxz, // 数据的来源，格式及内容的描述 1
        mainBusinessDescription: this.ruleForm.Sqzyms, // 主营业务描述 1
        storageKnow: this.ruleForm.Sqgx, // 对去中心化分布式存储的了解或贡献 1
        dataSampleFrontUrl: this.ruleForm.ZTYBfileUrl, // 数据样本访问url 1
        dataSampleUrl: this.ruleForm.ZTYBsaveUrl, // 数据样本url 1
        bylawsFrontUrl: this.ruleForm.ZTBylawsfileUrl, // 章程/其他组织宪章性文件访问url 2
        bylawsUrl: this.ruleForm.ZTBylawssaveUrl, // 章程/其他组织宪章性文件保存url 2
        shareholderProofIdentityUrl: this.ruleForm.ZTGDfileUrl, // 股东名册及构成访问url 2
        shareholdersHandheldIdentityUrl: this.ruleForm.ZTGDsaveUrl, // 股东名册及构成 2
        memberOfTheBoardFrontUrl: this.ruleForm.ZTRBDfileUrl, // 董事会成员名册访问url 2
        memberOfTheBoardUrl: this.ruleForm.ZTRBDsaveUrl, // 董事会成员名册保存url 2
        majorShareholderFrontUrl: this.ruleForm.ZTSFfileUrl, // 25%以上股权的自然人股东 ,身份证明或护照的访问url  2
        majorShareholderUrl: this.ruleForm.ZTSFsaveUrl, // 25%以上股权的自然人股东 ,身份证明或护照的保存url  2
        financialReportFrontUrl: this.ruleForm.ZTFRfileUrl, // 过去一个财务年度的财务报告访问url 2
        financialReportUrl: this.ruleForm.ZTFRsaveUrl, // 过去一个财务年度的财务报告保存url 2
        officeAddressFrontUrl: this.ruleForm.ZTPAfileUrl, // 办公地址证明访问url 2
        officeAddressUrl: this.ruleForm.ZTPAsaveUrl, // 办公地址证明保存url 2
        identitySaveUrl: '', // 数据主体联系人的身份证明
        proofIdentityUrl: '', // 数据主体联系人的身份证明访问url
        shareholderStructure: this.Sqgd, // 股东结构
        storageStatus: '', // 存储现状
        businessModel: this.Sqzyms, // 经营模式
        dataType: this.changeIndex, // 数据主体类型
        dataTypes: this.datalxlist, // 数据类型
        companyScale: this.Sqjsnl // 公司规模及技术能力
      }
      if (that.changid === null || that.changid === undefined) {
        console.log(parms)
        this.apply(parms)
      } else {
        var params = {
          mailbox: this.ruleForm.sqyxemail, // 联络邮箱  1
          isReissue: this.ruleForm.otherFile, // 是否愿意增补签署其他要求的证明文件 枚举 1-不需要 2-需要  1
          authorizationSaveUrl: this.ruleForm.ZTSQsaveUrl, // 数据主体对数据联系人的授权url 1
          grantAuthorizationUrl: this.ruleForm.ZTSQfileUrl, // 数据主体对数据联系人的授权访问url 1
          businessLicenseUrl: this.ruleForm.ZTZZfileUrl, // 公司营业执照访问url 1
          companyBusinessLicenseSaveUrl: this.ruleForm.ZTZZsaveUrl, // 公司营业执照url 1
          companyName: this.ruleForm.sqcnname, // 公司名称 1
          companySites: this.ruleForm.Sqwzaddress, // 公司网站 1
          companySocialMediaUrl: this.ruleForm.companySocialMediaUrl, // 公司社交媒体链接  1
          companyType: this.ruleForm.countindex, // 公司类型 1-中国大陆 2-港澳台地区 3-海外地区  1
          dataContactMobile: this.ruleForm.tlephone || this.ruleForm.otherPhone, // 数据主体联系人手机号 1
          dataContactName: this.ruleForm.sqxmname, // 数据主体联系人姓名 1
          dataReferred: this.ruleForm.dataReferred, // 数据主体简称 1
          dataSizeType: this.ruleForm.sizeindex, // 数据存储大小 1
          dataDescription: this.ruleForm.Sqccxz, // 数据的来源，格式及内容的描述 1
          mainBusinessDescription: this.ruleForm.Sqzyms, // 主营业务描述 1
          storageKnow: this.ruleForm.Sqgx, // 对去中心化分布式存储的了解或贡献 1
          dataSampleFrontUrl: this.ruleForm.ZTYBfileUrl, // 数据样本访问url 1
          dataSampleUrl: this.ruleForm.ZTYBsaveUrl, // 数据样本url 1
          bylawsFrontUrl: this.ruleForm.ZTBylawsfileUrl, // 章程/其他组织宪章性文件访问url 2
          bylawsUrl: this.ruleForm.ZTBylawssaveUrl, // 章程/其他组织宪章性文件保存url 2
          shareholderProofIdentityUrl: this.ruleForm.ZTGDfileUrl, // 股东名册及构成访问url 2
          shareholdersHandheldIdentityUrl: this.ruleForm.ZTGDsaveUrl, // 股东名册及构成 2
          memberOfTheBoardFrontUrl: this.ruleForm.ZTRBDfileUrl, // 董事会成员名册访问url 2
          memberOfTheBoardUrl: this.ruleForm.ZTRBDsaveUrl, // 董事会成员名册保存url 2
          majorShareholderFrontUrl: this.ruleForm.ZTSFfileUrl, // 25%以上股权的自然人股东 ,身份证明或护照的访问url  2
          majorShareholderUrl: this.ruleForm.ZTSFsaveUrl, // 25%以上股权的自然人股东 ,身份证明或护照的保存url  2
          financialReportFrontUrl: this.ruleForm.ZTFRfileUrl, // 过去一个财务年度的财务报告访问url 2
          financialReportUrl: this.ruleForm.ZTFRsaveUrl, // 过去一个财务年度的财务报告保存url 2
          officeAddressFrontUrl: this.ruleForm.ZTPAfileUrl, // 办公地址证明访问url 2
          officeAddressUrl: this.ruleForm.ZTPAsaveUrl, // 办公地址证明保存url 2
          identitySaveUrl: '', // 数据主体联系人的身份证明
          proofIdentityUrl: '', // 数据主体联系人的身份证明访问url
          shareholderStructure: this.Sqgd, // 股东结构
          storageStatus: '', // 存储现状
          businessModel: this.Sqzyms, // 经营模式
          dataType: this.changeIndex, // 数据主体类型
          dataTypes: this.datalxlist, // 数据类型
          companyScale: this.Sqjsnl // 公司规模及技术能力
        }
        params.id = that.changid
        console.log(params)
        this.upGraded(params)
      }
    },
    apply (params) {
      let that = this
      let token = localStorage.token
      this.$axios({
        method: 'post',
        url: apis.dataMainBodyApplyApi,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((r) => {
          that.Sqztxm = false
          this.isDisable = false
          console.log(r)
          if (r.status === 200) {
            EventBus.$emit('addsubmit')
            this.ruleForm.Sqcheckbox = false
            this.ruleForm.ZTZZfileUrl = ''
            this.$message.info({
              content: this.$t('successful'),
              background: true,
              duration: 3
            })
          }
        })
        .catch((e) => {
          console.log(e.response)
          this.isDisable = false
          if (e.response.status === 500 && e.response.data) {
            this.$message.info({
              content: this.$t('hint53'),
              background: true,
              duration: 3
            })
          } else if (e.response.status === 400 ) {
            if (e.response.data === '该数据主体名称已存在！') {
              this.$message.info({
                // content: this.$t('hint53'),
                content: this.$t('hint137'),
                background: true,
                duration: 3
              })
            }
            if (e.response.data === '该数据主体简称已存在！') {
              this.$message.info({
                // content: this.$t('hint53'),
                content: this.$t('hint138'),
                background: true,
                duration: 3
              })
            }
            if (e.response.data === '营业执照识别失败！') {
              this.$message.info({
                // content: this.$t('hint53'),
                content: this.$t('hint139'),
                background: true,
                duration: 3
              })
            }
            if (e.response.data === '验证码不能为空！') {
              this.$message.info({
                // content: this.$t('hint53'),
                content: this.$t('hint140'),
                background: true,
                duration: 3
              })
            }
            if (e.response.data === '短信验证失败！') {
              this.$message.info({
                // content: this.$t('hint53'),
                content: this.$t('hint136'),
                background: true,
                duration: 3
              })
            }
          }
        })
    },
    upGraded (params) {
      let token = localStorage.token
      this.$axios({
        method: 'post',
        url: apis.dataMainBodyUpdApi,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((r) => {
          console.log(r)
          this.isDisable = false
          if (r.status === 200) {
            this.$message.info({
              content: this.$t('modifySuc'),
              background: true,
              duration: 3
            })
            this.Sqztxm = false
            EventBus.$emit('addsubmit')
          }
        })
        .catch((e) => {
          console.log(e.response)
          this.isDisable = false
          this.$message.info({
            content: e.response.data,
            background: true,
            duration: 3
          })
        })
    },
    delZTGDfileUrl (val) {
      this.ruleForm.ZTGDfileUrl.splice(val, 1)
      this.ruleForm.ZTGDsaveUrl.splice(val, 1)
      this.upFileList5 = {}
    },
    delZTSF () {
      this.ruleForm.ZTSFfileUrl = ''
      this.ruleForm.ZTSFsaveUrl = ''
      this.upFileList4 = {}
    },
    delbylaws () {
      this.ruleForm.ZTBylawsfileUrl = ''
      this.ruleForm.ZTBylawssaveUrl = ''
      this.upFileList8 = {}
    },
    delztrbd () {
      this.ruleForm.ZTRBDfileUrl = ''
      this.ruleForm.ZTRBDsaveUrl = ''
      this.upFileList9 = {}
    },
    delztfr () {
      this.ruleForm.ZTFRfileUrl = ''
      this.ruleForm.ZTFRsaveUrl = ''
      this.upFileList10 = {}
    },
    delztpa () {
      this.ruleForm.ZTPAfileUrl = ''
      this.ruleForm.ZTPAsaveUrl = ''
      this.upFileList11 = {}
    },
    delZTSQ () {
      this.ruleForm.ZTSQfileUrl = ''
      this.ruleForm.ZTSQsaveUrl = ''
      this.upFileList3 = {}
    },
    submittell () {
      let that = this
      console.log(this.tlephone)
      const TIME_COUNT = 60
      let params = {}
      params.mobile = that.tlephone
      params.type = 1
      params.afs = {
        appKey: 'FFFF0N0000000000913F',
        scene: 'nvc_login'
      }
      that.$axios({
        method: 'post',
        url: apis.sendSmsAuthCodeOrEmail,
        data: params,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        console.log(res)
        if (res.data.bizCode === 200) {
          //    this.email = true
          // this.email=false
        }
      })
        .catch((err) => {
          this.$message.error({
            content: this.$t('hint41'),
            duration: 5
          })
          that.teldisgo = false
        })
      if (!that.telTimer) {
        that.telcount = TIME_COUNT
        // that.teldisgo = true
        that.telshow = false
        that.telTimer = setInterval(() => {
          if (
            that.telcount > 0 &&
            that.telcount <= TIME_COUNT
          ) {
            that.telcount--
          } else {
            that.telshow = true
            clearInterval(that.telTimer)
            that.telTimer = null
          }
        }, 1000)
      }
    },
    bindteldisgo () {
      this.teldisgo = true
      this.$nextTick(function () {
        this.$refs.telcaptchas0.focus()
        // DOM 更新了
        //      let dom = document.getElementById(
        //     'telcaptchas' + this.activeInput2
        //   )
        //   dom.focus()
      })
    },
    delsqyyzz () {
      // this.upFileList.splice(this.upFileList.findIndex(e => e.name === val.name), 1)
      this.ruleForm.ZTZZfileUrl = ''
      this.ruleForm.ZTZZsaveUrl = ''
      this.upFileList2 = {}
    },
    delyb () {
      this.ruleForm.ZTYBsaveUrl = ''
      this.ruleForm.ZTYBfileUrl = ''
      this.upFileList6 = {}
    },
    qxsmrz () {
      this.rzopen = false
    },
    submitSave: debounce(function () {
      this.sunbmitsmrz()
    }, 1000),
    sunbmitsmrz () {
      // 实名认证校验
      let prams = {
        name: this.smcname,
        receivesAddress: '',
        tcr20WalletAddress: '',
        email: this.emailval,
        contact: this.smcontest,
        bankCardName: '',
        bankCardNo: '',
        businessLicenseUrl: '',
        businessLicenseSaveUrl: '',
        code: this.emailcode,
        companyType: '', // 公司类型
        remark: '', // 备注
        businessRegisFrontUrl: [], // 营业登记照访问url
        businessRegisUrl: [] // 营业登记照保存url
      }
      if (prams.name === '') {
        this.$message.error({
          content: this.$t('hint54'),
          background: true,
          duration: 3
        })
        return
      }
      if (this.areaIndex === 1) {
        // prams.name = this.smcname
        prams.receivesAddress = this.smaddress
        // prams.tcr20WalletAddress = this.packet
        prams.bankCardName = this.smbank
        prams.bankCardNo = this.Smzh
        prams.businessLicenseUrl = this.ZZfileUrl
        prams.businessLicenseSaveUrl = this.ZZsaveUrl
        // prams.code = this.emailcode
        prams.remark = this.notes
        prams.companyType = this.areaIndex
        if (prams.businessLicenseUrl === '' && prams.businessLicenseSaveUrl === '') {
          this.$message.error({
            content: this.$t('hint55'),
            background: true,
            duration: 3
          })
          return
        }
        if (prams.bankCardNo === '') {
          this.$message.error({
            content: this.$t('hint56'),
            background: true,
            duration: 3
          })
          return
        }
        if (prams.bankCardName === '') {
          this.$message.error({
            content: this.$t('hint57'),
            background: true,
            duration: 3
          })
          return
        }
        if (prams.contact === '') {
          this.$message.error({
            content: this.$t('hint58'),
            background: true,
            duration: 3
          })
          return
        }
      } else if (this.areaIndex === 2) {
        // prams.name = this.smcname
        prams.companyType = this.areaIndex
        prams.tcr20WalletAddress = this.packet
        prams.businessRegisFrontUrl = this.BRlicenseUrl
        prams.businessRegisUrl = this.BRsaveUrl
        if (prams.businessRegisFrontUrl.length === 0 && prams.businessRegisUrl.length === 0) {
          this.$message.error({
            content: this.$t('hint59'),
            background: true,
            duration: 3
          })
          return
        }
        if (prams.contact === '') {
          this.$message.error({
            content: this.$t('hint60'),
            background: true,
            duration: 3
          })
          return
        }
      }
      console.log('钱包地址:', prams.tcr20WalletAddress)
      if (prams.email === '') {
        this.$message.error({
          content: this.$t('hint61'),
          background: true,
          duration: 3
        })
        return
      }
      if (this.successSign !== true) {
        this.$message.error({
          content: this.$t('hint62'),
          background: true,
          duration: 3
        })
        return
      }
      this.checkAll()
    },
    checkAll () {
      // 提交实名认证
      let token = localStorage.token
      let prams = {
        name: this.smcname,
        receivesAddress: '',
        tcr20WalletAddress: '',
        email: this.emailval,
        contact: this.smcontest,
        bankCardName: '',
        bankCardNo: '',
        businessLicenseUrl: '',
        businessLicenseSaveUrl: '',
        code: this.emailcode,
        companyType: '', // 公司类型
        remark: '', // 备注
        businessRegisFrontUrl: [], // 营业登记照访问url
        businessRegisUrl: [] // 营业登记照保存url
      }
      if (this.areaIndex === 1) {
        // prams.name = this.smcname
        prams.receivesAddress = this.smaddress
        // prams.tcr20WalletAddress = this.packet
        prams.bankCardName = this.smbank
        prams.bankCardNo = this.Smzh
        prams.businessLicenseUrl = this.ZZfileUrl
        prams.businessLicenseSaveUrl = this.ZZsaveUrl
        // prams.code = this.emailcode
        prams.remark = this.notes
        prams.companyType = this.areaIndex
      } else if (this.areaIndex === 2) {
        // prams.name = this.smcname
        prams.companyType = this.areaIndex
        prams.tcr20WalletAddress = this.packet
        prams.businessRegisFrontUrl = this.BRlicenseUrl
        prams.businessRegisUrl = this.BRsaveUrl
      }
      this.$axios({
        method: 'post',
        url: apis.realAuthApi,
        data: prams,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((r) => {
          console.log(r)
          if (r.status === 200) {
            this.$message.info({
              content: this.$t('hint63'),
              background: true,
              duration: 3
            })
            EventBus.$emit('addsubmit')
            EventBus.$emit('rzsuccess')
            localStorage.setItem('real', true)
            this.rzopen = false
            this.real = true
          }
        })
        .catch((err) => {
          this.$message.error({
            content: this.$t('hint9'),
            background: true
          })
        })
      console.log('rucan:', prams)
    },

    SQcanle () {
      this.Sqztxm = false
      // console.log('formData:', this.ruleForm)
      this.ruleForm.Sqcheckbox = false
    },
    closeXY () {
      this.Sqztxm = false
      this.ruleForm.Sqcheckbox = false
    },
    SQcanle2 () {
      this.lookmainbody = false
    },
    oktelphone () {
      let that = this
      console.log(this.ruleForm.telcode)
      let token = localStorage.token
      let prams = {
        code: this.telcode,
        type: 2,
        login: this.ruleForm.tlephone
      }
      this.$axios({
        method: 'post',
        url: apis.emailOrSmsAuthApi,
        data: prams,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        console.log(r)
        if (r.status === 200) {
          this.$message.info({
            content: this.$t('hint50'),
            background: true,
            duration: 3
          })
          (that.telcaptchas = [
            { num: '' },
            { num: '' },
            { num: '' },
            { num: '' },
            { num: '' },
            { num: '' }
          ]),
          (that.teldisgo = false)
        }
      })
    },
    adjust2 (index) {
      let dom = document.getElementById(
        'telcaptchas' + this.activeInput2
      )
      if (index !== this.activeInput2 && dom) {
        dom.focus()
      }
    },
    // 控制前后方向
    inputDirection2 (index) {
      let val = this.telcaptchas[index].num
      // 回退键处理
      if (event.keyCode === 8 && val === '') {
        // 重新校准
        let dom = document.getElementById('telcaptchas' + (index - 1))
        this.activeInput2 = index - 1
        if (dom) dom.focus()
      }
      if (event.keyCode != 8 && val != '') {
        let dom = document.getElementById('telcaptchas' + (index + 1))
        this.activeInput2 = index + 1
        if (dom) dom.focus()
      }
    },
    // 输入框相互联动
    inputFinash2 (index) {
      let val = this.telcaptchas[index].num
      this.activeInput2 = val ? index + 1 : index - 1
      let dom = document.getElementById(
        'telcaptchas' + this.activeInput2
      )
      if (dom) dom.focus()
      if (index === this.telcaptchas.length - 1) {
        let code = this.telcaptchas.map((x) => x.num).join('')
        if (code.length === 6) {
          console.log(code)
          this.telcode = code
          // this.emailcode = code;
        }
      }
    },
    adjust (index) {
      let dom = document.getElementById('captcha' + this.activeInput)
      if (index !== this.activeInput && dom) {
        dom.focus()
      }
    },
    // 控制前后方向
    inputDirection (index) {
      let val = this.captchas[index].num
      // 回退键处理
      if (event.keyCode === 8 && val === '') {
        // 重新校准
        let dom = document.getElementById('captcha' + (index - 1))
        this.activeInput = index - 1
        if (dom) dom.focus()
      }
      if (event.keyCode !== 8 && val !== '') {
        let dom = document.getElementById('captcha' + (index + 1))
        this.activeInput = index + 1
        if (dom) dom.focus()
      }
    },
    // 输入框相互联动
    inputFinash (index) {
      let val = this.captchas[index].num
      this.activeInput = val ? index + 1 : index - 1
      let dom = document.getElementById('captcha' + this.activeInput)
      if (dom) dom.focus()
      if (index === this.captchas.length - 1) {
        let code = this.captchas.map((x) => x.num).join('')
        if (code.length === 6) {
          console.log(code)
          this.emailcode = code
        }
      }
    },
    closeemadldialog () {
      this.email = false
    },
    submitEamil () {
      let that = this
      console.log(this.emailval)
      const TIME_COUNT = 60
      let params = {}
      params.email = that.emailval
      params.type = 2
      params.afs = {
        appKey: 'FFFF0N0000000000913F',
        scene: 'nvc_login'
      }
      that.$axios({
        method: 'post',
        url: apis.sendSmsAuthCodeOrEmail,
        data: params,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        console.log(res)
        if (res.data.bizCode === 200) {
          //    this.email = true
          // this.email=false
        }
      })
        .catch((err) => {
          this.$message.error({
            content: this.$t('hint41'),
            duration: 5
          })
          this.email = false
        })
      if (!that.timer) {
        that.Eamilcount = TIME_COUNT
        that.Eamilshow = false
        that.timer = setInterval(() => {
          if (
            that.Eamilcount > 0 &&
                            that.Eamilcount <= TIME_COUNT
          ) {
            that.Eamilcount--
          } else {
            that.Eamilshow = true
            clearInterval(that.timer)
            that.timer = null
          }
        }, 1000)
      }
    },
    emaildigo () {
      let that = this
      let myReg = /^(([a-zA-Z0-9_-]+\.)|[a-zA-Z0-9_-])+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/

      if (myReg.test(this.emailval)) {
        // return true;
        if (this.radio === 'zh-CN') {
          this.emailvaltitle = '已给' + this.emailval + '发送验证码'
        }
        if (this.radio === 'en-US') {
          this.emailvaltitle = 'Verification code has been sent to ' + this.emailval
        }
        console.log(this.emailval)
        const TIME_COUNT = 60
        let params = {}
        params.email = that.emailval
        params.type = 2
        params.afs = {
          appKey: 'FFFF0N0000000000913F',
          scene: 'nvc_login'
        }
        that.$axios({
          method: 'post',
          url: apis.sendSmsAuthCodeOrEmail,
          data: params,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          console.log(res)
          // this.email = true
          if (res.status === 200) {
            this.email = true
            // this.email=false
          }
        })
          .catch((err) => {
            this.$message.error({
              content: this.$t('hint41'),
              duration: 5
            })
            this.email = false
          })
        if (!that.timer) {
          that.Eamilcount = TIME_COUNT
          that.Eamilshow = false
          that.timer = setInterval(() => {
            if (
              that.Eamilcount > 0 &&
                            that.Eamilcount <= TIME_COUNT
            ) {
              that.Eamilcount--
            } else {
              that.Eamilshow = true
              clearInterval(that.timer)
              that.timer = null
            }
          }, 1000)
        }
      } else {
        this.$message.info({
          content: this.$t('hint64'),
          background: true,
          duration: 5
        })
        // myspan.innerText = "!";
        // return false;
      }
    },

    bindteldisgo () {
      let that = this
      let myReg = /^[1][3,4,5,6,7,8][0-9]{9}$/
      if (myReg.test(this.ruleForm.tlephone)) {
        // return true;
        if (this.radio === 'zh-CN') {
          this.telvaltitle = '已给' + this.ruleForm.tlephone + '发送验证码'
        }
        if (this.radio === 'en-US') {
          this.telvaltitle = 'Verification code has been sent to ' + this.ruleForm.tlephone
        }
        this.teldisgo = true

        const TIME_COUNT = 60
        let params = {}
        params.mobile = that.ruleForm.tlephone
        params.type = 1
        params.afs = {
          appKey: 'FFFF0N0000000000913F',
          scene: 'nvc_login'
        }
        that.$axios({
          method: 'post',
          url: apis.sendSmsAuthCodeOrEmail,
          data: params,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          console.log(res)
          if (res.data.bizCode === 200) {
          }
        })
        if (!that.timer) {
          that.telcount = TIME_COUNT
          that.telshow = false
          that.timer = setInterval(() => {
            if (that.telcount > 0 && that.telcount <= TIME_COUNT) {
              that.telcount--
            } else {
              that.telshow = true
              clearInterval(that.timer)
              that.timer = null
            }
          }, 1000)
        }
      } else {
        this.$message.info({
          content: this.$t('hint65'),
          background: true,
          duration: 5
        })
      }
    },
    zzimgyl () {
      window.open(this.ZZfileUrl, '_blank')
    },
    delzzimg () {
      // this.$refs.inputer2.inputDOM.files[0]=null
      this.ZZfileUrl = ''
      this.ZZsaveUrl = ''
      this.upFileList1 = {}
    },
    delBRlicense (val) {
      this.BRlicenseUrl.splice(val, 1)
      this.BRsaveUrl.splice(val, 1)
      this.upFileList7 = {}
    },
    checkUrl (url) {
      let strRegex = '^([hH][tT]{2}[pP]:\\/\\/|[hH][tT]{2}[pP][sS]:\\/\\/|www\\.)(([A-Za-z0-9-~]+)\\.)+[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]'
      let re = new RegExp(strRegex)
      if (re.test(url)) {
        return (true)
      } else {
        return (false)
      }
    },
    Sm5Urladdbtn () {
      if (this.ruleForm.Sm5Url !== '') {
        if (this.ruleForm.companySocialMediaUrl.length < 5) {
          this.ruleForm.companySocialMediaUrl.push(this.ruleForm.Sm5Url)
          this.ruleForm.Sm5Url = ''
        } else {
          this.$message.info({
            content: this.$t('hint66'),
            background: true,
            duration: 5
          })
        }
      } else {
        this.$message.info({
          content: this.$t('hint67'),
          background: true,
          duration: 5
        })
      }
    },
    zzdel2 (index) {
      this.ruleForm.companySocialMediaUrl.splice(index, 1)
      // this.companySocialMediaUrl = "";
    },
    delXdatalist (index) {
      console.log(index)
      this.datalxlist.splice(index, 1)
      console.log(this.datalxlist)
    },
    bindaddSm5x () {
      console.log(this.Sm5xinputval)
      if (this.Sm5xinputval !== '' && this.Sm5xinputval) {
        this.datalxlist.push(this.Sm5xinputval)
      } else {
        this.$message.info({
          content: this.$t('hint68'),
          background: true,
          duration: 3
        })
        console.log('标签不能为空!')
      }
      console.log(this.datalxlist)
      this.Sm5xinputval = ''
    },
    addXbian (index) {
      if (
        this.datalxlist.indexOf(this.dataStorageTypeList[index].name) !== -1
      ) {
        return
      } else {
        this.datalxlist.push(this.dataStorageTypeList[index].name)
      }
      console.log(this.datalxlist)
    },
    changSm5 (index) {
      this.changeIndex = index
    },
    goSqztxm (index) {
      // console.log(index)
      // this.changeIndex = index
      // this.Sqztxm = true
      // this.choseZT = false
      let token = localStorage.token
      let prams = {}
      this.$axios({
        method: 'post',
        url: apis.dataMainBodyApplyInfoByPidApi,
        data: prams,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((r) => {
          this.ruleForm.Sqcheckbox = false
          this.auditStatus = r.data.auditStatus
          this.changeIndex = r.data.dataType
          this.ruleForm.ZTSQsaveUrl = r.data.authorizationSaveUrl
          this.ruleForm.ZTSQfileUrl = r.data.grantAuthorizationUrl
          this.ruleForm.ZTZZfileUrl = r.data.businessLicenseUrl

          this.ruleForm.ZTZZsaveUrl = r.data.companyBusinessLicenseSaveUrl
          this.ruleForm.sqcnname = r.data.companyName
          this.Sqjsnl = r.data.companyScale
          this.ruleForm.Sqwzaddress = r.data.companySites
          if (r.data.companySocialMediaUrl === null) {
            this.ruleForm.companySocialMediaUrl = []
          } else {
            this.ruleForm.companySocialMediaUrl =
              r.data.companySocialMediaUrl
          }

          this.ruleForm.countindex = r.data.companyType
          this.ruleForm.tlephone = r.data.dataContactMobile
          this.ruleForm.otherPhone = r.data.dataContactMobile
          this.ruleForm.sqyxemail = r.data.mailbox
          this.ruleForm.sqxmname = r.data.dataContactName
          this.ruleForm.dataReferred = r.data.dataReferred
          this.ruleForm.sizeindex = r.data.dataSizeType
          if (r.data.dataTypes === null) {
            this.datalxlist = []
          } else {
            this.datalxlist = r.data.dataTypes
          }
          this.ZTSFsaveUrl = r.data.majorShareholderUrl
          this.ZTSFfileUrl = r.data.majorShareholderFrontUrl
          if (r.data.shareholderProofIdentityUrl === null || r.data.shareholderProofIdentityUrl === '' || r.data.shareholderProofIdentityUrl === undefined) {
            this.ruleForm.ZTGDfileUrl = []
            this.ruleForm.ZTGDsaveUrl = []
          } else {
            this.ruleForm.ZTGDfileUrl = r.data.shareholderProofIdentityUrl
            this.ruleForm.ZTGDsaveUrl = r.data.shareholdersHandheldIdentityUrl
          }
          this.ruleForm.ZTYBsaveUrl = r.data.dataSampleUrl
          this.ruleForm.ZTYBfileUrl = r.data.dataSampleFrontUrl
          this.Sqgd = r.data.shareholderStructure
          this.ruleForm.Sqgx = r.data.storageKnow
          this.ruleForm.Sqccxz = r.data.dataDescription
          this.ruleForm.Sqzyms = r.data.mainBusinessDescription
          this.changid = r.data.id
          this.remarks = r.data.remarks
          this.ruleForm.ZTBylawsfileUrl = r.data.bylawsFrontUrl // 章程/其他组织宪章性文件访问url 2
          this.ruleForm.ZTBylawssaveUrl = r.data.bylawsUrl // 章程/其他组织宪章性文件保存url 2
          this.ruleForm.ZTRBDfileUrl = r.data.memberOfTheBoardFrontUrl// 董事会成员名册访问url 2
          this.ruleForm.ZTRBDsaveUrl = r.data.memberOfTheBoardUrl // 董事会成员名册保存url 2
          this.ruleForm.ZTSFfileUrl = r.data.majorShareholderFrontUrl // 25%以上股权的自然人股东 ,身份证明或护照的访问url  2
          this.ruleForm.ZTSFsaveUrl = r.data.majorShareholderUrl // 25%以上股权的自然人股东 ,身份证明或护照的保存url  2
          this.ruleForm.ZTFRfileUrl = r.data.financialReportFrontUrl // 过去一个财务年度的财务报告访问url 2
          this.ruleForm.ZTFRsaveUrl = r.data.financialReportUrl // 过去一个财务年度的财务报告保存url 2
          this.ruleForm.ZTPAfileUrl = r.data.officeAddressFrontUrl // 办公地址证明访问url 2
          this.ruleForm.ZTPAsaveUrl = r.data.officeAddressUrl // 办公地址证明保存url 2
          console.log('1111', this.ruleForm, this.ruleForm.sqxmname)
        })
        .catch((err) => {
          this.ruleForm.auditStatus = ''
          this.changeIndex = 1
          this.ruleForm.ZTSQsaveUrl = ''
          this.ruleForm.ZTSQfileUrl = ''
          this.ruleForm.ZTZZfileUrl = ''
          this.ruleForm.ZTZZsaveUrl = ''
          this.ruleForm.sqcnname = ''
          this.ruleForm.Sqjsnl = ''
          this.ruleForm.Sqwzaddress = ''
          this.ruleForm.companySocialMediaUrl = []
          this.ruleForm.countindex = 1
          this.ruleForm.tlephone = ''
          this.ruleForm.otherPhone = ''
          this.ruleForm.sqyxemail = ''
          this.ruleForm.sqxmname = ''
          this.ruleForm.dataReferred = ''
          this.ruleForm.sizeindex = 1
          this.ruleForm.datalxlist = []
          this.ruleForm.ZTYBsaveUrl = ''
          this.ruleForm.ZTYBfileUrl = ''
          this.ruleForm.ZTSFsaveUrl = ''
          this.ruleForm.ZTSFfileUrl = ''
          this.ruleForm.ZTGDfileUrl = []
          this.ruleForm.ZTGDsaveUrl = []
          this.Sqgd = ''
          this.ruleForm.Sqgx = ''
          this.ruleForm.Sqccxz = ''
          this.ruleForm.Sqzyms = ''
          this.changid = null
          this.remarks = ''
          this.ruleForm.ZTBylawsfileUrl = '' // 章程/其他组织宪章性文件访问url 2
          this.ruleForm.ZTBylawssaveUrl = '' // 章程/其他组织宪章性文件保存url 2
          this.ruleForm.ZTRBDfileUrl = '' // 董事会成员名册访问url 2
          this.ruleForm.ZTRBDsaveUrl = '' // 董事会成员名册保存url 2
          this.ruleForm.ZTSFfileUrl = '' // 25%以上股权的自然人股东 ,身份证明或护照的访问url  2
          this.ruleForm.ZTSFsaveUrl = '' // 25%以上股权的自然人股东 ,身份证明或护照的保存url  2
          this.ruleForm.ZTFRfileUrl = '' // 过去一个财务年度的财务报告访问url 2
          this.ruleForm.ZTFRsaveUrl = ''// 过去一个财务年度的财务报告保存url 2
          this.ruleForm.ZTPAfileUrl = '' // 办公地址证明访问url 2
          this.ruleForm.ZTPAsaveUrl = '' // 办公地址证明保存url 2
        })
    },
    closeZTdialog () {
      let token = localStorage.token
      let parms = {
        type: 2,
        flag: true
      }
      if (this.checked2) {
        this.$axios({
          method: 'post',
          url: apis.updRemindStateApi,
          data: parms,
          headers: {
            'Content-Type': 'application/json',
            Bearer: token
          }
        }).then((res) => {
          console.log(res)
        })
      }
      this.openZT = false
    },
    closeSmdialog () {
      let token = localStorage.token
      let parms = {
        type: 1,
        flag: true
      }
      if (this.checked) {
        this.$axios({
          method: 'post',
          url: apis.updRemindStateApi,
          data: parms,
          headers: {
            'Content-Type': 'application/json',
            Bearer: token
          }
        }).then((res) => {
          console.log(res)
        })
      }
      this.openSm = false
    },
    format (percentage) {
      return percentage === 100 ? this.$t('upLoaded') : `${percentage}%`
    },
    xzmb () {
      // if (this.ruleForm.countindex === 1) {
      window.location.href = 'https://bytebase-1304741688.cos.ap-shanghai.myqcloud.com/%E6%95%B0%E6%8D%AE%E4%B8%BB%E4%BD%93%E5%AF%B9%E6%95%B0%E6%8D%AE%E8%81%94%E7%B3%BB%E4%BA%BA%E7%9A%84%E6%8E%88%E6%9D%83%E4%B9%A6V2.0.docx'
      // } else if (this.ruleForm.countindex !== 1) {
      // window.location.href = 'https://bytebase-1304741688.cos.ap-shanghai.myqcloud.com/%E6%95%B0%E6%8D%AE%E4%B8%BB%E4%BD%93%E5%AF%B9%E6%95%B0%E6%8D%AE%E8%81%94%E7%B3%BB%E4%BA%BA%E7%9A%84%E6%8E%88%E6%9D%83%E4%B9%A6V2.2.docx'
      // }
      // window.location.href =
      //           'https://bytebase-1304741688.cos.ap-shanghai.myqcloud.com/%E6%95%B0%E6%8D%AE%E8%B4%9F%E8%B4%A3%E4%BA%BA%E6%8E%88%E6%9D%83%E4%B9%A6V1.0.docx'
    },
    downloadModel () {
      // window.location.href = 'https://bytebase-1304741688.cos.ap-shanghai.myqcloud.com/ByteBase%E6%95%B0%E6%8D%AE%E4%B8%BB%E4%BD%93%E7%94%B3%E8%AF%B7%E6%A8%A1%E7%89%88.docx'
      let routeUrl = this.$router.resolve({
        path: '/preview'
      })
      window.open(routeUrl.href, `_blank`)
    },
    handleAvatarSuccess (res, file) {
      this.ruleForm.ZTZZfileUrl = URL.createObjectURL(file.raw)
    },
    handleFileChange (e) {
      console.log(5555)
      let token = localStorage.token
      let inputDOM = this.$refs.inputer
      this.file = inputDOM.files[0] // 通过DOM取文件数据
      this.formData = new FormData() // new一个formData事件
      this.formData.append('file', this.file) // 将file属性添加到formData里
      let time = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      let item = {
        percentage: 0,
        name: this.file.name,
        status: null,
        loading: true,
        succese: false,
        cell: false,
        time: time,
        source: null
      }
      this.upFileList1 = item
      let sizes = this.file.size > 5242880
      let aa = this.file.name.toLowerCase().split('.')[1]
      if (aa === 'gif' || aa === 'jpg' || aa === 'bmp' || aa === 'png' || aa === 'jpeg') {
        if (sizes) {
          this.$message.error({
            content: this.$t('hint71'),
            background: true,
            duration: 3
          })
        } else {
          this.$axios({
            method: 'post',
            url: apis.uploadAccessoryApi,
            data: this.formData,
            headers: {
              'Content-Type': 'multipart/form-data',
              Bearer: token
            },
            onUploadProgress: progressEvent => {
              let complete = (progressEvent.loaded / progressEvent.total).toFixed(2) * 100
              item.percentage = complete
              if (item.percentage >= 100) {
                item.status = 'success'
              } else {
                item.status = 'exception'
              }
            }
          }).then((r) => {
            console.log(r)
            if (r.status === 200) {
              document.getElementById('upfile').value = null
              let fileName = r.data.saveUrl.lastIndexOf('.') // 取到文件名开始到最后一个点的长度
              let fileNameLength = r.data.saveUrl.length // 取到文件名长度
              let fileFormat = r.data.saveUrl.substring(
                fileName + 1,
                fileNameLength
              )
              console.log(fileFormat)
              this.ZZfileUrl = r.data.fileUrl
              this.ZZsaveUrl = r.data.saveUrl
              this.ZZfileFormat = fileFormat
            }
          }).catch((err) => {
            item.percentage = 0
            item.status = 'exception'
            item.loading = false
            this.$message.error({
              content: this.$t('hint119'),
              duration: 5
            })
          })
        }
      } else {
        console.log('文件格式', aa)
        this.$message.error({
          content: this.$t('hint70'),
          background: true,
          duration: 3
        })
      }
    },
    handleFileChange2 (e) {
      // 最新的营业执照或登记证书
      let token = localStorage.token
      let inputDOM = this.$refs.inputer2
      this.file = inputDOM.files[0] // 通过DOM取文件数据
      this.formData = new FormData() // new一个formData事件
      this.formData.append('file', this.file) // 将file属性添加到formData里
      // console.log(233, this.file.size > 10485760)
      let sizes = this.file.size > 10485760
      let aa = this.file.name.toLowerCase().split('.')[1]
      let time = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      let item = {
        percentage: 0,
        name: this.file.name,
        loading: true,
        succese: false,
        cell: false,
        time: time,
        source: null
      }
      this.upFileList2 = item
      if (aa === 'gif' || aa === 'jpg' || aa === 'bmp' || aa === 'png' || aa === 'jpeg') {
        if (sizes) {
          this.$message.error({
            content: this.$t('hint71'),
            background: true,
            duration: 3
          })
        } else {
          this.$axios({
            method: 'post',
            url: apis.uploadAccessoryApi,
            data: this.formData,
            onUploadProgress: progressEvent => {
              // progressEvent.loaded:已上传文件大小
              // progressEvent.total:被上传文件的总大小
              let complete = (progressEvent.loaded / progressEvent.total).toFixed(2) * 100
              item.percentage = complete
              if (item.percentage >= 100) {
                item.status = 'success'
              } else {
                item.status = 'exception'
              }
            },
            headers: {
              'Content-Type': 'multipart/form-data',
              Bearer: token
            }
          }).then((r) => {
            // console.log(r)
            if (r.status === 200) {
              document.getElementById('upfile2').value = null
              let fileName = r.data.saveUrl.lastIndexOf('.') // 取到文件名开始到最后一个点的长度
              let fileNameLength = r.data.saveUrl.length // 取到文件名长度
              let fileFormat = r.data.saveUrl.substring(
                fileName + 1,
                fileNameLength
              )
              console.log(fileFormat)
              this.ruleForm.ZTZZfileUrl = r.data.fileUrl
              this.ruleForm.ZTZZfileFormat = fileFormat
              this.ruleForm.ZTZZsaveUrl = r.data.saveUrl
              this.$refs['ruleForm'].clearValidate(['ZTZZfileUrl'])
              // this.ZTZZfileUrl = r.data.fileUrl
              // this.ZTZZsaveUrl = r.data.saveUrl
              // this.ZTZZfileFormat = fileFormat
            }
          }).catch((err) => {
            // item.percentage = 0
            item.status = 'exception'
            item.loading = false
            this.$message.error({
              content: this.$t('hint119'),
              duration: 5
            })
          })
        }
      } else {
        console.log('文件格式', aa)
        this.$message.error({
          content: this.$t('hint70'),
          background: true,
          duration: 3
        })
      }
    },
    handleFileChange3 (e) {
      // 申请数据主体上传附件 授权证明
      let token = localStorage.token
      let inputDOM = this.$refs.inputer3
      this.file = inputDOM.files[0] // 通过DOM取文件数据
      this.formData = new FormData() // new一个formData事件
      this.formData.append('file', this.file) // 将file属性添加到formData里
      let time = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      let item = {
        percentage: 0,
        name: this.file.name,
        loading: true,
        succese: false,
        cell: false,
        time: time,
        source: null
      }
      this.upFileList3 = item
      let sizes = this.file.size > 10485760
      let aa = this.file.name.toLowerCase().split('.')[1]
      if (aa === 'gif' || aa === 'jpg' || aa === 'bmp' || aa === 'png' || aa === 'jpeg') {
        if (sizes) {
          this.$message.error({
            content: this.$t('hint71'),
            background: true,
            duration: 5
          })
        } else {
          this.$axios({
            method: 'post',
            url: apis.uploadAccessoryApi,
            data: this.formData,
            headers: {
              'Content-Type': 'multipart/form-data',
              Bearer: token
            },
            onUploadProgress: progressEvent => {
              // progressEvent.loaded:已上传文件大小
              // progressEvent.total:被上传文件的总大小
              let complete = (progressEvent.loaded / progressEvent.total).toFixed(2) * 100
              item.percentage = complete
              if (item.percentage >= 100) {
                item.status = 'success'
              } else {
                item.status = 'exception'
              }
            }
          }).then((r) => {
            console.log(r)
            if (r.status === 200) {
              document.getElementById('upfile3').value = null
              let fileName = r.data.saveUrl.lastIndexOf('.') // 取到文件名开始到最后一个点的长度
              let fileNameLength = r.data.saveUrl.length // 取到文件名长度
              let fileFormat = r.data.saveUrl.substring(
                fileName + 1,
                fileNameLength
              )
              this.ruleForm.ZTSQfileUrl = r.data.fileUrl
              this.ruleForm.ZTSQsaveUrl = r.data.saveUrl
              this.ruleForm.ZTSQfileFormat = fileFormat
              this.$refs['ruleForm'].clearValidate(['ZTSQfileUrl'])
              // this.$refs.examine.clearValidate('ZTSQfileUrl')
            }
          }).catch((err) => {
            // item.percentage = 0
            item.status = 'exception'
            item.loading = false
            this.$message.error({
              content: this.$t('hint119'),
              duration: 5
            })
          })
        }
      } else {
        console.log('文件格式', aa)
        this.$message.error({
          content: this.$t('hint70'),
          background: true,
          duration: 5
        })
      }
    },
    handleFileChange4 (e) {
      // 申请数据主体上传附件 25%股东身份证明
      let token = localStorage.token
      let inputDOM = this.$refs.inputer4
      this.file = inputDOM.files[0] // 通过DOM取文件数据
      this.formData = new FormData() // new一个formData事件
      this.formData.append('file', this.file) // 将file属性添加到formData里
      let time = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      let item = {
        percentage: 0,
        name: this.file.name,
        loading: true,
        succese: false,
        cell: false,
        time: time,
        source: null
      }
      this.upFileList4 = item
      let sizes = this.file.size > 10485760
      let aa = this.file.name.toLowerCase().split('.')[1]
      if (aa === 'gif' || aa === 'jpg' || aa === 'bmp' || aa === 'png' || aa === 'jpeg') {
        if (sizes) {
          this.$message.error({
            content: this.$t('hint71'),
            background: true,
            duration: 5
          })
        } else {
          this.$axios({
            method: 'post',
            url: apis.uploadAccessoryApi,
            data: this.formData,
            headers: {
              'Content-Type': 'multipart/form-data',
              Bearer: token
            },
            onUploadProgress: progressEvent => {
              // progressEvent.loaded:已上传文件大小
              // progressEvent.total:被上传文件的总大小
              let complete = (progressEvent.loaded / progressEvent.total).toFixed(2) * 100
              item.percentage = complete
              if (item.percentage >= 100) {
                item.status = 'success'
              } else {
                item.status = 'exception'
              }
            }
          }).then((r) => {
            console.log(r)
            if (r.status === 200) {
              document.getElementById('upfile4').value = null
              let fileName = r.data.saveUrl.lastIndexOf('.') // 取到文件名开始到最后一个点的长度
              let fileNameLength = r.data.saveUrl.length // 取到文件名长度
              let fileFormat = r.data.saveUrl.substring(
                fileName + 1,
                fileNameLength
              )
              this.ruleForm.ZTSFfileUrl = r.data.fileUrl
              this.ruleForm.ZTSFsaveUrl = r.data.saveUrl
              this.ruleForm.ZTSFfileFormat = fileFormat
            }
          }).catch((err) => {
            // item.percentage = 0
            item.status = 'exception'
            item.loading = false
            this.$message.error({
              content: this.$t('hint119'),
              duration: 5
            })
          })
        }
      } else {
        console.log('文件格式', aa)
        this.$message.error({
          content: this.$t('hint70'),
          background: true,
          duration: 5
        })
      }
    },
    handleFileChange5 (e) {
      // 申请数据主体上传附件 股东证明
      if (this.ZTGDfileUrl.length >= 5) {
        return
      }
      let token = localStorage.token
      let inputDOM = this.$refs.inputer5
      this.file = inputDOM.files[0] // 通过DOM取文件数据
      this.formData = new FormData() // new一个formData事件
      this.formData.append('file', this.file) // 将file属性添加到formData里
      let time = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      let item = {
        percentage: 0,
        name: this.file.name,
        loading: true,
        succese: false,
        cell: false,
        time: time,
        source: null
      }
      this.upFileList5 = item
      this.$axios({
        method: 'post',
        url: apis.uploadAccessoryApi,
        data: this.formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Bearer: token
        },
        onUploadProgress: progressEvent => {
          // progressEvent.loaded:已上传文件大小
          // progressEvent.total:被上传文件的总大小
          let complete = (progressEvent.loaded / progressEvent.total).toFixed(2) * 100
          item.percentage = complete
          if (item.percentage >= 100) {
            item.status = 'success'
          } else {
            item.status = 'exception'
          }
        }
      }).then((r) => {
        console.log(r)
        if (r.status === 200) {
          document.getElementById('upfile5').value = null
          let fileName = r.data.saveUrl.lastIndexOf('.') // 取到文件名开始到最后一个点的长度
          let fileNameLength = r.data.saveUrl.length // 取到文件名长度
          let fileFormat = r.data.saveUrl.substring(
            fileName + 1,
            fileNameLength
          )
          this.ruleForm.ZTGDfileUrl.push(r.data.fileUrl)
          this.ruleForm.ZTGDsaveUrl.push(r.data.saveUrl)
          this.ruleForm.ZTGDfileFormat = fileFormat
        }
      }).catch((err) => {
        // item.percentage = 0
        item.status = 'exception'
        item.loading = false
        this.$message.error({
          content: this.$t('hint119'),
          duration: 5
        })
      })
    },
    handleFileChange6 (e) {
      // 申请数据主体上传附件 样本数据
      let token = localStorage.token
      let inputDOM = this.$refs.inputer6
      this.file = inputDOM.files[0] // 通过DOM取文件数据
      console.log('数据', this.file)
      this.formData = new FormData() // new一个formData事件
      this.formData.append('file', this.file) // 将file属性添加到formData里
      let time = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      let item = {
        percentage: 0,
        name: this.file.name,
        loading: true,
        succese: false,
        cell: false,
        time: time,
        source: null
      }
      this.upFileList6 = item
      let sizes = this.file.size // 文件大小
      let aa = this.file.name.toLowerCase().split('.')[1] // 文件格式
      let fileArray = [...this.txt, ...this.isolist, ...this.video, ...this.avdeo, ...this.compression, ...this.pdf, ...this.picture]
      console.log('验证:', fileArray.includes(aa), fileArray)
      if (this.compression.includes(aa)) {
        // 压缩文件
        if (sizes > 20971520) {
          this.$message.error({
            content: this.$t('hint72'),
            background: true,
            duration: 5
          })
          return
        }
      } else if (this.picture.includes(aa)) {
        // 图片文件
        if (sizes > 5242880) {
          this.$message.error({
            content: this.$t('hint69'),
            background: true,
            duration: 5
          })
          return
        }
      } else if (this.pdf.includes(aa)) {
        // pdf
        if (sizes > 10485760) {
          this.$message.error({
            content: this.$t('hint73'),
            background: true,
            duration: 5
          })
          return
        }
      } else if (this.txt.includes(aa)) {
        // 文本文件
        if (sizes > 512000) {
          this.$message.error({
            content: this.$t('hint74'),
            background: true,
            duration: 5
          })
          return
        }
      } else if (this.isolist.includes(aa)) {
        // 镜像文件
        if (sizes > 20971520) {
          this.$message.error({
            content: this.$t('hint75'),
            background: true,
            duration: 5
          })
          return
        }
      } else if (this.avdeo.includes(aa)) {
        // 音频文件
        if (sizes > 5242880) {
          this.$message.error({
            content: this.$t('hint76'),
            background: true,
            duration: 5
          })
          return
        }
      } else if (this.video.includes(aa)) {
        // 视频文件
        if (sizes > 10485760) {
          this.$message.error({
            content: this.$t('hint77'),
            background: true,
            duration: 5
          })
          return
        }
      }
      this.$axios({
        method: 'post',
        url: apis.uploadAccessoryApi,
        data: this.formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Bearer: token
        },
        onUploadProgress: progressEvent => {
          // progressEvent.loaded:已上传文件大小
          // progressEvent.total:被上传文件的总大小
          let complete = (progressEvent.loaded / progressEvent.total).toFixed(2) * 100
          item.percentage = complete
          if (item.percentage >= 100) {
            item.status = 'success'
          } else {
            item.status = 'exception'
          }
        }
      }).then((r) => {
        console.log(r)
        if (r.status === 200) {
          document.getElementById('upfile6').value = null
          let fileName = r.data.saveUrl.lastIndexOf('.') // 取到文件名开始到最后一个点的长度
          let fileNameLength = r.data.saveUrl.length // 取到文件名长度
          let fileFormat = r.data.saveUrl.substring(
            fileName + 1,
            fileNameLength
          )
          this.ruleForm.ZTYBfileUrl = r.data.fileUrl
          this.ruleForm.ZTYBsaveUrl = r.data.saveUrl
          this.ruleForm.ZTYBfileFormat = fileFormat
          this.$refs['ruleForm'].clearValidate(['ZTYBfileUrl'])
        }
      }).catch((err) => {
        // item.percentage = 0
        item.status = 'exception'
        item.loading = false
        this.$message.error({
          content: this.$t('hint119'),
          duration: 5
        })
      })
    },
    handleFileChange7 (e) {
      // 上传营业执照
      console.log(5555)
      let token = localStorage.token
      let inputDOM = this.$refs.inputer7
      this.file = inputDOM.files[0] // 通过DOM取文件数据
      this.formData = new FormData() // new一个formData事件
      this.formData.append('file', this.file) // 将file属性添加到formData里
      let time = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      let item = {
        percentage: 0,
        name: this.file.name,
        status: null,
        loading: true,
        succese: false,
        cell: false,
        time: time,
        source: null
      }
      this.upFileList7 = item
      this.$axios({
        method: 'post',
        url: apis.uploadAccessoryApi,
        data: this.formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Bearer: token
        },
        onUploadProgress: progressEvent => {
          // progressEvent.loaded:已上传文件大小
          // progressEvent.total:被上传文件的总大小
          let complete = (progressEvent.loaded / progressEvent.total).toFixed(2) * 100
          item.percentage = complete
          if (item.percentage >= 100) {
            item.status = 'success'
          } else {
            item.status = 'exception'
          }
        }
      }).then((r) => {
        console.log(r)
        if (r.status === 200) {
          document.getElementById('upfile7').value = null
          let fileName = r.data.saveUrl.lastIndexOf('.') // 取到文件名开始到最后一个点的长度
          let fileNameLength = r.data.saveUrl.length // 取到文件名长度
          let fileFormat = r.data.saveUrl.substring(
            fileName + 1,
            fileNameLength
          )
          console.log(fileFormat)
          this.BRlicenseUrl.push(r.data.fileUrl)
          this.BRsaveUrl.push(r.data.saveUrl)
          this.BRlicenseFormat = fileFormat
        }
      }).catch((err) => {
        item.percentage = 0
        item.status = 'exception'
        item.loading = false
        this.$message.error({
          content: this.$t('hint119'),
          duration: 5
        })
      })
    },
    handleFileChange8 (e) {
      // 申请数据主体上传附件 章程
      let token = localStorage.token
      let inputDOM = this.$refs.inputer8
      this.file = inputDOM.files[0] // 通过DOM取文件数据
      this.formData = new FormData() // new一个formData事件
      this.formData.append('file', this.file) // 将file属性添加到formData里
      let time = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      let item = {
        percentage: 0,
        name: this.file.name,
        loading: true,
        succese: false,
        cell: false,
        time: time,
        source: null
      }
      this.upFileList8 = item
      this.$axios({
        method: 'post',
        url: apis.uploadAccessoryApi,
        data: this.formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Bearer: token
        },
        onUploadProgress: progressEvent => {
          // progressEvent.loaded:已上传文件大小
          // progressEvent.total:被上传文件的总大小
          let complete = (progressEvent.loaded / progressEvent.total).toFixed(2) * 100
          item.percentage = complete
          if (item.percentage >= 100) {
            item.status = 'success'
          } else {
            item.status = 'exception'
          }
        }
      }).then((r) => {
        console.log(r)
        if (r.status === 200) {
          document.getElementById('upfile8').value = null
          let fileName = r.data.saveUrl.lastIndexOf('.') // 取到文件名开始到最后一个点的长度
          let fileNameLength = r.data.saveUrl.length // 取到文件名长度
          let fileFormat = r.data.saveUrl.substring(
            fileName + 1,
            fileNameLength
          )
          this.ruleForm.ZTBylawsfileUrl = r.data.fileUrl
          this.ruleForm.ZTBylawssaveUrl = r.data.saveUrl
          this.ruleForm.ZTBylawsfileFormat = fileFormat
        }
      }).catch((err) => {
        // item.percentage = 0
        item.status = 'exception'
        item.loading = false
        this.$message.error({
          content: this.$t('hint119'),
          duration: 5
        })
      })
    },
    handleFileChange9 (e) {
      // 申请数据主体上传附件 董事会成员名册
      let token = localStorage.token
      let inputDOM = this.$refs.inputer9
      this.file = inputDOM.files[0] // 通过DOM取文件数据
      this.formData = new FormData() // new一个formData事件
      this.formData.append('file', this.file) // 将file属性添加到formData里
      let time = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      let item = {
        percentage: 0,
        name: this.file.name,
        loading: true,
        succese: false,
        cell: false,
        time: time,
        source: null
      }
      this.upFileList9 = item
      this.$axios({
        method: 'post',
        url: apis.uploadAccessoryApi,
        data: this.formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Bearer: token
        },
        onUploadProgress: progressEvent => {
          // progressEvent.loaded:已上传文件大小
          // progressEvent.total:被上传文件的总大小
          let complete = (progressEvent.loaded / progressEvent.total).toFixed(2) * 100
          item.percentage = complete
          if (item.percentage >= 100) {
            item.status = 'success'
          } else {
            item.status = 'exception'
          }
        }
      }).then((r) => {
        console.log(r)
        if (r.status === 200) {
          document.getElementById('upfile9').value = null
          let fileName = r.data.saveUrl.lastIndexOf('.') // 取到文件名开始到最后一个点的长度
          let fileNameLength = r.data.saveUrl.length // 取到文件名长度
          let fileFormat = r.data.saveUrl.substring(
            fileName + 1,
            fileNameLength
          )
          this.ruleForm.ZTRBDfileUrl = r.data.fileUrl
          this.ruleForm.ZTRBDsaveUrl = r.data.saveUrl
          this.ruleForm.ZTRBDfileFormat = fileFormat
        }
      }).catch((err) => {
        // item.percentage = 0
        item.status = 'exception'
        item.loading = false
        this.$message.error({
          content: this.$t('hint119'),
          duration: 5
        })
      })
    },
    handleFileChange10 (e) {
      // 申请数据主体上传附件 财务报告
      let token = localStorage.token
      let inputDOM = this.$refs.inputer10
      this.file = inputDOM.files[0] // 通过DOM取文件数据
      this.formData = new FormData() // new一个formData事件
      this.formData.append('file', this.file) // 将file属性添加到formData里
      let time = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      let item = {
        percentage: 0,
        name: this.file.name,
        loading: true,
        succese: false,
        cell: false,
        time: time,
        source: null
      }
      this.upFileList10 = item
      this.$axios({
        method: 'post',
        url: apis.uploadAccessoryApi,
        data: this.formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Bearer: token
        },
        onUploadProgress: progressEvent => {
          // progressEvent.loaded:已上传文件大小
          // progressEvent.total:被上传文件的总大小
          let complete = (progressEvent.loaded / progressEvent.total).toFixed(2) * 100
          item.percentage = complete
          if (item.percentage >= 100) {
            item.status = 'success'
          } else {
            item.status = 'exception'
          }
        }
      }).then((r) => {
        console.log(r)
        if (r.status === 200) {
          document.getElementById('upfile10').value = null
          let fileName = r.data.saveUrl.lastIndexOf('.') // 取到文件名开始到最后一个点的长度
          let fileNameLength = r.data.saveUrl.length // 取到文件名长度
          let fileFormat = r.data.saveUrl.substring(
            fileName + 1,
            fileNameLength
          )
          this.ruleForm.ZTFRfileUrl = r.data.fileUrl
          this.ruleForm.ZTFRsaveUrl = r.data.saveUrl
          this.ruleForm.ZTFRfileFormat = fileFormat
        }
      }).catch((err) => {
        // item.percentage = 0
        item.status = 'exception'
        item.loading = false
        this.$message.error({
          content: this.$t('hint119'),
          duration: 5
        })
      })
    },
    handleFileChange11 (e) {
      // 申请数据主体上传附件 25%股东身份证明
      let token = localStorage.token
      let inputDOM = this.$refs.inputer11
      this.file = inputDOM.files[0] // 通过DOM取文件数据
      this.formData = new FormData() // new一个formData事件
      this.formData.append('file', this.file) // 将file属性添加到formData里
      let time = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      let item = {
        percentage: 0,
        name: this.file.name,
        loading: true,
        succese: false,
        cell: false,
        time: time,
        source: null
      }
      this.upFileList11 = item
      this.$axios({
        method: 'post',
        url: apis.uploadAccessoryApi,
        data: this.formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Bearer: token
        },
        onUploadProgress: progressEvent => {
          // progressEvent.loaded:已上传文件大小
          // progressEvent.total:被上传文件的总大小
          let complete = (progressEvent.loaded / progressEvent.total).toFixed(2) * 100
          item.percentage = complete
          if (item.percentage >= 100) {
            item.status = 'success'
          } else {
            item.status = 'exception'
          }
        }
      }).then((r) => {
        console.log(r)
        if (r.status === 200) {
          document.getElementById('upfile11').value = null
          let fileName = r.data.saveUrl.lastIndexOf('.') // 取到文件名开始到最后一个点的长度
          let fileNameLength = r.data.saveUrl.length // 取到文件名长度
          let fileFormat = r.data.saveUrl.substring(
            fileName + 1,
            fileNameLength
          )
          this.ruleForm.ZTPAfileUrl = r.data.fileUrl
          this.ruleForm.ZTPAsaveUrl = r.data.saveUrl
          this.ZTPAfileFormat = fileFormat
        }
      }).catch((err) => {
        // item.percentage = 0
        item.status = 'exception'
        item.loading = false
        this.$message.error({
          content: this.$t('hint119'),
          duration: 5
        })
      })
    },
    rzclick () {
      this.openSm = false
      this.rzopen = true
      this.closeSmdialog()
    },
    rzclick2 () {
      this.openZT = false
      this.rzopen = this.Sqztxm
      this.closeZTdialog()
    },
    SmRz () {
      this.rzopen = true
      // EventBus.$emit("SmRz");
    },
    Cunzeng () {
      if (localStorage.loginName === undefined) {
        this.dialogVisible = true
        this.logintype = 0
        this.checkcunzeng = true
      } else {
        console.log(456)
        if (this.$route.fullPath !== '/home') {
          this.$router.push('/home')
        }
      }
    },
    openNode () {
      this.nodeApplicate = true
    },
    closepop2 () {
      this.dialogVisible = false
    },
    closepop () {
      console.log('123')
      this.xuanzhuan = 2
      this.dialogVisible = false
      this.categoryIndex = this.$route.meta.index
      if (localStorage.loginName !== undefined) {
        var tel = localStorage.loginName
        tel = '' + tel
        var tel1 = tel.substr(0, 3) + '****' + tel.substr(7)
        this.mobile = tel1
      }

      this.languagetype = localStorage.languagetype
      this.changelanguagetype(this.languagetype)
      let href = location.href
      if (href.indexOf('apiWord') !== -1) {
        this.typeApi = 2
      }
      this.islogin = false
      this.$router.push('/home')
    },
    gohome (index) {
      console.log('123')
      this.logintype = index
      // this.$router.push("/home");
      this.dialogVisible = !this.dialogVisible
    },
    checkindex (val, index) {
      // console.log('当前项:', val)
      val.checked = true
      this.title.forEach((e, v) => {
        if (v !== index) {
          e.checked = false
        }
      })
      // if (index === 0) {
      //   this.reload()
      //   location.reload()
      // }
      if (this.$route.path === '/dashboard' && index === 6) {
        return
      }
      if (this.$route.path === '/dashboard' && index !== 6) {
        this.$router.push('/')
        return
      }
      if (this.$route.path === '/news' && index === 4) {
        return
      }
      if (this.$route.path === '/news' && index !== 4) {
        this.$router.push('/')
        return
      }
      // console.log(this.$route)
      if (index === this.categoryIndex && index === 0) {
        return
      }
      if (index !== 4) {
        this.categoryIndex = index
      }

      if (index === 0) {
        if (this.$route.path === '/') {
        } else {
          this.$router.push('/')
        }
      }
      if (index === 0 && this.$route.fullPath === '/') {
        // document.body.scrollTop = 0
        // document.documentElement.scrollTop = 0
        document.querySelector('#Top').scrollIntoView({
          behavior: 'smooth'
        })
      }
      if (index === 0 && this.$route.fullPath !== '/') {
        this.$router.push('/')
        var time = setTimeout(() => {
          document.querySelector('#Top').scrollIntoView({
            behavior: 'smooth'
          })
          clearInterval(time)
        }, 100)
      }
      if (index === 1 && this.$route.fullPath === '/') {
        document.querySelector('#Solution').scrollIntoView({
          behavior: 'smooth'
        })
      }
      if (index === 1 && this.$route.fullPath !== '/') {
        this.$router.push('/')
        var time1 = setTimeout(() => {
          document.querySelector('#Solution').scrollIntoView({
            behavior: 'smooth'
          })
          clearInterval(time1)
        }, 100)
      }
      if (index === 2 && this.$route.fullPath === '/') {
        document.querySelector('#Service').scrollIntoView({
          behavior: 'smooth'
        })
      }
      if (index === 2 && this.$route.fullPath !== '/') {
        this.$router.push('/')
        var time2 = setTimeout(() => {
          document.querySelector('#Service').scrollIntoView({
            behavior: 'smooth'
          })
          clearInterval(time2)
        }, 100)
      }
      // if (index == 3 && this.$route.fullPath == "/") {
      //     document.querySelector("#Incentive").scrollIntoView({
      //         behavior: "smooth",
      //     });
      // }
      // if (index == 3 && this.$route.fullPath != "/") {
      //     this.$router.push("/");
      //     var time3 = setTimeout(() => {
      //         document.querySelector("#Incentive").scrollIntoView({
      //             behavior: "smooth",
      //         });
      //         clearInterval(time3);
      //     }, 100);
      // }
      if (index === 3 && this.$route.fullPath === '/') {
        document.querySelector('#Latest').scrollIntoView({
          behavior: 'smooth'
        })
      }
      if (index === 3 && this.$route.fullPath !== '/') {
        this.$router.push('/')
        var time4 = setTimeout(() => {
          document.querySelector('#Latest').scrollIntoView({
            behavior: 'smooth'
          })
          clearInterval(time4)
        }, 100)
      }
      if (index === 4 && this.$route.fullPath === '/') {
        document.querySelector('#About').scrollIntoView({
          behavior: 'smooth'
        })
      }
      if (index === 4 && this.$route.fullPath !== '/') {
        this.$router.push('/')
        var time5 = setTimeout(() => {
          document.querySelector('#About').scrollIntoView({
            behavior: 'smooth'
          })
          clearInterval(time5)
        }, 100)
      }
      if (index === 5) {
        // var openurl = window.open('_blank')
        // openurl.location.href = 'https://search.bytebase.cn/'
        this.$router.push('/searchEngine')
      }
      if (index === 6) {
        // this.$router.push('/dashboard')
        this.nodeApplicate = true
      }
    },
    submit () {
      this.$emit('onChange', this.inputSearchData)
    },
    clearInputFun () {
      this.inputSearchData = null
      this.searchInput = true
      this.$emit('onChange', this.inputSearchData)
    },
    setFun () {
      this.$message.info({
        content: this.$t('hint22'),
        background: true,
        duration: 5
      })
    },
    changelanguagetype (type) {
      if (type === '1') {
        this.$message.info({
          content: this.$t('hint22'),
          background: true,
          duration: 5
        })
      } else {
        this.languagetype = '2'
        localStorage.languagetype = '2'
        this.htmlWordData = this.$store.state.chineseData
        this.languageShow = true
      }
    },
    viewInfo () {
      let msg = {
        status: 1,
        key: null
      }
      let path = this.$route.path
      if (path !== '/home') {
        console.log('当前路径:', path)
        this.$router.push({
          name: 'home',
          params: msg
        })
      }
      if (path === '/home') {
        console.log('当前路径:', path)
        EventBus.$emit('partnerInfo', msg)
      }
      this.xuanzhuan = 2
    },
    // 退出登录 loginOutApi
    loginOutFun () {
      this.islogin = true
      this.checkcunzeng = false
      let token = localStorage.token
      let params = {}
      this.$axios({
        method: 'post',
        url: apis.loginOutApi,
        headers: {
          Bearer: token
        }
      })
        .then((res) => {
          this.islogin = true
          localStorage.clear()
          location.reload()
          if (this.$route.fullPath === '/') {
            if (localStorage.loginName !== undefined) {
              // location.reload()
              var tel = localStorage.loginName
              tel = '' + tel
              var tel1 =
                                tel.substr(0, 3) + '****' + tel.substr(7)
              this.mobile = tel1
              this.languagetype = localStorage.languagetype
              this.changelanguagetype(this.languagetype)
              let href = location.href
              if (href.indexOf('apiWord') !== -1) {
                this.typeApi = 2
              }
            } else {
              location.reload()
            }
          } else {
            EventBus.$emit('fix')
            this.$router.push('/')
          }
        })
        .catch((err) => {
          this.islogin = true
          this.$message.error({
            content: this.$t('hint42'),
            background: true
          })
        })
    },
    changApiFun (type) {
      this.typeApi = type
      if (type === 1) {
        this.$router.push({
          name: 'home'
        })
        localStorage.removeItem('selectId')
      } else {
        this.$router.push({
          name: 'apiWord'
        })
      }
    },
    searchFocusFun () {
      this.searchInput = true
    },
    // 搜素框 失去焦点
    searchloseFun () {
      this.searchInput = false
    },
    hidePanel (e) {
      if (this.xuanzhuan === 2) {
        return
      }
      if (!this.$refs.main.contains(e.target)) {
        this.xuanzhuan = 2
      }
    },
    showOutLoginFun () {
      if (this.xuanzhuan !== 1) {
        this.xuanzhuan = 1
        document.addEventListener('click', this.hidePanel, false)
      } else {
        this.xuanzhuan = 2
      }
    }
  }
}
</script>
