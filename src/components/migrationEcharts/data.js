import heilongjiang from '../../mock/map/heilongjiang.json'
import taiwan from '../../mock/map/taiwan.json'
import neimenggu from '../../mock/map/neimenggu.json'
import jilin from '../../mock/map/jilin.json'
import liaoning from '../../mock/map/liaoning.json'
import hebei from '../../mock/map/hebei.json'
import shanxi from '../../mock/map/shanxi.json'
import shaanxi from '../../mock/map/shaanxi.json'
import gansu from '../../mock/map/gansu.json'
import ningxia from '../../mock/map/ningxia.json'
import qinghai from '../../mock/map/qinghai.json'
import xinjiang from '../../mock/map/xinjiang.json'
import xizang from '../../mock/map/xizang.json'
import sichuan from '../../mock/map/sichuan.json'
import chongqing from '../../mock/map/chongqing.json'
import shandong from '../../mock/map/shandong.json'
import henan from '../../mock/map/henan.json'
import jiangsu from '../../mock/map/jiangsu.json'
import anhui from '../../mock/map/anhui.json'
import hubei from '../../mock/map/hubei.json'
import zhejiang from '../../mock/map/zhejiang.json'
import fujian from '../../mock/map/fujian.json'
import jiangxi from '../../mock/map/jiangxi.json'
import hunan from '../../mock/map/hunan.json'
import guizhou from '../../mock/map/guizhou.json'
import yunnan from '../../mock/map/yunnan.json'
import guangdong from '../../mock/map/guangdong.json'
// import guangxi from '../../mock/map/guangxi.json'

export const cityIconData = [
  {
    adcode: 650000,
    name: '新疆维吾尔自治区',
    value: [88.999903, 43.607078],
  },
  {
    // adcode: 150000,
    name: '内蒙古自治区',
    value: [119.24787, 42.205741],
  },
  ,
  {
    // adcode: 150000,
    name: '内蒙古自治区',
    value: [110.627161, 41.16628],
  },
  {
    // adcode: 540000,
    name: '西藏自治区',
    value: [89.483714, 30.251951],
  },
  {
    // adcode: 630000,
    name: '青海省',
    value: [102.064693, 37.084008],
  },
  {
    // adcode: 530000,
    name: '云南省',
    value: [102.187665, 25.083688],
  },
  {
    // adcode: 610000,
    name: '陕西省',
    value: [109.20663, 35.018625],
  },
]

export const colors = '#f9b207';


export const geoCoordMap = {
  //地名跟坐标
  '台湾': [120, 23],
  '黑龙江': [128, 48],
  '内蒙古': [110.3467, 41.4899],
  "吉林": [125.8154, 44.2584],
  '北京市': [116.4551, 40.2539],
  "辽宁": [123.1238, 42.1216],
  "河北": [114.4995, 38.1006],
  // "天津": [117.4219, 39.4189],
  "山西": [112.3352, 37.9413],
  "陕西": [109.1162, 34.2004],
  "甘肃": [103.5901, 36.3043],
  "宁夏": [106.3586, 38.1775],
  "青海": [97.4038, 36.8207],
  "新疆": [87.9236, 43.5883],
  "西藏": [88.388277, 31.56375],
  "四川": [103.9526, 30.7617],
  "重庆": [108.384366, 30.439702],
  "山东": [117.1582, 36.8701],
  "河南": [113.4668, 34.6234],
  "江苏": [118.8062, 31.9208],
  "安徽": [117.29, 32.0581],
  "湖北": [114.3896, 30.6628],
  "浙江": [119.5313, 29.8773],
  "福建": [119.4543, 25.9222],
  "江西": [116.0046, 28.6633],
  "湖南": [113.0823, 28.2568],
  "贵州": [106.6992, 26.7682],
  "云南": [102.9199, 25.4663],
  "广东": [113.12244, 23.009505],
  "广西": [108.479, 23.1152],
  "海南": [110.3893, 19.8516],
  '上海': [121.4648, 31.2891],
};
export const value = {
  //黄色点

  江苏: 10000,
  内蒙古: 10000,
  辽宁: 10000,
  陕西: 10000,
  福建: 10000,
  甘肃: 10000,
  青海: 10000,
  新疆: 10000,
  湖北: 10000,
  浙江: 10000,
  河南: 10000,
  湖南: 10000,
  云南: 10000,
  广东: 10000,
  海南: 10000,
  西藏: 10000,
  台湾: 10000,
  黑龙江: 10000,
  北京市: 10000,
  天津: 10000,
  山西: 10000,
  安徽: 10000,
  山东: 10000,
  四川: 10000,
  广西: 10000,
  宁夏: 10000,
  重庆: 10000,
  吉林: 10000,
  贵州: 10000,
  江西: 10000

}

//引入区域地图
export const regionMap = [{
  title: '黑龙江',
  name: 'heilongjiang',
  value: heilongjiang
}, {
  title: '台湾',
  name: 'taiwan',
  value: taiwan
}, {
  title: '内蒙古',
  name: 'neimenggu',
  value: neimenggu
}, {
  title: '吉林',
  name: 'jilin',
  value: jilin
}, {
  title: '辽宁',
  name: 'liaoning',
  value: liaoning
}, {
  title: '河北',
  name: 'hebei',
  value: hebei
}, {
  title: '山西',
  name: 'shanxi',
  value: shanxi
}, {
  title: '陕西',
  name: 'shaanxi',
  value: shaanxi
}, {
  title: '甘肃',
  name: 'gansu',
  value: gansu
}, {
  title: '宁夏',
  name: 'ningxia',
  value: ningxia
}, {
  title: '青海',
  name: 'qinghai',
  value: qinghai
}, {
  title: '新疆',
  name: 'xinjiang',
  value: xinjiang
}, {
  title: '西藏',
  name: 'xizang',
  value: xizang
}, {
  title: '四川',
  name: 'sichuan',
  value: sichuan
}, {
  title: '重庆',
  name: 'chongqing',
  value: chongqing
}, {
  title: '山东',
  name: 'shandong',
  value: shandong
}, {
  title: '河南',
  name: 'henan',
  value: henan
}, {
  title: '江苏',
  name: 'jiangsu',
  value: jiangsu
}, {
  title: '安徽',
  name: 'anhui',
  value: anhui
}, {
  title: '湖北',
  name: 'hubei',
  value: hubei
}, {
  title: '浙江',
  name: 'zhejiang',
  value: zhejiang
}, {
  title: '福建',
  name: 'fujian',
  value: fujian
}, {
  title: '江西',
  name: 'jiangxi',
  value: jiangxi
}, {
  title: '湖南',
  name: 'hunan',
  value: hunan
}, {
  title: '贵州',
  name: 'guizhou',
  value: guizhou
}, {
  title: '云南',
  name: 'yunnan',
  value: yunnan
}, {
  title: '广东',
  name: 'guangdong',
  value: guangdong
}, {
  title: '广西',
  name: 'guangxi',
  value: 'guangxi'
}]

export const geoGpsMap = [123.1238, 42.1216]