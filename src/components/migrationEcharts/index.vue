<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script lang="ts" setup>
import { geoJson } from './map.js'
// import geoJson  from './heilongjiang.json'
import * as echarts from 'echarts'
import { EChartsType } from 'echarts/core'
import { onMounted, onUnmounted } from 'vue'
import { cityIconData, colors, geoCoordMap, value, geoGpsMap } from './data.js'


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


var convertData = function (data) {
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
  series: [
    // 地图？
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
    // 地图点的动画效果
    {
      //  name: 'Top 5',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: convertData(
        mapData
          .sort(function (a, b) {
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
    {
      type: 'lines',
      zlevel: 2,
      effect: {
        show: true,
        period: 4, // 箭头指向速度，值越小速度越快
        trailLength: 0.02, // 特效尾迹长度[0,1]值越大，尾迹越长重
        symbol: 'arrow', // 箭头图标
        symbolSize: 3, // 图标大小
      },
      lineStyle: {
        normal: {
          color: colors,
          width: 0.1, // 尾迹线条宽度
          opacity: 0.5, // 尾迹线条透明度
          curveness: 0.3, // 尾迹线条曲直度
        },
      },
      data: convertToLineData(mapData, geoGpsMap),
    },
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
          console.log('val=======', val)
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
    },
  ],
}

echarts.registerMap('china', geoJson)

let chart: EChartsType
const initChart = () => {
  const chart = echarts.init(document.getElementById(props.id))
  chart.setOption(options)
  return chart
}
const ClickFn = () => {
  chart.on('click', function (params) {
    console.log('params----', params.data.name)
  })
}

onMounted(() => {
  chart = initChart()
  window.addEventListener('resize', function () {
    chart && chart.resize()
  })
  ClickFn()
})
</script>