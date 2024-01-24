<template>
    <div ref="chart" style="width: 600px; height: 400px;"></div>
    <p>WebSocket 状态: {{ websocketState }}</p>
</template>
  
<script setup lang="ts">
import { reactive, ref, onMounted, watch } from 'vue';
import { useWebSocket } from '../../javascript/websocket';
import * as echarts from 'echarts';

const chart = ref<HTMLElement | null>(null);
const markets: {[key: string]: number[]} = reactive({"BTCUSDT": reactive([]), "ETHUSDT": reactive([])})

const { websocketState } = useWebSocket('ws://localhost:5678/', (data) => {
    const market = JSON.parse(data);

    if (!(market.symbol in markets)) {
        markets[market.symbol] = reactive([]);
    }

    const prices: number[] = markets[market.symbol];
    prices.push(market.price);

    const max_size: number = 100;
    if (prices.length > max_size) {
        prices.splice(0, prices.length - max_size + 1);
    } else {
        const last_price = prices[prices.length - 1];
        while (prices.length < max_size) {
            prices.push(last_price);
        }
    }

    markets[market.symbol] = prices;
});


onMounted(() => {
    renderChart();
})

const renderChart = () => {
    if (!chart.value) { return; }
    const myChart = echarts.init(chart.value);
    const option = {
        xAxis: {
        type: 'category',
        data: [
              '', '', '', '', '', '', '', '', '', ''
            , '', '', '', '', '', '', '', '', '', ''
            , '', '', '', '', '', '', '', '', '', ''
            , '', '', '', '', '', '', '', '', '', ''
            , '', '', '', '', '', '', '', '', '', ''
            , '', '', '', '', '', '', '', '', '', ''
            , '', '', '', '', '', '', '', '', '', ''
            , '', '', '', '', '', '', '', '', '', ''
            , '', '', '', '', '', '', '', '', '', ''
            , '', '', '', '', '', '', '', '', '', ''
        ]
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 0,
            interval: 20
        },
        series: [{
            data: [] as number[],
            type: 'line'
        }]
    };
    myChart.setOption(option);

    watch(() => markets, (new_markets) => {
        const BTCUSDT = new_markets.BTCUSDT;
        option.series[0].data = BTCUSDT;
        option.series[0].type = 'line';
        
        option.yAxis.max = Math.floor((Math.max(...BTCUSDT) + 100) / 100) * 100;
        option.yAxis.min = Math.floor((Math.min(...BTCUSDT) - 100) / 100) * 100;
        myChart.setOption(option);
    }, { deep: true });
}

</script>
  