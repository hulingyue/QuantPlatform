<template>
    <div ref="chart" style="width: 600px; height: 400px;"></div>
</template>
  
<script>
import * as echarts from 'echarts';
  
export default {
    mounted() {
        this.renderChart();
    },
    methods: {
        renderChart() {
            const chartDom = this.$refs.chart;
            const myChart = echarts.init(chartDom);
            const option = {
                xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                type: 'value'
                },
                series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'line'
                }]
            };
            myChart.setOption(option);
        }
    }
};
</script>
  