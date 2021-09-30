<style scoped>
  .buttom-pagination {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    height: 90px;
    width: calc(100% - 240px);
    padding-right: 50px;
    background-color: #FFFFFF;
  }
  .pagination {
    width: 100%;
    /*position: fixed;*/
    /*bottom: 0;*/
    background-color: #FFFFFF;
    text-align: center;
    padding: 10px 24px;
  }
.dxdtitle {
    height: 35px;
    width: 100px;
    border: 1px solid #e6e6e6;
    margin-left: 20px;
    padding-left: 10px;
    border-radius: 5px;
}
.allFileApp {
    width: 100%;
}
.tipsMsg {
  font-size: 12px;
  font-weight: 400;
  margin-top: 10px;
  color: #ef190f;
}
.el-icon--right {
    margin-left: auto;
    margin-right: 10px;
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
    box-shadow: 0px 1px 8px 0px rgba(209, 0, 0, 0.15);
}

input::-webkit-input-placeholder {
    color: #8f93a0;
    font-size: 14px;
}

.bannerRightHead {
    width: 100%;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e8eaec;
    padding: 0 32px 0 24px;
}

.actionBox {
    display: flex;
    align-items: center;
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
    padding-left: 10px;
    cursor: pointer;
    white-space: nowrap;
}
.upFileButton2 {
    width: 140px;
    height: 44px;
    /* background: linear-gradient(to left, #ef190f, #f04d30); */
    background-color: #d1d1d1;
    /* background: #EF190F; */
    border-radius: 4px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    padding-left: 10px;
    cursor: pointer;
    white-space: nowrap;
}

.upFileButton:hover {
    box-shadow: 0px 3px 10px 0px rgba(239, 25, 15, 0.4);
}

.upFileButton img {
    width: 24px;
    height: 24px;
    margin-right: 18px;
}
.upFileButton2 img {
    width: 24px;
    height: 24px;
    margin-right: 18px;
}

.upFileButtonEng {
    width: 146px;
}

.upFileButtonEng img {
    margin-right: 7px;
}

.selectButton {
    width: 34px;
    height: 34px;
    border-radius: 4px;
    border: 1px solid #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #333333;
}

.selectButton img {
    width: 24px;
    height: 24px;
}

.actionItem {
    height: 34px;
    background: rgba(240, 77, 48, 0.1);
    padding: 0 10px;
    line-height: 34px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ef190f;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 4px;
}
.actionItem2 {
  height: 34px;
  background: #d1d1d1;
  padding: 0 10px;
  line-height: 34px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 4px;
}

.actionItem:hover {
    background: rgba(240, 77, 48, 0.2);
}

.bannerRightInfo {
    margin-top: 8px;
    width: 100%;
    height: 40px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #8f93a0;
    padding: 0 24px;
    display: flex;
    align-items: center;
}

.table {
    width: 100%;
    padding: 0 20px 0 24px;
}

.tableHead {
    width: 100%;
    font-size: 13px;
    font-weight: 400;
    color: #8f93a0;
    height: 56px;
    display: flex;
    line-height: 56px;
    margin-bottom: 1px;
}

.tableSelectDiv {
    width: 16px;
    height: 16px;
    background: #ffffff;
    border-radius: 2px;
    border: 1px solid #cccccc;
}

.item1Img {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    overflow: hidden;
}

