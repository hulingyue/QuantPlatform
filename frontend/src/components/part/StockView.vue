<template>
    <div ref="chart" style="width: 600px; height: 400px;"></div>
    <p>WebSocket 状态: {{ websocketState }}</p>
</template>
  
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useWebSocket } from '../../javascript/websocket';
import * as echarts from 'echarts';

const chart = ref<HTMLElement | null>(null);
const markets: {[key: string]: {[key: string]: number[]}} = {}

const BTCUSDT_prices :number[] = ref([])

const { websocketState } = useWebSocket('ws://localhost:5678/', (data) => {
    const market = JSON.parse(data);

    if (!(market.exchange in markets)) {
        markets[market.exchange] = {};
    }

    if (!(market.symbol in markets[market.exchange])) {
        markets[market.exchange][market.symbol] = [];
    }

    const prices: number[] = markets[market.exchange][market.symbol];
    prices.push(market.price);

    const max_size: number = 100;
    if (prices.length >= max_size) {
        prices.splice(0, prices.length - max_size);
    } else {
        const last_price = prices[prices.length - 1];
        while (prices.length < max_size) {
            prices.push(last_price);
        }
    }

    markets[market.exchange][market.symbol] = prices;

    if (market.symbol === "BTCUSDT") {
        BTCUSDT_prices.values = prices.values;
    }
    // console.log(markets);
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
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
        type: 'value'
        },
        series: [{
        data: BTCUSDT_prices.values,
        type: 'line'
        }]
    };
    myChart.setOption(option);
}

watch(() => BTCUSDT_prices.values, (new_markets) => {
    console.log(new_markets);
    // const new_data =  new_markets;
    // option.series[0].data = new_data;
    // myChart.setOption(option);
});
</script>
  