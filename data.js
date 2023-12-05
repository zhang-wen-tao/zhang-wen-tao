// 主标题，副标题
const title = ["", ""]
const pageTip = ""
// 搜索页热门机型, 机型name，或者 '品牌 机型'
const hotModels = [];
// 机型数据 绿色：#000000， 黄色：#E6A23C， 蓝色：#0071e3
const Data = [
  {
    id: "huawei",
    name: "华为", // 品牌名称
    tips: "",   // 机型列表上方统一提示
    tipsImg: "huawei.png",
    models: [
      { name: "Mate50", tips: "支持使用", color: "#000000" },
      { name: "Mate50 Pro", tips: "支持使用", color: "#000000" },
      { name: "Mate50 RS保时捷", tips: "支持使用", color: "#000000" },
      { name: "Mate50 E", tips: "支持使用", color: "#000000" },
      { name: "Pocket S", tips: "支持使用", color: "#000000" },
      { name: "P30", tips: "支持使用", color: "#000000" },
      { name: "P30 Pro", tips: "支持使用", color: "#000000" },
      { name: "P40", tips: "支持使用", color: "#000000" },
      { name: "P40 4G", tips: "支持使用", color: "#000000" },
      { name: "P40 Pro", tips: "支持使用", color: "#000000" },
      { name: "P40 Pro+", tips: "支持使用", color: "#000000" },
      { name: "Mate40", tips: "支持使用", color: "#000000" },
      { name: "Mate40 Pro", tips: "支持使用", color: "#000000" },
      { name: "Mate40 Pro+", tips: "支持使用", color: "#000000" },
      { name: "Mate40 Pro 4G版", tips: "支持使用", color: "#000000" },
      { name: "Mate40 RS保时捷", tips: "支持使用", color: "#000000" },
      { name: "Mate40 E", tips: "支持使用", color: "#000000" },
      { name: "Mate40 E Pro", tips: "支持使用", color: "#000000" },
      { name: "Mate40 E 4G版", tips: "支持使用", color: "#000000" },
      { name: "Mate30", tips: "支持使用", color: "#000000" },
      { name: "Mate30 5G", tips: "支持使用", color: "#000000" },
      { name: "Mate30 Pro 5G", tips: "支持使用", color: "#000000" },
      { name: "Mate30 Pro", tips: "支持使用", color: "#000000" },
      { name: "Mate30E Pro 5G", tips: "支持使用", color: "#000000" },
      { name: "Mate30 RS保时捷", tips: "支持使用", color: "#000000" },
      { name: "Mate 20", tips: "支持使用", color: "#000000" },
      { name: "Mate 20 Pro", tips: "支持使用", color: "#000000" },
      { name: "Mate 20 RS保时捷", tips: "支持使用", color: "#000000" },
      { name: "Mate 20X（4G）", tips: "支持使用", color: "#000000" },
      { name: "Mate 20X（5G）", tips: "支持使用", color: "#000000" },
      { name: "Mate 10", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
      { name: "Mate 10 Pro", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
      { name: "Mate RS 保时捷", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
      { name: "Mate 10 保时捷", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
      { name: "Nova4", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
      { name: "Nova4e", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
      { name: "Nova5", tips: "支持使用", color: "#000000" },
      { name: "Nova5 Pro", tips: "支持使用", color: "#000000" },
      { name: "Nova5i", tips: "支持使用", color: "#000000" },
      { name: "Nova5i Pro", tips: "支持使用", color: "#000000" },
      { name: "Nova5z", tips: "支持使用", color: "#000000" },
      { name: "Nova6", tips: "支持使用", color: "#000000" },
      { name: "Nova6 SE", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
      { name: "Nova6 5G", tips: "支持使用", color: "#000000" },
      { name: "Nova7 5G", tips: "支持使用", color: "#000000" },
      { name: "Nova7 Pro 5G", tips: "支持使用", color: "#000000" },
      { name: "Nova7 SE 5G", tips: "支持使用", color: "#000000" },
      { name: "Nova7 SE 5G 乐活版", tips: "支持使用", color: "#000000" },
      { name: "Nova8", tips: "支持使用", color: "#000000" },
      { name: "Nova8 Pro", tips: "支持使用", color: "#000000" },
      { name: "Nova8 Pro 4G", tips: "支持使用", color: "#000000" },
      { name: "Nova8 SE 活力版", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
      { name: "Nova9", tips: "支持使用", color: "#000000" },
      { name: "Nova9 SE", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
      { name: "Nova9 Pro", tips: "支持使用", color: "#000000" },
      { name: "Nova10 4G", tips: "支持使用", color: "#000000" },
      { name: "Nova10 Pro 4G", tips: "支持使用", color: "#000000" },
      { name: "Nova10 SE", tips: "支持使用", color: "#000000" },
      { name: "MateX2", tips: "支持使用", color: "#000000" },
      { name: "MateX2 4G", tips: "支持使用", color: "#000000" },
      { name: "MateXs2", tips: "支持使用", color: "#000000" },
      { name: "Mate Xs", tips: "支持使用", color: "#000000" },
      { name: "Mate X", tips: "10.支持使用", color: "#000000" },
      { name: "P50（高通888平台） 4G", tips: "支持使用", color: "#000000" },
      { name: "P50 Pro（Kirin9000平台） 4G", tips: "支持使用", color: "#000000" },
      { name: "P50 Pro（高通888平台） 4G", tips: "支持使用", color: "#000000" },
      { name: "P50 Pocket 4G", tips: "支持使用", color: "#000000" },
      { name: "P50 E 4G", tips: "支持使用", color: "#000000" },
      { name: "P20", tips: "支持使用", color: "#000000" },
      { name: "P20 Pro", tips: "支持使用", color: "#000000" },
      { name: "畅享50", tips: "支持使用", color: "#000000" },
      { name: "畅享50 Pro", tips: "支持使用", color: "#000000" },
      { name: "畅享50z", tips: "支持使用", color: "#000000" },
      { name: "畅享10 Plus", tips: "支持使用", color: "#000000" },
      { name: "畅享10", tips: "支持使用", color: "#000000" },
      { name: "畅享10S", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
      { name: "畅享9 Plus", tips: "支持使用", color: "#000000" },
      { name: "畅享9S", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
      { name: "麦芒8", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
    ]
  },
  {
    id: "iphone",
    name: "苹果",
    tips: "",
    tipsImg: "iphone.jpg",
    models: [
      { name: "iPhone 14", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone 14 Plus", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone 14 Pro", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone 14 Pro Max", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPad （第9代）", tips: "支持使用（广电4G网络服务，请升级至iOS16.4版本）", color: "#000000" },
      { name: "iPad mini（第6代）", tips: "支持使用（广电4G网络服务，请升级至iOS16.4版本）", color: "#000000" },
      { name: "iPad Pro（第3代）11英寸", tips: "支持使用（广电4G网络服务，请升级至iOS16.4版本）", color: "#000000" },
      { name: "iPad Pro（第5代）12.9英寸", tips: "支持使用（广电4G网络服务，请升级至iOS16.4版本）", color: "#000000" },
      { name: "iPad Air（第5代）", tips: "支持使用（广电4G网络服务，请升级至iOS16.4版本）", color: "#000000" },
      { name: "iPhone XS ", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone XS Max", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone XR", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone 11", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone 11 Pro", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone 11 Pro Max", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone SE2", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone 12", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone 12 mini", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone 12 Pro", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone 12 Pro Max", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone SE3", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone 13", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone 13 mini", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone 13 Pro", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone 13 Pro Max", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone 8", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone 8 Plus", tips: "支持使用（请升级最新版本）", color: "#000000" },
      { name: "iPhone X", tips: "支持使用（请升级最新版本）", color: "#000000" },
    ]
  },
  {
    id: "mi",
    name: "小米",
    tips: "",
    tipsImg: "mi.png",
    models: [
      { name: "MIX Fold2", tips: "支持使用", color: "#000000" },
      { name: "MIX Fold", tips: "支持使用", color: "#000000" },
      { name: "小米13", tips: "支持使用", color: "#000000" },
      { name: "小米13 Pro", tips: "支持使用", color: "#000000" },
      { name: "小米12", tips: "支持使用", color: "#000000" },
      { name: "小米12 Pro ", tips: "支持使用", color: "#000000" },
      { name: "小米12S", tips: "支持使用", color: "#000000" },
      { name: "小米12S Pro", tips: "支持使用", color: "#000000" },
      { name: "小米12S Ultra", tips: "支持使用", color: "#000000" },
      { name: "小米12x", tips: "支持使用", color: "#000000" },
      { name: "小米11", tips: "支持使用", color: "#000000" },
      { name: "小米11 Pro", tips: "支持使用", color: "#000000" },
      { name: "小米11 Ultra", tips: "支持使用", color: "#000000" },
      { name: "小米11青春版", tips: "支持使用", color: "#000000" },
      { name: "小米11 Lite 5G NE", tips: "支持使用", color: "#000000" },
      { name: "小米10", tips: "支持使用", color: "#000000" },
      { name: "小米10 Pro", tips: "支持使用", color: "#000000" },
      { name: "小米10青春版", tips: "支持使用", color: "#000000" },
      { name: "小米10s", tips: "支持使用", color: "#000000" },
      { name: "小米10至尊纪念版", tips: "支持使用", color: "#000000" },
      { name: "小米 mix4", tips: "支持使用", color: "#000000" },
      { name: "小米 Civi", tips: "支持使用", color: "#000000" },
      { name: "小米 Civi 1S", tips: "支持使用", color: "#000000" },
      { name: "小米 Civi2", tips: "支持使用", color: "#000000" },
      { name: "小米平板5 Pro 5G", tips: "支持使用", color: "#000000" },
      { name: "Redmi K5", tips: "支持使用", color: "#000000" },
      { name: "Redmi K60 Pro", tips: "支持使用", color: "#000000" },
      { name: "Redmi K60 E", tips: "支持使用", color: "#000000" },
      { name: "Redmi K50", tips: "支持使用", color: "#000000" },
      { name: "Redmi K50 Pro", tips: "支持使用", color: "#000000" },
      { name: "Redmi K50 至尊版", tips: "支持使用", color: "#000000" },
      { name: "Redmi K50 电竞版", tips: "支持使用", color: "#000000" },
      { name: "Redmi K40", tips: "支持使用", color: "#000000" },
      { name: "Redmi K40 Pro", tips: "支持使用", color: "#000000" },
      { name: "Redmi K40s", tips: "支持使用", color: "#000000" },
      { name: "Redmi K40游戏增强版", tips: "支持使用", color: "#000000" },
      { name: "Redmi K30 5G", tips: "支持使用", color: "#000000" },
      { name: "Redmi K30 Pro 5G", tips: "支持使用", color: "#000000" },
      { name: "Redmi K30至尊纪念版", tips: "支持使用", color: "#000000" },
      { name: "Redmi K30S至尊纪念版", tips: "支持使用", color: "#000000" },
      { name: "Redmi Note 9（5G）", tips: "支持使用", color: "#000000" },
      { name: "Redmi Note 9 Pro", tips: "支持使用", color: "#000000" },
      { name: "Redmi Note 10", tips: "支持使用", color: "#000000" },
      { name: "Redmi Note 10 Pro", tips: "支持使用", color: "#000000" },
      { name: "Redmi Note 11 Pro", tips: "支持使用", color: "#000000" },
      { name: "Redmi Note 11 Pro+", tips: "支持使用", color: "#000000" },
      { name: "Redmi Note 11 5G", tips: "支持使用", color: "#000000" },
      { name: "Redmi Note 11T Pro+", tips: "支持使用", color: "#000000" },
      { name: "Redmi Note 11T Pro", tips: "支持使用", color: "#000000" },
      { name: "Redmi Note 11E", tips: "支持使用", color: "#000000" },
      { name: "Redmi Note 11E Pro", tips: "支持使用", color: "#000000" },
      { name: "Redmi Note 11R", tips: "支持使用", color: "#000000" },
      { name: "Redmi Note 12 5G", tips: "支持使用", color: "#000000" },
      { name: "Redmi Note 12 Pro", tips: "支持使用", color: "#000000" },
      { name: "Redmi Note 12 Pro+", tips: "支持使用", color: "#000000" },
      { name: "Redmi Note 12 探索版", tips: "支持使用", color: "#000000" },
      { name: "Redmi 10X Pro", tips: "支持使", color: "#000000" },
      { name: "Redmi 10X 5G", tips: "支持使用", color: "#000000" },
      { name: "Redmi 10A", tips: "支持使用", color: "#000000" },
      { name: "Redmi 9A", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "vivo",
    name: "VIVO",
    tips: "",
    tipsImg: "vivo.png",
    models: [
      { name: "S16", tips: "支持使用", color: "#000000" },
      { name: "S16 Pro", tips: "支持使用", color: "#000000" },
      { name: "S16e", tips: "支持使用", color: "#000000" },
      { name: "S15", tips: "支持使用", color: "#000000" },
      { name: "S15 Pro", tips: "支持使用", color: "#000000" },
      { name: "S15e", tips: "支持使用", color: "#000000" },
      { name: "S12", tips: "支持使用", color: "#000000" },
      { name: "S12 Pro", tips: "支持使用", color: "#000000" },
      { name: "S10", tips: "支持使用", color: "#000000" },
      { name: "S10 Pro", tips: "支持使用", color: "#000000" },
      { name: "S10e", tips: "支持使用", color: "#000000" },
      { name: "S9", tips: "支持使用", color: "#000000" },
      { name: "S9e", tips: "支持使用", color: "#000000" },
      { name: "S7", tips: "支持使用", color: "#000000" },
      { name: "S7e", tips: "支持使用", color: "#000000" },
      { name: "S7t", tips: "支持使用", color: "#000000" },
      { name: "S6", tips: "支持使用6", color: "#000000" },
      { name: "Y10（t1版）", tips: "支持使用", color: "#000000" },
      { name: "Y35", tips: "支持使用", color: "#000000" },
      { name: "Y35m", tips: "支持使用", color: "#000000" },
      { name: "Y33s", tips: "支持使用", color: "#000000" },
      { name: "Y33e", tips: "支持使用", color: "#000000" },
      { name: "Y31s标准版", tips: "支持使用", color: "#000000" },
      { name: "Y31s", tips: "支持使用", color: "#000000" },
      { name: "Y31s（t1版）", tips: "支持使用", color: "#000000" },
      { name: "Y31s（t2版）", tips: "支持使用", color: "#000000" },
      { name: "Y51s", tips: "支持使用", color: "#000000" },
      { name: "Y52s", tips: "支持使用", color: "#000000" },
      { name: "Y52s（t1版）", tips: "支持使用", color: "#000000" },
      { name: "Y53s", tips: "支持使用", color: "#000000" },
      { name: "Y53s（t1版）", tips: "支持使用", color: "#000000" },
      { name: "Y53s（t2版）", tips: "支持使用", color: "#000000" },
      { name: "Y54s", tips: "支持使用", color: "#000000" },
      { name: "Y55s", tips: "支持使用", color: "#000000" },
      { name: "Y70s", tips: "支持使用", color: "#000000" },
      { name: "Y70t", tips: "支持使用", color: "#000000" },
      { name: "Y71t", tips: "支持使用", color: "#000000" },
      { name: "Y72t", tips: "支持使用", color: "#000000" },
      { name: "Y73s", tips: "支持使用", color: "#000000" },
      { name: "Y74s", tips: "支持使用", color: "#000000" },
      { name: "Y75S 5G", tips: "支持使用", color: "#000000" },
      { name: "Y76s", tips: "支持使用", color: "#000000" },
      { name: "Y76s（t1版）", tips: "支持使用", color: "#000000" },
      { name: "Y77", tips: "支持使用", color: "#000000" },
      { name: "Y77e", tips: "支持使用", color: "#000000" },
      { name: "X Fold+", tips: "支持使用", color: "#000000" },
      { name: "X Fold", tips: "支持使用", color: "#000000" },
      { name: "X Note", tips: "支持使用", color: "#000000" },
      { name: "X90", tips: "支持使用", color: "#000000" },
      { name: "X90 Pro", tips: "支持使用", color: "#000000" },
      { name: "X90 Pro+", tips: "支持使用", color: "#000000" },
      { name: "X80", tips: "支持使用", color: "#000000" },
      { name: "X80 Pro", tips: "支持使用", color: "#000000" },
      { name: "X80 Pro天玑9000版", tips: "支持使用", color: "#000000" },
      { name: "X70", tips: "支持使用", color: "#000000" },
      { name: "X70t", tips: "支持使用", color: "#000000" },
      { name: "X70 Pro", tips: "支持使用", color: "#000000" },
      { name: "X70 Pro+", tips: "支持使用", color: "#000000" },
      { name: "X60", tips: "支持使用", color: "#000000" },
      { name: "X60 Pro", tips: "支持使用", color: "#000000" },
      { name: "X60 Pro+", tips: "支持使用", color: "#000000" },
      { name: "X60t", tips: "支持使用", color: "#000000" },
      { name: "X60 曲屏版", tips: "支持使用", color: "#000000" },
      { name: "X50", tips: "支持使用", color: "#000000" },
      { name: "X50 Pro", tips: "支持使用", color: "#000000" },
      { name: "X50 Pro+", tips: "支持使用", color: "#000000" },
      { name: "X30", tips: "支持使用", color: "#000000" },
      { name: "X30 Pro", tips: "支持使用", color: "#000000" },
      { name: "Z6", tips: "支持使用", color: "#000000" },
      { name: "T1", tips: "支持使用", color: "#000000" },
      { name: "T1x", tips: "支持使用", color: "#000000" },
      { name: "T2x", tips: "支持使用", color: "#000000" },
      { name: "NEX 3S", tips: "支持使用", color: "#000000" },
      { name: "G1", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "oppo",
    name: "OPPO",
    tips: "",
    tipsImg: "oppo.jpg",
    models: [
      { name: "Find N2", tips: "支持使用", color: "#000000" },
      { name: "Find N2 Flip", tips: "支持使用", color: "#000000" },
      { name: "Find N", tips: "支持使用", color: "#000000" },
      { name: "Find X5", tips: "支持使用", color: "#000000" },
      { name: "Find X5 Pro（高通版）", tips: "支持使用", color: "#000000" },
      { name: "Find X5 Pro（天玑版）", tips: "支持使用", color: "#000000" },
      { name: "Find X3", tips: "支持使用", color: "#000000" },
      { name: "Find X3 Pro", tips: "支持使用", color: "#000000" },
      { name: "Find X3 Pro摄影师版", tips: "支持使用", color: "#000000" },
      { name: "Find X2", tips: "支持使用", color: "#000000" },
      { name: "Find X2 Pro", tips: "支持使用", color: "#000000" },
      { name: "Reno9 5G", tips: "支持使用", color: "#000000" },
      { name: "Reno9 Pro 5G", tips: "支持使用", color: "#000000" },
      { name: "Reno9 Pro+ 5G", tips: "支持使用", color: "#000000" },
      { name: "Reno8", tips: "支持使用", color: "#000000" },
      { name: "Reno8 Pro", tips: "支持使用", color: "#000000" },
      { name: "Reno8 Pro+", tips: "支持使用", color: "#000000" },
      { name: "Reno7", tips: "支持使用", color: "#000000" },
      { name: "Reno7 Pro", tips: "支持使用", color: "#000000" },
      { name: "Reno7 SE", tips: "支持使用", color: "#000000" },
      { name: "Reno6", tips: "支持使用", color: "#000000" },
      { name: "Reno6 Pro", tips: "支持使用", color: "#000000" },
      { name: "Reno6 Pro+", tips: "支持使用", color: "#000000" },
      { name: "Reno5", tips: "支持使用", color: "#000000" },
      { name: "Reno5K", tips: "支持使用", color: "#000000" },
      { name: "Reno5 Pro", tips: "支持使用", color: "#000000" },
      { name: "Reno5 Pro+", tips: "支持使用", color: "#000000" },
      { name: "Reno4", tips: "支持使用", color: "#000000" },
      { name: "Reno4 Pro", tips: "支持使用", color: "#000000" },
      { name: "Reno4SE", tips: "支持使用", color: "#000000" },
      { name: "Reno3", tips: "支持使用", color: "#000000" },
      { name: "Reno3 Pro", tips: "支持使用", color: "#000000" },
      { name: "Reno3 元气版", tips: "支持使用", color: "#000000" },
      { name: "ACE2", tips: "支持使用", color: "#000000" },
      { name: "A97 5G", tips: "支持使用", color: "#000000" },
      { name: "A96 5G（PFUM10版本）", tips: "支持使用", color: "#000000" },
      { name: "A96 5G（PHA120版本）", tips: "支持使用", color: "#000000" },
      { name: "A95 5G", tips: "支持使用", color: "#000000" },
      { name: "A93 5G", tips: "支持使用", color: "#000000" },
      { name: "A93s 5G", tips: "支持使用", color: "#000000" },
      { name: "A92s 5G", tips: "支持使用", color: "#000000" },
      { name: "A72 5G", tips: "支持使用", color: "#000000" },
      { name: "A58 5G", tips: "支持使用", color: "#000000" },
      { name: "A57 5G", tips: "支持使用", color: "#000000" },
      { name: "A56 5G", tips: "支持使用", color: "#000000" },
      { name: "A55 5G", tips: "支持使用", color: "#000000" },
      { name: "A55s 5G", tips: "支持使用", color: "#000000" },
      { name: "A53 5G", tips: "支持使用", color: "#000000" },
      { name: "A1 Pro 5G", tips: "支持使用", color: "#000000" },
      { name: "K10", tips: "支持使用", color: "#000000" },
      { name: "K10 Pro", tips: "支持使用", color: "#000000" },
      { name: "K10x", tips: "支持使用", color: "#000000" },
      { name: "K10 活力版", tips: "支持使用", color: "#000000" },
      { name: "K9", tips: "支持使用", color: "#000000" },
      { name: "K9 Pro", tips: "支持使用", color: "#000000" },
      { name: "K9s", tips: "支持使用", color: "#000000" },
      { name: "K9x", tips: "支持使用", color: "#000000" },
      { name: "K7", tips: "支持使用", color: "#000000" },
      { name: "K7x", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "honour",
    name: "荣耀",
    tips: "",
    tipsImg: "honour.png",
    models: [
      { name: "Magic 4", tips: "支持使用", color: "#000000" },
      { name: "Magic 4 Pro", tips: "支持使用", color: "#000000" },
      { name: "Magic 4 至臻版", tips: "支持使用", color: "#000000" },
      { name: "Magic 3", tips: "支持使用", color: "#000000" },
      { name: "Magic 3 Pro", tips: "支持使用", color: "#000000" },
      { name: "Magic 3 至臻版", tips: "支持使用", color: "#000000" },
      { name: "Magic 2", tips: "支持使用", color: "#000000" },
      { name: "Magic V", tips: "支持使用", color: "#000000" },
      { name: "Magic Vs", tips: "支持使用", color: "#000000" },
      { name: "Magic Vs至臻版", tips: "支持使用", color: "#000000" },
      { name: "80", tips: "支持使用", color: "#000000" },
      { name: "80 SE", tips: "支持使用", color: "#000000" },
      { name: "80 Pro", tips: "支持使用", color: "#000000" },
      { name: "80 GT", tips: "支持使用", color: "#000000" },
      { name: "70", tips: "支持使用", color: "#000000" },
      { name: "70 Pro", tips: "支持使用", color: "#000000" },
      { name: "70 Pro+", tips: "支持使用", color: "#000000" },
      { name: "60", tips: "支持使用", color: "#000000" },
      { name: "60 Pro", tips: "支持使用", color: "#000000" },
      { name: "60SE", tips: "支持使用", color: "#000000" },
      { name: "50", tips: "支持使用", color: "#000000" },
      { name: "50 pro", tips: "支持使用", color: "#000000" },
      { name: "50SE", tips: "支持使用", color: "#000000" },
      { name: "30", tips: "支持使用", color: "#000000" },
      { name: "30S", tips: "支持使用", color: "#000000" },
      { name: "30 Pro", tips: "支持使用", color: "#000000" },
      { name: "30 Pro+", tips: "支持使用", color: "#000000" },
      { name: "20", tips: "支持使用", color: "#000000" },
      { name: "20 Pro", tips: "支持使用", color: "#000000" },
      { name: "20S", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
      { name: "20青春版", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
      { name: "20i", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
      { name: "10", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
      { name: "10青春版", tips: "支持使用（鸿蒙3.0版本）", color: "#000000" },
      { name: "畅玩40Plus", tips: "支持使用", color: "#000000" },
      { name: "畅玩30", tips: "支持使用", color: "#000000" },
      { name: "畅玩30 Plus", tips: "支持使用", color: "#000000" },
      { name: "畅玩20", tips: "支持使用", color: "#000000" },
      { name: "畅玩20 Pro", tips: "支持使用", color: "#000000" },
      { name: "X40", tips: "支持使用", color: "#000000" },
      { name: "X40i", tips: "支持使用", color: "#000000" },
      { name: "X40 GT", tips: "支持使用", color: "#000000" },
      { name: "X30", tips: "支持使用", color: "#000000" },
      { name: "X30 Max", tips: "支持使用", color: "#000000" },
      { name: "X30i", tips: "支持使用", color: "#000000" },
      { name: "X20", tips: "支持使用", color: "#000000" },
      { name: "X20 SE", tips: "支持使用", color: "#000000" },
      { name: "X10", tips: "支持使用", color: "#000000" },
      { name: "8X", tips: "支持使用", color: "#000000" },
      { name: "9X", tips: "支持使用", color: "#000000" },
      { name: "Play6T", tips: "支持使用", color: "#000000" },
      { name: "Play6T Pro", tips: "支持使用", color: "#000000" },
      { name: "Play6C", tips: "支持使用", color: "#000000" },
      { name: "Play5", tips: "支持使用", color: "#000000" },
      { name: "Play5 活力版", tips: "支持使用", color: "#000000" },
      { name: "Play5T", tips: "支持使用", color: "#000000" },
      { name: "Play5T Pro", tips: "支持使用", color: "#000000" },
      { name: "Play5T 活力版", tips: "支持使用", color: "#000000" },
      { name: "Play4 Pro 红外测温版", tips: "支持使用", color: "#000000" },
      { name: "Play4 Pro", tips: "支持使用", color: "#000000" },
      { name: "Play4T Pro", tips: "支持使用", color: "#000000" },
      { name: "Play3", tips: "支持使用", color: "#000000" },
      { name: "V40", tips: "支持使用", color: "#000000" },
      { name: "V40轻奢版", tips: "支持使用", color: "#000000" },
      { name: "V30", tips: "支持使用", color: "#000000" },
      { name: "V30 Pro", tips: "支持使用", color: "#000000" },
      { name: "V20", tips: "支持使用", color: "#000000" },
      { name: "V10", tips: "支持使用", color: "#000000" },
      { name: "V7", tips: "支持使用", color: "#000000" },
      { name: "V7 Pro", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "realme",
    name: "真我",
    tips: "",
    tipsImg: "realme.png",
    models: [
      { name: "真我GT2 Pro", tips: "支持使用", color: "#000000" },
      { name: "真我GT2", tips: "支持使用", color: "#000000" },
      { name: "真我GT2大师探索版", tips: "支持使用", color: "#000000" },
      { name: "真我GT", tips: "支持使用", color: "#000000" },
      { name: "真我GT大师版", tips: "支持使用", color: "#000000" },
      { name: "真我GT大师探索版", tips: "支持使用", color: "#000000" },
      { name: "真我GT Neo", tips: "支持使用", color: "#000000" },
      { name: "真我GT Neo闪速版", tips: "支持使用", color: "#000000" },
      { name: "真我GT Neo5 150W", tips: "支持使用", color: "#000000" },
      { name: "真我GT Neo5 240W", tips: "支持使用", color: "#000000" },
      { name: "真我GT Neo3", tips: "支持使用", color: "#000000" },
      { name: "真我GT Neo3 150W", tips: "支持使用", color: "#000000" },
      { name: "真我GT Neo2T", tips: "支持使用", color: "#000000" },
      { name: "真我GT Neo2", tips: "支持使用", color: "#000000" },
      { name: "真我Q5 Pro", tips: "支持使用", color: "#000000" },
      { name: "真我Q5", tips: "支持使用", color: "#000000" },
      { name: "真我Q5i", tips: "支持使用", color: "#000000" },
      { name: "真我Q5狂欢版", tips: "支持使用", color: "#000000" },
      { name: "真我Q3", tips: "支持使用", color: "#000000" },
      { name: "真我Q3i", tips: "支持使用", color: "#000000" },
      { name: "真我Q3 Pro", tips: "支持使用", color: "#000000" },
      { name: "真我Q3 Pro狂欢版", tips: "支持使用", color: "#000000" },
      { name: "真我Q3S", tips: "支持使用", color: "#000000" },
      { name: "真我Q3t", tips: "支持使用", color: "#000000" },
      { name: "真我Q2 Pro", tips: "支持使用", color: "#000000" },
      { name: "真我Q2", tips: "支持使用", color: "#000000" },
      { name: "真我V30t", tips: "支持使用", color: "#000000" },
      { name: "真我V30", tips: "支持使用", color: "#000000" },
      { name: "真我V25", tips: "支持使用", color: "#000000" },
      { name: "真我V23", tips: "支持使用", color: "#000000" },
      { name: "真我V23i", tips: "支持使用", color: "#000000" },
      { name: "真我V20", tips: "支持使用", color: "#000000" },
      { name: "真我V15", tips: "支持使用", color: "#000000" },
      { name: "真我V13", tips: "支持使用", color: "#000000" },
      { name: "真我V11", tips: "支持使用", color: "#000000" },
      { name: "真我V11s", tips: "支持使用", color: "#000000" },
      { name: "真我V5", tips: "支持使用", color: "#000000" },
      { name: "真我X7 Pro", tips: "支持使用", color: "#000000" },
      { name: "真我X7 Pro至尊版", tips: "支持使用", color: "#000000" },
      { name: "真我X7", tips: "支持使用", color: "#000000" },
      { name: "真我X50 Pro", tips: "支持使用", color: "#000000" },
      { name: "真我X50 Pro玩家版", tips: "支持使用", color: "#000000" },
      { name: "10", tips: "支持使用", color: "#000000" },
      { name: "10 Pro", tips: "支持使用", color: "#000000" },
      { name: "10 Pro+", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "zte",
    name: "中兴",
    tips: "",
    tipsImg: "zte.png",
    models: [
      { name: "Axon 40 Pro", tips: "支持使用", color: "#000000" },
      { name: "Axon 40 Ultra", tips: "支持使用", color: "#000000" },
      { name: "Axon 30 Pro", tips: "支持使用", color: "#000000" },
      { name: "畅行30", tips: "支持使用", color: "#000000" },
      { name: "远航30", tips: "支持使用", color: "#000000" },
      { name: "远航30 Pro", tips: "支持使用", color: "#000000" },
      { name: "远航30 Pro畅行版", tips: "支持使用", color: "#000000" },
      { name: "远航30 Pro+", tips: "支持使用", color: "#000000" },
      { name: "远航30S", tips: "支持使用", color: "#000000" },
      { name: "远航10", tips: "支持使用", color: "#000000" },
      { name: "远航40 Pro+", tips: "支持使用", color: "#000000" },
      { name: "CPE产品:MC801A1", tips: "支持使用", color: "#000000" },
      { name: "CPE产品:MC8020", tips: "支持使用", color: "#000000" },
      { name: "CPE产品:MC888S", tips: "支持使用", color: "#000000" },
      { name: "CPE产品: MC7010", tips: "支持使用", color: "#000000" },
      { name: "CPE产品: MC801A", tips: "支持使用", color: "#000000" },
      { name: "CPE产品:MF293R", tips: "支持使用", color: "#000000" },
      { name: "CPE产品:MF293N", tips: "支持使用", color: "#000000" },
      { name: "CPE产品:MF285N", tips: "支持使用", color: "#000000" },
      { name: "CPE产品:MC6000", tips: "支持使用", color: "#000000" },
      { name: "CPE产品:MC6010", tips: "支持使用", color: "#000000" },
      { name: "随身WiFi: MF932", tips: "支持使用", color: "#000000" },
      { name: "随身WiFi:MU5001", tips: "支持使用", color: "#000000" },
      { name: "随身WiFi:MU5002", tips: "支持使用", color: "#000000" },
      { name: "UFI产品：MF79U", tips: "支持使用", color: "#000000" },
      { name: "UFI产品：MF79N", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "moto",
    name: "摩托罗拉",
    tips: "",
    models: [
      { name: "Moto razr 2022", tips: "支持使用", color: "#000000" },
      { name: "Moto X30 Pro", tips: "支持使用", color: "#000000" },
      { name: "Moto S30 Pro", tips: "支持使用", color: "#000000" },
      { name: "Moto G71s", tips: "支持使用", color: "#000000" },
      { name: "Moto G53", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "sumsung",
    name: "三星",
    tips: "",
    tipsImg: "sumsung.png",
    models: [
      { name: "Galaxy S21FE 5G（SM-G9900）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy S22 Ultra （SM-S9080）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy S22 + （SM-S9060）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy S22 （SM-S9010）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy S21 Ultra 5G（SM-G9980）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy S21+ 5G（SM-G9960）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy S21 5G（SM-G9910）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy Z Flip4（SM-F7210）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy Z Flip3 5G（SM-F7110）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy Z Flip 5G（SM-F7070）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy Z Flip（SM-F7000）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy Z Fold4（SM-F9360）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy Z Fold3 5G（SM-F9260）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy Z Flip2 5G（SM-F9160）", tips: "支持使用", color: "#000000" },
      { name: "心系天下W23（SM-W9023）", tips: "支持使用", color: "#000000" },
      { name: "心系天下W23 Flip（SM-W7023）", tips: "支持使用", color: "#000000" },
      { name: "心系天下W22 5G（SM-W2022）", tips: "支持使用", color: "#000000" },
      { name: "心系天下W21 5G（SM-W2021）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy A51 5G（SM-A5160）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy A52 5G（SM-A5260）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy A53 5G（SM-A5360）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy A71 5G（SM-A7160）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy F52 5G（SM-E5260）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy Tab S8（SM-X706C）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy Tab S8+（SM-X806C）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy Tab S8 Ultra（SM-X906C）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy Tab S7 FE（SM-T735C）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy Tab S7 Lite（SM-T225C）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy Tab S6 Lite（SM-P615C）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy Tab A8（SM-X205C）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy S20（SM-G9810）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy S20+（SM-G9860）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy S20Ultra（SM-G9880）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy S20 FE（SM-G7810）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy Note20（SM-N9810）", tips: "支持使用", color: "#000000" },
      { name: "Galaxy Note20+（SM-N9860）", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "hinova",
    name: "Hi Nova",
    tips: "",
    models: [
      { name: "Hi Nova 9", tips: "支持使用", color: "#000000" },
      { name: "Hi Nova 9Pro", tips: "支持使用", color: "#000000" },
      { name: "Hi Nova 9SE", tips: "支持使用", color: "#000000" },
      { name: "Hi Nova 10", tips: "支持使用", color: "#000000" },
      { name: "Hi Nova 10Pro", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "dingqiao",
    name: "鼎桥",
    tips: "",
    models: [
      { name: "TD Tech M40", tips: "支持使用", color: "#000000" },
      { name: "TD Tech P50", tips: "支持使用", color: "#000000" },
      { name: "TD Tech N8 Pro", tips: "支持使用", color: "#000000" },
      { name: "CPE产品:IC5980", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "iqoo",
    name: "iQOO",
    tips: "",
    tipsImg: "vivo.png",
    models: [
      { name: "iQOO U5", tips: "支持使用", color: "#000000" },
      { name: "iQOO U5e", tips: "支持使用", color: "#000000" },
      { name: "iQOO 11", tips: "支持使用", color: "#000000" },
      { name: "iQOO 10", tips: "支持使用", color: "#000000" },
      { name: "iQOO 10 Pro", tips: "支持使用", color: "#000000" },
      { name: "iQOO 9 Pro", tips: "支持使用", color: "#000000" },
      { name: "iQOO 9", tips: "支持使用", color: "#000000" },
      { name: "iQOO 8", tips: "支持使用", color: "#000000" },
      { name: "iQOO 8 Pro", tips: "支持使用", color: "#000000" },
      { name: "iQOO 7", tips: "支持使用", color: "#000000" },
      { name: "iQOO 5", tips: "支持使用", color: "#000000" },
      { name: "iQOO 5 Pro", tips: "支持使用", color: "#000000" },
      { name: "iQOO 3", tips: "支持使用", color: "#000000" },
      { name: "iQOO Neo7", tips: "支持使用", color: "#000000" },
      { name: "iQOO Neo7 SE", tips: "支持使用", color: "#000000" },
      { name: "iQOO Neo7 竞速版", tips: "支持使用", color: "#000000" },
      { name: "iQOO Neo6", tips: "支持使用", color: "#000000" },
      { name: "iQOO Neo6 SE", tips: "支持使用", color: "#000000" },
      { name: "iQOO Neo5", tips: "支持使用", color: "#000000" },
      { name: "iQOO Neo5S", tips: "支持使用", color: "#000000" },
      { name: "iQOO Neo5 SE", tips: "支持使用", color: "#000000" },
      { name: "iQOO Neo5 活力版", tips: "支持使用", color: "#000000" },
      { name: "iQOO Neo3", tips: "支持使用", color: "#000000" },
      { name: "iQOO U3", tips: "支持使用", color: "#000000" },
      { name: "iQOO U3x", tips: "支持使用", color: "#000000" },
      { name: "iQOO Z6", tips: "支持使用", color: "#000000" },
      { name: "iQOO Z6x", tips: "支持使用", color: "#000000" },
      { name: "iQOO Z5", tips: "支持使用", color: "#000000" },
      { name: "iQOO Z5x", tips: "支持使用", color: "#000000" },
      { name: "iQOO Z3", tips: "支持使用", color: "#000000" },
      { name: "iQOO Z1", tips: "支持使用", color: "#000000" },
      { name: "iQOO Z1x", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "oneplus",
    name: "一加",
    tips: "",
    tipsImg: "oneplus.jpg",
    models: [
      { name: "一加 11", tips: "支持使用", color: "#000000" },
      { name: "一加 10 Pro", tips: "支持使用", color: "#000000" },
      { name: "一加 9 Pro", tips: "支持使用", color: "#000000" },
      { name: "一加 9", tips: "支持使用", color: "#000000" },
      { name: "一加 9R", tips: "支持使用", color: "#000000" },
      { name: "一加 9RT", tips: "支持使用", color: "#000000" },
      { name: "一加 8", tips: "支持使用", color: "#000000" },
      { name: "一加 8T", tips: "支持使用", color: "#000000" },
      { name: "一加 8 Pro", tips: "支持使用", color: "#000000" },
      { name: "一加 ACE", tips: "支持使用", color: "#000000" },
      { name: "一加 ACE Pro", tips: "支持使用", color: "#000000" },
      { name: "一加 ACE竞速版", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "nubia",
    name: "努比亚",
    tips: "",
    models: [
      { name: "nubia Z40 Pro", tips: "支持使用", color: "#000000" },
      { name: "nubia Z40S Pro", tips: "支持使用", color: "#000000" },
      { name: "nubia Z50", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "heisha",
    name: "黑鲨",
    tips: "",
    tipsImg: "heisha.png",
    models: [
      { name: "黑鲨5", tips: "支持使用", color: "#000000" },
      { name: "黑鲨5 Pro", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "hongmo",
    name: "红魔",
    tips: "",
    tipsImg: "hongmo.png",
    models: [
      { name: "红魔7S", tips: "支持使用", color: "#000000" },
      { name: "红魔7S Pro", tips: "支持使用", color: "#000000" },
      { name: "红魔7", tips: "支持使用", color: "#000000" },
      { name: "红魔7 Pro", tips: "支持使用", color: "#000000" },
      { name: "红魔6", tips: "支持使用", color: "#000000" },
      { name: "红魔6 Pro", tips: "支持使用", color: "#000000" },
      { name: "红魔6R", tips: "支持使用", color: "#000000" },
      { name: "红魔6S Pro", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "lenovo",
    name: "联想",
    tips: "",
    models: [
      { name: "拯救者Y70", tips: "支持使用", color: "#000000" },
      { name: "拯救者Y90", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "meizu",
    name: "魅族",
    tips: "",
    models: [
      { name: "18（M2181）", tips: "支持使用", color: "#000000" },
      { name: "18 Pro （M2191）", tips: "支持使用", color: "#000000" },
      { name: "18s（M2182）", tips: "支持使用", color: "#000000" },
      { name: "18s Pro（M2191）", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "coolpad",
    name: "酷派",
    tips: "",
    models: [
      { name: "酷派20", tips: "支持使用", color: "#000000" },
      { name: "酷派20 Pro", tips: "支持使用", color: "#000000" },
      { name: "酷派20s 5G", tips: "支持使用", color: "#000000" },
    ]
  },
  {
    id: "xiaotiancai",
    name: "小天才",
    tips: "小天才手表只支持4G网络，商用版本全国分批推送，如未收到升级通知，请耐心等待厂家推送",
    models: [
      { name: "Z6A", tips: "支持使用", color: "#000000" },
      { name: "Z6巅峰版", tips: "支持使用", color: "#000000" },
      { name: "Z7", tips: "支持使用", color: "#000000" },
      { name: "Z7A", tips: "支持使用", color: "#000000" },
      { name: "D1S", tips: "支持使用", color: "#000000" },
      { name: "D2", tips: "支持使用", color: "#000000" },
      { name: "D3", tips: "支持使用", color: "#000000" },
      { name: "Z8", tips: "支持使用", color: "#000000" },
      { name: "Z8少年版", tips: "支持使用", color: "#000000" },
    ]
  },
]
