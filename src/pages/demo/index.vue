<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
let echarts = require('echarts')
export default {
  data() {
    return {
      text: 'Hello World'
    }
  },
  mounted() {
    this.echartsInit()
  },
  methods: {
    echartsInit() {
      let myChart = echarts.init(document.getElementById('main'));
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例',
          link: 'https:www.baidu.com',
          textStyle: {
            color: 'red',
            fontSize: '20',
          },
          textAlign: 'left',
          left: 'center',
          top: '15'
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });

    }
  }
}
</script>
