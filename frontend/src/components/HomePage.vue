<template>
    <a-layout-header><HeaderComponent title="aaaaa"></HeaderComponent></a-layout-header>
    <a-layout-content>
        <!-- <div ref="chart" id="chart" :style="{ width: '1200px', height: '400px' }"></div> -->
        <div ref="chart" id="chart" :style="{ width: auto, height: '400px' }"></div>
    </a-layout-content>
    <a-layout-footer><FooterComponent></FooterComponent></a-layout-footer>    
</template>
  
<script>
import * as echarts from 'echarts';
import HeaderComponent from "@/components/HeaderComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue"

export default {

    components: {
        HeaderComponent, FooterComponent
    },

    data() {
        return {

            title: "Quant行情面板",

            options: {
                title: {
                    text: 'Stacked Line'
                },
                tooltip: {
                    trigger: 'axis'
                },
                backgroundColor: '#17171A',
                legend: {
                    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                    saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    name: 'Email',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                    name: 'Union Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                    name: 'Video Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                    name: 'Direct',
                    type: 'line',
                    stack: 'Total',
                    data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                    name: 'Search Engine',
                    type: 'line',
                    stack: 'Total',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            }
        }
    },

    mounted() {
        const chart = this.$refs.chart
        const myChart = echarts.init(chart)
        myChart.setOption(this.options)
    }
}
</script>
    