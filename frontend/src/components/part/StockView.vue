<template>
    <div style="margin-bottom: 20px;">
        <template v-if="websocketState === 'connected'">
            <el-text class="mx-2" type="success">行情状态</el-text>
            <el-icon><CircleCheck color="green"/></el-icon>
        </template>
        <template v-else>
            <el-text class="mx-2" type="danger">行情状态</el-text>
            <el-icon><CircleClose color="red"/></el-icon>
        </template>

        <el-text class="mx-2" type="info">交易所</el-text>
        <el-text class="mx-2" type="primary">{{ exchange }}</el-text>

        <el-text class="mx-2" type="info">标的</el-text>
        <el-text class="mx-2" type="primary">{{ symbol }}</el-text>
    </div>

    <div>
        <el-text class="mx-2">图表</el-text>
    </div>

    <div>
        <el-text
            v-for="(item, index) in intervals"
            :key="index"
            class="interval"
            :class="{ 'el-text--warning': selectedInterval === item, 'el-text--info': selectedInterval !== item }"
            @click="change_interval(item)">
            {{ item }}
        </el-text>
    </div>

    <div ref="chart" style="width: 600px; height: 400px;"></div>
</template>
  
<script setup lang="ts">
import { ElIcon } from 'element-plus';
import { reactive, ref, onMounted, watch } from 'vue';
import { useWebSocket } from '../../javascript/websocket';
import * as echarts from 'echarts';

const exchange = ref("Bybit");
const symbol = ref("BTCUSDT");

const intervals = ['ticker', '1m', '5m', '15m', '30m', '1h', '4h', '1d', '1w', '1M'];

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
        grid: {
            left: '10px',
            right: '10px',
            top: '10px',
            bottom: '10px',
            containLabel: true
        },
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

const selectedInterval = ref('ticker');

const change_interval = (interval: string) => {
    selectedInterval.value = interval;
};

</script>

<style>
.div {
    display: flex;
    align-items: center;
    margin-left: 40px;
}

.el-icon, .el-text {
    margin-left: 10px;
}
</style>