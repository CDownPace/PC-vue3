<template>
  <!-- <div > -->
  <div class="title-wrap" v-show="currentRegion">
    <el-button @click="backBtn()">返回中国地图</el-button>
    <el-button @click="enterBtn()">跳转页面</el-button>
  </div>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
  <!-- </div> -->

</template>
<!-- 
    //:style="{ display: 'flex', height: height }" -->
<script lang="ts" setup>
import { ref } from 'vue'
import { geoJson } from '../../mock/map/map.js'
import * as echarts from 'echarts'
import { EChartsType } from 'echarts/core'
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { cityIconData, colors, geoCoordMap, value, geoGpsMap, regionMap } from './data.js'
import cityData from '../../mock/map/city.json'
const currentRegion = ref('')
const currentCity = ref('')



const router = useRouter()
const props = defineProps({
  className: {
    type: String,
    default: 'chart',
  },
  config: {
    type: Object,
    default: () => { },
  },
  id: {
    type: String,
    default: 'chart',
  },
  width: {
    type: String,
    default: '200px',
  },
  height: {
    type: String,
    default: '200px',
  },
})


var mapData = []
for (var key in geoCoordMap) {
  mapData.push({
    year: '陕西',
    name: key,
    value: value[key] / 100,
    value1: value[key] / 100,
  })
}


var convertData = function (data: []) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      })
    }
  }

  return res
}
var convertToLineData = function (data, gps) {
  console.log('res===', data, gps)
  var res = []
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i]
    var toCoord = geoCoordMap[dataItem.name]
    // debugger;
    var fromCoord = gps // 郑州
    //  var toCoord = geoGps[Math.random()*3];
    if (fromCoord && toCoord) {
      res.push([
        {
          coord: fromCoord,
          value: dataItem.value,
        },
        {
          coord: toCoord,
        },
      ])
    }
  }

  return res
}

const options = {
  tooltip: {
    trigger: 'item',
    formatter(val) {
      // console.log('val==========',val)
    },
  },
  backgroundColor: '#001540',// 设置背景色
  geo: {
    show: true,
    map: 'china',
    roam: true,
    zoom: 1,
    center: [101.4038, 36.8207],
    label: {
      emphasis: {
        show: false,
      },
    },

    //地图模块的样式
    itemStyle: {
      normal: {
        borderColor: 'rgba(147, 235, 248, 1)',
        borderWidth: 1,
        areaColor: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
        shadowColor: 'rgba(128, 217, 248, 1)',
        // shadowColor: 'rgba(255, 255, 255, 1)',
        shadowOffsetX: -2,
        shadowOffsetY: 2,
        shadowBlur: 10,
      },
      emphasis: {
        areaColor: '#389BB7',
        borderWidth: 0,
      },
    },
  },
  series: [// 地图点击以后的样式
    {
      type: 'map',
      map: 'china',
      geoIndex: 0,
      aspectScale: 0.75, // 长宽比
      showLegendSymbol: false, // 存在legend时显示
      label: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
          textStyle: {
            color: '#fff',
          },
        },
      },

      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#031525',
          borderColor: '#FFFFFF',
        },
        emphasis: {
          areaColor: '#2B91B7',
        },
      },
      animation: false,
    },
    {
      //  name: 'Top 5',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: convertData(
        mapData.sort(function (a, b) {
          return b.value - a.value
        })
      ),
      // //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
      symbolSize: function (val) {
        return val[2] / 15
      },
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke',
      },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true,
        },
      },
      itemStyle: {
        normal: {
          color: colors,
          shadowBlur: 10,
          shadowColor: colors,
        },
      },
      zlevel: 1,
    },
    //地图线的动画效果
    // {
    //   type: 'lines',
    //   zlevel: 2,
    //   effect: {
    //     show: true,
    //     period: 4, // 箭头指向速度，值越小速度越快
    //     trailLength: 0.02, // 特效尾迹长度[0,1]值越大，尾迹越长重
    //     symbol: 'arrow', // 箭头图标
    //     symbolSize: 3, // 图标大小
    //   },
    //   lineStyle: {
    //     normal: {
    //       color: colors,
    //       width: 0.1, // 尾迹线条宽度
    //       opacity: 0.5, // 尾迹线条透明度
    //       curveness: 0.3, // 尾迹线条曲直度
    //     },
    //   },
    //   data: convertToLineData(mapData, geoGpsMap),
    // },
    {
      type: 'scatter',
      zlevel: 16,
      coordinateSystem: 'geo',
      symbolSize: 30,
      symbol: `image://${'logo'}`,
      data: cityIconData,
      rippleEffect: {
        period: 4,
        brushType: 'stroke',
        scale: 4,
      },
      tooltip: {
        trigger: 'item',
        padding: 0,
        borderColor: 'black',
        background: 'rgba(0,0,0,0.7)',
        textStyle: {
          fontSize: 20,
        },
        formatter(val) {
          let tipHtml = `
                     <div class="m-info" style=" opacity: 0.95;background: rgba(25,27,29,1);" >
                         <div class="title" style="padding-left: 12px;
                         padding-top: 10px;
                         padding-bottom: 10px;
                         background: rgba(25,27,29,1);font-size: 20px;color: white;padding-right: 20px">${val.name}</div>
<!--                         <div class="content" style=" padding: 12px; background: rgba(0,2,4,1);">-->
          <!--                               <div style=" font-size: 22px; color: #ff0000;">258944</div>-->
          <!--                        </div>-->
          </div>`
          return tipHtml
        },
      },
    },]
}
const options2 = {
  tooltip: {
    trigger: 'item',
    formatter(val) {
      // console.log('val==========',val)
    },
  },
  backgroundColor: '#001540',// 设置背景色
  geo: {
    show: true,
    map: 'china',
    roam: true,
    zoom: 1,
    center: [101.4038, 36.8207],
    label: {
      emphasis: {
        show: false,
      },
    },

    //地图模块的样式
    itemStyle: {
      normal: {
        borderColor: 'rgba(147, 235, 248, 1)',
        borderWidth: 1,
        areaColor: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
        shadowColor: 'rgba(128, 217, 248, 1)',
        // shadowColor: 'rgba(255, 255, 255, 1)',
        shadowOffsetX: -2,
        shadowOffsetY: 2,
        shadowBlur: 10,
      },
      emphasis: {
        areaColor: '#389BB7',
        borderWidth: 0,
      },
    },
  },
  series:
    [
      {
        type: 'map',
        map: 'china',
        geoIndex: 0,
        aspectScale: 0.75, // 长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
          normal: {
            show: true,
          },
          emphasis: {
            // show: false,
            textStyle: {
              color: '#fff',
            },
          },
        },

        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#031525',
            borderColor: '#FFFFFF',
          },
          emphasis: {
            areaColor: '#2B91B7',
          },
        },
        animation: false,
      }

    ]
}




