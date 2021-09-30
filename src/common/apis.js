import baseApis from './baseUrl'

export default {
  // 登录
  userLoginApi: baseApis.homeUrl + '/login',
  // 上传文件
  uploadFileApi: baseApis.homeUrl + '/upload',
  // 展现列表数据
  getFileListApi: baseApis.homeUrl + '/getFileOrFolderList',
  // 数据列表
  getFolderByUserListApi: baseApis.homeUrl + '/getFolderByUserList',
  // 最近文件 getDealFileByUser
  getDealFileByUserApi: baseApis.homeUrl + '/getDealFileByUser',
  // 更新文件
  updateFileNameApi: baseApis.homeUrl + '/updateFileName',
  // 下载文件
  downLoadDateApi: baseApis.homeUrl + '/downLoadDate',
  // 新增文件
  addFolderApi: baseApis.homeUrl + '/addFolder',
  // 重命名
  renameFolderOrFileApi: baseApis.homeUrl + '/renameFolderOrFile',
  // 移动文件夹
  mvFileBatchApi: baseApis.homeUrl + '/mvFileBatch',
  // 上次文件夹
  uploadApi: baseApis.homeUrl + '/uploadApi',
  // 查询文件上链信息
  getDealListByFileIdApi: baseApis.homeUrl + '/getDealListByFileId',
  // 退出登录
  loginOutApi: baseApis.homeUrl + '/logout',
  // 注册
  registeredApi: baseApis.homeUrl + '/registered',
  // 发送验证码
  sendSmsAuthCodeOrEmail: baseApis.homeUrl + '/sendSmsAuthCodeOrEmail',
  // 获取用户个人信息
  currentUserApi: baseApis.homeUrl + '/currentUser',
  // 上传附件
  uploadAccessoryApi: baseApis.homeUrl + '/uploadAccessory',
  // 修改提醒状态
  updRemindStateApi: baseApis.homeUrl + '/updRemindState',
  // 获取首页信息
  homeDataCountApi: baseApis.homeUrl + '/homeDataCount',
  // 提交实名认证
  realAuthApi: baseApis.homeUrl + '/realAuth',
  // 获取标签列表
  labelListApi: baseApis.homeUrl + '/labelList',
  // 添加标签
  addLabelApi: baseApis.homeUrl + '/addLabel',
  // 删除标签
  delLabelApi: baseApis.homeUrl + '/delLabel',
  // 数据存储类型列表
  dataStorageTypeListApi: baseApis.homeUrl + '/dataStorageTypeList',
  // 数据存储类型添加
  dataStorageTypeAddApi: baseApis.homeUrl + '/dataStorageTypeAdd',
  // 邮箱手机验证码 验证
  emailOrSmsAuthApi: baseApis.homeUrl + '/emailOrSmsAuth',
  // 申请数据主体
  dataMainBodyApplyApi: baseApis.homeUrl + '/dataMainBodyApply',
  // 数据主体列表
  dataMainBodyListApi: baseApis.homeUrl + '/dataMainBodyList',
  // 忘记密码
  forgetPassWordApi: baseApis.homeUrl + '/forgetPassWord',
  // updLabel 修改标签
  updLabelApi: baseApis.homeUrl + '/updLabel',
  // 删除数据主体
  dataMainBodyDelApi: baseApis.homeUrl + '/dataMainBodyDel',
  // 数据主体查询
  dataMainBodyDetailApi: baseApis.homeUrl + '/dataMainBodyDetail',
  // 修改数据主体
  dataMainBodyUpdApi: baseApis.homeUrl + '/dataMainBodyUpd',
  // 数据主体扩容
  dataMainBodyCapacityApi: baseApis.homeUrl + '/dataMainBodyCapacity',
  // 数据主体升级
  dataMainBodyUpgradeApi: baseApis.homeUrl + '/dataMainBodyUpgrade',
  // 数据扩容响应列表
  dataMainBodyCapacityListApi: baseApis.homeUrl + '/dataMainBodyCapacityList',
  // 数据主体保存
  dataMainBodyApplySaveApi: baseApis.homeUrl + '/dataMainBodyApplySave',
  // 数据主体保存查询
  dataMainBodyApplyInfoByPidApi: baseApis.homeUrl + '/dataMainBodyApplyInfoByPid',
  // 数据主体升级列表
  dataMainBodyUpgradeListApi: baseApis.homeUrl + '/dataMainBodyUpgradeList',
  // 登录获取miniotoken
  getminTokenApi: baseApis.homeUrl + '/getMinioToken',
  // 获取新闻资讯
  newsApi: baseApis.homeUrl + '/news',
  // 全网统计
  filcoinNetCountApi: baseApis.homeUrl + '/filcoinNetCount',
  // 短信邮箱修改
  updEmailOrSmsAuthApi: baseApis.homeUrl + '/updEmailOrSmsAuth',
  // 获取二维码
  getQrCodeApi: baseApis.homeUrl + '/getQrCode',
  // 二维码回调
  qrCodeCallBackApi: baseApis.homeUrl + '/qrCodeCallBack',
  // 根据请求uuid获取用户登录状态
  pollingByUuidApi: baseApis.homeUrl + '/pollingByUuid',
  // 手机号绑定
  mobileBindApi: baseApis.homeUrl + '/mobileBind',
  // 申请上链
  applyChainApi: baseApis.homeUrl + '/applyChain',
  // 数据主体账号创建
  dataMainBodyAccCretadApi: baseApis.homeUrl + '/dataMainBodyAccCretad',
  // 根据钱包地址获取DataCap
  getDataCapByWalletApi: baseApis.homeUrl + '/getDataCapByWallet',
  // 存储服务节点check
  storageMinerCheck: baseApis.homeUrl + '/storageMinerCheck',
  // 存储服务节点申请
  storageMinerApply: baseApis.homeUrl + '/storageMinerApply'
}