.item1 {
    width: 0.4rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item2 {
    width: 5.09rem;
    padding-left: 0.07rem;
    display: flex;
    align-items: center;
    color: #333333;
}

.item2 img {
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.12rem;
    display: inline-block;
}

.item3 {
    width: 1.55rem;
    padding-right: 0.2rem;
    text-align: center;
    /*line-height: 68px;*/
    display: inline-block;
    /*align-items: center;*/
}
.item7 {
    width: 2rem;
    padding-right: 0.2rem;
    text-align: center;
    /*line-height: 68px;*/
    display: inline-block;
    /*align-items: center;*/
    overflow: hidden;
}
.setHeight {
    line-height: 68px;
}

.item4 {
    width: 2rem;
    padding-right: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /*line-height: 68px;*/
}

.item4 img {
    width: 16px;
    height: 16px;
    margin-left: 1px;
}

.item5 {
    width: 2.5rem;
    padding-right: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /*line-height: 68px;*/
}

.item5 img {
    width: 16px;
    height: 16px;
    margin-left: 1px;
}

.item6 {
    margin-left: auto;
    width: 1.7rem;
    padding-right: 0.2rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    /*line-height: 68px;*/
}

.item6 img {
    width: 0.24rem;
    height: 0.24rem;
    cursor: pointer;
}

.tableItem {
    height: 68px;
    width: 100%;
    color: #8f93a0;
    border-bottom: 1px solid #f7f8fa;
    border-radius: 4px;
    display: flex;
    font-size: 14px;
}

.content {
    width: 100%;
    height: 6.3rem;
    margin-bottom: 90px;
    position: relative;
}

.contentScroll {
    overflow-y: scroll;
}

.contentScroll::-webkit-scrollbar {
    width: 8px;
    height: 854px;
    background: white;
    border-radius: 5px;
}

.contentScroll::-webkit-scrollbar-thumb {
    background: #d8d8d8;
    border-radius: 5px;
}

.tableItem:hover {
    background: #f7faf8;
}

.zhezhao {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
}

.nameBox {
    width: 400px;
    height: 203px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    border: 1px solid #aad3c1;
    padding: 15px 20px;
    margin: 0 auto;
    margin-top: 210px;
    position: relative;
}

.nameHead {
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #545767;
}

.nameHead img {
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.nameTitle {
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #545767;
    margin-top: 20px;
}

.nameInput {
    width: 100%;
    height: 35px;
    border: 1px solid #f04d30;
    /*去除未选中状态边框*/
    outline: none;
    /* 去除选中状态边框*/
    background-color: #ffffff;
    /* 透明背景*/
    color: #333333;
    padding: 8px 10px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 6px;
}

.nameInput:focus {
    color: #333333;
    box-shadow: 0px 1px 8px 0px rgba(255, 112, 86, 0.15);
}

.nameFoot {
    position: absolute;
    bottom: 10px;
    right: 15px;
    display: flex;
}

.nameFootCom {
    width: 120px;
    height: 40px;
    border-radius: 6px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    cursor: pointer;
}

.nameFootSure {
    color: #f04d30;
    background: white;
    border: 1px solid #f04d30;
    margin-right: 10px;
}

.nameFootCel {
    color: #ffffff;
    background: #f04d30;
}

.kongTable {
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #8f93a0;
    width: 200px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 40px;
    align-items: center;
}

.kongTableImg {
    width: 192px;
    height: 192px;
}

.kongTableSpan {
    margin-top: 5px;
}

.selectBox {
    padding: 10px;
    width: 470px;
    height: 200px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    border: 1px solid #d3aaaa;
    position: absolute;
    right: 29px;
    top: 62px;
}

.selectHead {
    display: flex;
    height: 18px;
    justify-content: flex-end;
}

.selectHead img {
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.selectItem {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    margin-bottom: 20px;
}

.selectTitle {
    color: #545767;
    width: 30px;
    margin-right: 15px;
}

.selectContent {
    width: 418px;
    display: flex;
    justify-content: space-between;
}

.ststusItem {
    min-width: 80px;
    height: 35px;
    border-radius: 6px;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: black;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
    padding: 0 4px;
    background: #f9f9f9;
}

.ststusItem:hover {
    background: #f6f6f6;
}

.ststusItemSelect {
    color: #ffffff !important;
    background: #ef190f !important;
}

.selectFoot {
    position: absolute;
    right: 15px;
    bottom: 15px;
    display: flex;
}

.selecFootCom {
    width: 76px;
    height: 32px;
    border-radius: 2px;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    line-height: 32px;
    cursor: pointer;
}

.selecFootSure {
    border: 1px solid black;
    color: black;
    margin-right: 10px;
}

.selecFootCel {
    background: #ef190f;
    color: #ffffff;
}

.upFileBox {
    position: fixed;
    top: 0;
    bottom: 0;
    right: -607px;
    width: 607px;
    background: rgba(249, 252, 252, 0.89);
    box-shadow: -2px 0px 10px 0px rgba(0, 0, 0, 0.1);
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 400;
    padding: 0 20px;
    transition: right linear 0.3s;
}

.upFileBoxShow {
    right: 0;
}

.upFileHead {
    width: 100%;
    height: 97px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    font-size: 26px;
    font-weight: 500;
    color: #545767;
}

.upFileHead img {
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.upFileType {
    margin-top: 15px;
    width: 100%;
    height: 234px;
    border-radius: 10px;
    border: 1px dashed rgba(32, 32, 32, 0.3);
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
}

.upFileTypeFile {
    border: 2px dashed #ef190f;
    background: rgba(255, 255, 255, 0.8);
}

.upFileTypeHead {
    width: 100%;
    height: 70px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 2px 10px 0px rgba(53, 108, 83, 0.1);
    border-radius: 10px 10px 0px 0px;
    padding: 0 150px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
}

.upFileTypeHeadItem {
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 7px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.upFileTypeHeadItem img {
    width: 100%;
    height: 100%;
}

.upFileBoxFoot {
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    /* justify-content: space-between; */
    padding: 0 44px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    margin-top: 20px;
}

.upFileBoxFootItem {
    position: relative;
    overflow: hidden;
    text-align: center;
    line-height: 50px;
    width: 228px;
    background: #ef190f;
    cursor: pointer;
    border-radius: 4px;
}

.upFileBoxFootItem:hover {
    box-shadow: 0px 3px 10px 0px rgba(255, 112, 86, 0.5);
}

.fileUpNone {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
}

.upFileBoxInfo {
    width: 100%;
    font-size: 16px;
    color: #545767;
    text-align: center;
    margin-top: 24px;
}

.tips {
  font-size: 14px;
  color: #545767;
  text-align: center;
}

.drogBox {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    color: #545767;
    background: rgba(255, 255, 255, 0.9);
}

.drogBox img {
    width: 60px;
    height: 60px;
    margin-top: 40px;
    margin-bottom: 15px;
}

.fileBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    margin-top: 20px;
    height: 478px;
}

.fileBoxScroll {
    overflow-y: scroll;
}

.fileBoxScroll::-webkit-scrollbar {
    width: 8px;
    background: rgba(249, 252, 252, 0.89);
    border-radius: 5px;
}

.fileBoxScroll::-webkit-scrollbar-thumb {
    background: #d8d8d8;
    border-radius: 5px;
}

.fileBoxLine {
    margin-bottom: 10px;
}

.fileBoxHead {
    width: 360px;
    font-size: 16px;
    color: #545767;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.fileBoxTime {
    font-size: 14px;
    color: #8f93a0;
    margin-top: 2px;
}

.setSpace {
  margin-left: 10px;
}

.fileBoxLine {
    width: 100%;
    height: 10px;
    background: #a1a1a1;
    border-radius: 2px;
    margin-top: 15px;
}

.fileBoxLineJinDu {
    background: #333333;
    height: 10px;
}

.fileBoxItem {
    position: relative;
    height: 99px;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
    background: white;
    padding: 0 15px;
}

.fileBoxItem:hover {
    box-shadow: 0px 2px 6px 0px rgba(53, 108, 83, 0.3);
}

.fileBoxItem_1 {
    display: flex;
    align-items: center;
    margin-top: 18px;
}

.fileLoading {
    margin-right: 20px;
}

.fileBoxLoading {
    width: 24px;
    height: 24px;
    background: rgba(255, 103, 97, 0.1);
    border-radius: 50%;
    text-align: center;
    line-height: 24px;
    color: #ff6761;
}

.fileBoxLoading img {
    width: 24px;
    height: 24px;
}

.fileBoxRight {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #8f93a0;
    display: flex;
    align-items: center;
    position: absolute;
    top: 28px;
    right: 15px;
    cursor: pointer;
}

.fileBoxRight span {
    margin-right: 6px;
}

.jiantouUp {
    transform: rotate(180deg);
}

.jiantouDown {
    transform: rotate(360deg);
}

.fileUpNone {
    display: none;
}

.loading {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.selectLan {
    color: #00cc6f;
}

.loadMore {
    width: 100%;
    font-size: 14px;
    height: 40px;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #808695;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.loadMoreBottom {
    width: 100%;
    font-size: 14px;
    height: 40px;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #808695;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loadMore:hover {
    background: #f7faf8;
}

.selectItemClass {
    background: #ef190f;
}

.folderBox {
    width: 400px;
    background: #ffffff;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    padding: 15px 20px;
    margin: 0 auto;
    margin-top: 210px;
}

.folderBoxHead {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #545767;
    justify-content: space-between;
}

.folderBoxHead img {
    width: 18px;
    height: 19px;
    cursor: pointer;
}

.folderBoxTitle {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #545767;
    margin-top: 30px;
}

.addFolderInput {
    width: 100%;
    height: 35px;
    padding: 8px 10px;
    border: 1px solid #eedbdb;
    margin-top: 4px;
    margin-left: auto;
    margin-right: 20px;
}

.folderBoxFoot {
    display: flex;
    justify-content: flex-end;
    margin-top: 32px;
}

.folderButton {
    width: 120px;
    height: 40px;
    border-radius: 4px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    border: 1px solid #ef190f;
    color: #ef190f;
    cursor: pointer;
}

.folderButtonSure {
    color: #ffffff;
    background: #ef190f;
    margin-left: 10px;
}

.actionItemDisable {
    background: #f8f8f9;
    cursor: not-allowed;
    color: #c5c8ce;
}

.actionItemDisable:hover {
    background: #f8f8f9;
}

.noCurPoint {
    cursor: not-allowed !important;
}

.video-js .vjs-icon-placeholder {
    width: 100%;
    height: 100%;
    display: block;
}

.item2CurPoint {
    cursor: pointer;
}

.item2CurPoint:hover {
    /* text-decoration: underline; */
}

.arrangementItem {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #8f93a0;
    cursor: pointer;
}

.arrangementItemImg {
    width: 16px;
    height: 16px;
    margin-right: 1px;
}

.arrangementBack {
    width: 61px;
    height: 30px;
    background: rgba(239, 25, 15, 0.1);
    border-radius: 4px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #f04d30;
    margin-right: 12px;
    cursor: pointer;
}

.bannerRightInfoArr {
    display: flex;
}

.loadMoreBottom {
    margin-top: 17px;
    font-size: 16px;
    color: #c5c8ce;
}

.selecttableItemClass {
    background: #f0f0f0;
    color: black;
    /* border: 1px solid #EF190F; */
}

.selecttableItemClass:hover {
    background: #f0f0f0;
}

.item2SelectColor {
    color: black;
}

.upFileXuanFuBox {
    position: fixed;
    bottom: 0;
    right: -6rem;
    width: 6rem;
    height: 61px;
    background: #ef190f;
    box-shadow: -0.04rem 0 0.1rem 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.1rem 0 0 0;
    display: flex;
    align-items: center;
    padding: 22px;
    justify-content: space-between;
    transition: right linear 0.3s;
    cursor: pointer;
}

.upFileXuanFuBoxShow {
    right: 0;
}

.upFileXuanFuLeft {
    font-size: 21px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    display: table-cell;
    vertical-align: bottom;
}

.loadNow {
    font-size: 14px;
    margin-right: 12px;
    margin-left: 20px;
}

.upFileXuanFuRight {
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.upFileXuanFuRight img {
    width: 24px;
    height: 24px;
}

.sortList {
    width: 16px;
    height: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.sortList img {
    width: 16px;
    height: 6px;
    cursor: pointer;
}

.loadingStyle {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.8);
}
.tarLeftSearchBox {
    width: 526px;
    height: 44px;
    position: relative;
    margin-left: auto;
    margin-right: 30px;
}

.tarLeftSearchBox img {
    height: 44px;
    width: 44px;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
}
.tabLabel {
  font-size: 14px;
  font-weight: 400;
  color: #8f93a0;
  margin-bottom: 10px;
}
.selectStyle {
  width: 100%;
}
.tarLeftSearch {
    width: 526px;
    height: 44px;
    padding: 12px 16px;
    padding-right: 56px;
}
.tags {
  margin-left: 20px;
  font-size: 14px;
}
.elperwarp {
    font-size: 13px;
    color: #4f4f4f;
    cursor: pointer;
    padding: 0px;
  word-wrap: break-word;
  word-break: normal;
}
.elperwarpred {
    color: #ef190f;
    font-weight: bold;
    cursor: pointer;
}
.el-icon-link {
  font-size: 20px;
  margin-right: 0.12rem;
}
.success {
  color: #333333;
  font-weight: 600;
  cursor: pointer;
}
.progress {
  cursor: not-allowed !important;
}
.smdialog >>> .el-dialog__header {
  padding: 0 0 0 22px;
  height: 60px;
  display: flex;
  align-items: center;
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
  /*height: 312px;*/
  padding: 0 !important;
  display: block;
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
.smmidwarp {
  display: flex;
  /*height: 231px;*/
  padding: 35px 35px;
  width: 100%;
  border-bottom: 1px solid #e8eaec;
  align-items: center;
}
.setBtns {
  width: 98px;
  border-color: #7F7F7F;
  /*color: #7F7F7F;*/
  background-color: #ffffff;
}
.setBtns:hover {
  color: #606266;
  border-color: #606266;
}
.setFontStyle {
  color: #333333;
  margin-left: 20px;
}
.setFontTips {
  color: #333333;
  margin-left: 20px;
  line-height: 24px;
}
.setColor {
  background-color: #ef190f;
  border-color: #ef190f;
  width: 98px;
}
.setColor:hover {
  border-color: #ef190f;
  background-color: #ef190f;
}
  .setColor:active {
    border-color: #ef190f;
    background-color: #ef190f;
  }
</style>
<style>
  .el-pagination button:hover {
    color: #ef190f;
  }
  .el-pager li.active {
    color: #ef190f;
  }
  .el-pager li:hover {
    color: #ef190f;
  }
  .el-pagination__sizes .el-input .el-input__inner:hover {
    border-color: #ef190f;
  }
  .el-input.is-active .el-input__inner, .el-input__inner:focus {
    border-color: #ef190f;
  }
  .el-select .el-input.is-focus .el-input__inner {
    border-color: #eedbdb;
    box-shadow: 0px 1px 8px 0px rgba(209, 0, 0, 0.15);
  }
  .el-select .el-input__inner:focus {
    border-color: #eedbdb;
    box-shadow: 0px 1px 8px 0px rgba(209, 0, 0, 0.15);
  }
  .el-select-dropdown__item.selected {
    color: #ef190f;
  }
  .el-dropdown {
    /*margin-left: 20px;*/
    color: #8f93a0;
    font-size: 13px;
    font-weight: 400;
  }
  .el-dialog--center .el-dialog__footer {
    padding-right: 32px;
    text-align: right;
    padding-top: 20px;
  }
</style>
<template>
    <div class="allFileApp" @click="quanjuFun">
        <div class="bannerRight">
            <div class="bannerRightHead">
              <img
                v-if="subject === 'false'"
                style="width: 30px; margin-left: 20px"
                src="../assets/byteimg/backname.png"
                alt=""
              />
              <div v-if="subject === 'false'" style="font-size: 14px; margin-left: 10px">{{ $t('dataSubjects') }}</div>
                <el-dropdown v-if="subject === 'false'" @command="changeBucketFun" class="dxdtitle" style="margin-right: 22px">
                    <span
                      class="el-dropdown-link"
                      style="
                            cursor: pointer;
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        "
                    >
                        {{ bucketName
                        }}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    style="width: 100px"
                    :command="item.name"
                    v-for="(item, index) in bucktList"
                    :key="index"
                  >{{ item.name }}</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
                <div class="actionBox">
                  <div v-if="signs">
                    <div v-if="subject === 'true'">
                      <div class="actionItem" style="margin-right: 22px;" :class="{ actionItemDisable: changeData.actionSelect_4 }" @click="actionFun(1)">
                        {{ $t('newFolder') }}
                      </div>
                    </div>
                    <div v-if="subject === 'false'">
                      <div
                        v-if="real && mainBody"
                        class="actionItem"
                        style="margin-right: 22px;"
                        :class="{
                            actionItemDisable: changeData.actionSelect_4
                        }"
                        @click="actionFun(1)"
                      >
                        {{ $t('newFolder') }}
                      </div>
                      <div
                        v-if="!real || !mainBody"
                        class="actionItem2"
                        style="margin-left: 22px;margin-right: 22px;"
                        :class="{
                            actionItemDisable: changeData.actionSelect_4
                        }"
                      >
                        {{ $t('newFolder') }}
                      </div>
                    </div>
                  </div>
                  <div v-if="subject === 'true'">
                    <div
                      class="upFileButton"
                      @click.stop="upBoxShowFun"
                      :class="{
                            upFileButtonEng:
                                htmlWordData.upFile === 'Upload Data',
                        }"
                    >
                      <img src="../assets/home/icon_add@2x.png" alt="" />
                      <span>{{ $t('upload') }}</span>
                    </div>
                  </div>
                  <div v-if="subject === 'false'">
                    <div
                      v-if="real && mainBody"
                      class="upFileButton"
                      @click.stop="upBoxShowFun"
                      :class="{
                            upFileButtonEng:
                                htmlWordData.upFile === 'Upload Data',
                        }"
                    >
                      <img src="../assets/home/icon_add@2x.png" alt="" />
                      <span>{{ $t('upload') }}</span>
                    </div>
                    <el-popover
                      placement="right"
                      width="248"
                      height="56"
                      trigger="hover"
                    >
                      <div
                        v-if="!real || !mainBody"
                        slot="reference"
                        class="upFileButton2"
                        :class="{
                                upFileButtonEng:
                                    htmlWordData.upFile === 'Upload Data',
                            }"
                      >
                        <img src="../assets/home/icon_add@2x.png" alt="" />
                        <span>{{ $t('upload') }}</span>
                      </div>
                      <div v-if="!real" class="elperwarp">
                        {{ $t('realNameCheck') }}<span
                        @click="SmRZ"
                        class="elperwarpred"
                      >{{ $t('goCheck') }}</span>
                      </div>
                      <div v-if="real && !mainBody" class="elperwarp">
                        {{ $t('noSubject') }}
                        <span class="elperwarpred" @click="RzZT"
                        >{{ $t('goApply') }}</span>
                      </div>
                    </el-popover>
                  </div>
                </div>
                <input
                    type="text"
                    class="addFolderInput"
                    style="width: 300px"
                    :placeholder="$t('enterName')"
                    v-model="searchFileName"
                />
            </div>
            <div class="bannerRightInfo">
                <span v-show="arrangementList.length === 1">{{ $t('allFiles') }}<span>{{ '(' + $t('Total') +  totalFile + $t('files') + ')'}}</span></span>
                <div
                    class="bannerRightInfoArr"
                    v-show="arrangementList.length > 1"
                >
                    <div class="arrangementBack" @click="arrangementBackFun">
                        返回上级
                    </div>
                    <div
                        class="arrangementItem"
                        v-for="(item, index) in arrangementList"
                        :key="index"
                        @click="arrangementItemFun(item, index)"
                    >
                        <img
                            src="../assets/home/icon_nav下拉@2x.png"
                            alt=""
                            v-if="index != 0"
                            class="arrangementItemImg"
                        />
                        <span>{{ item }}</span>
                    </div>
                </div>
            </div>
            <div class="table">
                <div class="tableHead">
                    <span class="item2">{{ $t('storageType') }}</span>
                    <span class="item7">
                      <el-dropdown trigger="click" @command="changeTagFun">
                    <span
                      class="el-dropdown-link"
                      style="
                            cursor: pointer;
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        "
                    >
                        {{ $t('tags') }}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item
                        style="width: 100px; overflow: hidden;"
                        :command="item"
                        v-for="(item, index) in showTab"
                        :key="index"
                      >{{ item.name }}</el-dropdown-item
                      >
                    </el-dropdown-menu>
                  </el-dropdown>
                    </span>
                    <span class="item7">{{ $t('storageStatus') }}</span>
                    <span class="item3">{{ $t('uploadStatus') }}</span>
                    <div class="item4">{{ $t('fileSize') }}</div>
                    <div class="item5">{{ $t('time') }}</div>
                    <div class="item6">{{ $t('operations') }}</div>
                </div>
                <div class="content contentScroll" ref="contentScroll">
                    <div
                        class="tableItem"
                        v-for="(item, index) in table.list"
                        :key="index"
                    >
                        <div
                            class="item2"
                            :class="{ item2SelectColor: item.select }"
                        >
                            <img :src="item.coverUrl" alt="" />
                            <div v-if="item.toolTip">
                                <el-tooltip
                                    effect="dark"
                                    :content="item.name"
                                    placement="top"
                                >
                                    <!-- @click.stop="openFileFun(item)" -->
                                    <span
                                        v-if="item.fileTypeName === 10"
                                        class="item2CurPoint"
                                        @click.stop="submitSave(item)"
                                        >{{ item.nameShow }}</span
                                    >
                                    <!-- @click.stop="openFileFun(item)" -->
                                    <span
                                        v-else-if="item.fileTypeName === 9"
                                        class="item2CurPoint"
                                        @click.stop="submitSave(item)"
                                        >{{ item.nameShow }}</span
                                    >
                                    <!-- @click.stop="openFileFun(item)" -->
                                    <span v-else class="item2CurPoint" @click.stop="submitSave(item)">{{
                                        item.nameShow
                                    }}</span>
                                </el-tooltip>
                            </div>
                            <div v-else>
                                <!-- @click.stop="openFileFun(item)" -->
                                <span
                                    v-if="item.fileTypeName === 10"
                                    class="item2CurPoint"
                                    @click.stop="submitSave(item)"
                                    >{{ item.nameShow }}</span>
                                <!-- @click.stop="openFileFun(item)" -->
                                <span
                                    v-else-if="item.fileTypeName === 9"
                                    class="item2CurPoint"
                                    @click.stop="submitSave(item)"
                                    >{{ item.nameShow }}</span
                                >
                                <!-- @click.stop="openFileFun(item)" -->
                                <span v-else class="item2CurPoint" @click.stop="submitSave(item)">{{ item.nameShow }}</span>
                            </div>
                        </div>
                        <span class="item7 setHeight" v-if="item.lableName">{{ item.lableName }}</span>
                        <span class="item7 setHeight" v-else>-</span>
                        <span class="item7 setHeight" v-if="item.dataStatusName">{{ item.dataStatusName }}</span>
                        <span class="item7 setHeight" v-else>-</span>
                        <span class="item3 setHeight" v-if="item.fileType !== 0">{{ item.statusName }}</span>
                        <span class="item3 setHeight" v-else>-</span>
                        <span class="item4" v-if="item.fileSize !== '0B'">{{ item.fileSize }}</span>
                        <span class="item4" v-else>-</span>
                        <span class="item5" v-if="item.lastModified">{{ item.lastModified }}</span>
                        <span class="item5" v-else>-</span>
                        <div class="item6">
                          <i class="el-icon-link progress" v-show="(item.fileType === 3 || item.state !== 0) && !item.IsChain"></i>
                          <i class="el-icon-link success" @click="goChain(item)" v-show="(item.fileType === 1 || item.fileType === 2) && (item.IsChain && item.state === 0)"></i>
                            <img
                                src="../assets/home/download@2x.png"
                                v-if="
                                    item.fileType === 1 || item.fileType === 2
                                "
                                style="margin-right: 0.12rem"
                                @click.stop="downLoadDateFun(item)"
                            />
<!--                          <img-->
<!--                            src="../assets/home/icon／cloudload_nor@2x.png"-->
<!--                            style="margin-right: 0.12rem"-->
<!--                            @click="Unblock(item)"/>-->
                            <img
                              src="../assets/home/download.png"
                              style="margin-right: 0.12rem"
                              v-if="item.fileType === 3 && item.state === 9"
                              @click="Unblock(item)"/>
<!--                             v-if="item.dealState != 1 && !item.select "-->
                            <img
                                src="../assets/home/icon／detail_nor@2x.png"
                                v-if="item.state === 9 || item.state === 1"
                                @click.stop="checkoutUpLineFun(item)"
                            />
                            <!-- v-else-if="item.dealState === 1 -->
                            <img
                                src="../assets/home/icon／detail_dis@2x.png"
                                v-if="item.state !== 9 && item.state !== 1 && item.fileType !== 0"
                                class="noCurPoint"
                            />
                          <span v-if="item.fileType === 0">-</span>
                        </div>
                    </div>
                    <div v-if="totalFile <= 0">
                      <div class="kongTable" v-if="!table.loading">
                        <img
                          src="../assets/home/kong.png"
                          alt=""
                          class="kongTableImg"
                        />
                        <span class="kongTableSpan">{{ $t('noFiles') }}🤷‍♀️ </span>
                        <span>{{ $t('quicklyClick') }}</span>
                        <div
                          v-if="real && mainBody"
                          class="upFileButton"
                          style="margin-top: 16px"
                          @click.stop="upBoxShowFun"
                          :class="{
                                upFileButtonEng:
                                    htmlWordData.upFile === 'Upload Data',
                            }"
                        >
                          <img src="../assets/home/icon_add@2x.png" alt="" />
                          <span>{{ $t('upload') }}</span>
                        </div>
                      </div>
                      <div class="loadingStyle" v-if="table.loading">
                        <Loading></Loading>
                      </div>
                    </div>
                </div>
                <div class="buttom-pagination">
                <div class="pagination" v-if="pageShows">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage4"
                    :page-sizes="['50']"
                    :page-size="pageSize"
                    layout="total, prev, pager, next, jumper"
                    :total="totalFile">
                  </el-pagination>
                </div>
              </div>
            </div>
            <div class="selectBox" v-if="selectData.selectBoolean">
                <div class="selectHead">
                    <img
                        src="../assets/home/icon_close_small@2x.png"
                        alt=""
                        @click="resetFun"
                    />
                </div>
                <div class="selectItem">
                    <span class="selectTitle">{{
                        htmlWordData.selectStatus
                    }}</span>
                    <div class="selectContent">
                        <div
                            class="ststusItem"
                            @click="changeStatusFun(index)"
                            v-for="(item, index) in selectData.statusList"
                            :class="{ ststusItemSelect: item.isSelect }"
                            :key="index"
                        >
                            {{ item.name }}
                        </div>
                    </div>
                </div>
                <div class="selectItem">
                    <span class="selectTitle">{{
                        htmlWordData.selectTime
                    }}</span>
                    <div class="selectContent">
                        <el-date-picker
                            value-format="yyyy-MM-dd HH:mm:ss"
                            :start-placeholder="htmlWordData.startTime"
                            :end-placeholder="htmlWordData.endTime"
                            v-model="selectData.time"
                            type="datetimerange"
                        >
                        </el-date-picker>
                    </div>
                </div>
                <div class="selectFoot">
                    <div class="selecFootSure selecFootCom" @click="resetFun">
                        {{ htmlWordData.selectReset }}
                    </div>
                    <div
                        class="selecFootCel selecFootCom"
                        @click="sureSelectFun"
                    >
                        {{ htmlWordData.selectSure }}
                    </div>
                </div>
            </div>
        </div>
        <!-- 新建文件夹 -->
        <div class="zhezhao" v-if="openMaskControl.addFolderBoolean">
            <div class="folderBox">
                <div class="folderBoxHead">
                    <span>{{ $t('newFolder') }}</span>
                    <img
                        src="../assets/zhezhao/close.png"
                        alt=""
                        @click="celAddFolderBoxFun(1)"
                    />
                </div>
                <div class="folderBoxTitle">{{ $t('folderName') }}</div>
                <input
                    type="text"
                    class="addFolderInput"
                    v-model="addFileData.name"
                    :placeholder="$t('enterFolder')"
                />
                <div class="tipsMsg">{{ $t('folderNotes') }}</div>
                <div class="folderBoxFoot">
                    <div class="folderButton" @click="celAddFolderBoxFun(1)">
                        {{ $t('cancel') }}
                    </div>
                    <div
                        class="folderButton folderButtonSure"
                        @click="celAddFolderBoxFun(2)"
                    >
                        <span>{{ $t('confirms') }}</span>
                        <i
                            class="el-icon-loading"
                            v-if="addLoading"
                            style="
                                font-size: 16px;
                                color: white;
                                margin-left: 10px;
                            "
                        ></i>
                    </div>
                </div>
            </div>
        </div>
        <!-- 查看上链信息 -->
        <UpLineInfo
            @onChange="upLineActionFun"
            :fileName="upLineName"
            :upLineBoolean="openMaskControl.upLineBoolean"
            :fileId="upLineId"
            :bucketName="bucketName"
        ></UpLineInfo>
        <!-- 移动文件 -->
        <div v-if="openMaskControl.moveFile">
            <MoveFile
                @onChange="moveFileFun"
                :moveFlderList="selectList"
            ></MoveFile>
        </div>
        <!-- 上传文件弹框 -->
        <div
            class="upFileBox"
            :class="{ upFileBoxShow: openMaskControl.upBoxBoolean }"
            @click.stop
        >
            <div class="upFileHead">
                <span>{{ htmlWordData.upFile }}</span>
                <img
                    src="../assets/home/icon_close_small@2x.png"
                    alt=""
                    @click.stop="closeUpFileBoxFun"
                />
            </div>
            <div class="selectTabs">
              <p class="tabLabel">{{ $t('changeTab') }}</p>
              <el-select class="selectStyle" v-model="tabName" size="small" :placeholder="$t('changeTabTip')">
                <el-option
                  v-for="item in tabs"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>
            <div class="upFileType" :class="{ upFileTypeFile: drogBoolean }">
                <div class="upFileTypeHead">
                    <div
                        class="upFileTypeHeadItem"
                        style="background: #00d172"
                        @click="showLocalFun(1)"
                    >
                        <img src="../assets/home/icon_image@2x.png" alt="" />
                        <input
                            type="file"
                            class="fileUpNone"
                            multiple
                            accept="*/*"
                            id="upload1"
                            @change="previewImage($event)"
                        />
                    </div>
                    <div
                        class="upFileTypeHeadItem"
                        style="background: #3769fc"
                        @click="showLocalFun(2)"
                    >
                        <img src="../assets/home/icon_播放@2x.png" alt="" />
                        <input
                            type="file"
                            class="fileUpNone"
                            multiple
                            accept="*/*"
                            id="upload2"
                            @change="previewImage($event)"
                        />
                    </div>
                    <div
                        class="upFileTypeHeadItem"
                        style="background: #fac02e"
                        @click="showLocalFun(3)"
                    >
                        <img src="../assets/home/icon_zip@2x.png" alt="" />
                        <input
                            type="file"
                            class="fileUpNone"
                            multiple
                            accept="*/*"
                            id="upload3"
                            @change="previewImage($event)"
                        />
                    </div>
                    <div
                        class="upFileTypeHeadItem"
                        style="background: #ff6761"
                        @click="showLocalFun(4)"
                    >
                        <img src="../assets/home/icon_file@2x.png" alt="" />
                        <input
                            type="file"
                            class="fileUpNone"
                            multiple
                            accept="*/*"
                            id="upload4"
                            @change="previewImage($event)"
                        />
                    </div>
                </div>
                <div class="upFileBoxInfo">{{ $t('drag') }}</div>
                <div class="tips">{{ $t('fileNote') }}</div>
                <div class="upFileBoxFoot">
                    <div class="upFileBoxFootItem" @click="showLocalFun(6)">
                        <span>{{ $t('uploadFiles') }}</span>
                                                  <!-- Accept="*/*"
                            multiple -->
                        <input
                            type="file"
                            class="fileUpNone"

                            id="upload6"
                            @change="previewImage($event)"
                        />
                    </div>
                    <!-- <div class="upFileBoxFootItem" @click="showLocalFun(5)">
                        <span>上传文件夹</span>
                        <input
                            type="file"
                            class="fileUpNone"
                            multiple
                            webkitdirectory
                            accept="*/*"
                            id="upload"
                            @change="previewImage($event)"
                        />
                    </div> -->
                </div>
                <div class="drogBox" v-if="drogBoolean">
                    <img src="../assets/home/手势@2x.png" alt="" />
                    <span>{{ $t('Relat') }}</span>
                </div>
            </div>
            <div
                class="fileBox"
                :class="{ fileBoxScroll: upFileList.length > 3 }"
                :style="fileBoxHeight"
            >
                <div
                    class="fileBoxItem"
                    v-for="(item, index) in upFileList"
                    :key="index"
                >
                    <div class="fileBoxItem_1">
                        <div class="fileLoading" v-if="item.loading">
                            <i class="el-icon-loading"></i>
                        </div>
                        <div>
                            <div class="fileBoxHead">{{ item.name }}</div>
                            <div class="fileBoxTime" v-if="item.succese">
                                {{ item.time }} {{ item.size }}
                            </div>
                            <div class="fileBoxTime" v-if="item.cell">
                                {{ $t('upBoxCell') }}
                            </div>
                            <div class="fileBoxTime" v-if="item.loading">
                              <span>{{ item.num === 0 ? $t('waitUpload') : $t('upLoading') }}</span>
                              <span class="setSpace" v-if="item.num !== 0">{{ item.fileSizes }}</span>
                              <span class="setSpace" v-if="item.num !== 0">{{ item.num + '%' }}</span>
                              <span v-if="item.num !== 0">{{'(' + item.speeds + item.unit + ')'}}</span>
                            </div>
                        </div>
                    </div>
                    <div
                        class="fileBoxLine"
                        v-if="item.loading || item.succese"
                    >
                        <div
                            class="fileBoxLineJinDu"
                            :style="{ width: item.uploadPercentage + '%' }"
                        ></div>
                    </div>
                    <div
                        class="fileBoxLine"
                        v-if="item.cell"
                        style="background: #a1a1a1"
                    ></div>
                    <div
                        class="fileBoxLine"
                        v-if="item.error"
                        style="background: #ef190f"
                    ></div>
                    <div
                        class="fileBoxRight"
                        v-if="item.loading || item.succese || item.error"
                    >
                        <span v-if="item.succese">{{ $t('upBoxSuccess') }}</span>
                        <span v-if="item.error" style="color: #f84942">{{ $t('upBoxError') }}</span>
                        <div
                            class="fileBoxLoading"
                            v-if="item.loading"
                            @click="cellUp(item, index)"
                        >
                            <img
                                src="../assets/home/icon_cancle@2x.png"
                                alt=""
                            />
                        </div>
                        <div class="fileBoxLoading" v-if="item.succese">
                            <img
                                src="../assets/home/icon_sucsse@2x.png"
                                alt=""
                            />
                        </div>
                        <div class="fileBoxLoading" v-if="item.error">
                            <img
                                src="../assets/home/icon_filed@2x.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 上传文件悬浮框 -->
        <div
            class="upFileXuanFuBox"
            :class="{ upFileXuanFuBoxShow: cebianlanData.boolean }"
            @click.stop="cebianlanLoseFun"
        >
            <div class="upFileXuanFuLeft">
                <span>{{ $t('uploadList') }}</span>
                <span class="loadNow">{{ $t('upLoading') }}：{{ cebianlanData.loading }}</span>
                <span style="font-size: 14px">{{ $t('upLoaded') }}：{{ cebianlanData.succese }}</span>
            </div>
            <div class="upFileXuanFuRight">
                <img src="../assets/home/icon／up@2x.png" alt="" />
            </div>
        </div>
<!--        提示弹窗-->
        <div class="smdialog">
          <el-dialog
          :title="$t('UploadRequest')"
          :visible.sync="openChain"
          :center="true">
            <div class="smmidwarp">
              <img
                class="smimg2"
                src="../assets/byteicon/encryption.png"
                alt=""
              />
              <p class="setFontStyle">{{ $t('chainTip') }}</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button class="setBtns" @click="openChain = false">{{ $t('cancel') }}</el-button>
              <el-button class="setColor" type="primary" @click="confirmApp">{{ $t('sure') }}</el-button>
            </span>
          </el-dialog>
        </div>
        <div class="smdialog">
          <el-dialog
            :title="$t('downloadPro')"
            :visible.sync="downloadProgress"
            :center="true">
            <div class="smmidwarp">
              <img
                class="smimg2"
                src="../assets/byteicon/encryption.png"
                alt=""
              />
              <div class="setFontTips">
                <p>{{ $t('downloadProTips') }}</p>
                <p style="color: #ef190f;">{{ $t('Currentstatus') }}</p>
              </div>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button class="setBtns" @click="downloadProgress = false">{{ $t('cancel') }}</el-button>
              <el-button class="setColor" type="primary" @click="getColdFile">{{ $t('knowned') }}</el-button>
            </span>
          </el-dialog>
        </div>
    </div>
</template>
<script>
import apis from '../common/apis.js'
import axios from 'axios'
import MoveFile from '../funcomponents/moveFile'
import UpLineInfo from '../funcomponents/upLineInfo'
import Loading from '../funcomponents/loading'
import { EventBus } from '../../event-bus.js'
import Blob from '../excel/Blob'
import base from '../common/baseUrl'
import AES from '@/common/AES.js'
import {debounce} from '../common/utils'
export default {
  data () {
    return {
      arrayA: null,
      pageShows: true,
      fileId: null,
      totalFile: 0,
      currentPage: 1,
      pageSize: 50,
      downloadProgress: false,
      openChain: false,
      signs: true,
      unit: '',
      speed: '',
      dtcomm: null,
      searchFileName: null,
      bucktList: [],
      bucketName: '',
      downToken: null,
      real: false,
      subject: false,
      mainBody: false,
      outfolderList: [],
      pageTotal: 10,
      nameLoading: false,
      addLoading: false,
      upLineId: null,
      upLineName: null,
      sortValue: 0,
      sortDownSize: 0,
      sortDownTime: 0,
      sortUpTime: 0,
      sortUpSize: 0,
      cebianlanData: {
        boolean: false,
        total: 0,
        loading: 0,
        succese: 0
      },
      cebianlanBoolean: false,
      text: null,
      // 单击控制
      clickControl: {
        arrangementItem: true
      },
      arrangementList: ['全部文件'],
      arrangementListLastId: 0,
      apiControlData: {
        type: 1
      },
      openMaskControl: {
        img: false,
        video: false,
        upLineBoolean: false,
        nameBoolean: false,
        addFolderBoolean: false,
        upBoxBoolean: false,
        moveFile: false
      },
      previewImg: null,
      selectList: [],
      tableHeight: {
        height: '700px'
      },
      fileBoxHeight: {
        height: '475px'
      },
      searchInput: false,
      selectListIndex: null,
      languagetype: '2',
      htmlWordData: {},
      typeShow1: false,
      typeShow2: true,
      yulanShow: false,
      vedieoShow: false,
      img_url: null,
      source: null,
      upFileList: [],
      mobile: null,
      inputSearchData: null,
      table: {
        list: [],
        loading: false,
        total: 0,
        disabled: false
      },
      // 单项操作
      changeData: {
        actionSelect_1: true,
        actionSelect_2: true,
        actionSelect_3: true,
        actionSelect_4: false,
        itemData: {},
        index: null,
        fileRealName: null
      },
      // 新增文件夹
      addFileData: {
        name: null
      },
      drogBoolean: false,
      searchData: {
        text: null,
        iconHas: false,
        ready: true,
        clickNum: false,
        searchInput: false
      },
      indexPage: 1,
      selectData: {
        selectBoolean: false,
        statusList: [
          {
            name: '全部',
            id: 99,
            isSelect: true
          },
          {
            name: '待上链',
            id: 1,
            isSelect: false
          },
          {
            name: '上链中',
            id: 3,
            isSelect: false
          },
          {
            name: '已上链',
            id: 9,
            isSelect: false
          }
        ],
        statusId: 99,
        time: [],
        startTime: null,
        endTime: null
      },
      currentPage4: 1,
      UNITS: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'],
      STEP: 1024,
      tabs: [],
      showTab: [],
      tabName: '',
      selectTag: '标签'
    }
  },
  props: ['searchFileValue', 'first'],
  watch: {
    searchFileName (n, o) {
      this.table.list = this.filterByName(this.searchTable, n).slice(0, 50)
      // console.log(this.searchTable)
      console.log('list:', this.table.list)
    },
    arrangementList (n, o) {
      if (n.length === 1) {
        this.pageShows = true
      }
      if (n.length > 1) {
        this.pageShows = false
        let prefix = ''
        this.arrangementList.forEach((element, index) => {
          if (index !== 0) {
            if (element.indexOf('/')) {
              prefix = prefix + element
            } else {
              prefix = prefix + element + '/'
            }
          }
        })
        this.getAllFile(prefix)
      }
    },
    first (n, o) {
      this.indexPage = 1
      this.pageTotal = 10
      this.arrangementList = [
        '全部文件'
      ]
      this.arrangementListLastId = 0
      this.selectList = []
      this.resetFun()
    },
    searchFileValue (n, o) {
      // n为新值,o为旧值;
      this.text = n
      if (this.text) {
        this.changeData.actionSelect_4 = true
      } else {
        this.changeData.actionSelect_4 = false
      }
      this.indexPage = 1
      this.pageTotal = 10
      this.arrangementList = [
        {
          name: '全部文件',
          id: 0
        }
      ]
      this.arrangementListLastId = 0
      this.selectList = []
      this.getFileListFun()
    },
    bucketName (n, o) {
      if (n !== o) {
        this.selectTag = '标签'
      }
    },
    showTab (n, o) {
      if (n.length === 1) {
        this.showTab = []
      }
    }
  },
  created () {
    this.text = this.searchFileValue
    if (localStorage.arrangementList) {
      this.arrangementList = JSON.parse(localStorage.arrangementList)
      this.arrangementListLastId = this.arrangementList[
        this.arrangementList.length - 1
      ].id
    }
    localStorage.removeItem('arrangementList')
    this.htmlWordData = this.$store.state.chineseData
    this.typeShow1 = false
    this.typeShow2 = true
    // console.log()
    this.subject = localStorage.getItem('subject')
    if (localStorage.real === 'false') {
      this.real = false
    } else {
      this.real = true
    }
    if (localStorage.mainBody === 'false') {
      this.mainBody = false
    } else {
      this.mainBody = true
    }
    console.log(this.mainBody, this.real)
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
      if (r.data.real === true) {
        localStorage.setItem('real', true)
      } else {
        localStorage.setItem('real', false)
      }

      localStorage.setItem('mainBody', r.data.mainBody)
    })
    // 获取标签
    this.getAllTabs()
  },
  mounted () {
    // EventBus.$on("userinfo", (msg) => {
    // console.log(msg.real)
    //   this.real = msg.real;
    //   this.mainBody = msg.mainBody;
    // });
    let clientHeight = document.documentElement.clientHeight - 230
    this.tableHeight.height = clientHeight + 'px'
    this.fileBoxHeight.height =
            document.documentElement.clientHeight - 465 + 'px'
    this.mobile = localStorage.mobile
    this.bucktlistFun()
    this.getFileListFun()
    var dropbox = document.querySelector('.upFileType')
    dropbox.addEventListener('dragenter', this.onDrag, false)
    dropbox.addEventListener('dragover', this.onDrag, false)
    dropbox.addEventListener('drop', this.onDrop, false)
    window.addEventListener('beforeunload', (e) => {
      this.beforeunloadHandler(e)
    })
  },
  beforeDestroy () {
    window.removeEventListener('beforeunload', (e) => {
      this.beforeunloadHandler(e)
    })
  },
  components: {
    MoveFile,
    UpLineInfo,
    Loading
  },
  methods: {
    // 刷新
    // beforeunloadFn (e) {
    //
    // },
    // 申请上链
    applyChain (params) {
      let token = localStorage.token
      this.$axios({
        method: 'post',
        url: apis.applyChainApi,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then(res => {
        if (res.status === 200) {
          let prefix = ''
          // console.log('this.arrangementList.length', this.arrangementList)
          if (this.arrangementList.length > 1) {
            this.arrangementList.forEach((element, index) => {
              if (index !== 0) {
                if (element.indexOf('/')) {
                  prefix = prefix + element
                }
              }
            })
          }
          console.log(prefix)
          this.getFileListFun(prefix)
          console.log('上链后的结果', res.data)
        }
      }).catch(err => {
        console.log(err.response.status)
      })
    },
    // 获取所有标签
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
      this.pageSize = val
      this.getFileListFun()
    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`)
      this.currentPage = val
      this.getFileListFun()
    },
    getAllTabs () {
      let that = this
      let token = localStorage.token
      let prams = {
        createTimeSort: 1
      }
      that.$axios({
        method: 'post',
        url: apis.labelListApi,
        data: prams,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        if (r.status === 200) {
          let news = {
            createTime: '',
            id: null,
            name: '全部'
          }
          that.tabs = r.data.records[0]
          that.showTab = [...r.data.records[0]]
          that.showTab.unshift(news)
          // console.log('标签:', that.tabs)
        }
      }).catch(err => {
        that.$message.error({
          content: that.$t('hint117'),
          duration: 5
        })
      })
    },
    filterByName (aim, name) {
      console.log('aim:', aim)
      return aim.filter((item) => item.name.indexOf(name) !== -1)
    },
    filterById (aim, id) {
      // console.log('aim', aim)
      // console.log('id', id)
      if (aim !== null) {
        return aim.filter((item) => item.lable_id.toString().indexOf(id.toString()) !== -1)
      }
    },
    RzZT () {
      EventBus.$emit('RzZT')
    },
    SmRZ () {
      EventBus.$emit('rzopen')
    },
    submit2 () {
      this.$emit('onChange', this.inputSearchData)
    },
    clearInputFun () {
      this.inputSearchData = null
      this.searchInput = true
      this.$emit('onChange', this.inputSearchData)
    },
    // 搜素框 失去焦点
    searchloseFun () {
      this.searchInput = false
    },
    cebianlanLoseFun () {
      this.cebianlanData.boolean = false
      this.openMaskControl.upBoxBoolean = true
    },
    moveFileFun (value) {
      if (value === 1) {
        this.openMaskControl.moveFile = false
      } else {
        this.openMaskControl.moveFile = false
        this.selectList = []
        this.changeData.actionSelect_1 = true
        this.changeData.actionSelect_2 = true
        this.changeData.actionSelect_3 = true
        this.indexPage = 1
        this.pageTotal = 10
        this.getFileListFun()
      }
    },
    /// //////////////////////////////////
    onChildSearch (value) {
      this.searchData.text = value

      this.indexPage = 1
      this.pageTotal = 10
      this.getFileListFun()
    },
    kuoRongFun () {
      this.$message.info({
        content: this.$t('hint22'),
        duration: 5
      })
    },
    changApiFun (type) {
      this.apiControlData.type = type
    },
    // 搜素框 失去焦点
    searchloseFun () {
      this.searchData.searchInput = false
    },
    submitSave: debounce(function (item) {
      this.openFileFun(item)
    }, 800),
    openFileFun (item) {
      // console.log('items:', item.name.split('/').findIndex(e => e === ''))
      if (item.fileTypeName === 10) {
        if (item.ipfsUrl) {
          this.openMaskControl.img = true
          this.previewImg = item.ipfsUrl
        }
      } else if (item.fileTypeName === 9) {
        if (item.ipfsUrl) {
          this.openMaskControl.video = true
          this.playerOptions['sources'][0]['src'] = item.ipfsUrl
        }
      } else if (item.fileTypeName === 0) {
        this.arrangementList.push(item.name)
        let prefix = ''
        if (this.arrangementList.length > 1) {
          this.arrangementList.forEach((element, index) => {
            console.log('suoyouyuansu:', element)
            if (index !== 0) {
              if (element.indexOf('/')) {
                prefix = prefix + element
              } else {
                prefix = prefix + element + '/'
              }
            }
          })
        }
        this.getFileListFun(prefix)
      } else {
        this.$message.info({
          content: this.$t('hint23'),
          background: true,
          duration: 5
        })
      }
    },

    // ------------------- 头部操作
    actionFun (type) {
      if (this.bucktList === null) {
        this.$message.info({
          content: this.$t('hint24'),
          background: true,
          duration: 5
        })
      }
      if (this.bucktList !== null && this.bucktList !== undefined) {
        if (type === 1) {
          if (!this.changeData.actionSelect_4) {
            this.openMaskControl.addFolderBoolean = true
          } else {
          }
        } else if (type === 2) {
          if (!this.changeData.actionSelect_1) {
            this.selectList.forEach((element) => {
              this.downLoadDateFun(element)
            })
          } else {
          }
        } else if (type === 3) {
          if (!this.changeData.actionSelect_2) {
            this.openMaskControl.nameBoolean = true
            this.changeData.fileRealName = this.selectList[0].name
          } else {
          }
        } else if (type === 4) {
          if (!this.changeData.actionSelect_3) {
            this.openMaskControl.moveFile = true
          } else {
          }
        }
      }
    },
    // ------------------- 文件每一项的操作
    // 查看上链信息
    checkoutUpLineFun (item) {
      // console.log(item)
      this.openMaskControl.upLineBoolean = true
      this.upLineId = item.fileId
      this.upLineName = item.name
    },
    upLineActionFun (value) {
      this.openMaskControl.upLineBoolean = false
    },
    // --------------------头部具体操作函数
    // 解封
    Unblock (val) {
      this.downloadProgress = true
      this.fileId = val.fileId
      console.log('从云端解封', val)
    },
    // 下载冷数据
    getColdFile (val) {
      let obj = {}
      let params = {
        bucketName: this.bucketName,
        fileId: this.fileId
      }
      obj.id = 1
      obj.jsonrpc = '2.0'
      obj.method = 'web.SetRetrieve'
      obj.params = params
      let minioToekn = localStorage.minioToekn
      this.$axios({
        method: 'post',
        url: base.homeMinioUrl + '/api/webrpc',
        data: obj,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + minioToekn,
          Encryption: 0
        }
      }).then(res => {
        if (res.data.error.message === 'We encountered an internal error, please try again.: cause(该文件暂未上链)') {
          this.$message.error({
            content: this.$t('hint25'),
            background: true,
            duration: 5
          })
        }
        if (res.data.error.message === 'We encountered an internal error, please try again.: cause(任务执行中，请勿重复新增)') {
          this.$message.error({
            content: this.$t('hint26'),
            background: true,
            duration: 5
          })
        }
        this.getFileListFun()
        // console.log('121cuowu', res.data.error)
      }).catch(err => {
        console.log(err)
      })
      this.downloadProgress = false
      // console.log('下载冷数据下载冷数据')
    },
    // 取消 新增文件夹遮罩层
    celAddFolderBoxFun (type) {
      if (type === 1) {
        this.openMaskControl.addFolderBoolean = false
      } else {
        let prefix = ''
        console.log(
          'this.arrangementList.length',
          this.arrangementList
        )
        if (this.arrangementList.length > 1) {
          this.arrangementList.forEach((element, index) => {
            if (index !== 0) {
              if (element.indexOf('/')) {
                prefix = prefix + element
              } else {
                prefix = prefix + element + '/'
              }
            }
          })
        }
        console.log('层级:', prefix)
        this.getFileListFun(
          prefix + this.addFileData.name + '/',
          this.addFileData.name + '/'
        )
      }
    },
    // -----------操作APi
    // 返回点击的那一层
    arrangementItemFun (item, index) {
      if (!this.clickControl.arrangementItem) {
        return
      }
      this.clickControl.arrangementItem = false
      this.actionSetNullFun()
      this.arrangementList = this.arrangementList.slice(0, index + 1)
      let prefix = ''
      console.log('this.arrangementList.length', this.arrangementList)
      if (this.arrangementList.length > 1) {
        this.arrangementList.forEach((element, index) => {
          if (index !== 0) {
            if (element.indexOf('/')) {
              prefix = prefix + element
            }
          }
        })
      }
      console.log(prefix)
      this.getFileListFun(prefix)
    },
    arrangementBackFun () {
      this.actionSetNullFun()
      this.arrangementList = this.arrangementList.slice(
        0,
        this.arrangementList.length - 1
      )
      let prefix = ''
      if (this.arrangementList.length > 1) {
        this.arrangementList.forEach((element, index) => {
          if (index !== 0) {
            if (element.indexOf('/')) {
              prefix = prefix + element
            }
          }
        })
      }
      this.getFileListFun(prefix)
    },
    actionSetNullFun () {
      this.selectList = []
      this.changeData.actionSelect_2 = true
      this.changeData.actionSelect_1 = true
      this.changeData.actionSelect_3 = true
    },
    beforeunloadHandler (e) {
      // this.arrangementList = ['全部文件']
      this.arrangementList = []
      if (this.upFileList.length > 0) {
        this.upFileList.forEach((element) => {
          if (element.loading) {
            e = e || window.event
            if (e) {
              e.returnValue = this.$t('hint124')
            }
            return this.$t('hint124')
          }
        })
      } else {
        if (this.arrangementList.length > 1) {
          localStorage.arrangementList = JSON.stringify(
            this.arrangementList
          )
        }
      }
    },
    changelanguagetype (type) {
      this.selectData.statusList = [
        {
          name: '全部',
          id: 99,
          isSelect: true
        },
        {
          name: '待上链',
          id: 1,
          isSelect: false
        },
        {
          name: '上链中',
          id: 3,
          isSelect: false
        },
        {
          name: '已上链',
          id: 9,
          isSelect: false
        }
      ]
      this.table.list.forEach((element) => {
        if (element.status === 9) {
          element.statusName = '已上链'
          element.itemDSL = false
        } else if (element.status === 1) {
          element.statusName = '待上链'
        } else if (element.status === 3) {
          element.statusName = '上链中'
          element.itemDSL = true
        }
      })
      this.languagetype = '2'
      localStorage.languagetype = '2'
      this.htmlWordData = this.$store.state.chineseData
      this.typeShow1 = false
      this.typeShow2 = true
    },
    quanjuFun () {
      if (this.openMaskControl.upBoxBoolean) {
        this.cebianlanData.boolean = true
      }
      this.openMaskControl.upBoxBoolean = false
    },
    closeYulanFun () {
      this.openMaskControl.img = false
      this.openMaskControl.video = false
    },
    // 退出登录 loginOutApi
    loginOutFun () {
      let token = localStorage.token
      let params = {}
      this.$axios({
        method: 'post',
        url: apis.loginOutApi,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((res) => {
          localStorage.clear()
          this.$router.push({
            name: 'login'
          })
        })
        .catch((err) => {
          this.$message.error({
            content: this.$t('hint42')
          })
        })
    },
    downLoadDateFun (item) {
      this.downTokenGetFun(item)
    },
    goChain (val) {
      // let value
      this.openChain = true
      // value = JSON.parse(localStorage.getItem('userInfo'))
      this.fileId = val.fileId
      console.log('上链内容:', val)
      // console.log('数据伙伴：', value.compayName)
    },
    confirmApp () {
      this.openChain = false
      let v = {
        fileId: this.fileId
      }
      this.applyChain(v)
      console.log('确认申请')
    },
    downTokenGetFun (item) {
      let obj = {}
      let params = {}
      obj.id = 1
      obj.jsonrpc = '2.0'
      obj.method = 'web.CreateURLToken'
      obj.params = params
      console.log('item', item)
      let minioToekn = localStorage.minioToekn
      this.$axios({
        method: 'post',
        url: base.homeMinioUrl + '/api/webrpc',
        data: obj,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + minioToekn,
          Encryption: 0
        }
      })
        .then((res) => {
          let downToken = res.data.result.token
          let prefix = ''
          if (this.arrangementList.length > 1) {
            this.arrangementList.forEach((element, index) => {
              if (index !== 0) {
                if (element.indexOf('/')) {
                  prefix = prefix + element
                } else {
                  prefix = prefix + element + '/'
                }
              }
            })
          }
          let ipfsUrl =
                        base.homeMinioUrl +
                        '/api/download/' +
                        this.bucketName +
                        '/' +
                        prefix +
                        item.name +
                        '?token=' +
                        downToken
          console.log(ipfsUrl)

          if (item.fileTypeName === 0) {
            let blob = new Blob([response.data], {
              type: 'application/zip'
            })
            let url = window.URL.createObjectURL(blob)
            const link = document.createElement('a') // 创建a标签
            link.href = ipfsUrl
            link.download = '' // 重命名文件
            link.click()
            URL.revokeObjectURL(url) // 释放内存
          }
          if (item.fileTypeName !== 10) {
            if (item.contentType === 'txt') {
              const element = document.createElement('a')
              element.setAttribute(
                'href',
                'data:text/plain;charset=utf-8,' +
                                    encodeURIComponent(ipfsUrl)
              )
              element.setAttribute('download', item.name)
              element.style.display = 'none'
              element.download = item.name
              element.click()
            } else if (
              item.fileTypeName === 9 ||
                            item.fileTypeName === 8
            ) {
              let element = document.createElement('a')
              document.body.append(element)
              element.target = '_blank'
              element.href = ipfsUrl
              element.download = item.name
              element.click()
              document.body.removeChild(element)
            } else {
              let element = document.createElement('iframe')
              element.style.display = 'none' // 防止影响页面
              element.style.height = 0 // 防止影响页面
              element.src = ipfsUrl
              document.body.appendChild(element)
              // element.target = "_blank";
              // element.href = item.ipfsUrl;
              // element.download = item.name;
              // element.click();
            }
          } else {
            console.log(ipfsUrl)
            this.downloadIamge(ipfsUrl, item.name)
          }
        })
        .catch((err) => {
          this.table.loading = false
          console.log(err)
          if (
            err.response.status === 401 ||
                        err.response.status === 500
          ) {
            this.$router.push({
              name: 'login'
            })
          }
        })
    },
    downloadIamge (imgsrc, name) {
      console.log(imgsrc)
      //   imgsrc =
      //       'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF'
      // 下载图片地址和图片名
      var image = new Image()
      // 解决跨域 Canvas 污染问题
      image.setAttribute('crossOrigin', 'anonymous')
      console.log(image)
      image.onload = () => {
        var canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height
        var context = canvas.getContext('2d')
        context.drawImage(image, 0, 0, image.width, image.height)
        var url = canvas.toDataURL('image/png') // 得到图片的base64编码数据
        var a = document.createElement('a') // 生成一个a元素
        var event = new MouseEvent('click') // 创建一个单击事件
        a.download = name || 'photo' // 设置图片名称
        console.log('1')
        a.href = url // 将生成的URL设置为a.href属性
        a.dispatchEvent(event) // 触发a的单击事件
      }
      image.src = imgsrc
    },
    submit () {
      this.searchData.ready = false
      this.searchData.clickNum = true

      this.indexPage = 1
      this.pageTotal = 10
      this.getFileListFun()
    },
    showLocalFun (type) {
      if (type === 5) {
        let upload = document.getElementById('upload')
        this.clickType = 5
        upload.click()
      } else if (type === 1) {
        this.clickType = 1
        let uploadOne = document.getElementById('upload1')
        uploadOne.click()
      } else if (type === 2) {
        this.clickType = 1
        let uploadTow = document.getElementById('upload2')
        uploadTow.click()
      } else if (type === 3) {
        this.clickType = 1
        let uploadThree = document.getElementById('upload3')
        uploadThree.click()
      } else if (type === 4) {
        this.clickType = 1
        let uploadFour = document.getElementById('upload4')
        uploadFour.click()
      } else if (type === 6) {
        this.clickType = 1
        let uploadFour = document.getElementById('upload6')
        uploadFour.click()
      }
    },
    previewImage (e) {
      var dt = e.target
      this.dtcomm = dt.files[0].type
      if (dt.files.length > 1000) {
        this.$message.error({
          content: this.$t('hint27')
        })
        return
      }
      if (this.clickType != 5) {
        for (var i = 0; i !== dt.files.length; i++) {
          this.uploadFile(dt.files[i])
        }
        // console.log('kankana1:', dt.files[0])
      } else {
        this.uploadFile(dt.files)
        // console.log('kankana:', dt.files)
      }
      event.target.value = null
    },
    // updateFileNameApi
    updateFileNameFun () {
      let params = {}
      params.filName = this.changeData.itemData.fileRealName
      params.id = this.changeData.itemData.id
      let token = localStorage.token
      this.$axios({
        method: 'post',
        url: apis.updateFileNameApi,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token,
          Encryption: 0
        }
      })
        .then((res) => {
          this.table.list[
            this.changeData.index
          ].fileRealName = this.changeData.itemData.fileRealName
          this.openMaskControl.nameBoolean = false
          this.changeData.itemData = {}
          this.changeData.index = null
        })
        .catch((err) => {
          this.$message.error({
            content: this.$t('hint125'),
            background: true,
            duration: 5
          })
        })
    },
    async getAllFile (prefix, type) {
      this.table.loading = true
      let obj = {}
      let params = {}
      if (prefix) {
        params.prefix = prefix
      } else {
        params.prefix = ''
      }
      params.bucketName = this.bucketName
      obj.id = 1
      obj.jsonrpc = '2.0'
      obj.method = 'web.ListObjects'
      obj.params = params
      let minioToekn = localStorage.minioToekn
      await this.$axios({
        method: 'post',
        url: base.homeMinioUrl + '/api/webrpc',
        data: obj,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + minioToekn,
          Encryption: 0,
          Page: 0,
          Pagesize: 50
        }
      })
        .then((res) => {
          let v = []
          this.totalFile = res.data.result.count
          let that = this
          if (res.data.result.objects) {
            this.table.total = res.data.result.objects.length
            res.data.result.objects.forEach((element) => {
              element.fileSize = this.bytesToSize(
                parseFloat(element.size)
              )
              if (element.contentType === '') {
                element.fileRealType = 'folder'
              } else {
                let dotIndex = element.name.lastIndexOf('.')
                element.fileRealType = element.name.slice(
                  dotIndex + 1
                )
              }
              element.coverUrl = this.fileRealTypeFun(
                element.fileRealType
              )
              element.fileTypeName = this.fileTypeId
              element.hoverItem = false
              if (element.name.length > 30) {
                let stringStart = element.name.slice(0, 10)
                let srgingEnd = element.name.slice(
                  element.name.length - 11
                )
                element.nameShow =
                  stringStart + '...' + srgingEnd
                element.toolTip = true
              } else {
                element.nameShow = element.name
                element.toolTip = false
              }
              if (element.fileType === 1) {
                element.fileRealType = 'folder'
              } else {
                let dotIndex = element.name.lastIndexOf('.')
                element.fileRealType = element.name.slice(
                  dotIndex + 1
                )
              }
              if (element.state === 0) {
                element.statusName = that.$t('uploadSuc')
                element.itemDSL = true
              } else if (element.state === 1) {
                element.statusName = that.$t('uploading')
                element.itemDSL = false
              } else if (element.state === 9) {
                element.statusName = that.$t('chainSuc')
              } else if (element.state === 3) {
                element.statusName = that.$t('chainReview')
              } else if (element.state === 4) {
                element.statusName = that.$t('returned')
              }
              if (element.fileType === 1) {
                element.dataStatusName = that.$t('hot')
                element.itemDSL = true
              } else if (element.fileType === 2) {
                element.dataStatusName = that.$t('hot')
                element.itemDSL = true
              } else if (element.fileType === 3) {
                element.dataStatusName = that.$t('cold')
              }
            })
          } else {
            this.table.total = 0
          }
          this.arrayA = res.data.result.objects
          this.changeDate(this.searchTable)
          if (this.searchTable !== null) { // 筛选出文件夹，并排在前面
            this.searchTable.forEach((e, i) => {
              if (e.contentType === '') {
                // console.log('文件列表:', e)
                e.nameShow = e.nameShow.split('/')[0]
                v.unshift(e)
                // this.searchTable.splice(i, 1)
              }
            })
            v.forEach(e => {
              this.searchTable.splice(this.searchTable.indexOf(e => e.contentType === ''), 1)
              this.searchTable.unshift(e)
            })
          }
          this.table.loading = false
          this.openMaskControl.addFolderBoolean = false
          // 控制只能单击
          this.clickControl.arrangementItem = true
          if (type) {
            this.arrangementList.push(type)
            console.log(
              'this.arrangementList',
              this.arrangementList
            )
            this.$message.info({
              content: this.$t('hint28'),
              // background: true,
              duration: 3
            })
          }
        }).catch(err => {
        // console.log('err', err.response.status)
        })
    },
    // getFileListApi
    getFileListFun (prefix, type) {
      this.table.loading = true
      let obj = {}
      let params = {}
      if (prefix) {
        params.prefix = prefix
      } else {
        params.prefix = ''
      }
      console.log('文件层级:', params.prefix)
      if (params.prefix) {
        this.signs = false
      } else {
        this.signs = true
      }
      console.log('显示:', this.signs)
      params.bucketName = this.bucketName
      obj.id = 1
      obj.jsonrpc = '2.0'
      obj.method = 'web.ListObjects'
      obj.params = params
      let minioToekn = localStorage.minioToekn
      this.$axios({
        method: 'post',
        url: base.homeMinioUrl + '/api/webrpc',
        data: obj,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + minioToekn,
          Encryption: 0,
          Page: this.currentPage,
          Pagesize: this.pageSize
        }
      })
        .then((res) => {
          let v = []
          let that = this
          this.totalFile = res.data.result.count
          if (res.data.result.objects) {
            this.table.total = res.data.result.objects.length
            res.data.result.objects.forEach((element) => {
              element.fileSize = this.bytesToSize(
                parseFloat(element.size)
              )
              if (element.contentType === '') {
                element.fileRealType = 'folder'
              } else {
                let dotIndex = element.name.lastIndexOf('.')
                element.fileRealType = element.name.slice(
                  dotIndex + 1
                )
              }
              element.coverUrl = this.fileRealTypeFun(
                element.fileRealType
              )
              element.fileTypeName = this.fileTypeId
              element.hoverItem = false
              if (element.name.length > 30) {
                let stringStart = element.name.slice(0, 10)
                let srgingEnd = element.name.slice(
                  element.name.length - 11
                )
                element.nameShow =
                                    stringStart + '...' + srgingEnd
                element.toolTip = true
              } else {
                element.nameShow = element.name
                element.toolTip = false
              }
              if (element.fileType === 1) {
                element.fileRealType = 'folder'
              } else {
                let dotIndex = element.name.lastIndexOf('.')
                element.fileRealType = element.name.slice(
                  dotIndex + 1
                )
              }
              if (element.state === 0) {
                element.statusName = that.$t('uploadSuc')
                element.itemDSL = true
              } else if (element.state === 1) {
                element.statusName = that.$t('uploading')
                element.itemDSL = false
              } else if (element.state === 9) {
                element.statusName = that.$t('chainSuc')
              } else if (element.state === 3) {
                element.statusName = that.$t('chainReview')
              } else if (element.state === 4) {
                element.statusName = that.$t('returned')
              }
              if (element.fileType === 1) {
                element.dataStatusName = that.$t('hot')
                element.itemDSL = true
              } else if (element.fileType === 2) {
                element.dataStatusName = that.$t('hot')
                element.itemDSL = true
              } else if (element.fileType === 3) {
                element.dataStatusName = that.$t('cold')
              }
            })
          } else {
            this.table.total = 0
          }
          this.table.list = res.data.result.objects
          this.searchTable = res.data.result.objects
          this.changeDate(this.searchTable)
          if (this.searchTable !== null) { // 筛选出文件夹，并排在前面
            this.searchTable.forEach((e, i) => {
              if (e.contentType === '') {
                // console.log('文件列表:', e)
                e.nameShow = e.nameShow.split('/')[0]
                v.unshift(e)
                // this.searchTable.splice(i, 1)
              }
            })
            v.forEach(e => {
              this.searchTable.splice(this.searchTable.indexOf(e => e.contentType === ''), 1)
              this.searchTable.unshift(e)
            })
          }
          this.table.loading = false
          this.openMaskControl.addFolderBoolean = false
          // 控制只能单击
          this.clickControl.arrangementItem = true
          if (type) {
            this.arrangementList.push(type)
            console.log(
              'this.arrangementList',
              this.arrangementList
            )
            this.$message.info({
              content: this.$t('hint28'),
              // background: true,
              duration: 3
            })
          }
        })
        .catch((err) => {
          this.table.loading = false
          console.log(err)
          // if (
          //   err.response.status === 401 ||
          //               err.response.status === 500
          // ) {
          //   this.$router.push({
          //     name: 'login'
          //   })
          // }
        })
    },
    // fileRealType 文件类型 转化
    fileRealTypeFun (type, img) {
      type = type.toLowerCase()
      if (type === 'doc' || type === 'docx') {
        this.fileTypeId = 1
        return require('../assets/fileImg/icon／word_30@2x.png')
      } else if (type === 'zip') {
        this.fileTypeId = 2
        return require('../assets/fileImg/icon／zip_30@2x.png')
      } else if (
        type === 'xlsx' ||
                type === 'xls' ||
                type === 'xlsm' ||
                type === 'xlt' ||
                type === 'xlsx' ||
                type === 'xml'
      ) {
        this.fileTypeId = 3
        return require('../assets/fileImg/icon／excle_30@2x.png')
      } else if (type === 'ppt' || type === 'pot' || type === 'pptx') {
        this.fileTypeId = 4
        return require('../assets/fileImg/icon／ppt_30@2x.png')
      } else if (type === 'pdf') {
        this.fileTypeId = 5
        return require('../assets/fileImg/icon／pdf_30@2x.png')
      } else if (type === 'psd' || type === 'pdd') {
        this.fileTypeId = 6
        return require('../assets/fileImg/icon／ps_30@2x.png')
      } else if (type === 'ai') {
        this.fileTypeId = 7
        return require('../assets/fileImg/icon／ai_30@2x.png')
      } else if (
        type === 'mp3' ||
                type === 'wma' ||
                type === 'avi' ||
                type === 'rm' ||
                type === 'rmvb' ||
                type === 'flv' ||
                type === 'mpg' ||
                type === 'mov' ||
                type === 'mkv'
      ) {
        this.fileTypeId = 8
        return require('../assets/fileImg/icon／video_30@2x.png')
      } else if (
        type === 'avi' ||
                type === 'rmvb' ||
                type === 'rm' ||
                type === 'asf' ||
                type === 'divx' ||
                type === 'mpg' ||
                type === 'mpeg' ||
                type === 'mp4' ||
                type === 'mkv' ||
                type === 'qlv'
      ) {
        this.fileTypeId = 9
        return require('../assets/fileImg/icon／video_30@2x.png')
      } else if (
        type === 'BMP' ||
                type === 'jpg' ||
                type === 'jpeg' ||
                type === 'png' ||
                type === 'gif'
      ) {
        this.fileTypeId = 10
        return require('../assets/fileImg/icon／pic_30@2x.png')
      } else if (type === 'html') {
        this.fileTypeId = 11
        return require('../assets/fileImg/icon／html_30@2x.png')
      } else if (type === 'css') {
        this.fileTypeId = 12
        return require('../assets/fileImg/icon／css_30@2x.png')
      } else if (type === 'folder') {
        this.fileTypeId = 0
        return require('../assets/fileImg/icon／folder_30@2x.png')
      } else {
        this.fileTypeId = 13
        return require('../assets/fileImg/icon／all_30@2x.png')
      }
    },
    bytesToSize (limit) {
      var size = ''
      if (limit < 0.1 * 1024) {
        // 小于0.1KB，则转化成B
        size = limit.toFixed(2) + 'B'
      } else if (limit < 0.1 * 1024 * 1024) {
        // 小于0.1MB，则转化成KB
        size = (limit / 1024).toFixed(2) + 'KiB'
      } else if (limit < 0.1 * 1024 * 1024 * 1024) {
        // 小于0.1GB，则转化成MB
        size = (limit / (1024 * 1024)).toFixed(2) + 'MiB'
      } else if (limit < 0.1 * 1024 * 1024 * 1024 * 1024) {
        // 其他转化成GB
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + 'GiB'
      } else {
        size = (limit / (1024 * 1024 * 1024 * 1024)).toFixed(2) + 'TiB'
      }
      var sizeStr = size + '' // 转成字符串
      var index = sizeStr.indexOf('.') // 获取小数点处的索引
      var dou = sizeStr.substr(index + 1, 2) // 获取小数点后两位的值
      // eslint-disable-next-line eqeqeq
      if (dou === '00') {
        // 判断后两位是否为00，如果是则删除00
        return (
          sizeStr.substring(0, index) + sizeStr.substr(index + 3, 3)
        )
        // eslint-disable-next-line no-unreachable
        // console.log('danwei:', sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2))
      }
      return size
    },
    onCopy () {
      this.$message.success({
        content: this.$t('copyMessage')
      })
    },
    folderNameGet (files) {
      let pash = files[0].webkitRelativePath
      let folderName = pash.split('/')
      return folderName[0]
    },
    uploadFile: function (file) {
      let that = this
      let flag = true
      let sizeTip = true
      // console.log('当前文件：', file)
      // console.log(file.length)
      // let inputDOM = this.$refs.upload6;
      // this.file = inputDOM.files[0]; // 通过DOM取文件数据
      //   var keys = AES.generatekey(16)
      let time = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      if (this.table.list !== null) {
        this.table.list.forEach((e, i) => {
          if (e.name === file.name) {
            flag = false
            this.$message.error({
              content: this.$t('hint29')
            })
            // return false
          }
        })
        this.upFileList.forEach((e, i) => {
          if (e.name === file.name) {
            if (e.loading === true) {
              flag = false
              this.$message.error({
                content: this.$t('hint30')
              })
            }
            // return false
          }
        })
      }
      if (file.size > 32737418240) {
        sizeTip = false
        this.$message.error({
          content: this.$t('hint31')
        })
        return
      }
      let item = {
        uploadPercentage: 0,
        loading: true,
        succese: false,
        cell: false,
        time: time,
        source: null,
        speeds: 0,
        fileSizes: 0,
        num: 0,
        unit: null
      }
      // this.cebianDataFun()
      var fd = new FormData()
      if (this.clickType === 5) {
        item.name = this.folderNameGet(file)
        let size = 0
        for (let i = 0; i < file.length; i++) {
          fd.append('file', file[i])
          size = size + file[i].size
        }
        // fd = AES.encrypt(JSON.stringify(fd), keys)
        item.size = this.bytesToSize(size)
      } else {
        // console.log('aiaiaia')
        item.size = this.bytesToSize(file.size)
        item.name = file.name
        fd.append('file', file)
        // fd = AES.encrypt(JSON.stringify(fd), keys)
      }
      let token = localStorage.token
      item.source = this.$axios.CancelToken.source() // 这里初始化source对象
      let prefix = ''
      let prefixName = ''
      // console.log(this.arrangementList)
      for (let i = 1; i < this.arrangementList.length; i++) {
        prefix = prefix + this.arrangementList[i]
      }
      // console.log(file.name)
      // console.log(this.arrangementList)
      prefixName = prefix + file.name
      // console.log(prefixName)
      let objectName = prefixName
      // let objectName = encodeURIComponent(prefixName)
      let minioToekn = localStorage.minioToekn
      let moment = this.$moment().utc().format('YYYYMMDDTHHmmss') + 'Z'
      let stime = new Date().getTime() // 存储时间
      let sloaded = 0 // 存储上传的内容
      if (flag && sizeTip) {
        this.upFileList.unshift(item)
        this.cebianDataFun()
        this.$axios({
          method: 'PUT',
          url:
            base.homeMinioUrl +
            '/api/upload/' +
            this.bucketName +
            '/' +
            objectName,
          data: file,
          cancelToken: item.source.token,
          headers: {
            'Content-Type': that.dtcomm,
            Authorization: 'Bearer ' + minioToekn,
            'x-amz-date': moment,
            Encryption: 0,
            Lableid: that.tabName
          },
          onUploadProgress (e) {
            // console.log('12312312312', e)
            if (e.lengthComputable) {
              item.uploadPercentage = (e.loaded / e.total) * 100
              item.num = parseFloat(item.uploadPercentage).toFixed(2)
              // that.$set(that.schedule, 'num', parseFloat(item.uploadPercentage).toFixed(2))
              // 上传速度
              // 上传结束时间
              let endTime = new Date().getTime()

              // 1、时间差（时间段）
              let dTime = (endTime - stime) / 1000 // 毫秒换算成秒

              // 2、当前时间段内上传的文件大小
              let dloaded = e.loaded - sloaded

              // 3、当前速度= 当前上传文件的内容/当前时间差
              that.speed = dloaded / dTime

              // 基本单位：字节b
              // 1mb=1024kb    1kb=1024b
              // b/s
              item.unit = 'B/s' // 不足1kb，以b/s来计算速度
              // kb/s
              if (that.speed / 1024 > 1) { // 当大小超过1024b(即1kb时)，以kb/s来计算速度
                item.unit = 'KB/s'
                that.speed = that.speed / 1024
              }
              // mb/s
              if (that.speed / 1024 > 1) { // 当大小超过1024Kb(即1mb时)，以mb/s来计算速度
                item.unit = 'MB/s'
                that.speed = that.speed / 1024
              }

              if (e.loaded === e.total) {
                item.loading = false
                item.succese = true
              }
              item.speeds = that.speed.toFixed(2)
              item.fileSizes = that.readFileSizeUnit(e.total)
            }
          }
        })
          .then((res) => {
            item.loading = false
            item.succese = true
            this.cebianDataFun()
            if (this.openMaskControl.upBoxBoolean) {
              this.getFileListFun(prefix)
            }
          })
          .catch((err) => {
            console.log('err', err)
            item.loading = false
            item.succese = false
            if (!item.cell) {
              item.error = true
            }
            this.cellUp(item)
            this.cebianDataFun()
            if (err.response.data === 'We encountered an internal error, please try again.: cause(当前文件已存在！)') {
              this.$message.error({
                content: this.$t('hint29'),
                duration: 5
              })
            } else {
              this.$message.error({
                content: this.$t('hint42'),
                duration: 5
              })
            }
          })
      }
    },
    format: function format (value, power) {
      return (value / Math.pow(this.STEP, power)).toFixed(2) + this.UNITS[power]
    },
    readFileSizeUnit: function (value) {
      let that = this
      value = parseFloat(value, 10)
      for (var i = 0; i < that.UNITS.length; i++) {
        if (value < Math.pow(that.STEP, i)) {
          if (that.UNITS[i - 1]) {
            return that.format(value, i - 1)
          }
          return value + that.UNITS[i]
        }
      }
      return that.format(value, i - 1)
    },
    cebianDataFun () {
      this.cebianlanData.total = this.upFileList.length
      this.cebianlanData.succese = 0
      this.cebianlanData.loading = 0
      console.log('上传的文件:', this.cebianlanData.total)
      this.upFileList.forEach((element) => {
        if (element.succese) {
          this.cebianlanData.succese++
        } else if (element.loading) {
          this.cebianlanData.loading++
        }
      })
      console.log('上传中的文件个数:', this.cebianlanData.loading)
    },
    cellUp (item, index) {
      console.log('当前项:', item)
      item.cell = true
      item.succese = false
      item.loading = false
      if (item.source) {
        // 我先判断soucre是否存在，因为如果我打开弹框不作任何操作，点击取消按钮没有这一层判断的话，that.source.cancel('取消上传');会报错。
        item.source.cancel(this.$t('cancel')) // "取消上传"这几个字，会在上面catch（）的error中输出的，可以console看一下。
      }
    },
    onDrag: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.drogBoolean = true
    },
    onDrop: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.drogBoolean = false
      var dt = e.dataTransfer
      if (dt.files.length > 1000) {
        this.$message.error({
          content: this.$t('hint27')
        })
        return
      }
      if (this.clickType !== 5) {
        for (var i = 0; i !== dt.files.length; i++) {
          this.uploadFile(dt.files[i], i)
          console.log('到这了？')
        }
      } else {
        console.log('拖曳', dt.items)
        for (var i = 0; i !== dt.files.length; i++) {
          console.log(dt.files[i])
        }
        this.uploadFile(dt.items)
      }
    },
    closeUpFileBoxFun () {
      console.log(this.cebianlanData)
      this.openMaskControl.upBoxBoolean = false
      this.cebianlanData.boolean = true
    },
    // 按时间排序
    changeDate (val) {
      // console.log('val:', val)
      if (val !== null) {
        val.sort((a, b) => {
          let aTimeString = a.lastModified
          let bTimeString = b.lastModified
          aTimeString = aTimeString.replace(/-/g, '/')
          bTimeString = bTimeString.replace(/-/g, '/')
          let aTime = new Date(aTimeString).getTime() // 转化为距1970年的毫秒
          let bTime = new Date(bTimeString).getTime()
          return bTime - aTime // 降序排序
        })
      }
    },
    upBoxShowFun () {
      console.log('lasdsd:', this.bucktList)
      if (this.bucktList === null) {
        this.$message.info({
          content: this.$t('hint24'),
          background: true,
          duration: 5
        })
      } else if (this.bucktList.length > 0 && this.bucktList !== null) {
        this.openMaskControl.upBoxBoolean = true
        this.cebianlanData.boolean = false
      }
    },
    sureSelectFun () {
      this.searchData.clickNum = true
      this.selectData.selectBoolean = false
      if (this.selectData.time || this.selectData.statusId !== 99) {
        this.searchData.iconHas = true
      }

      this.indexPage = 1
      this.pageTotal = 10
      this.getFileListFun()
    },
    resetFun () {
      this.selectData.selectBoolean = false
      this.selectData.statusId = 99
      this.outfolderList = []
      this.selectData.statusList.forEach((element) => {
        element.isSelect = false
      })
      this.selectData.statusList[0].isSelect = true
      this.selectData.time = []
      this.searchData.iconHas = false

      this.indexPage = 1
      this.pageTotal = 10
      this.getFileListFun()
    },
    changeStatusFun (index) {
      this.selectData.statusList.forEach((element) => {
        element.isSelect = false
      })
      this.selectData.statusList[index].isSelect = true
      this.selectData.statusId = this.selectData.statusList[index].id
      this.outfolderList = []
    },
    bucktlistFun () {
      let obj = {}
      let params = {}
      obj.id = 1
      obj.jsonrpc = '2.0'
      obj.method = 'web.ListBuckets'
      obj.params = params
      let minioToekn = localStorage.minioToekn
      this.$axios({
        method: 'post',
        url: base.homeMinioUrl + '/api/webrpc',
        data: obj,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + minioToekn,
          Encryption: 0
        }
      })
        .then((res) => {
          this.bucktList = res.data.result.buckets
          this.bucketName = this.bucktList[0].name
          this.getFileListFun()
        })
        .catch((err) => {
          this.table.loading = false
          console.log(err)
          if (
            err.response.status === 401 ||
                        err.response.status === 500
          ) {
            this.$router.push({
              name: 'login'
            })
          }
        })
    },
    changeBucketFun (command) {
      this.bucketName = command
      this.getFileListFun()
    },
    changeTagFun (command) {
      console.log('command:', command)
      this.selectTag = command.name
      if (this.arrangementList.length === 1) {
        if (command.name === '全部') {
          this.table.list = this.searchTable
        } else {
          this.table.list = this.filterById(this.searchTable, command.id)
        }
      }
      if (this.arrangementList.length > 1) {
        if (command.name === '全部') {
          this.table.list = this.arrayA
        } else {
          this.table.list = this.filterById(this.arrayA, command.id)
        }
      }
    }
  }
}
</script>