let chart: EChartsType
const initChart = (geoJson, options1) => {
  echarts.registerMap('china', geoJson)

  const chart = echarts.init(document.getElementById(props.id))
  chart.setOption(options1)
  return chart
}
const initData = (geoJson: any, options: any) => {
  chart = initChart(geoJson, options)
  window.addEventListener('resize', function () {
    chart && chart.resize()
  })
}
const ClickFn = () => {
  initData(geoJson, options)
  chart.on('click', function (params) {
    console.log('params----', params?.data?.name)
    let chooseName = regionMap.filter((item: any) => {
      //我们根据名字来判断是否选择一种
      return item.title == params?.data?.name;
    });
    console.log('chooseName----', chooseName)
    if (chooseName.length) {
      chart.clear()
      // chart = initChart(chooseName[0].value, options2)
      // window.addEventListener('resize', function () {
      //   chart && chart.resize()
      // })
      initData(chooseName[0].value, options2)
      currentRegion.value = chooseName[0].name
    } else {
      // router.push({ path: '/other/yunnan/dali' })
      let cityEn = getCityEn(params?.data?.name)

      currentCity.value = cityEn[0]?.en
    }


  })
}
const backBtn = () => {
  chart.clear()
  currentRegion.value = ''
  initData(geoJson, options)
}
const enterBtn = () => {
  console.log('跳转-----', currentRegion.value, currentCity.value)
  router.push({ path: `/other/${currentRegion.value}/${currentCity.value}` })
}
onMounted(() => {

  ClickFn()
})
const getCityEn = (val: string) => {
  console.log('cityData---', cityData)
  return cityData.filter((item: any) => {
    //我们根据名字来判断是否选择一种
    return item.ch == val;
  });
}
</script>
<style>
.title-wrap {
  /* width: 100%; */
  height: 50px;
  background-color: #001540;
  position: fixed;
  z-index: 100000;
  margin: 20px;
}
</style>